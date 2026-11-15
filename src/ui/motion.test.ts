import { describe, it, expect, vi, afterEach } from 'vitest'

// motion.ts reads matchMedia once at import, so each case stubs `window` first
// and imports a fresh copy of the module.

type ChangeFn = (e: { matches: boolean }) => void

function stubWindow(initial: boolean) {
  let change: ChangeFn | null = null
  const mql = {
    matches: initial,
    addEventListener: (_: string, fn: ChangeFn) => (change = fn),
  }
  vi.stubGlobal('window', { matchMedia: () => mql })
  return {
    flip(v: boolean) {
      mql.matches = v
      change?.({ matches: v })
    },
  }
}

afterEach(() => {
  vi.unstubAllGlobals()
  vi.resetModules()
})

describe('motion', () => {
  it('is false where matchMedia does not exist (tests, old engines)', async () => {
    vi.stubGlobal('window', undefined)
    const m = await import('./motion')
    expect(m.prefersReducedMotion()).toBe(false)
  })

  it('reports the media query and notifies subscribers on change', async () => {
    const w = stubWindow(true)
    const m = await import('./motion')
    expect(m.prefersReducedMotion()).toBe(true)
    const seen: boolean[] = []
    const off = m.onReducedMotionChange((v) => seen.push(v))
    w.flip(false)
    expect(m.prefersReducedMotion()).toBe(false)
    off()
    w.flip(true)
    expect(seen).toEqual([false])
  })
})
