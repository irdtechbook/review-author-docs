# Design: author docs chapter authoring

## Decision
本文 source は章ごとの Markdown として分割し、Astro content collection で読み込む。1 章 1 ファイルを原則とし、章内で `##` を中見出し、`###` を小見出し相当として構造化する。

## Authoring Rules
- tone は beginner-first とする
- 先に「何を解決する章か」を説明してから構文や設定を示す
- コード例は最小構成を示し、前提がある場合は前置きする
- policy explanation は「禁止理由」より先に「どう直すか」を示す
- 1 章に最低 1 つは以下のどれかを含める
  - checklist / bullet list
  - comparison table
  - syntax example
  - Mermaid flow / structure diagram

## Chapter Set
1. はじめにと読み方
2. 著者リポの全体像
3. Re:VIEW 原稿の基本記法
4. 図表・脚注・コード・数式
5. `config.yml` と `catalog.yml` の基本
6. Nextpublishing 固有ルールと diagnostics
7. 執筆・検証・修正ワークフロー
8. トラブルシューティング
9. 根拠逆引きと付録

## Content Shape
- frontmatter
  - `title`
  - `order`
  - `summary`
  - `audience`
  - `heroImage`
- body
  - chapter overview
  - aligned middle headings
  - beginner-oriented prose
  - list / table / code / Mermaid as needed
  - chapter close with next reading guidance

## Evidence Handling
- normative content は Re:VIEW 公式 docs 由来と分かるように記述する
- policy content は Nextpublishing diagnostics 由来と分かるように記述する
- author repo observations は「実例でよく見る形」として扱い、 norm と混ぜない
- ページ下部の source trail は site layer 側の shared UI で表示する

## Non-goals
- 全タグを百科事典的に完全網羅すること
- Re:VIEW 原稿そのものを自動生成すること
- PDF/book 版のレイアウト最適化
