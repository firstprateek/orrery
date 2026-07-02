import * as THREE from 'three'
import { BODIES, BODY_BY_ID, type BodyDef } from './config/bodies'
import { AU_KM, jdToDate, unixMsToJd } from './config/constants'
import { computePositions } from './sim/ephemeris'
import { SimClock } from './sim/time'
import { makeTrueScale, makeVisualScale } from './scene/scaleMapping'
import { createRenderer } from './scene/Renderer'
import { createComposer, supportsHdrComposer } from './scene/Composer'
import { QUALITY, QUALITY_ORDER, resolveTier, type QualityTier } from './scene/quality'
import { CameraRig } from './scene/CameraRig'
import { SolarSystem } from './scene/SolarSystem'
import { createSky } from './scene/Sky'
import { createStarField } from './scene/StarField'
import { FocusController } from './scene/FocusController'
import { pickBody } from './scene/Picker'
import { smoothDamp } from './math/smoothDamp'
import { Labels } from './ui/Labels'
import { TimeBar } from './ui/TimeBar'
import { readObjParam, readDateParam, writeState } from './ui/urlState'

const app = document.getElementById('app')
if (!app) throw new Error('#app container not found')

const renderer = createRenderer()
renderer.domElement.style.cursor = 'grab'
app.appendChild(renderer.domElement)

// GPU diagnostics — used to warn on (and auto-downgrade for) software rendering.
const gl0 = renderer.getContext()
const dbg = gl0.getExtension('WEBGL_debug_renderer_info')
const gpuName = dbg ? String(gl0.getParameter(dbg.UNMASKED_RENDERER_WEBGL)) : 'unknown GPU'
const softwareRendering = /swiftshader|llvmpipe|software|basic render|microsoft basic/i.test(gpuName)

// Quality tier (persisted): drives DPR, the post pipeline, bloom resolution,
// belt density. Software rendering is forced to the lightest tier. Storage can
// throw (blocked cookies/private mode) — never let that kill the app.
function readStoredQuality(): string | null {
  try {
    return localStorage.getItem('orrery-quality')
  } catch {
    return null
  }
}
let quality = QUALITY[resolveTier(readStoredQuality())]
if (softwareRendering) quality = QUALITY.performance
renderer.setPixelRatio(Math.min(window.devicePixelRatio, quality.dpr))

const scene = new THREE.Scene()
const rig = new CameraRig(renderer.domElement, window.innerWidth / window.innerHeight)
const trueScale = makeTrueScale()
const visualScale = makeVisualScale()
const loader = new THREE.TextureLoader()

const solar = new SolarSystem(loader, trueScale, visualScale, renderer.capabilities.getMaxAnisotropy())
scene.add(solar.group)
solar.belt.count = quality.beltCount
const sky = createSky(loader)
scene.add(sky)

let starField: THREE.Points | null = null
createStarField(import.meta.env.BASE_URL, renderer.getPixelRatio())
  .then((sf) => {
    starField = sf
    scene.add(sf)
  })
  .catch((err) => console.warn('star field unavailable:', err))

// The HDR composer needs float-renderable targets; without the extension, fall
// back to the direct path rather than rendering black (or crawling).
const hdrOk = supportsHdrComposer(renderer)
let composer = quality.post && hdrOk ? createComposer(renderer, scene, rig.camera, quality) : null
solar.setSunBoost(composer !== null)

function draw(): void {
  if (composer) composer.render()
  else renderer.render(scene, rig.camera)
}

const clock = new SimClock()
// A shared ?date= link opens PAUSED at that exact moment (otherwise playback +
// the URL sync would drift and drop the date within seconds). Strict ISO parse
// so every engine reads the same instant. No date → gentle motion on load.
const dateParam = readDateParam()
let dateLinked = false
if (dateParam && /^\d{4}-\d{2}-\d{2}(T[\d:.]+Z?)?$/.test(dateParam)) {
  const ms = Date.parse(dateParam)
  if (!Number.isNaN(ms)) {
    clock.jd = clock.clamp(unixMsToJd(ms))
    dateLinked = true
  }
}
clock.playing = !dateLinked

let positions = computePositions(clock.jd)

const requested = readObjParam()
const startId = requested && BODY_BY_ID[requested] ? requested : 'earth'
const focus = new FocusController(startId, positions)

