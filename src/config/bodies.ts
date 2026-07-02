// The body registry. Physical, rotational, and orbital constants were compiled
// from NASA/JPL fact sheets and adversarially verified (zero hard numerical
// errors). Kepler elements for the non-Galilean moons are mean osculating
// elements, parent-centred in the ecliptic-J2000 frame, with mean anomaly at
// the J2000 epoch.

export type BodyType = 'star' | 'planet' | 'dwarf' | 'moon'
export type OrbitSource = 'none' | 'astronomy-engine' | 'astronomy-engine-jupiter-moon' | 'kepler'

export interface KeplerElements {
  aKm: number
  e: number
  iDeg: number
  omDeg: number
  wDeg: number
  /** Mean anomaly at the J2000 epoch, degrees. */
  maDeg: number
  periodDays: number
}

export interface BodyDef {
  id: string
  name: string
  type: BodyType
  /** Parent body id ('sun' for planets, planet id for moons), or null for the Sun. */
  parent: string | null
  radiusKm: number
  /** Obliquity to orbit, degrees. >90° itself encodes retrograde spin. */
  axialTiltDeg: number
  /**
   * Sidereal rotation period in hours. Retrograde must be encoded exactly once:
   * either obliquity >90° (Venus/Uranus/Pluto) or a negative period with tilt
   * ~0 (Triton) — never both, or the two flips cancel to prograde.
   */
  rotationPeriodHours: number
  /** IAU prime-meridian angle W0 at J2000 (degrees), for texture phase. */
  meridianDeg?: number
  orbitSource: OrbitSource
  kepler?: KeplerElements
  ringInnerKm?: number
  ringOuterKm?: number
  /** Albedo texture filename in public/textures, if any. */
  texture?: string
  /** Keep the body's color tint multiplied over the map (grayscale mosaics). */
  tintTexture?: boolean
  ringTexture?: string
  /** Fallback tint when no texture is available. */
  color: number
  facts: string
}

