import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import type { QualitySettings } from './quality'

// HDR post pipeline. The scene renders into a HalfFloat target (linear, so the
// Sun's >1 emissive survives) → UnrealBloomPass (selective Sun glow, run at the
// tier's bloom resolution) → OutputPass (ACES + sRGB at the canvas). MSAA on the
// target gives AA. All cost knobs come from the quality tier; switching tiers
// disposes and recreates the composer.

export interface OrreryComposer {
  readonly composer: EffectComposer
  readonly bloom: UnrealBloomPass
  setSize(w: number, h: number): void
  render(): void
  dispose(): void
}

export function createComposer(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.Camera,
  q: QualitySettings,
): OrreryComposer {
  const size = renderer.getSize(new THREE.Vector2())
  const target = new THREE.WebGLRenderTarget(size.x, size.y, {
    type: THREE.HalfFloatType,
    samples: q.msaaSamples,
  })
  const composer = new EffectComposer(renderer, target)
  composer.setPixelRatio(renderer.getPixelRatio())

  composer.addPass(new RenderPass(scene, camera))
  const bloom = new UnrealBloomPass(
    new THREE.Vector2(size.x * q.bloomScale, size.y * q.bloomScale),
    0.7, // strength
    0.5, // radius
    0.85, // luminance threshold — only the HDR Sun crosses it
  )
  composer.addPass(bloom)
  composer.addPass(new OutputPass())

  return {
    composer,
    bloom,
    setSize(w, h) {
      composer.setSize(w, h)
      bloom.setSize(w * q.bloomScale, h * q.bloomScale)
    },
    render() {
      composer.render()
    },
    dispose() {
      composer.dispose()
    },
  }
}
