import { describe, it, expect } from 'vitest'
import { QUALITY, QUALITY_ORDER, MAX_BELT, resolveTier } from './quality'

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
  })
})
