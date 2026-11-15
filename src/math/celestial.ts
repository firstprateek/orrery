import type { Vec3 } from './vec3'

/** Obliquity of the ecliptic at J2000 (radians). */
export const OBLIQUITY_J2000 = (23.4392911 * Math.PI) / 180

/**
 * Right ascension / declination (radians) → a Cartesian point on a sphere in the
 * EQUATORIAL J2000 frame (x toward the vernal equinox, z toward the north
 * celestial pole). Rotate by -OBLIQUITY_J2000 about X to bring into the ecliptic
 * frame the rest of the scene uses.
 */
export function raDecToVec3(raRad: number, decRad: number, radius: number): Vec3 {
  const cosDec = Math.cos(decRad)
  return {
    x: radius * cosDec * Math.cos(raRad),
    y: radius * cosDec * Math.sin(raRad),
    z: radius * Math.sin(decRad),
  }
}

/**
 * Galactic → equatorial J2000 rotation, row-major 3×3. It is the transpose of
 * the IAU equatorial→galactic matrix (Hipparcos, ESA SP-1200 vol. 1 §1.5.3), so
 * galactic (l 0°, b 0°) lands on RA 266.405°, Dec −28.936° and the north
 * galactic pole on RA 192.859°, Dec +27.128°.
 */
export const GAL_TO_EQ_J2000: readonly number[] = [
  -0.0548755604, +0.4941094279, -0.8676661490,
  -0.8734370902, -0.4448296300, -0.1980763734,
  -0.4838350155, +0.7469822445, +0.4559837762,
]

/** Row-major 3×3 matrix times vector. */
export function mulMat3(m: readonly number[], v: Vec3): Vec3 {
  return {
    x: m[0] * v.x + m[1] * v.y + m[2] * v.z,
    y: m[3] * v.x + m[4] * v.y + m[5] * v.z,
    z: m[6] * v.x + m[7] * v.y + m[8] * v.z,
  }
}

/** Row-major 3×3 matrix product a·b (apply b first, then a). */
export function mulMat3Mat3(a: readonly number[], b: readonly number[]): number[] {
  const out = new Array<number>(9)
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      out[r * 3 + c] = a[r * 3] * b[c] + a[r * 3 + 1] * b[3 + c] + a[r * 3 + 2] * b[6 + c]
    }
  }
  return out
}

/** Galactic longitude/latitude (radians) → a point in the EQUATORIAL J2000 frame. */
export function galacticToEquatorial(lRad: number, bRad: number, radius: number): Vec3 {
  const cosB = Math.cos(bRad)
  const g = { x: radius * cosB * Math.cos(lRad), y: radius * cosB * Math.sin(lRad), z: radius * Math.sin(bRad) }
  return mulMat3(GAL_TO_EQ_J2000, g)
}

/**
 * Equatorial J2000 → ecliptic J2000: a rotation by −ε about X (the same one
 * StarField applies with rotation.x = -OBLIQUITY_J2000).
 */
const EQ_TO_ECL_J2000: readonly number[] = (() => {
  const c = Math.cos(OBLIQUITY_J2000)
  const s = Math.sin(OBLIQUITY_J2000)
  return [1, 0, 0, 0, c, s, 0, -s, c]
})()

export function equatorialToEcliptic(v: Vec3): Vec3 {
  return mulMat3(EQ_TO_ECL_J2000, v)
}

/**
 * three's SphereGeometry puts the texel a fraction u across and t down the image
 * (uv = (u, 1 − t); textures load with flipY) at local direction
 * (−cos 2πu · sin πt, cos πt, sin 2πu · sin πt). The Milky Way panorama is in
 * galactic coordinates with u = 0.5 − l/360 and t = 0.5 + b/180 (south galactic
 * pole at the top: the LMC, b = −33°, sits above the band). That local direction
 * is (cos l cos b, −sin b, sin l cos b), so galactic (x, y, z) = local
 * (x, z, −y): a proper rotation, so the panorama is not mirrored on the sky.
 */
const SKY_TEX_TO_GAL: readonly number[] = [1, 0, 0, 0, 0, 1, 0, -1, 0]

/**
 * The one fixed rotation that takes the sky sphere's local (texture) frame to
 * the scene's ecliptic J2000 frame: texture → galactic → equatorial → ecliptic.
 * Without it the galactic centre sat at the vernal equinox and the band ran
 * through the ecliptic poles, so the painted stars disagreed with the catalogue.
 */
export const SKY_TEXTURE_TO_ECLIPTIC: readonly number[] = mulMat3Mat3(
  EQ_TO_ECL_J2000,
  mulMat3Mat3(GAL_TO_EQ_J2000, SKY_TEX_TO_GAL),
)
