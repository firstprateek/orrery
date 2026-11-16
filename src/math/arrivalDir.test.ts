import { describe, it, expect } from 'vitest'
import { ARRIVAL_LIFT, DEFAULT_SIDE, SYSTEM_LIFT, arrivalDirFrom } from './arrivalDir'

const elevationDeg = (v: { x: number; y: number; z: number }) =>
  (Math.atan2(v.z, Math.hypot(v.x, v.y)) * 180) / Math.PI
const azimuth = (v: { x: number; y: number }) => Math.atan2(v.y, v.x)

describe('arrivalDirFrom', () => {
  it('views a planet in the ecliptic from ~27° above it (ecliptic north is screen up)', () => {
    const d = arrivalDirFrom({ x: 5, y: 0, z: 0 })
    expect(elevationDeg(d)).toBeCloseTo((Math.atan(ARRIVAL_LIFT) * 180) / Math.PI, 6)
    expect(elevationDeg(d)).toBeGreaterThan(20)
    expect(elevationDeg(d)).toBeLessThan(35)
  })

  it('swings round from the sunward direction by `side`, about ecliptic north', () => {
    // Sunward from (5,0,0) is −X (azimuth π); the swing is counter-clockwise seen from the north.
    for (const side of [0, DEFAULT_SIDE, 1.15]) {
      const d = arrivalDirFrom({ x: 5, y: 0, z: 0 }, side)
      const az = azimuth(d)
      expect(Math.cos(az)).toBeCloseTo(Math.cos(Math.PI + side), 9)
      expect(Math.sin(az)).toBeCloseTo(Math.sin(Math.PI + side), 9)
      expect(elevationDeg(d)).toBeCloseTo((Math.atan(ARRIVAL_LIFT) * 180) / Math.PI, 9)
    }
  })

  it('gives the Sun (whole-system view) a higher, fixed viewpoint', () => {
    const d = arrivalDirFrom({ x: 0, y: 0, z: 0 }, 0)
    expect(d.x).toBeCloseTo(1, 9)
    expect(d.y).toBeCloseTo(0, 9)
    expect(elevationDeg(d)).toBeCloseTo((Math.atan(SYSTEM_LIFT) * 180) / Math.PI, 6)
    expect(elevationDeg(d)).toBeGreaterThan(elevationDeg(arrivalDirFrom({ x: 1, y: 0, z: 0 })))
  })

  it('stays above the ecliptic for bodies on inclined orbits', () => {
    // Pluto-like: 17° inclination puts it well below the plane at times.
    const d = arrivalDirFrom({ x: 30, y: 10, z: -10 })
    expect(d.z).toBeGreaterThan(0)
    // Above the plane is the case that lowers the view: the sunward z (−p.z)
    // eats into the lift. At Pluto's 17° the view still sits ~12° up.
    const lat = (17 * Math.PI) / 180
    for (const side of [0, DEFAULT_SIDE]) {
      const up = arrivalDirFrom({ x: 33 * Math.cos(lat), y: 0, z: 33 * Math.sin(lat) }, side)
      expect(up.z).toBeGreaterThan(0)
      expect(elevationDeg(up)).toBeGreaterThan(10)
    }
  })
})
