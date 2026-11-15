import { describe, it, expect } from 'vitest'
import { BODIES, BODY_BY_ID } from './bodies'
import { bindTargetRadii, isTarget, kindOf, targetDef, targetRenderRadius } from './targets'

describe('targets', () => {
  it('has a body target for every body, carrying its name and facts', () => {
    for (const b of BODIES) {
      const t = targetDef(b.id)
      expect(t.kind).toBe('body')
      expect(t.name).toBe(b.name)
      expect(t.facts).toBe(b.facts)
      expect(t.body).toBe(b)
      expect(t.frameKind).toBe(kindOf(b))
    }
  })

  it('rejects unknown ids', () => {
    expect(isTarget('earth')).toBe(true)
    expect(isTarget('nope')).toBe(false)
    expect(() => targetDef('nope')).toThrow()
  })

  it('does not treat inherited object keys as targets (ids come from ?obj=)', () => {
    for (const id of ['constructor', 'toString', '__proto__', 'hasOwnProperty', 'valueOf']) {
      expect(isTarget(id)).toBe(false)
      expect(() => targetDef(id)).toThrow()
    }
  })

  it('marks only moons as true-scale-only', () => {
    for (const b of BODIES) expect(targetDef(b.id).trueScaleOnly).toBe(b.type === 'moon')
  })

  it('frames bodies by kind', () => {
    expect(kindOf(BODY_BY_ID.sun)).toBe('sun')
    expect(kindOf(BODY_BY_ID.saturn)).toBe('ringed')
    expect(kindOf(BODY_BY_ID.earth)).toBe('planet')
    expect(kindOf(BODY_BY_ID.moon)).toBe('moon')
    expect(kindOf(BODY_BY_ID.deimos)).toBe('small')
  })

  it('reads render radii from the bound scene', () => {
    bindTargetRadii({ renderRadius: (def, blend) => def.radiusKm * (1 + blend) })
    expect(targetRenderRadius('earth', 0)).toBe(6371)
    expect(targetRenderRadius('earth', 1)).toBe(12742)
  })
})
