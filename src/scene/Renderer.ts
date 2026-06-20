import * as THREE from 'three'

/**
 * The WebGL2 renderer for Orrery. The logarithmic depth buffer is the
 * non-negotiable bit: it lets near moons and far planets z-sort correctly across
 * the ~10 orders of magnitude between a 1 km surface and a 30 AU orbit.
 */
export function createRenderer(): THREE.WebGLRenderer {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    logarithmicDepthBuffer: true,
    powerPreference: 'high-performance',
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)
  return renderer
}
