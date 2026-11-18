import * as THREE from 'three'
import { formatLy, HOME_SYSTEM, skyFrom, type SkyKind, type SkyView } from '../config/starCatalog'
import type { FrameState, PickTarget, SceneLayer } from './FrameState'

// The sky guide: markers on the sky for the star systems you can travel to and
// for landmarks you can only look at (galaxies, nebulae, famous stars), each
// with its distance from the system you are in. Two looks, so you can tell at
// a glance where you can go:
//
//   reachable  — a filled, glowing teal mark and a teal label; click to travel.
//   sky only   — a hollow, dashed grey mark and a grey italic label; click for
//                a card that explains what it is and that it is out of reach.
//
// The mark's shape says what it is (round: star or system, oval: galaxy,
// diamond: nebula or cluster, ring: black hole). Markers are projected DOM
// elements like the body labels, but sit under them and keep their text clear
// of the labels the body layer placed.

const ANCHOR_DIST = 5000 // render units: well inside the star sphere and the far plane
const TEXT_BOX = { w: 150, h: 16 }

const KIND_LABEL: Record<SkyKind, string> = {
  system: 'Star system',
  star: 'Star',
  galaxy: 'Galaxy',
  nebula: 'Nebula',
  cluster: 'Star cluster',
  blackhole: 'Supermassive black hole',
}

const REACH = '#5eead4'
const REACH_TEXT = '#9ff7e8'
const FAR = '#8d93ab'
const FAR_TEXT = '#a3a9c2'

/** CSS for a marker glyph: shape by kind, fill and stroke by reachability. */
export function glyphCss(kind: SkyKind, reachable: boolean): string {
  const shape =
    kind === 'galaxy'
      ? 'width:17px;height:7px;border-radius:50%;transform:rotate(-25deg);'
      : kind === 'nebula' || kind === 'cluster'
        ? 'width:8px;height:8px;border-radius:2px;transform:rotate(45deg);'
        : 'width:9px;height:9px;border-radius:50%;'
  if (reachable) {
    return (
      shape +
      `background:${REACH};box-shadow:0 0 0 3px rgba(94,234,212,0.22),0 0 12px rgba(94,234,212,0.75);`
    )
  }
  const fill = kind === 'blackhole' ? 'background:radial-gradient(circle,#05060a 40%,transparent 42%);' : 'background:transparent;'
  return shape + fill + `border:1.5px dashed ${FAR};box-sizing:border-box;`
}

/** Marker label: name and distance, with "home" for the Sun seen from elsewhere. */
export function markerText(v: SkyView): string {
  const name = v.entry.id === HOME_SYSTEM ? 'Sun (home)' : v.entry.name
  return `${name} · ${formatLy(v.distanceLy)}`
}

interface Marker {
  view: SkyView
  el: HTMLButtonElement
  text: HTMLSpanElement
  x: number
  y: number
  onScreen: boolean
  /** Glyph centre from the element's top-left, px. */
  cx: number
}

export interface SkyGuideOptions {
  /** Travel into a reachable system. */
  onTravel(systemId: string): void
  /** Bodies that hide a marker when their disc covers its direction. */
  occluders(): Iterable<PickTarget>
}

/** True when the ray from `o` along unit `d` passes through a visible sphere ahead of it. */
export function rayBlocked(
  o: { x: number; y: number; z: number },
  d: { x: number; y: number; z: number },
  spheres: Iterable<PickTarget>,
): boolean {
  for (const s of spheres) {
    if (!s.visible) continue
    const px = s.pos.x - o.x
    const py = s.pos.y - o.y
    const pz = s.pos.z - o.z
    const t = px * d.x + py * d.y + pz * d.z
    if (t <= 0) continue
    const qx = px - t * d.x
    const qy = py - t * d.y
    const qz = pz - t * d.z
    if (qx * qx + qy * qy + qz * qz < s.r * s.r) return true
  }
  return false
}

const _v = new THREE.Vector3()

export class SkyGuide implements SceneLayer {
  private readonly container: HTMLDivElement
  private readonly card: HTMLDivElement
  private markers: Marker[] = []
  private on = true
  private frame = 0
  private cardFor: string | null = null
  /** The marker whose card is open: focus returns there when it closes. */
  private cardAnchor: HTMLElement | null = null

