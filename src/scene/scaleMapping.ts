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
