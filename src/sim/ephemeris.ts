import * as Astronomy from 'astronomy-engine'
import { BODIES, type BodyDef } from '../config/bodies'
import { elementsToCartesian } from './kepler'
import { kmToAu, DEG2RAD, J2000_JD, jdToDate } from '../config/constants'
import type { Vec3 } from '../math/vec3'

// Produces heliocentric positions for every body in the ONE internal frame:
// ecliptic J2000, AU, with the Sun at the origin. astronomy-engine returns
// equatorial-J2000 (EQJ) vectors, so every astronomy-engine result is rotated
// into the ecliptic. Kepler moons add a parent-relative ecliptic offset onto
// their (already ecliptic) parent position. Keeping a single frame is what
// prevents "planet in the wrong place" bugs.

const EQJ_TO_ECL = Astronomy.Rotation_EQJ_ECL()

const PLANET_BODY: Record<string, Astronomy.Body> = {
  mercury: Astronomy.Body.Mercury,
  venus: Astronomy.Body.Venus,
  earth: Astronomy.Body.Earth,
  mars: Astronomy.Body.Mars,
  jupiter: Astronomy.Body.Jupiter,
  saturn: Astronomy.Body.Saturn,
  uranus: Astronomy.Body.Uranus,
  neptune: Astronomy.Body.Neptune,
  pluto: Astronomy.Body.Pluto,
}

function toEcl(v: Astronomy.Vector): Vec3 {
  const e = Astronomy.RotateVector(EQJ_TO_ECL, v)
  return { x: e.x, y: e.y, z: e.z }
}

/** Parent-relative offset (AU, ecliptic J2000) for a Kepler-propagated moon. */
function keplerOffsetAu(b: BodyDef, jd: number): Vec3 {
  const el = b.kepler!
  const meanMotion = 360 / el.periodDays
  const M = (el.maDeg + meanMotion * (jd - J2000_JD)) * DEG2RAD
  const off = elementsToCartesian({
    a: el.aKm, e: el.e, i: el.iDeg * DEG2RAD, om: el.omDeg * DEG2RAD, w: el.wDeg * DEG2RAD, M,
  })
  return { x: kmToAu(off.x), y: kmToAu(off.y), z: kmToAu(off.z) }
}

/**
 * Compute heliocentric ecliptic-J2000 positions (AU) for all bodies at a Julian
 * Date. Reuses `out` to avoid per-frame allocation.
 */
export function computePositions(jd: number, out: Record<string, Vec3> = {}): Record<string, Vec3> {
  const time = Astronomy.MakeTime(jdToDate(jd))

  out['sun'] = { x: 0, y: 0, z: 0 }

  for (const b of BODIES) {
    if (b.orbitSource === 'astronomy-engine' && b.type !== 'moon') {
      out[b.id] = toEcl(Astronomy.HelioVector(PLANET_BODY[b.id], time))
    }
  }

  // Moon: geocentric + Earth's heliocentric position.
  const earth = Astronomy.HelioVector(Astronomy.Body.Earth, time)
  const moonGeo = Astronomy.GeoVector(Astronomy.Body.Moon, time, false)
  out['moon'] = toEcl(new Astronomy.Vector(earth.x + moonGeo.x, earth.y + moonGeo.y, earth.z + moonGeo.z, time))

  // Galilean moons: jovicentric + Jupiter's heliocentric position.
  const jm = Astronomy.JupiterMoons(time)
  const jup = Astronomy.HelioVector(Astronomy.Body.Jupiter, time)
  const galileans: Record<string, Astronomy.StateVector> = {
    io: jm.io, europa: jm.europa, ganymede: jm.ganymede, callisto: jm.callisto,
  }
  for (const id in galileans) {
    const m = galileans[id]
    out[id] = toEcl(new Astronomy.Vector(jup.x + m.x, jup.y + m.y, jup.z + m.z, time))
  }

  // Kepler moons: parent position + parent-relative offset.
  for (const b of BODIES) {
    if (b.orbitSource === 'kepler') {
      const parent = out[b.parent as string]
      const off = keplerOffsetAu(b, jd)
      out[b.id] = { x: parent.x + off.x, y: parent.y + off.y, z: parent.z + off.z }
    }
  }

  return out
}
