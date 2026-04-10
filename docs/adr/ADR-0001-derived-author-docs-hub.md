# ADR-0001: derived author docs hub

- Status: Accepted
- Date: 2026-04-10

## Context
ReVIEW の解説を求める著者は多いが、実務で必要なのは単なる公式構文一覧ではない。実際には次の 3 系統を横断して説明する必要がある。

1. ReVIEW 公式ソースが定義する構文・設定・基本動作
2. TECHZIP が保有する著者リポ証跡に見える頻出タグ、利用文脈、誤用傾向
3. Nextpublishing 組版で禁止または警告対象になるタグ・記法の診断ルール

この 3 系統は authority が異なるため、一つの repo にまとめるとしても、責務分離と provenance が必要になる。

## Decision
`review-author-docs` を、upstream authority を保持したまま説明責務だけを担う派生ドキュメントハブとして運用する。

採用方針:
- Markdown を canonical source とする
- static HTML site を primary delivery とする
- PDF/offline bundle を supported derivative とする
- ReVIEW 書籍成果物は optional derivative とする
- upstream truth は upstream のままとし、この repo には pinned snapshot / lock / generated overlays を置く
- generated output は hand-authored docs と分離し、すべて provenance 情報を持つ

## Consequences
### Positive
- 著者向け導線を HTML 中心で高速化できる
- 保守は Markdown と generator で行えるため差分が追いやすい
- official / usage / policy を混線させず説明できる
- TECHZIP や VS Code 側が更新されても drift を検知できる構成にしやすい

### Negative
- upstream lock、source-map、parity validation など追加の保守コストが発生する
- ReVIEW 書籍成果物は primary ではないため、書籍先行発想に慣れた運用とは少しズレる

### Guardrails
- generated 直編集は禁止
- diagnostics policy は dictionary と rule 実装の両方を照合する
- usage 系説明は descriptive 扱いであり、official/policy の authority を上書きしない