export const BODIES: BodyDef[] = [
  { id: 'sun', name: 'Sun', type: 'star', parent: null, radiusKm: 695700, axialTiltDeg: 7.25, rotationPeriodHours: 609.12, orbitSource: 'none', texture: '2k_sun.jpg', color: 0xfff4ea, facts: "Contains 99.86% of the Solar System's mass and rotates differentially, faster at its equator than its poles." },

  { id: 'mercury', meridianDeg: 329.548, name: 'Mercury', type: 'planet', parent: 'sun', radiusKm: 2439.7, axialTiltDeg: 0.034, rotationPeriodHours: 1407.6, orbitSource: 'astronomy-engine', texture: '2k_mercury.jpg', color: 0x9c9182, facts: 'Smallest planet, locked in a 3:2 spin-orbit resonance — three rotations for every two orbits.' },
  { id: 'venus', meridianDeg: 160.2, name: 'Venus', type: 'planet', parent: 'sun', radiusKm: 6051.8, axialTiltDeg: 177.36, rotationPeriodHours: 5832.5, orbitSource: 'astronomy-engine', texture: '2k_venus_atmosphere.jpg', color: 0xe6c894, facts: 'Rotates retrograde so slowly that its day is longer than its year; hottest planet via a runaway greenhouse.' },
  { id: 'earth', meridianDeg: 190.147, name: 'Earth', type: 'planet', parent: 'sun', radiusKm: 6371, axialTiltDeg: 23.44, rotationPeriodHours: 23.9345, orbitSource: 'astronomy-engine', texture: '2k_earth_daymap.jpg', color: 0x4f7fff, facts: 'The only known world with liquid surface water and life; its 23.44° tilt drives the seasons.' },
  { id: 'moon', meridianDeg: 38.3213, name: 'Moon', type: 'moon', parent: 'earth', radiusKm: 1737.4, axialTiltDeg: 6.687, rotationPeriodHours: 655.72, orbitSource: 'astronomy-engine', texture: '2k_moon.jpg', color: 0xbfbfbf, facts: 'Tidally locked to Earth and slowly receding at about 3.8 cm per year.' },

  { id: 'mars', meridianDeg: 176.63, name: 'Mars', type: 'planet', parent: 'sun', radiusKm: 3389.5, axialTiltDeg: 25.19, rotationPeriodHours: 24.6229, orbitSource: 'astronomy-engine', texture: '2k_mars.jpg', color: 0xc1440e, facts: 'Hosts Olympus Mons, the tallest volcano in the Solar System; its day and tilt are remarkably Earth-like.' },
  { id: 'phobos', name: 'Phobos', type: 'moon', parent: 'mars', radiusKm: 11.08, axialTiltDeg: 0, rotationPeriodHours: 7.654, orbitSource: 'kepler', texture: '2k_phobos.jpg', tintTexture: true, color: 0x8a7c6f, facts: 'Orbits Mars faster than Mars rotates, rising in the west; it is slowly spiraling inward.', kepler: { aKm: 9375, e: 0.015, iDeg: 26.05, omDeg: 84.91, wDeg: 342.86, maDeg: 189.7, periodDays: 0.31891 } },
  { id: 'deimos', name: 'Deimos', type: 'moon', parent: 'mars', radiusKm: 6.27, axialTiltDeg: 0, rotationPeriodHours: 30.312, orbitSource: 'kepler', color: 0x9a8b7a, facts: 'The smaller, outer Martian moon; smooth regolith makes it look almost featureless.', kepler: { aKm: 23457, e: 0.0003, iDeg: 27.59, omDeg: 83.58, wDeg: 11.98, maDeg: 205, periodDays: 1.2625 } },

  { id: 'jupiter', meridianDeg: 284.95, name: 'Jupiter', type: 'planet', parent: 'sun', radiusKm: 69911, axialTiltDeg: 3.13, rotationPeriodHours: 9.925, orbitSource: 'astronomy-engine', texture: '2k_jupiter.jpg', color: 0xd8ca9d, facts: 'Most massive planet, spinning once in ~10 hours and hosting the centuries-old Great Red Spot.' },
  { id: 'io', name: 'Io', type: 'moon', parent: 'jupiter', radiusKm: 1821.6, axialTiltDeg: 0, rotationPeriodHours: 42.459, orbitSource: 'astronomy-engine-jupiter-moon', texture: '2k_io.jpg', color: 0xe7d97a, facts: 'The most volcanically active body in the Solar System, heated by tidal flexing.' },
  { id: 'europa', name: 'Europa', type: 'moon', parent: 'jupiter', radiusKm: 1560.8, axialTiltDeg: 0, rotationPeriodHours: 85.228, orbitSource: 'astronomy-engine-jupiter-moon', texture: '2k_europa.jpg', color: 0xcdb89a, facts: 'A smooth ice shell hides a global saltwater ocean — a prime target in the search for life.' },
  { id: 'ganymede', name: 'Ganymede', type: 'moon', parent: 'jupiter', radiusKm: 2634.1, axialTiltDeg: 0, rotationPeriodHours: 171.709, orbitSource: 'astronomy-engine-jupiter-moon', texture: '2k_ganymede.jpg', color: 0x9c8c78, facts: 'The largest moon in the Solar System — bigger than Mercury — and the only one with its own magnetic field.' },
  { id: 'callisto', name: 'Callisto', type: 'moon', parent: 'jupiter', radiusKm: 2410.3, axialTiltDeg: 0, rotationPeriodHours: 400.536, orbitSource: 'astronomy-engine-jupiter-moon', texture: '2k_callisto.jpg', color: 0x6e6258, facts: 'The most heavily cratered object in the Solar System; its surface has barely changed in billions of years.' },

  { id: 'saturn', meridianDeg: 38.9, name: 'Saturn', type: 'planet', parent: 'sun', radiusKm: 58232, axialTiltDeg: 26.73, rotationPeriodHours: 10.656, orbitSource: 'astronomy-engine', texture: '2k_saturn.jpg', ringTexture: '2k_saturn_ring_alpha.png', ringInnerKm: 74658, ringOuterKm: 136775, color: 0xe3dcc0, facts: 'Famous for its ring system of ice and rock; the least dense planet — it would float in water.' },
  { id: 'titan', name: 'Titan', type: 'moon', parent: 'saturn', radiusKm: 2574.7, axialTiltDeg: 0.3, rotationPeriodHours: 382.691, orbitSource: 'kepler', texture: '2k_titan.jpg', tintTexture: true, color: 0xd9a441, facts: "The only moon with a thick atmosphere and stable surface liquid — lakes of methane.", kepler: { aKm: 1221900, e: 0.029, iDeg: 27.65, omDeg: 169.83, wDeg: 112.5, maDeg: 11.7, periodDays: 15.945448 } },
  { id: 'rhea', name: 'Rhea', type: 'moon', parent: 'saturn', radiusKm: 763.8, axialTiltDeg: 0, rotationPeriodHours: 108.437, orbitSource: 'kepler', texture: '2k_rhea.jpg', color: 0xc7c2b6, facts: "Saturn's second-largest moon, an icy, heavily cratered world.", kepler: { aKm: 527200, e: 0.001, iDeg: 28.06, omDeg: 170.12, wDeg: 137.53, maDeg: 31.5, periodDays: 4.517503 } },
  { id: 'iapetus', name: 'Iapetus', type: 'moon', parent: 'saturn', radiusKm: 734.4, axialTiltDeg: 0, rotationPeriodHours: 1903.716, orbitSource: 'kepler', texture: '2k_iapetus.jpg', color: 0x8f8270, facts: 'Two-toned moon — one hemisphere dark as coal, the other bright as snow — ringed by an equatorial ridge.', kepler: { aKm: 3561700, e: 0.028, iDeg: 18.37, omDeg: 143.21, wDeg: 214.99, maDeg: 74.8, periodDays: 79.331002 } },

  { id: 'uranus', meridianDeg: 203.81, name: 'Uranus', type: 'planet', parent: 'sun', radiusKm: 25362, axialTiltDeg: 97.77, rotationPeriodHours: 17.24, orbitSource: 'astronomy-engine', texture: '2k_uranus.jpg', color: 0xaad3df, facts: 'Tipped on its side at ~98°, it effectively rolls along its orbit, giving each pole ~42 years of sunlight then dark.' },
  { id: 'titania', name: 'Titania', type: 'moon', parent: 'uranus', radiusKm: 788.4, axialTiltDeg: 0, rotationPeriodHours: 208.941, orbitSource: 'kepler', texture: '2k_titania.jpg', color: 0xb6a99a, facts: 'The largest moon of Uranus, scarred by huge canyons from an icy crust that froze and expanded.', kepler: { aKm: 436298, e: 0.002, iDeg: 97.79, omDeg: 167.68, wDeg: 208.44, maDeg: 68.1, periodDays: 8.705869 } },
  { id: 'oberon', name: 'Oberon', type: 'moon', parent: 'uranus', radiusKm: 761.4, axialTiltDeg: 0, rotationPeriodHours: 323.118, orbitSource: 'kepler', texture: '2k_oberon.jpg', color: 0x9c8d7e, facts: 'The outermost large Uranian moon, an ancient cratered world with dark crater-floor deposits.', kepler: { aKm: 583511, e: 0.002, iDeg: 97.73, omDeg: 167.73, wDeg: 203.95, maDeg: 143.6, periodDays: 13.463237 } },

  { id: 'neptune', meridianDeg: 249.978, name: 'Neptune', type: 'planet', parent: 'sun', radiusKm: 24622, axialTiltDeg: 28.32, rotationPeriodHours: 16.11, orbitSource: 'astronomy-engine', texture: '2k_neptune.jpg', color: 0x3a5fcd, facts: 'The windiest planet, with supersonic gusts over 2,000 km/h; the first planet found by mathematical prediction.' },
  { id: 'triton', name: 'Triton', type: 'moon', parent: 'neptune', radiusKm: 1353.4, axialTiltDeg: 0, rotationPeriodHours: -141.044, orbitSource: 'kepler', texture: '2k_triton.jpg', color: 0xc9bfae, facts: 'The only large moon with a retrograde orbit — likely a captured Kuiper Belt object — with active nitrogen geysers.', kepler: { aKm: 354800, e: 0.0004, iDeg: 130.24, omDeg: 216.55, wDeg: 16.12, maDeg: 63, periodDays: 5.876994 } },

  { id: 'pluto', meridianDeg: 302.695, name: 'Pluto', type: 'dwarf', parent: 'sun', radiusKm: 1188.3, axialTiltDeg: 119.51, rotationPeriodHours: 153.294, orbitSource: 'astronomy-engine', texture: '2k_pluto.jpg', color: 0xc6b8a5, facts: 'The largest dwarf planet in the Kuiper Belt; its dark region is real — that hemisphere was unlit during the 2015 New Horizons flyby, so it has never been mapped.' },
]

export const BODY_BY_ID: Record<string, BodyDef> = Object.fromEntries(BODIES.map((b) => [b.id, b]))

/**
 * A body's "family": itself, plus — when it's a planet — its moons, and — when
 * it's a moon — its parent and siblings. Used to decide which deferred textures
 * to start loading when a body is focused (the family is what's on screen).
 */
export function bodyFamily(id: string): string[] {
  const def = BODY_BY_ID[id]
  if (!def) return []
  const anchor = def.type === 'moon' ? (def.parent as string) : def.id
  const family = [def.id]
  if (anchor !== def.id) family.push(anchor)
  for (const b of BODIES) {
    if (b.parent === anchor && b.id !== def.id) family.push(b.id)
  }
  return family
}
