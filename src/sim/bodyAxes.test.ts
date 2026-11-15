import { describe, it, expect } from 'vitest'
import * as Astronomy from 'astronomy-engine'
import { AXIS_BODY, iauAxis } from './bodyAxes'
import { BODY_BY_ID } from '../config/bodies'
import { bodyBasis } from '../math/orientation'
import { RAD2DEG } from '../config/constants'

// The registry's J2000 pole / W0 / period must stay the IAU model that
// astronomy-engine's RotationAxis implements: the renderer uses RotationAxis
// for these bodies, but the registry is the documented reference and the
// fallback, and a period that disagrees with W0's rate (Neptune once had the
// 16.11 h fact-sheet value against the IAU 15.97 h rate) is a silent error.

const wrap = (deg: number): number => ((((deg + 180) % 360) + 360) % 360) - 180
const angle = (a: { x: number; y: number; z: number }, b: typeof a) =>
  Math.acos(Math.min(1, a.x * b.x + a.y * b.y + a.z * b.z)) * RAD2DEG
/** A TT instant `d` days after J2000. */
const tt = (d: number) => Astronomy.AstroTime.FromTerrestrialTime(d)

describe('registry vs astronomy-engine RotationAxis', () => {
  const ids = Object.keys(AXIS_BODY)

  it('covers the Sun, planets (but Earth), Moon and Pluto', () => {
    expect(ids.sort()).toEqual(['jupiter', 'mars', 'mercury', 'moon', 'neptune', 'pluto', 'saturn', 'sun', 'uranus', 'venus'])
    expect(iauAxis('earth', tt(0))).toBeNull()
    expect(iauAxis('titan', tt(0))).toBeNull()
  })

  it('J2000 poles agree (the Moon within its periodic terms)', () => {
    for (const id of ids) {
      const def = BODY_BY_ID[id]
      const reg = bodyBasis(def.pole.raDeg, def.pole.decDeg).y
      const iau = iauAxis(id, tt(0))!.basis.y
      expect(angle(reg, iau), id).toBeLessThan(id === 'moon' ? 2 : 0.05)
    }
  })

  it('J2000 prime meridians agree', () => {
    for (const id of ids) {
      const def = BODY_BY_ID[id]
      const w = iauAxis(id, tt(0))!.w * RAD2DEG
      // Mars: the registry keeps the 2009 W0 (176.630°); astronomy-engine has
      // the 2015 set (176.050° plus periodic terms) on a slightly moved pole.
      const tol = id === 'moon' ? 4 : id === 'mars' ? 1 : 0.1
      expect(Math.abs(wrap(w - def.meridianDeg!)), id).toBeLessThan(tol)
    }
  })

  it('registry periods advance W at the IAU rate', () => {
    // Compare the W change over spans from a day to a decade, so a period that
    // is off by more than a rounding error cannot hide behind a 360° wrap.
    for (const id of ids) {
      const def = BODY_BY_ID[id]
      const rate = 360 / (def.rotationPeriodHours / 24) // °/day, signed
      const w0 = iauAxis(id, tt(0))!.w * RAD2DEG
      for (const days of [1, 10, 100, 1000, 3653]) {
        const dIau = wrap(iauAxis(id, tt(days))!.w * RAD2DEG - w0)
        const dReg = wrap(rate * days)
        const tol = id === 'moon' ? 7 : 1 // the Moon's W carries ±3° periodic terms
        expect(Math.abs(wrap(dIau - dReg)), `${id} +${days} d`).toBeLessThan(tol)
      }
    }
  })
})
