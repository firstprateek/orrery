import * as THREE from 'three'
import type { BodyDef } from './config/bodies'
import { bindTargetRadii, isTarget, setTargetBodies, targetDef, targetRenderRadius } from './config/targets'
import { HOME_SYSTEM, SKY_CATALOG, formatLy, skyFrom } from './config/starCatalog'
import { isExoSystem, loadSystem } from './config/systems'
import { AU_KM, jdToDate, unixMsToJd } from './config/constants'
import { SimClock } from './sim/time'
import { makeTrueScale, makeVisualScale } from './scene/scaleMapping'
import { createRenderer } from './scene/Renderer'
import { createComposer, supportsHdrComposer } from './scene/Composer'
import { QUALITY, QUALITY_ORDER, SlowFrameGuard, defaultTier, resolveTier, type QualityTier } from './scene/quality'
import { BASE_FOV, CameraRig } from './scene/CameraRig'
import { SolarSystem } from './scene/SolarSystem'
import { ExoSystem } from './scene/ExoSystem'
import { SkyGuide } from './scene/SkyGuide'
import type { SystemScene } from './scene/SystemScene'
import { createSky } from './scene/Sky'
import { createStarField } from './scene/StarField'
import { FocusController } from './scene/FocusController'
import { pickBody } from './scene/Picker'
import type { FrameState, PickTarget, SceneLayer } from './scene/FrameState'
import { smoothDamp } from './math/smoothDamp'
import { DEFAULT_SIDE, arrivalDirFrom } from './math/arrivalDir'
import { Labels, type PlacedLabel } from './ui/Labels'
import { addHelpLine, helpHtml } from './ui/help'
import { ShowMenu } from './ui/ShowMenu'
import { isTextEntry } from './ui/keys'
import { TimeBar } from './ui/TimeBar'
import { WarpEffect } from './ui/Warp'
import { prefersReducedMotion } from './ui/motion'
import { readObjParam, readDateParam, readScaleParam, readSysParam, buildUrl, writeState } from './ui/urlState'

const app = document.getElementById('app')
if (!app) throw new Error('#app container not found')

// WebGL2 context creation can fail (blocked GPU, old device, policy). Show a
// human message instead of a silent black page.
let renderer: ReturnType<typeof createRenderer>
try {
  renderer = createRenderer()
} catch (err) {
  app.innerHTML =
    '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#cdd6ff;font:15px/1.6 system-ui;text-align:center;padding:24px">' +
    'This experience needs WebGL2.<br>Try updating your browser or enabling hardware acceleration.</div>'
  throw err
}
renderer.domElement.style.cursor = 'grab'
// Belt and braces for the CSS in index.html (user-select: none): never let the
// browser start a native drag (a snapshot of the canvas, a label or a
// selection), which would swallow the pointer moves the camera needs.
document.addEventListener('dragstart', (e) => e.preventDefault())
renderer.domElement.draggable = false
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
// The HDR composer needs float-renderable targets; without the extension, fall
// back to the direct path rather than rendering black (or crawling).
const hdrOk = supportsHdrComposer(renderer)
// No stored choice → start at Medium where bloom is supported, and let the
// first seconds' frame rate drop it to Low (see autoTierGuard in tick).
const storedTier = readStoredQuality()
let autoTierGuard: SlowFrameGuard | null = storedTier === null ? new SlowFrameGuard() : null
let quality = QUALITY[resolveTier(storedTier, defaultTier({ softwareRendering, hdrOk }))]
if (softwareRendering) quality = QUALITY.performance
renderer.setPixelRatio(Math.min(window.devicePixelRatio, quality.dpr))

const scene = new THREE.Scene()
const rig = new CameraRig(renderer.domElement, window.innerWidth / window.innerHeight)
const trueScale = makeTrueScale()
const visualScale = makeVisualScale()
const loader = new THREE.TextureLoader()

// The star system you are in. Exactly one is loaded at a time: travelling
// disposes this one (meshes, textures) before the next is built.
let sys: SystemScene = new SolarSystem(loader, trueScale, visualScale, renderer.capabilities.getMaxAnisotropy())
scene.add(sys.group)
sys.setBeltCount(quality.beltCount)
bindTargetRadii({ renderRadius: (def, b) => sys.renderRadius(def, b) })
const sky = createSky(loader)
scene.add(sky)

// Kept as an explicit reference (perf() and quality changes use it): stars load
// asynchronously, so searching the scene for "the" Points object could find a
// layer's point cloud instead.
let starField: THREE.Points | null = null
createStarField(import.meta.env.BASE_URL, renderer.getPixelRatio())
  .then((sf) => {
    starField = sf
    scene.add(sf)
  })
  .catch((err) => console.warn('star field unavailable:', err))

let composer = quality.post && hdrOk ? createComposer(renderer, scene, rig.camera, quality) : null
sys.setSunBoost(composer !== null)

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

let positions = sys.computePositions(clock.jd)

const requested = readObjParam()
// True while a ?sys= link is still loading its system: home is only a stand-in
// then, and must not overwrite the link in the address bar.
let urlHeldForLink = false
// True while travelling between systems (flyTo reads it from start-up on).
let travelling = false
// A link into another system (?sys=) opens home first, then travels there.
const sysParam = readSysParam()
const linkedSystem = sysParam && isExoSystem(sysParam) ? sysParam : null
urlHeldForLink = linkedSystem !== null
const startId = requested && isTarget(requested) ? requested : sys.defaultFocusId
// Where the opening glide (and the glide after arriving in a system) ends.
let introTargetId = startId
const focus = new FocusController(startId, positions)

// --- scale blend (0 = realistic/true, 1 = visual/poster) ---
// A shared ?scale=overview link opens straight in the poster view.
let blend = readScaleParam() ? 1 : 0
let targetBlend = blend
const blendVel = { value: 0 }
let prevFr = 0
// Set by the Overview button: frame the whole system once the scale blend settles.
let pendingSystemFrame = false

// --- UI ---
// 16px font on form controls: anything smaller triggers iOS Safari's page zoom
// on focus, which the camera's touch-action:none then makes hard to undo.
const controlCss =
  'background:#11131c;color:#cdd6ff;border:1px solid #2a2f44;border-radius:8px;padding:6px 10px;font:16px system-ui;max-width:44vw'
const ui = document.createElement('div')
// z-index above the first-run hint and the ⋯ panel (neither overlaps the
// toolbar row itself): the Show popover lives inside the toolbar, for tab
// order, and must draw over the hint that sits just below it.
ui.style.cssText =
  'position:fixed;top:calc(10px + env(safe-area-inset-top));left:calc(10px + env(safe-area-inset-left));right:calc(10px + env(safe-area-inset-right));' +
  'display:flex;gap:8px;align-items:center;flex-wrap:wrap;z-index:26;pointer-events:none'
