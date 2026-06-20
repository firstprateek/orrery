import { describe, it, expect } from 'vitest'
import { computePositions } from './ephemeris'
import { J2000_JD, kmToAu } from '../config/constants'
import { BODY_BY_ID } from '../config/bodies'
import type { Vec3 } from '../math/vec3'

const pos = computePositions(J2000_JD)
const dist = (a: Vec3, b: Vec3) => Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z)
const fromSun = (id: string) => dist(pos[id], pos['sun'])

describe('computePositions', () => {
  it('puts the Sun at the heliocentric origin', () => {
    expect(pos['sun']).toEqual({ x: 0, y: 0, z: 0 })
  })

  it('produces finite positions for every body', () => {
    for (const id in pos) {
      const p = pos[id]
      expect(Number.isFinite(p.x) && Number.isFinite(p.y) && Number.isFinite(p.z)).toBe(true)
    }
  })

  it('places the planets at their known heliocentric distances (AU)', () => {
    expect(fromSun('mercury')).toBeGreaterThan(0.30)
    expect(fromSun('mercury')).toBeLessThan(0.47)
    expect(fromSun('earth')).toBeGreaterThan(0.95)
    expect(fromSun('earth')).toBeLessThan(1.02)
    expect(fromSun('mars')).toBeGreaterThan(1.38)
    expect(fromSun('mars')).toBeLessThan(1.67)
    expect(fromSun('jupiter')).toBeGreaterThan(4.95)
    expect(fromSun('jupiter')).toBeLessThan(5.46)
    expect(fromSun('neptune')).toBeGreaterThan(29.7)
    expect(fromSun('neptune')).toBeLessThan(30.4)
  })

  it('keeps the planets near the ecliptic plane (small z)', () => {
    for (const id of ['earth', 'jupiter', 'saturn']) {
      // |z| should be a small fraction of the heliocentric distance.
      expect(Math.abs(pos[id].z)).toBeLessThan(fromSun(id) * 0.1)
    }
  })

  it('places moons at the right distance from their parent', () => {
    const near = (moon: string, expectAu: number, tol: number) => {
      const d = dist(pos[moon], pos[BODY_BY_ID[moon].parent as string])
      expect(d).toBeGreaterThan(expectAu * (1 - tol))
      expect(d).toBeLessThan(expectAu * (1 + tol))
    }
    near('moon', 0.00257, 0.15) // ~384,400 km
    near('phobos', kmToAu(9375), 0.05)
    near('io', kmToAu(421700), 0.1)
    near('titan', kmToAu(1221900), 0.05)
    near('triton', kmToAu(354800), 0.05)
  })
})
