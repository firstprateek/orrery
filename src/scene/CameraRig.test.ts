import { describe, it, expect, vi } from 'vitest'
import * as THREE from 'three'
import { CameraRig, ECLIPTIC_NORTH } from './CameraRig'

// camera-controls only needs an event target with a few DOM-ish members to be
// constructed in node; nothing here dispatches pointer events.
vi.stubGlobal(
  'DOMRect',
  class {
    constructor(
      public x = 0,
      public y = 0,
      public width = 0,
      public height = 0,
    ) {}
  },
)
function stubElement(): HTMLElement {
  const t = new EventTarget() as unknown as HTMLElement
  Object.assign(t, {
    style: {},
    setAttribute() {},
    removeAttribute() {},
    ownerDocument: { addEventListener() {}, removeEventListener() {} },
    getBoundingClientRect: () => ({ left: 0, top: 0, width: 1440, height: 900, right: 1440, bottom: 900 }),
  })
  return t
}

/** The camera's screen axes in world space. */
function screenAxes(cam: THREE.PerspectiveCamera) {
  cam.updateMatrixWorld()
  const right = new THREE.Vector3().setFromMatrixColumn(cam.matrixWorld, 0)
  const up = new THREE.Vector3().setFromMatrixColumn(cam.matrixWorld, 1)
  return { right, up }
}

describe('CameraRig up vector', () => {
  it('uses ecliptic north (+Z) as up', () => {
    const rig = new CameraRig(stubElement(), 1.6)
    expect(rig.camera.up.toArray()).toEqual([0, 0, 1])
    expect(ECLIPTIC_NORTH.toArray()).toEqual([0, 0, 1])
  })

  it('starts on a tilted 3/4 view above the ecliptic with a level horizon', () => {
    const rig = new CameraRig(stubElement(), 1.6)
    // The rig starts at radius 0; give it a distance so there is a position to measure.
    void rig.controls.dollyTo(10, false)
    rig.update(0)
    const p = rig.camera.position.clone().normalize()
    const elev = THREE.MathUtils.radToDeg(Math.asin(p.z))
    expect(elev).toBeGreaterThan(15)
    expect(elev).toBeLessThan(60)
    const { right, up } = screenAxes(rig.camera)
    expect(right.z).toBeCloseTo(0, 9) // no roll: the ecliptic runs level across the screen
    expect(up.z).toBeGreaterThan(0) // ecliptic north points up the screen
  })

  it('frames a body from the given direction, ecliptic level, at the standard distance', () => {
    const rig = new CameraRig(stubElement(), 1.6)
    const dir = { x: -0.6, y: 0.8, z: 0.5 }
    rig.frameFrom(0.01, 'planet', dir, false)
    rig.update(0)
    const want = new THREE.Vector3(dir.x, dir.y, dir.z).normalize()
    expect(rig.camera.position.clone().normalize().dot(want)).toBeCloseTo(1, 9)
    expect(rig.distance).toBeCloseTo(rig.frameDistance(0.01, 'planet'), 9)
    const { right, up } = screenAxes(rig.camera)
    expect(right.z).toBeCloseTo(0, 9)
    expect(up.z).toBeGreaterThan(0)
  })

  it('keeps the horizon level while orbiting (a drag) and clamps at the ecliptic poles', () => {
    const rig = new CameraRig(stubElement(), 1.6)
    rig.frameFrom(1, 'sun', { x: 1, y: 0, z: 0.7 }, false)
    rig.update(0)
    // Horizontal drag: spins about ecliptic north, elevation unchanged.
    const z0 = rig.camera.position.z
    void rig.controls.rotate(1.3, 0, false)
    rig.update(0)
    expect(rig.camera.position.z).toBeCloseTo(z0, 9)
    expect(screenAxes(rig.camera).right.z).toBeCloseTo(0, 9)
    // Drag far past the top: stops looking straight down on the ecliptic, no flip.
    void rig.controls.rotate(0, -10, false)
    rig.update(0)
    const p = rig.camera.position.clone().normalize()
    expect(p.z).toBeCloseTo(1, 6)
    expect(Number.isFinite(rig.camera.quaternion.x)).toBe(true)
  })
})
