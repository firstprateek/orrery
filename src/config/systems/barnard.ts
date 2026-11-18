import { planet, star } from './build'
import type { StarSystemDef } from './types'

// Barnard's Star: M4 V, 0.162 M☉, 0.187 R☉, ~3,200 K, the fastest-moving star
// across our sky. Four planets from radial velocity: b (González Hernández
// 2024) and c, d, e (Basant 2025), each a fifth to a third of Earth's mass.
const M = 0.162

const system: StarSystemDef = {
  id: 'barnard',
  name: "Barnard's Star",
  primaryId: 'barnard',
  defaultFocusId: 'barnard-b',
  starTempK: { barnard: 3200 },
  looks: { barnard: 'star', 'barnard-d': 'lava', 'barnard-b': 'lava', 'barnard-c': 'rocky', 'barnard-e': 'rocky' },
  bodies: [
    star({
      id: 'barnard', name: "Barnard's Star", radiusSun: 0.187, rotationHours: 145 * 24,
      facts: 'A dim red dwarf about 10 billion years old, crossing our sky faster than any other star. Planet sizes are estimated from their masses; orbit layout is illustrative.',
    }),
    planet({ id: 'barnard-d', name: 'Barnard d', parent: 'barnard', periodDays: 2.340, massEarth: 0.26, maDeg: 10, color: 0x8a5a44,
      facts: 'The innermost of four small, scorching planets, circling every 2.3 days.' }, M),
    planet({ id: 'barnard-b', name: 'Barnard b', parent: 'barnard', periodDays: 3.154, massEarth: 0.30, maDeg: 130, color: 0x96644a,
      facts: 'Announced in 2024, about a third of Earth’s mass, far too hot for liquid water.' }, M),
    planet({ id: 'barnard-c', name: 'Barnard c', parent: 'barnard', periodDays: 4.124, massEarth: 0.34, maDeg: 250, color: 0x8d7b6a,
      facts: 'The heaviest of the four, confirmed in 2025 with the MAROON-X spectrograph.' }, M),
    planet({ id: 'barnard-e', name: 'Barnard e', parent: 'barnard', periodDays: 6.739, massEarth: 0.19, maDeg: 320, color: 0x7f776e,
      facts: 'The lightest and outermost, about a fifth of Earth’s mass — still closer to its star than Mercury is to the Sun.' }, M),
  ],
}

export default system
