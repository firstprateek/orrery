import { describe, it, expect } from 'vitest'
import { raySphere } from './raySphere'

describe('raySphere', () => {
  it('hits a sphere ahead of the ray at the near surface', () => {
    // Ray from origin down +z toward a unit sphere centred at z=10.
    const t = raySphere(0, 0, 0, 0, 0, 1, 0, 0, 10, 1)
    expect(t).toBeCloseTo(9, 6)
  })

  it('misses a sphere off to the side', () => {
    expect(raySphere(0, 0, 0, 0, 0, 1, 5, 0, 10, 1)).toBeNull()
  })

  it('returns the far exit when the ray starts inside the sphere', () => {
    const t = raySphere(0, 0, 0, 0, 0, 1, 0, 0, 0, 2)
    expect(t).toBeCloseTo(2, 6)
  })

  it('returns null for a sphere entirely behind the ray', () => {
    expect(raySphere(0, 0, 0, 0, 0, 1, 0, 0, -10, 1)).toBeNull()
  })

  it('grazes a sphere tangent to the ray', () => {
    const t = raySphere(0, 0, 0, 0, 0, 1, 1, 0, 10, 1)
    expect(t).toBeCloseTo(10, 4)
  })
})
