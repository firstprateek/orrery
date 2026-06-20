import { describe, it, expect } from 'vitest'
import {
  wrapAngle,
  solveKepler,
  eccentricToTrue,
  elementsToCartesian,
  orbitalRadius,
  type OrbitalElements,
} from './kepler'

const TAU = 2 * Math.PI

describe('wrapAngle', () => {
  it('leaves angles in range untouched', () => {
    expect(wrapAngle(0)).toBeCloseTo(0, 12)
    expect(wrapAngle(1)).toBeCloseTo(1, 12)
    expect(wrapAngle(-1)).toBeCloseTo(-1, 12)
  })

  it('wraps angles outside (-π, π]', () => {
    expect(wrapAngle(TAU)).toBeCloseTo(0, 12)
    expect(wrapAngle(TAU + 1)).toBeCloseTo(1, 12)
    expect(wrapAngle(3 * Math.PI)).toBeCloseTo(Math.PI, 12)
  })
})

describe('solveKepler', () => {
  it('returns E = M for a circular orbit (e = 0)', () => {
    for (const M of [0, 0.5, 1.5, 3.0]) {
      expect(solveKepler(M, 0)).toBeCloseTo(wrapAngle(M), 10)
    }
  })

  it('satisfies Kepler’s equation M = E - e·sin(E) across eccentricities', () => {
    for (const e of [0, 0.1, 0.3, 0.6, 0.9]) {
      for (const M of [0.1, 1.0, 2.0, 3.0]) {
        const E = solveKepler(M, e)
        expect(E - e * Math.sin(E)).toBeCloseTo(M, 9)
      }
    }
  })

  it('handles M = 0 → E = 0 even at high eccentricity', () => {
    expect(solveKepler(0, 0.95)).toBeCloseTo(0, 9)
  })
})

describe('eccentricToTrue', () => {
  it('matches E for a circular orbit', () => {
    for (const E of [0.2, 1.0, 2.5]) {
      expect(eccentricToTrue(E, 0)).toBeCloseTo(E, 10)
    }
  })

  it('is 0 and π at periapsis and apoapsis', () => {
    expect(eccentricToTrue(0, 0.5)).toBeCloseTo(0, 10)
    expect(eccentricToTrue(Math.PI, 0.5)).toBeCloseTo(Math.PI, 10)
  })
})

describe('elementsToCartesian', () => {
  const circular = (M: number): OrbitalElements => ({ a: 1, e: 0, i: 0, om: 0, w: 0, M })

  it('places periapsis of a flat circular orbit on +x', () => {
    const p = elementsToCartesian(circular(0))
    expect(p.x).toBeCloseTo(1, 10)
    expect(p.y).toBeCloseTo(0, 10)
    expect(p.z).toBeCloseTo(0, 10)
  })

  it('advances a flat circular orbit to +y at M = π/2', () => {
    const p = elementsToCartesian(circular(Math.PI / 2))
    expect(p.x).toBeCloseTo(0, 10)
    expect(p.y).toBeCloseTo(1, 10)
    expect(p.z).toBeCloseTo(0, 10)
  })

  it('puts a polar orbit (i = π/2) out of the ecliptic plane', () => {
    const p = elementsToCartesian({ a: 1, e: 0, i: Math.PI / 2, om: 0, w: 0, M: Math.PI / 2 })
    expect(p.x).toBeCloseTo(0, 10)
    expect(p.y).toBeCloseTo(0, 10)
    expect(p.z).toBeCloseTo(1, 10)
  })

  it('keeps |r| consistent with a·(1 - e·cosE) for an eccentric orbit', () => {
    const el: OrbitalElements = { a: 2, e: 0.3, i: 0.4, om: 0.7, w: 1.1, M: 1.0 }
    const p = elementsToCartesian(el)
    const E = solveKepler(el.M, el.e)
    const r = Math.sqrt(p.x * p.x + p.y * p.y + p.z * p.z)
    expect(r).toBeCloseTo(orbitalRadius(el.a, el.e, E), 9)
  })
})
