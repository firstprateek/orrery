import * as THREE from 'three'
import type { LabelSource } from '../scene/FrameState'

// Custom projected-DOM labels (not CSS2DRenderer): a fixed pool of <div>s moved
// with translate3d (GPU-composited, no layout thrash). Decluttered each update
// by priority + angular size + screen-space collision, throttled by the caller.
//
// Labels are a registry of sources (bodies today; spacecraft, belt regions and
// others add theirs), so new layers add entries instead of editing this loop.
// update() returns what it placed so later layers (the sky guide) can keep
// their own labels out of the way.

const OFFHIDE = 'translate3d(-9999px,-9999px,0)'
const _v = new THREE.Vector3()

/**
 * Collision box around a label's anchor, in CSS px: two labels collide when
 * their anchors are closer than this on both axes. Sized for a typical name.
 */
export const LABEL_BOX = { w: 92, h: 15 } as const

/** A label that update() showed, at its anchor (the projected body centre). */
export interface PlacedLabel {
  id: string
  x: number
  y: number
}

const STYLE_CSS: Record<LabelSource['style'], string> = {
  body: 'color:#e7ecff;font:12px system-ui,sans-serif;text-shadow:0 1px 2px #000;',
}

interface Entry {
  src: LabelSource
  el: HTMLDivElement
}

/** Candidate for placement: one on-screen, not-too-small label. */
export interface LabelCand {
  id: string
  x: number
  y: number
  tier: number
  /** Camera distance, the tie-break within a tier (nearer wins). */
  dist: number
  /** Focused or hovered: always shown, whatever it overlaps. */
  pinned: boolean
}

/** True when a label anchored at (x, y) would overlap one already placed. */
export function collidesWithPlaced(placed: readonly { x: number; y: number }[], x: number, y: number): boolean {
  return placed.some((q) => Math.abs(q.x - x) < LABEL_BOX.w && Math.abs(q.y - y) < LABEL_BOX.h)
}

/**
 * Pure declutter: lower tier first, then nearer first; a label that collides
 * with one already placed is dropped unless pinned. Returns the shown labels in
 * placement order. Sorts `cands` in place.
 */
export function declutterLabels<C extends LabelCand>(cands: C[]): C[] {
  cands.sort((a, b) => a.tier - b.tier || a.dist - b.dist)
  const shown: C[] = []
  for (const c of cands) {
    if (!c.pinned && collidesWithPlaced(shown, c.x, c.y)) continue
    shown.push(c)
  }
  return shown
}

interface Cand extends LabelCand {
  e: Entry
}

export class Labels {
  private readonly entries: Entry[] = []
  private readonly container: HTMLDivElement

  constructor(private readonly onSelect?: (id: string) => void) {
    this.container = document.createElement('div')
    this.container.style.cssText = 'position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:5'
    document.body.appendChild(this.container)
  }

  /** Register label sources. Order matters only as the final tie-break. */
  add(sources: Iterable<LabelSource>): void {
    for (const src of sources) {
      const el = document.createElement('div')
      el.textContent = src.text
      // Labels are often the only visible trace of a body at true scale, so
      // interactive ones are real click targets (padding grows the touch target
      // beyond the text).
      el.style.cssText =
        'position:absolute;left:0;top:0;transform:' + OFFHIDE + ';' +
        STYLE_CSS[src.style] +
        'white-space:nowrap;will-change:transform;' +
        (src.interactive ? 'pointer-events:auto;cursor:pointer;' : 'pointer-events:none;') +
        'padding:6px'
      const onSelect = this.onSelect
      if (src.interactive && onSelect) {
        el.addEventListener('pointerup', (e) => {
          e.stopPropagation()
          onSelect(src.id)
        })
      }
      this.container.appendChild(el)
      this.entries.push({ src, el })
    }
  }

  /** Drop the labels with these ids (the bodies of a system you left). */
  remove(ids: ReadonlySet<string>): void {
    for (let i = this.entries.length - 1; i >= 0; i--) {
      const e = this.entries[i]
      if (!ids.has(e.src.id)) continue
      e.el.remove()
      this.entries.splice(i, 1)
    }
  }

  update(
    camera: THREE.PerspectiveCamera,
    w: number,
    h: number,
    focusId: string,
    hoveredId: string | null,
  ): PlacedLabel[] {
    const fovRad = (camera.fov * Math.PI) / 180
    const worldToPx = h / (2 * Math.tan(fovRad / 2))
    const cands: Cand[] = []

    for (const e of this.entries) {
      const src = e.src
      if (!src.visible()) {
        e.el.style.transform = OFFHIDE
        continue
      }
      const p = src.getPos()
      _v.copy(p).project(camera)
      const pinned = src.id === focusId || src.id === hoveredId
      if (_v.z > 1 || _v.z < -1) {
        e.el.style.transform = OFFHIDE
        continue
      }
      const dist = camera.position.distanceTo(p)
      const radPx = (src.getRadius() / dist) * worldToPx
      if (src.tier > 0 && radPx < 2 && !pinned) {
        e.el.style.transform = OFFHIDE
        continue
      }
      cands.push({ e, id: src.id, x: (_v.x * 0.5 + 0.5) * w, y: (-_v.y * 0.5 + 0.5) * h, tier: src.tier, dist, pinned })
    }

    const shown = declutterLabels(cands)
    const shownSet = new Set(shown)
    const placed: PlacedLabel[] = []
    for (const c of cands) {
      if (!shownSet.has(c)) {
        c.e.el.style.transform = OFFHIDE
        continue
      }
      placed.push({ id: c.id, x: c.x, y: c.y })
      // +2/-14 keeps the TEXT at the old +8/-8 spot after the 6px hit-padding.
      c.e.el.style.transform = `translate3d(${(c.x + 2).toFixed(1)}px,${(c.y - 14).toFixed(1)}px,0)`
      c.e.el.style.opacity = c.pinned ? '1' : '0.72'
      c.e.el.style.fontWeight = c.id === focusId ? '600' : '400'
    }
    return placed
  }
}
