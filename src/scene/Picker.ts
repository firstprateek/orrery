import * as THREE from 'three'
import { raySphere } from '../math/raySphere'
import type { PickTarget } from './FrameState'

const raycaster = new THREE.Raycaster()

/**
 * Pick the nearest target under normalised-device coords. Tests each target's
 * bounding sphere in render space (a few dozen cheap ray-sphere tests), with a
 * screen-space radius floor so tiny-but-visible targets stay clickable. Targets
 * are generic (bodies today; spacecraft and other layers add their own), and
 * hidden ones are skipped so nothing invisible steals a click.
 */
export function pickBody(
  ndc: THREE.Vector2,
  camera: THREE.PerspectiveCamera,
  targets: Iterable<PickTarget>,
  viewportH: number,
  minPickPx = 8,
): string | null {
  raycaster.setFromCamera(ndc, camera)
  const o = raycaster.ray.origin
  const d = raycaster.ray.direction
  const fovRad = (camera.fov * Math.PI) / 180
  const worldPerPxAtUnit = (2 * Math.tan(fovRad / 2)) / viewportH

  let best: string | null = null
  let bestT = Infinity
  for (const t of targets) {
    if (!t.visible) continue
    const p = t.pos
    const dx = p.x - o.x
    const dy = p.y - o.y
    const dz = p.z - o.z
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
    const pickR = Math.max(t.r, worldPerPxAtUnit * dist * minPickPx)
    const hit = raySphere(o.x, o.y, o.z, d.x, d.y, d.z, p.x, p.y, p.z, pickR)
    if (hit !== null && hit < bestT) {
      bestT = hit
      best = t.id
    }
  }
  return best
}
