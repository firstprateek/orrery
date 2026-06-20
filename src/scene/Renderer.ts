import * as THREE from 'three'

/**
 * The WebGL2 renderer for Orrery.
 * - logarithmicDepthBuffer: mandatory for the ~10-orders-of-magnitude depth range.
 * - DPR capped at 1.5: log-depth disables early-Z, so fill rate (pixel count) is
 *   the dominant cost — the first lever for the 120fps budget.
 * - ACES tone mapping + sRGB output: the HDR look the Sun/atmospheres rely on.
 * (antialias stays on for M1; it becomes SMAA-in-post once the bloom composer
 * lands in M4, since MSAA does nothing through a render target.)
 */
export function createRenderer(): THREE.WebGLRenderer {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    logarithmicDepthBuffer: true,
    powerPreference: 'high-performance',
    stencil: false,
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.0
  renderer.outputColorSpace = THREE.SRGBColorSpace
  return renderer
}
