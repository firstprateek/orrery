import * as THREE from 'three'
import { SPIKE_BODIES, AU_KM } from './config/constants'
import { makeTrueScale } from './scene/scaleMapping'
import { relativePosition } from './scene/FloatingOrigin'
import { createRenderer } from './scene/Renderer'
import { CameraRig } from './scene/CameraRig'

// M0 scale spike. Proves the precision stack — float64 sim (AU) → true-scale
// mapping → floating origin + logarithmic depth — by letting you zoom from the
// Sun, out to Neptune at 30 AU, down to a 1 km test sphere, with no jitter.

const app = document.getElementById('app')
if (!app) throw new Error('#app container not found')

const renderer = createRenderer()
app.appendChild(renderer.domElement)

const scene = new THREE.Scene()
const scale = makeTrueScale()
const rig = new CameraRig(renderer.domElement, window.innerWidth / window.innerHeight)

const meshes = SPIKE_BODIES.map((body) => {
  const geometry = new THREE.SphereGeometry(scale.radius(body.radiusAu), 64, 64)
  const material = new THREE.MeshBasicMaterial({ color: body.color })
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)
  return { body, mesh }
})

let focusIndex = 0

function focusOn(index: number): void {
  focusIndex = index
  rig.frame(scale.radius(SPIKE_BODIES[index].radiusAu))
}

const hud = document.createElement('div')
hud.style.cssText =
  'position:fixed;left:14px;bottom:14px;color:#cdd6ff;font:13px/1.6 system-ui,sans-serif;text-shadow:0 1px 3px #000;pointer-events:none'
document.body.appendChild(hud)

function updateHud(): void {
  const f = SPIKE_BODIES[focusIndex]
  const distKm = rig.distance * AU_KM
  const dist =
    distKm > 1e6 ? `${rig.distance.toFixed(3)} AU` : `${distKm.toFixed(distKm < 10 ? 3 : 0)} km`
  hud.innerHTML =
    `focus: <b>${f.name}</b> &nbsp;·&nbsp; camera: ${dist}<br>` +
    `[1] Sun &nbsp; [2] Neptune &nbsp; [3] 1 km sphere &nbsp;·&nbsp; scroll = zoom, drag = orbit`
}

window.addEventListener('keydown', (e) => {
  const map: Record<string, number> = { '1': 0, '2': 1, '3': 2 }
  if (e.key in map) focusOn(map[e.key])
})

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  rig.resize(window.innerWidth / window.innerHeight)
})

focusOn(0)

const timer = new THREE.Timer()
renderer.setAnimationLoop(() => {
  timer.update()
  const dt = timer.getDelta()
  const origin = SPIKE_BODIES[focusIndex].absAu
  for (const { body, mesh } of meshes) {
    const r = scale.position(relativePosition(body.absAu, origin))
    mesh.position.set(r.x, r.y, r.z)
  }
  rig.update(dt)
  updateHud()
  renderer.render(scene, rig.camera)
})
