import { describe, it, expect } from 'vitest'
import { inPlanetShadow, ringPlaneHitRadius } from './ringShadow'

const SUN_X = { x: 1, y: 0, z: 0 } // sun toward +x
const ORIGIN = { x: 0, y: 0, z: 0 }
const POLE_Z = { x: 0, y: 0, z: 1 }

describe('inPlanetShadow', () => {
  it('shadows a point directly behind the planet', () => {
    expect(inPlanetShadow({ x: -5, y: 0, z: 0 }, ORIGIN, SUN_X, 1)).toBe(true)
  })

  it('does not shadow the sun side', () => {
    expect(inPlanetShadow({ x: 5, y: 0, z: 0 }, ORIGIN, SUN_X, 1)).toBe(false)
  })

  it('does not shadow points outside the cylinder radius', () => {
    expect(inPlanetShadow({ x: -5, y: 1.5, z: 0 }, ORIGIN, SUN_X, 1)).toBe(false)
    expect(inPlanetShadow({ x: -5, y: 0.5, z: 0 }, ORIGIN, SUN_X, 1)).toBe(true)
  })

  it('works with an off-centre planet', () => {
    const center = { x: 10, y: 10, z: 0 }
    expect(inPlanetShadow({ x: 7, y: 10, z: 0 }, center, SUN_X, 1)).toBe(true)
    expect(inPlanetShadow({ x: 13, y: 10, z: 0 }, center, SUN_X, 1)).toBe(false)
  })
})

describe('ringPlaneHitRadius', () => {
  // Sun above the ring plane so sun-rays from below cross it.
  const sunUp = { x: 0.6, y: 0, z: 0.8 }

  it('returns the hit radius when the sun ray crosses the ring plane', () => {
    // Fragment below the plane at z=-0.8; ray toward sunUp crosses z=0 at t=1.
    const p = { x: -0.6, y: 0, z: -0.8 }
    const r = ringPlaneHitRadius(p, ORIGIN, sunUp, POLE_Z)
    expect(r).toBeCloseTo(0, 6) // crosses exactly at the centre
    const p2 = { x: 2 - 0.6, y: 0, z: -0.8 }
    expect(ringPlaneHitRadius(p2, ORIGIN, sunUp, POLE_Z)).toBeCloseTo(2, 6)
  })

  it('returns null when the plane is behind the fragment w.r.t. the sun', () => {
    // Fragment ABOVE the plane, sun also above: the ray never crosses it.
    expect(ringPlaneHitRadius({ x: 0, y: 0, z: 0.5 }, ORIGIN, sunUp, POLE_Z)).toBeNull()
  })

  it('returns null when the sun ray is parallel to the ring plane', () => {
    expect(ringPlaneHitRadius({ x: 0, y: 0, z: -1 }, ORIGIN, SUN_X, POLE_Z)).toBeNull()
  })
})
