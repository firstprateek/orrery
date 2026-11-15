import { describe, it, expect } from 'vitest'
import * as THREE from 'three'
import {
  GAL_TO_EQ_J2000,
  SKY_TEXTURE_TO_ECLIPTIC,
  equatorialToEcliptic,
  galacticToEquatorial,
  mulMat3,
  raDecToVec3,
} from './celestial'
import type { Vec3 } from './vec3'

const DEG = Math.PI / 180

function det3(m: readonly number[]): number {
  return (
    m[0] * (m[4] * m[8] - m[5] * m[7]) -
    m[1] * (m[3] * m[8] - m[5] * m[6]) +
    m[2] * (m[3] * m[7] - m[4] * m[6])
  )
}

function expectOrthonormal(m: readonly number[]): void {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const dot = m[i * 3] * m[j * 3] + m[i * 3 + 1] * m[j * 3 + 1] + m[i * 3 + 2] * m[j * 3 + 2]
      expect(dot).toBeCloseTo(i === j ? 1 : 0, 8)
    }
  }
  expect(det3(m)).toBeCloseTo(1, 8)
}

/** Degrees between two directions. */
function sepDeg(a: Vec3, b: Vec3): number {
  const la = Math.hypot(a.x, a.y, a.z)
  const lb = Math.hypot(b.x, b.y, b.z)
  const c = (a.x * b.x + a.y * b.y + a.z * b.z) / (la * lb)
  return Math.acos(Math.min(1, Math.max(-1, c))) / DEG
}

function toRaDecDeg(v: Vec3): { ra: number; dec: number } {
  const r = Math.hypot(v.x, v.y, v.z)
  let ra = Math.atan2(v.y, v.x) / DEG
  if (ra < 0) ra += 360
  return { ra, dec: Math.asin(v.z / r) / DEG }
}

/** Local direction of texel (u across, t down) on three's SphereGeometry. */
function texelDir(u: number, t: number): Vec3 {
  const phi = 2 * Math.PI * u
  const theta = Math.PI * t
  return { x: -Math.cos(phi) * Math.sin(theta), y: Math.cos(theta), z: Math.sin(phi) * Math.sin(theta) }
}

/** Panorama texel for galactic (l, b) in degrees. */
function galToTexel(lDeg: number, bDeg: number): [number, number] {
  return [(((0.5 - lDeg / 360) % 1) + 1) % 1, 0.5 + bDeg / 180]
}

const eclFromRaDec = (raDeg: number, decDeg: number) =>
  equatorialToEcliptic(raDecToVec3(raDeg * DEG, decDeg * DEG, 1))

// Sgr A* (SIMBAD) and the LMC centre (SIMBAD) — and their galactic coordinates.
const SGR_A = { ra: 266.4168, dec: -29.0078 }
const LMC = { ra: 80.894, dec: -69.756, l: 280.4652, b: -32.8884 }

describe('GAL_TO_EQ_J2000', () => {
  it('is a proper rotation', () => {
    expectOrthonormal(GAL_TO_EQ_J2000)
  })

  it('maps the galactic centre to RA 266.405°, Dec −28.936°', () => {
    const { ra, dec } = toRaDecDeg(galacticToEquatorial(0, 0, 1))
    expect(ra).toBeCloseTo(266.405, 2)
    expect(dec).toBeCloseTo(-28.936, 2)
  })

  it('maps the north galactic pole to RA 192.859°, Dec +27.128°', () => {
    const { ra, dec } = toRaDecDeg(galacticToEquatorial(0, 90 * DEG, 1))
    expect(ra).toBeCloseTo(192.859, 2)
    expect(dec).toBeCloseTo(27.128, 2)
  })

  it('maps the LMC galactic position onto its RA/Dec', () => {
    const v = galacticToEquatorial(LMC.l * DEG, LMC.b * DEG, 1)
    expect(sepDeg(v, raDecToVec3(LMC.ra * DEG, LMC.dec * DEG, 1))).toBeLessThan(0.01)
  })
})

describe('equatorialToEcliptic', () => {
  it('puts Sgr A* at ecliptic λ 266.85°, β −5.61°', () => {
    const v = eclFromRaDec(SGR_A.ra, SGR_A.dec)
    const { ra: lambda, dec: beta } = toRaDecDeg(v)
    expect(Math.abs(lambda - 266.85)).toBeLessThan(0.02)
    expect(Math.abs(beta - -5.61)).toBeLessThan(0.02)
  })

  it('tilts the north celestial pole toward λ 90°', () => {
    const v = equatorialToEcliptic({ x: 0, y: 0, z: 1 })
    const { ra: lambda, dec: beta } = toRaDecDeg(v)
    expect(lambda).toBeCloseTo(90, 6)
    expect(beta).toBeCloseTo(90 - 23.4392911, 6)
  })
})

describe('SKY_TEXTURE_TO_ECLIPTIC', () => {
  it('is a proper rotation (the panorama is not mirrored)', () => {
    expectOrthonormal(SKY_TEXTURE_TO_ECLIPTIC)
  })

  it('agrees with three SphereGeometry texel placement', () => {
    // The texelDir formula is what the matrix is derived from; check it against
    // the real geometry so a three upgrade that changes the UV layout fails here.
    const geo = new THREE.SphereGeometry(1, 64, 32)
    const pos = geo.getAttribute('position')
    const uv = geo.getAttribute('uv')
    for (const i of [70, 400, 1111, 1600, 2000]) {
      const d = texelDir(uv.getX(i), 1 - uv.getY(i))
      expect(d.x).toBeCloseTo(pos.getX(i), 6)
      expect(d.y).toBeCloseTo(pos.getY(i), 6)
      expect(d.z).toBeCloseTo(pos.getZ(i), 6)
    }
  })

  it('puts the image centre (the galactic centre) on Sgr A* in the ecliptic frame', () => {
    const v = mulMat3(SKY_TEXTURE_TO_ECLIPTIC, texelDir(0.5, 0.5))
    expect(sepDeg(v, eclFromRaDec(SGR_A.ra, SGR_A.dec))).toBeLessThan(0.1)
  })

  it('puts the image north galactic pole on RA 192.86°, Dec +27.13°', () => {
    // b = +90° is the bottom edge of this panorama.
    const v = mulMat3(SKY_TEXTURE_TO_ECLIPTIC, texelDir(0.5, 1))
    expect(sepDeg(v, eclFromRaDec(192.859, 27.128))).toBeLessThan(0.01)
  })

  it('puts the LMC texel (measured in the image at 0.722, 0.317) on the LMC', () => {
    const measured = mulMat3(SKY_TEXTURE_TO_ECLIPTIC, texelDir(0.722, 0.317))
    expect(sepDeg(measured, eclFromRaDec(LMC.ra, LMC.dec))).toBeLessThan(1)
    const [u, t] = galToTexel(LMC.l, LMC.b)
    const exact = mulMat3(SKY_TEXTURE_TO_ECLIPTIC, texelDir(u, t))
    expect(sepDeg(exact, eclFromRaDec(LMC.ra, LMC.dec))).toBeLessThan(0.01)
  })
})
