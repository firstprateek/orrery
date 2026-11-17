# Orrery: notes for agents

A real-time 3D solar system in the browser (TypeScript, three.js, Vite), deployed to GitHub Pages from
`main`. `README.md` explains what it does; `docs/PLAN.md` is the original plan.

- `npm ci`, then `npm run dev` for a local server, `npm run check` before any PR.
- Code: `src/math` (shared math and coordinate frames), `src/config` (bodies and constants), `src/sim`
  (ephemeris, time, rotation), `src/scene` (three.js), `src/ui`. Tests sit next to the code (`*.test.ts`).
- Frames have bitten before (#26, #28, #29): the scene is ecliptic-based with +Z as ecliptic north.

## Agent git workflow

Agents land every change through a pull request, following [agent-git-workflow](https://github.com/firstprateek/agent-git-workflow).

- check: `npm run check` (typecheck, tests, build). It must pass before a PR is opened.
- proof: for visual changes, screenshots of the scene at 1280 and 390 px wide; otherwise test output.
- owner: @firstprateek. Agents act on GitHub as the owner.
- Root paths are in `.github/CODEOWNERS`, each with its reason. Decision records are in `docs/decisions/`.
- Leaf PRs auto-merge after a fresh-context review and green checks. Root PRs also need a decision
  record, and the owner approves it by adding the `owner-approved` label. Agents never add or remove
  that label, and never push to the default branch.
- Waiting for the owner: `is:open is:pr label:tier:root -label:owner-approved`.
