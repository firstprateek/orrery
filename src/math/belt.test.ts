import { describe, it, expect } from 'vitest'
import { makeBelt } from './belt'

describe('makeBelt', () => {
  it('produces the requested count', () => {
    expect(makeBelt({ count: 1000 })).toHaveLength(1000)
  })

  it('keeps every rock within the ring radius and thickness', () => {
    for (const a of makeBelt({ count: 2000, innerAu: 2.1, outerAu: 3.3, thicknessAu: 0.18 })) {
      const r = Math.hypot(a.x, a.y)
      expect(r).toBeGreaterThanOrEqual(2.1 - 1e-9)
      expect(r).toBeLessThanOrEqual(3.3 + 1e-9)
      expect(Math.abs(a.z)).toBeLessThanOrEqual(0.09 + 1e-9)
      expect(a.scale).toBeGreaterThan(0)
    }
  })

  it('is deterministic for a given seed', () => {
    const a = makeBelt({ count: 5, seed: 42 })
    const b = makeBelt({ count: 5, seed: 42 })
    expect(a).toEqual(b)
  })

  it('differs across seeds', () => {
    const a = makeBelt({ count: 5, seed: 1 })
    const b = makeBelt({ count: 5, seed: 2 })
    expect(a[0]).not.toEqual(b[0])
  })

  it('pins the LCG stream to golden values (cross-platform determinism)', () => {
    // If the constants, seed handling, or draw ORDER change, the whole belt
    // silently re-shuffles; this pins the first rock of the default stream.
    const [first] = makeBelt({ count: 1, seed: 1 })
    expect(first.x).toBeCloseTo(-1.62380686282865, 12)
    expect(first.y).toBeCloseTo(1.7451358886404023, 12)
    expect(first.z).toBeCloseTo(0.0007635658141225576, 12)
    expect(first.scale).toBeCloseTo(0.004671974686556496, 12)
    expect(first.tint).toBeCloseTo(0.9099051849916577, 12)
  })
})
