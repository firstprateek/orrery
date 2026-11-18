import * as THREE from 'three'
import type { BodyDef } from '../config/bodies'
import { kmToAu } from '../config/constants'
import type { StarSystemDef } from '../config/systems/types'
import { bodyBasis, faceLockedSpin, meshSpin, type BodyBasis } from '../math/orientation'
import { bodyRotationAngle } from '../math/rotation'
import { tempToRgb } from '../math/starColor'
import type { Vec3 } from '../math/vec3'
import { computeExoPositions } from '../sim/exoEphemeris'
import { ATMOSPHERES, createAtmosphere } from './Atmosphere'
import { disposeObject } from './dispose'
import type { LabelSource, PickTarget } from './FrameState'
import { makeSurfaceTexture } from './planetTexture'
import type { ScaleMapping } from './scaleMapping'
import type { SystemScene } from './SystemScene'

// A star system other than ours, built from a StarSystemDef: stars lit by
// their temperature, planets with procedural surfaces, all on Kepler orbits.
// It mirrors SolarSystem's floating-origin and scale-blend placement, with an
// overview mapping fitted to this system (TRAPPIST-1's planets all sit within
// 0.06 AU, Alpha Centauri B swings out to 36 AU).

const SPHERE = new THREE.SphereGeometry(1, 48, 24)
SPHERE.userData.shared = true

/** Overview: the outermost body lands this far out (Neptune is ~55 in ours). */
const OVERVIEW_OUTER = 40
const SIZE_K = 0.05
const SIZE_EXP = 0.33

const _m = new THREE.Matrix4()
const _x = new THREE.Vector3()
const _y = new THREE.Vector3()
const _z = new THREE.Vector3()
function setGroupBasis(group: THREE.Object3D, b: BodyBasis): void {
  _m.makeBasis(_x.set(b.x.x, b.x.y, b.x.z), _y.set(b.y.x, b.y.y, b.y.z), _z.set(b.z.x, b.z.y, b.z.z))
  group.quaternion.setFromRotationMatrix(_m)
}

interface View {
  def: BodyDef
  group: THREE.Group
  mesh: THREE.Mesh
  atmosphere?: THREE.Mesh
  atmoFactor?: number
  /** Star colour, for the bloom boost. */
  starRgb?: [number, number, number]
}

function apoapsisAu(def: BodyDef): number {
  return def.kepler ? kmToAu(def.kepler.aKm) * (1 + def.kepler.e) : 0
}
function periapsisAu(def: BodyDef): number {
  return def.kepler ? kmToAu(def.kepler.aKm) * (1 - def.kepler.e) : 0
}

/**
 * The overview mapping for a system: |r| → K·√|r| (like ours), plus, for a
 * single star, a push of ~1.4 star radii that eases in before the innermost
 * orbit, so close-in planets clear the enlarged star. Strictly increasing and
 * continuous, so a fly-to glides smoothly in the overview too.
 */
export function makeExoVisualScale(sys: StarSystemDef): ScaleMapping {
  const radius = (au: number) => SIZE_K * Math.pow(au * 149_597_870.7, SIZE_EXP)
  const primary = sys.bodies.find((b) => b.id === sys.primaryId)!
  let outer = 0
  let inner = Infinity
  for (const b of sys.bodies) {
    if (!b.kepler) continue
    let apo = apoapsisAu(b)
    let peri = periapsisAu(b)
    if (sys.binary && b.id === sys.binary.secondary) {
      // About the barycentre, the far star swings out to the larger share.
      const share = Math.max(sys.binary.secondaryMassFraction, 1 - sys.binary.secondaryMassFraction)
      apo *= share
      peri *= 1 - share
    }
    outer = Math.max(outer, apo)
    inner = Math.min(inner, peri)
  }
  const push = sys.binary ? 0 : radius(kmToAu(primary.radiusKm)) * 1.4
  const easeEnd = Number.isFinite(inner) ? inner * 0.6 : 1
  const k = outer > 0 ? (OVERVIEW_OUTER - push) / Math.sqrt(outer) : 1
  return {
    mode: 'visual',
    position: (p) => {
      const len = Math.hypot(p.x, p.y, p.z)
      if (len === 0) return { x: 0, y: 0, z: 0 }
      const t = Math.min(1, len / easeEnd)
      const r = k * Math.sqrt(len) + push * t * t * (3 - 2 * t)
      return { x: (p.x / len) * r, y: (p.y / len) * r, z: (p.z / len) * r }
    },
    radius,
  }
}

