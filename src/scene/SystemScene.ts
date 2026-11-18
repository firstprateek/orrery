import type * as THREE from 'three'
import type { BodyDef } from '../config/bodies'
import type { Vec3 } from '../math/vec3'
import type { LabelSource, PickTarget } from './FrameState'

// What main.ts needs from "the star system you are in". The Solar System
// (scene/SolarSystem) and every other system (scene/ExoSystem) implement it;
// exactly one is alive at a time, and the old one is disposed on travel.
export interface SystemScene {
  /** Sky-catalogue id ('sol' for home). */
  readonly id: string
  readonly name: string
  readonly group: THREE.Group
  /** Bodies in menu order, parents before children. */
  readonly bodies: readonly BodyDef[]
  /** The star the overview centres on. */
  readonly primaryId: string
  /** Where the camera goes after the arrival overview. */
  readonly defaultFocusId: string
  /** Radius (render units) the overview must fit on screen. */
  readonly overviewRadius: number

  /** Positions (AU, system frame) for every body. Reuses `out`. */
  computePositions(jd: number, out?: Record<string, Vec3>): Record<string, Vec3>
  pickTargets(): readonly PickTarget[]
  labelSources(): LabelSource[]
  /** Blended render radius of a body (0 true … 1 overview). */
  renderRadius(def: BodyDef, blend: number): number
  place(positions: Record<string, Vec3>, focusAu: Vec3, blend: number): void
  rotate(jd: number, positions: Readonly<Record<string, Vec3>>): void
  setSunBoost(bloomActive: boolean): void
  setHighlight(id: string | null): void
  setBeltFade(f: number): void
  setBeltCount(n: number): void
  /** Hide or show belt-like extras for perf probes. */
  setBeltVisible(on: boolean): void
  ensureFamilyTextures(id: string): void
  /** Free every GPU resource. The scene is unusable afterwards. */
  dispose(): void
}