// --- scale blend (0 = realistic/true, 1 = visual/poster) ---
let blend = 0
let targetBlend = 0
const blendVel = { value: 0 }
let prevFr = 0

// --- UI ---
const ui = document.createElement('div')
ui.style.cssText = 'position:fixed;top:14px;left:14px;display:flex;gap:10px;align-items:center;z-index:10'
const selectEl = document.createElement('select')
selectEl.setAttribute('aria-label', 'Fly to a body')
selectEl.style.cssText = 'background:#11131c;color:#cdd6ff;border:1px solid #2a2f44;border-radius:8px;padding:6px 10px;font:13px system-ui'
for (const b of BODIES) {
  const o = document.createElement('option')
  o.value = b.id
  o.textContent = b.name
  selectEl.appendChild(o)
}
ui.appendChild(selectEl)

const scaleBtn = document.createElement('button')
scaleBtn.style.cssText = 'background:#171a26;color:#cdd6ff;border:1px solid #2a2f44;border-radius:8px;padding:6px 10px;font:13px system-ui;cursor:pointer'
scaleBtn.textContent = 'Scale: realistic'
scaleBtn.addEventListener('click', () => {
  targetBlend = targetBlend > 0.5 ? 0 : 1
  scaleBtn.textContent = targetBlend > 0.5 ? 'Scale: visual' : 'Scale: realistic'
})
ui.appendChild(scaleBtn)

const qualitySel = document.createElement('select')
qualitySel.setAttribute('aria-label', 'Graphics quality')
qualitySel.style.cssText = selectEl.style.cssText
for (const t of QUALITY_ORDER) {
  const o = document.createElement('option')
  o.value = t
  o.textContent = QUALITY[t].label
  qualitySel.appendChild(o)
}
qualitySel.value = quality.tier
qualitySel.addEventListener('change', () => applyQuality(qualitySel.value as QualityTier))
ui.appendChild(qualitySel)
document.body.appendChild(ui)

function applyQuality(tier: QualityTier): void {
  quality = QUALITY[tier]
  try {
    localStorage.setItem('orrery-quality', tier)
  } catch {
    // private mode / storage unavailable — fine, just won't persist
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, quality.dpr))
  renderer.setSize(window.innerWidth, window.innerHeight)
  if (composer) {
    composer.dispose()
    composer = null
  }
  if (quality.post && hdrOk) {
    composer = createComposer(renderer, scene, rig.camera, quality)
    composer.setSize(window.innerWidth, window.innerHeight)
  }
  solar.setSunBoost(composer !== null)
  solar.belt.count = quality.beltCount
  // Star point sizes are in device pixels — keep them in sync with the new DPR.
  if (starField) {
    ;(starField.material as THREE.ShaderMaterial).uniforms.uPixelRatio.value = renderer.getPixelRatio()
  }
  if (qualitySel.value !== tier) qualitySel.value = tier
}

const hud = document.createElement('div')
hud.style.cssText = 'position:fixed;left:14px;bottom:60px;color:#aab3d0;font:12px/1.6 ui-monospace,monospace;text-shadow:0 1px 2px #000;pointer-events:none;z-index:10'
document.body.appendChild(hud)

const factEl = document.createElement('div')
factEl.style.cssText = 'position:fixed;right:14px;bottom:14px;max-width:300px;color:#cdd6ff;font:13px/1.5 system-ui;text-align:right;text-shadow:0 1px 3px #000;pointer-events:none;z-index:10'
document.body.appendChild(factEl)

if (softwareRendering) {
  const warn = document.createElement('div')
  warn.textContent =
    '⚠ Software rendering detected (no GPU acceleration). Enable hardware acceleration in your browser for smooth performance.'
  warn.style.cssText =
    'position:fixed;top:58px;left:14px;max-width:380px;background:#3a1a1a;color:#ffd9d9;border:1px solid #6a2a2a;border-radius:8px;padding:8px 12px;font:12px/1.4 system-ui;z-index:20'
  document.body.appendChild(warn)
}

const labels = new Labels(solar)

// --- focus / framing ---
let fps = 0
let msEma = 16
let hoveredId: string | null = null

function kindOf(def: BodyDef): 'sun' | 'planet' | 'moon' | 'small' {
  if (def.type === 'star') return 'sun'
  if (def.type === 'moon') return def.radiusKm < 100 ? 'small' : 'moon'
  return 'planet'
}

