import * as Astronomy from 'astronomy-engine'
import { jdToDate } from '../config/constants'
import type { BodyBasis } from '../math/orientation'
import type { Vec3 } from '../math/vec3'

// Earth gets its orientation from astronomy-engine instead of the static IAU
// pole + linear W used for every other body: precession moves Earth's real pole
// ~0.14° off its J2000 direction by the 2020s (and the static model's
// meridian drifts ~50″/yr against the true sidereal time), which is enough to
// misplace the subsolar point by ~40 km today and tilt LEO orbit rings visibly
// from close up. Greenwich sits at RA = GAST on the true equator of date; that
// frame is rotated to J2000 and then to the ecliptic like every other position.

const EQJ_TO_ECL = Astronomy.Rotation_EQJ_ECL()

function eqdToEcl(rot: Astronomy.RotationMatrix, x: number, y: number, z: number, time: Astronomy.AstroTime): Vec3 {
  const e = Astronomy.RotateVector(EQJ_TO_ECL, Astronomy.RotateVector(rot, new Astronomy.Vector(x, y, z, time)))
  return { x: e.x, y: e.y, z: e.z }
}

/**
 * Earth's body-fixed axes in ecliptic-J2000 at a (UT) Julian Date, in the same
 * layout as bodyBasis() but with the day's spin already applied (so the mesh's
 * own rotation stays 0): x → longitude 0 on the equator, y → the true north
 * pole of date, z = x × y (= −east, matching SphereGeometry's −Z = +90°E).
 */
export function earthFixedBasis(jd: number): BodyBasis {
  const time = Astronomy.MakeTime(jdToDate(jd))
  const gast = (Astronomy.SiderealTime(time) * Math.PI) / 12
  const rot = Astronomy.Rotation_EQD_EQJ(time)
  const c = Math.cos(gast)
  const s = Math.sin(gast)
  return {
    x: eqdToEcl(rot, c, s, 0, time),
    y: eqdToEcl(rot, 0, 0, 1, time),
    z: eqdToEcl(rot, s, -c, 0, time),
  }
}
