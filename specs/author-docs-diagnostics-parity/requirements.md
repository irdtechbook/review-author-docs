# SPEC-RAD-003: author docs diagnostics parity contract

## Summary
Nextpublishing policy authority を説明するため、VS Code diagnostics dictionary と rule implementation の parity contract を定義する。policy source は dictionary と code の両方を pin し、禁止タグ、診断 ID、message、replacement guidance の整合を validator で検証できるようにする。

## User Story
サポート担当として、禁止タグの説明が VS Code diagnostics とズレていないことを確認したい。そうすれば、著者への案内と実際の診断結果の不一致を減らせる。

## Acceptance Criteria
- [ ] dictionary source と rule implementation source の両方を policy authority input として明示している。
- [ ] parity model として診断 ID, tag, severity, message, replacement guidance, source refs を定義している。
- [ ] mismatch categories と validator exit conditions が定義されている。
- [ ] generated policy docs が parity checker を通過しない限り publish できない契約になっている。
- [ ] demo と validation command で spec package を確認できる。

## Pattern References
- `specs/author-docs-hub-foundation/design.md`
- `specs/author-docs-upstream-ingest/design.md`
- `docs/current-state/features/author-docs-hub-foundation/feature-detail.v1.yaml`

## Success Validation Command
```powershell
python scripts/validate_current_state_docs.py --repo-root . --mode all
```

## Demo Script
1. `specs/author-docs-diagnostics-parity/requirements.md` を開く。
2. `specs/author-docs-diagnostics-parity/design.md` で parity model と mismatch categories を確認する。
3. `specs/author-docs-diagnostics-parity/tasks.yaml` で input normalization と checker 実装の段取りを確認する。

## Logical Commits
1. `docs(spec): define diagnostics parity contract [RAD-003]`
2. `docs(spec): define parity checker mismatch rules [RAD-003]`
3. `docs(state): link diagnostics parity lane [RAD-003]`