export class ExoSystem implements SystemScene {
  readonly group = new THREE.Group()
  readonly id: string
  readonly name: string
  readonly bodies: readonly BodyDef[]
  readonly primaryId: string
  readonly defaultFocusId: string
  readonly overviewRadius: number
  private readonly views: View[] = []
  private readonly byId: Record<string, View> = {}
  private readonly lights: { light: THREE.PointLight; starId: string }[] = []
  private readonly targets: PickTarget[]
  private readonly bases: Record<string, BodyBasis> = {}
  private readonly visualScale: ScaleMapping
  private highlighted: string | null = null

  constructor(
    private readonly sys: StarSystemDef,
    private readonly trueScale: ScaleMapping,
  ) {
    this.id = sys.id
    this.name = sys.name
    this.bodies = sys.bodies
    this.primaryId = sys.primaryId
    this.defaultFocusId = sys.defaultFocusId
    this.visualScale = makeExoVisualScale(sys)

    const stars = sys.bodies.filter((b) => b.type === 'star')
    let maxR = 0
    for (const def of sys.bodies) {
      const group = new THREE.Group()
      const basis = bodyBasis(def.pole.raDeg, def.pole.decDeg)
      this.bases[def.id] = basis
      setGroupBasis(group, basis)
      const look = sys.looks[def.id] ?? (def.type === 'star' ? 'star' : 'rocky')
      const map = makeSurfaceTexture(def.id, look, def.color)
      const view: View = { def, group, mesh: undefined as unknown as THREE.Mesh }
      let material: THREE.Material
      if (def.type === 'star') {
        view.starRgb = tempToRgb(sys.starTempK[def.id] ?? 5800)
        material = new THREE.MeshBasicMaterial({ map })
        // Tinted, but halfway to white: a red dwarf's true colour on a blue
        // world reads as unlit. (Our eyes would adapt to the light too.)
        const [lr, lg, lb] = view.starRgb
        const light = new THREE.PointLight(
          new THREE.Color(0.5 + 0.5 * lr, 0.5 + 0.5 * lg, 0.5 + 0.5 * lb),
          2.6 / Math.sqrt(stars.length),
          0,
          0,
        )
        this.group.add(light)
        this.lights.push({ light, starId: def.id })
      } else {
        material = new THREE.MeshStandardMaterial({ map, metalness: 0, roughness: 0.9 })
        const atmo = look === 'ocean' ? ATMOSPHERES.earth : look === 'gas' ? ATMOSPHERES.jupiter : undefined
        if (atmo) {
          view.atmosphere = createAtmosphere(atmo)
          view.atmoFactor = atmo.factor
          group.add(view.atmosphere)
        }
      }
      view.mesh = new THREE.Mesh(SPHERE, material)
      group.add(view.mesh)
      this.group.add(group)
      this.views.push(view)
      this.byId[def.id] = view
      maxR = Math.max(maxR, this.visualScale.radius(kmToAu(def.radiusKm)))
    }
    this.overviewRadius = OVERVIEW_OUTER + maxR + 6
    this.group.add(new THREE.AmbientLight(0xffffff, 0.05))
    this.setSunBoost(false)

    this.targets = this.views.map((view) => ({
      id: view.def.id,
      pos: view.group.position,
      get r() {
        return view.mesh.scale.x
      },
      get visible() {
        return view.group.visible
      },
    }))
  }

