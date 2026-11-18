import { describe, it, expect } from 'vitest'
import { computeExoPositions } from './exoEphemeris'
import { loadSystem } from '../config/systems'
import { kmToAu, J2000_JD } from '../config/constants'

const dist = (a: { x: number; y: number; z: number }, b: { x: number; y: number; z: number }) =>
  Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z)

describe('exo ephemeris', () => {
  it('keeps a binary’s barycentre at the origin, the stars on their orbit', async () => {
    const sys = await loadSystem('alphacen')
    const q = sys.binary!.secondaryMassFraction
    const el = sys.bodies.find((b) => b.id === 'acen-b')!.kepler!
    const a = kmToAu(el.aKm)
    for (let k = 0; k < 20; k++) {
      const p = computeExoPositions(sys, J2000_JD + k * 1500)
      const A = p['acen-a']
      const B = p['acen-b']
      // (1 − q)·A + q·B = 0
      expect(Math.abs((1 - q) * A.x + q * B.x)).toBeLessThan(1e-9)
      expect(Math.abs((1 - q) * A.y + q * B.y)).toBeLessThan(1e-9)
      const sep = dist(A, B)
      expect(sep).toBeGreaterThanOrEqual(a * (1 - el.e) - 1e-9)
      expect(sep).toBeLessThanOrEqual(a * (1 + el.e) + 1e-9)
    }
  })

  it('puts planets at their orbital distance and repeats each period', async () => {
    const sys = await loadSystem('trappist1')
    const p0 = computeExoPositions(sys, J2000_JD + 100)
    for (const b of sys.bodies) {
      if (!b.kepler) {
        expect(p0[b.id]).toEqual({ x: 0, y: 0, z: 0 })
        continue
      }
      expect(Math.hypot(p0[b.id].x, p0[b.id].y, p0[b.id].z)).toBeCloseTo(kmToAu(b.kepler.aKm), 9)
      const p1 = computeExoPositions(sys, J2000_JD + 100 + b.kepler.periodDays)
      expect(dist(p0[b.id], p1[b.id])).toBeLessThan(1e-9)
    }
  })
})
