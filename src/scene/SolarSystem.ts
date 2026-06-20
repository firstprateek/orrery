import * as THREE from 'three'
import { BODIES, type BodyDef } from '../config/bodies'
import { kmToAu, DEG2RAD } from '../config/constants'
import type { ScaleMapping } from './scaleMapping'
import type { Vec3 } from '../math/vec3'

// One sphere geometry shared by every body (scaled per-body) keeps the draw-call
// budget tiny. Spin axis is local +Y; obliquity tilts the whole group.
const SHARED_SPHERE = new THREE.SphereGeometry(1, 64, 32)
const TEXTURE_BASE = `${import.meta.env.BASE_URL}textures/`

// Visual spin factor: makes axial rotation perceptible (Earth ~ one turn / 8s)
// while preserving real period ratios and retrograde sign.
const SPIN_VIS = (2 * Math.PI) / 8 * 23.9345

export interface BodyView {
  def: BodyDef
  group: THREE.Group
  mesh: THREE.Mesh
  ring?: THREE.Mesh
}

export class SolarSystem {
  readonly group = new THREE.Group()
  readonly views: BodyView[] = []
  readonly byId: Record<string, BodyView> = {}
  readonly sunLight: THREE.PointLight
  private highlighted: string | null = null

  constructor(
    loader: THREE.TextureLoader,
    private readonly trueScale: ScaleMapping,
    private readonly visualScale: ScaleMapping,
    maxAnisotropy = 8,
  ) {
    for (const def of BODIES) {
      const group = new THREE.Group()
      group.rotation.z = def.axialTiltDeg * DEG2RAD

      const mesh = new THREE.Mesh(SHARED_SPHERE, this.makeMaterial(def, loader, maxAnisotropy))
      group.add(mesh)

      const view: BodyView = { def, group, mesh }
      if (def.ringInnerKm && def.ringOuterKm && def.ringTexture) {
        view.ring = this.makeRing(def, loader)
        group.add(view.ring)
      }

      this.group.add(group)
      this.views.push(view)
      this.byId[def.id] = view
    }

    // Visualization lighting: decay 0 so every body is well-lit wherever you fly,
    // plus a faint ambient fill so night sides aren't pure black.
    this.sunLight = new THREE.PointLight(0xfff4ea, 2.6, 0, 0)
    this.group.add(this.sunLight)
    this.group.add(new THREE.AmbientLight(0xffffff, 0.04))
  }

  private makeMaterial(def: BodyDef, loader: THREE.TextureLoader, maxAnisotropy: number): THREE.Material {
    const map = def.texture ? this.loadTexture(def.texture, loader, maxAnisotropy) : null
    if (def.type === 'star') {
      // Sun is unlit/bright (HDR bloom comes in M4).
      return new THREE.MeshBasicMaterial({ map: map ?? undefined, color: map ? 0xffffff : def.color, toneMapped: false })
    }
    return new THREE.MeshStandardMaterial({
      map: map ?? undefined,
      color: map ? 0xffffff : def.color,
      metalness: 0,
      roughness: 0.92,
    })
  }

  private loadTexture(file: string, loader: THREE.TextureLoader, maxAnisotropy: number): THREE.Texture {
    const tex = loader.load(`${TEXTURE_BASE}${file}`)
    tex.colorSpace = THREE.SRGBColorSpace
    tex.anisotropy = Math.min(8, maxAnisotropy)
    return tex
  }

  private makeRing(def: BodyDef, loader: THREE.TextureLoader): THREE.Mesh {
    const inner = kmToAu(def.ringInnerKm!)
    const outer = kmToAu(def.ringOuterKm!)
    const geo = new THREE.RingGeometry(inner, outer, 128, 1)
    // RingGeometry UVs are 0..1 across the quad; remap so the radial texture
    // strip (1px tall) samples across the ring radius.
    const pos = geo.attributes.position
    const uv = geo.attributes.uv
    const v = new THREE.Vector3()
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i)
      const r = (v.length() - inner) / (outer - inner)
      uv.setXY(i, r, 0.5)
    }
    uv.needsUpdate = true

    const tex = loader.load(`${TEXTURE_BASE}${def.ringTexture}`)
    tex.colorSpace = THREE.SRGBColorSpace
    const mat = new THREE.MeshBasicMaterial({
      map: tex, alphaMap: tex, transparent: true, side: THREE.DoubleSide, depthWrite: false,
    })
    const ring = new THREE.Mesh(geo, mat)
    ring.rotation.x = -Math.PI / 2 // lie in the planet's equatorial (group XZ) plane
    ring.renderOrder = 1
    return ring
  }

  /** Blended render radius (AU→units) of a body at scale blend (0=true, 1=visual). */
  renderRadius(def: BodyDef, blend: number): number {
    const auR = kmToAu(def.radiusKm)
    const tr = this.trueScale.radius(auR)
    return blend <= 0 ? tr : tr + (this.visualScale.radius(auR) - tr) * blend
  }

  /**
   * Reposition and resize every body for the floating origin and scale blend.
   * blend 0 = true scale (linear, focus-relative); blend 1 = visual ("poster").
   * Visual positions are centred on the same glide point so the focused body
   * stays at the origin through a scale transition. Moons collapse onto their
   * planet in visual mode (the overview hides them; true scale shows them).
   */
  place(positions: Record<string, Vec3>, focusAu: Vec3, blend: number): void {
    const vf = blend > 0 ? this.visualScale.position(focusAu) : null

    for (const view of this.views) {
      const p = positions[view.def.id]
      const tx = p.x - focusAu.x
      const ty = p.y - focusAu.y
      const tz = p.z - focusAu.z

      if (vf) {
        const v = this.visualScale.position(p)
        const k = blend
        view.group.position.set(
          tx + (v.x - vf.x - tx) * k,
          ty + (v.y - vf.y - ty) * k,
          tz + (v.z - vf.z - tz) * k,
        )
      } else {
        view.group.position.set(tx, ty, tz)
      }

      const r = this.renderRadius(view.def, blend)
      view.mesh.scale.setScalar(r)
      if (view.ring) view.ring.scale.setScalar(r / this.trueScale.radius(kmToAu(view.def.radiusKm)))
    }

    this.sunLight.position.copy(this.byId['sun'].group.position)
  }

  /** Highlight a body (hover/selection) with a faint emissive boost. */
  setHighlight(id: string | null): void {
    if (id === this.highlighted) return
    const clear = (bodyId: string | null) => {
      if (!bodyId) return
      const m = this.byId[bodyId].mesh.material as THREE.MeshStandardMaterial
      if ('emissive' in m) m.emissive.setHex(0x000000)
    }
    clear(this.highlighted)
    this.highlighted = id
    if (id) {
      const m = this.byId[id].mesh.material as THREE.MeshStandardMaterial
      if ('emissive' in m) m.emissive.setHex(0x223044)
    }
  }

  /** Spin every body on its axis for visual life (decoupled from sim time in M1). */
  spin(dtSeconds: number): void {
    for (const view of this.views) {
      view.mesh.rotation.y += (SPIN_VIS / view.def.rotationPeriodHours) * dtSeconds
    }
  }
}
