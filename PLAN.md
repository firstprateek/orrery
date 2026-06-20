# Orrery Web — Implementation Plan

A fully static, browser-based 3D interactive solar system explorer. Fly from
whole-system scale down to a single moon, click any body to inspect it, scrub
time, toggle realistic vs. visible scale — all against one physically-correct
shared night sky.

> Direction chosen: **pragmatic core first** (ship a polished MVP in weeks,
> then layer cinematic polish and/or scientific breadth as v2).
>
> **Progress:** M0 (scale spike), M1 (real bodies), M2 (click-to-fly camera), M3
> (time controls + scale toggle), and M4 parts 1–3 (HDR Sun bloom + instanced
> asteroid belt + planetary atmospheres + accurate star field) are implemented
> and verified — see `src/`. Remaining M4 (Saturn ring shadows, adaptive-quality
> ladder) is the next pass.

---

## 0. Scope

### In scope (MVP)
- Sun + 8 planets + Pluto.
- ~13 major moons: Moon; Phobos, Deimos; Io, Europa, Ganymede, Callisto; Titan,
  Rhea, Iapetus; Titania, Oberon; Triton.
- **One** inertially-fixed J2000 star + Milky-Way sky shared by every body.
- Saturn's rings (textured alpha ring plane).
- Representative asteroid belt: ~5–10k instanced bodies (a visual *sample*, not
  the real catalog).
- Two coordinate modes: **true-scale** (linear) and **visual** (log-radial +
  log-size so the Sun and Mercury are both on screen). User toggle.
- Logarithmic focus-and-orbit camera; smooth focus transitions; per-body zoom
  clamps.
- Click / search to select a body → DOM info panel with facts.
- Basic time: play / pause / speed multiplier / "now" reset.
- Sun HDR bloom with FPS-based auto-degrade.
- URL deep-linking: `?obj=<body>&date=<iso>` (and camera state).
- Keyboard navigation + ARIA live region announcing the focused body.
- Fully static bundle. No backend. Runs on the Mac Mini or any CDN. Works
  offline after first load.

### Explicitly deferred (v2 / dream — not built now)
- Full small-body catalog (~1.3M / Asterank-scale), comets, artificial satellites.
- "Stand on the surface" local-sky / day-night mode (IAU rotational elements,
  rise/set, analytic eclipse shadows).
- Real DE440 / cspice-WASM "JPL-grade" high-fidelity mode.
- Billion-star Gaia field, constellation lines, deep-sky (Messier/NGC) labels.
- Tiled planet-surface imagery (NASA Treks style).
- WebGPU renderer path, WebXR/VR.
- Interstellar "fly to Alpha Centauri" parallax mode.
- Hundreds of newly-discovered irregular moons (no polished ephemerides exist).

### Accuracy contract (surfaced in the UI — do not claim "accurate" wholesale)
| Body class | Method | Stated accuracy |
|---|---|---|
| Sun, Moon, 8 planets, Pluto | `astronomy-engine` | ~1 arcmin (visualization-grade, not DE440) |
| Galilean moons (Io/Europa/Ganymede/Callisto) | `astronomy-engine` JupiterMoons | "approximate" — separate model, **not** in the ±1 arcmin guarantee |
| Other moons + asteroid-belt sample | 2-body Kepler from baked elements | "approximate / visual" |
| Deep-sky background | one shared J2000 sky | shared on purpose — parallax across the system is sub-pixel |

---

## 1. Tech stack (pin versions in package.json)

| Concern | Choice | Why |
|---|---|---|
| Engine | **three.js r184** (`WebGLRenderer`, `{ logarithmicDepthBuffer: true }`) | Built-in log-depth, InstancedMesh, LOD, Points, bloom. WebGL2 reaches every device incl. older iPhones; avoids the current three.js `WebGPURenderer` + log-depth bug. |
| Language / build | **TypeScript + Vite** (vanilla, no React) | Lean static bundle; full control over the scale/render loop; avoids R3F's lagging WebGPU path. (Next.js static export is an option if you want to mirror the Pulse/FinTrack stack — Vite is leaner here.) |
| Ephemeris | **astronomy-engine** (cosinekitty, MIT, ~116 KB) | In-browser float64 positions for Sun/Moon/planets/Pluto + Galileans. Zero network. |
| Other moons + belt | **own 2-body Kepler propagator** (~80 LOC) | Spacekit's Kepler math as reference, not a runtime dep (it warns "API may change"). |
| Camera | **camera-controls** (yomotsu) | Damped focus/orbit, `setLookAt` tweening, per-body min/max distance. |
| Textures | **KTX2 / Basis** (three.js `KTX2Loader`) | Compressed GPU textures; 2K default, lazy 8K on zoom. |
| Dev only | `lil-gui`, `stats.js` | Live tuning + FPS during the scale spike. |

