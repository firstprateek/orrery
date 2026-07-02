import { describe, it, expect } from 'vitest'
import { SimClock, TIME_WINDOW_DAYS } from './time'

describe('SimClock', () => {
  it('advances jd by speed × dt only while playing', () => {
    const c = new SimClock(2451545)
    c.speed = 7 // 1 week per second
    c.advance(2)
    expect(c.jd).toBe(2451545) // paused by default
    c.playing = true
    c.advance(2)
    expect(c.jd).toBeCloseTo(2451545 + 14, 9)
  })

  it('supports negative speed (reverse time)', () => {
    const c = new SimClock(2451545)
    c.playing = true
    c.speed = -1
    c.advance(3)
    expect(c.jd).toBeCloseTo(2451542, 9)
  })

  it('clamps to the ±100-year window and auto-pauses at the edge', () => {
    const c = new SimClock(2451545)
    c.playing = true
    c.speed = TIME_WINDOW_DAYS // reach the edge in ~1s
    c.advance(5)
    expect(c.jd).toBe(c.jdMax)
    expect(c.playing).toBe(false)
  })

  it('clamps a deep-linked date via clamp()', () => {
    const c = new SimClock(2451545)
    expect(c.clamp(c.jdMax + 1e6)).toBe(c.jdMax)
    expect(c.clamp(c.jdMin - 1e6)).toBe(c.jdMin)
    expect(c.clamp(2451545)).toBe(2451545)
  })

  it('speed 0 never moves the clock', () => {
    const c = new SimClock(2451545)
    c.playing = true
    c.speed = 0
    c.advance(100)
    expect(c.jd).toBe(2451545)
  })
})
