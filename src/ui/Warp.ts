// The light-speed jump between star systems. A full-screen 2D canvas over the
// scene draws star streaks rushing out of the vanishing point (the direction
// you're travelling), over a backdrop that darkens the scene as you speed up.
// main.ts turns the camera to face the destination, swaps the loaded system
// while the backdrop hides the scene, and lands you in the new one as the
// streaks slow down. The timeline is a pure function so its shape is testable.

/** Seconds per phase. */
export const WARP_PHASES = {
  /** Camera turns to face the destination; no streaks yet. */
  align: 1.0,
  /** Streaks build from points to long lines; the scene fades behind them. */
  accel: 1.2,
  /** Full speed. The system swap happens in here, hidden by the backdrop. */
  cruise: 1.0,
  /** Streaks shorten back to points and the new system shows through. */
  decel: 1.4,
} as const

const A = WARP_PHASES.align
const C0 = A + WARP_PHASES.accel // cruise start
const D0 = C0 + WARP_PHASES.cruise // decel start
export const WARP_TOTAL = D0 + WARP_PHASES.decel
/** When the old system may be swapped out: mid-cruise, the backdrop is opaque. */
export const WARP_SWAP_AT = C0 + WARP_PHASES.cruise * 0.4

/** Extra field of view at full speed, degrees: the view widens like a jump to light speed. */
export const WARP_FOV_KICK = 22

export interface WarpState {
  /** Streak speed 0…1. */
  speed: number
  /** Dark backdrop over the scene 0…1 (1 hides it completely). */
  backdrop: number
  /** White flash 0…1, as you hit full speed. */
  flash: number
  /** Field-of-view widening, degrees. */
  fovKick: number
  /** Share of the distance covered 0…1, for the countdown. */
  progress: number
}

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x)
const smooth = (x: number) => {
  const t = clamp01(x)
  return t * t * (3 - 2 * t)
}

/** The effect at `t` seconds into the jump. */
export function warpTimeline(t: number): WarpState {
  let speed = 0
  let backdrop = 0
  if (t >= A && t < C0) {
    const u = (t - A) / WARP_PHASES.accel
    speed = u * u
    backdrop = smooth(u * 1.15)
  } else if (t >= C0 && t < D0) {
    speed = 1
    backdrop = 1
  } else if (t >= D0) {
    const u = clamp01((t - D0) / WARP_PHASES.decel)
    speed = (1 - u) * (1 - u)
    backdrop = 1 - smooth(u * 1.25)
  }
  const sinceCruise = t - C0
  // A quick bright pop as you hit light speed (squared decay: a pop, not a grey wash).
  const flash = sinceCruise >= 0 && sinceCruise < 0.22 ? 0.7 * (1 - sinceCruise / 0.22) ** 2 : 0
  const progress = smooth((t - A) / (WARP_TOTAL - A))
  return { speed, backdrop, flash, fovKick: WARP_FOV_KICK * speed, progress }
}

interface Streak {
  x: number
  y: number
  z: number
  /** Colour band: 0 blue-white, 1 white. */
  tint: number
}

/** Streaks are drawn in a few bands (tint × nearness), one stroke per band. */
const NEAR_BANDS = 4
const TINTS = [205, 228] // hue

const STREAKS = 520
const IDLE: WarpState = { speed: 0, backdrop: 0, flash: 0, fovKick: 0, progress: 0 }

export class WarpEffect {
  private readonly canvas: HTMLCanvasElement
  private readonly ctx: CanvasRenderingContext2D
  private readonly caption: HTMLDivElement
  private readonly title: HTMLDivElement
  private readonly sub: HTMLDivElement
  private readonly streaks: Streak[] = []
  private t = 0
  private running = false
  private released = false
  private distanceLy = 0
  private onSwap: (() => void) | null = null
  private onDone: (() => void) | null = null
  private dpr = 1
  private frame = 0

