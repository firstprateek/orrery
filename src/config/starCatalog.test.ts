import { describe, it, expect } from 'vitest'
import { DEG2RAD } from './constants'
import { HOME_SYSTEM, SKY_CATALOG, entryPositionLy, formatLy, skyEntry, skyFrom } from './starCatalog'
import { EXO_SYSTEM_IDS, isExoSystem } from './systems'
import { equatorialToEcliptic, raDecToVec3 } from '../math/celestial'

const dot = (a: { x: number; y: number; z: number }, b: { x: number; y: number; z: number }) => a.x * b.x + a.y * b.y + a.z * b.z

describe('sky catalogue', () => {
  it('has unique ids', () => {
    expect(new Set(SKY_CATALOG.map((e) => e.id)).size).toBe(SKY_CATALOG.length)
  })

  it('marks exactly the loadable systems (plus home) as reachable', () => {
    const reachable = SKY_CATALOG.filter((e) => e.reachable).map((e) => e.id).sort()
    expect(reachable).toEqual([HOME_SYSTEM, ...EXO_SYSTEM_IDS].sort())
    for (const e of SKY_CATALOG) if (e.id !== HOME_SYSTEM) expect(isExoSystem(e.id)).toBe(e.reachable)
  })

  it('points from the Sun along each entry’s RA/Dec, in the ecliptic frame', () => {
    const sirius = skyFrom(HOME_SYSTEM).find((v) => v.entry.id === 'sirius')!
    const want = equatorialToEcliptic(raDecToVec3(101.2872 * DEG2RAD, -16.7161 * DEG2RAD, 1))
    expect(dot(sirius.dir, want)).toBeCloseTo(1, 9)
    expect(sirius.distanceLy).toBeCloseTo(8.6, 9)
    // Andromeda is north of the ecliptic, the LMC near its south pole.
    expect(skyFrom(HOME_SYSTEM).find((v) => v.entry.id === 'm31')!.dir.z).toBeGreaterThan(0.4)
    expect(skyFrom(HOME_SYSTEM).find((v) => v.entry.id === 'lmc')!.dir.z).toBeLessThan(-0.9)
  })

  it('recomputes the sky from another system: the Sun is behind you, neighbours move', () => {
    const fromProxima = skyFrom('proxima')
    expect(fromProxima.some((v) => v.entry.id === 'proxima')).toBe(false)
    const sun = fromProxima.find((v) => v.entry.id === HOME_SYSTEM)!
    expect(sun.distanceLy).toBeCloseTo(4.25, 9)
    const toProxima = skyFrom(HOME_SYSTEM).find((v) => v.entry.id === 'proxima')!
    expect(dot(sun.dir, toProxima.dir)).toBeCloseTo(-1, 9)
    // Alpha Centauri is a fifth of a light-year from Proxima.
    const aCen = fromProxima.find((v) => v.entry.id === 'alphacen')!
    expect(aCen.distanceLy).toBeGreaterThan(0.1)
    expect(aCen.distanceLy).toBeLessThan(0.3)
    // Galaxies barely change.
    const m31 = fromProxima.find((v) => v.entry.id === 'm31')!
    expect(Math.abs(m31.distanceLy - 2.5e6)).toBeLessThan(5)
  })

  it('places entries at their distance', () => {
    const p = entryPositionLy(skyEntry('trappist1')!)
    expect(Math.hypot(p.x, p.y, p.z)).toBeCloseTo(40.7, 9)
  })

  it('formats distances for labels', () => {
    expect(formatLy(4.25)).toBe('4.25 ly')
    expect(formatLy(4.37)).toBe('4.37 ly')
    expect(formatLy(8.6)).toBe('8.6 ly')
    expect(formatLy(10.5)).toBe('10.5 ly')
    expect(formatLy(40.7)).toBe('40.7 ly')
    expect(formatLy(444)).toBe('444 ly')
    expect(formatLy(1344)).toBe('1,340 ly')
    expect(formatLy(26_700)).toBe('26,700 ly')
    expect(formatLy(160_000)).toBe('160,000 ly')
    expect(formatLy(2_500_000)).toBe('2.5 million ly')
    expect(formatLy(2_730_000)).toBe('2.73 million ly')
  })
})