Build-time tooling (Node scripts, not shipped): `node-fetch` for JPL queries,
`sharp` + `basisu`/`toktx` for texture conversion, an EXR reader for the skybox.

---

## 2. Repository layout

```
orrery/
  index.html
  package.json
  vite.config.ts
  CREDITS.md                      # licensing/attribution (load-bearing)
  PLAN.md                         # this file
  public/
    assets/                       # generated; gitignored (textures, skybox, models)
  data/                           # generated; checked in (small)
    moons.json                    # baked osculating elements (parent-centered, ecliptic J2000)
    belt.bin                      # packed Float32Array of belt elements
  scripts/                        # build-time, run manually / in CI
    bake-moons.ts                 # JPL Horizons ELEMENTS -> moons.json
    bake-belt.ts                  # JPL SBDB query -> belt.bin
    convert-textures.ts           # Solar System Scope maps -> KTX2 (2K + 8K)
    convert-skybox.ts             # SVS Deep Star Map EXR -> KTX2/cubemap (+ orientation check)
  src/
    main.ts                       # bootstrap + render loop
    config/
      constants.ts                # AU_KM, unit scales, LOD thresholds, perf budgets
      bodies.ts                   # static body registry (see §6)
    sim/                          # LAYER 1 — float64 simulation, true AU, J2000 ecliptic
      time.ts                     # sim clock: Julian date, speed, play/pause, "now"
      ephemeris.ts                # astronomy-engine wrappers -> Vec3 (AU, heliocentric)
      kepler.ts                   # 2-body propagation from osculating elements
      frame.ts                    # frame/unit conventions + conversions
    scene/
      Renderer.ts                 # WebGLRenderer + EffectComposer (bloom)
      FloatingOrigin.ts           # LAYER 3 precision: camera at 0,0,0, per-focus rebasing
      scaleMapping.ts             # LAYER 2: true-scale vs visual remap (position + radius)
      CameraRig.ts                # camera-controls, log zoom, focus transitions, near/far
      Sky.ts                      # shared J2000 sky sphere/cubemap
      bodies/
        Body.ts                   # base class: mesh, LOD, pick id, label anchor
        Sun.ts                    # emissive + bloom contributor
        Planet.ts                 # PBR material; Saturn ring plane; Earth day/night
        Moon.ts
        AsteroidBelt.ts           # InstancedMesh + LOD -> Points
      picking/Picker.ts           # raycaster, bounding-volume-first
      labels/LabelLayer.ts        # screen-space CSS2D labels (DOM)
    ui/                           # DOM overlay (accessible, deep-linkable)
      InfoPanel.ts                # facts on selection
      Search.ts                   # type-ahead body list
      Timeline.ts                 # play/pause/speed/now
      ScaleToggle.ts
      Controls.ts                 # keyboard nav + ARIA live region
      urlState.ts                 # ?obj= & ?date= read/write
    styles/                       # plain CSS for the overlay
```

---

## 3. The coordinate-system contract (the keystone — get this right first)

Everything hard about this project is precision and scale. Three decoupled
layers, defined on day one and never violated:

**Layer 1 — Simulation (truth).** All positions in **AU, heliocentric, J2000
ecliptic frame**, computed as plain JS numbers (float64). `astronomy-engine`
returns vectors in this frame already (`Astronomy.HelioVector`). Baked moon
elements are stored **parent-centered in ecliptic-of-J2000** (requested that way
from Horizons) so a moon's world position = parent's helio position + Kepler
offset — no per-planet equatorial-pole conversion needed for the MVP. Belt
elements from SBDB are heliocentric ecliptic J2000 → propagate directly.

**Layer 2 — Scale mapping.** A pure function `simToRender(posAU, mode)`:
- `true-scale`: `render = posAU * K` (e.g. 1 unit = 1 AU). Radii also in AU.
- `visual`: monotonic log-ish radial remap (pull outer planets inward) +
  logarithmic size map (so the Sun and Mercury are both visible). Must preserve
  ordering and avoid body overlaps. Animate K/params when toggling.

