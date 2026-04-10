# Design: author docs source-map and generated immutability

## Scope
- generated page metadata contract
- source-map schema
- no-hand-edit validation
- publish gate dependencies

## Non-goals
- upstream lock pinning
- site generator selection
- diagnostics parity normalization

## Generated Page Metadata
Every generated Markdown or HTML-derived page must expose:
- `source_refs[]`
- `authority_class`
- `generated_at`
- `generator_version`
- `source_map_entry_id`
- `validation_status`

## Source-map Schema
`generated/source-map/source-map.v1.json` entry:
| Field | Description |
| --- | --- |
| `entry_id` | source-map entry identifier |
| `output_path` | generated markdown or page path |
| `page_kind` | syntax, config, policy, usage, troubleshooting |
| `authority_mix` | allowed authority classes used in the page |
| `source_refs[]` | upstream and overlay refs |
| `normalized_inputs[]` | normalized JSON inputs |
| `generator_stage` | generate sub-step that emitted the page |
| `last_validated_at` | most recent validation timestamp |

Coverage rules:
- every generated page has exactly one source-map entry
- every source-map entry points to an existing output
- every output has at least one upstream or overlay source ref

## Generated Immutability Contract
Protected directories:
- `generated/markdown`
- `generated/indexes`
- `generated/source-map`
- `dist/html`

Allowed write paths:
- generator scripts during `generate`
- validators that emit machine-readable reports into approved report paths
- publish step when copying validated outputs into `dist/`

Failure conditions:
- manual edits detected in protected directories without generator marker update
- missing generator metadata header
- output exists in `dist/` without corresponding source-map entry

## Validation Lane
The validation lane must detect:
- broken internal links
- orphan pages not present in navigation or source-map
- missing provenance fields
- source-map coverage gaps
- immutable directory drift

## Publish Dependency
- `dist/html`, `dist/pdf`, `dist/offline`, and `dist/review-book` promotion depends on a passing source-map and immutability report.
- Preview outputs may exist in temporary build paths, but release outputs must not bypass the gate.
