import { smoothDampVec3, type Vec3Vel } from '../math/smoothDamp'
import type { Vec3 } from '../math/vec3'

// Owns the floating origin in AU. The camera always orbits render (0,0,0); this
// glides the abstract origin toward the selected body so the whole scene slides
// continuously into frame — a fly-to with no jump and no float32 jitter.
//
// Two phases: during a flight (≤ flyDuration) it springs toward the target;
// once arrived it LOCKS exactly onto the target every frame. The lock matters
// because a critically-damped spring has steady-state lag against a moving
// target — without it, a body drifts out of frame while time is playing fast.

export class FocusController {
  readonly focusAu: Vec3 = { x: 0, y: 0, z: 0 }
  private readonly vel: Vec3Vel = { x: 0, y: 0, z: 0 }
  targetId: string
  smoothTime = 0.4
  flyDuration = 1.0
  private flyTimer = 0
  private arrived = false

  constructor(initialId: string, positions: Record<string, Vec3>) {
    this.targetId = initialId
    this.snap(positions)
  }

  setTarget(id: string): void {
    if (id === this.targetId) return
    this.targetId = id
    this.flyTimer = 0
    this.arrived = false
  }

  /** Jump the origin straight to the target and lock (deep-link / first load). */
  snap(positions: Record<string, Vec3>): void {
    const p = positions[this.targetId]
    this.focusAu.x = p.x
    this.focusAu.y = p.y
    this.focusAu.z = p.z
    this.vel.x = this.vel.y = this.vel.z = 0
    this.arrived = true
    this.flyTimer = this.flyDuration
  }

  update(positions: Record<string, Vec3>, dt: number): Vec3 {
    const t = positions[this.targetId]
    if (this.arrived) {
      // Lock exactly onto the (moving) target so it stays centred during playback.
      this.focusAu.x = t.x
      this.focusAu.y = t.y
      this.focusAu.z = t.z
      return this.focusAu
    }
    smoothDampVec3(this.focusAu, t, this.vel, this.smoothTime, dt, this.focusAu)
    this.flyTimer += dt
    if (this.flyTimer >= this.flyDuration) this.arrived = true
    return this.focusAu
  }

  get flying(): boolean {
    return !this.arrived
  }
}
