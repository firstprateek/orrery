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
  /** MSAA samples on the HDR target (0, 2, or 4). */
  msaaSamples: number
  /** Bloom internal resolution as a fraction of the framebuffer. */
  bloomScale: number
  /** Rendered asteroid instances. */
  beltCount: number
}

export const QUALITY: Record<QualityTier, QualitySettings> = {
  performance: { tier: 'performance', label: 'Performance · 120fps', targetFps: 120, dpr: 1.0, msaaSamples: 2, bloomScale: 0.5, beltCount: 1500 },
  quality: { tier: 'quality', label: 'Quality · 60fps', targetFps: 60, dpr: 1.5, msaaSamples: 2, bloomScale: 0.5, beltCount: 2500 },
  highest: { tier: 'highest', label: 'Highest · 30fps', targetFps: 30, dpr: 2.0, msaaSamples: 4, bloomScale: 1.0, beltCount: 3500 },
}

/** Largest belt allocation across tiers (InstancedMesh capacity). */
export const MAX_BELT = QUALITY.highest.beltCount

export const QUALITY_ORDER: QualityTier[] = ['performance', 'quality', 'highest']

export function resolveTier(value: string | null): QualityTier {
  return value === 'quality' || value === 'highest' ? value : 'performance'
}
