import { BODY_BY_ID, type BodyDef } from './bodies'
import type { FrameKind } from '../scene/CameraRig'

// One lookup for "the thing the camera is focused on". Today every target is a
// body; spacecraft (and anything else you can fly to) add their own kind here,
// so the fact panel, the stats readout, zoom framing and the per-frame rescale
// read through targetDef / targetRenderRadius instead of BODY_BY_ID.

export type TargetKind = 'body'

export interface TargetDef {
  id: string
  name: string
  kind: TargetKind
  /** Fact-panel text. */
  facts: string
  /** How the camera frames it (see CameraRig.frameDistance). */
  frameKind: FrameKind
  /** The underlying body definition (kind 'body'). */
  body: BodyDef
}

/** Framing class for a body: rings back the camera off, small moons get closer. */
export function kindOf(def: BodyDef): FrameKind {
  if (def.type === 'star') return 'sun'
  if (def.ringOuterKm) return 'ringed'
  if (def.type === 'moon') return def.radiusKm < 100 ? 'small' : 'moon'
  return 'planet'
}

const DEFS: Record<string, TargetDef> = {}
for (const body of Object.values(BODY_BY_ID)) {
  DEFS[body.id] = { id: body.id, name: body.name, kind: 'body', facts: body.facts, frameKind: kindOf(body), body }
}

/** True for any id the camera can be sent to. */
export function isTarget(id: string): boolean {
  return id in DEFS
}

export function targetDef(id: string): TargetDef {
  const t = DEFS[id]
  if (!t) throw new Error(`unknown target: ${id}`)
  return t
}

/**
 * Where render radii come from. The scene owns the scale mappings (and the
 * blend formula), so it is bound once at start-up instead of duplicated here.
 */
export interface RadiusSource {
  renderRadius(def: BodyDef, blend: number): number
}

let radiusSource: RadiusSource | null = null

export function bindTargetRadii(src: RadiusSource): void {
  radiusSource = src
}

/** Blended render radius of a target at scale blend `blend` (0 true … 1 overview). */
export function targetRenderRadius(id: string, blend: number): number {
  if (!radiusSource) throw new Error('bindTargetRadii() must run before targetRenderRadius()')
  return radiusSource.renderRadius(targetDef(id).body, blend)
}
