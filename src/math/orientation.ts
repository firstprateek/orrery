import type { Vec3 } from './vec3'
import { OBLIQUITY_J2000 } from './celestial'
import { DEG2RAD } from '../config/constants'

// Body orientation from IAU pole RA/Dec, expressed in the scene's ecliptic-J2000
// frame. A body's local frame (the THREE.Group every body lives in) is:
//   +Y = the IAU north pole (the sphere's spin axis and texture north),
//   +X = the IAU node Q, where the body's equator crosses the ICRF equator
//        ascending (RA α0 + 90°, Dec 0) — the origin the prime-meridian angle W
//        is measured from,
//   +Z = Q × P, so the frame is right-handed.
// The sphere mesh then spins by W about +Y: three's SphereGeometry puts texture
// longitude 0 at local +X and east longitudes toward −Z, i.e. Ry(W + λ)·X =
// cos(W+λ)·Q + sin(W+λ)·(P × Q), exactly the IAU "W eastward from Q" rule.
// That holds for maps centred on longitude 0; a map centred on L0 (many moon
// mosaics use 180°) spins by W + L0 instead — see meshSpin().

const COS_E = Math.cos(OBLIQUITY_J2000)
const SIN_E = Math.sin(OBLIQUITY_J2000)

/** Equatorial-J2000 vector → ecliptic-J2000 (a rotation of −ε about X). */
export function equatorialToEcliptic(v: Vec3): Vec3 {
  return {
    x: v.x,
    y: v.y * COS_E + v.z * SIN_E,
    z: -v.y * SIN_E + v.z * COS_E,
  }
}

export interface BodyBasis {
  /** Node Q: the direction W is measured from (local +X). */
  x: Vec3
  /** IAU north pole P (local +Y). */
  y: Vec3
  /** Q × P (local +Z). */
  z: Vec3
}

/**
 * The body's local axes in ecliptic-J2000 for an IAU pole (degrees). Q is built
 * from α0 rather than as ẑ × P so it stays defined for Earth, whose J2000 pole
 * IS the celestial pole.
 */
export function bodyBasis(raDeg: number, decDeg: number): BodyBasis {
  const a = raDeg * DEG2RAD
  const d = decDeg * DEG2RAD
  const pEq = { x: Math.cos(d) * Math.cos(a), y: Math.cos(d) * Math.sin(a), z: Math.sin(d) }
  const qEq = { x: -Math.sin(a), y: Math.cos(a), z: 0 }
  const p = equatorialToEcliptic(pEq)
  const q = equatorialToEcliptic(qEq)
  const z = {
    x: q.y * p.z - q.z * p.y,
    y: q.z * p.x - q.x * p.z,
    z: q.x * p.y - q.y * p.x,
  }
  return { x: q, y: p, z }
}

/**
 * Ecliptic direction (unit) from the body's centre to the surface point at
 * planetocentric east longitude/latitude (radians), for a spin angle W
 * (radians, as set on the mesh's rotation.y).
 */
export function surfaceDir(basis: BodyBasis, w: number, lon: number, lat: number): Vec3 {
  const t = w + lon
  const c = Math.cos(lat)
  // Local (group) coordinates of Ry(t)·(cos lat, sin lat, 0).
  const lx = c * Math.cos(t)
  const ly = Math.sin(lat)
  const lz = -c * Math.sin(t)
  const { x, y, z } = basis
  return {
    x: x.x * lx + y.x * ly + z.x * lz,
    y: x.y * lx + y.y * ly + z.y * lz,
    z: x.z * lx + y.z * ly + z.z * lz,
  }
}

/**
 * Inverse of surfaceDir: planetocentric east longitude in (−π, π] and latitude
 * (radians) of the surface point that lies in ecliptic direction `dir` (need not
 * be unit) for spin angle W. Used to check e.g. the subsolar point.
 */
export function dirToLonLat(basis: BodyBasis, w: number, dir: Vec3): { lon: number; lat: number } {
  const dot = (a: Vec3) => a.x * dir.x + a.y * dir.y + a.z * dir.z
  const lx = dot(basis.x)
  const ly = dot(basis.y)
  const lz = dot(basis.z)
  const lat = Math.atan2(ly, Math.hypot(lx, lz))
  let lon = Math.atan2(-lz, lx) - w
  lon = Math.atan2(Math.sin(lon), Math.cos(lon))
  return { lon, lat }
}

/**
 * Spin angle W that turns longitude 0 toward `dir` (ecliptic, need not be
 * unit): the IAU definition of longitude 0 for a synchronous moon is the mean
 * sub-planet meridian, so pointing it at the parent each frame keeps the right
 * face toward the planet even where a moon's mean orbital phase drifts.
 */
export function faceLockedSpin(basis: BodyBasis, dir: Vec3): number {
  const lx = basis.x.x * dir.x + basis.x.y * dir.y + basis.x.z * dir.z
  const lz = basis.z.x * dir.x + basis.z.y * dir.y + basis.z.z * dir.z
  return Math.atan2(-lz, lx)
}

/**
 * Mesh rotation.y for IAU spin angle W (radians) on a texture whose centre
 * column (u = 0.5) is east longitude `textureLon0Deg`: that column must land
 * where longitude L0 belongs, at W + L0.
 */
export function meshSpin(w: number, textureLon0Deg = 0): number {
  return w + textureLon0Deg * DEG2RAD
}

/** Texture u (0..1) of east longitude `lonDeg` on a map centred on `textureLon0Deg`. */
export function textureU(lonDeg: number, textureLon0Deg = 0): number {
  const u = 0.5 + (lonDeg - textureLon0Deg) / 360
  return u - Math.floor(u)
}
