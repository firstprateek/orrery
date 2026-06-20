import { describe, it, expect } from 'vitest'
import { relativePosition, length } from './FloatingOrigin'
import { AU_KM, kmToAu } from '../config/constants'

describe('relativePosition', () => {
  it('subtracts the origin component-wise', () => {
    expect(relativePosition({ x: 30, y: 5, z: -2 }, { x: 30, y: 1, z: -2 })).toEqual({ x: 0, y: 4, z: 0 })
  })

  it('puts the focused body at the origin', () => {
    const focus = { x: 30.07, y: 0, z: 0 }
    expect(relativePosition(focus, focus)).toEqual({ x: 0, y: 0, z: 0 })
  })

  it('preserves a 1 km separation at 30 AU that float32 absolutes would destroy', () => {
    const origin = { x: 30, y: 0, z: 0 }
    const abs = { x: 30 + kmToAu(1), y: 0, z: 0 }

    // float64 camera-relative math keeps the kilometre.
    const rel = relativePosition(abs, origin)
    expect(rel.x * AU_KM).toBeCloseTo(1, 6)

    // The naive approach — uploading absolute AU as float32 — loses it entirely:
    // both values round to the same float32, so their difference is exactly zero.
    const naive = Math.fround(abs.x) - Math.fround(origin.x)
    expect(naive).toBe(0)
  })
})

describe('length', () => {
  it('computes the Euclidean norm', () => {
    expect(length({ x: 3, y: 4, z: 0 })).toBeCloseTo(5, 12)
    expect(length({ x: 0, y: 0, z: 0 })).toBe(0)
  })
})
