import { BODY_BY_ID, type BodyDef } from './bodies'
import type { FrameKind } from '../scene/CameraRig'

// One lookup for "the thing the camera is focused on". Today every target is a
// body; spacecraft (and anything else you can fly to) add their own kind here,
// so the fact panel, the stats readout, zoom framing and the per-frame rescale
// read through targetDef / targetRenderRadius instead of BODY_BY_ID.

interface TargetBase {
  id: string
  name: string
  /** Fact-panel text. */
  facts: string
  /** How the camera frames it (see CameraRig.frameDistance). */
  frameKind: FrameKind
  /**
   * Only viewable in true scale: flying to it from the overview drops back to
   * true scale first (moons collapse onto their planet in the overview).
   */
  trueScaleOnly: boolean
}

export interface BodyTarget extends TargetBase {
  kind: 'body'
  body: BodyDef
}

// A discriminated union so that, once another kind joins (spacecraft have no
// BodyDef), every read of `body` has to narrow on `kind` first: the compiler
// catches it instead of a runtime crash in a later branch.
export type TargetDef = BodyTarget
export type TargetKind = TargetDef['kind']

/** Framing class for a body: rings back the camera off, small moons get closer. */
export function kindOf(def: BodyDef): FrameKind {
  if (def.type === 'star') return 'sun'
  if (def.ringOuterKm) return 'ringed'
  if (def.type === 'moon') return def.radiusKm < 100 ? 'small' : 'moon'
  return 'planet'
}

// A Map, not a plain object: ids come straight from the URL (?obj=), and a
// plain-object lookup would accept inherited keys like 'constructor'.
const DEFS = new Map<string, TargetDef>()
for (const body of Object.values(BODY_BY_ID)) {
  DEFS.set(body.id, {
    id: body.id,
    name: body.name,
    kind: 'body',
    facts: body.facts,
    frameKind: kindOf(body),
    trueScaleOnly: body.type === 'moon',
    body,
  })
}

/** True for any id the camera can be sent to. */
export function isTarget(id: string): boolean {
  return DEFS.has(id)
}

export function targetDef(id: string): TargetDef {
  const t = DEFS.get(id)
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
  const t = targetDef(id)
  switch (t.kind) {
    case 'body':
      return radiusSource.renderRadius(t.body, blend)
    default: {
      // Exhaustiveness: a new kind fails to compile here until it has a radius.
      const never: never = t.kind
      throw new Error(`no render radius for target kind ${String(never)}`)
    }
  }
}
