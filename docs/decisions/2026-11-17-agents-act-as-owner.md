# Agents act as the owner; the owner approves root PRs with a label

Status: Accepted once merged · Date: 2026-11-17 · Supersedes 2026-11-17-adopt-agent-git-workflow.md

## Context

Setup chose bot mode, which needs a separate GitHub machine account. The owner decided the skill should
be opinionated instead: agents keep acting as the owner, as they did before, and the only thing the owner
decides is which parts are core.

## Decision

Agents use the owner's `gh` login. A root PR passes `agent-gate` once it has a decision record and the
owner has added the `owner-approved` label after the PR's latest commit. Agents never add or remove that
label. The `main` ruleset has no bypass and no code-owner review; the tag ruleset and the mode variable
are gone. Root paths stay `.github/` and `docs/decisions/`.

## Alternatives

- Bot mode: GitHub would enforce the approval, but it costs a second account and token per owner.

## Consequences

Nothing technical stops an agent from adding the label itself; the rule in the skill and AGENTS.md is the
lock. GitHub doesn't notify the owner about their own account's PRs, so waiting root PRs live in a saved
search instead of the notification inbox.

## Rollback

Revert this PR and re-run the skill's bot-mode setup; no data is involved.

## Proof

This PR is the live test: `agent-gate` must stay red until the owner adds `owner-approved`, then pass and
let auto-merge finish.