const selectEl = document.createElement('select')
selectEl.setAttribute('aria-label', 'Fly to a body')
selectEl.title = 'Fly to a planet or moon'
selectEl.style.cssText = controlCss + ';pointer-events:auto'
// Group moons under their parent so the hierarchy is legible. A last group
// lists the star systems you can travel to (values 'sys:<id>').
const SYS_PREFIX = 'sys:'
function buildBodyMenu(): void {
  selectEl.replaceChildren()
  const byId = new Map<string, BodyDef>(sys.bodies.map((b) => [b.id, b]))
  let groupEl: HTMLOptGroupElement | null = null
  for (const b of sys.bodies) {
    const o = document.createElement('option')
    o.value = b.id
    o.textContent = b.name
    if (b.type === 'moon') {
      const parentName = byId.get(b.parent as string)?.name ?? ''
      if (!groupEl || groupEl.label !== `${parentName} moons`) {
        groupEl = document.createElement('optgroup')
        groupEl.label = `${parentName} moons`
        selectEl.appendChild(groupEl)
      }
      groupEl.appendChild(o)
    } else {
      groupEl = null
      selectEl.appendChild(o)
    }
  }
  const travel = document.createElement('optgroup')
  travel.label = 'Travel to another star system'
  for (const v of skyFrom(sys.id).sort((a, b) => a.distanceLy - b.distanceLy)) {
    if (!v.entry.reachable) continue
    const o = document.createElement('option')
    o.value = SYS_PREFIX + v.entry.id
    o.textContent = `${v.entry.id === HOME_SYSTEM ? 'Solar System (home)' : v.entry.name} · ${formatLy(v.distanceLy)}`
    travel.appendChild(o)
  }
  selectEl.appendChild(travel)
}
buildBodyMenu()
// Previous / next body arrows around the menu: the visible way to hop between
// planets (also [ and ] on the keyboard). Hidden on phones, where the menu
// and tapping a planet do the job and the toolbar has no room.
function stepBody(delta: 1 | -1): void {
  const list = sys.bodies
  const i = list.findIndex((b) => b.id === focus.targetId)
  flyTo(list[(i + delta + list.length) % list.length].id)
}
const navBtn = (label: string, title: string, delta: 1 | -1) => {
  const b = document.createElement('button')
  b.textContent = label
  b.title = title
  b.setAttribute('aria-label', delta > 0 ? 'Next body' : 'Previous body')
  b.setAttribute('aria-keyshortcuts', delta > 0 ? ']' : '[')
  b.className = 'navbtn'
  b.style.cssText = controlCss + ';cursor:pointer;pointer-events:auto;min-width:38px'
  b.addEventListener('click', () => stepBody(delta))
  return b
}
ui.appendChild(navBtn('‹', 'Previous body  [', -1))
ui.appendChild(selectEl)
ui.appendChild(navBtn('›', 'Next body  ]', 1))

// Action-oriented label: the button says what clicking DOES, not a state name.
const scaleBtn = document.createElement('button')
scaleBtn.style.cssText = controlCss + ';cursor:pointer;pointer-events:auto'
scaleBtn.title = 'Toggle between true scale and a compressed overview (sizes exaggerated)'
scaleBtn.textContent = targetBlend > 0.5 ? 'True scale' : 'Overview'
scaleBtn.addEventListener('click', () => {
  if (travelling) return // mid-jump: it would reframe the system being left
  cancelIntro()
  targetBlend = targetBlend > 0.5 ? 0 : 1
  scaleBtn.textContent = targetBlend > 0.5 ? 'True scale' : 'Overview'
  layoutToolbar() // the label's width changed
  // Switching the mapping alone leaves the camera framed on the current body,
  // so "Overview" looked like it did nothing. Centre on the Sun and, once the
  // blend settles, pull back far enough to see out to Neptune.
  if (targetBlend > 0.5) {
    flyTo(sys.primaryId)
    pendingSystemFrame = true
  } else {
    pendingSystemFrame = false
  }
  syncUrl()
})
ui.appendChild(scaleBtn)

// One shared menu for optional layers (sky guide, spacecraft…): each registers a
// toggle with showMenu.register(). Hidden until something does.
// Toolbar fold state (see layoutToolbar); null until the toolbar is first laid out.
let toolbarFolded: boolean | null = null
const showMenu = new ShowMenu(controlCss, {
  // The help overlay is modal: its keys shouldn't flip layers underneath it.
  shortcutsEnabled: () => helpOverlay.style.display === 'none',
  // The Show button appearing can make the row overflow. Before the first
  // layout (a layer registering during start-up) there is nothing to redo.
  onVisibilityChange: () => {
    if (toolbarFolded !== null) layoutToolbar()
  },
})
// The popover is position:fixed, so it adds nothing to the row; it sits right
// after its button so Tab moves from the button into the checkboxes.
ui.append(showMenu.button, showMenu.popover)

const qualitySel = document.createElement('select')
qualitySel.setAttribute('aria-label', 'Graphics quality')
qualitySel.title = 'Graphics quality (higher looks better, lower runs faster)'
qualitySel.style.cssText = controlCss + ';pointer-events:auto'
for (const t of QUALITY_ORDER) {
  const o = document.createElement('option')
  o.value = t
  o.textContent = QUALITY[t].label
  qualitySel.appendChild(o)
}
qualitySel.value = quality.tier
qualitySel.addEventListener('change', () => applyQuality(qualitySel.value as QualityTier))
ui.appendChild(qualitySel)

// Share: snapshot the CURRENT moment (body + exact date + scale mode) into a
// link and copy it — even while time is playing.
const shareBtn = document.createElement('button')
shareBtn.textContent = 'Share'
shareBtn.title = 'Copy a link to this exact view and moment'
shareBtn.style.cssText = controlCss + ';cursor:pointer;pointer-events:auto'
shareBtn.addEventListener('click', async () => {
  const url =
    location.origin +
    buildUrl(location.search, location.pathname, '', focus.targetId, jdToIso(), targetBlend > 0.5, sysUrlId())
  try {
    await navigator.clipboard.writeText(url)
    shareBtn.textContent = 'Copied ✓'
  } catch {
    // Clipboard unavailable (permissions/insecure context): show the URL so the
    // user can copy it manually.
    prompt('Copy this link:', url)
  }
  setTimeout(() => (shareBtn.textContent = 'Share'), 1600)
})
ui.appendChild(shareBtn)

// Help overlay (the "?" button or key) — the controls are otherwise invisible.
const helpBtn = document.createElement('button')
helpBtn.textContent = '?'
helpBtn.title = 'Controls'
helpBtn.setAttribute('aria-label', 'Show controls help')
helpBtn.style.cssText = controlCss + ';cursor:pointer;pointer-events:auto;min-width:38px'
const helpOverlay = document.createElement('div')
helpOverlay.style.cssText =
  'position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(4,5,10,0.72);z-index:30;cursor:pointer'
