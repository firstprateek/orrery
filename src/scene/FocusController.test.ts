import { describe, it, expect } from 'vitest'
import { FocusController } from './FocusController'

const P = (x: number, y: number, z: number) => ({ x, y, z })

describe('FocusController', () => {
  it('snaps and locks onto the initial target', () => {
    const f = new FocusController('earth', { earth: P(1, 0, 0) })
    expect(f.focusAu).toEqual({ x: 1, y: 0, z: 0 })
    expect(f.flying).toBe(false)
  })

  it('tracks a moving locked target exactly each frame (the playback fix)', () => {
    const pos = { earth: P(1, 0, 0) }
    const f = new FocusController('earth', pos)
    pos.earth = P(2, 3, -1)
    f.update(pos, 1 / 60)
    expect(f.focusAu).toEqual({ x: 2, y: 3, z: -1 })
  })

  it('retargets mid-flight without a jump and restarts the flight window', () => {
    const pos = { earth: P(0, 0, 0), mars: P(10, 0, 0), jupiter: P(0, 20, 0) }
    const f = new FocusController('earth', pos)
    f.setTarget('mars')
    for (let i = 0; i < 30; i++) f.update(pos, 1 / 60) // half a second into the flight
    const mid = { ...f.focusAu }
    f.setTarget('jupiter') // user clicks elsewhere mid-flight
    expect(f.flying).toBe(true)
    f.update(pos, 1 / 60)
    // continuous: one frame after the retarget the origin has barely moved
    const jumped = Math.hypot(f.focusAu.x - mid.x, f.focusAu.y - mid.y, f.focusAu.z - mid.z)
    expect(jumped).toBeLessThan(1)
    // and it eventually settles on the NEW target
    for (let i = 0; i < 300; i++) f.update(pos, 1 / 60)
    expect(f.flying).toBe(false)
    expect(f.focusAu.x).toBeCloseTo(0, 6)
    expect(f.focusAu.y).toBeCloseTo(20, 6)
  })

  it('springs toward a new target during the flight, then locks on', () => {
    const pos = { earth: P(0, 0, 0), mars: P(10, 0, 0) }
    const f = new FocusController('earth', pos)
    f.setTarget('mars')
    expect(f.flying).toBe(true)

    f.update(pos, 0.2)
    expect(f.focusAu.x).toBeGreaterThan(0)
    expect(f.focusAu.x).toBeLessThan(10)

    for (let i = 0; i < 120; i++) f.update(pos, 1 / 60)
    expect(f.flying).toBe(false)

    pos.mars = P(12, -4, 2)
    f.update(pos, 1 / 60)
    expect(f.focusAu).toEqual({ x: 12, y: -4, z: 2 })
  })
})
