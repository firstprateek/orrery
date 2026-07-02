import * as THREE from 'three'

// Cinematic Earth: a standard PBR day map extended via onBeforeCompile with
// city lights on the night side, blended across the terminator by the sun
// angle — the dark hemisphere glows, and bright cities catch a touch of bloom
// on the composer tiers. Built-in material ⇒ the logarithmic depth buffer and
// tone mapping are handled for us. Textures attach on load (binding an empty
// texture renders black), so the night term is gated on uNightReady and the
// injection is guarded by USE_MAP (the pre-load compile has no vMapUv).

export interface EarthRig {
  material: THREE.MeshStandardMaterial
  /** World-space direction from Earth toward the Sun; update each frame. */
  uSunDir: { value: THREE.Vector3 }
}

export function createEarthMaterial(
  loader: THREE.TextureLoader,
  base: string,
  placeholderColor: number,
  maxAnisotropy: number,
): EarthRig {
  const uSunDir = { value: new THREE.Vector3(1, 0, 0) }
  const uNightReady = { value: 0 }
  const material = new THREE.MeshStandardMaterial({ color: placeholderColor, metalness: 0, roughness: 0.9 })

  const nightMap = loader.load(`${base}2k_earth_nightmap.jpg`, () => {
    uNightReady.value = 1
  })
  nightMap.colorSpace = THREE.SRGBColorSpace

  const dayMap = loader.load(`${base}2k_earth_daymap.jpg`, () => {
    material.map = dayMap
    material.color.setRGB(1, 1, 1)
    material.needsUpdate = true // recompiles WITH USE_MAP → night injection goes live
  })
  dayMap.colorSpace = THREE.SRGBColorSpace
  dayMap.anisotropy = Math.min(8, maxAnisotropy)

  material.onBeforeCompile = (shader) => {
    shader.uniforms.uNightMap = { value: nightMap }
    shader.uniforms.uSunDir = uSunDir
    shader.uniforms.uNightReady = uNightReady

    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWorldNormalE;')
      .replace(
        '#include <beginnormal_vertex>',
        '#include <beginnormal_vertex>\n  vWorldNormalE = normalize(mat3(modelMatrix) * objectNormal);',
      )

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        '#include <common>\nuniform sampler2D uNightMap;\nuniform vec3 uSunDir;\nuniform float uNightReady;\nvarying vec3 vWorldNormalE;',
      )
      .replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
        #ifdef USE_MAP
        float ndlE = dot(normalize(vWorldNormalE), normalize(uSunDir));
        float nightE = smoothstep(0.12, -0.12, ndlE) * uNightReady;
        totalEmissiveRadiance += texture2D(uNightMap, vMapUv).rgb * nightE * 1.6;
        #endif`,
      )
  }

  return { material, uSunDir }
}

/**
 * A translucent cloud shell just above the surface, lit by the Sun (clouds
 * darken across the terminator). Hidden until the alpha texture loads — an
 * absent alphaMap would render the shell as an opaque white ball.
 */
export function createClouds(loader: THREE.TextureLoader, base: string, geometry: THREE.SphereGeometry): THREE.Mesh {
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    transparent: true,
    depthWrite: false,
    metalness: 0,
    roughness: 1,
  })
  const mesh = new THREE.Mesh(geometry, material)
  mesh.visible = false
  const cloudMap = loader.load(`${base}2k_earth_clouds.jpg`, () => {
    material.alphaMap = cloudMap
    material.needsUpdate = true
    mesh.visible = true
  })
  mesh.renderOrder = 1
  return mesh
}
