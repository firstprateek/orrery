import { describe, it, expect } from 'vitest'
import * as THREE from 'three'
import { BODIES, BODY_BY_ID } from '../config/bodies'
import { DEG2RAD, RAD2DEG, unixMsToJd } from '../config/constants'
import { OBLIQUITY_J2000 } from '../math/celestial'
import { bodyBasis, dirToLonLat, faceLockedSpin, meshSpin, surfaceDir, textureU, type BodyBasis } from '../math/orientation'
import { bodyRotationAngle } from '../math/rotation'
import { computePositions } from '../sim/ephemeris'
import { iauAxis } from '../sim/bodyAxes'
import * as Astronomy from 'astronomy-engine'
import { jdToDate } from '../config/constants'
import type { Vec3 } from '../math/vec3'

// The scene's orientation contract: world frame is ecliptic-J2000 with Z =
// ecliptic north; each body group's local +Y is its IAU north pole, local +X the
// IAU node the prime meridian W is measured from, and the sphere mesh spins by W
// about +Y. An earlier version stood every pole up with Rx(π/2 + tilt), which
// leaned Earth's pole toward −Y — (0, −0.398, 0.917) instead of the true
// (0, +0.398, 0.917) — so the seasons were inverted.

const sub = (a: Vec3, b: Vec3): Vec3 => ({ x: a.x - b.x, y: a.y - b.y, z: a.z - b.z })
const dot = (a: Vec3, b: Vec3): number => a.x * b.x + a.y * b.y + a.z * b.z
const cross = (a: Vec3, b: Vec3): Vec3 => ({ x: a.y * b.z - a.z * b.y, y: a.z * b.x - a.x * b.z, z: a.x * b.y - a.y * b.x })
const unit = (a: Vec3): Vec3 => {
  const l = Math.hypot(a.x, a.y, a.z)
  return { x: a.x / l, y: a.y / l, z: a.z / l }
}
const angleDeg = (a: Vec3, b: Vec3): number => Math.acos(Math.max(-1, Math.min(1, dot(unit(a), unit(b))))) * RAD2DEG
const jdOf = (iso: string): number => unixMsToJd(Date.parse(iso))
const basisOf = (id: string): BodyBasis => bodyBasis(BODY_BY_ID[id].pole.raDeg, BODY_BY_ID[id].pole.decDeg)
/** Group quaternion exactly as SolarSystem builds it. */
const groupQuat = (b: BodyBasis): THREE.Quaternion =>
  new THREE.Quaternion().setFromRotationMatrix(
    new THREE.Matrix4().makeBasis(
      new THREE.Vector3(b.x.x, b.x.y, b.x.z),
      new THREE.Vector3(b.y.x, b.y.y, b.y.z),
      new THREE.Vector3(b.z.x, b.z.y, b.z.z),
    ),
  )

