import { elementsToCartesian } from './kepler'
import { DEG2RAD, J2000_JD, kmToAu } from '../config/constants'
import type { BodyDef } from '../config/bodies'
import type { StarSystemDef } from '../config/systems/types'
import type { Vec3 } from '../math/vec3'

// Positions for another star system, in the same frame and units the Solar
// System uses (AU, system origin at 0): every body is a two-body Kepler orbit
// about its parent. A binary's two stars sit about their barycentre, which is
// the origin; a single star sits at the origin.

function keplerOffsetAu(b: BodyDef, jd: number): Vec3 {
  const el = b.kepler!
  const M = (el.maDeg + (360 / el.periodDays) * (jd - J2000_JD)) * DEG2RAD
  const off = elementsToCartesian({
    a: el.aKm, e: el.e, i: el.iDeg * DEG2RAD, om: el.omDeg * DEG2RAD, w: el.wDeg * DEG2RAD, M,
  })
  return { x: kmToAu(off.x), y: kmToAu(off.y), z: kmToAu(off.z) }
}

/** System-centric positions (AU) for every body of `sys` at Julian date `jd`. Reuses `out`. */
export function computeExoPositions(
  sys: StarSystemDef,
  jd: number,
  out: Record<string, Vec3> = {},
): Record<string, Vec3> {
  const bin = sys.binary
  for (const b of sys.bodies) {
    if (bin && b.id === bin.secondary) continue // placed with its primary below
    if (bin && b.id === bin.primary) {
      const sec = sys.bodies.find((s) => s.id === bin.secondary)!
      const rel = keplerOffsetAu(sec, jd)
      const q = bin.secondaryMassFraction
      out[b.id] = { x: -rel.x * q, y: -rel.y * q, z: -rel.z * q }
      out[sec.id] = { x: rel.x * (1 - q), y: rel.y * (1 - q), z: rel.z * (1 - q) }
      continue
    }
    if (!b.parent || !b.kepler) {
      out[b.id] = { x: 0, y: 0, z: 0 }
      continue
    }
    const parent = out[b.parent]
    const off = keplerOffsetAu(b, jd)
    out[b.id] = { x: parent.x + off.x, y: parent.y + off.y, z: parent.z + off.z }
  }
  return out
}
