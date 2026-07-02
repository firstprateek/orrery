import type { SimClock } from '../sim/time'
import { jdToDate } from '../config/constants'

// Time controls: play/pause, a speed ladder (Julian days per real second), a
// "now" reset, a human-readable date readout, and a draggable scrubber spanning
// ±100 years. The ephemeris is sampled from clock.jd each frame, so scrubbing
// and fast playback are smooth and frame-rate independent.

const SPEEDS = [
  { label: 'real-time', v: 1 / 86400 },
  { label: '1 hour/s', v: 1 / 24 },
  { label: '1 day/s', v: 1 },
  { label: '1 week/s', v: 7 },
  { label: '1 month/s', v: 30 },
  { label: '1 year/s', v: 365 },
]
const DEFAULT_SPEED_INDEX = 1 // 1 hour/s — gentle: Earth turns once per ~24s, orbits creep

const btnCss =
  'background:#171a26;color:#cdd6ff;border:1px solid #2a2f44;border-radius:8px;padding:6px 10px;font:13px system-ui;cursor:pointer;min-width:34px'

export class TimeBar {
  private readonly playBtn: HTMLButtonElement
  private readonly dateEl: HTMLSpanElement
  private readonly scrub: HTMLInputElement
  private readonly jdMin: number
  private readonly jdMax: number
  private dragging = false

  constructor(
    private readonly clock: SimClock,
    private readonly onChange: () => void,
  ) {
    // Share the clock's window so the scrubber and the clamp always agree.
    this.jdMin = clock.jdMin
    this.jdMax = clock.jdMax

    const bar = document.createElement('div')
    bar.style.cssText =
      'position:fixed;bottom:14px;left:50%;transform:translateX(-50%);display:flex;gap:10px;align-items:center;' +
      'background:rgba(12,14,22,0.72);border:1px solid #232838;border-radius:12px;padding:8px 12px;backdrop-filter:blur(8px);z-index:10;max-width:min(720px,92vw)'

    this.playBtn = document.createElement('button')
    this.playBtn.style.cssText = btnCss
    this.playBtn.setAttribute('aria-label', 'Play or pause time')
    this.playBtn.addEventListener('click', () => {
      this.clock.playing = !this.clock.playing
      this.syncPlay()
      this.onChange()
    })
    bar.appendChild(this.playBtn)

    const speed = document.createElement('select')
    speed.setAttribute('aria-label', 'Playback speed')
    speed.style.cssText = btnCss
    SPEEDS.forEach((s, i) => {
      const o = document.createElement('option')
      o.value = String(i)
      o.textContent = s.label
      speed.appendChild(o)
    })
    speed.value = String(DEFAULT_SPEED_INDEX)
    this.clock.speed = SPEEDS[DEFAULT_SPEED_INDEX].v
    speed.addEventListener('change', () => {
      this.clock.speed = SPEEDS[+speed.value].v
      this.onChange()
    })
    bar.appendChild(speed)

    const now = document.createElement('button')
    now.textContent = 'Now'
    now.style.cssText = btnCss
    now.addEventListener('click', () => {
      this.clock.setNow()
      this.refresh()
      this.onChange()
    })
    bar.appendChild(now)

    this.dateEl = document.createElement('span')
    this.dateEl.style.cssText = 'color:#aab3d0;font:12px ui-monospace,monospace;white-space:nowrap;min-width:150px;text-align:center'
    bar.appendChild(this.dateEl)

    this.scrub = document.createElement('input')
    this.scrub.type = 'range'
    this.scrub.min = '0'
    this.scrub.max = '1'
    this.scrub.step = '0.0001'
    this.scrub.setAttribute('aria-label', 'Scrub date')
    this.scrub.style.cssText = 'flex:1;min-width:120px;accent-color:#6f8bff;cursor:pointer'
    this.scrub.addEventListener('pointerdown', () => (this.dragging = true))
    // pointercancel/lostpointercapture too: a browser-claimed touch gesture must
    // not leave the drag flag stuck (which would freeze the thumb forever).
    for (const ev of ['pointerup', 'pointercancel', 'lostpointercapture']) {
      this.scrub.addEventListener(ev, () => (this.dragging = false))
    }
    this.scrub.addEventListener('input', () => {
      this.clock.playing = false
      this.clock.jd = this.jdMin + +this.scrub.value * (this.jdMax - this.jdMin)
      this.syncPlay()
      this.refresh()
      this.onChange()
    })
    bar.appendChild(this.scrub)

    document.body.appendChild(bar)
    this.syncPlay()
    this.refresh()
  }

  private syncPlay(): void {
    this.playBtn.textContent = this.clock.playing ? '⏸' : '▶'
  }

  /** Update the date text and scrubber position (call throttled). */
  refresh(): void {
    const d = jdToDate(this.clock.jd)
    this.dateEl.textContent = d.toISOString().slice(0, 16).replace('T', '  ') + ' UTC'
    if (!this.dragging) {
      this.scrub.value = String((this.clock.jd - this.jdMin) / (this.jdMax - this.jdMin))
    }
  }
}