describe('body orientation (IAU poles in the ecliptic frame)', () => {
  it('Earth’s pole is (0, sin ε, cos ε): tipped toward +Y, the June-solstice Sun side', () => {
    const p = basisOf('earth').y
    expect(p.x).toBeCloseTo(0, 12)
    expect(p.y).toBeCloseTo(Math.sin(OBLIQUITY_J2000), 12)
    expect(p.z).toBeCloseTo(Math.cos(OBLIQUITY_J2000), 12)
  })

  it('the group quaternion carries local +Y to the pole and +X to the node', () => {
    for (const def of BODIES) {
      const b = basisOf(def.id)
      const q = groupQuat(b)
      const y = new THREE.Vector3(0, 1, 0).applyQuaternion(q)
      const x = new THREE.Vector3(1, 0, 0).applyQuaternion(q)
      expect(angleDeg(y, b.y)).toBeLessThan(1e-4)
      expect(angleDeg(x, b.x)).toBeLessThan(1e-4)
    }
  })

  it('every basis is orthonormal and right-handed', () => {
    for (const def of BODIES) {
      const { x, y, z } = basisOf(def.id)
      for (const v of [x, y, z]) expect(Math.hypot(v.x, v.y, v.z)).toBeCloseTo(1, 12)
      expect(dot(x, y)).toBeCloseTo(0, 12)
      expect(dot(y, z)).toBeCloseTo(0, 12)
      const xy = cross(x, y)
      expect(dot(xy, z)).toBeCloseTo(1, 12)
    }
  })

  it('agrees with three’s SphereGeometry: longitude 0 at local +X, 90°E at local −Z', () => {
    // The whole W convention rests on this texture layout.
    const g = new THREE.SphereGeometry(1, 8, 4)
    const pos = g.getAttribute('position')
    const uv = g.getAttribute('uv')
    for (let i = 0; i < pos.count; i++) {
      if (Math.abs(uv.getY(i) - 0.5) > 1e-9) continue // equator row
      const u = uv.getX(i)
      if (Math.abs(u - 0.5) < 1e-9) expect(pos.getX(i)).toBeCloseTo(1, 9) // lon 0
      if (Math.abs(u - 0.75) < 1e-9) expect(pos.getZ(i)).toBeCloseTo(-1, 9) // lon +90
    }
  })

  it('surfaceDir and dirToLonLat invert each other', () => {
    const b = basisOf('mars')
    for (const [lon, lat, w] of [[0.3, 0.2, 1.1], [-2.5, -1.0, 5.9], [3.0, 1.2, 0]]) {
      const ll = dirToLonLat(b, w, surfaceDir(b, w, lon, lat))
      expect(ll.lon).toBeCloseTo(lon, 10)
      expect(ll.lat).toBeCloseTo(lat, 10)
    }
  })

  it('spin pole vs orbit normal reproduces each body’s obliquity', () => {
    // Retrograde spinners keep the IAU north pole and a negative period, so the
    // spin (right-hand) axis is sign(period)·pole. The Moon is left out: its
    // 1.5° Cassini offset lives in IAU periodic terms the static pole omits.
    const jd = jdOf('2026-06-01T00:00:00Z')
    const p0 = computePositions(jd - 0.01)
    const p1 = computePositions(jd + 0.01)
    for (const def of BODIES) {
      if (def.id === 'moon') continue
      const b = basisOf(def.id)
      const spin = def.rotationPeriodHours < 0 ? { x: -b.y.x, y: -b.y.y, z: -b.y.z } : b.y
      let normal: Vec3 = { x: 0, y: 0, z: 1 } // the Sun: tilt to the ecliptic
      if (def.parent) {
        const r = sub(p0[def.id], p0[def.parent])
        const v = sub(sub(p1[def.id], p1[def.parent]), r)
        normal = cross(r, v)
      }
      // Synchronous moons (tilt 0) sit within ~2° of their orbit pole.
      const tol = def.type === 'moon' ? 2 : 0.6
      expect(Math.abs(angleDeg(spin, normal) - def.axialTiltDeg), def.id).toBeLessThan(tol)
    }
  })

  it('Venus and Uranus (and the Uranian moons, Triton) spin backwards about the IAU pole', () => {
    for (const id of ['venus', 'uranus', 'titania', 'oberon', 'triton']) {
      expect(BODY_BY_ID[id].rotationPeriodHours, id).toBeLessThan(0)
    }
    expect(BODY_BY_ID['pluto'].rotationPeriodHours).toBeGreaterThan(0) // 2015 right-hand pole
  })
})

describe('Saturn’s rings from the IAU pole', () => {
  const ringOpeningDeg = (iso: string, from: 'sun' | 'earth'): number => {
    const p = computePositions(jdOf(iso))
    const pole = basisOf('saturn').y
    return Math.asin(dot(pole, unit(sub(p[from], p['saturn'])))) * RAD2DEG
  }

  it('were open ~+27° to the Sun at the 2017 northern solstice', () => {
    expect(ringOpeningDeg('2017-06-01T00:00:00Z', 'sun')).toBeGreaterThan(26)
  })

  it('go edge-on: to Earth ~23 Mar 2025, to the Sun at the 6 May 2025 equinox', () => {
    expect(Math.abs(ringOpeningDeg('2025-03-23T00:00:00Z', 'earth'))).toBeLessThan(0.3)
    expect(Math.abs(ringOpeningDeg('2025-05-06T00:00:00Z', 'sun'))).toBeLessThan(0.3)
  })

  it('open southward (negative) by the early 2030s', () => {
    expect(ringOpeningDeg('2032-01-01T00:00:00Z', 'sun')).toBeLessThan(-25)
  })
})