const jdToIso = () => jdToDate(clock.jd).toISOString()
function syncUrl(): void {
  writeState(focus.targetId, clock.playing ? null : jdToIso())
}

function updateFact(): void {
  const def = BODY_BY_ID[focus.targetId]
  factEl.innerHTML = `<b style="font-size:15px">${def.name}</b><br>${def.facts}`
}

function updateStats(): void {
  const def = BODY_BY_ID[focus.targetId]
  const distKm = rig.distance * AU_KM
  const dist = distKm > 1e6 ? `${rig.distance.toFixed(2)} AU` : `${distKm.toFixed(0)} km`
  hud.textContent = `${def.name} · ${dist} · ${msEma.toFixed(1)} ms (${fps.toFixed(0)} fps) · ${gpuName}`
}

function flyTo(id: string, instant = false): void {
  focus.setTarget(id)
  if (instant) focus.snap(positions)
  const def = BODY_BY_ID[id]
  const a = positions[id]
  const len = Math.hypot(a.x, a.y, a.z)
  const dir =
    len < 1e-9 ? { x: 1, y: 0, z: 0.5 } : { x: -a.x / len, y: -a.y / len, z: -a.z / len + 0.5 }
  const r = solar.renderRadius(def, blend)
  rig.frameFrom(r, kindOf(def), dir, !instant)
  prevFr = r
  if (selectEl.value !== id) selectEl.value = id
  syncUrl()
  updateFact()
  updateStats()
}

selectEl.addEventListener('change', () => flyTo(selectEl.value))

window.addEventListener('keydown', (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey) return
  if ((e.target as HTMLElement | null)?.matches?.('input, select, textarea')) return
  if (e.key === '[' || e.key === ']') {
    const i = BODIES.findIndex((b) => b.id === focus.targetId)
    const n = (i + (e.key === ']' ? 1 : BODIES.length - 1)) % BODIES.length
    flyTo(BODIES[n].id)
  }
})

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  if (composer) composer.setSize(window.innerWidth, window.innerHeight)
  rig.resize(window.innerWidth / window.innerHeight)
})

document.addEventListener('visibilitychange', () => {
  renderer.setAnimationLoop(document.hidden ? null : loop)
})

// --- pointer: click-to-fly + hover ---
const hoverNdc = new THREE.Vector2()
let hoverPending = false
let downX = 0
let downY = 0
let downT = 0
let moved = false
let activePointer: number | null = null
let touchGesture = false
const el = renderer.domElement
const toNdc = (cx: number, cy: number, out: THREE.Vector2) =>
  out.set((cx / window.innerWidth) * 2 - 1, -(cy / window.innerHeight) * 2 + 1)

el.addEventListener('pointerdown', (e) => {
  // Only a primary left/touch pointer starts a click gesture; a second finger
  // (pinch) or another button aborts it so it can't fire an accidental fly-to.
  if (activePointer !== null || e.button !== 0 || !e.isPrimary) {
    moved = true
    return
  }
  activePointer = e.pointerId
  touchGesture = e.pointerType === 'touch'
  downX = e.clientX
  downY = e.clientY
  downT = performance.now()
  moved = false
})
el.addEventListener('pointermove', (e) => {
  const slop = e.pointerType === 'touch' ? 12 : 6
  if (e.pointerId === activePointer && Math.hypot(e.clientX - downX, e.clientY - downY) > slop) moved = true
  // Hover affordances are meaningless mid-drag and on touch.
  if (e.pointerType !== 'touch') {
    toNdc(e.clientX, e.clientY, hoverNdc)
    hoverPending = true
  }
})
el.addEventListener('pointerup', (e) => {
  if (e.pointerId !== activePointer) return
  activePointer = null
  if (!moved && performance.now() - downT < 350) {
    toNdc(e.clientX, e.clientY, hoverNdc)
    // Fingers need a bigger target than a mouse cursor.
    const id = pickBody(hoverNdc, rig.camera, solar, window.innerHeight, touchGesture ? 22 : 8)
    if (id) flyTo(id)
  }
})
el.addEventListener('pointercancel', () => {
  activePointer = null
  moved = true
})
el.addEventListener('pointerleave', () => {
  hoverPending = false
  hoveredId = null
  solar.setHighlight(null)
  el.style.cursor = 'grab'
})

const timeBar = new TimeBar(clock, syncUrl)

flyTo(startId, true)

// --- loop ---
const timer = new THREE.Timer()
let frame = 0

