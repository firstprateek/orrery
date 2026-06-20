import * as THREE from 'three'

// The ONE shared sky: a large inverted sphere textured with the Milky-Way
// panorama. It follows the camera's POSITION each frame (so it sits at effective
// infinity) but never its rotation — one inertial sky for the whole system,
// because parallax across the solar system is sub-pixel. Rendered first, never
// writes depth.
const SKY_RADIUS = 9000

export function createSky(loader: THREE.TextureLoader): THREE.Mesh {
  const tex = loader.load(`${import.meta.env.BASE_URL}textures/8k_stars_milky_way.jpg`)
  tex.colorSpace = THREE.SRGBColorSpace
  const mat = new THREE.MeshBasicMaterial({
    map: tex,
    side: THREE.BackSide,
    depthWrite: false,
    toneMapped: false,
  })
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(SKY_RADIUS, 64, 32), mat)
  mesh.renderOrder = -1
  mesh.frustumCulled = false
  return mesh
}
