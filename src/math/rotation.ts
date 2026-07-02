import { J2000_JD, DEG2RAD } from '../config/constants'

// Axial rotation angle (radians, wrapped to [0, 2π)) for a body at a Julian Date,
// from its real sidereal rotation period plus its IAU prime-meridian angle W0 at
// the epoch (so texture longitude has the right phase, e.g. the Moon shows its
// near side). Driven by the sim clock, so spin speed tracks the time controls.
// Negative period = retrograde (used only for bodies whose obliquity is <90°).
// Wrapping keeps the angle small so float precision stays clean over long spans.
export function bodyRotationAngle(
  jd: number,
  rotationPeriodHours: number,
  meridianDeg = 0,
  epochJd = J2000_JD,
): number {
  const periodDays = rotationPeriodHours / 24
  const turns = (jd - epochJd) / periodDays + (meridianDeg * DEG2RAD) / (2 * Math.PI)
  return 2 * Math.PI * (turns - Math.floor(turns))
}
