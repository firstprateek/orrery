import * as THREE from 'three'
import { BODIES, type BodyDef } from '../config/bodies'
import { kmToAu, DEG2RAD } from '../config/constants'
import { bodyRotationAngle } from '../math/rotation'
import { makeBelt } from '../math/belt'
import { MAX_BELT } from './quality'
import { ATMOSPHERES, createAtmosphere } from './Atmosphere'
import { createEarthMaterial, createClouds } from './EarthMaterial'
import type { ScaleMapping } from './scaleMapping'
import type { Vec3 } from '../math/vec3'

// One sphere geometry shared by every body (scaled per-body) keeps the draw-call
// budget tiny. Spin axis is local +Y; obliquity tilts the whole group.
const SHARED_SPHERE = new THREE.SphereGeometry(1, 64, 32)
const TEXTURE_BASE = `${import.meta.env.BASE_URL}textures/`

// Representative asteroid-belt orbital period (days) — the belt revolves slowly
// with the clock like everything else (it's artistic, not per-rock Keplerian).
const BELT_PERIOD_DAYS = 1600

export interface BodyView {
  def: BodyDef
  group: THREE.Group
  mesh: THREE.Mesh
  ring?: THREE.Mesh
  atmosphere?: THREE.Mesh
  atmoFactor?: number
  clouds?: THREE.Mesh
  /** World direction from the body toward the Sun (custom-shader bodies). */
  sunDir?: { value: THREE.Vector3 }
  /** Shared uniforms for the analytic ring↔planet shadows (ringed bodies). */
  ringShadow?: {
    uSunDir: { value: THREE.Vector3 }
    uCenter: { value: THREE.Vector3 }
    uPlanetR: { value: number }
    uInnerW: { value: number }
    uOuterW: { value: number }
  }
}

export class SolarSystem {
  readonly group = new THREE.Group()
  readonly views: BodyView[] = []
  readonly byId: Record<string, BodyView> = {}
  readonly sunLight: THREE.PointLight
  readonly belt: THREE.InstancedMesh
  private highlighted: string | null = null

  constructor(
    loader: THREE.TextureLoader,
    private readonly trueScale: ScaleMapping,
    private readonly visualScale: ScaleMapping,
    maxAnisotropy = 8,
  ) {
    for (const def of BODIES) {
      const group = new THREE.Group()
      // World frame is ecliptic-J2000 with Z = ecliptic north; the sphere's spin
      // pole is local +Y. Rx(π/2) stands the pole up to world +Z, and adding the
      // obliquity tilts it away from ecliptic north by the correct angle (the
      // in-plane azimuth of the tilt is a shared approximation; per-body IAU
      // pole azimuths are a future refinement).
      group.rotation.x = Math.PI / 2 + def.axialTiltDeg * DEG2RAD

      let mesh: THREE.Mesh
      const view: BodyView = { def, group, mesh: undefined as unknown as THREE.Mesh }
      if (def.id === 'earth') {
        // Earth gets the cinematic treatment: night-side city lights + clouds.
        const rig = createEarthMaterial(loader, TEXTURE_BASE, def.color, maxAnisotropy)
        mesh = new THREE.Mesh(SHARED_SPHERE, rig.material)
        view.sunDir = rig.uSunDir
        view.clouds = createClouds(loader, TEXTURE_BASE, SHARED_SPHERE)
        group.add(view.clouds)
      } else {
        mesh = new THREE.Mesh(SHARED_SPHERE, this.makeMaterial(def, loader, maxAnisotropy))
      }
      view.mesh = mesh
      group.add(mesh)
      if (def.ringInnerKm && def.ringOuterKm && def.ringTexture) {
        view.ring = this.makeRing(def, loader)
        group.add(view.ring)
        this.wireRingShadows(view)
      }
      const atmo = ATMOSPHERES[def.id]
      if (atmo) {
        view.atmosphere = createAtmosphere(atmo)
        view.atmoFactor = atmo.factor
        group.add(view.atmosphere)
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

    this.belt = this.buildBelt()
    this.group.add(this.belt)
  }

  private buildBelt(): THREE.InstancedMesh {
    const instances = makeBelt({ count: MAX_BELT })
    const geo = new THREE.IcosahedronGeometry(1, 0)
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, metalness: 0, flatShading: true })
    const mesh = new THREE.InstancedMesh(geo, mat, instances.length)
    const m = new THREE.Matrix4()
    const p = new THREE.Vector3()
    const q = new THREE.Quaternion()
    const e = new THREE.Euler()
    const s = new THREE.Vector3()
    const c = new THREE.Color()
    instances.forEach((it, i) => {
      p.set(it.x, it.y, it.z)
      e.set(it.rotX, it.rotY, 0)
      q.setFromEuler(e)
      s.setScalar(it.scale)
      m.compose(p, q, s)
      mesh.setMatrixAt(i, m)
      c.setRGB(it.tint * 0.55, it.tint * 0.5, it.tint * 0.44)
      mesh.setColorAt(i, c)
    })
    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
    mesh.frustumCulled = false
    return mesh
  }

