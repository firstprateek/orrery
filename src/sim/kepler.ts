// Two-body Keplerian orbital mechanics.
//
// Used to position bodies that are not covered by astronomy-engine (most moons
// and the sampled asteroid belt) from their osculating orbital elements. All
// angles are in radians; distance units are whatever `a` is given in (we use AU
// for heliocentric bodies and the parent's units for moons).
//
// These are pure functions with no time or I/O dependency, which is exactly why
// they are the first behaviour we lock down with tests.

import type { Vec3 } from '../math/vec3'
export type { Vec3 }

export interface OrbitalElements {
  /** Semi-major axis (AU or parent-relative units). */
  a: number
  /** Eccentricity (0 = circle, <1 = ellipse). */
  e: number
  /** Inclination, radians. */
  i: number
  /** Longitude of the ascending node (Ω), radians. */
  om: number
  /** Argument of periapsis (ω), radians. */
  w: number
  /** Mean anomaly at the desired epoch (M), radians. */
  M: number
}

/** Normalise an angle to the range (-π, π] for fast, stable iteration. */
export function wrapAngle(angle: number): number {
  const twoPi = 2 * Math.PI
  let a = angle % twoPi
  if (a > Math.PI) a -= twoPi
  if (a <= -Math.PI) a += twoPi
  return a
}

/**
 * Solve Kepler's equation `M = E - e·sin(E)` for the eccentric anomaly E using
 * Newton–Raphson. Converges to `tol` for any elliptical orbit (0 ≤ e < 1).
 */
export function solveKepler(M: number, e: number, tol = 1e-12, maxIter = 100): number {
  const m = wrapAngle(M)
  // Good initial guess: m for low eccentricity, π·sign(m) near parabolic.
  let E = e < 0.8 ? m : Math.PI * (m === 0 ? 1 : Math.sign(m))
  for (let iter = 0; iter < maxIter; iter++) {
    const dE = (E - e * Math.sin(E) - m) / (1 - e * Math.cos(E))
    E -= dE
    if (Math.abs(dE) < tol) break
  }
  return E
}

/** Convert an eccentric anomaly E to the true anomaly ν. */
export function eccentricToTrue(E: number, e: number): number {
  return 2 * Math.atan2(Math.sqrt(1 + e) * Math.sin(E / 2), Math.sqrt(1 - e) * Math.cos(E / 2))
}

/**
 * Position from orbital elements, in the reference frame the elements are
 * expressed in (heliocentric ecliptic-J2000 for planets/belt; parent-centred
 * ecliptic-J2000 for moons). Returns the offset from the focus.
 */
export function elementsToCartesian(el: OrbitalElements): Vec3 {
  const E = solveKepler(el.M, el.e)

  // Position in the perifocal (orbital) plane.
  const xp = el.a * (Math.cos(E) - el.e)
  const yp = el.a * Math.sqrt(1 - el.e * el.e) * Math.sin(E)

  const cosO = Math.cos(el.om)
  const sinO = Math.sin(el.om)
  const cosw = Math.cos(el.w)
  const sinw = Math.sin(el.w)
  const cosi = Math.cos(el.i)
  const sini = Math.sin(el.i)

  // Rotate perifocal → reference frame (R_z(Ω)·R_x(i)·R_z(ω)).
  const x = (cosO * cosw - sinO * sinw * cosi) * xp + (-cosO * sinw - sinO * cosw * cosi) * yp
  const y = (sinO * cosw + cosO * sinw * cosi) * xp + (-sinO * sinw + cosO * cosw * cosi) * yp
  const z = sinw * sini * xp + cosw * sini * yp

  return { x, y, z }
}

/** Orbital radius (distance from focus) for an eccentric anomaly E. */
export function orbitalRadius(a: number, e: number, E: number): number {
  return a * (1 - e * Math.cos(E))
}
