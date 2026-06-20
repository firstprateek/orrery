import type { Vec3 } from '../math/vec3'

// Layer 3 of the coordinate contract: camera-relative ("floating origin")
// rendering. Every body's absolute heliocentric position (AU, float64) is
// expressed relative to the focused body BEFORE it is reduced to GPU float32.
// Subtracting in double precision first is what preserves sub-kilometre detail
// at tens of AU — the difference between a crisp zoom and a jittering mess.

/** Position of `absoluteAu` relative to the floating origin `originAu`. */
export function relativePosition(absoluteAu: Vec3, originAu: Vec3): Vec3 {
  return {
    x: absoluteAu.x - originAu.x,
    y: absoluteAu.y - originAu.y,
    z: absoluteAu.z - originAu.z,
  }
}

/** Euclidean length of a vector. */
export function length(v: Vec3): number {
  return Math.hypot(v.x, v.y, v.z)
}