**Layer 3 — Floating origin + log depth.** Each frame:
1. `origin = helioPos(focusedBody)` in AU (float64).
2. For every rendered object: `mesh.position = simToRender(helioPos - origin, mode)`.
   Subtracting in float64 *before* the value reaches the GPU is what kills jitter
   — absolute AU values are never uploaded as float32.
3. Camera orbits near (0,0,0).
4. `renderer = new WebGLRenderer({ logarithmicDepthBuffer: true })`; set
   `camera.near/far` per focus (tight near for a moon, huge far for the system).

**Invariant to enforce in review:** no absolute heliocentric AU value is ever
assigned to a `mesh.position` or uploaded to a buffer. Always camera-relative.

---

## 4. Milestones & task breakdown

### M0 — Scale spike (Week 1) — **GATE** ✅ done
Prove the precision stack works end-to-end on a throwaway scene.
- [x] Vite + TS + three.js r184 skeleton, render loop. (stats.js deferred — not needed yet.)
- [x] `WebGLRenderer({ logarithmicDepthBuffer: true })` — `scene/Renderer.ts`.
- [x] `FloatingOrigin` + `scaleMapping` (true-scale only for now) — both pure + unit-tested.
- [x] `CameraRig`: camera-controls focus-and-orbit with logarithmic zoom.
- [x] Place the Sun, Neptune (true AU), and a 1 km test sphere beyond Neptune.
- [x] Zoom continuously Sun → Neptune → 1 km sphere (keys 1/2/3 + scroll).
- **Acceptance met:** the 1 km sphere (~3e-9 AU, 30 AU from origin) renders with a
  clean silhouette and no z-fighting/jitter; focus changes rebase the origin
  correctly. Verified in-browser. (60fps desktop confirmed; real-iPhone check is a
  follow-up before relying on it for the MVP.)

### M1 — Bodies & ephemeris (Weeks 2–3) ✅ done
- [x] `config/bodies.ts` registry for Sun + 8 planets + Pluto + 13 moons (verified data).
- [x] `sim/ephemeris.ts`: astronomy-engine wrappers (planets, Pluto, Moon, Galileans), all rotated into one ecliptic-J2000 frame.
- [x] `sim/kepler.ts`: 2-body propagator for the other moons (elements embedded in the registry, parent-centred ecliptic J2000).
- [x] Shared-geometry body meshes with real CC BY 4.0 textures; correct relative sizes; axial tilt + visual spin.
- [x] Saturn ring plane (alpha-mapped, radial-strip UV).
- [x] Sun lighting + faint ambient; shared Milky-Way sky; body picker + fact panel.
- **Acceptance met:** ephemeris tests confirm planets at correct heliocentric AU
  and moons at correct parent distances; Triton retrograde; verified in-browser
  (Earth, Saturn render correctly with textures, lighting, rings, ~5 draw calls).
  (Per-moon textures beyond Earth's Moon and Horizons-baked element refresh are
  follow-ups; embedded mean elements are accurate to visualization grade.)

### M2 — Camera, picking, focus UX (Week 4) ✅ done
- [x] Click-to-select via `Picker` (ray-vs-bounding-sphere, screen-space pick floor).
- [x] Smooth fly-to: `FocusController` glides the floating origin in AU with a
      critically-damped spring (no jump), camera-controls frames the sunlit side.
- [x] Per-body min/max zoom clamps + per-focus near/far (no clipping into surfaces).
- [x] Custom projected-DOM labels (translate3d, not CSS2D) with priority/angular-size/
      collision declutter; hover highlight.
- [x] `?obj=<id>` deep-link (instant framing on load, debounced replaceState).
- **Acceptance met:** spring math unit-tested (monotonic, no overshoot, frame-rate
  independent); ray-sphere picking unit-tested; verified in-browser (deep-link to a
  lit Jupiter, decluttered labels, click-pick without error).

