# Agents land changes through agent-git-workflow

Status: Accepted once merged · Date: 2026-11-17

## Context

Orrery is built mostly by coding agents. Until now every change waited on the owner, or was merged by
an agent with nothing enforcing checks on `main`.

## Decision

Adopt agent-git-workflow in **bot** mode. Agents work as a separate GitHub machine account with write
access; the owner approves root PRs with a GitHub review. `main` requires `agent-gate` and
`build-and-test` to pass. No extra root paths for now: only `.github/` and `docs/decisions/` (owner's
choice), plus the change-type rules in the skill (interfaces, data, dependencies, CI, and so on).
`npm run check` is the one command that proves a change works.

## Alternatives

- Self mode (agents act as the owner, approval by label): simpler, but enforcement runs on trust.
- Marking `src/math`, `src/config` and `src/sim` as root: considered given their fan-in and past frame
  bugs; the owner chose to start without them and let the learning loop add paths from evidence.

## Consequences

Leaf PRs merge without the owner. Pushes to `main` are blocked for everyone except the owner as admin.
The deploy still runs on every merge to `main`.

## Rollback

Disable or delete the `agent-git-workflow` rulesets in the repo settings, remove `agent-gate.yml`, and
revert this PR. Nothing here is irreversible.

## Proof

The setup's probe PR (a root change without approval) must be blocked, then pass once approved.
