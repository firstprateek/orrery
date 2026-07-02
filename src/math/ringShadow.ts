import type { Vec3 } from './vec3'

// TypeScript twins of the GLSL injected into Saturn's ring and surface shaders
// (scene/SolarSystem.ts). They exist so the geometry conventions — shadow-side
// sign, cylinder test, ray-plane hit — are pinned by unit tests; keep the GLSL
// in sync with these.

/**
 * Is a point inside the planet's shadow cylinder? `sunDir` points FROM the
 * planet TOWARD the Sun. Shadowed = on the anti-sun side of the planet's centre
 * plane AND within one planet radius of the shadow axis.
 */
export function inPlanetShadow(p: Vec3, center: Vec3, sunDir: Vec3, planetRadius: number): boolean {
  const tx = p.x - center.x
  const ty = p.y - center.y
  const tz = p.z - center.z
  const along = tx * sunDir.x + ty * sunDir.y + tz * sunDir.z
  if (along >= 0) return false // sun side — lit
  const px = tx - along * sunDir.x
  const py = ty - along * sunDir.y
  const pz = tz - along * sunDir.z
  return px * px + py * py + pz * pz < planetRadius * planetRadius
}

/**
 * Cast a ray from `p` toward the Sun; if it crosses the ring plane (through
 * `center`, normal `pole`), return the hit's distance from the planet centre —
 * else null. The caller checks it against the ring's inner/outer radii.
 */
export function ringPlaneHitRadius(p: Vec3, center: Vec3, sunDir: Vec3, pole: Vec3): number | null {
  const denom = sunDir.x * pole.x + sunDir.y * pole.y + sunDir.z * pole.z
  if (Math.abs(denom) < 1e-9) return null // sun ray parallel to the ring plane
  const cx = center.x - p.x
  const cy = center.y - p.y
  const cz = center.z - p.z
  const t = (cx * pole.x + cy * pole.y + cz * pole.z) / denom
  if (t <= 0) return null // ring plane is behind the fragment w.r.t. the sun
  const hx = p.x + t * sunDir.x - center.x
  const hy = p.y + t * sunDir.y - center.y
  const hz = p.z + t * sunDir.z - center.z
  return Math.hypot(hx, hy, hz)
}
