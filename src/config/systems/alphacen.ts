import { star } from './build'
import type { StarSystemDef } from './types'

// Alpha Centauri A (G2 V, 1.08 M☉, 1.22 R☉, 5,790 K) and B (K1 V, 0.91 M☉,
// 0.86 R☉, 5,260 K) on their visual orbit: P = 79.9 yr, a = 23.4 AU,
// e = 0.52 (Pourbaix & Boffin 2016). No confirmed planets: a 2025 JWST
// candidate giant around A is still unconfirmed, so it isn't drawn.

const system: StarSystemDef = {
  id: 'alphacen',
  name: 'Alpha Centauri A & B',
  primaryId: 'acen-a',
  defaultFocusId: 'acen-a',
  starTempK: { 'acen-a': 5790, 'acen-b': 5260 },
  looks: { 'acen-a': 'star', 'acen-b': 'star' },
  binary: { primary: 'acen-a', secondary: 'acen-b', secondaryMassFraction: 0.909 / (1.079 + 0.909) },
  bodies: [
    star({
      id: 'acen-a', name: 'Alpha Centauri A', radiusSun: 1.22, rotationHours: 22 * 24,
      facts: 'A near twin of the Sun, slightly larger and older. With B it makes the third-brightest point in Earth’s night sky. A possible giant planet seen by JWST in 2025 is not yet confirmed.',
    }),
    star({
      id: 'acen-b', name: 'Alpha Centauri B', parent: 'acen-a', radiusSun: 0.86, rotationHours: 36 * 24,
      orbit: { aAu: 23.4, e: 0.52, periodDays: 79.91 * 365.25, maDeg: 120 },
      facts: 'A cooler orange star that swings between 11 and 36 AU from A every 80 years — from Saturn’s distance to beyond Neptune’s.',
    }),
  ],
}

export default system
