import { J2000_JD } from '../config/constants'

// Axial rotation angle (radians, wrapped to [0, 2π)) for a body at a Julian Date,
// from its real sidereal rotation period. Driven by the sim clock, so spin speed
// = 2π / period × (time speed): gentle at slow speeds, fast only when you fast-
// forward — and consistent with orbital motion. Negative period = retrograde.
// Wrapping keeps the angle small so float precision stays clean over long spans.
export function bodyRotationAngle(jd: number, rotationPeriodHours: number, epochJd = J2000_JD): number {
  const periodDays = rotationPeriodHours / 24
  const turns = (jd - epochJd) / periodDays
  return 2 * Math.PI * (turns - Math.floor(turns))
}
