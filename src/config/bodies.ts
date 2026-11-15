// The body registry. Physical, rotational, and orbital constants were compiled
// from NASA/JPL fact sheets and adversarially verified (zero hard numerical
// errors). Kepler elements for the non-Galilean moons are mean osculating
// elements, parent-centred in the ecliptic-J2000 frame, with mean anomaly at
// the J2000 epoch. Pole directions and prime meridians are the IAU WGCCRE
// values (Archinal et al. 2011/2018) at J2000. At runtime the Sun, planets, the
// Moon and Pluto take pole + W from astronomy-engine's RotationAxis (the same
// IAU model with its exact rates, secular pole drift and the Moon's periodic
// terms, evaluated in TT — see sim/bodyAxes.ts); for them `pole`, `meridianDeg`
// and `rotationPeriodHours` are the J2000 reference a test holds against it.
// Earth's W0 and period are its Earth Rotation Angle in UT (W = ERA − 90°,
// because the IAU node for a pole at RA 0 lies at RA 90°), since the sim clock
// runs on UT and the IAU W formula is in TDB (~70 s, ~0.3° of spin apart).

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
  /**
   * Obliquity to the body's own orbit, degrees, measured from the spin
   * (right-hand-rule) pole, so >90° means retrograde. Informational: the
   * rendered orientation comes from `pole`, and a test checks the two agree.
   */
  axialTiltDeg: number
  /**
   * IAU (WGCCRE) north pole at J2000 in the equatorial ICRF frame. For planets
   * and their moons this is the pole on the north side of the invariable plane,
   * so a retrograde spinner (Venus, Uranus) keeps a "north" pole near ecliptic
   * north and spins backwards about it; Pluto uses the 2015 right-hand-rule
   * pole. The texture's north edge sits at this pole.
   */
  pole: { raDeg: number; decDeg: number }
  /**
   * Sidereal rotation period in hours, signed like the IAU W rate: negative
   * means the body turns clockwise seen from above `pole` (Venus, Uranus and
   * its moons, Triton). It is the period implied by the IAU W rate, so it stays
   * in step with `meridianDeg` (Neptune's is 15.97 h, not the 16.11 h fact-sheet
   * figure the IAU rate does not use).
   */
  rotationPeriodHours: number
  /**
   * IAU prime-meridian angle W0 at J2000 (degrees): the angle, eastward along
   * the body's equator, from the node of that equator on the ICRF equator to
   * longitude 0. Sets the texture phase (the Moon's near side faces Earth).
   */
  meridianDeg?: number
  /**
   * Synchronous moon on a mean-element (Kepler) orbit: its spin is set each
   * frame so longitude 0 faces the parent, because a mean orbital phase does not
   * stay in step with the IAU W over decades (Titan/Rhea/Iapetus/Deimos would
   * otherwise show the wrong face by >120° in the 2020s).
   */
  faceLocked?: boolean
  /**
   * East longitude (degrees) at the centre column (u = 0.5) of the texture.
   * Solar System Scope, USGS Triton and the Voyager Uranian maps are centred on
   * 0°; the Björn Jónsson Galilean maps, the Cassini Titan/Rhea/Iapetus maps
   * and the New Horizons Pluto map are centred on 180° (Io's Pele, 105°E, sits
   * at u ≈ 0.29). The mesh spin adds this so W still lands longitude 0 right.
   */
  textureLon0Deg?: number
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
  { id: 'sun', meridianDeg: 84.176, pole: { raDeg: 286.13, decDeg: 63.87 }, name: 'Sun', type: 'star', parent: null, radiusKm: 695700, axialTiltDeg: 7.25, rotationPeriodHours: 609.1199, orbitSource: 'none', texture: '2k_sun.jpg', color: 0xfff4ea, facts: "Contains 99.86% of the Solar System's mass and rotates differentially, faster at its equator than its poles." },

  { id: 'mercury', meridianDeg: 329.548, pole: { raDeg: 281.0097, decDeg: 61.4143 }, name: 'Mercury', type: 'planet', parent: 'sun', radiusKm: 2439.7, axialTiltDeg: 0.034, rotationPeriodHours: 1407.5094, orbitSource: 'astronomy-engine', texture: '2k_mercury.jpg', color: 0x9c9182, facts: 'Smallest planet, locked in a 3:2 spin-orbit resonance — three rotations for every two orbits.' },
  { id: 'venus', meridianDeg: 160.2, pole: { raDeg: 272.76, decDeg: 67.16 }, name: 'Venus', type: 'planet', parent: 'sun', radiusKm: 6051.8, axialTiltDeg: 177.36, rotationPeriodHours: -5832.4436, orbitSource: 'astronomy-engine', texture: '2k_venus_atmosphere.jpg', color: 0xe6c894, facts: 'Rotates retrograde so slowly that its day is longer than its year; hottest planet via a runaway greenhouse.' },
  { id: 'earth', meridianDeg: 190.4606, pole: { raDeg: 0, decDeg: 90 }, name: 'Earth', type: 'planet', parent: 'sun', radiusKm: 6371, axialTiltDeg: 23.44, rotationPeriodHours: 23.9344696, orbitSource: 'astronomy-engine', texture: '2k_earth_daymap.jpg', color: 0x4f7fff, facts: 'The only known world with liquid surface water and life; its 23.44° tilt drives the seasons.' },
  { id: 'moon', meridianDeg: 38.3213, pole: { raDeg: 269.9949, decDeg: 66.5392 }, name: 'Moon', type: 'moon', parent: 'earth', radiusKm: 1737.4, axialTiltDeg: 6.687, rotationPeriodHours: 655.7199, orbitSource: 'astronomy-engine', texture: '2k_moon.jpg', color: 0xbfbfbf, facts: 'Tidally locked to Earth and slowly receding at about 3.8 cm per year.' },

  { id: 'mars', meridianDeg: 176.63, pole: { raDeg: 317.68143, decDeg: 52.8865 }, name: 'Mars', type: 'planet', parent: 'sun', radiusKm: 3389.5, axialTiltDeg: 25.19, rotationPeriodHours: 24.62296, orbitSource: 'astronomy-engine', texture: '2k_mars.jpg', color: 0xc1440e, facts: 'Hosts Olympus Mons, the tallest volcano in the Solar System; its day and tilt are remarkably Earth-like.' },
  { id: 'phobos', faceLocked: true, meridianDeg: 35.06, pole: { raDeg: 317.68, decDeg: 52.9 }, name: 'Phobos', type: 'moon', parent: 'mars', radiusKm: 11.08, axialTiltDeg: 0, rotationPeriodHours: 7.653844, orbitSource: 'kepler', texture: '2k_phobos.jpg', tintTexture: true, color: 0x8a7c6f, facts: 'Orbits Mars faster than Mars rotates, rising in the west; it is slowly spiraling inward.', kepler: { aKm: 9375, e: 0.015, iDeg: 26.05, omDeg: 84.91, wDeg: 342.86, maDeg: 189.7, periodDays: 0.31891 } },
  { id: 'deimos', faceLocked: true, meridianDeg: 79.41, pole: { raDeg: 316.65, decDeg: 53.52 }, name: 'Deimos', type: 'moon', parent: 'mars', radiusKm: 6.27, axialTiltDeg: 0, rotationPeriodHours: 30.29858, orbitSource: 'kepler', color: 0x9a8b7a, facts: 'The smaller, outer Martian moon; smooth regolith makes it look almost featureless.', kepler: { aKm: 23457, e: 0.0003, iDeg: 27.59, omDeg: 83.58, wDeg: 11.98, maDeg: 205, periodDays: 1.2625 } },

  { id: 'jupiter', meridianDeg: 284.95, pole: { raDeg: 268.056595, decDeg: 64.495303 }, name: 'Jupiter', type: 'planet', parent: 'sun', radiusKm: 69911, axialTiltDeg: 3.13, rotationPeriodHours: 9.92492, orbitSource: 'astronomy-engine', texture: '2k_jupiter.jpg', color: 0xd8ca9d, facts: 'Most massive planet, spinning once in ~10 hours and hosting the centuries-old Great Red Spot.' },
  { id: 'io', textureLon0Deg: 180, meridianDeg: 200.39, pole: { raDeg: 268.05, decDeg: 64.5 }, name: 'Io', type: 'moon', parent: 'jupiter', radiusKm: 1821.6, axialTiltDeg: 0, rotationPeriodHours: 42.45931, orbitSource: 'astronomy-engine-jupiter-moon', texture: '2k_io.jpg', color: 0xe7d97a, facts: 'The most volcanically active body in the Solar System, heated by tidal flexing.' },
  { id: 'europa', textureLon0Deg: 180, meridianDeg: 36.022, pole: { raDeg: 268.08, decDeg: 64.51 }, name: 'Europa', type: 'moon', parent: 'jupiter', radiusKm: 1560.8, axialTiltDeg: 0, rotationPeriodHours: 85.22835, orbitSource: 'astronomy-engine-jupiter-moon', texture: '2k_europa.jpg', color: 0xcdb89a, facts: 'A smooth ice shell hides a global saltwater ocean — a prime target in the search for life.' },
  { id: 'ganymede', textureLon0Deg: 180, meridianDeg: 44.064, pole: { raDeg: 268.2, decDeg: 64.57 }, name: 'Ganymede', type: 'moon', parent: 'jupiter', radiusKm: 2634.1, axialTiltDeg: 0, rotationPeriodHours: 171.7093, orbitSource: 'astronomy-engine-jupiter-moon', texture: '2k_ganymede.jpg', color: 0x9c8c78, facts: 'The largest moon in the Solar System — bigger than Mercury — and the only one with its own magnetic field.' },
  { id: 'callisto', textureLon0Deg: 180, meridianDeg: 259.51, pole: { raDeg: 268.72, decDeg: 64.83 }, name: 'Callisto', type: 'moon', parent: 'jupiter', radiusKm: 2410.3, axialTiltDeg: 0, rotationPeriodHours: 400.5364, orbitSource: 'astronomy-engine-jupiter-moon', texture: '2k_callisto.jpg', color: 0x6e6258, facts: 'The most heavily cratered object in the Solar System; its surface has barely changed in billions of years.' },

  { id: 'saturn', meridianDeg: 38.9, pole: { raDeg: 40.589, decDeg: 83.537 }, name: 'Saturn', type: 'planet', parent: 'sun', radiusKm: 58232, axialTiltDeg: 26.73, rotationPeriodHours: 10.65622, orbitSource: 'astronomy-engine', texture: '2k_saturn.jpg', ringTexture: '2k_saturn_ring_alpha.png', ringInnerKm: 74658, ringOuterKm: 136775, color: 0xe3dcc0, facts: 'Famous for its ring system of ice and rock; the least dense planet — it would float in water.' },
  { id: 'titan', textureLon0Deg: 180, faceLocked: true, meridianDeg: 186.5855, pole: { raDeg: 39.4827, decDeg: 83.4279 }, name: 'Titan', type: 'moon', parent: 'saturn', radiusKm: 2574.7, axialTiltDeg: 0.3, rotationPeriodHours: 382.6907, orbitSource: 'kepler', texture: '2k_titan.jpg', tintTexture: true, color: 0xd9a441, facts: "The only moon with a thick atmosphere and stable surface liquid — lakes of methane.", kepler: { aKm: 1221900, e: 0.029, iDeg: 27.65, omDeg: 169.83, wDeg: 112.5, maDeg: 11.7, periodDays: 15.945448 } },
  { id: 'rhea', textureLon0Deg: 180, faceLocked: true, meridianDeg: 235.16, pole: { raDeg: 40.38, decDeg: 83.55 }, name: 'Rhea', type: 'moon', parent: 'saturn', radiusKm: 763.8, axialTiltDeg: 0, rotationPeriodHours: 108.4201, orbitSource: 'kepler', texture: '2k_rhea.jpg', color: 0xc7c2b6, facts: "Saturn's second-largest moon, an icy, heavily cratered world.", kepler: { aKm: 527200, e: 0.001, iDeg: 28.06, omDeg: 170.12, wDeg: 137.53, maDeg: 31.5, periodDays: 4.517503 } },
  { id: 'iapetus', textureLon0Deg: 180, faceLocked: true, meridianDeg: 355.2, pole: { raDeg: 318.16, decDeg: 75.03 }, name: 'Iapetus', type: 'moon', parent: 'saturn', radiusKm: 734.4, axialTiltDeg: 0, rotationPeriodHours: 1903.9404, orbitSource: 'kepler', texture: '2k_iapetus.jpg', color: 0x8f8270, facts: 'Two-toned moon — one hemisphere dark as coal, the other bright as snow — ringed by an equatorial ridge.', kepler: { aKm: 3561700, e: 0.028, iDeg: 18.37, omDeg: 143.21, wDeg: 214.99, maDeg: 74.8, periodDays: 79.331002 } },

  { id: 'uranus', meridianDeg: 203.81, pole: { raDeg: 257.311, decDeg: -15.175 }, name: 'Uranus', type: 'planet', parent: 'sun', radiusKm: 25362, axialTiltDeg: 97.77, rotationPeriodHours: -17.24, orbitSource: 'astronomy-engine', texture: '2k_uranus.jpg', color: 0xaad3df, facts: 'Tipped on its side at ~98°, it effectively rolls along its orbit, giving each pole ~42 years of sunlight then dark.' },
  { id: 'titania', faceLocked: true, meridianDeg: 77.74, pole: { raDeg: 257.43, decDeg: -15.1 }, name: 'Titania', type: 'moon', parent: 'uranus', radiusKm: 788.4, axialTiltDeg: 0, rotationPeriodHours: -208.9408, orbitSource: 'kepler', texture: '2k_titania.jpg', color: 0xb6a99a, facts: 'The largest moon of Uranus, scarred by huge canyons from an icy crust that froze and expanded.', kepler: { aKm: 436298, e: 0.002, iDeg: 97.79, omDeg: 167.68, wDeg: 208.44, maDeg: 68.1, periodDays: 8.705869 } },
  { id: 'oberon', faceLocked: true, meridianDeg: 6.77, pole: { raDeg: 257.43, decDeg: -15.1 }, name: 'Oberon', type: 'moon', parent: 'uranus', radiusKm: 761.4, axialTiltDeg: 0, rotationPeriodHours: -323.1176, orbitSource: 'kepler', texture: '2k_oberon.jpg', color: 0x9c8d7e, facts: 'The outermost large Uranian moon, an ancient cratered world with dark crater-floor deposits.', kepler: { aKm: 583511, e: 0.002, iDeg: 97.73, omDeg: 167.73, wDeg: 203.95, maDeg: 143.6, periodDays: 13.463237 } },

  // Neptune's IAU pole and W carry a periodic N term (~688-year cycle); the
  // values here are that series evaluated at J2000.
  { id: 'neptune', meridianDeg: 249.996, pole: { raDeg: 299.334, decDeg: 42.950 }, name: 'Neptune', type: 'planet', parent: 'sun', radiusKm: 24622, axialTiltDeg: 28.32, rotationPeriodHours: 15.9663, orbitSource: 'astronomy-engine', texture: '2k_neptune.jpg', color: 0x3a5fcd, facts: 'The windiest planet, with supersonic gusts over 2,000 km/h; the first planet found by mathematical prediction.' },
  // Triton's IAU pole precesses by tens of degrees (the N7 series, ~688-year
  // cycle) together with its orbit plane. Both are static here: the pole is the
  // series evaluated at J2000 and the Kepler orbit is a mean J2000 orbit, which
  // keeps Triton's equator on its own orbit plane. Evaluating N7 for the pole
  // alone would tilt it ~4° off that (static) orbit by the 2020s.
  { id: 'triton', faceLocked: true, meridianDeg: 297.02, pole: { raDeg: 298.45, decDeg: 20.30 }, name: 'Triton', type: 'moon', parent: 'neptune', radiusKm: 1353.4, axialTiltDeg: 0, rotationPeriodHours: -141.0445, orbitSource: 'kepler', texture: '2k_triton.jpg', color: 0xc9bfae, facts: 'The only large moon with a retrograde orbit — likely a captured Kuiper Belt object — with active nitrogen geysers.', kepler: { aKm: 354800, e: 0.0004, iDeg: 130.24, omDeg: 216.55, wDeg: 16.12, maDeg: 63, periodDays: 5.876994 } },

  { id: 'pluto', textureLon0Deg: 180, meridianDeg: 302.695, pole: { raDeg: 132.993, decDeg: -6.163 }, name: 'Pluto', type: 'dwarf', parent: 'sun', radiusKm: 1188.3, axialTiltDeg: 119.51, rotationPeriodHours: 153.2934, orbitSource: 'astronomy-engine', texture: '2k_pluto.jpg', color: 0xc6b8a5, facts: 'The largest dwarf planet in the Kuiper Belt; its dark region is real — that hemisphere was unlit during the 2015 New Horizons flyby, so it has never been mapped.' },
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