const toggleHelp = () => {
  const open = helpOverlay.style.display === 'none'
  // Rebuilt on open: features add their lines (help.ts) after start-up.
  if (open) helpOverlay.innerHTML = helpHtml()
  helpOverlay.style.display = open ? 'flex' : 'none'
}
helpBtn.addEventListener('click', toggleHelp)
helpOverlay.addEventListener('click', toggleHelp)
document.body.appendChild(helpOverlay)
ui.appendChild(helpBtn)

// Phones: the full toolbar wraps to two rows over the planet. Fold Quality and
// Share into a "⋯" popover there; move them back on wider screens.
const moreBtn = document.createElement('button')
moreBtn.textContent = '⋯'
moreBtn.title = 'More options'
moreBtn.setAttribute('aria-label', 'More options')
moreBtn.setAttribute('aria-expanded', 'false')
moreBtn.style.cssText = controlCss + ';cursor:pointer;pointer-events:auto;min-width:38px'
const morePanel = document.createElement('div')
morePanel.style.cssText =
  'position:fixed;top:calc(58px + env(safe-area-inset-top));right:calc(10px + env(safe-area-inset-right));display:none;flex-direction:column;gap:8px;' +
  'background:rgba(12,14,22,0.92);border:1px solid #2a2f44;border-radius:12px;padding:10px;z-index:25'
document.body.appendChild(morePanel)
morePanel.id = 'more-panel'
moreBtn.setAttribute('aria-controls', morePanel.id)
const setMoreOpen = (open: boolean) => {
  // The toolbar can still wrap on very narrow screens: open below its real height.
  if (open) morePanel.style.top = `${ui.getBoundingClientRect().bottom + 8}px`
  morePanel.style.display = open ? 'flex' : 'none'
  moreBtn.setAttribute('aria-expanded', String(open))
}
moreBtn.addEventListener('click', () => setMoreOpen(morePanel.style.display === 'none'))
renderer.domElement.addEventListener('pointerdown', () => setMoreOpen(false))
qualitySel.addEventListener('change', () => setMoreOpen(false))
shareBtn.addEventListener('click', () => setTimeout(() => setMoreOpen(false), 900))
window.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return
  if (morePanel.style.display !== 'none') {
    setMoreOpen(false)
    moreBtn.focus()
  } else if (showMenu.open) {
    showMenu.setOpen(false)
    showMenu.button.focus()
  }
})
const narrow = window.matchMedia('(max-width: 640px)')
// Fold Quality and Share into ⋯ on phones, and also on wider screens whenever
// the one-row desktop toolbar wouldn't fit (the Show button, once a layer
// registers, makes it wrap at small-tablet / split-screen widths). The row's
// width is re-measured whenever it is unfolded, so text changes (Overview /
// True scale) are tracked.
let desktopRowWidth = 0
function toolbarRowWidth(): number {
  let w = 0
  let n = 0
  for (const c of ui.children) {
    const cw = (c as HTMLElement).getBoundingClientRect().width
    if (cw > 0 && getComputedStyle(c).position !== 'fixed') {
      w += cw
      n++
    }
  }
  return w + 8 * Math.max(0, n - 1) // flex gap
}
function layoutToolbar(): void {
  if (toolbarFolded === false) desktopRowWidth = toolbarRowWidth()
  const fold = narrow.matches || ui.clientWidth < desktopRowWidth
  // Unchanged: leave the DOM (and an open ⋯ panel) alone. Resize events fire
  // often on phones (the browser's address bar), so this must be a no-op.
  if (fold === toolbarFolded) return
  toolbarFolded = fold
  if (fold) {
    morePanel.append(qualitySel, shareBtn)
    showMenu.dockIn(morePanel) // its toggles go first in the ⋯ panel
    ui.insertBefore(moreBtn, helpBtn)
    for (const c of [qualitySel, shareBtn]) c.style.maxWidth = 'none'
  } else {
    setMoreOpen(false)
    moreBtn.remove()
    showMenu.dockIn(null)
    ui.insertBefore(qualitySel, helpBtn)
    ui.insertBefore(shareBtn, helpBtn)
    for (const c of [qualitySel, shareBtn]) c.style.maxWidth = '44vw'
    // Check the unfolded row actually fits; fold again if not.
    desktopRowWidth = toolbarRowWidth()
    layoutToolbar()
  }
}
document.body.appendChild(ui) // before layoutToolbar(): it measures the row
layoutToolbar()
narrow.addEventListener('change', () => {
  layoutToolbar()
  placeHint()
})
window.addEventListener('resize', () => {
  layoutToolbar()
  placeHint()
})

