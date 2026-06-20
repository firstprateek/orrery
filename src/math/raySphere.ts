// Ray-sphere intersection. `d` (direction) must be normalised. Returns the
// nearest non-negative parameter t along the ray, or null if it misses. Used for
// click/tap picking against each body's bounding sphere.
export function raySphere(
  ox: number, oy: number, oz: number,
  dx: number, dy: number, dz: number,
  cx: number, cy: number, cz: number,
  r: number,
): number | null {
  const lx = ox - cx
  const ly = oy - cy
  const lz = oz - cz
  const b = lx * dx + ly * dy + lz * dz
  const c = lx * lx + ly * ly + lz * lz - r * r
  const disc = b * b - c
  if (disc < 0) return null
  const sq = Math.sqrt(disc)
  const t1 = -b - sq
  if (t1 >= 0) return t1
  const t2 = -b + sq
  if (t2 >= 0) return t2
  return null
}
