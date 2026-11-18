import { planet, star } from './build'
import type { StarSystemDef } from './types'

// Proxima Centauri: M5.5 V red dwarf, 0.122 M☉, 0.154 R☉, ~3,000 K. Planets b
// (Anglada-Escudé 2016) and d (Faria 2022), both confirmed by radial velocity
// only, so their sizes are estimated from their minimum masses.
const M = 0.122

const system: StarSystemDef = {
  id: 'proxima',
  name: 'Proxima Centauri',
  primaryId: 'proxima',
  defaultFocusId: 'proxima-b',
  starTempK: { proxima: 3000 },
  looks: { proxima: 'star', 'proxima-d': 'lava', 'proxima-b': 'rocky' },
  bodies: [
    star({
      id: 'proxima', name: 'Proxima Centauri', radiusSun: 0.154, rotationHours: 83 * 24,
      facts: 'The closest star to the Sun, 4.25 light-years away: a red dwarf a seventh the size of the Sun that throws off powerful flares. Planet sizes are estimated from their masses; orbit layout is illustrative.',
    }),
    planet({
      id: 'proxima-d', name: 'Proxima d', parent: 'proxima', periodDays: 5.122, massEarth: 0.26, maDeg: 40, color: 0x9a6a50,
      facts: 'Found in 2022, one of the lightest planets ever detected by the wobble it gives its star: about a quarter of Earth’s mass, on a 5-day orbit.',
    }, M),
    planet({
      id: 'proxima-b', name: 'Proxima b', parent: 'proxima', periodDays: 11.1868, massEarth: 1.07, maDeg: 200, color: 0x8c7a66,
      facts: 'The nearest known exoplanet: at least Earth’s mass, in the zone where water could be liquid. Its 11-day year and the star’s flares make life there an open question.',
    }, M),
  ],
}

export default system
