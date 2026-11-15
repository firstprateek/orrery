import { describe, it, expect } from 'vitest'
import * as THREE from 'three'
import { SolarSystem } from './SolarSystem'
import { makeTrueScale, makeVisualScale } from './scaleMapping'
import { computePositions } from '../sim/ephemeris'
import { OBLIQUITY_J2000 } from '../math/celestial'
import { RAD2DEG, unixMsToJd } from '../config/constants'
import type { Vec3 } from '../math/vec3'

// Exercises SolarSystem.rotate() end to end through the scene graph, the way
// the renderer sees it: group basis × mesh spin × texture layout. Directions are
// turned into the longitude printed on the texture under them, so a dropped
// Earth special case, a wrong setGroupBasis, a missing texture offset or a
// flipped spin all fail here even though the pure-math tests still pass.

/** Never loads anything: the scene only needs Texture objects to exist. */
class StubLoader extends THREE.TextureLoader {
  override load(): THREE.Texture<HTMLImageElement> {
    return new THREE.Texture<HTMLImageElement>()
  }
}

const jdOf = (iso: string): number => unixMsToJd(Date.parse(iso))
const wrap = (deg: number): number => ((((deg + 180) % 360) + 360) % 360) - 180
const sub = (a: Vec3, b: Vec3) => new THREE.Vector3(a.x - b.x, a.y - b.y, a.z - b.z)

function scene(iso: string) {
  const solar = new SolarSystem(new StubLoader(), makeTrueScale(), makeVisualScale())
  const jd = jdOf(iso)
  const positions = computePositions(jd)
  solar.rotate(jd, positions)
  solar.group.updateMatrixWorld(true)
  return { solar, jd, positions }
}

/**
 * East longitude and latitude (degrees) of the texture texel that lies in world
 * direction `dir` from the body's centre: SphereGeometry puts u = 0.5 at mesh
 * +X and u grows toward −Z, and u = 0.5 is the map's centre longitude.
 */
function texelUnder(solar: SolarSystem, id: string, dir: THREE.Vector3): { lon: number; lat: number } {
  const view = solar.byId[id]
  const q = view.mesh.getWorldQuaternion(new THREE.Quaternion()).invert()
  const l = dir.clone().normalize().applyQuaternion(q)
  const u = 0.5 + Math.atan2(-l.z, l.x) / (2 * Math.PI)
  return {
    lon: wrap((view.def.textureLon0Deg ?? 0) + (u - 0.5) * 360),
    lat: Math.asin(l.y) * RAD2DEG,
  }
}