  constructor() {
    this.canvas = document.createElement('canvas')
    this.canvas.setAttribute('aria-hidden', 'true')
    // Over the toolbar and panels (the jump is modal), under the help overlay.
    this.canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;z-index:27;display:none;pointer-events:auto;touch-action:none'
    this.ctx = this.canvas.getContext('2d')!
    this.caption = document.createElement('div')
    this.caption.setAttribute('aria-live', 'polite')
    this.caption.style.cssText =
      'position:fixed;left:0;right:0;bottom:calc(18% + env(safe-area-inset-bottom));z-index:27;display:none;text-align:center;' +
      'pointer-events:none;font:15px/1.5 system-ui;color:#cdd6ff;text-shadow:0 1px 6px #000;' +
      'width:max-content;max-width:calc(100vw - 32px);margin:0 auto;padding:8px 18px;border-radius:12px;' +
      'background:radial-gradient(closest-side,rgba(2,3,10,0.75),rgba(2,3,10,0))'
    this.title = document.createElement('div')
    this.title.style.cssText = 'font-size:20px;font-weight:600;color:#9ff7e8;letter-spacing:0.02em'
    this.sub = document.createElement('div')
    this.sub.style.cssText = 'color:#a9b3d8;font:13px ui-monospace,monospace'
    this.caption.append(this.title, this.sub)
    document.body.append(this.canvas, this.caption)
    for (let i = 0; i < STREAKS; i++) this.streaks.push(this.spawn({ x: 0, y: 0, z: 0, tint: 0 }, true))
  }

  get active(): boolean {
    return this.running
  }

  /**
   * Start a jump. Resolves `atSwap` when the backdrop hides the scene; the jump
   * holds at full speed until release() (the next system may still be
   * loading), then `done` resolves when it has slowed to a stop.
   */
  begin(destination: string, distanceLy: number): { atSwap: Promise<void>; done: Promise<void> } {
    this.t = 0
    this.running = true
    this.released = false
    this.distanceLy = distanceLy
    this.title.textContent = destination
    this.sub.textContent = ''
    this.resize()
    this.canvas.style.display = 'block'
    this.caption.style.display = 'block'
    const atSwap = new Promise<void>((r) => (this.onSwap = r))
    const done = new Promise<void>((r) => (this.onDone = r))
    return { atSwap, done }
  }

  /** Let the jump carry on past the swap point. */
  release(): void {
    this.released = true
  }

  /** Abort (a failed load): hide everything at once. */
  cancel(): void {
    this.finish()
  }

  /**
   * Advance by `dt` seconds and draw. `vp` is the vanishing point in CSS px
   * (where the destination is on screen), or null when it is off screen.
   */
  update(dt: number, vp: { x: number; y: number } | null): WarpState {
    if (!this.running) return IDLE
    const next = this.t + dt
    if (!this.released && next >= WARP_SWAP_AT) {
      this.t = WARP_SWAP_AT // hold at full speed until the next system is ready
      this.onSwap?.()
      this.onSwap = null
    } else {
      this.t = next
    }
    const s = warpTimeline(this.t)
    this.draw(s, vp, dt)
    const left = Math.max(0, this.distanceLy * (1 - s.progress))
    // Throttled like main.ts's other DOM writes: a text swap costs a layout.
    if (++this.frame % 4 === 0 || this.t >= WARP_TOTAL) {
      this.sub.textContent = this.t < A ? 'Setting course' : `${left < 10 ? left.toFixed(2) : left.toFixed(1)} light-years to go`
    }
    if (this.t >= WARP_TOTAL) this.finish()
    return s
  }

  private finish(): void {
    this.running = false
    this.canvas.style.display = 'none'
    this.caption.style.display = 'none'
    this.onSwap?.()
    this.onSwap = null
    this.onDone?.()
    this.onDone = null
  }

  private resize(): void {
    this.dpr = Math.min(window.devicePixelRatio || 1, 2)
    const w = Math.round(window.innerWidth * this.dpr)
    const h = Math.round(window.innerHeight * this.dpr)
    if (this.canvas.width !== w || this.canvas.height !== h) {
      this.canvas.width = w
      this.canvas.height = h
    }
  }

