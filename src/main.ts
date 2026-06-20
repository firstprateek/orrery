import * as THREE from 'three'
import { BODIES, BODY_BY_ID, type BodyDef } from './config/bodies'
import { kmToAu, AU_KM } from './config/constants'
import { computePositions } from './sim/ephemeris'
import { SimClock } from './sim/time'
import { makeTrueScale } from './scene/scaleMapping'
import { createRenderer } from './scene/Renderer'
import { CameraRig } from './scene/CameraRig'
import { SolarSystem } from './scene/SolarSystem'
import { createSky } from './scene/Sky'
import { FocusController } from './scene/FocusController'
import { pickBody } from './scene/Picker'
import { Labels } from './ui/Labels'
import { readObjParam, writeObjParam } from './ui/urlState'

const app = document.getElementById('app')
if (!app) throw new Error('#app container not found')

const renderer = createRenderer()
renderer.domElement.style.cursor = 'grab'
app.appendChild(renderer.domElement)

const scene = new THREE.Scene()
const rig = new CameraRig(renderer.domElement, window.innerWidth / window.innerHeight)
const scale = makeTrueScale()
const loader = new THREE.TextureLoader()

const solar = new SolarSystem(loader, renderer.capabilities.getMaxAnisotropy())
solar.applyScale(scale)
scene.add(solar.group)
const sky = createSky(loader)
scene.add(sky)

const clock = new SimClock()
let positions = computePositions(clock.jd)

const requested = readObjParam()
const startId = requested && BODY_BY_ID[requested] ? requested : 'earth'
const focus = new FocusController(startId, positions)

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
document.body.appendChild(ui)

const hud = document.createElement('div')
hud.style.cssText = 'position:fixed;left:14px;bottom:14px;color:#aab3d0;font:12px/1.6 ui-monospace,monospace;text-shadow:0 1px 2px #000;pointer-events:none;z-index:10'
document.body.appendChild(hud)

const factEl = document.createElement('div')
factEl.style.cssText = 'position:fixed;right:14px;bottom:14px;max-width:320px;color:#cdd6ff;font:13px/1.5 system-ui;text-align:right;text-shadow:0 1px 3px #000;pointer-events:none;z-index:10'
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

function updateHud(): void {
  const def = BODY_BY_ID[focus.targetId]
  const distKm = rig.distance * AU_KM
  const dist = distKm > 1e6 ? `${rig.distance.toFixed(3)} AU` : `${distKm.toFixed(distKm < 100 ? 1 : 0)} km`
  hud.textContent = `focus ${def.name}  ·  cam ${dist}  ·  ${fps.toFixed(0)} fps  ·  ${renderer.info.render.calls} draws`
  factEl.innerHTML = `<b style="font-size:15px">${def.name}</b><br>${def.facts}`
}

function flyTo(id: string, instant = false): void {
  focus.setTarget(id)
  if (instant) focus.snap(positions)
  const def = BODY_BY_ID[id]
  // View from the sunlit side: direction from the body toward the Sun (origin),
  // lifted above the ecliptic for a 3/4 view. (Sun gets a default angle.)
  const a = positions[id]
  const len = Math.hypot(a.x, a.y, a.z)
  const dir =
    len < 1e-9
      ? { x: 1, y: 0, z: 0.5 }
      : { x: -a.x / len, y: -a.y / len, z: -a.z / len + 0.5 }
  rig.frameFrom(scale.radius(kmToAu(def.radiusKm)), kindOf(def), dir, !instant)
  if (selectEl.value !== id) selectEl.value = id
  writeObjParam(id)
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

flyTo(startId, true)

// --- loop ---
const timer = new THREE.Timer()
const fpsSamples = new Float32Array(30)
let fi = 0
let frame = 0

function tick(): void {
  timer.update()
  const dt = timer.getDelta()

  clock.advance(dt)
  positions = computePositions(clock.jd, positions)
  const focusAu = focus.update(positions, dt)
  solar.place(positions, focusAu, scale)
  solar.spin(dt)

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

  if (frame % 2 === 0) {
    labels.update(solar, rig.camera, window.innerWidth, window.innerHeight, focus.targetId, hoveredId)
  }

  fpsSamples[fi++ % 30] = dt
  if (++frame % 12 === 0) {
    let s = 0
    for (let i = 0; i < 30; i++) s += fpsSamples[i]
    fps = 30 / (s || 1)
    updateHud()
  }

  renderer.render(scene, rig.camera)
}

renderer.setAnimationLoop(tick)
