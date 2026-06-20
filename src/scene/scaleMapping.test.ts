import { describe, it, expect } from 'vitest'
import { makeTrueScale } from './scaleMapping'

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
