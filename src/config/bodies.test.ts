import { describe, it, expect } from 'vitest'
import { BODIES, BODY_BY_ID } from './bodies'

describe('body registry', () => {
  it('has unique ids', () => {
    const ids = BODIES.map((b) => b.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('has exactly one star (the Sun) with no parent', () => {
    const stars = BODIES.filter((b) => b.type === 'star')
    expect(stars).toHaveLength(1)
    expect(stars[0].id).toBe('sun')
    expect(stars[0].parent).toBeNull()
  })

  it('every non-Sun body references an existing parent', () => {
    for (const b of BODIES) {
      if (b.id === 'sun') continue
      expect(b.parent).not.toBeNull()
      expect(BODY_BY_ID[b.parent as string]).toBeDefined()
    }
  })

  it('planets and dwarfs orbit the Sun; moons orbit a planet/dwarf', () => {
    for (const b of BODIES) {
      if (b.type === 'planet' || b.type === 'dwarf') expect(b.parent).toBe('sun')
      if (b.type === 'moon') {
        const parent = BODY_BY_ID[b.parent as string]
        expect(['planet', 'dwarf']).toContain(parent.type)
      }
    }
  })

  it('kepler-sourced bodies carry elements; others do not need them', () => {
    for (const b of BODIES) {
      if (b.orbitSource === 'kepler') {
        expect(b.kepler).toBeDefined()
        expect(b.kepler!.periodDays).toBeGreaterThan(0)
        expect(b.kepler!.aKm).toBeGreaterThan(0)
        expect(b.kepler!.e).toBeGreaterThanOrEqual(0)
        expect(b.kepler!.e).toBeLessThan(1)
      }
    }
  })

  it('has positive radii and non-zero rotation for every body', () => {
    for (const b of BODIES) {
      expect(b.radiusKm).toBeGreaterThan(0)
      expect(b.rotationPeriodHours).not.toBe(0)
    }
  })

  it('encodes the known retrograde rotators', () => {
    for (const id of ['venus', 'uranus', 'pluto', 'triton']) {
      expect(BODY_BY_ID[id].rotationPeriodHours).toBeLessThan(0)
    }
  })

  it('encodes Triton’s retrograde orbit as inclination > 90°', () => {
    expect(BODY_BY_ID['triton'].kepler!.iDeg).toBeGreaterThan(90)
  })

  it('gives Saturn a ring with inner < outer radius and a texture', () => {
    const s = BODY_BY_ID['saturn']
    expect(s.ringInnerKm!).toBeLessThan(s.ringOuterKm!)
    expect(s.ringTexture).toBeTruthy()
  })
})
