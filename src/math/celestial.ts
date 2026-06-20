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
