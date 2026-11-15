import * as Astronomy from 'astronomy-engine'
import { DEG2RAD } from '../config/constants'
import { bodyBasis, type BodyBasis } from '../math/orientation'

// Pole and prime meridian for the bodies astronomy-engine's RotationAxis covers.
// It implements the same IAU WGCCRE model as the registry, but with the exact
// W rates (a period rounded to a few digits drifts by degrees over a century:
// Saturn +4°, Jupiter −2.6° by 2100), the secular pole drift, the Moon's
// periodic terms (its static pole is 1.5° off and W swings ±3° without them)
// and TT instead of UT. Earth is not here: it uses the full precession/nutation/
// sidereal-time frame in earthRotation.ts. Moons other than our own keep the
// hand-entered registry values.

export const AXIS_BODY: Readonly<Record<string, Astronomy.Body>> = {
  sun: Astronomy.Body.Sun,
  mercury: Astronomy.Body.Mercury,
  venus: Astronomy.Body.Venus,
  moon: Astronomy.Body.Moon,
  mars: Astronomy.Body.Mars,
  jupiter: Astronomy.Body.Jupiter,
  saturn: Astronomy.Body.Saturn,
  uranus: Astronomy.Body.Uranus,
  neptune: Astronomy.Body.Neptune,
  pluto: Astronomy.Body.Pluto,
}

export interface BodyAxis {
  /** Ecliptic-J2000 axes of the body's IAU frame (see math/orientation.ts). */
  basis: BodyBasis
  /** Prime-meridian angle W in radians, measured from basis.x. */
  w: number
}

/** IAU pole + W at `time`, or null for a body RotationAxis does not cover. */
export function iauAxis(id: string, time: Astronomy.AstroTime): BodyAxis | null {
  const body = AXIS_BODY[id]
  if (body === undefined) return null
  const a = Astronomy.RotationAxis(body, time)
  return { basis: bodyBasis(a.ra * 15, a.dec), w: a.spin * DEG2RAD }
}
