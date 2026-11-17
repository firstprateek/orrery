# Agents act as the owner, and nothing in Orrery needs approval

Status: Accepted once merged · Date: 2026-11-17 · Supersedes 2026-11-17-adopt-agent-git-workflow.md

## Context

Setup chose bot mode, which needs a separate GitHub machine account. The owner decided the skill should
be opinionated instead: agents keep acting as the owner, as they did before, and the only thing the owner
decides is which parts are core.

## Decision

Agents use the owner's `gh` login. A root PR passes `agent-gate` once it has a decision record and the
owner has added the `owner-approved` label after the PR's latest commit was pushed (the first workflow run for that
commit, or the last force-push if later). Agents never add or remove that
label. The `main` ruleset has no bypass and no code-owner review; the tag ruleset and the mode variable
are gone.

Nothing in Orrery is core (owner, 2026-11-17): `AGENT_GIT_WORKFLOW_CORE=none`, and CODEOWNERS is removed.
Every PR merges after checks and a fresh review. A change is root only when the owner explicitly asks to
approve it; then the label rule above applies.

## Alternatives

- Bot mode: GitHub would enforce the approval, but it costs a second account and token per owner.

## Consequences

Nothing technical stops an agent from adding the label itself; the rule in the skill and AGENTS.md is the
lock. The same goes for `.github/`: a PR runs its own copy of `agent-gate.yml`, and with code-owner review
gone only that rule stops a root PR from editing the gate to pass itself. The ruleset has no bypass, so
the owner can't push to `main` directly either: emergency fixes go through a PR, or the owner switches the
ruleset off first. GitHub doesn't notify the owner about their own account's PRs, so waiting root PRs live in a saved
search instead of the notification inbox.

## Rollback

The skill no longer has a bot mode, so going back is manual: create a machine account and token, invite
it with write access, turn code-owner review back on in the `main` ruleset with an admin bypass, re-create
the tag ruleset, set `AGENT_GIT_WORKFLOW_MODE=bot`, and revert this PR. No data is involved.

## Proof

This PR is the live test: `agent-gate` must stay red until the owner adds `owner-approved`, then pass and
let auto-merge finish.
