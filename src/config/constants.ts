import type { Vec3 } from '../math/vec3'

/** Astronomical unit in kilometres (IAU 2012 definition). */
export const AU_KM = 149_597_870.7

/** Convert a distance in kilometres to astronomical units. */
export const kmToAu = (km: number): number => km / AU_KM

export interface SpikeBody {
  id: string
  name: string
  /** Absolute heliocentric position in AU (true positions, float64). */
  absAu: Vec3
  /** Body radius in AU. */
  radiusAu: number
  color: number
}

// Bodies for the M0 scale spike: the Sun, Neptune at its mean distance, and a
// 1 km test sphere parked just beyond Neptune. The point is the precision
// torture test — a ~3e-9 AU object ~30 AU from the origin must render without
// jitter or z-fighting as you zoom across ten orders of magnitude.
const NEPTUNE_DIST_AU = 30.07
const NEPTUNE_RADIUS_AU = kmToAu(24_622)

export const SPIKE_BODIES: SpikeBody[] = [
  { id: 'sun', name: 'Sun', absAu: { x: 0, y: 0, z: 0 }, radiusAu: kmToAu(695_700), color: 0xffcc44 },
  {
    id: 'neptune',
    name: 'Neptune',
    absAu: { x: NEPTUNE_DIST_AU, y: 0, z: 0 },
    radiusAu: NEPTUNE_RADIUS_AU,
    color: 0x4f7fff,
  },
  {
    id: 'probe',
    name: '1 km test sphere',
    absAu: { x: NEPTUNE_DIST_AU + NEPTUNE_RADIUS_AU * 2, y: 0, z: 0 },
    radiusAu: kmToAu(0.5),
    color: 0xff4fcc,
  },
]
