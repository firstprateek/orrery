import { DEG2RAD } from './constants'
import { equatorialToEcliptic, raDecToVec3 } from '../math/celestial'
import type { Vec3 } from '../math/vec3'

// What the sky guide marks: the star systems you can travel to, and landmarks
// you can only look at (galaxies, nebulae, famous stars). Positions are ICRS
// (J2000) right ascension / declination as seen from the Sun, plus a distance,
// so each entry is a point in space. That lets the guide recompute direction
// and distance from whichever system you are in: from Proxima Centauri the Sun
// is a 4.2 ly star in Cassiopeia, and Alpha Centauri is 0.2 ly away.
//
// Distances are rounded literature values (parallaxes for stars, standard
// figures for the rest); none of them matter below the second significant
// figure for a sky label.

export type SkyKind = 'system' | 'star' | 'galaxy' | 'nebula' | 'cluster' | 'blackhole'

export interface SkyEntry {
  id: string
  name: string
  kind: SkyKind
  raDeg: number
  decDeg: number
  /** Distance from the Sun, light-years (0 for the Sun itself). */
  distanceLy: number
  /** True when there is a star system to travel into (see config/systems). */
  reachable: boolean
  /** Card text. */
  blurb: string
}

/** The home system's id: the Sun sits at the catalogue origin. */
export const HOME_SYSTEM = 'sol'

export const SKY_CATALOG: readonly SkyEntry[] = [
  {
    id: HOME_SYSTEM, name: 'Sun', kind: 'system', raDeg: 0, decDeg: 0, distanceLy: 0, reachable: true,
    blurb: 'Home: eight planets, Pluto and their moons. Seen from nearby stars it is an ordinary yellow star.',
  },
  // --- reachable star systems ---
  {
    id: 'proxima', name: 'Proxima Centauri', kind: 'system', raDeg: 217.4289, decDeg: -62.6795, distanceLy: 4.25, reachable: true,
    blurb: 'The nearest star to the Sun: a small red dwarf with two confirmed planets, one in its habitable zone.',
  },
  {
    id: 'alphacen', name: 'Alpha Centauri A & B', kind: 'system', raDeg: 219.9021, decDeg: -60.834, distanceLy: 4.37, reachable: true,
    blurb: 'Two Sun-like stars circling each other every 80 years. Proxima Centauri orbits them from 13,000 AU away.',
  },
  {
    id: 'barnard', name: "Barnard's Star", kind: 'system', raDeg: 269.4521, decDeg: 4.6934, distanceLy: 5.96, reachable: true,
    blurb: 'The nearest single star to the Sun (Proxima belongs to the Alpha Centauri system): an old red dwarf with four small, hot planets.',
  },
  {
    id: 'sirius', name: 'Sirius', kind: 'system', raDeg: 101.2872, decDeg: -16.7161, distanceLy: 8.6, reachable: true,
    blurb: 'The brightest star in our night sky, with a white dwarf companion the size of Earth.',
  },
  {
    id: 'epseri', name: 'Epsilon Eridani', kind: 'system', raDeg: 53.2327, decDeg: -9.4583, distanceLy: 10.5, reachable: true,
    blurb: 'A young, active orange star with a Jupiter-like planet and dusty debris belts.',
  },
  {
    id: 'trappist1', name: 'TRAPPIST-1', kind: 'system', raDeg: 346.6223, decDeg: -5.0414, distanceLy: 40.7, reachable: true,
    blurb: 'An ultracool dwarf with seven Earth-sized planets packed closer to it than Mercury is to the Sun.',
  },
  // --- landmarks you can't visit ---
  {
    id: 'vega', name: 'Vega', kind: 'star', raDeg: 279.2347, decDeg: 38.7837, distanceLy: 25, reachable: false,
    blurb: 'A bright, fast-spinning white star ringed by dust. It was the north star 14,000 years ago and will be again.',
  },
  {
    id: 'pleiades', name: 'Pleiades (M45)', kind: 'cluster', raDeg: 56.75, decDeg: 24.1167, distanceLy: 444, reachable: false,
    blurb: 'The Seven Sisters: a young cluster of hot blue stars, about 100 million years old.',
  },
  {
    id: 'polaris', name: 'Polaris', kind: 'star', raDeg: 37.9546, decDeg: 89.2641, distanceLy: 433, reachable: false,
    blurb: "Today's north star: a yellow supergiant that pulses in brightness every four days.",
  },
  {
    id: 'betelgeuse', name: 'Betelgeuse', kind: 'star', raDeg: 88.7929, decDeg: 7.4071, distanceLy: 550, reachable: false,
    blurb: "A red supergiant so large that, in the Sun's place, it would reach out to the asteroid belt. It will end as a supernova.",
  },
  {
    id: 'orion-nebula', name: 'Orion Nebula (M42)', kind: 'nebula', raDeg: 83.8221, decDeg: -5.3911, distanceLy: 1344, reachable: false,
    blurb: 'The nearest large star-forming region, a glowing cloud lit by newborn stars.',
  },
  {
    id: 'sgr-a', name: 'Galactic centre (Sgr A*)', kind: 'blackhole', raDeg: 266.4168, decDeg: -29.0078, distanceLy: 26_700, reachable: false,
    blurb: 'The heart of the Milky Way, home to a black hole four million times the mass of the Sun.',
  },
  {
    id: 'lmc', name: 'Large Magellanic Cloud', kind: 'galaxy', raDeg: 80.8942, decDeg: -69.7561, distanceLy: 160_000, reachable: false,
    blurb: 'A satellite galaxy of the Milky Way, visible to the naked eye from the southern hemisphere.',
  },
  {
    id: 'smc', name: 'Small Magellanic Cloud', kind: 'galaxy', raDeg: 13.1867, decDeg: -72.8286, distanceLy: 200_000, reachable: false,
    blurb: "The LMC's smaller companion, being slowly pulled apart by its neighbours.",
  },
  {
    id: 'm31', name: 'Andromeda Galaxy (M31)', kind: 'galaxy', raDeg: 10.6847, decDeg: 41.269, distanceLy: 2_500_000, reachable: false,
    blurb: 'The nearest large galaxy, a spiral of about a trillion stars. It will merge with the Milky Way in roughly 4–5 billion years.',
  },
  {
    id: 'm33', name: 'Triangulum Galaxy (M33)', kind: 'galaxy', raDeg: 23.4621, decDeg: 30.6599, distanceLy: 2_730_000, reachable: false,
    blurb: 'The third-largest galaxy in our Local Group, a loose spiral and the most distant thing most people can see without a telescope.',
  },
]

