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
    this.controls.smoothTime = 0.2
    this.controls.draggingSmoothTime = 0.08
    this.controls.setTarget(0, 0, 0, false)
  }

  /** Frame a body of the given render radius, sitting a few radii away. */
  frame(renderRadius: number): void {
    this.controls.minDistance = renderRadius * 1.05
    this.controls.maxDistance = 200
    this.camera.near = Math.max(renderRadius * 1e-3, 1e-10)
    this.camera.far = 1e4
    this.camera.updateProjectionMatrix()
    this.controls.setTarget(0, 0, 0, false)
    void this.controls.dollyTo(renderRadius * 4, true)
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
