# ADR-0002: Astro static site generator

- Status: Accepted
- Date: 2026-04-10

## Context
`review-author-docs` は単純な Markdown 集ではなく、official / usage / policy の authority class を分離したまま、generated indexes, provenance, source-map を介して HTML に束ねる必要がある。site generator 選定では次が重要になる。

1. Markdown を canonical source のまま維持できること
2. normalized JSON/YAML と generated overlays から静的 route を組み立てられること
3. ingest / parity / immutability validation を site layer に混ぜず、外部 script lane に残せること

比較候補は Docusaurus, MkDocs, Astro, custom static pipeline だった。

## Decision
一次 HTML 配布面の generator として Astro を採用する。

採用判断:
- Astro は static-first publication に向き、route generation と presentation を薄く保てる。
- Markdown と build-time data の両方を site 入力として扱いやすく、authority-separated な generated content に適合する。
- 本 repo の `scripts/ingest`, `scripts/normalize`, `scripts/validate` と責務分離しやすい。

不採用理由:
- Docusaurus は docs hierarchy と versioning に強いが、repo 固有の source-map / provenance pages が増えるほど docs plugin 中心の構造が窮屈になる。
- MkDocs は Markdown 公開開始が最も速いが、generated indexes と policy overlays の扱いが plugin 側に寄りやすく、data contract と site contract の境界が曖昧になりやすい。
- custom static pipeline は自由度は高いが、初期段階で site shell まで自前設計にすると保守コストが先行する。

## Consequences
### Positive
- HTML publication を static output のまま保ちやすい
- generated markdown / normalized data / authored overlays を同居させやすい
- site 実装を thin layer に保ち、validation を scripts 側に分離できる

### Negative
- docs shell, navigation, search integration をある程度組み立てる必要がある
- derivative artifact build は Astro 単体では完結しないため、後段 toolchain を別途定義する必要がある

### Guardrails
- Astro は publication surface のみを担当し、authority pin や parity 判定の source of truth にならない
- `site/` は route composition, theme, asset bundling に限定する
- generated outputs の直編集禁止ルールを維持する
