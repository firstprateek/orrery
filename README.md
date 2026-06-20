# Orrery

A 3D interactive solar system explorer that runs entirely in the browser. Fly
from whole-system scale down to a single moon, click any body to inspect it,
scrub time, and toggle realistic vs. visible scale — all against one
physically-correct shared night sky.

[![CI](https://github.com/firstprateek/orrery/actions/workflows/ci.yml/badge.svg)](https://github.com/firstprateek/orrery/actions/workflows/ci.yml)

> **Status:** foundation / pre-M0. Build tooling, the Kepler core, and CI are in
> place. The first feature milestone is the **scale spike** (jitter-free
> Sun → Neptune → 1 km-asteroid zoom). See [PLAN.md](PLAN.md) for the full
> roadmap.

## Why one shared sky

Within the solar system the deep-sky background (stars, Milky Way, galaxies) is
effectively identical from every body — stellar parallax is ~0.77 arcsec per AU,
far below a screen pixel. So Orrery builds **one** inertially-fixed J2000 sky
shared by all bodies. What makes each viewpoint different is the Sun's direction
and shrinking disk, plus the positions of the other planets and moons — not the
stars. (This is how Stellarium, Celestia, and NASA's Eyes work.)

## Tech

- [three.js](https://threejs.org) r184 on a WebGL2 baseline (logarithmic depth
  buffer + floating origin for the ~10-orders-of-magnitude scale range).
- TypeScript + [Vite](https://vite.dev).
- [astronomy-engine](https://github.com/cosinekitty/astronomy) for planet/Sun/
  Moon/Galilean positions; a hand-rolled 2-body Kepler propagator for other
  moons and the sampled asteroid belt.
- [Vitest](https://vitest.dev) for unit tests; GitHub Actions for CI.
- Fully static — no backend.

## Development

```bash
npm install      # install dependencies
npm run dev      # start the dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run typecheck
npm test         # run unit tests
npm run test:watch
```

## Project structure

See [PLAN.md](PLAN.md) for the milestone plan, the coordinate-system contract
(the precision keystone), the body registry schema, the build-time data/asset
pipeline, and the accuracy contract.

## Accuracy

This is visualization-grade, not spacecraft-grade. Planet/Sun/Moon positions are
~1 arcmin; moons and the asteroid belt are 2-body Kepler approximations. The UI
surfaces a per-class accuracy contract rather than claiming blanket accuracy.

## Credits & licensing

Code is MIT licensed ([LICENSE](LICENSE)). Visual assets (planet textures, star
maps) are sourced from Solar System Scope (CC BY 4.0) and NASA SVS / public
domain; attributions will be collected in `CREDITS.md` as assets are added.
