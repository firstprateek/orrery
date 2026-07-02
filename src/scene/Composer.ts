import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js'
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
  const output = new OutputPass()
  composer.addPass(output)

  // Composer tiers get no default-framebuffer MSAA (the scene renders into the
  // float target), so anti-alias in post: FXAA on the final tone-mapped sRGB
  // image — cheap (~single texture pass) and universally supported.
  const fxaa = new ShaderPass(FXAAShader)
  const setFxaaRes = (w: number, h: number) => {
    const dpr = renderer.getPixelRatio()
    fxaa.material.uniforms['resolution'].value.set(1 / (w * dpr), 1 / (h * dpr))
  }
  setFxaaRes(size.x, size.y)
  composer.addPass(fxaa)

  return {
    composer,
    bloom,
    setSize(w, h) {
      composer.setSize(w, h)
      bloom.setSize(w * q.bloomScale, h * q.bloomScale)
      setFxaaRes(w, h)
    },
    render() {
      composer.render()
    },
    dispose() {
      // EffectComposer.dispose() does NOT dispose added passes; the bloom pass
      // alone owns ~11 render targets — leak on every tier switch otherwise.
      bloom.dispose()
      output.dispose()
      fxaa.dispose()
      composer.dispose()
    },
  }
}

/**
 * The composer renders into a HalfFloat target, which WebGL2 only guarantees
 * with the color-buffer-float extensions. Without them the composer would be
 * black or catastrophically slow — callers must fall back to direct rendering.
 */
export function supportsHdrComposer(renderer: THREE.WebGLRenderer): boolean {
  return (
    renderer.extensions.has('EXT_color_buffer_half_float') ||
    renderer.extensions.has('EXT_color_buffer_float')
  )
}
