import * as THREE from 'three'
import { SKY_TEXTURE_TO_ECLIPTIC } from '../math/celestial'

// The ONE shared sky: a large inverted sphere textured with the Milky-Way
// panorama. It follows the camera's POSITION each frame (so it sits at effective
// infinity) but never its rotation — one inertial sky for the whole system,
// because parallax across the solar system is sub-pixel. Rendered first, never
// writes depth. The panorama is in galactic coordinates, so the sphere carries
// one fixed rotation into the scene's ecliptic frame; that puts the painted
// bulge on Sgr A* and the painted stars on the catalogue StarField.
const SKY_RADIUS = 9000

export function createSky(loader: THREE.TextureLoader): THREE.Mesh {
  const tex = loader.load(`${import.meta.env.BASE_URL}textures/8k_stars_milky_way.jpg`)
  tex.colorSpace = THREE.SRGBColorSpace
  // toneMapped must stay true: the composer's OutputPass tone-maps the whole
  // frame regardless, so opting out here would make the sky brighter on the
  // direct (Performance) path than on the composer tiers.
  const mat = new THREE.MeshBasicMaterial({
    map: tex,
    side: THREE.BackSide,
    depthWrite: false,
  })
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(SKY_RADIUS, 64, 32), mat)
  mesh.renderOrder = -1
  mesh.frustumCulled = false
  const m = SKY_TEXTURE_TO_ECLIPTIC
  const rot = new THREE.Matrix4().set(
    m[0], m[1], m[2], 0,
    m[3], m[4], m[5], 0,
    m[6], m[7], m[8], 0,
    0, 0, 0, 1,
  )
  // Rotation only: main.ts copies the camera position into mesh.position every
  // frame, which leaves this quaternion untouched.
  mesh.quaternion.setFromRotationMatrix(rot)
  return mesh
}
