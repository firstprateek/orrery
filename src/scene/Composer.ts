import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'

// HDR post pipeline. The scene renders into a multisampled HalfFloat target
// (linear, so the Sun's >1 emissive survives); UnrealBloomPass blooms only
// pixels above the luminance threshold (selective Sun glow); OutputPass applies
// ACES tone mapping + sRGB once, at the canvas. MSAA on the target gives AA
// without a separate SMAA pass.

export interface OrreryComposer {
  readonly composer: EffectComposer
  readonly bloom: UnrealBloomPass
  setSize(w: number, h: number): void
  render(): void
}

export function createComposer(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.Camera,
): OrreryComposer {
  const size = renderer.getSize(new THREE.Vector2())
  const target = new THREE.WebGLRenderTarget(size.x, size.y, {
    type: THREE.HalfFloatType,
    samples: 4,
  })
  const composer = new EffectComposer(renderer, target)
  composer.setPixelRatio(renderer.getPixelRatio())

  composer.addPass(new RenderPass(scene, camera))
  const bloom = new UnrealBloomPass(
    new THREE.Vector2(size.x, size.y),
    0.7, // strength
    0.5, // radius
    0.85, // luminance threshold — only the Sun (HDR) crosses it
  )
  composer.addPass(bloom)
  composer.addPass(new OutputPass())

  return {
    composer,
    bloom,
    setSize(w, h) {
      composer.setSize(w, h)
      bloom.setSize(w, h)
    },
    render() {
      composer.render()
    },
  }
}