function applyQuality(tier: QualityTier, persist = true): void {
  quality = QUALITY[tier]
  if (persist) {
    autoTierGuard = null // an explicit choice always wins over the auto fallback
    try {
      localStorage.setItem('orrery-quality', tier)
    } catch {
      // private mode / storage unavailable — fine, just won't persist
    }
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
  sys.setSunBoost(composer !== null)
  sys.setBeltCount(quality.beltCount)
  // Star point sizes are in device pixels — keep them in sync with the new DPR.
  if (starField) {
    ;(starField.material as THREE.ShaderMaterial).uniforms.uPixelRatio.value = renderer.getPixelRatio()
  }
  for (const l of layers) l.setQuality?.(quality)
  if (qualitySel.value !== tier) qualitySel.value = tier
}

// Debug diagnostics (frame time, GPU string) only with ?debug — end users get a
// clean "Body · distance" readout, not a profiler.
const debugMode = new URLSearchParams(location.search).has('debug')
const hud = document.createElement('div')
hud.style.cssText =
  'position:fixed;left:calc(14px + env(safe-area-inset-left));bottom:calc(84px + env(safe-area-inset-bottom));max-width:min(60vw,340px);' +
  'color:#aab3d0;font:12px/1.6 ui-monospace,monospace;text-shadow:0 1px 2px #000;pointer-events:none;z-index:10'
hud.className = debugMode ? 'hud debug' : 'hud'
document.body.appendChild(hud)

// Fact panel sits ABOVE the time bar's band so they never collide.
const factEl = document.createElement('div')
// Right column above the time bar: zoom pill on top, facts below it.
const rightCol = document.createElement('div')
rightCol.style.cssText =
  'position:fixed;right:calc(14px + env(safe-area-inset-right));bottom:calc(84px + env(safe-area-inset-bottom));' +
  'display:flex;flex-direction:column;align-items:flex-end;gap:8px;pointer-events:none;z-index:10'
const zoomPill = document.createElement('div')
zoomPill.style.cssText =
  'display:flex;align-items:center;gap:6px;pointer-events:auto;background:rgba(12,14,22,0.72);border:1px solid #232838;' +
  'border-radius:10px;padding:4px 6px;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)'
const pillBtnCss =
  'background:#171a26;color:#cdd6ff;border:1px solid #2a2f44;border-radius:7px;padding:2px 9px;font:16px system-ui;cursor:pointer;min-width:36px;min-height:34px'
const zoomOutBtn = document.createElement('button')
zoomOutBtn.textContent = '−'
zoomOutBtn.title = 'Zoom out (⌘/Ctrl −)'
zoomOutBtn.setAttribute('aria-label', 'Zoom out')
zoomOutBtn.style.cssText = pillBtnCss
const zoomLabel = document.createElement('span')
zoomLabel.style.cssText = 'color:#cdd6ff;font:13px ui-monospace,monospace;min-width:64px;text-align:center'
zoomLabel.setAttribute('aria-label', 'Zoom level')
const zoomInBtn = document.createElement('button')
zoomInBtn.textContent = '+'
zoomInBtn.title = 'Zoom in (⌘/Ctrl +)'
zoomInBtn.setAttribute('aria-label', 'Zoom in')
zoomInBtn.style.cssText = pillBtnCss
const zoomResetBtn = document.createElement('button')
zoomResetBtn.textContent = 'Reset'
zoomResetBtn.title = 'Back to the default view of this body (⌘/Ctrl 0)'
zoomResetBtn.style.cssText = pillBtnCss + ';font-size:13px;padding:4px 9px'
zoomPill.append(zoomOutBtn, zoomLabel, zoomInBtn, zoomResetBtn)
rightCol.appendChild(zoomPill)
factEl.style.cssText =
  'max-width:min(300px,44vw);' +
  'color:#cdd6ff;font:13px/1.5 system-ui;text-align:right;text-shadow:0 1px 3px #000;pointer-events:none;z-index:10;' +
  // A soft backing keeps planet labels that drift behind it from muddling the text.
  'background:rgba(12,14,22,0.5);padding:8px 12px;border-radius:10px;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)'
factEl.className = 'fact'
// Phones: smaller facts so they don't cover half the planet.
const factStyle = document.createElement('style')
// The body · distance readout would collide with the facts there, and the
// facts already name the body, so phones drop it (unless ?debug).
factStyle.textContent =
  '@media (max-width: 640px){.fact{font-size:12px!important;line-height:1.4!important;max-width:62vw!important}' +
  '.hud:not(.debug){display:none}.navbtn{display:none}}'
document.head.appendChild(factStyle)
rightCol.appendChild(factEl)
document.body.appendChild(rightCol)

if (softwareRendering) {
  const warn = document.createElement('div')
  warn.textContent =
    '⚠ Software rendering detected (no GPU acceleration). Enable hardware acceleration in your browser for smooth performance.'
  warn.style.cssText =
    'position:fixed;top:58px;left:14px;max-width:380px;background:#3a1a1a;color:#ffd9d9;border:1px solid #6a2a2a;border-radius:8px;padding:8px 12px;font:12px/1.4 system-ui;z-index:20'
  document.body.appendChild(warn)
}

// First-run hint: the whole UI is otherwise unlabeled chrome. Auto-fades, and
// never comes back once seen (or once the user interacts).
function hintSeen(): boolean {
  try {
    return localStorage.getItem('orrery-hint-seen') === '1'
  } catch {
    return false
  }
}
let hint: HTMLDivElement | null = null
const placeHint = () => {
  if (hint) hint.style.top = `${ui.getBoundingClientRect().bottom + 12}px`
}
// Called once the opening glide ends (or right away when there is none).
let hintShown = false
function showHint(): void {
  if (hintShown || hintSeen()) return
  hintShown = true
  const h = document.createElement('div')
  hint = h
  h.textContent = narrow.matches
    ? 'drag to look around · pinch to zoom · tap a planet or pick one from the menu to fly there'
    : 'drag to look around · scroll or pinch to zoom · click a planet, or use ‹ › and the menu, to fly there'
  h.style.cssText =
    'position:fixed;left:0;right:0;margin:0 auto;width:max-content;max-width:min(92vw,560px);text-align:center;box-sizing:border-box;' +
    'background:rgba(12,14,22,0.8);color:#cdd6ff;border:1px solid #2a2f44;border-radius:10px;padding:10px 16px;font:14px/1.5 system-ui;z-index:20;' +
    'transition:opacity 1s;cursor:pointer'
  const dismissHint = () => {
    h.style.opacity = '0'
    setTimeout(() => {
      h.remove()
      hint = null
    }, 1100)
    try {
      localStorage.setItem('orrery-hint-seen', '1')
    } catch {
      // fine — it'll just show again next visit
    }
  }
  // Sit just under the toolbar, which wraps to two rows on phones.
  placeHint()
  h.addEventListener('click', dismissHint)
  renderer.domElement.addEventListener('pointerdown', dismissHint, { once: true })
  setTimeout(dismissHint, 12000)
  document.body.appendChild(h)
}

// Any manual drag or zoom during the Overview transition wins over the auto pull-back.
// --- zoom: pill, keyboard, trackpad pinch ---
// "1×" is the default framing of the focused body (or of the whole system when
// the overview is centred on the Sun); Reset returns there.
function zoomBaseDistance(): number {
  const t = targetDef(focus.targetId)
  if (targetBlend > 0.5 && t.frameKind === 'sun') return systemFrameDistance()
  return rig.frameDistance(targetRenderRadius(t.id, blend), t.frameKind)
}
function userZoom(factor: number): void {
  if (travelling) return // keyboard and pinch zoom reach past the jump's overlay
  pendingSystemFrame = false
  cancelIntro()
  rig.zoomBy(factor)
  updateZoomPill()
}
function resetZoom(): void {
  if (travelling) return
  pendingSystemFrame = false
  cancelIntro()
  void rig.controls.dollyTo(zoomBaseDistance(), true)
  updateZoomPill()
}
const compact = (n: number) =>
  n >= 1e6 ? `${(n / 1e6).toFixed(n < 1e7 ? 1 : 0)}M` : n >= 1e3 ? `${(n / 1e3).toFixed(n < 1e4 ? 1 : 0)}k` : n.toFixed(n < 10 ? 1 : 0)
function updateZoomPill(): void {
  // Destination distance, so the label answers a click immediately. While the
  // app itself is moving to a default view (Overview framing, opening glide),
  // that view is 1× by definition.
  const z = pendingSystemFrame || introRunning ? 1 : zoomBaseDistance() / rig.destinationDistance
  zoomLabel.textContent = z >= 0.95 ? `${compact(z)}×` : `1/${compact(1 / z)}×`
  const showReset = Math.abs(Math.log(z)) > 0.1
  if (!showReset && document.activeElement === zoomResetBtn) zoomInBtn.focus()
  zoomResetBtn.style.display = showReset ? '' : 'none'
}
const ZOOM_STEP = 1.6
zoomInBtn.addEventListener('click', () => userZoom(1 / ZOOM_STEP))
zoomOutBtn.addEventListener('click', () => userZoom(ZOOM_STEP))
zoomResetBtn.addEventListener('click', resetZoom)
// ⌘/Ctrl + and − zoom the scene instead of the page; ⌘/Ctrl 0 resets. Plain
// + and − work too.
window.addEventListener('keydown', (e) => {
  if (e.altKey) return
  const mod = e.metaKey || e.ctrlKey
  if (!mod && isTextEntry(e.target)) return
  // Holding a key auto-repeats ~30×/s: use small steps so it glides, not jumps.
  const step = e.repeat ? 1.12 : ZOOM_STEP
  if (e.key === '=' || e.key === '+') {
    userZoom(1 / step)
    e.preventDefault()
  } else if (e.key === '-' || e.key === '_') {
    userZoom(step)
    e.preventDefault()
  } else if (mod && e.key === '0') {
    // No preventDefault: the browser's own zoom reset still runs too, so ⌘0
    // always gets a page back to 100% if it was ever page-zoomed.
    resetZoom()
  }
})
// A trackpad pinch arrives as a wheel event with ctrlKey. camera-controls turns
// that into a lens zoom; catch it first (capture phase on window) and move the
// camera instead, like a scroll. preventDefault also stops the page zooming.
window.addEventListener(
  'wheel',
  (e) => {
    if (!e.ctrlKey) return
    e.preventDefault()
    e.stopImmediatePropagation()
    if (gestureScale) return // Safari: the gesture events below drive the zoom
    // Firefox on Windows/Linux reports ctrl+wheel in lines, not pixels.
    const dy = e.deltaMode === 1 ? e.deltaY * 33 : e.deltaY
    userZoom(Math.exp(THREE.MathUtils.clamp(dy, -50, 50) * 0.008))
  },
  { capture: true, passive: false },
)
// Safari sends trackpad pinch as non-standard gesture events (with a running
// scale), not ctrl+wheel; without this it zooms the whole page instead.
let gestureScale = 0
type GestureEvt = Event & { scale: number }
window.addEventListener('gesturestart', (e) => {
  e.preventDefault()
  gestureScale = (e as GestureEvt).scale || 1
})
window.addEventListener('gesturechange', (e) => {
  e.preventDefault()
  const s = (e as GestureEvt).scale
  if (gestureScale && s > 0) userZoom(gestureScale / s)
  gestureScale = s
})
window.addEventListener('gestureend', (e) => {
  e.preventDefault()
  gestureScale = 0
})

// camera-controls doesn't emit controlstart for the mouse wheel.
renderer.domElement.addEventListener(
  'wheel',
  () => {
    pendingSystemFrame = false
    cancelIntro()
  },
  { passive: true },
)
rig.controls.addEventListener('controlstart', () => {
  pendingSystemFrame = false
  cancelIntro()
})

const labels = new Labels((id) => flyTo(id))
labels.add(sys.labelSources())
// Body labels shown on the last label update (layers keep their own labels clear).
let placedLabels: PlacedLabel[] = []

// --- scene layers ---
// Things positioned alongside the bodies each frame (sky guide, spacecraft,
// belts…). Each is one addLayer() call; tick() drives them all through one
// FrameState, picking and labels pick up their targets and sources.
const layers: SceneLayer[] = []
function addLayer(layer: SceneLayer): void {
  layers.push(layer)
  const sources = layer.labelSources?.()
  if (sources) labels.add(sources)
  layer.setQuality?.(quality)
}
/** Every click/hover target: the bodies plus whatever layers add. */
function pickTargets(): readonly PickTarget[] {
  let all = sys.pickTargets()
  for (const l of layers) {
    const t = l.pickTargets?.()
    if (t && t.length) all = all.concat(t)
  }
  return all
}

// --- focus / framing ---
let fps = 0
let msEma = 16
let hoveredId: string | null = null

const jdToIso = () => jdToDate(clock.jd).toISOString()
function syncUrl(): void {
  // Keep the URL bare during the opening glide: a reload mid-glide should
  // replay it, not land on a half-way ?obj=sun&scale=overview state.
  if (introRunning || urlHeldForLink) return
  writeState(focus.targetId, clock.playing ? null : jdToIso(), targetBlend > 0.5, sysUrlId())
}
/** The ?sys= value: none for home. */
function sysUrlId(): string | null {
  return sys.id === HOME_SYSTEM ? null : sys.id
}

function updateFact(): void {
  const t = targetDef(focus.targetId)
  // Text set via textContent: names and facts are data, not markup.
  const where = document.createElement('div')
  where.textContent = sys.name
  where.style.cssText = 'color:#8892b8;font-size:11px;letter-spacing:0.04em;text-transform:uppercase'
  const name = document.createElement('b')
  name.textContent = t.name
  name.style.fontSize = '15px'
  const facts = document.createElement('div')
  facts.textContent = t.facts
  factEl.replaceChildren(where, name, facts)
}

function updateStats(): void {
  const def = targetDef(focus.targetId)
  // Render units only equal AU in true scale; in the overview the distance is
  // a compressed mapping, so don't present it as a physical number.
  let dist: string
  if (blend > 0.01) {
    dist = 'overview'
  } else {
    const distKm = rig.distance * AU_KM
    dist = distKm > 1e6 ? `${rig.distance.toFixed(2)} AU` : `${distKm.toFixed(0)} km`
  }
  hud.textContent = debugMode
    ? `${def.name} · ${dist} · ${msEma.toFixed(1)} ms (${fps.toFixed(0)} fps) · ${gpuName}`
    : `${def.name} · ${dist}`
}

/** Direction (focus-relative, unnormalised) to view a target from; see arrivalDirFrom. */
function arrivalDir(id: string, side = DEFAULT_SIDE): { x: number; y: number; z: number } {
  return arrivalDirFrom(positions[id], side)
}

interface FlyOpts {
  /** Jump there (no glide). */
  instant?: boolean
  /** Viewpoint swing for arrivalDir(); ignored when `dir` is given. */
  side?: number
  /** The opening glide is calling: don't cancel it. */
  fromIntro?: boolean
  /** Explicit view direction, overriding arrivalDir(). */
  dir?: { x: number; y: number; z: number }
}

/** Fly to a target and frame it. */
function flyTo(id: string, opts: FlyOpts = {}): void {
  const instant = opts.instant ?? false
  // Mid-jump the menu and [ ] keys would fly to a body of the system being left.
  if (travelling && !instant && !opts.fromIntro) return
  if (!opts.fromIntro) cancelIntro()
  pendingSystemFrame = false
  focus.setTarget(id)
  if (instant) focus.snap(positions)
  sys.ensureFamilyTextures(id) // deferred moon maps start when their system is visited
  const t = targetDef(id)
  // Moons collapse onto their planet in the overview mapping — flying to one
  // there would bury the camera inside the parent. Return to true scale first.
  if (t.trueScaleOnly && targetBlend > 0.5) {
    targetBlend = 0
    scaleBtn.textContent = 'Overview'
  }
  const dir = opts.dir ?? arrivalDir(id, opts.side)
  const r = targetRenderRadius(id, blend)
  rig.frameFrom(r, t.frameKind, dir, !instant)
  prevFr = r
  if (selectEl.value !== id) selectEl.value = id
  // The Sun in the overview is the whole-system view, wherever you came from.
  if (t.frameKind === 'sun' && targetBlend > 0.5 && !instant) pendingSystemFrame = true
  syncUrl()
  updateFact()
  updateStats()
}

selectEl.addEventListener('change', () => {
  const v = selectEl.value
  if (v.startsWith(SYS_PREFIX)) {
    selectEl.value = focus.targetId // the menu shows where you are, not where you're going
    selectEl.blur()
    void travelTo(v.slice(SYS_PREFIX.length))
  } else {
    flyTo(v)
  }
})

window.addEventListener('keydown', (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey) return
  if (isTextEntry(e.target)) return
  if (e.key === '?') toggleHelp()
  if (e.key === '[' || e.key === ']') stepBody(e.key === ']' ? 1 : -1)
})

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  if (composer) composer.setSize(window.innerWidth, window.innerHeight)
  rig.resize(window.innerWidth / window.innerHeight)
  layoutOverlays()
  placeHint() // the toolbar may have (un)wrapped
})

