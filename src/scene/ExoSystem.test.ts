import { describe, it, expect } from 'vitest'
import { makeExoVisualScale } from './ExoSystem'
import { EXO_SYSTEM_IDS, loadSystem } from '../config/systems'
import { kmToAu } from '../config/constants'

describe('exo overview mapping', () => {
  it('is increasing and continuous, and fits the system in ~40 units', async () => {
    for (const id of EXO_SYSTEM_IDS) {
      const sys = await loadSystem(id)
      const vs = makeExoVisualScale(sys)
      const r = (au: number) => vs.position({ x: au, y: 0, z: 0 }).x
      let prev = 0
      for (let au = 1e-5; au < 60; au *= 1.01) {
        const v = r(au)
        expect(v).toBeGreaterThan(prev)
        // No jumps: a 1% step in distance never moves the mapped point by more than ~2%.
        if (prev > 0) expect(v / prev).toBeLessThan(1.02)
        prev = v
      }
      let outer = 0
      for (const b of sys.bodies) {
        if (!b.kepler) continue
        // A binary's secondary swings out to its share of the separation.
        const share = sys.binary?.secondary === b.id ? 1 - sys.binary.secondaryMassFraction : 1
        outer = Math.max(outer, r(kmToAu(b.kepler.aKm) * (1 + b.kepler.e) * share))
      }
      expect(outer).toBeLessThanOrEqual(40 + 1e-9)
    }
  })

  it('keeps close-in planets clear of their enlarged star', async () => {
    for (const id of ['trappist1', 'proxima', 'barnard']) {
      const sys = await loadSystem(id)
      const vs = makeExoVisualScale(sys)
      const star = sys.bodies[0]
      const starR = vs.radius(kmToAu(star.radiusKm))
      for (const b of sys.bodies.slice(1)) {
        const peri = kmToAu(b.kepler!.aKm) * (1 - b.kepler!.e)
        const gap = vs.position({ x: peri, y: 0, z: 0 }).x - starR - vs.radius(kmToAu(b.radiusKm))
        expect(gap).toBeGreaterThan(1)
      }
    }
  })
})
