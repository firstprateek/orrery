import { planet, star } from './build'
import type { StarSystemDef } from './types'

// TRAPPIST-1: M8 V, 0.0898 M☉, 0.119 R☉, 2,566 K. All seven planets transit, so
// their radii are measured; periods, semi-major axes and radii are from Agol
// et al. (2021).
const M = 0.0898

const system: StarSystemDef = {
  id: 'trappist1',
  name: 'TRAPPIST-1',
  primaryId: 'trappist1',
  defaultFocusId: 'trappist1-e',
  starTempK: { trappist1: 2566 },
  looks: {
    trappist1: 'star',
    'trappist1-b': 'lava', 'trappist1-c': 'desert', 'trappist1-d': 'rocky',
    'trappist1-e': 'ocean', 'trappist1-f': 'ice', 'trappist1-g': 'ice', 'trappist1-h': 'ice',
  },
  bodies: [
    star({
      id: 'trappist1', name: 'TRAPPIST-1', radiusSun: 0.119, rotationHours: 3.3 * 24,
      facts: 'An ultracool red dwarf barely bigger than Jupiter, 40.7 light-years away. All seven planets would fit inside Mercury’s orbit. Orbit layout is illustrative.',
    }),
    planet({ id: 'trappist1-b', name: 'TRAPPIST-1 b', parent: 'trappist1', periodDays: 1.510826, aAu: 0.01154, radiusEarth: 1.116, maDeg: 0, color: 0x7a4a3a,
      facts: 'JWST found no thick atmosphere here: a bare, roasting rock with a 36-hour year.' }, M),
    planet({ id: 'trappist1-c', name: 'TRAPPIST-1 c', parent: 'trappist1', periodDays: 2.421937, aAu: 0.0158, radiusEarth: 1.097, maDeg: 51, color: 0xa08060,
      facts: 'Venus-like in sunlight, but JWST rules out a thick carbon-dioxide atmosphere like Venus’s.' }, M),
    planet({ id: 'trappist1-d', name: 'TRAPPIST-1 d', parent: 'trappist1', periodDays: 4.049219, aAu: 0.02227, radiusEarth: 0.788, maDeg: 103, color: 0x8a7f74,
      facts: 'Smaller than Earth, at the hot inner edge of the habitable zone.' }, M),
    planet({ id: 'trappist1-e', name: 'TRAPPIST-1 e', parent: 'trappist1', periodDays: 6.101013, aAu: 0.02925, radiusEarth: 0.92, maDeg: 154, color: 0x4f78a8,
      facts: 'The most Earth-like of the seven in size, density and starlight — a top target in the search for a habitable world.' }, M),
    planet({ id: 'trappist1-f', name: 'TRAPPIST-1 f', parent: 'trappist1', periodDays: 9.20754, aAu: 0.03849, radiusEarth: 1.045, maDeg: 206, color: 0xb9c6d2,
      facts: 'In the habitable zone but cooler: it may be an ice-covered world, perhaps with an ocean beneath.' }, M),
    planet({ id: 'trappist1-g', name: 'TRAPPIST-1 g', parent: 'trappist1', periodDays: 12.352446, aAu: 0.04683, radiusEarth: 1.129, maDeg: 257, color: 0xc6d0da,
      facts: 'The largest of the seven, at the cold outer edge of the habitable zone.' }, M),
    planet({ id: 'trappist1-h', name: 'TRAPPIST-1 h', parent: 'trappist1', periodDays: 18.772866, aAu: 0.06189, radiusEarth: 0.755, maDeg: 309, color: 0xd5dde4,
      facts: 'The outermost and coldest, a small frozen world. The seven orbits are locked in a chain of resonances.' }, M),
  ],
}

export default system
