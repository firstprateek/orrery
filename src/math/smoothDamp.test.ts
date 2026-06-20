import { describe, it, expect } from 'vitest'
import { smoothDamp, smoothDampVec3, type Vec3Vel } from './smoothDamp'

describe('smoothDamp', () => {
  it('stays put when already at the target', () => {
    const vel = { value: 0 }
    expect(smoothDamp(5, 5, vel, 0.4, 1 / 60)).toBeCloseTo(5, 10)
    expect(vel.value).toBeCloseTo(0, 10)
  })

  it('converges monotonically toward the target without overshoot', () => {
    const vel = { value: 0 }
    let x = 0
    let prev = 0
    for (let i = 0; i < 240; i++) {
      x = smoothDamp(x, 10, vel, 0.4, 1 / 60)
      expect(x).toBeGreaterThanOrEqual(prev - 1e-9) // never moves backward (no overshoot)
      expect(x).toBeLessThanOrEqual(10.0001) // never passes the target
      prev = x
    }
    expect(x).toBeGreaterThan(9.9)
  })

  it('is roughly frame-rate independent (same time, different dt → similar result)', () => {
    const run = (dt: number) => {
      const vel = { value: 0 }
      let x = 0
      for (let t = 0; t < 0.5; t += dt) x = smoothDamp(x, 1, vel, 0.3, dt)
      return x
    }
    expect(Math.abs(run(1 / 120) - run(1 / 30))).toBeLessThan(0.05)
  })
})

describe('smoothDampVec3', () => {
  it('drives all axes toward the target and aliases safely with out===current', () => {
    const cur = { x: 0, y: 0, z: 0 }
    const vel: Vec3Vel = { x: 0, y: 0, z: 0 }
    for (let i = 0; i < 300; i++) smoothDampVec3(cur, { x: 3, y: -4, z: 12 }, vel, 0.4, 1 / 60, cur)
    expect(cur.x).toBeCloseTo(3, 1)
    expect(cur.y).toBeCloseTo(-4, 1)
    expect(cur.z).toBeCloseTo(12, 1)
  })
})
