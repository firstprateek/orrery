import { describe, it, expect } from 'vitest'
import { unixMsToJd, jdToUnixMs, jdToDate, J2000_JD } from './constants'

describe('julian date conversions', () => {
  it('anchors the Unix epoch at JD 2440587.5', () => {
    expect(unixMsToJd(0)).toBe(2440587.5)
  })

  it('anchors J2000 at 2000-01-01T12:00Z', () => {
    expect(unixMsToJd(Date.UTC(2000, 0, 1, 12, 0, 0))).toBe(J2000_JD)
    expect(jdToDate(J2000_JD).toISOString()).toBe('2000-01-01T12:00:00.000Z')
  })

  it('round-trips ms → jd → ms within float64 precision (~ms at JD scale)', () => {
    for (const ms of [0, 946728000000, 1750000000000, -86400000]) {
      expect(jdToUnixMs(unixMsToJd(ms))).toBeCloseTo(ms, -1) // within 5 ms
    }
  })

  it('one Julian day equals exactly 86400 seconds', () => {
    expect(jdToUnixMs(J2000_JD + 1) - jdToUnixMs(J2000_JD)).toBe(86_400_000)
  })
})
