import * as THREE from 'three'
import type { SurfaceLook } from '../config/systems/types'

// Procedural equirectangular surface maps for bodies nobody has photographed.
// Small (512×256) canvas textures from seeded, x-wrapping value noise, so each
// planet gets a stable look of its own. They are made when a system loads and
// disposed with it.

const W = 512
const H = 256

function rng(seed: number): () => number {
  let s = seed >>> 0 || 1
  return () => {
    s ^= s << 13
    s ^= s >>> 17
    s ^= s << 5
    return (s >>> 0) / 4294967296
  }
}

function hashString(str: string): number {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619)
  return h >>> 0
}

/** Fractal value noise on a lattice that wraps in x (longitude), 0..1. */
function makeNoise(seed: number): (u: number, v: number) => number {
  const rand = rng(seed)
  const octaves = [4, 8, 16, 32, 64].map((n) => {
    const cols = n
    const rows = Math.max(2, n / 2) + 1
    const grid = Float32Array.from({ length: cols * rows }, rand)
    return { cols, rows, grid }
  })
  const smooth = (t: number) => t * t * (3 - 2 * t)
  return (u, v) => {
    let sum = 0
    let amp = 1
    let norm = 0
    for (const o of octaves) {
      const x = u * o.cols
      const y = v * (o.rows - 1)
      const x0 = Math.floor(x)
      const y0 = Math.min(o.rows - 2, Math.floor(y))
      const fx = smooth(x - x0)
      const fy = smooth(y - y0)
      const c0 = ((x0 % o.cols) + o.cols) % o.cols
      const c1 = (c0 + 1) % o.cols
      const g = o.grid
      const a = g[y0 * o.cols + c0] + (g[y0 * o.cols + c1] - g[y0 * o.cols + c0]) * fx
      const b = g[(y0 + 1) * o.cols + c0] + (g[(y0 + 1) * o.cols + c1] - g[(y0 + 1) * o.cols + c0]) * fx
      sum += (a + (b - a) * fy) * amp
      norm += amp
      amp *= 0.5
    }
    return sum / norm
  }
}

type RGB = [number, number, number]
const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]
const clamp01 = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t)

function hexRgb(hex: number): RGB {
  return [(hex >> 16) & 255, (hex >> 8) & 255, hex & 255]
}

/** Colour of one texel, 0..255 per channel. `base` is the body's tint. */
function shade(look: SurfaceLook, base: RGB, n: number, n2: number, v: number): RGB {
  const lat = Math.abs(v - 0.5) * 2 // 0 equator … 1 pole
  switch (look) {
    case 'star': {
      const g = 0.82 + 0.3 * n2
      return [255 * g, 255 * g, 255 * g] // tinted by the material colour
    }
    case 'gas': {
      const band = Math.sin(v * Math.PI * 14 + n * 6) * 0.5 + 0.5
      const light = mix(base, [245, 236, 220], 0.45)
      const dark = mix(base, [90, 60, 40], 0.35)
      return mix(dark, light, clamp01(band * 0.8 + n2 * 0.3))
    }
    case 'ocean': {
      const land = clamp01((n - 0.54) * 30) // soft coastline
      const sea: RGB = mix(mix([30, 75, 150], base, 0.3), [50, 110, 185], n2 * 0.6)
      const ground: RGB = mix([105, 125, 80], [170, 150, 110], n2)
      let c = mix(sea, ground, land)
      if (lat > 0.78) c = mix(c, [235, 242, 250], clamp01((lat - 0.78) * 6))
      const cloud = clamp01((n2 - 0.55) * 3)
      return mix(c, [245, 248, 252], cloud * 0.8)
    }
    case 'ice': {
      const crack = Math.abs(n - 0.5) < 0.015 ? 0.7 : 1
      const c = mix(mix(base, [255, 255, 255], 0.35), mix(base, [120, 140, 165], 0.4), n2)
      return [c[0] * crack, c[1] * crack, c[2] * crack]
    }
    case 'lava': {
      const crust = mix([40, 30, 28], mix(base, [70, 50, 40], 0.5), n2)
      const glow = clamp01((n - 0.6) * 5) * clamp01((n - 0.6) * 5)
      return mix(crust, [255, 120, 40], glow)
    }
    case 'desert': {
      return mix(mix(base, [220, 180, 130], 0.3), mix(base, [110, 80, 60], 0.4), clamp01(n * 0.7 + n2 * 0.5 - 0.1))
    }
    case 'rocky':
    default: {
      const crater = n2 > 0.7 ? 0.8 : 1
      const c = mix(mix(base, [40, 38, 36], 0.35), mix(base, [210, 200, 190], 0.25), clamp01(n * 1.3 - 0.15))
      return [c[0] * crater, c[1] * crater, c[2] * crater]
    }
  }
}

export function makeSurfaceTexture(id: string, look: SurfaceLook, tint: number): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext('2d')!
  const img = ctx.createImageData(W, H)
  const seed = hashString(id)
  const n1 = makeNoise(seed)
  const n2 = makeNoise(seed ^ 0x9e3779b9)
  const base = hexRgb(tint)
  for (let y = 0; y < H; y++) {
    const v = y / (H - 1)
    for (let x = 0; x < W; x++) {
      const u = x / W
      const c = shade(look, base, n1(u, v), n2(u * 2 % 1, v), v)
      const i = (y * W + x) * 4
      img.data[i] = c[0]
      img.data[i + 1] = c[1]
      img.data[i + 2] = c[2]
      img.data[i + 3] = 255
    }
  }
  ctx.putImageData(img, 0, 0)
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.wrapS = THREE.RepeatWrapping
  return tex
}
