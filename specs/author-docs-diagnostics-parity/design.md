# Design: author docs diagnostics parity contract

## Scope
- VS Code diagnostics dictionary と rule implementation の parity model
- mismatch classification
- checker outputs and publish gate

## Non-goals
- VS Code extension rule の実装修正
- official ReVIEW syntax validation
- HTML theme or navigation design

## Inputs
- `data/upstream/vscode/...review-nextpreview-diagnostics-dictionary.json`
- `data/upstream/vscode/...d013_banned_tag.ts`
- `data/upstream/locks/upstream-lock.v1.yaml`

## Parity Model
Each normalized policy entry must contain:
- `diagnostic_id`
- `tag_or_pattern`
- `severity`
- `message_template`
- `replacement_guidance`
- `source_refs.dictionary`
- `source_refs.rule_impl`
- `authority_class` fixed to `policy`

## Mismatch Categories
| Category | Meaning | Default result |
| --- | --- | --- |
| `missing_in_dictionary` | rule implementation に存在するが dictionary に無い | fail |
| `missing_in_rule` | dictionary に存在するが rule 実装に無い | fail |
| `severity_mismatch` | severity が一致しない | fail |
| `message_mismatch` | primary message が一致しない | warn or fail depending on strict mode |
| `replacement_guidance_gap` | docs 側に代替案が無い | warn |

## Checker Contract
1. Load pinned dictionary and rule implementation references from upstream lock.
2. Normalize both sides into the parity model.
3. Compare by `diagnostic_id` and `tag_or_pattern`.
4. Emit machine-readable report under `generated/indexes/diagnostics-parity-report.v1.json`.
5. Exit non-zero on fail categories.

## Publish Gate
- `validate` phase must run diagnostics parity before HTML publication.
- policy docs may be generated for preview, but `dist/html` and derivative outputs must not be promoted on parity failure.

## Evidence Expectations
- Every policy page must keep a link to both the dictionary source and the rule implementation source.
- Replacement guidance may be locally authored, but must declare whether it comes from dictionary text, rule implementation behavior, or local overlay.