  constructor(private readonly opts: SkyGuideOptions) {
    this.container = document.createElement('div')
    // Under the body labels (z 5), over the canvas.
    this.container.style.cssText = 'position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:4'
    document.body.appendChild(this.container)

    this.card = document.createElement('div')
    this.card.setAttribute('role', 'dialog')
    this.card.style.cssText =
      'position:fixed;display:none;z-index:22;width:min(300px,calc(100vw - 32px));box-sizing:border-box;' +
      'background:rgba(12,14,22,0.94);border:1px solid #2a2f44;border-radius:12px;padding:12px 14px;' +
      'color:#cdd6ff;font:13px/1.5 system-ui;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)'
    document.body.appendChild(this.card)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.cardFor) this.closeCard(true)
    })
    // A press anywhere else (dragging the view, another marker) closes the
    // card: it is placed by its marker and would otherwise float off it.
    document.addEventListener(
      'pointerdown',
      (e) => {
        const t = e.target as Node | null
        if (this.cardFor && t && !this.card.contains(t)) this.closeCard()
      },
      true,
    )
  }

  get visible(): boolean {
    return this.on
  }

  setVisible(on: boolean): void {
    this.on = on
    this.container.style.display = on ? '' : 'none'
    if (!on) this.closeCard()
  }

  /** Rebuild the markers as seen from system `fromId`. */
  setOrigin(fromId: string): void {
    this.closeCard()
    this.container.replaceChildren()
    this.markers = skyFrom(fromId).map((view) => this.makeMarker(view))
    // Reachable first, then nearest: the order labels win collisions in.
    this.markers.sort(
      (a, b) =>
        Number(b.view.entry.reachable) - Number(a.view.entry.reachable) || a.view.distanceLy - b.view.distanceLy,
    )
  }

  private makeMarker(view: SkyView): Marker {
    const { entry } = view
    const el = document.createElement('button')
    el.type = 'button'
    el.className = entry.reachable ? 'sky-mark sky-reach' : 'sky-mark sky-far'
    el.style.cssText =
      'position:absolute;left:0;top:0;display:flex;align-items:center;gap:7px;padding:6px;margin:0;border:0;background:none;' +
      'pointer-events:auto;cursor:pointer;white-space:nowrap;visibility:hidden;will-change:transform;' +
      'font:12px system-ui,sans-serif;text-shadow:0 1px 2px #000;' +
      (entry.reachable ? `color:${REACH_TEXT};font-weight:600;` : `color:${FAR_TEXT};font-style:italic;opacity:0.85;`)
    const glyph = document.createElement('span')
    glyph.style.cssText = 'display:inline-block;flex:none;' + glyphCss(entry.kind, entry.reachable)
    const text = document.createElement('span')
    text.textContent = markerText(view)
    el.append(glyph, text)
    el.title = entry.reachable
      ? `${entry.id === HOME_SYSTEM ? 'Sun' : entry.name}: you can travel here. Click for details.`
      : `${entry.name}: too far to visit. Click for details.`
    el.setAttribute(
      'aria-label',
      entry.reachable
        ? `${markerText(view)}. You can travel here. Show details.`
        : `${markerText(view)}. Too far to visit. Show details.`,
    )
    el.addEventListener('click', (e) => {
      e.stopPropagation()
      this.openCard(view, el)
    })
    // The canvas treats a press as the start of a drag: keep it out.
    el.addEventListener('pointerdown', (e) => e.stopPropagation())
    this.container.appendChild(el)
    // 6px padding + half the glyph's width; rows are ~27px tall.
    const cx = 6 + (entry.kind === 'galaxy' ? 8.5 : 4.5)
    return { view, el, text, x: 0, y: 0, onScreen: false, cx }
  }

  private openCard(view: SkyView, anchor: HTMLElement): void {
    const { entry } = view
    this.cardFor = entry.id
    this.cardAnchor = anchor
    const c = this.card
    c.replaceChildren()

    const head = document.createElement('div')
    head.style.cssText = 'display:flex;align-items:center;gap:9px;margin-bottom:4px'
    const glyph = document.createElement('span')
    glyph.style.cssText = 'display:inline-block;flex:none;' + glyphCss(entry.kind, entry.reachable)
    const title = document.createElement('b')
    title.textContent = entry.id === HOME_SYSTEM ? 'Sun (home)' : entry.name
    title.style.cssText = 'font-size:15px;flex:1'
    const close = document.createElement('button')
    close.type = 'button'
    close.textContent = '×'
    close.setAttribute('aria-label', 'Close')
    close.style.cssText = 'background:none;border:0;color:#8892b8;font:20px system-ui;cursor:pointer;padding:0 4px;line-height:1'
    close.addEventListener('click', () => this.closeCard(true))
    head.append(glyph, title, close)

    const meta = document.createElement('div')
    meta.style.cssText = 'color:#8892b8;font-size:12px;margin-bottom:6px'
    meta.textContent = `${KIND_LABEL[entry.kind]} · ${formatLy(view.distanceLy).replace(/ ly$/, ' light-years')} away`

    const blurb = document.createElement('div')
    blurb.textContent = entry.blurb

    const foot = document.createElement('div')
    foot.style.cssText = 'margin-top:10px'
    if (entry.reachable) {
      const go = document.createElement('button')
      go.type = 'button'
      go.textContent = entry.id === HOME_SYSTEM ? 'Return home →' : 'Travel there →'
      go.style.cssText =
        `background:${REACH};color:#04201b;border:0;border-radius:8px;padding:8px 14px;font:600 15px system-ui;cursor:pointer;width:100%`
      go.addEventListener('click', () => {
        this.closeCard()
        this.opts.onTravel(entry.id)
      })
      foot.appendChild(go)
    } else {
      const note = document.createElement('div')
      note.style.cssText = `border:1px dashed ${FAR};border-radius:8px;padding:7px 10px;color:${FAR_TEXT};font-size:12px;text-align:center`
      note.textContent = `Too far to visit — its light set off ${lightYearsAgo(view.distanceLy)} ago.`
      foot.appendChild(note)
    }
    c.append(head, meta, blurb, foot)

    c.style.display = 'block'
    const r = anchor.getBoundingClientRect()
    const cw = c.offsetWidth
    const ch = c.offsetHeight
    const left = Math.min(Math.max(16, r.left), window.innerWidth - cw - 16)
    const below = r.bottom + 8
    const top = below + ch < window.innerHeight - 16 ? below : Math.max(16, r.top - ch - 8)
    c.style.left = `${left}px`
    c.style.top = `${top}px`
    ;(entry.reachable ? (foot.firstChild as HTMLElement) : close).focus({ preventScroll: true })
  }

  /** Close the card; `restoreFocus` returns keyboard focus to its marker. */
  closeCard(restoreFocus = false): void {
    if (!this.cardFor) return
    this.cardFor = null
    this.card.style.display = 'none'
    if (restoreFocus && this.cardAnchor?.isConnected) this.cardAnchor.focus({ preventScroll: true })
    this.cardAnchor = null
  }

  update(f: FrameState): void {
    if (!this.on) return
    // Hidden during the opening glide and while jumping between systems.
    const hide = f.introRunning || f.travelFx > 0
    this.container.style.opacity = hide ? '0' : '1'
    if (hide) return
    // Every other frame, like the body labels.
    if (++this.frame % 2 !== 0) return
    const cam = f.camera
    const w = window.innerWidth
    const h = window.innerHeight
    const placed: { x: number; y: number }[] = []
    const bodyLabels = f.labels
    for (const m of this.markers) {
      const d = m.view.dir
      _v.set(cam.position.x + d.x * ANCHOR_DIST, cam.position.y + d.y * ANCHOR_DIST, cam.position.z + d.z * ANCHOR_DIST)
      _v.project(cam)
      const onScreen =
        _v.z < 1 && _v.z > -1 && Math.abs(_v.x) < 1.05 && Math.abs(_v.y) < 1.05 &&
        !rayBlocked(cam.position, d, this.opts.occluders())
      if (onScreen !== m.onScreen) {
        m.onScreen = onScreen
        m.el.style.visibility = onScreen ? 'visible' : 'hidden'
      }
      if (!onScreen) continue
      m.x = (_v.x * 0.5 + 0.5) * w
      m.y = (-_v.y * 0.5 + 0.5) * h
      // The glyph always shows; the name hides where it would overlap a body
      // label or a marker placed before it (reachable ones go first).
      const clash =
        placed.some((p) => Math.abs(p.x - m.x) < TEXT_BOX.w && Math.abs(p.y - m.y) < TEXT_BOX.h) ||
        bodyLabels.some((p) => m.x - p.x < 96 && p.x - m.x < TEXT_BOX.w && Math.abs(p.y - m.y) < TEXT_BOX.h)
      m.text.style.display = clash ? 'none' : ''
      if (!clash) placed.push({ x: m.x, y: m.y })
      // Centre the glyph on the anchor.
      m.el.style.transform = `translate3d(${(m.x - m.cx).toFixed(1)}px,${(m.y - 13.5).toFixed(1)}px,0)`
    }
  }
}

function lightYearsAgo(ly: number): string {
  if (ly >= 1e6) return `${formatLy(ly).replace(' ly', '')} years`
  if (ly >= 1000) return `${Math.round(ly).toLocaleString('en-US')} years`
  return `${ly < 10 ? ly.toFixed(1) : Math.round(ly)} years`
}
