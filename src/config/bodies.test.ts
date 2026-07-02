import { describe, it, expect } from 'vitest'
import { BODIES, BODY_BY_ID, bodyFamily } from './bodies'

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

  it('encodes retrograde spin exactly once (tilt>90° XOR negative period)', () => {
    // Venus/Uranus/Pluto: obliquity >90° already flips the pole — period must be
    // positive or the two flips cancel to prograde. Triton: tilt ~0 + negative.
    for (const id of ['venus', 'uranus', 'pluto', 'triton']) {
      const b = BODY_BY_ID[id]
      const tiltFlip = b.axialTiltDeg > 90
      const periodFlip = b.rotationPeriodHours < 0
      expect(tiltFlip !== periodFlip).toBe(true)
    }
    // And no body anywhere double-encodes it.
    for (const b of BODIES) {
      expect(b.axialTiltDeg > 90 && b.rotationPeriodHours < 0).toBe(false)
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

describe('bodyFamily', () => {
  it('a planet family is itself + its moons', () => {
    expect(bodyFamily('mars').sort()).toEqual(['deimos', 'mars', 'phobos'])
  })

  it('a moon family is itself + parent + siblings', () => {
    const fam = bodyFamily('titan').sort()
    expect(fam).toContain('saturn')
    expect(fam).toContain('rhea')
    expect(fam).toContain('iapetus')
    expect(fam[0]).not.toBe(undefined)
    expect(new Set(fam).size).toBe(fam.length) // no duplicates
  })

  it('a moonless body is just itself; unknown ids are empty', () => {
    expect(bodyFamily('mercury')).toEqual(['mercury'])
    expect(bodyFamily('nope')).toEqual([])
  })
})