document.addEventListener('visibilitychange', () => {
  renderer.setAnimationLoop(document.hidden ? null : loop)
  // The loop pauses while hidden but timers don't: hold the glide until the
  // tab is visible again so the user doesn't return mid-flight.
  if (introTimer && document.hidden) {
    clearTimeout(introTimer)
    introTimer = -1
  } else if (introTimer === -1 && !document.hidden) {
    startIntroTimer(1200)
  }
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
    const id = pickBody(hoverNdc, rig.camera, pickTargets(), window.innerHeight, touchGesture ? 22 : 8)
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
  sys.setHighlight(null)
  el.style.cursor = 'grab'
})

const timeBar = new TimeBar(clock, syncUrl)

// The time bar wraps to multiple rows on narrow screens — anchor the HUD and
// fact panel above its REAL height so they never end up underneath it.
function layoutOverlays(): void {
  const off = `calc(${timeBar.el.offsetHeight + 24}px + env(safe-area-inset-bottom))`
  hud.style.bottom = off
  rightCol.style.bottom = off
}
layoutOverlays()

// --- opening glide ---
// A bare visit (no shared link) opens on the whole system, then glides into
// Earth from the side so day and night both show. Any input cancels it.
let introTimer = 0
// Second stage: once the glide to Earth (still in the overview) lands, blend to
// true scale; the per-frame rescale in tick() keeps Earth framed as it shrinks.
// Doing both at once makes the camera transition and the rescale fight.
let introToTrueScale = false
// Third stage: the rescale during the blend drifts a little, so ease to the
// standard framing distance once true scale is reached.
let introSettle = false
// True from the first frame of the glide until it ends or is cancelled.
let introRunning = false
function endIntro(): void {
  clearTimeout(introTimer)
  introTimer = 0
  introToTrueScale = false
  introSettle = false
  introRunning = false
  showHint()
}
function cancelIntro(): void {
  if (!introRunning) return
  endIntro()
  syncUrl()
}
function startIntroTimer(ms: number): void {
  introTimer = window.setTimeout(() => {
    introTimer = 0
    flyTo(introTargetId, { side: 1.15, fromIntro: true })
    // The glide may end on a star (Alpha Centauri A, Sirius B): flyTo treats a
    // star in the overview as "frame the whole system", which would pull the
    // camera back out mid-glide. The glide frames it itself.
    pendingSystemFrame = false
    introToTrueScale = true
  }, ms)
}
function systemFrameDistance(): number {
  // Fit the system's overview sphere (70 for ours: Pluto maps to ~59, plus
  // margin for the toolbar and time bar) in the narrower of the two FOVs;
  // portrait phones are width-limited.
  // BASE_FOV, not camera.fov: the light-speed jump widens the view while it
  // frames the system it is arriving in.
  const halfV = THREE.MathUtils.degToRad(BASE_FOV / 2)
  const half = Math.min(halfV, Math.atan(Math.tan(halfV) * rig.camera.aspect))
  return sys.overviewRadius / Math.sin(half)
}
const playIntro = !requested && !dateLinked && !readScaleParam() && !linkedSystem
if (playIntro) {
  blend = targetBlend = 1
  scaleBtn.textContent = 'True scale'
  introRunning = true
  flyTo('sun', { instant: true, fromIntro: true })
  void rig.controls.dollyTo(systemFrameDistance(), false)
  startIntroTimer(2000)
} else {
  flyTo(startId, { instant: true })
  showHint()
}

