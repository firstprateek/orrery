# Orrery

A 3D interactive solar system explorer that runs entirely in the browser. Fly
from whole-system scale down to a single moon, click any body to inspect it,
scrub time, and toggle realistic vs. visible scale — all against one
physically-correct shared night sky.

[![CI](https://github.com/firstprateek/orrery/actions/workflows/ci.yml/badge.svg)](https://github.com/firstprateek/orrery/actions/workflows/ci.yml)

## Live demo

▶ **https://firstprateek.github.io/orrery/**

Currently this is the **M0 scale spike**: press **1 / 2 / 3** to jump focus
between the Sun, Neptune (30 AU away), and a 1 km test sphere; **scroll** to zoom,
**drag** to orbit. It's deliberately minimal — it exists to prove the camera can
travel the solar system's full scale range (whole system down to a 1 km object)
with no jitter, which is the foundation the real bodies, textures, and sky get
built on next.

> **Status:** M3 done — it's alive and explorable. **Time controls** (play/pause,
> speed up to 1 year/s, "now", a date scrubber) move the planets along their real
> orbits, and a **realistic ↔ visual scale toggle** animates between true scale and
> a "poster" overview where the whole system is visible at once. On top of M2's
> click-to-fly camera and M1's real Sun + 8 planets + Pluto + 13 moons with
> textures, ephemeris, rings, and the shared Milky-Way sky. Next: M4 (bloom,
> atmospheres, ring shadows, asteroid belt). See [PLAN.md](PLAN.md).

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
