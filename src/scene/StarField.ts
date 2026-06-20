import * as THREE from 'three'
import { tempToRgb } from '../math/starColor'
import { raDecToVec3, OBLIQUITY_J2000 } from '../math/celestial'

// An accurate naked-eye star field (Yale Bright Star Catalog) as a single
// THREE.Points cloud: real RA/Dec positions, blackbody colours from each star's
// temperature, sizes/brightness from magnitude. It sits on a sphere just inside
// the Milky-Way map, follows the camera position (effective infinity), and is
// rotated equatorial→ecliptic to share the scene's frame. depthTest off (always
// behind everything); no logarithmic-depth chunks needed.

const RADIUS = 8500

export async function createStarField(baseUrl: string): Promise<THREE.Points> {
  const res = await fetch(`${baseUrl}data/stars.bin`)
  const data = new Float32Array(await res.arrayBuffer())
  const n = data.length / 4

  const positions = new Float32Array(n * 3)
  const colors = new Float32Array(n * 3)
  const sizes = new Float32Array(n)

  for (let i = 0; i < n; i++) {
    const ra = data[i * 4]
    const dec = data[i * 4 + 1]
    const mag = data[i * 4 + 2]
    const temp = data[i * 4 + 3]

    const v = raDecToVec3(ra, dec, RADIUS)
    positions[i * 3] = v.x
    positions[i * 3 + 1] = v.y
    positions[i * 3 + 2] = v.z

    const [r, g, b] = tempToRgb(temp)
    const bright = Math.min(1.3, Math.max(0.35, (6.5 - mag) / 6 + 0.4))
    colors[i * 3] = r * bright
    colors[i * 3 + 1] = g * bright
    colors[i * 3 + 2] = b * bright

    sizes[i] = Math.min(6, Math.max(1, 1 + (6.5 - mag) * 0.55))
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geo.setAttribute('aColor', new THREE.BufferAttribute(colors, 3))
  geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

  const material = new THREE.ShaderMaterial({
    uniforms: { uPixelRatio: { value: Math.min(window.devicePixelRatio, 1.5) } },
    vertexShader: `
      attribute vec3 aColor;
      attribute float size;
      uniform float uPixelRatio;
      varying vec3 vColor;
      void main() {
        vColor = aColor;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * uPixelRatio;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.1, d);
        gl_FragColor = vec4(vColor, a);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthTest: false,
    depthWrite: false,
  })

  const points = new THREE.Points(geo, material)
  points.rotation.x = -OBLIQUITY_J2000 // equatorial J2000 → ecliptic frame
  points.renderOrder = -0.5 // over the Milky-Way map (-1), under the bodies (0)
  points.frustumCulled = false
  return points
}
