import type * as THREE from 'three'
import type { Vec3 } from '../math/vec3'
import type { QualitySettings } from './quality'
import type { PlacedLabel } from '../ui/Labels'

// The contract between tick() and the scene layers that ride along with the
// planets (sky guide, spacecraft, belts, heliosphere…). tick() fills ONE
// FrameState per frame and hands it to every registered layer, so a new layer
// is one file plus one registration line in main.ts instead of another hunk
// threaded through the loop.

/** Everything a layer may need about the current frame. Read-only for layers. */
export interface FrameState {
  /** Seconds since the last frame (clamped to 0.1). */
  dt: number
  /** Simulation time, Julian date (TDB-ish, as SimClock keeps it). */
  jd: number
  /** Heliocentric ecliptic-J2000 positions in AU, by body id. */
  positions: Record<string, Vec3>
  /** The floating origin in AU: subtract it to get focus-relative true positions. */
  focusAu: Vec3
  /** Id of the selected target (where the camera is going or already is). */
  focusId: string
  /** Current scale blend: 0 = true scale, 1 = overview. */
  blend: number
  /** Where the scale blend is heading. */
  targetBlend: number
  camera: THREE.PerspectiveCamera
  /** Camera distance from its orbit target (the focus), render units. */
  rigDistance: number
  /** True while the opening glide is playing. */
  introRunning: boolean
  /** Travel-effect strength 0…1 (always 0 until travel lands). */
  travelFx: number
  /** Phone-width layout (max-width: 640px). */
  narrow: boolean
  quality: QualitySettings
  /**
   * Labels shown by the previous label update (refreshed every other frame),
   * so a layer placing its own labels can keep clear of them.
   */
  labels: readonly PlacedLabel[]
}

/**
 * A pickable sphere in render space. `pos`, `r` and `visible` are read at pick
 * time, so a target can expose live getters and be allocated once.
 */
export interface PickTarget {
  readonly id: string
  readonly pos: { readonly x: number; readonly y: number; readonly z: number }
  /** Geometric radius in render units (a screen-space floor is added by the picker). */
  readonly r: number
  /** Hidden targets are never picked. */
  readonly visible: boolean
}

/** Label look; each style maps to its own CSS in Labels. */
export type LabelStyle = 'body'

/** One projected DOM label. Callbacks are polled on every label update. */
export interface LabelSource {
  id: string
  text: string
  /** Render-space anchor. May return a shared vector; it is only read. */
  getPos(): THREE.Vector3
  /** Render radius, used to hide tier > 0 labels whose body is under ~2 px. */
  getRadius(): number
  /**
   * Declutter priority, lower wins a collision: 0 = Sun/planets, 1 = moons.
   * Planned: 2 = craft and belt regions. Sky labels are a separate layer placed
   * after these.
   */
  tier: number
  style: LabelStyle
  /** Clicking an interactive label flies to `id`. */
  interactive: boolean
  visible(): boolean
}

/**
 * A scene layer: anything that must be positioned for the floating origin and
 * scale blend each frame. Registered in main.ts with addLayer().
 */
export interface SceneLayer {
  /** Called every frame after the bodies are placed and the camera has moved. */
  update(f: FrameState): void
  /** Extra click/hover targets (fly-to). Polled at pick time. */
  pickTargets?(): readonly PickTarget[]
  /** Labels this layer contributes; read once at registration. */
  labelSources?(): LabelSource[]
  /** Called on registration and whenever the quality tier changes. */
  setQuality?(q: QualitySettings): void
  /** Throttled DOM work (every 12th frame, with the stats readout). */
  updateUi?(f: FrameState): void
}