  private spawn(s: Streak, anyDepth: boolean): Streak {
    // A tunnel of stars around the line of flight, never dead centre.
    const a = Math.random() * Math.PI * 2
    const r = 0.06 + Math.sqrt(Math.random()) * 0.94
    s.x = Math.cos(a) * r
    s.y = Math.sin(a) * r
    s.z = anyDepth ? 0.05 + Math.random() * 0.95 : 0.8 + Math.random() * 0.2
    s.tint = Math.random() < 0.5 ? 0 : 1
    return s
  }

  private draw(s: WarpState, vp: { x: number; y: number } | null, dt: number): void {
    this.resize()
    const ctx = this.ctx
    const W = this.canvas.width
    const H = this.canvas.height
    const cx = (vp?.x ?? window.innerWidth / 2) * this.dpr
    const cy = (vp?.y ?? window.innerHeight / 2) * this.dpr
    const scale = Math.max(W, H) * 0.42
    ctx.globalCompositeOperation = 'source-over'
    ctx.clearRect(0, 0, W, H)
    if (s.backdrop > 0) {
      ctx.fillStyle = `rgba(2,3,10,${s.backdrop.toFixed(3)})`
      ctx.fillRect(0, 0, W, H)
    }
    if (s.speed <= 0.001 && s.flash <= 0) return

    ctx.globalCompositeOperation = 'lighter'
    // Glow where you're heading.
    const glowR = scale * (0.25 + 0.35 * s.speed)
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR)
    g.addColorStop(0, `rgba(200,230,255,${(0.35 * s.speed).toFixed(3)})`)
    g.addColorStop(1, 'rgba(120,160,255,0)')
    ctx.fillStyle = g
    ctx.fillRect(cx - glowR, cy - glowR, glowR * 2, glowR * 2)

    // Stars fly towards you: z shrinks, each drawn from where it was a moment ago.
    const travel = dt * (0.08 + 1.6 * s.speed)
    const trail = 0.004 + 0.32 * s.speed
    for (const st of this.streaks) {
      st.z -= travel
      if (st.z <= 0.02) this.spawn(st, false)
      const x0 = cx + (st.x / st.z) * scale
      const y0 = cy + (st.y / st.z) * scale
      if (x0 < -50 || x0 > W + 50 || y0 < -50 || y0 > H + 50) this.spawn(st, false)
    }
    const lw = this.dpr * (0.8 + 0.9 * s.speed)
    const baseAlpha = clamp01(s.speed * 1.6)
    // Batch every streak into one path per (tint, nearness) band: 8 strokes a
    // frame instead of one per streak.
    for (let tint = 0; tint < TINTS.length; tint++) {
      for (let band = 0; band < NEAR_BANDS; band++) {
        const near = (band + 0.5) / NEAR_BANDS
        const alpha = baseAlpha * (0.25 + 0.75 * near)
        if (alpha < 0.02) continue
        ctx.strokeStyle = `hsla(${TINTS[tint]},85%,${(78 + 18 * s.speed).toFixed(0)}%,${alpha.toFixed(3)})`
        ctx.lineWidth = lw * (0.6 + near)
        ctx.beginPath()
        for (const st of this.streaks) {
          if (st.tint !== tint) continue
          const b = Math.min(NEAR_BANDS - 1, Math.floor(clamp01((1.05 - st.z) * 1.2) * NEAR_BANDS))
          if (b !== band) continue
          const z1 = Math.min(1.2, st.z + trail)
          ctx.moveTo(cx + (st.x / z1) * scale, cy + (st.y / z1) * scale)
          ctx.lineTo(cx + (st.x / st.z) * scale, cy + (st.y / st.z) * scale)
        }
        ctx.stroke()
      }
    }
    if (s.flash > 0) {
      ctx.globalCompositeOperation = 'source-over'
      ctx.fillStyle = `rgba(235,245,255,${s.flash.toFixed(3)})`
      ctx.fillRect(0, 0, W, H)
    }
  }
}