  computePositions(jd: number, out?: Record<string, Vec3>): Record<string, Vec3> {
    return computeExoPositions(this.sys, jd, out)
  }

  pickTargets(): readonly PickTarget[] {
    return this.targets
  }

  labelSources(): LabelSource[] {
    return this.views.map((view) => ({
      id: view.def.id,
      text: view.def.name,
      getPos: () => view.group.position,
      getRadius: () => view.mesh.scale.x,
      tier: 0,
      style: 'body',
      interactive: true,
      visible: () => view.group.visible,
    }))
  }

  renderRadius(def: BodyDef, blend: number): number {
    const auR = kmToAu(def.radiusKm)
    const tr = this.trueScale.radius(auR)
    return blend <= 0 ? tr : tr + (this.visualScale.radius(auR) - tr) * blend
  }

  place(positions: Record<string, Vec3>, focusAu: Vec3, blend: number): void {
    const vf = blend > 0 ? this.visualScale.position(focusAu) : null
    for (const view of this.views) {
      const p = positions[view.def.id]
      const tx = p.x - focusAu.x
      const ty = p.y - focusAu.y
      const tz = p.z - focusAu.z
      if (vf) {
        const v = this.visualScale.position(p)
        view.group.position.set(
          tx + (v.x - vf.x - tx) * blend,
          ty + (v.y - vf.y - ty) * blend,
          tz + (v.z - vf.z - tz) * blend,
        )
      } else {
        view.group.position.set(tx, ty, tz)
      }
      const r = this.renderRadius(view.def, blend)
      view.mesh.scale.setScalar(r)
      if (view.atmosphere) view.atmosphere.scale.setScalar(r * (view.atmoFactor as number))
    }
    for (const { light, starId } of this.lights) light.position.copy(this.byId[starId].group.position)
    // Atmospheres glow on the side facing the nearest star (the planet's parent).
    for (const view of this.views) {
      if (!view.atmosphere) continue
      const host = this.byId[view.def.parent ?? this.primaryId]
      ;(view.atmosphere.material as THREE.ShaderMaterial).uniforms.uSunPos.value.copy(host.group.position)
    }
  }

  rotate(jd: number, positions: Readonly<Record<string, Vec3>>): void {
    for (const view of this.views) {
      const def = view.def
      const parentPos = def.faceLocked && def.parent ? positions[def.parent] : undefined
      const own = positions[def.id]
      const w =
        parentPos && own
          ? faceLockedSpin(this.bases[def.id], { x: parentPos.x - own.x, y: parentPos.y - own.y, z: parentPos.z - own.z })
          : bodyRotationAngle(jd, def.rotationPeriodHours, 0)
      view.mesh.rotation.y = meshSpin(w)
    }
  }

  setSunBoost(bloomActive: boolean): void {
    for (const view of this.views) {
      if (!view.starRgb) continue
      const k = bloomActive ? 2.6 : 1.15
      const [r, g, b] = view.starRgb
      // Keep stars bright even when red: lift towards white before boosting.
      ;(view.mesh.material as THREE.MeshBasicMaterial).color.setRGB(
        (0.35 + 0.65 * r) * k,
        (0.35 + 0.65 * g) * k,
        (0.35 + 0.65 * b) * k,
      )
    }
  }

  setHighlight(id: string | null): void {
    if (id === this.highlighted) return
    const set = (bodyId: string | null, hex: number) => {
      if (!bodyId) return
      const m = this.byId[bodyId]?.mesh.material as THREE.MeshStandardMaterial | undefined
      if (m && 'emissive' in m) m.emissive.setHex(hex)
    }
    set(this.highlighted, 0x000000)
    this.highlighted = id
    set(id, 0x223044)
  }

  setBeltFade(): void {}
  setBeltCount(): void {}
  setBeltVisible(): void {}
  ensureFamilyTextures(): void {}

  dispose(): void {
    disposeObject(this.group)
    this.group.clear()
  }
}
