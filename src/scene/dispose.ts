import * as THREE from 'three'

// Free the GPU memory behind an object tree: geometries, materials and every
// texture they reference (material slots, shader uniforms, and any extras a
// material lists in userData.extraTextures). Geometries flagged
// userData.shared are module-level singletons reused by the next scene, so
// they are left alone.

function disposeTextureValue(v: unknown, seen: Set<THREE.Texture>): void {
  if (v instanceof THREE.Texture && !seen.has(v)) {
    seen.add(v)
    v.dispose()
  }
}

function disposeMaterial(m: THREE.Material, seen: Set<THREE.Texture>): void {
  for (const v of Object.values(m)) disposeTextureValue(v, seen)
  const uniforms = (m as THREE.ShaderMaterial).uniforms
  if (uniforms) for (const u of Object.values(uniforms)) disposeTextureValue(u?.value, seen)
  const extra = m.userData?.extraTextures as unknown[] | undefined
  if (extra) for (const t of extra) disposeTextureValue(t, seen)
  m.dispose()
}

export function disposeObject(root: THREE.Object3D): void {
  const seen = new Set<THREE.Texture>()
  const mats = new Set<THREE.Material>()
  root.traverse((o) => {
    const mesh = o as THREE.Mesh
    if (mesh.geometry && !mesh.geometry.userData?.shared) mesh.geometry.dispose()
    const mat = mesh.material
    if (Array.isArray(mat)) mat.forEach((m) => mats.add(m))
    else if (mat) mats.add(mat)
    if ((o as THREE.Light).isLight) (o as THREE.Light).dispose()
  })
  for (const m of mats) disposeMaterial(m, seen)
}
