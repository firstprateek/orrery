import { describe, it, expect } from 'vitest'
import { computePositions } from './ephemeris'
import { J2000_JD, unixMsToJd, RAD2DEG, kmToAu } from '../config/constants'
import { BODY_BY_ID } from '../config/bodies'
import type { Vec3 } from '../math/vec3'

// Almanac regression tests: pin computePositions against EXTERNAL astronomical
// facts (not against itself), so a frame/sign/epoch regression that preserves
// distances — which the older distance-only tests can't see — fails loudly.

const lonDeg = (v: Vec3): number => {
  const d = Math.atan2(v.y, v.x) * RAD2DEG
  return d < 0 ? d + 360 : d
}
const angleBetweenDeg = (a: Vec3, b: Vec3): number => {
  const dot = a.x * b.x + a.y * b.y + a.z * b.z
  const la = Math.hypot(a.x, a.y, a.z)
  const lb = Math.hypot(b.x, b.y, b.z)
  return Math.acos(Math.max(-1, Math.min(1, dot / (la * lb)))) * RAD2DEG
}
const sub = (a: Vec3, b: Vec3): Vec3 => ({ x: a.x - b.x, y: a.y - b.y, z: a.z - b.z })

describe('ephemeris almanac regression', () => {
  it('Earth sits at heliocentric ecliptic longitude ~100.4° at J2000', () => {
    // The Sun's apparent geocentric longitude at the J2000 epoch is ~280.37°
    // (standard almanac value), so Earth's heliocentric longitude is ~100.37°.
    const pos = computePositions(J2000_JD)
    expect(lonDeg(pos['earth'])).toBeCloseTo(100.37, 0)
    // and essentially on the ecliptic
    expect(Math.abs(pos['earth'].z)).toBeLessThan(1e-4)
  })

  it('Earth crosses longitude 0°-of-date at the September 2020 equinox (J2000 + precession)', () => {
    // 2020 September equinox: 2020-09-22 13:31 UTC (Sun's apparent geocentric
    // longitude-of-date = 180° ⇒ Earth heliocentric longitude-of-date = 0°).
    // Our frame is J2000, and the equinox precesses ~50.29″/yr westward, so in
    // J2000 coordinates the crossing sits at 360° − 20.72yr × 0.0139697°/yr.
    // This doubles as a frame check: an equinox-of-date regression would land
    // ~0.29° away and fail.
    const jd = unixMsToJd(Date.UTC(2020, 8, 22, 13, 31))
    const lon = lonDeg(computePositions(jd)['earth'])
    const yearsSinceJ2000 = 20.725
    const expected = 360 - yearsSinceJ2000 * 0.0139697
    expect(lon).toBeCloseTo(expected, 1) // within 0.05°: aberration+nutation ~0.01°
  })

  it('the Moon aligns with the Sun in longitude at the 2000-01-06 new moon', () => {
    // New moon (conjunction in ecliptic longitude): 2000-01-06 18:14 UTC.
    const jd = unixMsToJd(Date.UTC(2000, 0, 6, 18, 14))
    const pos = computePositions(jd)
    const sunFromEarth = sub(pos['sun'], pos['earth'])
    const moonFromEarth = sub(pos['moon'], pos['earth'])
    const dLon = Math.abs(lonDeg(sunFromEarth) - lonDeg(moonFromEarth))
    expect(Math.min(dLon, 360 - dLon)).toBeLessThan(0.5)
  })

  it('Kepler moons actually move: Phobos sweeps ~90° in a quarter period', () => {
    // Guards the mean-motion units (deg vs rad, hours vs days): a rate bug
    // would leave the offset frozen or sweep a wildly different angle.
    const el = BODY_BY_ID['phobos'].kepler!
    const at = (jd: number) => {
      const p = computePositions(jd)
      return sub(p['phobos'], p['mars'])
    }
    const sweep = angleBetweenDeg(at(J2000_JD), at(J2000_JD + el.periodDays / 4))
    expect(sweep).toBeGreaterThan(80)
    expect(sweep).toBeLessThan(100)
    // and a full period returns it home (same tolerance band)
    const home = angleBetweenDeg(at(J2000_JD), at(J2000_JD + el.periodDays))
    expect(home).toBeLessThan(4)
  })

  it('moon offsets stay parent-relative at the right radius while the planet moves', () => {
    // A frame bug that added offsets in the wrong frame would break the radius
    // as the parent orbits; check at two epochs half a Mars year apart.
    for (const jd of [J2000_JD, J2000_JD + 343]) {
      const p = computePositions(jd)
      const r = Math.hypot(...(Object.values(sub(p['phobos'], p['mars'])) as number[]))
      expect(r).toBeGreaterThan(kmToAu(9375) * 0.9)
      expect(r).toBeLessThan(kmToAu(9375) * 1.1)
    }
  })
})
