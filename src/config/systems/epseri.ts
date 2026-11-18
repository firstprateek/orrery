import { planet, star } from './build'
import type { StarSystemDef } from './types'

// Epsilon Eridani: K2 V, 0.82 M☉, 0.735 R☉, 5,080 K, ~600 Myr old. Planet b
// from radial velocity plus astrometry (Mawet 2019; Llop-Sayson 2021):
// P ≈ 7.4 yr, a ≈ 3.5 AU, e ≈ 0.06, about two-thirds of Jupiter's mass.

const system: StarSystemDef = {
  id: 'epseri',
  name: 'Epsilon Eridani',
  primaryId: 'epseri',
  defaultFocusId: 'epseri-b',
  starTempK: { epseri: 5080 },
  looks: { epseri: 'star', 'epseri-b': 'gas' },
  bodies: [
    star({
      id: 'epseri', name: 'Epsilon Eridani', radiusSun: 0.735, rotationHours: 11.4 * 24,
      facts: 'A young orange star, about 600 million years old, wrapped in debris belts like a younger Solar System. The planet’s size is estimated from its mass.',
    }),
    planet({
      id: 'epseri-b', name: 'Epsilon Eridani b', parent: 'epseri', periodDays: 2690, aAu: 3.5, e: 0.06, massEarth: 210, maDeg: 60, color: 0xc9a77c,
      facts: 'A gas giant about two-thirds Jupiter’s mass on a 7.4-year orbit — roughly where the asteroid belt would sit in our system.',
    }, 0.82),
  ],
}

export default system
