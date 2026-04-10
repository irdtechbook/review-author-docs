# SPEC-RAD-004: author docs source-map and generated immutability

## Summary
generated outputs を publish 可能にする前提として、各 generated page の provenance/source-map schema と generated immutability contract を定義する。ページ単位の source refs, authority class, generator version, validation status を保持し、hand-edit を検出して fail できるようにする。

## User Story
保守者として、生成ページの根拠と生成経路を追跡し、手編集の混入を検出したい。そうすれば、派生 docs が upstream truth や generator contract から逸脱していないことを説明できる。

## Acceptance Criteria
- [ ] generated page metadata に `source_refs`, `authority_class`, `generated_at`, `generator_version` を必須化している。
- [ ] `generated/source-map/source-map.v1.json` の entry schema と coverage contract を定義している。
- [ ] generated immutability check の対象ディレクトリ、許可された更新経路、失敗条件を定義している。
- [ ] broken links, orphan pages, missing provenance, source-map gaps を validate phase で検出する契約になっている。
- [ ] HTML publish と derivative outputs が source-map / immutability gate に依存することを定義している。

## Pattern References
- `specs/author-docs-hub-foundation/design.md`
- `specs/author-docs-diagnostics-parity/design.md`
- `docs/current-state/features/author-docs-hub-foundation/feature-detail.v1.yaml`

## Success Validation Command
```powershell
python scripts/validate_current_state_docs.py --repo-root . --mode all
```

## Demo Script
1. `specs/author-docs-source-map-immutability/requirements.md` を開く。
2. `specs/author-docs-source-map-immutability/design.md` で source-map schema と immutability rules を確認する。
3. `specs/author-docs-source-map-immutability/tasks.yaml` で validator と publish gate の段取りを確認する。

## Logical Commits
1. `docs(spec): define source-map contract [RAD-004]`
2. `docs(spec): define generated immutability gate [RAD-004]`
3. `docs(state): link provenance validation lane [RAD-004]`
