import { describe, it, expect } from 'vitest'
import * as THREE from 'three'
import { pickBody } from './Picker'
import type { SolarSystem } from './SolarSystem'

// pickBody only reads views[].group.position / mesh.scale.x / def.id, so a
// minimal structural stand-in exercises the real math without WebGL.

const fakeSolar = (bodies: { id: string; pos: [number, number, number]; radius: number }[]) =>
  ({
    views: bodies.map((b) => ({
      def: { id: b.id },
      group: { position: new THREE.Vector3(...b.pos) },
      mesh: { scale: new THREE.Vector3(b.radius, b.radius, b.radius) },
    })),
  }) as unknown as SolarSystem

const camera = new THREE.PerspectiveCamera(45, 16 / 9, 0.01, 1000)
camera.position.set(0, 0, 0)
camera.lookAt(0, 0, -1)
camera.updateMatrixWorld()

const CENTER = new THREE.Vector2(0, 0)
const H = 900

describe('pickBody', () => {
  it('picks the body under the cursor', () => {
    const solar = fakeSolar([{ id: 'earth', pos: [0, 0, -10], radius: 1 }])
    expect(pickBody(CENTER, camera, solar, H)).toBe('earth')
  })

  it('returns null when nothing is under the cursor', () => {
    const solar = fakeSolar([{ id: 'earth', pos: [8, 0, -10], radius: 1 }])
    expect(pickBody(CENTER, camera, solar, H)).toBeNull()
  })

  it('prefers the nearest of two overlapping bodies', () => {
    const solar = fakeSolar([
      { id: 'far', pos: [0, 0, -50], radius: 3 },
      { id: 'near', pos: [0, 0, -10], radius: 1 },
    ])
    expect(pickBody(CENTER, camera, solar, H)).toBe('near')
  })

  it('applies a screen-space floor so tiny-but-visible bodies stay pickable', () => {
    // Radius so small it subtends well under a pixel at this distance — the
    // geometric sphere would miss, the 8px pick disc must still catch it.
    const solar = fakeSolar([{ id: 'speck', pos: [0, 0, -100], radius: 1e-7 }])
    expect(pickBody(CENTER, camera, solar, H, 8)).toBe('speck')
  })

  it('a larger touch floor catches near-misses that a mouse floor rejects', () => {
    // Body offset from the cursor ray by ~15px at this distance.
    const worldPerPx = (2 * Math.tan((45 * Math.PI) / 360) * 100) / H
    const solar = fakeSolar([{ id: 'moon', pos: [15 * worldPerPx, 0, -100], radius: 1e-7 }])
    expect(pickBody(CENTER, camera, solar, H, 8)).toBeNull()
    expect(pickBody(CENTER, camera, solar, H, 22)).toBe('moon')
  })
})
