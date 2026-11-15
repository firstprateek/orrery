import { describe, it, expect } from 'vitest'
import * as THREE from 'three'
import { createSky } from './Sky'
import { equatorialToEcliptic, raDecToVec3 } from '../math/celestial'

// The celestial tests check the SKY_TEXTURE_TO_ECLIPTIC numbers; these check
// the step that hands them to three (Matrix4.set is row-major while three stores
// column-major, so a transposed set() would apply the inverse rotation and still
// pass every matrix test). They read the texel directions off the mesh's own
// geometry, so they also fail if the sphere's UV layout ever changes.

const DEG = Math.PI / 180
const stubLoader = { load: () => new THREE.Texture() } as unknown as THREE.TextureLoader

function eclFromRaDec(raDeg: number, decDeg: number): THREE.Vector3 {
  const v = equatorialToEcliptic(raDecToVec3(raDeg * DEG, decDeg * DEG, 1))
  return new THREE.Vector3(v.x, v.y, v.z)
}

/**
 * World direction of the mesh vertex whose uv is (u, 1 − t), t measured down the
 * image; u = null takes any vertex on that row (the poles, where three offsets u).
 */
function texelWorldDir(mesh: THREE.Mesh, u: number | null, t: number): THREE.Vector3 {
  const pos = mesh.geometry.getAttribute('position')
  const uv = mesh.geometry.getAttribute('uv')
  for (let i = 0; i < uv.count; i++) {
    if ((u === null || Math.abs(uv.getX(i) - u) < 1e-9) && Math.abs(uv.getY(i) - (1 - t)) < 1e-9) {
      return new THREE.Vector3(pos.getX(i), pos.getY(i), pos.getZ(i))
        .normalize()
        .applyQuaternion(mesh.quaternion)
    }
  }
  throw new Error(`no vertex at texel (${u}, ${t})`)
}

describe('createSky orientation', () => {
  const mesh = createSky(stubLoader)

  it('puts the image centre (the galactic centre) on Sgr A*', () => {
    const v = texelWorldDir(mesh, 0.5, 0.5)
    expect(v.angleTo(eclFromRaDec(266.4168, -29.0078)) / DEG).toBeLessThan(0.1)
  })

  it('puts the north galactic pole (bottom edge) on RA 192.86°, Dec +27.13°', () => {
    const v = texelWorldDir(mesh, null, 1)
    expect(v.angleTo(eclFromRaDec(192.859, 27.128)) / DEG).toBeLessThan(0.01)
  })

  it('keeps that orientation once main.ts moves the sphere onto the camera', () => {
    mesh.position.set(12, -340, 5)
    mesh.updateMatrixWorld(true)
    // Local (1, 0, 0) is the image centre: it must still point at Sgr A*.
    const world = new THREE.Vector3(1, 0, 0).transformDirection(mesh.matrixWorld)
    expect(world.angleTo(eclFromRaDec(266.4168, -29.0078)) / DEG).toBeLessThan(0.1)
  })
})
