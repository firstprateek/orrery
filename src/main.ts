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
import type { Vec3 } from './math/vec3'

const app = document.getElementById('app')
if (!app) throw new Error('#app container not found')

const renderer = createRenderer()
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

// --- UI: body picker + HUD ---
const ui = document.createElement('div')
ui.style.cssText = 'position:fixed;top:14px;left:14px;display:flex;gap:10px;align-items:center;font:13px system-ui,sans-serif'
const selectEl = document.createElement('select')
selectEl.setAttribute('aria-label', 'Focus a body')
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
hud.style.cssText = 'position:fixed;left:14px;bottom:14px;color:#aab3d0;font:12px/1.6 ui-monospace,monospace;text-shadow:0 1px 2px #000;pointer-events:none'
document.body.appendChild(hud)

const factEl = document.createElement('div')
factEl.style.cssText = 'position:fixed;right:14px;bottom:14px;max-width:320px;color:#cdd6ff;font:13px/1.5 system-ui;text-align:right;text-shadow:0 1px 3px #000;pointer-events:none'
document.body.appendChild(factEl)

// --- focus / framing ---
let focusId = 'earth'
let positions: Record<string, Vec3> = computePositions(clock.jd)
let fps = 0

function kindOf(def: BodyDef): 'sun' | 'planet' | 'moon' | 'small' {
  if (def.type === 'star') return 'sun'
  if (def.type === 'moon') return def.radiusKm < 100 ? 'small' : 'moon'
  return 'planet'
}

function updateHud(): void {
  const def = BODY_BY_ID[focusId]
  const distKm = rig.distance * AU_KM
  const dist = distKm > 1e6 ? `${rig.distance.toFixed(3)} AU` : `${distKm.toFixed(distKm < 100 ? 1 : 0)} km`
  hud.textContent = `focus ${def.name}  ·  cam ${dist}  ·  ${fps.toFixed(0)} fps  ·  ${renderer.info.render.calls} draws`
  factEl.innerHTML = `<b style="font-size:15px">${def.name}</b><br>${def.facts}`
}

function focus(id: string, transition = true): void {
  focusId = id
  const def = BODY_BY_ID[id]
  rig.frame(scale.radius(kmToAu(def.radiusKm)), kindOf(def), transition)
  if (selectEl.value !== id) selectEl.value = id
  updateHud()
}

selectEl.addEventListener('change', () => focus(selectEl.value))

window.addEventListener('keydown', (e) => {
  if (e.key === '[' || e.key === ']') {
    const i = BODIES.findIndex((b) => b.id === focusId)
    const n = (i + (e.key === ']' ? 1 : BODIES.length - 1)) % BODIES.length
    focus(BODIES[n].id)
  }
})

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  rig.resize(window.innerWidth / window.innerHeight)
})

document.addEventListener('visibilitychange', () => {
  renderer.setAnimationLoop(document.hidden ? null : tick)
})

focus(focusId, false)

// --- loop ---
const timer = new THREE.Timer()
const fpsSamples = new Float32Array(30)
let fi = 0
let frame = 0
const _focus: Vec3 = { x: 0, y: 0, z: 0 }

function tick(): void {
  timer.update()
  const dt = timer.getDelta()

  clock.advance(dt)
  positions = computePositions(clock.jd, positions)
  const f = positions[focusId]
  _focus.x = f.x
  _focus.y = f.y
  _focus.z = f.z

  solar.place(positions, _focus, scale)
  solar.spin(dt)
  rig.update(dt)
  sky.position.copy(rig.camera.position)

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
