import { describe, it, expect } from 'vitest'
import * as THREE from 'three'
import { pickBody } from './Picker'
import type { PickTarget } from './FrameState'

// pickBody works on plain {id, pos, r, visible} targets, so the real math runs
// without WebGL or a SolarSystem.

const targets = (bodies: { id: string; pos: [number, number, number]; radius: number; visible?: boolean }[]): PickTarget[] =>
  bodies.map((b) => ({ id: b.id, pos: new THREE.Vector3(...b.pos), r: b.radius, visible: b.visible ?? true }))

const camera = new THREE.PerspectiveCamera(45, 16 / 9, 0.01, 1000)
camera.position.set(0, 0, 0)
camera.lookAt(0, 0, -1)
camera.updateMatrixWorld()

const CENTER = new THREE.Vector2(0, 0)
const H = 900

describe('pickBody', () => {
  it('picks the body under the cursor', () => {
    const t = targets([{ id: 'earth', pos: [0, 0, -10], radius: 1 }])
    expect(pickBody(CENTER, camera, t, H)).toBe('earth')
  })

  it('returns null when nothing is under the cursor', () => {
    const t = targets([{ id: 'earth', pos: [8, 0, -10], radius: 1 }])
    expect(pickBody(CENTER, camera, t, H)).toBeNull()
  })

  it('prefers the nearest of two overlapping bodies', () => {
    const t = targets([
      { id: 'far', pos: [0, 0, -50], radius: 3 },
      { id: 'near', pos: [0, 0, -10], radius: 1 },
    ])
    expect(pickBody(CENTER, camera, t, H)).toBe('near')
  })

  it('applies a screen-space floor so tiny-but-visible bodies stay pickable', () => {
    // Radius so small it subtends well under a pixel at this distance — the
    // geometric sphere would miss, the 8px pick disc must still catch it.
    const t = targets([{ id: 'speck', pos: [0, 0, -100], radius: 1e-7 }])
    expect(pickBody(CENTER, camera, t, H, 8)).toBe('speck')
  })

  it('a larger touch floor catches near-misses that a mouse floor rejects', () => {
    // Body offset from the cursor ray by ~15px at this distance.
    const worldPerPx = (2 * Math.tan((45 * Math.PI) / 360) * 100) / H
    const t = targets([{ id: 'moon', pos: [15 * worldPerPx, 0, -100], radius: 1e-7 }])
    expect(pickBody(CENTER, camera, t, H, 8)).toBeNull()
    expect(pickBody(CENTER, camera, t, H, 22)).toBe('moon')
  })

  it('skips hidden targets, even when they are nearer', () => {
    const t = targets([
      { id: 'hidden', pos: [0, 0, -10], radius: 1, visible: false },
      { id: 'behind', pos: [0, 0, -50], radius: 3 },
    ])
    expect(pickBody(CENTER, camera, t, H)).toBe('behind')
    expect(pickBody(CENTER, camera, t.slice(0, 1), H)).toBeNull()
  })

  it('reads live getters, so targets can be allocated once', () => {
    const pos = new THREE.Vector3(8, 0, -10)
    const live: PickTarget = {
      id: 'mover',
      pos,
      get r() {
        return 1
      },
      get visible() {
        return true
      },
    }
    expect(pickBody(CENTER, camera, [live], H)).toBeNull()
    pos.set(0, 0, -10)
    expect(pickBody(CENTER, camera, [live], H)).toBe('mover')
  })
})
