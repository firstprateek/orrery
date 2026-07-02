import * as THREE from 'three'

// A back-face Fresnel rim shell that reads as an atmosphere halo. The glow is
// concentrated at the limb (rim term) and fades to the night side (sun term),
// giving a twilight band at the terminator. The opaque planet depth-occludes the
// shell's centre, leaving only the limb annulus visible.
//
// Critically: a raw ShaderMaterial does NOT get the logarithmic depth buffer for
// free, so we include the <logdepthbuf_*> chunks by hand (three still supplies
// the USE_LOGDEPTHBUF define + logDepthBufFC uniform because the renderer has it
// enabled). Without this the shell's depth is wrong and it z-fights the planet.

export interface AtmoConfig {
  color: THREE.Color
  power: number
  strength: number
  /** Shell radius as a multiple of the body radius. */
  factor: number
}

export const ATMOSPHERES: Record<string, AtmoConfig> = {
  earth: { color: new THREE.Color(0.3, 0.55, 1.0), power: 3.2, strength: 1.5, factor: 1.03 },
  venus: { color: new THREE.Color(0.96, 0.83, 0.45), power: 2.4, strength: 1.7, factor: 1.05 },
  mars: { color: new THREE.Color(0.95, 0.55, 0.42), power: 3.4, strength: 0.7, factor: 1.025 },
  titan: { color: new THREE.Color(0.96, 0.6, 0.25), power: 2.6, strength: 1.4, factor: 1.06 },
  jupiter: { color: new THREE.Color(0.85, 0.82, 0.95), power: 4.0, strength: 0.5, factor: 1.015 },
  saturn: { color: new THREE.Color(0.92, 0.86, 0.72), power: 4.0, strength: 0.45, factor: 1.015 },
  uranus: { color: new THREE.Color(0.6, 0.92, 0.95), power: 4.0, strength: 0.6, factor: 1.02 },
  neptune: { color: new THREE.Color(0.4, 0.6, 1.0), power: 4.0, strength: 0.7, factor: 1.02 },
}

const SHELL = new THREE.SphereGeometry(1, 48, 24)

export function createAtmosphere(cfg: AtmoConfig): THREE.Mesh {
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: cfg.color.clone() },
      uPower: { value: cfg.power },
      uStrength: { value: cfg.strength },
      uSunPos: { value: new THREE.Vector3() },
    },
    vertexShader: `
      #include <common>
      #include <logdepthbuf_pars_vertex>
      varying vec3 vWN;
      varying vec3 vWP;
      void main() {
        vWN = normalize(mat3(modelMatrix) * normal);
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWP = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
        #include <logdepthbuf_vertex>
      }
    `,
    fragmentShader: `
      #include <common>
      #include <logdepthbuf_pars_fragment>
      uniform vec3 uColor;
      uniform float uPower;
      uniform float uStrength;
      uniform vec3 uSunPos;
      varying vec3 vWN;
      varying vec3 vWP;
      void main() {
        #include <logdepthbuf_fragment>
        vec3 N = normalize(vWN);
        vec3 V = normalize(cameraPosition - vWP);
        float rim = pow(1.0 - max(dot(N, V), 0.0), uPower);
        float ndl = dot(N, normalize(uSunPos - vWP));
        float lit = smoothstep(-0.4, 0.3, ndl);
        float a = rim * lit;
        gl_FragColor = vec4(uColor * uStrength * a, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
    side: THREE.BackSide,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })
  const mesh = new THREE.Mesh(SHELL, material)
  mesh.renderOrder = 2
  return mesh
}