describe('SolarSystem.rotate() through the scene graph', () => {
  it('Earth: the Sun is over the Greenwich meridian (±EoT) at 12:00 UTC', () => {
    for (const iso of ['2026-02-11T12:00:00Z', '2026-06-21T12:00:00Z', '2026-11-03T12:00:00Z']) {
      const { solar, positions } = scene(iso)
      const sun = sub(positions['sun'], positions['earth'])
      expect(Math.abs(texelUnder(solar, 'earth', sun).lon), iso).toBeLessThan(4.5)
    }
  })

  it('Earth: northern summer in June, and the group pole is (0, sin ε, cos ε)', () => {
    const { solar, positions } = scene('2026-06-21T12:00:00Z')
    const sun = sub(positions['sun'], positions['earth'])
    expect(texelUnder(solar, 'earth', sun).lat).toBeCloseTo(23.44, 0)
    const pole = new THREE.Vector3(0, 1, 0).applyQuaternion(solar.byId['earth'].group.getWorldQuaternion(new THREE.Quaternion()))
    // Precession moves the pole ~0.14° from its J2000 direction by the 2020s.
    expect(pole.angleTo(new THREE.Vector3(0, Math.sin(OBLIQUITY_J2000), Math.cos(OBLIQUITY_J2000))) * RAD2DEG).toBeLessThan(0.3)
  })

  it('Earth’s clouds drift westward relative to the surface', () => {
    const a = scene('2026-06-21T00:00:00Z').solar.byId['earth'].clouds!.rotation.y
    const b = scene('2026-06-21T12:00:00Z').solar.byId['earth'].clouds!.rotation.y
    // One lap behind every 13.5 days ≈ −13° per half day.
    const d = wrap((b - a) * RAD2DEG)
    expect(d).toBeLessThan(-8)
    expect(d).toBeGreaterThan(-20)
  })

  it('synchronous moons show longitude 0 to their planet', () => {
    const { solar, positions } = scene('2026-06-01T00:00:00Z')
    const tol: Record<string, number> = { moon: 10, io: 3, europa: 3, ganymede: 3, callisto: 3, titan: 1e-6, rhea: 1e-6, iapetus: 1e-6, titania: 1e-6, triton: 1e-6 }
    for (const [id, t] of Object.entries(tol)) {
      const parent = solar.byId[id].def.parent!
      const ll = texelUnder(solar, id, sub(positions[parent], positions[id]))
      expect(Math.abs(ll.lon), id).toBeLessThan(t)
    }
  })

  it('Iapetus leads with its dark Cassini Regio (centred near 270°E)', () => {
    const { solar, positions, jd } = scene('2026-06-01T00:00:00Z')
    const next = computePositions(jd + 0.01)
    const vel = sub(next['iapetus'], next['saturn']).sub(sub(positions['iapetus'], positions['saturn']))
    expect(Math.abs(wrap(texelUnder(solar, 'iapetus', vel).lon - 270))).toBeLessThan(5)
  })

  it('Pluto’s subsolar point at the New Horizons flyby matches JPL Horizons', () => {
    // Horizons (target 999, IAU_PLUTO east longitudes) gives SunSub-LON
    // 127.84°E, SunSub-LAT 51.55° for 2015-07-14 11:49 UT: the western edge of
    // Sputnik Planitia (~175°E). A map read as centred on 0° would put the far
    // side (~308°E) there instead.
    const { solar, positions } = scene('2015-07-14T11:49:00Z')
    const ll = texelUnder(solar, 'pluto', sub(positions['sun'], positions['pluto']))
    expect(Math.abs(wrap(ll.lon - 127.84))).toBeLessThan(1)
    expect(Math.abs(ll.lat - 51.55)).toBeLessThan(1)
  })

  it('subsolar longitudes match JPL Horizons (IAU frames) on 2026-06-01', () => {
    // Horizons observer table from the Sun's centre (500@10), quantities 14/21,
    // 2026-06-01 00:00 UT, converted to east longitude. Its values are apparent,
    // so the scene is evaluated one light-time earlier. Covers the
    // astronomy-engine RotationAxis path (Moon, Mars, Jupiter System III) and
    // the registry W path with a 180°-centred map (Io).
    const ref: Record<string, { lon: number; lat: number; ltMin: number }> = {
      moon: { lon: 353.006, lat: 1.584, ltMin: 8.4546 },
      mars: { lon: 360 - 166.294, lat: -23.348, ltMin: 11.742 },
      jupiter: { lon: 360 - 12.138, lat: 0.977, ltMin: 43.794 },
      io: { lon: 360 - 330.954, lat: 0.889, ltMin: 43.815 },
    }
    const t0 = jdOf('2026-06-01T00:00:00Z')
    for (const [id, r] of Object.entries(ref)) {
      const solar = new SolarSystem(new StubLoader(), makeTrueScale(), makeVisualScale())
      const jd = t0 - r.ltMin / 1440
      const positions = computePositions(jd)
      solar.rotate(jd, positions)
      solar.group.updateMatrixWorld(true)
      const ll = texelUnder(solar, id, sub(positions['sun'], positions[id]))
      expect(Math.abs(wrap(ll.lon - r.lon)), id).toBeLessThan(0.5)
      // Horizons latitudes are planetodetic; Mars' flattening adds ~0.3°.
      expect(Math.abs(ll.lat - r.lat), id).toBeLessThan(0.5)
    }
  })

  it('Saturn’s ring-shadow plane follows the planet’s pole', () => {
    const { solar } = scene('2026-06-01T00:00:00Z')
    const view = solar.byId['saturn']
    const pole = new THREE.Vector3(0, 1, 0).applyQuaternion(view.group.quaternion)
    expect(view.ringShadow!.uPole.value.angleTo(pole)).toBeLessThan(1e-9)
  })
})
