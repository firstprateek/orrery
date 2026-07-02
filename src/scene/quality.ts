// User-selectable quality tiers. Each maps a target frame rate to concrete
// render settings. The big levers are device pixel ratio (cost ∝ dpr²) and the
// bloom resolution; MSAA and belt density fill in the rest. log-depth disables
// early-Z, so this is all about fill rate.

export type QualityTier = 'performance' | 'quality' | 'highest'

export interface QualitySettings {
  tier: QualityTier
  label: string
  targetFps: number
  /** Max device pixel ratio. */
  dpr: number
  /**
   * Use the post-processing composer (HDR target + bloom). Performance turns it
   * OFF and renders directly — the lightest, most-compatible path (no float
   * render target, no MSAA-float, no bloom), which sidesteps the GPU/browser
   * quirks that can make the composer crawl.
   */
  post: boolean
  /** MSAA samples on the HDR target (composer tiers only). */
  msaaSamples: number
  /** Bloom internal resolution as a fraction of the framebuffer. */
  bloomScale: number
  /** Rendered asteroid instances. */
  beltCount: number
}

export const QUALITY: Record<QualityTier, QualitySettings> = {
  // msaaSamples stays 0 on every composer tier: multisampling a HalfFloat target
  // triggers a full-res float MSAA blit-resolve every pass that is catastrophic
  // (or software-emulated) on GPUs/browsers without native float-MSAA. Performance
  // skips the composer entirely (direct render, MSAA from the default framebuffer).
  performance: { tier: 'performance', label: 'Fast · 120fps', targetFps: 120, dpr: 1.0, post: false, msaaSamples: 0, bloomScale: 0.5, beltCount: 1500 },
  quality: { tier: 'quality', label: 'Balanced · 60fps', targetFps: 60, dpr: 1.5, post: true, msaaSamples: 0, bloomScale: 0.5, beltCount: 2500 },
  highest: { tier: 'highest', label: 'Beautiful · 30fps', targetFps: 30, dpr: 2.0, post: true, msaaSamples: 0, bloomScale: 1.0, beltCount: 3500 },
}

/** Largest belt allocation across tiers (InstancedMesh capacity). */
export const MAX_BELT = QUALITY.highest.beltCount

export const QUALITY_ORDER: QualityTier[] = ['performance', 'quality', 'highest']

export function resolveTier(value: string | null): QualityTier {
  return value === 'quality' || value === 'highest' ? value : 'performance'
}
