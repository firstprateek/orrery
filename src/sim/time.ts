import { unixMsToJd } from '../config/constants'

/** Half-width of the supported time window around "now" (the scrubber's range). */
export const TIME_WINDOW_DAYS = 100 * 365.25

/**
 * Simulation clock. Holds a Julian Date that the ephemeris is sampled at. Time
 * is decoupled from frame rate: `advance(dt)` moves the clock by `speed` Julian
 * days per real second. The clock is clamped to ±100 years around creation time
 * (matching the scrubber): beyond that the fixed osculating elements and
 * analytic ephemeris degrade silently, so playback auto-pauses at the edge.
 */
export class SimClock {
  jd: number
  playing = false
  /** Julian days per real second. */
  speed = 1
  readonly jdMin: number
  readonly jdMax: number

  constructor(jd: number = unixMsToJd(Date.now())) {
    this.jdMin = jd - TIME_WINDOW_DAYS
    this.jdMax = jd + TIME_WINDOW_DAYS
    this.jd = this.clamp(jd)
  }

  clamp(jd: number): number {
    return Math.min(this.jdMax, Math.max(this.jdMin, jd))
  }

  advance(dtSeconds: number): void {
    if (!this.playing || this.speed === 0) return
    const next = this.jd + this.speed * dtSeconds
    this.jd = this.clamp(next)
    if (this.jd !== next) this.playing = false // hit the edge of the window
  }

  setNow(): void {
    this.jd = this.clamp(unixMsToJd(Date.now()))
  }
}
