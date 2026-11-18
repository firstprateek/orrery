import { describe, it, expect } from 'vitest'
import { WARP_FOV_KICK, WARP_PHASES, WARP_SWAP_AT, WARP_TOTAL, warpTimeline } from './Warp'

describe('warp timeline', () => {
  const C0 = WARP_PHASES.align + WARP_PHASES.accel

  it('starts still, while the camera turns to the destination', () => {
    for (const t of [0, 0.5, WARP_PHASES.align - 0.01]) {
      const s = warpTimeline(t)
      expect(s.speed).toBe(0)
      expect(s.backdrop).toBe(0)
      expect(s.fovKick).toBe(0)
    }
  })

  it('builds speed smoothly to full, then slows back to a stop', () => {
    let prev = 0
    for (let t = WARP_PHASES.align; t < C0; t += 0.01) {
      const s = warpTimeline(t).speed
      expect(s).toBeGreaterThanOrEqual(prev)
      expect(s - prev).toBeLessThan(0.05)
      prev = s
    }
    expect(warpTimeline(C0 + 0.1).speed).toBe(1)
    expect(warpTimeline(C0 + 0.1).fovKick).toBe(WARP_FOV_KICK)
    expect(warpTimeline(WARP_TOTAL).speed).toBeCloseTo(0, 12)
    expect(warpTimeline(WARP_TOTAL).backdrop).toBe(0)
    expect(warpTimeline(WARP_TOTAL).fovKick).toBeCloseTo(0, 12)
  })

  it('hides the scene completely when the system is swapped', () => {
    const s = warpTimeline(WARP_SWAP_AT)
    expect(s.backdrop).toBe(1)
    expect(s.speed).toBe(1)
    expect(WARP_SWAP_AT).toBeGreaterThan(C0)
    expect(WARP_SWAP_AT).toBeLessThan(C0 + WARP_PHASES.cruise)
  })

  it('counts the distance down from 0 to 1 over the jump', () => {
    expect(warpTimeline(0).progress).toBe(0)
    expect(warpTimeline(WARP_TOTAL).progress).toBe(1)
    let prev = 0
    for (let t = 0; t <= WARP_TOTAL; t += 0.05) {
      const p = warpTimeline(t).progress
      expect(p).toBeGreaterThanOrEqual(prev)
      prev = p
    }
  })

  it('takes a few seconds in all', () => {
    expect(WARP_TOTAL).toBeGreaterThan(3.5)
    expect(WARP_TOTAL).toBeLessThan(6)
  })
})
