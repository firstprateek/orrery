import { describe, it, expect } from 'vitest'
import { rayBlocked, markerText, glyphCss } from './SkyGuide'
import { skyFrom } from '../config/starCatalog'

describe('sky guide', () => {
  const sphere = (x: number, y: number, z: number, r: number, visible = true) => ({ id: 's', pos: { x, y, z }, r, visible })

  it('hides a marker behind a body disc, not beside or behind the camera', () => {
    const o = { x: 0, y: 0, z: 0 }
    const d = { x: 1, y: 0, z: 0 }
    expect(rayBlocked(o, d, [sphere(5, 0.5, 0, 1)])).toBe(true)
    expect(rayBlocked(o, d, [sphere(5, 2, 0, 1)])).toBe(false)
    expect(rayBlocked(o, d, [sphere(-5, 0, 0, 1)])).toBe(false)
    expect(rayBlocked(o, d, [sphere(5, 0, 0, 1, false)])).toBe(false)
  })

  it('labels markers with distance, and the Sun as home from elsewhere', () => {
    const sun = skyFrom('proxima').find((v) => v.entry.id === 'sol')!
    expect(markerText(sun)).toBe('Sun (home) · 4.25 ly')
    const m31 = skyFrom('sol').find((v) => v.entry.id === 'm31')!
    expect(markerText(m31)).toBe('Andromeda Galaxy (M31) · 2.5 million ly')
  })

  it('draws reachable marks filled and far ones dashed', () => {
    expect(glyphCss('system', true)).toContain('background:#5eead4')
    expect(glyphCss('system', true)).not.toContain('dashed')
    expect(glyphCss('galaxy', false)).toContain('dashed')
    expect(glyphCss('galaxy', false)).toContain('rotate(-25deg)')
  })
})
