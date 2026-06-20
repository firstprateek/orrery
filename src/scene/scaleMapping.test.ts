import { describe, it, expect } from 'vitest'
import { makeTrueScale, makeVisualScale } from './scaleMapping'

describe('makeTrueScale', () => {
  it('reports true mode', () => {
    expect(makeTrueScale().mode).toBe('true')
  })

  it('maps AU positions to render units 1:1 by default', () => {
    const s = makeTrueScale()
    expect(s.position({ x: 30.07, y: -1.5, z: 0 })).toEqual({ x: 30.07, y: -1.5, z: 0 })
    expect(s.radius(0.00465)).toBeCloseTo(0.00465, 12)
  })

  it('scales linearly by unitsPerAu', () => {
    const s = makeTrueScale(10)
    expect(s.position({ x: 2, y: 3, z: 4 })).toEqual({ x: 20, y: 30, z: 40 })
    expect(s.radius(0.5)).toBe(5)
  })

  it('preserves distance ratios (the defining property of true scale)', () => {
    const s = makeTrueScale(1000)
    const near = s.position({ x: 1, y: 0, z: 0 }).x
    const far = s.position({ x: 30, y: 0, z: 0 }).x
    expect(far / near).toBeCloseTo(30, 12)
  })
})

describe('makeVisualScale', () => {
  const s = makeVisualScale()
  const len = (p: { x: number; y: number; z: number }) => Math.hypot(p.x, p.y, p.z)

  it('reports visual mode and keeps the Sun at the origin', () => {
    expect(s.mode).toBe('visual')
    expect(s.position({ x: 0, y: 0, z: 0 })).toEqual({ x: 0, y: 0, z: 0 })
  })

  it('preserves direction (only the radial distance is remapped)', () => {
    const p = s.position({ x: 3, y: 4, z: 0 })
    // unit direction unchanged: x:y stays 3:4
    expect(p.x / p.y).toBeCloseTo(3 / 4, 10)
  })

  it('compresses outer distances (Neptune/Mercury render ratio « true ratio)', () => {
    const mercury = len(s.position({ x: 0.39, y: 0, z: 0 }))
    const neptune = len(s.position({ x: 30, y: 0, z: 0 }))
    expect(neptune).toBeGreaterThan(mercury) // ordering preserved
    expect(neptune / mercury).toBeLessThan(30 / 0.39) // but compressed vs. true
  })

  it('keeps the size remap monotonic but compressed (Sun > Jupiter > Earth)', () => {
    const sun = s.radius(695700 / 149_597_870.7)
    const jup = s.radius(69911 / 149_597_870.7)
    const earth = s.radius(6371 / 149_597_870.7)
    expect(sun).toBeGreaterThan(jup)
    expect(jup).toBeGreaterThan(earth)
    expect(sun / earth).toBeLessThan(695700 / 6371) // amplified small bodies → compressed ratio
  })
})
