import * as THREE from 'three'
import CameraControls from 'camera-controls'

CameraControls.install({ THREE })

/**
 * Focus-and-orbit camera. Because the floating origin always keeps the focused
 * body at render (0,0,0), the rig only orbits the origin — focusing a new body
 * just rescopes the zoom range and near/far planes to that body's size. The
 * logarithmic depth buffer (see Renderer) makes the enormous near/far ratio safe.
 */
export class CameraRig {
  readonly camera: THREE.PerspectiveCamera
  readonly controls: CameraControls
  private readonly target = new THREE.Vector3()

  constructor(domElement: HTMLElement, aspect: number) {
    this.camera = new THREE.PerspectiveCamera(45, aspect, 1e-7, 1e4)
    this.controls = new CameraControls(this.camera, domElement)
    this.controls.dollySpeed = 0.6
    this.controls.smoothTime = 0.4 // matches the focus-glide so fly-to finishes together
    this.controls.draggingSmoothTime = 0.08
    this.controls.setTarget(0, 0, 0, false)
    // A tilted 3/4 view of the ecliptic rather than a flat edge-on or top-down one.
    void this.controls.rotateTo(0.7, 1.1, false)
  }

  /** Frame a body, viewing it from `dir` (e.g. the sunlit side) at the focus origin. */
  frameFrom(
    renderRadius: number,
    kind: 'sun' | 'planet' | 'moon' | 'small',
    dir: { x: number; y: number; z: number },
    transition = true,
  ): void {
    this.controls.minDistance = renderRadius * 1.02
    this.controls.maxDistance = 5000
    this.camera.near = Math.max(renderRadius * 1e-3, 1e-9)
    this.camera.far = 1e4
    this.camera.updateProjectionMatrix()
    const dist = renderRadius * { sun: 6, planet: 3.5, moon: 4, small: 8 }[kind]
    const m = Math.hypot(dir.x, dir.y, dir.z) || 1
    void this.controls.setLookAt((dir.x / m) * dist, (dir.y / m) * dist, (dir.z / m) * dist, 0, 0, 0, transition)
  }

  resize(aspect: number): void {
    this.camera.aspect = aspect
    this.camera.updateProjectionMatrix()
  }

  update(delta: number): boolean {
    return this.controls.update(delta)
  }

  /** Distance from the camera to its orbit target, in render units. */
  get distance(): number {
    this.controls.getTarget(this.target)
    return this.camera.position.distanceTo(this.target)
  }
}
