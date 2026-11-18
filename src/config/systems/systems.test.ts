import { describe, it, expect } from 'vitest'
import { BODIES } from '../bodies'
import { isTarget, setTargetBodies, targetDef } from '../targets'
import { EXO_SYSTEM_IDS, isExoSystem, loadSystem } from '.'
import { radiusFromMassEarth, semiMajorAxisAu } from './build'
import { kmToAu } from '../constants'

describe('star systems', () => {
  it('rejects unknown and inherited ids', async () => {
    for (const id of ['sol', 'nope', 'constructor', '__proto__']) expect(isExoSystem(id)).toBe(false)
    await expect(loadSystem('nope')).rejects.toThrow()
  })

  it('every system is well formed', async () => {
    const solarIds = new Set(BODIES.map((b) => b.id))
    const seen = new Set<string>()
    for (const id of EXO_SYSTEM_IDS) {
      const sys = await loadSystem(id)
      expect(sys.id).toBe(id)
      const ids = sys.bodies.map((b) => b.id)
      for (const [i, b] of sys.bodies.entries()) {
        // Ids are unique across every system, home included (targets, labels, URLs).
        expect(solarIds.has(b.id)).toBe(false)
        expect(seen.has(b.id)).toBe(false)
        seen.add(b.id)
        if (b.parent) expect(ids.indexOf(b.parent)).toBeLessThan(i)
        if (b.type === 'star') expect(sys.starTempK[b.id]).toBeGreaterThan(1000)
        expect(sys.looks[b.id]).toBeDefined()
        expect(b.radiusKm).toBeGreaterThan(0)
        if (b.parent) expect(b.kepler && b.kepler.periodDays > 0 && b.kepler.e < 1).toBe(true)
      }
      expect(sys.bodies[0].type).toBe('star')
      expect(ids).toContain(sys.primaryId)
      expect(ids).toContain(sys.defaultFocusId)
      if (sys.binary) {
        expect(ids).toContain(sys.binary.primary)
        expect(ids).toContain(sys.binary.secondary)
      }
    }
  })

  it('swaps the camera targets to the system you are in', async () => {
    const trappist = await loadSystem('trappist1')
    setTargetBodies(trappist.bodies)
    expect(isTarget('trappist1-e')).toBe(true)
    expect(isTarget('earth')).toBe(false)
    expect(targetDef('trappist1').frameKind).toBe('sun')
    setTargetBodies(BODIES)
    expect(isTarget('earth')).toBe(true)
    expect(isTarget('trappist1-e')).toBe(false)
  })

  it('derives orbits and sizes the way the literature does', async () => {
    expect(semiMajorAxisAu(365.25, 1)).toBeCloseTo(1, 12)
    // Proxima b: 11.19 d around 0.122 M☉ → 0.0486 AU.
    expect(semiMajorAxisAu(11.1868, 0.122)).toBeCloseTo(0.0486, 3)
    const proxima = await loadSystem('proxima')
    const b = proxima.bodies.find((x) => x.id === 'proxima-b')!
    expect(kmToAu(b.kepler!.aKm)).toBeCloseTo(0.0486, 3)
    expect(radiusFromMassEarth(1)).toBeCloseTo(1, 12)
    expect(radiusFromMassEarth(0.3)).toBeLessThan(1)
    expect(radiusFromMassEarth(1000)).toBe(11)
  })
})
