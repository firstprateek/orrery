import { unixMsToJd } from '../config/constants'

/**
 * Simulation clock. Holds a Julian Date that the ephemeris is sampled at. Time
 * is decoupled from frame rate: `advance(dt)` moves the clock by `speed` Julian
 * days per real second. The M3 UI drives play/pause/speed/scrub; M1 leaves it
 * paused at "now".
 */
export class SimClock {
  jd: number
  playing = false
  /** Julian days per real second. */
  speed = 1

  constructor(jd: number = unixMsToJd(Date.now())) {
    this.jd = jd
  }

  advance(dtSeconds: number): void {
    if (this.playing && this.speed !== 0) this.jd += this.speed * dtSeconds
  }

  setNow(): void {
    this.jd = unixMsToJd(Date.now())
  }
}
