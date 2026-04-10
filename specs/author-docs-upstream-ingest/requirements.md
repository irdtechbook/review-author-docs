# SPEC-RAD-002: author docs upstream ingest contract

## Summary
ReVIEW 公式ソース、TECHZIP 証跡、VS Code diagnostics policy を pin 付き upstream input として取り込む契約を定義する。`upstream-lock.v1.yaml` を中心に、authority class ごとの取得単位、fingerprint、normalized target mapping、refresh policy を固定する。

## User Story
保守者として、upstream のどの版を説明の根拠にしたかを lock で固定したい。そうすれば、生成結果の provenance を追跡でき、更新時も drift を検知できる。

## Acceptance Criteria
- [ ] `data/upstream/locks/upstream-lock.v1.yaml` の schema が top-level metadata, generator, sources を含めて定義されている。
- [ ] `sources[*]` の必須キーとして `source_id`, `authority_class`, `owner`, `capture_kind`, `origin`, `captured_at`, `fingerprint`, `artifacts`, `refresh_policy` が定義されている。
- [ ] Official ReVIEW / TECHZIP evidence / VS Code diagnostics の各 source set と pin 粒度が定義されている。
- [ ] raw snapshot path と normalized target path の対応付けが定義されている。
- [ ] refresh / drift detection の失敗条件と operator action が定義されている。

## Pattern References
- `specs/author-docs-hub-foundation/design.md`
- `docs/adr/ADR-0001-derived-author-docs-hub.md`
- `docs/current-state/features/author-docs-hub-foundation/feature-detail.v1.yaml`

## Success Validation Command
```powershell
python scripts/validate_current_state_docs.py --repo-root . --mode all
```

## Demo Script
1. `specs/author-docs-upstream-ingest/requirements.md` を開く。
2. `specs/author-docs-upstream-ingest/design.md` で `upstream-lock.v1.yaml` の必須キーと source set を確認する。
3. `specs/author-docs-upstream-ingest/tasks.yaml` で schema 定義と extractor 実装の分離を確認する。

## Logical Commits
1. `docs(spec): define upstream ingest contract [RAD-002]`
2. `docs(spec): define upstream lock schema and refresh policy [RAD-002]`
3. `docs(state): link ingest contract into current-state [RAD-002]`
