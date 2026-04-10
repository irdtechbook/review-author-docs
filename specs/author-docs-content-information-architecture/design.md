# Design: author docs content information architecture

## Scope
- audience segmentation
- site navigation
- landing structure
- page family inventory
- site-to-book mapping

## Non-goals
- actual content writing
- visual theme implementation
- search engine implementation

## Primary Audiences
| Audience | Immediate need | Primary route |
| --- | --- | --- |
| Author in trouble | 禁止タグや組版差し戻しの対処を急ぎたい | `Troubleshooting` -> `Nextpublishing Policy` |
| Author learning ReVIEW | タグや設定の基本を知りたい | `Start Here` -> `Tag Atlas` / `Config Reference` |
| Support / maintainer | 根拠つきで説明し、source を逆引きしたい | `Source Map / Provenance` -> target page family |

## Top Navigation
- Home / Start Here
- Tag Atlas
- Nextpublishing Policy
- Config Reference
- Workflows
- Troubleshooting
- Source Map / Provenance

## Landing Structure
### Home / Start Here
- この docs hub の読み方
- audience 別の入口
- 代表的な問い合わせ導線

### Tag Atlas
- tag detail pages
- category pages
- usage / anti-pattern cross-links

### Nextpublishing Policy
- banned tag catalog
- warning catalog
- replacement guidance

### Config Reference
- config item reference
- config recipes
- sample diff explanations

### Workflows
- author workflow
- preview / validation workflow
- support workflow

### Troubleshooting
- symptom-first index
- diagnostics-first index
- common remediation paths

### Source Map / Provenance
- authority explanation
- per-page provenance lookup
- source freshness and lock snapshot references

## Page Family Contract
| Page family | Purpose | Allowed authority mix | Required metadata |
| --- | --- | --- | --- |
| `start-here` | 初回案内 | Derived | audience, journey_refs |
| `tag-detail` | タグ単位の説明 | Normative + Policy + optional Descriptive | source_refs, authority_class, related_tags |
| `policy-detail` | 禁止/警告ルール説明 | Policy + optional Normative | diagnostic_id, rule_refs, replacement_guidance |
| `config-detail` | 設定項目説明 | Normative + optional Policy | source_refs, config_keys |
| `workflow-guide` | 作業導線説明 | Derived + Policy | audience, prerequisites, related_pages |
| `troubleshooting-entry` | 症状から辿る対処 | Policy + Descriptive | symptom_tags, related_diagnostics |
| `provenance-entry` | 根拠逆引き | Any but explicit | source_refs, lock_refs, generated_from |

## Site-to-Book Mapping
- 書籍版は curated derivative とし、サイトの top navigation をそのまま章名にしない。
- 推奨章立て:
  1. ReVIEW authoring start guide
  2. Tag atlas essentials
  3. Nextpublishing policy and banned tags
  4. Configuration and build basics
  5. Troubleshooting and support patterns
- 各章は複数 page family を束ねてもよいが、逆に各ページから属する章を追跡できること。

## Open Decisions
- Home / Start Here を 1 ページで完結させるか、audience 別サブページに分けるか
- Tag Atlas の category 分けを構文カテゴリ優先にするか、著者タスク優先にするか
- 書籍版で provenance 情報をどこまで可視化するか
