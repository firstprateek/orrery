import { describe, it, expect } from 'vitest'
import { tempToRgb } from './starColor'
import { raDecToVec3, OBLIQUITY_J2000 } from './celestial'

describe('tempToRgb', () => {
  it('makes hot stars blue-dominant and cool stars red-dominant', () => {
    const hot = tempToRgb(20000)
    const cool = tempToRgb(3000)
    expect(hot[2]).toBeGreaterThan(hot[0]) // blue > red when hot
    expect(cool[0]).toBeGreaterThan(cool[2]) // red > blue when cool
  })

  it('is roughly white near 6500 K', () => {
    const [r, g, b] = tempToRgb(6500)
    expect(Math.max(r, g, b) - Math.min(r, g, b)).toBeLessThan(0.25)
  })

  it('clamps every channel to 0..1', () => {
    for (const k of [1000, 3000, 6500, 12000, 40000]) {
      for (const c of tempToRgb(k)) {
        expect(c).toBeGreaterThanOrEqual(0)
        expect(c).toBeLessThanOrEqual(1)
      }
    }
  })
})

describe('raDecToVec3', () => {
  it('maps the vernal equinox (0h, 0°) to +x', () => {
    const v = raDecToVec3(0, 0, 1)
    expect(v.x).toBeCloseTo(1, 10)
    expect(v.y).toBeCloseTo(0, 10)
    expect(v.z).toBeCloseTo(0, 10)
  })

  it('maps the north celestial pole (dec +90°) to +z', () => {
    const v = raDecToVec3(1.234, Math.PI / 2, 5)
    expect(v.z).toBeCloseTo(5, 9)
    expect(Math.hypot(v.x, v.y)).toBeCloseTo(0, 9)
  })

  it('maps 6h on the equator to +y', () => {
    const v = raDecToVec3(Math.PI / 2, 0, 1)
    expect(v.y).toBeCloseTo(1, 10)
  })

  it('preserves the requested radius', () => {
    const v = raDecToVec3(2.1, 0.5, 8500)
    expect(Math.hypot(v.x, v.y, v.z)).toBeCloseTo(8500, 6)
  })

  it('has a sane J2000 obliquity (~23.44°)', () => {
    expect((OBLIQUITY_J2000 * 180) / Math.PI).toBeCloseTo(23.4392911, 5)
  })
})
