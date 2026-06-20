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
})
