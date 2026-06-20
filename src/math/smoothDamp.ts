import type { Vec3 } from './vec3'

// Critically-damped spring (Game Programming Gems 4 / Unity's SmoothDamp).
// Frame-rate independent: moves `current` toward `target`, carrying velocity in
// `vel` across frames. Used to glide the floating origin between bodies so a
// fly-to has no jump and no overshoot.

export function smoothDamp(
  current: number,
  target: number,
  vel: { value: number },
  smoothTime: number,
  dt: number,
): number {
  smoothTime = Math.max(1e-4, smoothTime)
  const omega = 2 / smoothTime
  const x = omega * dt
  const exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x)
  const change = current - target
  const temp = (vel.value + omega * change) * dt
  vel.value = (vel.value - omega * temp) * exp
  return target + (change + temp) * exp
}

export interface Vec3Vel {
  x: number
  y: number
  z: number
}

/** Per-axis smoothDamp. `vel` is mutated; result written to `out` (may alias `current`). */
export function smoothDampVec3(
  current: Vec3,
  target: Vec3,
  vel: Vec3Vel,
  smoothTime: number,
  dt: number,
  out: Vec3,
): Vec3 {
  const vx = { value: vel.x }
  const vy = { value: vel.y }
  const vz = { value: vel.z }
  out.x = smoothDamp(current.x, target.x, vx, smoothTime, dt)
  out.y = smoothDamp(current.y, target.y, vy, smoothTime, dt)
  out.z = smoothDamp(current.z, target.z, vz, smoothTime, dt)
  vel.x = vx.value
  vel.y = vy.value
  vel.z = vz.value
  return out
}
