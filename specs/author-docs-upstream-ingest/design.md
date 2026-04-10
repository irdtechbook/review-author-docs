# Design: author docs upstream ingest contract

## Scope
- `upstream-lock.v1.yaml` schema
- raw snapshot placement under `data/upstream/`
- normalized target mapping handoff to later lanes
- refresh / drift detection policy

## Non-goals
- normalized JSON schema の詳細定義
- HTML route generation
- diagnostics parity algorithm

## Lock Document Contract
Top-level:
- `schema_version`
- `lock_id`
- `generated_at`
- `generator.name`
- `generator.version`
- `sources[]`

Per-source required fields:
| Field | Description |
| --- | --- |
| `source_id` | repo 内で一意な lock 名 |
| `authority_class` | `normative`, `descriptive`, `policy` |
| `owner` | upstream owner or project |
| `capture_kind` | `git_blob`, `json_file`, `generated_ledger`, `local_script_source` |
| `origin` | repo URL / local path / ref / path |
| `captured_at` | capture timestamp |
| `fingerprint` | digest for drift detection |
| `artifacts.raw_snapshot` | raw snapshot の保存先 |
| `artifacts.normalized_targets[]` | 後段 normalize の出力先 |
| `refresh_policy.mode` | `manual-refresh` or `release-refresh` |
| `refresh_policy.parity_check` | checksum or path comparison rule |

## Source Sets
### Normative
- `review-format-ja`
- `review-quickstart-ja`
- `review-config-yml-sample`

### Descriptive
- `techzip-collection-manifest-lib`
- `techzip-slack-evidence-lib`
- `techzip-authoritative-ledger-lib`

### Policy
- `vscode-banned-tag-rule`
- `vscode-diagnostics-dictionary`

## Ingest Flow
1. Resolve configured upstream refs.
2. Capture source metadata and fingerprint.
3. Copy or materialize raw snapshot into `data/upstream/<source-class>/...`.
4. Emit `upstream-lock.v1.yaml`.
5. Fail if any required source cannot be pinned or fingerprinted.

## Drift Policy
- Missing source pin: hard fail.
- Fingerprint changed without lock refresh: hard fail.
- New optional upstream file discovered: warning until adopted into lock schema.
- TECHZIP evidence path moved but source_id unchanged: warning plus operator review.

## Validation Contract
- Lock schema validation checks required keys and enum values.
- Snapshot existence validation checks every `raw_snapshot` path.
- Normalized target mapping validation checks that every source declares at least one downstream consumer or explicitly marks `normalized_targets: []` with justification.