describe('tidally locked faces', () => {
  const subParent = (id: string, iso: string) => {
    const jd = jdOf(iso)
    const p = computePositions(jd)
    const def = BODY_BY_ID[id]
    // The renderer's path: astronomy-engine's IAU axis where it has one (the
    // Moon), else the registry W0 + rate.
    const axis = iauAxis(id, Astronomy.MakeTime(jdToDate(jd)))
    const basis = axis ? axis.basis : basisOf(id)
    const w = axis ? axis.w : bodyRotationAngle(jd, def.rotationPeriodHours, def.meridianDeg)
    const ll = dirToLonLat(basis, w, sub(p[def.parent!], p[id]))
    return { lon: ll.lon * RAD2DEG, lat: ll.lat * RAD2DEG }
  }

  it('the Moon’s near side faces Earth to within libration', () => {
    for (let day = 0; day < 28; day += 3) {
      const iso = new Date(Date.parse('2026-01-01T00:00:00Z') + day * 86_400_000).toISOString()
      const { lon, lat } = subParent('moon', iso)
      expect(Math.abs(lon), iso).toBeLessThan(10)
      expect(Math.abs(lat), iso).toBeLessThan(8)
    }
  })

  it('the Galilean moons keep longitude 0 toward Jupiter (IAU W + rate)', () => {
    for (const id of ['io', 'europa', 'ganymede', 'callisto']) {
      for (const iso of ['2000-01-01T12:00:00Z', '2026-06-01T00:00:00Z', '2060-01-01T00:00:00Z']) {
        expect(Math.abs(subParent(id, iso).lon), `${id} ${iso}`).toBeLessThan(5)
      }
    }
  })

  it('faceLockedSpin puts longitude 0 exactly at the given direction', () => {
    const b = basisOf('iapetus')
    const dir = { x: -0.3, y: 0.8, z: 0.1 }
    const w = faceLockedSpin(b, dir)
    expect(dirToLonLat(b, w, dir).lon).toBeCloseTo(0, 10)
  })

  it('face-locked moons are synchronous moons with a parent', () => {
    for (const def of BODIES.filter((d) => d.faceLocked)) {
      expect(def.type).toBe('moon')
      const spinDays = Math.abs(def.rotationPeriodHours) / 24
      expect(Math.abs(spinDays - def.kepler!.periodDays) / def.kepler!.periodDays, def.id).toBeLessThan(0.01)
    }
  })
})

describe('pole angle helpers', () => {
  it('a pole at the ecliptic pole (RA 270°, Dec 90° − ε) maps to +Z', () => {
    const p = bodyBasis(270, 90 - OBLIQUITY_J2000 * RAD2DEG).y
    expect(p.z).toBeCloseTo(1, 10)
  })

  it('Uranus’s pole lies almost in the ecliptic plane', () => {
    expect(Math.abs(basisOf('uranus').y.z)).toBeLessThan(Math.sin(10 * DEG2RAD))
  })
})

describe('texture longitude layout', () => {
  // One recognisable feature per map, at the texture u measured from the
  // shipped image, against its IAU east longitude. Pins textureLon0Deg: the
  // Galilean, Cassini and New Horizons maps are centred on 180°, the Solar
  // System Scope and Voyager Uranian maps on 0°.
  const features: Array<[id: string, feature: string, lonE: number, u: number]> = [
    ['moon', 'Mare Crisium', 59, 0.66],
    ['io', 'Pele', 104.7, 0.29],
    ['europa', 'Pwyll', 89, 0.245],
    ['ganymede', 'Osiris', 194, 0.535],
    ['callisto', 'Valhalla', 304, 0.845],
    ['titan', 'Xanadu', 260, 0.72],
    ['rhea', 'trailing-hemisphere wisps', 90, 0.25],
    ['iapetus', 'Cassini Regio (leading side)', 270, 0.75],
    ['pluto', 'Sputnik Planitia', 175, 0.49],
    ['titania', 'Ursula', 45.2, 0.625],
    ['oberon', 'Hamlet', 44, 0.62],
  ]

  it.each(features)('%s: %s sits where its longitude says', (id, _f, lonE, u) => {
    const got = textureU(lonE, BODY_BY_ID[id].textureLon0Deg)
    const du = Math.abs(((got - u + 1.5) % 1) - 0.5)
    expect(du).toBeLessThan(0.03)
  })

  it('meshSpin turns the map centre to W + L0', () => {
    // Longitude λ is at mesh angle (λ − L0) from u = 0.5, so with spin W + L0
    // it lands at W + λ, the IAU direction, for any map centre.
    const w = 1.234
    for (const l0 of [0, 180, 90]) {
      const lon = 0.7
      const meshAngle = meshSpin(w, l0) + (lon - l0 * DEG2RAD)
      expect(Math.cos(meshAngle)).toBeCloseTo(Math.cos(w + lon), 12)
      expect(Math.sin(meshAngle)).toBeCloseTo(Math.sin(w + lon), 12)
    }
  })
})
