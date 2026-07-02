import { describe, it, expect } from 'vitest'
import { bodyRotationAngle } from './rotation'
import { J2000_JD } from '../config/constants'

const TAU = 2 * Math.PI

describe('bodyRotationAngle', () => {
  it('is 0 at the epoch', () => {
    expect(bodyRotationAngle(J2000_JD, 24)).toBeCloseTo(0, 10)
  })

  it('is ~π after half a rotation period', () => {
    // 24h period → half a day later = half a turn.
    expect(bodyRotationAngle(J2000_JD + 0.5, 24)).toBeCloseTo(Math.PI, 8)
  })

  it('completes one turn per period (wraps to [0, 2π))', () => {
    const a = bodyRotationAngle(J2000_JD + 1, 24) // exactly one period later
    expect(a).toBeGreaterThanOrEqual(0)
    expect(a).toBeLessThan(1e-6) // back to ~0
  })

  it('always returns a value in [0, 2π)', () => {
    for (const jd of [J2000_JD - 5000, J2000_JD + 12345.678, J2000_JD + 0.123]) {
      for (const p of [9.9, 23.93, 1407.6, -17.24, -5832.5]) {
        const a = bodyRotationAngle(jd, p)
        expect(a).toBeGreaterThanOrEqual(0)
        expect(a).toBeLessThan(TAU)
      }
    }
  })

  it('spins retrograde the opposite way', () => {
    const dt = 0.1
    const prograde = bodyRotationAngle(J2000_JD + dt, 24)
    const retro = bodyRotationAngle(J2000_JD + dt, -24)
    // small step forward: prograde increases from 0, retrograde wraps near 2π
    expect(prograde).toBeGreaterThan(0)
    expect(prograde).toBeLessThan(Math.PI)
    expect(retro).toBeGreaterThan(Math.PI)
  })

  it('applies the prime-meridian offset W0 as the phase at the epoch', () => {
    const w0 = 38.3213 // the Moon's W0
    const angle = bodyRotationAngle(J2000_JD, 655.72, w0)
    expect(angle).toBeCloseTo((w0 * Math.PI) / 180, 8)
    // and the offset persists one full period later
    const later = bodyRotationAngle(J2000_JD + 655.72 / 24, 655.72, w0)
    expect(later).toBeCloseTo((w0 * Math.PI) / 180, 6)
  })
})
