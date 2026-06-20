import type { Vec3 } from '../math/vec3'

// Layer 2 of the coordinate contract: map simulation units (AU) to render units.
// The simulation always works in true AU; this layer decides how those map to
// what the camera sees. M0 ships the true-scale (linear) mode only; the visual
// (log-radial + log-size) mode arrives with the scale toggle in M3.

export type ScaleMode = 'true' | 'visual'

export interface ScaleMapping {
  readonly mode: ScaleMode
  /** Map a position in AU to render units. */
  position(au: Vec3): Vec3
  /** Map a radius in AU to render units. */
  radius(au: number): number
}

/**
 * True-to-scale mapping: render units are AU directly (`unitsPerAu` defaults to
 * 1, so 1 render unit = 1 AU). Linear, so all distance ratios are preserved.
 */
export function makeTrueScale(unitsPerAu = 1): ScaleMapping {
  return {
    mode: 'true',
    position: (p) => ({ x: p.x * unitsPerAu, y: p.y * unitsPerAu, z: p.z * unitsPerAu }),
    radius: (r) => r * unitsPerAu,
  }
}

const AU_KM_LOCAL = 149_597_870.7

export interface VisualScaleOpts {
  /** Heliocentric distance remap: |r|_render = distK · |r|_AU^distExp. */
  distK?: number
  distExp?: number
  /** Body radius remap: r_render = sizeK · r_km^sizeExp. */
  sizeK?: number
  sizeExp?: number
}

/**
 * Visual ("poster") mapping: compresses orbital distances and amplifies body
 * sizes via power laws so the whole system is visible at once and tiny bodies
 * aren't sub-pixel. Direction is preserved; the Sun stays at the origin. Both
 * remaps are strictly increasing, so ordering (which planet is farther/bigger)
 * is never inverted.
 */
export function makeVisualScale(opts: VisualScaleOpts = {}): ScaleMapping {
  const distK = opts.distK ?? 10
  const distExp = opts.distExp ?? 0.5
  const sizeK = opts.sizeK ?? 0.05
  const sizeExp = opts.sizeExp ?? 0.33
  return {
    mode: 'visual',
    position: (p) => {
      const len = Math.hypot(p.x, p.y, p.z)
      if (len === 0) return { x: 0, y: 0, z: 0 }
      const s = (distK * Math.pow(len, distExp)) / len
      return { x: p.x * s, y: p.y * s, z: p.z * s }
    },
    radius: (r) => sizeK * Math.pow(r * AU_KM_LOCAL, sizeExp),
  }
}