function tick(dtOverride?: number): void {
  let dt: number
  if (dtOverride !== undefined) {
    dt = dtOverride
  } else {
    timer.update()
    dt = timer.getDelta()
  }
  if (dt > 0.1) dt = 0.1 // clamp tab-switch gaps so the clock/springs/stats don't lurch

  clock.advance(dt)
  positions = computePositions(clock.jd, positions)
  const focusAu = focus.update(positions, dt)

  blend = smoothDamp(blend, targetBlend, blendVel, 0.5, dt)
  if (Math.abs(blend - targetBlend) < 5e-4) {
    blend = targetBlend
    blendVel.value = 0
  }

  solar.place(positions, focusAu, blend)
  solar.rotate(clock.jd)

  // Keep the focused body framed as its render radius changes during a scale blend.
  const fr = solar.renderRadius(BODY_BY_ID[focus.targetId], blend)
  if (fr !== prevFr) {
    if (prevFr > 0) rig.scaleDistance(fr / prevFr)
    rig.setClip(fr)
    // The zoom floor must track the blended radius too, or after a scale toggle
    // you can dolly inside the surface (or get locked far out).
    rig.controls.minDistance = fr * 1.02
    prevFr = fr
  }

  if (hoverPending) {
    const id = pickBody(hoverNdc, rig.camera, solar, window.innerHeight)
    if (id !== hoveredId) {
      hoveredId = id
      solar.setHighlight(id)
      el.style.cursor = id ? 'pointer' : 'grab'
    }
    hoverPending = false
  }

  rig.update(dt)
  sky.position.copy(rig.camera.position)
  if (starField) starField.position.copy(rig.camera.position)

  if (frame % 2 === 0) {
    labels.update(solar, rig.camera, window.innerWidth, window.innerHeight, focus.targetId, hoveredId)
  }

  msEma += (dt * 1000 - msEma) * 0.1
  fps = 1000 / msEma
  updateStats()
  if (++frame % 12 === 0) timeBar.refresh()

  draw()
}

// setAnimationLoop passes the rAF timestamp as the first argument — never hand it
// tick() directly or it would be misread as a dt override.
const loop = (): void => tick()
renderer.setAnimationLoop(loop)

if (import.meta.env.DEV) {
  ;(window as unknown as { __orrery: unknown }).__orrery = {
    rig,
    solar,
    focus,
    clock,
    renderer,
    scene,
    tick,
    flyTo,
    toggleScale: () => {
      targetBlend = targetBlend > 0.5 ? 0 : 1
    },
    dollyTo: (d: number) => void rig.controls.dollyTo(d, false),
    renderNow: () => {
      rig.update(0.1)
      draw()
    },
    gpu: gpuName,
    softwareRendering,
    // GPU-synced perf probe: readPixels forces the GPU to finish, so timing
    // captures real GPU cost even in a throttled tab. Toggles each component.
    perf: (n = 20) => {
      const gl = renderer.getContext()
      const px = new Uint8Array(4)
      const sync = () => gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px)
      const stars = scene.children.find((c) => c instanceof THREE.Points) as THREE.Points | undefined
      const measure = (label: string, setup: () => void, restore: () => void) => {
        setup()
        draw()
        sync()
        const t0 = performance.now()
        for (let i = 0; i < n; i++) draw()
        sync()
        const ms = (performance.now() - t0) / n
        restore()
        return { label, ms: +ms.toFixed(2), fps: Math.round(1000 / ms) }
      }
      const noop = () => {}
      const r: unknown[] = []
      r.push(measure('all', noop, noop))
      if (composer) {
        const c = composer
        r.push(measure('bloom-off', () => (c.bloom.enabled = false), () => (c.bloom.enabled = true)))
      }
      r.push(measure('belt-off', () => (solar.belt.visible = false), () => (solar.belt.visible = true)))
      r.push(measure('sky-off', () => (sky.visible = false), () => (sky.visible = true)))
      if (stars) r.push(measure('stars-off', () => (stars.visible = false), () => (stars.visible = true)))
      r.push(measure('bodies-off', () => (solar.group.visible = false), () => (solar.group.visible = true)))
      return {
        gpu: gpuName,
        post: !!composer,
        dpr: renderer.getPixelRatio(),
        canvas: [renderer.domElement.width, renderer.domElement.height],
        results: r,
      }
    },
    get blend() {
      return blend
    },
  }
}