  private makeMaterial(def: BodyDef, loader: THREE.TextureLoader, maxAnisotropy: number): THREE.Material {
    // Textured bodies hold their natural tint until the map streams in (a full-
    // screen flat WHITE Earth on first paint reads as broken); onLoad flips the
    // multiplier to white so the texture shows true colors.
    const material: THREE.MeshBasicMaterial | THREE.MeshStandardMaterial =
      def.type === 'star'
        ? // Unlit; setSunBoost() pushes it into HDR only when bloom is active.
          new THREE.MeshBasicMaterial({ color: def.color, toneMapped: true })
        : new THREE.MeshStandardMaterial({ color: def.color, metalness: 0, roughness: 0.92 })
    if (def.texture) {
      const tex = loader.load(`${TEXTURE_BASE}${def.texture}`, () => {
        // Attach the map only once loaded — binding an empty texture renders black.
        material.map = tex
        // Grayscale mosaics (Titan's near-IR, Phobos' Viking) keep the body tint.
        if (def.type !== 'star' && !def.tintTexture) material.color.setRGB(1, 1, 1)
        // The Sun's color is owned by setSunBoost(); only clear the placeholder tint.
        else if (def.type === 'star' && material.color.getHex() === def.color) material.color.setRGB(1, 1, 1)
        material.needsUpdate = true
      })
      tex.colorSpace = THREE.SRGBColorSpace
      tex.anisotropy = Math.min(8, maxAnisotropy)
    }
    return material
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

  /**
   * Analytic mutual shadows for a ringed body, mirrored from math/ringShadow.ts
   * (which pins the conventions with tests): the planet's shadow cylinder
   * darkens the ring, and a sun-ray/ring-plane hit darkens the surface by the
   * ring's alpha. Injected into the existing built-in materials so the
   * logarithmic depth buffer keeps working untouched. Uniforms are shared and
   * updated per frame in place().
   */
  private wireRingShadows(view: BodyView): void {
    const ringShadow = {
      uSunDir: { value: new THREE.Vector3(1, 0, 0) },
      uCenter: { value: new THREE.Vector3() },
      uPlanetR: { value: 1 },
      uInnerW: { value: 1 },
      uOuterW: { value: 2 },
    }
    view.ringShadow = ringShadow

    const ringMat = view.ring!.material as THREE.MeshBasicMaterial
    const ringTex = ringMat.map as THREE.Texture

    const addWorldPos = (shader: THREE.WebGLProgramParametersWithUniforms) => {
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vOrrWPos;')
        .replace(
          '#include <begin_vertex>',
          '#include <begin_vertex>\n  vOrrWPos = (modelMatrix * vec4(position, 1.0)).xyz;',
        )
    }

    // Ring: darkened inside the planet's shadow cylinder (anti-sun side).
    ringMat.onBeforeCompile = (shader) => {
      shader.uniforms.uSunDir = ringShadow.uSunDir
      shader.uniforms.uCenter = ringShadow.uCenter
      shader.uniforms.uPlanetR = ringShadow.uPlanetR
      addWorldPos(shader)
      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          '#include <common>\nuniform vec3 uSunDir;\nuniform vec3 uCenter;\nuniform float uPlanetR;\nvarying vec3 vOrrWPos;',
        )
        .replace(
          '#include <alphamap_fragment>',
          `#include <alphamap_fragment>
          {
            vec3 toFrag = vOrrWPos - uCenter;
            float along = dot(toFrag, uSunDir);
            vec3 perp = toFrag - along * uSunDir;
            if (along < 0.0 && dot(perp, perp) < uPlanetR * uPlanetR) diffuseColor.rgb *= 0.15;
          }`,
        )
    }

    // Surface: sun-ray vs ring-plane hit samples the ring alpha as a shadow.
    // The ring plane passes through the centre with the body's pole as normal
    // (constant: the group's orientation never changes after construction).
    const pole = new THREE.Vector3(0, 1, 0).applyEuler(view.group.rotation)
    const surfMat = view.mesh.material as THREE.MeshStandardMaterial
    surfMat.onBeforeCompile = (shader) => {
      shader.uniforms.uSunDirS = ringShadow.uSunDir
      shader.uniforms.uCenterS = ringShadow.uCenter
      shader.uniforms.uInnerW = ringShadow.uInnerW
      shader.uniforms.uOuterW = ringShadow.uOuterW
      shader.uniforms.uPoleS = { value: pole }
      shader.uniforms.uRingTex = { value: ringTex }
      addWorldPos(shader)
      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          '#include <common>\nuniform vec3 uSunDirS;\nuniform vec3 uCenterS;\nuniform vec3 uPoleS;\nuniform float uInnerW;\nuniform float uOuterW;\nuniform sampler2D uRingTex;\nvarying vec3 vOrrWPos;',
        )
        .replace(
          '#include <map_fragment>',
          `#include <map_fragment>
          {
            float denomR = dot(uSunDirS, uPoleS);
            if (abs(denomR) > 1e-6) {
              float tR = dot(uCenterS - vOrrWPos, uPoleS) / denomR;
              if (tR > 0.0) {
                vec3 hitR = vOrrWPos + tR * uSunDirS - uCenterS;
                float radR = length(hitR);
                if (radR > uInnerW && radR < uOuterW) {
                  float aR = texture2D(uRingTex, vec2((radR - uInnerW) / (uOuterW - uInnerW), 0.5)).a;
                  diffuseColor.rgb *= 1.0 - aR * 0.85;
                }
              }
            }
          }`,
        )
    }
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
      if (view.atmosphere) {
        view.atmosphere.scale.setScalar(r * (view.atmoFactor as number))
        ;(view.atmosphere.material as THREE.ShaderMaterial).uniforms.uSunPos.value.copy(this.byId['sun'].group.position)
      }
      if (view.clouds) view.clouds.scale.setScalar(r * 1.006)
      if (view.sunDir) {
        // Sun is BODIES[0], so its group position is already updated this frame.
        view.sunDir.value.copy(this.byId['sun'].group.position).sub(view.group.position).normalize()
      }
      if (view.ringShadow) {
        const rs = view.ringShadow
        rs.uSunDir.value.copy(this.byId['sun'].group.position).sub(view.group.position).normalize()
        rs.uCenter.value.copy(view.group.position)
        rs.uPlanetR.value = r
        const ringScale = r / this.trueScale.radius(kmToAu(view.def.radiusKm))
        rs.uInnerW.value = kmToAu(view.def.ringInnerKm!) * ringScale
        rs.uOuterW.value = kmToAu(view.def.ringOuterKm!) * ringScale
      }
    }

    this.sunLight.position.copy(this.byId['sun'].group.position)

    // Belt rocks are at true heliocentric AU; offset by -focus for the floating
    // origin (true scale only — hidden in the compressed visual overview).
    this.belt.visible = blend < 0.5
    this.belt.position.set(-focusAu.x, -focusAu.y, -focusAu.z)
  }

  /** HDR-boost the Sun when a bloom pipeline is active; plain texture otherwise. */
  setSunBoost(bloomActive: boolean): void {
    const m = this.byId['sun'].mesh.material as THREE.MeshBasicMaterial
    if (bloomActive) m.color.setRGB(2.6, 2.45, 2.2)
    else m.color.setRGB(1, 1, 1)
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

  /** Set axial rotation from the sim clock using real sidereal periods (so spin
   * speed tracks the time controls). The belt revolves slowly with the clock too. */
  rotate(jd: number): void {
    for (const view of this.views) {
      view.mesh.rotation.y = bodyRotationAngle(jd, view.def.rotationPeriodHours, view.def.meridianDeg)
      // Clouds drift ~8% slower than the surface so weather visibly moves.
      if (view.clouds) view.clouds.rotation.y = bodyRotationAngle(jd, view.def.rotationPeriodHours * 1.08)
    }
    this.belt.rotation.z = bodyRotationAngle(jd, BELT_PERIOD_DAYS * 24)
  }
}