### M3 — UI overlay + time + scale toggle (Weeks 4–5) ✅ done
- [x] Fact panel (DOM) on the focused body (info panel; `Search` type-ahead deferred — the picker dropdown covers selection).
- [x] `TimeBar`: play/pause, speed ladder (Julian-days/sec), "now", date readout, scrubber. SimClock advances jd; ephemeris is absolute-time so fast/scrub jumps stay correct.
- [x] Scale toggle: `makeVisualScale` (log-radial + log-size) + animated blend (smoothDamp) between true and visual; per-frame near/far + camera-distance rescale so the focused body stays framed (no depth-fighting/jump). Moons collapse onto their planet in visual mode (overview hides them).
- [x] `urlState`: `?obj=` & `?date=` read on load, debounced replaceState (date only when paused).
- **Acceptance met:** all UI is real DOM (keyboard reachable, ARIA labels);
  deep-link round-trips; verified in-browser (true Earth ↔ visual "poster" of the
  whole system with Saturn's rings, 20 draw calls). Fixed: focus now LOCKS onto a
  moving body during playback (was drifting off-frame) — covered by a new test.

### M4 — Sky, Sun bloom, asteroid belt, textures (Weeks 5–6) 🟡 in progress
Part 1 ✅: HDR Sun bloom (`scene/Composer.ts` — EffectComposer with a multisampled
HalfFloat target → RenderPass → UnrealBloomPass selective on the HDR Sun →
OutputPass for ACES + sRGB; renderer antialias off, AA via MSAA target) and the
instanced asteroid belt (`math/belt.ts` seeded distribution + one InstancedMesh,
true-scale floating-origin offset, hidden in the visual overview).
Part 2 ✅: planetary atmospheres (`scene/Atmosphere.ts` — back-face Fresnel rim
shell ShaderMaterial with the `<logdepthbuf_*>` chunks added by hand so log-depth
works on a custom shader; sun-direction term gives terminator twilight; per-body
tints for Earth/Venus/Mars/Titan + gas-giant limb; scaled with the body).
Part 3 ✅: accurate star field (`scripts/fetch-stars.mjs` bakes the Yale BSC ~9k
stars to `public/data/stars.bin`; `scene/StarField.ts` builds one THREE.Points
cloud, blackbody colour from temperature + magnitude sizing, equatorial→ecliptic
rotation, follows the camera, depthTest off; pure `tempToRgb` + `raDecToVec3` are
unit-tested). Remaining: Saturn ring shadows, adaptive-quality ladder. Task list:
- [ ] `Sky`: shared J2000 sky sphere from SVS Deep Star Map. **Verify orientation**
      (Milky Way must land at its ~62.9° tilt automatically — do not tilt manually;
      confirm the asset is equatorial J2000, correct longitude origin, no axis flip).
- [ ] `scripts/convert-skybox.ts` + `convert-textures.ts` → KTX2 (2K default, 8K lazy).
- [ ] Real Solar System Scope textures; Earth day/night/clouds + normal + specular.
- [ ] `Sun`: emissive + `EffectComposer` + `UnrealBloomPass`, FPS-based auto-degrade.
- [ ] `AsteroidBelt`: `bake-belt.ts` (SBDB → `belt.bin`) → InstancedMesh, single draw
      call, `THREE.LOD` demote to Points at distance. Belt density is artistic.
- **Acceptance:** correct night sky from every body; Sun shrinks with distance
  (point-like from Pluto); belt renders in one draw call; bloom auto-degrades < 30fps.

### M5 — Mobile perf, accessibility, ship (Weeks 6–8)
- [ ] Cap `devicePixelRatio`, frustum culling, texture-memory budget, KTX2 fallbacks;
      validate 8K textures don't exceed `MAX_TEXTURE_SIZE`/VRAM on older iPhones.
- [ ] Keyboard navigation (cycle/select bodies, rotate/zoom) + ARIA live region.
- [ ] `CREDITS.md` complete & linked (CC BY 4.0 + NASA public domain; no SA assets).
- [ ] Lighthouse/perf pass; static build; deploy to Mac Mini / CDN.
- **Acceptance:** smooth on a mid iPhone; screen-reader announces focused body;
  fully static; offline after first load.

---

## 5. Data & asset pipeline (build-time, baked to static files)

- **Ephemeris (runtime, free):** astronomy-engine for Sun, Moon, 8 planets,
  Pluto, Galileans.
- **Moons (baked once):** Horizons `ELEMENTS`, parent-centered, ecliptic J2000,
  for Phobos, Deimos, Titan, Rhea, Iapetus, Titania, Oberon, Triton →
  `data/moons.json`. (Horizons allows up to 90,000 points/request; we only need a
  single epoch's osculating elements per moon.)
- **Belt (baked once):** SBDB Query API — numbered + named + largest by H, a few
  thousand → packed `Float32Array` (`a, e, i, Ω, ω, M0, epoch`) in `belt.bin`.
  Never ship the full ~190 MB MPCORB catalog.
- **Planet/Moon/Sun/ring textures:** Solar System Scope (CC BY 4.0) → KTX2, 2K
  default + 8K lazy on zoom.
- **Skybox:** NASA SVS Deep Star Maps 2020, 8K EXR → KTX2/cubemap, J2000 framing.
- **Optional close-up models (v2):** NASA 3D Resources GLB (Bennu/Eros/Itokawa),
  decimated to ~10–50k tris with baked normals.
- **Licensing:** keep a clean **CC BY 4.0 + NASA public-domain** footprint;
  **avoid share-alike assets** (ESA Gaia panorama, OpenNGC) in the MVP. One
  `CREDITS.md`.

---

## 6. Body registry shape (`config/bodies.ts`)

```ts
type Ephemeris =
  | { kind: 'astronomy-engine'; body: string }            // planets, Pluto, Moon
  | { kind: 'astronomy-engine-jupiter-moon'; moon: string } // Galileans
  | { kind: 'kepler'; parent: string; elementsId: string }  // baked moons

interface BodyDef {
  id: string                 // url-safe, used in ?obj=
  name: string
  type: 'star' | 'planet' | 'dwarf' | 'moon'
  parent: string | null      // 'sun' or planet id
  radiusKm: number
  ephemeris: Ephemeris
  texture: { base: string; night?: string; clouds?: string; normal?: string; specular?: string }
  ring?: { innerKm: number; outerKm: number; texture: string }
  facts: { mass?: string; day?: string; year?: string; discovered?: string; notes?: string }
}
```

Rotation/obliquity (IAU pole RA/Dec + prime meridian W + spin rate) is recorded
but only *used* in v2's surface mode; the MVP can spin planets on their tilted
axis for visual life without needing the full observer-frame math.

---

## 7. Performance budget (targets, validate in M5)

- 60fps desktop; ≥30fps mid-range mobile.
- Asteroid belt: one InstancedMesh draw call; LOD → Points beyond a distance.
- Bloom ≤ ~3–5 ms/frame; auto-degrade (drop bloom, then atmosphere) under 30fps.
- Textures: 2K default; lazy 8K only for the focused body; KTX2 compressed.
- Cap `devicePixelRatio` (≤2); frustum culling on; no uncapped Points sizes.

---

## 8. Top risks & mitigations

1. **Float32 jitter when zoomed in** — the defining failure mode. Mitigation:
   the §3 floating-origin + float64-sim + log-depth stack, proven in M0 before
   any features. Retrofitting is brutal.
2. **Log depth side-effects** — writes `gl_FragDepth`, disables early-Z, degrades
   MSAA at intersecting geometry. Mitigation: accept the trade-off or use FXAA/
   SMAA post-AA; validate on target devices. (On WebGL2 `gl_FragDepth` is core —
   no extension needed.)
3. **Frame/unit inconsistency** (heliocentric vs. parent-centered, ecliptic vs.
   equatorial, AU vs. km, TDB vs. UTC) — the classic "planet in the wrong place"
   bug. Mitigation: one internal convention (§3), convert only at the edges.
4. **Mobile GPU stutter / 8K texture VRAM** — Mitigation: KTX2, capped DPR, lazy
   8K, budget, auto-degrade.
5. **Skybox mis-orientation** — Mitigation: explicit M4 verification task; never
   hand-tilt the Milky Way.
6. **Scope creep** toward catalogs/Stellarium/surface mode — Mitigation: hold the
   §0 line; those are v2/dream, tracked but not built.

---

## 9. Definition of done (MVP)

- [ ] Fly continuously from full-system to a moon surface with zero jitter.
- [ ] All Sun + 8 planets + Pluto + 13 moons present, correctly placed for "now".
- [ ] One shared, correctly-oriented J2000 night sky from every body; Sun shrinks
      with distance.
- [ ] Scale toggle, time play/pause/speed/now, click/search + info panel, Sun bloom.
- [ ] `?obj=` & `?date=` deep-linking round-trips.
- [ ] Keyboard navigable + ARIA focus announcements.
- [ ] Runs on a real iPhone; fully static; offline after first load.
- [ ] `CREDITS.md` complete; clean CC BY / public-domain footprint.
```
