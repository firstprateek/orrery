import * as THREE from 'three'
import { BODIES, BODY_BY_ID, type BodyDef } from './config/bodies'
import { AU_KM, jdToDate, unixMsToJd } from './config/constants'
import { computePositions } from './sim/ephemeris'
import { SimClock } from './sim/time'
import { makeTrueScale, makeVisualScale } from './scene/scaleMapping'
import { createRenderer } from './scene/Renderer'
import { createComposer } from './scene/Composer'
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

const scene = new THREE.Scene()
const rig = new CameraRig(renderer.domElement, window.innerWidth / window.innerHeight)
const trueScale = makeTrueScale()
const visualScale = makeVisualScale()
const loader = new THREE.TextureLoader()

const solar = new SolarSystem(loader, trueScale, visualScale, renderer.capabilities.getMaxAnisotropy())
scene.add(solar.group)
const sky = createSky(loader)
scene.add(sky)

let starField: THREE.Points | null = null
createStarField(import.meta.env.BASE_URL).then((sf) => {
  starField = sf
  scene.add(sf)
})

const composer = createComposer(renderer, scene, rig.camera)

const clock = new SimClock()
const dateParam = readDateParam()
if (dateParam) {
  const ms = Date.parse(dateParam)
  if (!Number.isNaN(ms)) clock.jd = unixMsToJd(ms)
}
clock.playing = true // gentle orbital motion on load

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
document.body.appendChild(ui)

const hud = document.createElement('div')
hud.style.cssText = 'position:fixed;left:14px;bottom:60px;color:#aab3d0;font:12px/1.6 ui-monospace,monospace;text-shadow:0 1px 2px #000;pointer-events:none;z-index:10'
document.body.appendChild(hud)

const factEl = document.createElement('div')
factEl.style.cssText = 'position:fixed;right:14px;bottom:14px;max-width:300px;color:#cdd6ff;font:13px/1.5 system-ui;text-align:right;text-shadow:0 1px 3px #000;pointer-events:none;z-index:10'
document.body.appendChild(factEl)

const labels = new Labels(solar)

// --- focus / framing ---
let fps = 0
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

function updateHud(): void {
  const def = BODY_BY_ID[focus.targetId]
  const distKm = rig.distance * AU_KM
  const dist = distKm > 1e6 ? `${rig.distance.toFixed(3)} AU` : `${distKm.toFixed(distKm < 100 ? 1 : 0)} km`
  hud.textContent = `focus ${def.name}  ·  cam ${dist}  ·  ${fps.toFixed(0)} fps`
  factEl.innerHTML = `<b style="font-size:15px">${def.name}</b><br>${def.facts}`
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
  updateHud()
}

selectEl.addEventListener('change', () => flyTo(selectEl.value))

window.addEventListener('keydown', (e) => {
  if (e.key === '[' || e.key === ']') {
    const i = BODIES.findIndex((b) => b.id === focus.targetId)
    const n = (i + (e.key === ']' ? 1 : BODIES.length - 1)) % BODIES.length
    flyTo(BODIES[n].id)
  }
})

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  composer.setSize(window.innerWidth, window.innerHeight)
  rig.resize(window.innerWidth / window.innerHeight)
})

document.addEventListener('visibilitychange', () => {
  renderer.setAnimationLoop(document.hidden ? null : tick)
})

// --- pointer: click-to-fly + hover ---
const hoverNdc = new THREE.Vector2()
let hoverPending = false
let downX = 0
let downY = 0
let downT = 0
let moved = false
const el = renderer.domElement
const toNdc = (cx: number, cy: number, out: THREE.Vector2) =>
  out.set((cx / window.innerWidth) * 2 - 1, -(cy / window.innerHeight) * 2 + 1)

el.addEventListener('pointerdown', (e) => {
  downX = e.clientX
  downY = e.clientY
  downT = performance.now()
  moved = false
})
el.addEventListener('pointermove', (e) => {
  if (Math.hypot(e.clientX - downX, e.clientY - downY) > 6) moved = true
  toNdc(e.clientX, e.clientY, hoverNdc)
  hoverPending = true
})
el.addEventListener('pointerup', (e) => {
  if (!moved && performance.now() - downT < 350) {
    toNdc(e.clientX, e.clientY, hoverNdc)
    const id = pickBody(hoverNdc, rig.camera, solar, window.innerHeight)
    if (id) flyTo(id)
  }
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
const fpsSamples = new Float32Array(30)
let fi = 0
let frame = 0

function tick(dtOverride?: number): void {
  let dt: number
  if (dtOverride !== undefined) {
    dt = dtOverride
  } else {
    timer.update()
    dt = timer.getDelta()
  }

  clock.advance(dt)
  positions = computePositions(clock.jd, positions)
  const focusAu = focus.update(positions, dt)

  blend = smoothDamp(blend, targetBlend, blendVel, 0.5, dt)
  if (Math.abs(blend - targetBlend) < 5e-4) {
    blend = targetBlend
    blendVel.value = 0
  }

  solar.place(positions, focusAu, blend)
  solar.spin(dt)

  // Keep the focused body framed as its render radius changes during a scale blend.
  const fr = solar.renderRadius(BODY_BY_ID[focus.targetId], blend)
  if (fr !== prevFr) {
    if (prevFr > 0) rig.scaleDistance(fr / prevFr)
    rig.setClip(fr)
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

  fpsSamples[fi++ % 30] = dt
  if (++frame % 12 === 0) {
    let s = 0
    for (let i = 0; i < 30; i++) s += fpsSamples[i]
    fps = 30 / (s || 1)
    updateHud()
    timeBar.refresh()
  }

  composer.render()
}

renderer.setAnimationLoop(tick)

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
      composer.render()
    },
    get blend() {
      return blend
    },
  }
}
