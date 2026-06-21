import * as THREE from 'three'

/**
 * The WebGL2 renderer for Orrery.
 * - logarithmicDepthBuffer: mandatory for the ~10-orders-of-magnitude depth range.
 * - DPR capped at 1.5: log-depth disables early-Z, so fill rate (pixel count) is
 *   the dominant cost — the first lever for the 120fps budget.
 * - ACES tone mapping + sRGB output: applied by the bloom composer's OutputPass
 *   at the canvas (rendering to the composer's HalfFloat target stays linear, so
 *   the Sun's HDR emissive survives into bloom).
 * antialias is on for the Performance tier's direct-to-canvas path (cheap MSAA on
 * the default framebuffer — universally supported, unlike multisampled float
 * targets). The composer tiers render to a non-multisampled float target.
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