// --- star systems: the sky guide and travel ---
// The sky guide marks the systems you can travel to (and landmarks you can't)
// with their distances from wherever you are. Travelling swaps the one loaded
// system: the next is fetched first (so a failed load leaves you where you
// were), then the old one is disposed and the new one built, behind a fade.
const travelOverlay = document.createElement('div')
travelOverlay.setAttribute('aria-live', 'polite')
travelOverlay.style.cssText =
  'position:fixed;inset:0;z-index:28;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;' +
  'background:#03040a;color:#cdd6ff;font:15px/1.5 system-ui;text-align:center;padding:24px;' +
  'opacity:0;pointer-events:none;transition:opacity 0.45s ease'
document.body.appendChild(travelOverlay)
function setTravelOverlay(on: boolean, title = '', sub = '', instant = false): void {
  if (on) {
    const t = document.createElement('div')
    t.textContent = title
    t.style.cssText = 'font-size:20px;font-weight:600;color:#9ff7e8'
    const d = document.createElement('div')
    d.textContent = sub
    d.style.color = '#8892b8'
    travelOverlay.replaceChildren(t, d)
  }
  travelOverlay.style.transition = instant ? 'none' : 'opacity 0.45s ease'
  travelOverlay.style.opacity = on ? '1' : '0'
  travelOverlay.style.pointerEvents = on ? 'auto' : 'none'
}
const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

