import { star } from './build'
import type { StarSystemDef } from './types'

// Sirius A (A1 V, 2.06 M☉, 1.71 R☉, 9,940 K) and the white dwarf Sirius B
// (1.02 M☉, 0.0084 R☉ ≈ 5,800 km, ~25,000 K). Orbit: P = 50.1 yr, a = 19.8 AU,
// e = 0.59 (Bond et al. 2017).

const system: StarSystemDef = {
  id: 'sirius',
  name: 'Sirius',
  primaryId: 'sirius-a',
  defaultFocusId: 'sirius-b',
  starTempK: { 'sirius-a': 9940, 'sirius-b': 25000 },
  looks: { 'sirius-a': 'star', 'sirius-b': 'star' },
  binary: { primary: 'sirius-a', secondary: 'sirius-b', secondaryMassFraction: 1.018 / (2.063 + 1.018) },
  bodies: [
    star({
      id: 'sirius-a', name: 'Sirius A', radiusSun: 1.711, rotationHours: 16 * 24,
      facts: 'The brightest star in Earth’s night sky: twice the Sun’s mass and 25 times as luminous, only 8.6 light-years away.',
    }),
    star({
      id: 'sirius-b', name: 'Sirius B', parent: 'sirius-a', radiusSun: 0.0084, rotationHours: 2,
      orbit: { aAu: 19.8, e: 0.59, periodDays: 50.13 * 365.25, maDeg: 300 },
      facts: 'A white dwarf: the leftover core of a star once bigger than Sirius A, now as massive as the Sun but barely larger than Earth.',
    }),
  ],
}

export default system
