import * as THREE from 'three'
import CameraControls from 'camera-controls'

/** Framing class; 'ringed' backs off far enough to show the whole ring system. */
export type FrameKind = 'sun' | 'planet' | 'ringed' | 'moon' | 'small'

CameraControls.install({ THREE })

/**
 * Floor for the near plane, in render units (AU at true scale): 1e-9 AU is
 * about 150 m. Anything that needs a closer camera (spacecraft models) lowers
 * it here, in one place; log depth keeps the near/far ratio safe either way.
 */
export const MIN_NEAR = 1e-9

/** Vertical field of view, degrees (the light-speed jump widens it for a moment). */
export const BASE_FOV = 45

/** Camera up: ecliptic north, the scene's +Z. */
export const ECLIPTIC_NORTH: Readonly<THREE.Vector3> = new THREE.Vector3(0, 0, 1)

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
  private readonly endSpherical = new THREE.Spherical()

  constructor(domElement: HTMLElement, aspect: number) {
    this.camera = new THREE.PerspectiveCamera(BASE_FOV, aspect, 1e-7, 1e4)
    // The scene is ecliptic J2000 with +Z = ecliptic north, so "up" on screen
    // is ecliptic north too: the planets' plane reads horizontal, Saturn's
    // rings and Earth's tilt look the way diagrams show them, and the orbit
    // poles (where dragging stops and the view would roll) sit at the ecliptic
    // poles instead of at Orion and the Sagittarius core. camera-controls reads
    // camera.up once, when it is constructed, so this must come first.
    this.camera.up.copy(ECLIPTIC_NORTH)
    this.controls = new CameraControls(this.camera, domElement)
    this.controls.dollySpeed = 0.6
    this.controls.smoothTime = 0.4 // matches the focus-glide so fly-to finishes together
    this.controls.draggingSmoothTime = 0.08
    this.controls.setTarget(0, 0, 0, false)
    // Every gesture either orbits or moves the camera in/out — nothing pans the
    // orbit target off the focused body (which left you circling empty space)
    // and nothing changes the lens zoom (trackpad pinch did that by default, a
    // hidden state the rest of the app never saw). Ctrl/pinch wheel is handled
    // in main.ts as a dolly.
    const A = CameraControls.ACTION
    this.controls.mouseButtons.right = A.ROTATE
    this.controls.mouseButtons.middle = A.DOLLY
    this.controls.touches.two = A.TOUCH_DOLLY
    this.controls.touches.three = A.NONE
    this.controls.minZoom = this.controls.maxZoom = 1
    // A tilted 3/4 view of the ecliptic rather than a flat edge-on or top-down
    // one (polar angle is measured from ecliptic north). main.ts frames a body
    // straight away, so this only covers the frames before that.
    void this.controls.rotateTo(0.7, 1.1, false)
  }

  /** Frame a body, viewing it from `dir` (e.g. the sunlit side) at the focus origin. */
  frameFrom(
    renderRadius: number,
    kind: FrameKind,
    dir: { x: number; y: number; z: number },
    transition = true,
  ): void {
    this.controls.minDistance = renderRadius * 1.02
    this.controls.maxDistance = 5000
    this.camera.near = Math.max(renderRadius * 1e-3, MIN_NEAR)
    this.camera.far = 1e4
    this.camera.updateProjectionMatrix()
    const dist = this.frameDistance(renderRadius, kind)
    const m = Math.hypot(dir.x, dir.y, dir.z) || 1
    void this.controls.setLookAt((dir.x / m) * dist, (dir.y / m) * dist, (dir.z / m) * dist, 0, 0, 0, transition)
    // With up = ecliptic north the azimuth wraps at ±π along +Y (longitude
    // 90°), and camera-controls tweens theta linearly, so without this a
    // fly-to between views either side of it swings the long way round.
    // normalizeRotations wraps the end and shifts the current theta by whole
    // turns (no visible jump) so the transition takes the short arc.
    this.controls.normalizeRotations()
  }

  /**
   * Zoom by a factor (<1 moves closer). Based on the destination distance, not
   * the current one, so quick repeated steps compound instead of lagging.
   */
  zoomBy(factor: number): void {
    const c = this.controls
    void c.dollyTo(THREE.MathUtils.clamp(this.destinationDistance * factor, c.minDistance, c.maxDistance), true)
  }

  /** Where the current camera transition will end (controls.distance is the in-flight value). */
  get destinationDistance(): number {
    return this.controls.getSpherical(this.endSpherical, true).radius
  }

  /** Standard viewing distance for a body of this render radius. */
  frameDistance(renderRadius: number, kind: FrameKind): number {
    // Portrait screens are width-limited: back off so the body still fits across.
    const portraitFit = Math.max(1, 0.9 / this.camera.aspect)
    return renderRadius * { sun: 6, planet: 3.5, ringed: 6, moon: 4, small: 8 }[kind] * portraitFit
  }

  /** Update only near/far for a focused body of the given render radius. */
  setClip(renderRadius: number): void {
    this.camera.near = Math.max(renderRadius * 1e-3, MIN_NEAR)
    this.camera.far = 1e4
    this.camera.updateProjectionMatrix()
  }

  /** Multiply the current orbit distance (keeps a body framed as it grows/shrinks). */
  scaleDistance(ratio: number): void {
    void this.controls.dollyTo(this.distance * ratio, false)
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
