import * as THREE from 'three'
import { raySphere } from '../math/raySphere'
import type { SolarSystem } from './SolarSystem'

const raycaster = new THREE.Raycaster()

/**
 * Pick the nearest body under normalised-device coords. Tests each body's
 * bounding sphere in render space (a few dozen cheap ray-sphere tests), with a
 * screen-space radius floor so tiny-but-visible bodies stay clickable.
 */
export function pickBody(
  ndc: THREE.Vector2,
  camera: THREE.PerspectiveCamera,
  solar: SolarSystem,
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
  for (const view of solar.views) {
    const p = view.group.position
    const dist = p.distanceTo(o)
    const pickR = Math.max(view.mesh.scale.x, worldPerPxAtUnit * dist * minPickPx)
    const t = raySphere(o.x, o.y, o.z, d.x, d.y, d.z, p.x, p.y, p.z, pickR)
    if (t !== null && t < bestT) {
      bestT = t
      best = view.def.id
    }
  }
  return best
}
