import { describe, it, expect } from 'vitest'
import * as THREE from 'three'
import { DEG2RAD } from '../config/constants'

// The scene's orientation contract: world frame is ecliptic-J2000 with Z =
// ecliptic north; a body group is rotated Rx(π/2 + tilt) so the sphere's local
// +Y spin pole stands up to world Z (zero tilt) and leans by the obliquity.
// These tests pin that contract — the audit found the previous code left every
// pole lying IN the ecliptic plane (90° wrong).

const poleFor = (tiltDeg: number): THREE.Vector3 => {
  const g = new THREE.Group()
  g.rotation.x = Math.PI / 2 + tiltDeg * DEG2RAD
  const pole = new THREE.Vector3(0, 1, 0) // local spin axis
  return pole.applyQuaternion(g.quaternion)
}

describe('body orientation', () => {
  it('a zero-tilt body’s pole points at ecliptic north (world +Z)', () => {
    const p = poleFor(0)
    expect(p.x).toBeCloseTo(0, 10)
    expect(p.y).toBeCloseTo(0, 10)
    expect(p.z).toBeCloseTo(1, 10)
  })

  it('the pole leans away from ecliptic north by exactly the obliquity', () => {
    for (const tilt of [23.44, 26.73, 97.77, 177.36]) {
      const p = poleFor(tilt)
      const angleFromNorth = Math.acos(Math.max(-1, Math.min(1, p.z))) / DEG2RAD
      expect(angleFromNorth).toBeCloseTo(tilt, 6)
    }
  })

  it('a >90° obliquity flips the pole below the ecliptic (retrograde encoding)', () => {
    expect(poleFor(177.36).z).toBeLessThan(0)
    expect(poleFor(97.77).z).toBeLessThan(0)
  })

  it('the equatorial (ring) plane stays perpendicular to the pole', () => {
    const g = new THREE.Group()
    g.rotation.x = Math.PI / 2 + 26.73 * DEG2RAD // Saturn
    // Ring lies in the local XZ plane (ring mesh is rotated x=-π/2 from XY).
    const inPlane1 = new THREE.Vector3(1, 0, 0).applyQuaternion(g.quaternion)
    const inPlane2 = new THREE.Vector3(0, 0, 1).applyQuaternion(g.quaternion)
    const pole = new THREE.Vector3(0, 1, 0).applyQuaternion(g.quaternion)
    expect(Math.abs(inPlane1.dot(pole))).toBeLessThan(1e-10)
    expect(Math.abs(inPlane2.dot(pole))).toBeLessThan(1e-10)
  })
})
