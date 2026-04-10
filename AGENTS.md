# review-author-docs AGENTS.md

## Purpose
- Repository type: `library`
- This repository was scaffolded by `repository-init` as a genesis contract.
- Treat this file as the static operating contract for AI work in this repository.
- This repository defines a derived documentation hub for ReVIEW / Nextpublishing authors, not an authority owner for upstream rules.
- Primary value is to connect official ReVIEW syntax, TECHZIP author-repo evidence, and Nextpublishing-specific diagnostics in one searchable corpus with provenance.
- Canonical authoring format is Markdown; primary delivery is static HTML; PDF/offline bundles and optional ReVIEW-book artifacts are derived release outputs.

## Read Order
- 1. `AGENTS.md`
- 2. `docs/repository-genesis/repository-init-manifest.v1.yaml`
- 3. `docs/current-state/index/current-state-root.v1.yaml`
- 4. `.serena/onboarding.md`
- 5. `specs/README.md`
- 6. `docs/session_handoffs/session_handoff_template.md`

## Genesis Rules
- Work is spec-first by default.
- Do not start implementation before the active spec exists.
- Use `repo-onboarding-rules` immediately after genesis scaffold completes.
- Use `repository-explanation-creation` when structured current-state docs are still missing.
- Follow `docs/current-state/index/current-state-root.v1.yaml` as the canonical
  lookup entrypoint once the constrained-index-first docs exist.
- Keep human-authored source, pinned upstream inputs, generated intermediates, and release artifacts in separate directories.
- Do not silently fork upstream truth; preserve source provenance and explicit authority boundaries in generated outputs.

## Shared UI Contract
- UI mode: `na`
- This repository does not actively adopt the shared UI contract by default.

## Session / Handoff
- `03-session-switch-handoff` owns canonical lifecycle maintenance after onboarding.
- `session-checkpoint` and `session-cutoff` remain facade skills only.

## Next Skill Hints
- `repo-onboarding-rules`
- `repository-explanation-creation`
- `SDD-TDD-EDD-guideline`

## Session State Pointers
- Current machine state: `docs/session_state/session_current.json`
- Current onboarding view: `.serena/onboarding.md`
- Latest human handoff view: `docs/session_handoffs/session_handoff_latest.md`
- Session ledger shards: `docs/session_state/ledger`
- Durable decisions: `docs/adr`
