import { describe, it, expect } from 'vitest'
import * as Astronomy from 'astronomy-engine'
import { earthFixedBasis } from './earthRotation'
import { computePositions } from './ephemeris'
import { dirToLonLat } from '../math/orientation'
import { bodyRotationAngle } from '../math/rotation'
import { bodyBasis } from '../math/orientation'
import { BODY_BY_ID } from '../config/bodies'
import { OBLIQUITY_J2000 } from '../math/celestial'
import { RAD2DEG, unixMsToJd } from '../config/constants'

const jdOf = (iso: string): number => unixMsToJd(Date.parse(iso))
const wrap = (deg: number): number => ((((deg + 180) % 360) + 360) % 360) - 180

/** Subsolar point as the renderer sees it: Sun direction in Earth's fixed frame. */
function modelSubsolar(iso: string): { lon: number; lat: number } {
  const jd = jdOf(iso)
  const p = computePositions(jd)
  const sun = { x: -p['earth'].x, y: -p['earth'].y, z: -p['earth'].z }
  const ll = dirToLonLat(earthFixedBasis(jd), 0, sun)
  return { lon: ll.lon * RAD2DEG, lat: ll.lat * RAD2DEG }
}

/** Independent reference: apparent Sun RA/Dec of date and Greenwich sidereal time. */
function referenceSubsolar(iso: string): { lon: number; lat: number } {
  const t = Astronomy.MakeTime(new Date(iso))
  const eq = Astronomy.Equator(Astronomy.Body.Sun, t, new Astronomy.Observer(0, 0, 0), true, false)
  return { lon: wrap((eq.ra - Astronomy.SiderealTime(t)) * 15), lat: eq.dec }
}

describe('Earth orientation (astronomy-engine)', () => {
  it('the pole is (0, sin ε, cos ε) at J2000, give or take precession', () => {
    const p = earthFixedBasis(jdOf('2000-01-01T12:00:00Z')).y
    expect(p.x).toBeCloseTo(0, 3)
    expect(p.y).toBeCloseTo(Math.sin(OBLIQUITY_J2000), 3)
    expect(p.z).toBeCloseTo(Math.cos(OBLIQUITY_J2000), 3)
  })

  it('the basis is orthonormal and right-handed', () => {
    const { x, y, z } = earthFixedBasis(jdOf('2031-04-05T03:21:00Z'))
    const dot = (a: typeof x, b: typeof x) => a.x * b.x + a.y * b.y + a.z * b.z
    expect(dot(x, x)).toBeCloseTo(1, 10)
    expect(dot(x, y)).toBeCloseTo(0, 10)
    expect(dot(y, z)).toBeCloseTo(0, 10)
    // x × y = z
    expect(x.y * y.z - x.z * y.y).toBeCloseTo(z.x, 10)
    expect(x.z * y.x - x.x * y.z).toBeCloseTo(z.y, 10)
    expect(x.x * y.y - x.y * y.x).toBeCloseTo(z.z, 10)
  })

  it('puts the subsolar point near 0° longitude at 12:00 UTC (Europe/Africa lit)', () => {
    // The equation of time keeps it within ±4.1° of the Greenwich meridian.
    for (const iso of ['2026-02-11T12:00:00Z', '2026-03-20T12:00:00Z', '2026-06-21T12:00:00Z', '2026-11-03T12:00:00Z']) {
      expect(Math.abs(modelSubsolar(iso).lon), iso).toBeLessThan(4.5)
    }
  })

  it('has the northern summer at the June solstice and winter in December', () => {
    expect(modelSubsolar('2026-06-21T12:00:00Z').lat).toBeCloseTo(23.44, 1)
    expect(modelSubsolar('2026-12-21T12:00:00Z').lat).toBeCloseTo(-23.44, 1)
    expect(Math.abs(modelSubsolar('2026-03-20T14:46:00Z').lat)).toBeLessThan(0.05) // equinox
  })

  it('matches the RA/Dec + sidereal-time subsolar point to ~0.02° across the time window', () => {
    for (const iso of ['1930-07-04T18:00:00Z', '2000-01-01T12:00:00Z', '2026-03-20T12:00:00Z', '2050-11-01T06:00:00Z', '2120-02-29T23:00:00Z']) {
      const m = modelSubsolar(iso)
      const r = referenceSubsolar(iso)
      // Aberration (~20″) is the main difference: the ephemeris is geometric.
      expect(Math.abs(wrap(m.lon - r.lon)), iso).toBeLessThan(0.02)
      expect(Math.abs(m.lat - r.lat), iso).toBeLessThan(0.02)
    }
  })

  it('stays within ~0.4° of the static IAU model (registry W0 + period) in the 2020s', () => {
    // The registry values are the fallback; they must not be wildly off.
    const def = BODY_BY_ID['earth']
    const static0 = bodyBasis(def.pole.raDeg, def.pole.decDeg)
    const jd = jdOf('2026-03-20T12:00:00Z')
    const p = computePositions(jd)
    const sun = { x: -p['earth'].x, y: -p['earth'].y, z: -p['earth'].z }
    const w = bodyRotationAngle(jd, def.rotationPeriodHours, def.meridianDeg)
    const lonStatic = dirToLonLat(static0, w, sun).lon * RAD2DEG
    expect(Math.abs(wrap(lonStatic - modelSubsolar('2026-03-20T12:00:00Z').lon))).toBeLessThan(0.4)
  })
})
