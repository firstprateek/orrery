// Procedural main-belt asteroid field. Artistic, not physical: the rocks are
// sized to be visible specks (true asteroids would be sub-pixel at any zoom),
// distributed in a ring between Mars and Jupiter in the ecliptic (XY) plane.
// Deterministic (seeded) so the field is stable across reloads and testable.

export interface BeltInstance {
  /** Heliocentric position in AU (ecliptic frame). */
  x: number
  y: number
  z: number
  scale: number
  rotX: number
  rotY: number
  /** 0..1 brightness tint for subtle colour variation. */
  tint: number
}

export interface BeltOpts {
  count?: number
  innerAu?: number
  outerAu?: number
  thicknessAu?: number
  minScale?: number
  maxScale?: number
  seed?: number
}

export function makeBelt(opts: BeltOpts = {}): BeltInstance[] {
  const count = opts.count ?? 2500
  const innerAu = opts.innerAu ?? 2.1
  const outerAu = opts.outerAu ?? 3.3
  const thicknessAu = opts.thicknessAu ?? 0.18
  const minScale = opts.minScale ?? 0.0015
  const maxScale = opts.maxScale ?? 0.006

  let s = (opts.seed ?? 1) >>> 0
  const rnd = () => {
    // Numerical Recipes LCG → [0,1)
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0
    return s / 0x100000000
  }

  const out: BeltInstance[] = []
  for (let i = 0; i < count; i++) {
    const r = innerAu + rnd() * (outerAu - innerAu)
    const a = rnd() * Math.PI * 2
    out.push({
      x: Math.cos(a) * r,
      y: Math.sin(a) * r,
      z: (rnd() - 0.5) * thicknessAu,
      scale: minScale + rnd() * (maxScale - minScale),
      rotX: rnd() * Math.PI * 2,
      rotY: rnd() * Math.PI * 2,
      tint: 0.6 + rnd() * 0.4,
    })
  }
  return out
}