/** Dispose the current system and make `next` (null: the Solar System) the one loaded. */
function swapSystem(next: SystemScene | null): void {
  // Tear down the system you're leaving: labels, scene graph, GPU memory.
  labels.remove(new Set(sys.bodies.map((b) => b.id)))
  scene.remove(sys.group)
  sys.dispose()
  hoveredId = null
  sys = next ?? new SolarSystem(loader, trueScale, visualScale, renderer.capabilities.getMaxAnisotropy())
  scene.add(sys.group)
  sys.setBeltCount(quality.beltCount)
  sys.setSunBoost(composer !== null)
  setTargetBodies(sys.bodies)
  labels.add(sys.labelSources())
  buildBodyMenu()
  skyGuide.setOrigin(sys.id)
  positions = sys.computePositions(clock.jd, {})
}
interface TravelOpts {
  /** Body to land on (a shared link); otherwise show the system, then glide in. */
  focusId?: string | null
  /** Opening from a link: no fade-out first, the overlay is already up. */
  fromUrl?: boolean
}
const warp = new WarpEffect()
/** Unit direction (ecliptic) of the jump in progress, for the vanishing point. */
let warpDir: { x: number; y: number; z: number } | null = null

/** Land in the system just swapped in: a shared link's body, or the overview. */
function arrive(focusLink: string | null, viewFrom?: { x: number; y: number; z: number }): void {
  const focusId = focusLink && isTarget(focusLink) ? focusLink : null
  if (focusId) {
    // A shared link: land straight on the body, in the linked scale mode.
    blend = targetBlend = readScaleParam() ? 1 : 0
    flyTo(focusId, { instant: true })
  } else {
    // Arrive on the whole system, then glide in like the opening.
    blend = targetBlend = 1
    introTargetId = sys.defaultFocusId
    introRunning = true
    flyTo(sys.primaryId, { instant: true, fromIntro: true, dir: viewFrom })
    void rig.controls.dollyTo(systemFrameDistance(), false)
  }
  scaleBtn.textContent = targetBlend > 0.5 ? 'True scale' : 'Overview'
  layoutToolbar()
}

async function travelTo(id: string, opts: TravelOpts = {}): Promise<void> {
  if (travelling || id === sys.id) return
  if (id !== HOME_SYSTEM && !isExoSystem(id)) return
  travelling = true
  let tornDown = false
  cancelIntro()
  skyGuide.closeCard()
  const fromHere = skyFrom(sys.id).find((v) => v.entry.id === id)
  const entry = SKY_CATALOG.find((e) => e.id === id)
  const name = id === HOME_SYSTEM ? 'the Solar System' : (entry?.name ?? id)
  const shortName = id === HOME_SYSTEM ? 'Solar System' : (entry?.name ?? id)
  // The light-speed jump, unless this is a link opening or the OS asks for less motion.
  const jump = !opts.fromUrl && !prefersReducedMotion() && fromHere !== undefined
  const defP = id === HOME_SYSTEM ? Promise.resolve(null) : loadSystem(id)
  defP.catch(() => {}) // handled below; don't report it as unhandled while the jump runs
  try {
    if (jump) {
      const d = fromHere.dir
      warpDir = d
      const legs = warp.begin(shortName, fromHere.distanceLy)
      // Turn to face the destination, backing off a little so the body you're
      // leaving doesn't fill the view.
      const D = Math.min(rig.controls.maxDistance, rig.destinationDistance * 2.5)
      void rig.controls.setLookAt(-d.x * D, -d.y * D, -d.z * D, 0, 0, 0, true)
      rig.controls.normalizeRotations()
      const [def] = await Promise.all([defP, legs.atSwap])
      tornDown = true
      swapSystem(def ? new ExoSystem(def, trueScale) : null)
      // Arrive looking the way you flew, the new star dead ahead, and close in
      // on it as the streaks slow down.
      arrive(null, { x: -d.x, y: -d.y, z: -d.z })
      void rig.controls.dollyTo(systemFrameDistance() * 4, false)
      void rig.controls.dollyTo(systemFrameDistance(), true)
      tick(0)
      warp.release()
      await legs.done
      warpDir = null
      // Unless you took the camera over (pinch, ⌘ +/−) as it slowed down.
      if (introRunning) startIntroTimer(900)
    } else {
      setTravelOverlay(true, `Travelling to ${name}`, fromHere ? `${formatLy(fromHere.distanceLy).replace(/ ly$/, ' light-years')}` : '', opts.fromUrl)
      const [def] = await Promise.all([defP, wait(opts.fromUrl ? 0 : 480)])
      tornDown = true
      swapSystem(def ? new ExoSystem(def, trueScale) : null)
      arrive(opts.focusId ?? null)
      if (introRunning) startIntroTimer(1600)
      tick(0) // place the new system before the overlay lifts
    }
  } catch (err) {
    console.warn('could not load star system', id, err)
    warp.cancel()
    warpDir = null
    // Instant: the jump's canvas is gone, and a fade would flash the half-turned scene.
    setTravelOverlay(true, `Couldn't reach ${name}`, 'Check your connection and try again.', true)
    // Failed after the old system was gone: go home rather than leave an empty scene.
    if (tornDown && sys.id !== HOME_SYSTEM) {
      try {
        swapSystem(null)
        blend = targetBlend = 0
        flyTo(sys.defaultFocusId, { instant: true })
      } catch (e2) {
        console.error('could not rebuild the Solar System', e2)
      }
    }
    await wait(1600)
  } finally {
    rig.camera.fov = BASE_FOV
    rig.camera.updateProjectionMatrix()
    setTravelOverlay(false)
    travelling = false
    urlHeldForLink = false
    // Not syncUrl(): it waits out the arrival glide, but a reload mid-glide
    // must still land in this system.
    writeState(introRunning ? introTargetId : focus.targetId, clock.playing ? null : jdToIso(), targetBlend > 0.5 && !introRunning, sysUrlId())
  }
}

const skyGuide = new SkyGuide({ onTravel: (id) => void travelTo(id), occluders: () => sys.pickTargets() })
skyGuide.setOrigin(sys.id)
addLayer(skyGuide)
showMenu.register('Sky guide', 'sky-guide', () => skyGuide.visible, (on) => skyGuide.setVisible(on), {
  shortcut: 'g',
  title: 'Mark nearby star systems you can travel to, and galaxies and nebulae you can only look at',
})
addHelpLine(
  {
    id: 'sky-guide',
    html:
      '<span style="color:#5eead4">●</span> Teal marks — star systems you can travel to; ' +
      '<span style="color:#8d93ab">◌</span> dashed grey — too far to visit (<code>G</code> toggles)',
  },
  'fly',
)
if (linkedSystem) {
  setTravelOverlay(true, '', '', true)
  void travelTo(linkedSystem, { focusId: requested, fromUrl: true })
}

// --- loop ---
const _warpV = new THREE.Vector3()
const timer = new THREE.Timer()
let frame = 0

