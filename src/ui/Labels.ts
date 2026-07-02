import * as THREE from 'three'
import type { SolarSystem } from '../scene/SolarSystem'

// Custom projected-DOM labels (not CSS2DRenderer): a fixed pool of <div>s moved
// with translate3d (GPU-composited, no layout thrash). Decluttered each update
// by priority + angular size + screen-space collision, throttled by the caller.

const OFFHIDE = 'translate3d(-9999px,-9999px,0)'
const _v = new THREE.Vector3()

interface Entry {
  id: string
  el: HTMLDivElement
  tier: number
}

interface Cand {
  e: Entry
  x: number
  y: number
  tier: number
  dist: number
}

export class Labels {
  private readonly entries: Entry[] = []
  private readonly container: HTMLDivElement

  constructor(solar: SolarSystem, onSelect?: (id: string) => void) {
    this.container = document.createElement('div')
    this.container.style.cssText = 'position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:5'
    for (const view of solar.views) {
      const el = document.createElement('div')
      el.textContent = view.def.name
      // Labels are often the only visible trace of a body at true scale, so they
      // are real click targets (padding grows the touch target beyond the text).
      el.style.cssText =
        'position:absolute;left:0;top:0;transform:' + OFFHIDE +
        ';color:#e7ecff;font:12px system-ui,sans-serif;text-shadow:0 1px 2px #000;white-space:nowrap;will-change:transform;' +
        'pointer-events:auto;cursor:pointer;padding:6px'
      if (onSelect) {
        el.addEventListener('pointerup', (e) => {
          e.stopPropagation()
          onSelect(view.def.id)
        })
      }
      this.container.appendChild(el)
      const tier = view.def.type === 'moon' ? 1 : 0
      this.entries.push({ id: view.def.id, el, tier })
    }
    document.body.appendChild(this.container)
  }

  update(
    solar: SolarSystem,
    camera: THREE.PerspectiveCamera,
    w: number,
    h: number,
    focusId: string,
    hoveredId: string | null,
  ): void {
    const fovRad = (camera.fov * Math.PI) / 180
    const worldToPx = h / (2 * Math.tan(fovRad / 2))
    const cands: Cand[] = []

    for (const e of this.entries) {
      const view = solar.byId[e.id]
      const p = view.group.position
      _v.copy(p).project(camera)
      const pinned = e.id === focusId || e.id === hoveredId
      if (_v.z > 1 || _v.z < -1) {
        e.el.style.transform = OFFHIDE
        continue
      }
      const dist = camera.position.distanceTo(p)
      const radPx = (view.mesh.scale.x / dist) * worldToPx
      if (e.tier > 0 && radPx < 2 && !pinned) {
        e.el.style.transform = OFFHIDE
        continue
      }
      cands.push({ e, x: (_v.x * 0.5 + 0.5) * w, y: (-_v.y * 0.5 + 0.5) * h, tier: e.tier, dist })
    }

    cands.sort((a, b) => a.tier - b.tier || a.dist - b.dist)
    const placed: { x: number; y: number }[] = []
    for (const c of cands) {
      const pinned = c.e.id === focusId || c.e.id === hoveredId
      const collide = placed.some((q) => Math.abs(q.x - c.x) < 92 && Math.abs(q.y - c.y) < 15)
      if (collide && !pinned) {
        c.e.el.style.transform = OFFHIDE
        continue
      }
      placed.push({ x: c.x, y: c.y })
      // +2/-14 keeps the TEXT at the old +8/-8 spot after the 6px hit-padding.
      c.e.el.style.transform = `translate3d(${(c.x + 2).toFixed(1)}px,${(c.y - 14).toFixed(1)}px,0)`
      c.e.el.style.opacity = pinned ? '1' : '0.72'
      c.e.el.style.fontWeight = c.e.id === focusId ? '600' : '400'
    }
  }
}
