# SPEC-RAD-006: author docs chapter authoring

## Summary
RAD-005 で定義した information architecture をもとに、初心者向けの本文を章単位 Markdown として書き起こす。公開対象は Re:VIEW / Nextpublishing 著者支援サイトであり、説明文だけに寄らず、適切な箇所でリスト、表、コード例、Mermaid 図を使って理解しやすくする。

## User Story
- 初学者の著者として、章を順番に読めば原稿 repo の全体像、基本記法、設定、差し戻し対処まで理解したい。そうすれば、詰まったときに検索語すら分からない状態を減らせる。
- サポート担当として、章立て済みの本文を見ながら著者に案内したい。そうすれば、回答を毎回ゼロから書かずに済む。
- 保守者として、章ごとに独立した Markdown source を持ちたい。そうすれば、更新差分を章単位で管理できる。

## Acceptance Criteria
- [ ] RAD-005 の draft content outline に沿って、章ごとの Markdown source が分割されている。
- [ ] 各章は初心者向けの本文、箇条書き、必要なコード例を含む。
- [ ] 全章のどこかで表と Mermaid 図を使い、視覚的な理解補助を入れている。
- [ ] 各章は title, order, summary, audience を frontmatter に持つ。
- [ ] 公式 Re:VIEW 文書、author repo 実例、Nextpublishing diagnostics のどれに基づくかを、本文または sources page から辿れる。

## Pattern References
- `specs/author-docs-content-information-architecture/design.md`
- `docs/adr/ADR-0001-derived-author-docs-hub.md`
- `docs/adr/ADR-0002-astro-static-site-generator.md`

## Success Validation Command
```powershell
npm run build
python scripts/validate_current_state_docs.py --repo-root . --mode all
```

## Demo Script
1. `src/content/chapters/` 配下の章 Markdown を開く。
2. 各章の frontmatter と見出し構造が RAD-005 に対応していることを確認する。
3. サイト build 後に各章ページで表、リスト、コード例、Mermaid が混在していることを確認する。

## Logical Commits
1. `docs(content): author chapter markdown set [RAD-006]`
2. `docs(content): add beginner-friendly examples and diagrams [RAD-006]`
