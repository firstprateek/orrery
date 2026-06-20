import { smoothDampVec3, type Vec3Vel } from '../math/smoothDamp'
import type { Vec3 } from '../math/vec3'

// Owns the floating origin in AU. The camera always orbits render (0,0,0); this
// glides the abstract origin toward the selected body so the whole scene slides
// continuously into frame — a fly-to with no jump and no float32 jitter, because
// the recenter happens in double precision before anything reaches the GPU.

export class FocusController {
  readonly focusAu: Vec3 = { x: 0, y: 0, z: 0 }
  private readonly vel: Vec3Vel = { x: 0, y: 0, z: 0 }
  targetId: string
  smoothTime = 0.4

  constructor(initialId: string, positions: Record<string, Vec3>) {
    this.targetId = initialId
    this.snap(positions)
  }

  setTarget(id: string): void {
    this.targetId = id
  }

  /** Jump the origin straight to the target (deep-link / first load). */
  snap(positions: Record<string, Vec3>): void {
    const p = positions[this.targetId]
    this.focusAu.x = p.x
    this.focusAu.y = p.y
    this.focusAu.z = p.z
    this.vel.x = this.vel.y = this.vel.z = 0
  }

  update(positions: Record<string, Vec3>, dt: number): Vec3 {
    return smoothDampVec3(this.focusAu, positions[this.targetId], this.vel, this.smoothTime, dt, this.focusAu)
  }

  /** Squared speed of the glide — used to know when a flight has settled. */
  get speed(): number {
    return Math.hypot(this.vel.x, this.vel.y, this.vel.z)
  }
}