// One FrameState, refilled every frame (no per-frame allocation) and passed to
// every layer. Layers read it in update()/updateUi() and must not keep it.
const frameState: FrameState = {
  dt: 0,
  jd: clock.jd,
  positions,
  focusAu: focus.focusAu,
  focusId: focus.targetId,
  blend,
  targetBlend,
  camera: rig.camera,
  rigDistance: rig.distance,
  introRunning,
  travelFx: 0,
  narrow: narrow.matches,
  quality,
  labels: placedLabels,
}

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
  positions = sys.computePositions(clock.jd, positions)
  const focusAu = focus.update(positions, dt)

  blend = smoothDamp(blend, targetBlend, blendVel, 0.5, dt)
  if (Math.abs(blend - targetBlend) < 5e-4) {
    blend = targetBlend
    blendVel.value = 0
  }

  sys.place(positions, focusAu, blend)
  sys.rotate(clock.jd, positions)

  // Keep the focused body framed as its render radius changes during a scale blend.
  const fr = targetRenderRadius(focus.targetId, blend)
  if (fr !== prevFr) {
    if (prevFr > 0) rig.scaleDistance(fr / prevFr)
    rig.setClip(fr)
    // The zoom floor must track the blended radius too, or after a scale toggle
    // you can dolly inside the surface (or get locked far out).
    rig.controls.minDistance = fr * 1.02
    prevFr = fr
  }

  if (hoverPending) {
    const id = pickBody(hoverNdc, rig.camera, pickTargets(), window.innerHeight)
    if (id !== hoveredId) {
      hoveredId = id
      sys.setHighlight(id)
      el.style.cursor = id ? 'pointer' : 'grab'
    }
    hoverPending = false
  }

  if (introToTrueScale && !focus.flying && rig.controls.currentAction === 0 && !rig.controls.active) {
    introToTrueScale = false
    introSettle = true
    targetBlend = 0
    scaleBtn.textContent = 'Overview'
  }
  if (introSettle && blend === 0) {
    const t = targetDef(focus.targetId)
    void rig.controls.dollyTo(rig.frameDistance(targetRenderRadius(t.id, 0), t.frameKind), true)
    endIntro() // shows the hint; the URL stays bare so a reload replays the glide
  }

  if (pendingSystemFrame && blend === 1 && !focus.flying) {
    pendingSystemFrame = false
    void rig.controls.dollyTo(systemFrameDistance(), true)
  }

  rig.update(dt)

  // The light-speed jump: streaks from where the destination is on screen,
  // and a wider view at speed.
  let travelFx = 0
  if (warp.active) {
    let vp: { x: number; y: number } | null = null
    if (warpDir) {
      const cp = rig.camera.position
      _warpV.set(cp.x + warpDir.x * 1000, cp.y + warpDir.y * 1000, cp.z + warpDir.z * 1000).project(rig.camera)
      if (_warpV.z < 1 && Math.abs(_warpV.x) < 1.5 && Math.abs(_warpV.y) < 1.5) {
        vp = { x: (_warpV.x * 0.5 + 0.5) * window.innerWidth, y: (-_warpV.y * 0.5 + 0.5) * window.innerHeight }
      }
    }
    const w = warp.update(dt, vp)
    travelFx = w.speed
    const fov = BASE_FOV + w.fovKick
    if (rig.camera.fov !== fov) {
      rig.camera.fov = fov
      rig.camera.updateProjectionMatrix()
    }
  }

  // Zooming far out at true scale used to show nothing (every body sub-pixel in
  // an empty starfield) — past ~6 render units (~6 AU of orbit distance) the
  // user clearly wants the system view, so engage the overview automatically.
  // Wait for the blend to settle: mid-way back from the overview the camera is
  // still far out, which would otherwise flip straight back to the overview.
  if (targetBlend === 0 && blend === 0 && !focus.flying && !travelling && rig.distance > 6) {
    targetBlend = 1
    scaleBtn.textContent = 'True scale'
    syncUrl()
  }

  sky.position.copy(rig.camera.position)
  if (starField) starField.position.copy(rig.camera.position)

  // Layers run after the bodies are placed AND the camera has moved, so they
  // see the final camera and distance, and before the labels, so a label on a
  // layer's object is projected where that object is drawn this frame.
  const f = frameState
  f.dt = dt
  f.jd = clock.jd
  f.positions = positions
  f.focusAu = focusAu
  f.focusId = focus.targetId
  f.blend = blend
  f.targetBlend = targetBlend
  f.rigDistance = rig.distance
  f.introRunning = introRunning
  f.travelFx = travelFx
  f.narrow = narrow.matches
  f.quality = quality
  f.labels = placedLabels // from the last label update (every other frame)
  for (const l of layers) l.update(f)

  if (frame % 2 === 0) {
    placedLabels = labels.update(rig.camera, window.innerWidth, window.innerHeight, focus.targetId, hoveredId)
  }

  // Asteroid-belt rocks are drawn far larger than real asteroids so they show
  // up from afar; in a planet close-up they read as debris right beside it.
  // Fade them in only once the camera is pulled back (true scale: units = AU).
  sys.setBeltFade(THREE.MathUtils.smoothstep(rig.distance, 0.05, 0.5))

  // First visit only: if the default tier can't hold ~25fps over the first
  // seconds, quietly drop to Low (not persisted, so a faster session retries).
  if (autoTierGuard && frame > 30) {
    if (frame > 600) autoTierGuard = null
    else if (autoTierGuard.push(dt * 1000)) {
      autoTierGuard = null
      if (quality.tier !== 'performance') applyQuality('performance', false)
    }
  }

  msEma += (dt * 1000 - msEma) * 0.1
  fps = 1000 / msEma
  // DOM writes are throttled — a per-frame text swap costs layout work.
  if (++frame % 12 === 0) {
    updateStats()
    updateZoomPill()
    timeBar.refresh()
    for (const l of layers) l.updateUi?.(frameState)
  }

  draw()
}

// setAnimationLoop passes the rAF timestamp as the first argument — never hand it
// tick() directly or it would be misread as a dt override.
const loop = (): void => tick()
renderer.setAnimationLoop(loop)

if (import.meta.env.DEV) {
  ;(window as unknown as { __orrery: unknown }).__orrery = {
    rig,
    get sys() {
      return sys
    },
    travelTo,
    skyGuide,
    focus,
    clock,
    renderer,
    scene,
    tick,
    flyTo,
    arrivalDir,
    showMenu,
    layers,
    addLayer,
    get placedLabels() {
      return placedLabels
    },
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
      const stars = starField
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
      r.push(measure('belt-off', () => sys.setBeltVisible(false), () => sys.setBeltVisible(true)))
      r.push(measure('sky-off', () => (sky.visible = false), () => (sky.visible = true)))
      if (stars) r.push(measure('stars-off', () => (stars.visible = false), () => (stars.visible = true)))
      r.push(measure('bodies-off', () => (sys.group.visible = false), () => (sys.group.visible = true)))
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
