import { describe, it, expect } from 'vitest'
import { QUALITY, QUALITY_ORDER, MAX_BELT, resolveTier, defaultTier, SlowFrameGuard } from './quality'

describe('quality tiers', () => {
  it('orders performance → quality → highest by increasing cost', () => {
    const p = QUALITY.performance
    const q = QUALITY.quality
    const h = QUALITY.highest
    expect(p.dpr).toBeLessThanOrEqual(q.dpr)
    expect(q.dpr).toBeLessThanOrEqual(h.dpr)
    expect(p.bloomScale).toBeLessThanOrEqual(h.bloomScale)
    expect(p.beltCount).toBeLessThanOrEqual(q.beltCount)
    expect(q.beltCount).toBeLessThanOrEqual(h.beltCount)
  })

  it('targets decreasing fps as quality rises', () => {
    expect(QUALITY.performance.targetFps).toBeGreaterThan(QUALITY.quality.targetFps)
    expect(QUALITY.quality.targetFps).toBeGreaterThan(QUALITY.highest.targetFps)
  })

  it('allocates the belt to the largest tier', () => {
    expect(MAX_BELT).toBe(Math.max(...QUALITY_ORDER.map((t) => QUALITY[t].beltCount)))
  })

  it('resolveTier validates and falls back to performance', () => {
    expect(resolveTier(null)).toBe('performance')
    expect(resolveTier('bogus')).toBe('performance')
    expect(resolveTier('quality')).toBe('quality')
    expect(resolveTier('highest')).toBe('highest')
    expect(resolveTier('performance', 'quality')).toBe('performance')
    expect(resolveTier(null, 'quality')).toBe('quality')
  })

  it('defaults new visitors to Medium only when the GPU can run bloom', () => {
    expect(defaultTier({ softwareRendering: false, hdrOk: true })).toBe('quality')
    expect(defaultTier({ softwareRendering: true, hdrOk: true })).toBe('performance')
    expect(defaultTier({ softwareRendering: false, hdrOk: false })).toBe('performance')
  })

  it('falls back only after sustained slow frames', () => {
    const g = new SlowFrameGuard(30, 5)
    // Alternating slow/fast frames never accumulate.
    for (let i = 0; i < 50; i++) expect(g.push(i % 2 ? 40 : 10)).toBe(false)
    const h = new SlowFrameGuard(30, 5)
    const hits = [40, 40, 40, 40, 40].map((ms) => h.push(ms))
    expect(hits).toEqual([false, false, false, false, true])
  })

  it('never multisamples a float target (the ~0fps root cause) and keeps Performance composer-free', () => {
    // Guard for PR #9: multisampled HalfFloat targets fall back to a per-pass
    // float MSAA blit-resolve (or software) on GPUs without native float-MSAA.
    for (const t of QUALITY_ORDER) {
      expect(QUALITY[t].msaaSamples).toBe(0)
    }
    expect(QUALITY.performance.post).toBe(false)
  })
})