const BY_ID = new Map(SKY_CATALOG.map((e) => [e.id, e]))

export function skyEntry(id: string): SkyEntry | undefined {
  return BY_ID.get(id)
}

/** Heliocentric position in light-years, ecliptic J2000 axes (the scene's frame). */
export function entryPositionLy(e: SkyEntry): Vec3 {
  return equatorialToEcliptic(raDecToVec3(e.raDeg * DEG2RAD, e.decDeg * DEG2RAD, e.distanceLy))
}

/** One sky marker as seen from a given system. */
export interface SkyView {
  entry: SkyEntry
  /** Unit direction, ecliptic J2000 axes. */
  dir: Vec3
  /** Distance from the viewing system, light-years. */
  distanceLy: number
}

/** Every catalogue entry except `fromId` itself, with direction and distance from it. */
export function skyFrom(fromId: string): SkyView[] {
  const from = BY_ID.get(fromId)
  const o = from ? entryPositionLy(from) : { x: 0, y: 0, z: 0 }
  const out: SkyView[] = []
  for (const entry of SKY_CATALOG) {
    if (entry.id === fromId) continue
    const p = entryPositionLy(entry)
    const d = { x: p.x - o.x, y: p.y - o.y, z: p.z - o.z }
    const len = Math.hypot(d.x, d.y, d.z)
    if (len === 0) continue
    out.push({ entry, dir: { x: d.x / len, y: d.y / len, z: d.z / len }, distanceLy: len })
  }
  return out
}

/** "4.25 ly", "444 ly", "1,340 ly", "26,700 ly", "2.5 million ly". */
export function formatLy(ly: number): string {
  if (ly >= 1e6) {
    const m = ly / 1e6
    return `${m >= 10 ? m.toFixed(0) : (Math.round(m * 100) / 100).toString()} million ly`
  }
  if (ly >= 1000) {
    const step = 10 ** (Math.floor(Math.log10(ly)) - 2) // three significant figures
    return `${(Math.round(ly / step) * step).toLocaleString('en-US')} ly`
  }
  if (ly >= 100) return `${Math.round(ly)} ly`
  if (ly >= 10) return `${ly.toFixed(1).replace(/\.0$/, '')} ly`
  return `${ly.toFixed(2).replace(/0$/, '')} ly`
}
