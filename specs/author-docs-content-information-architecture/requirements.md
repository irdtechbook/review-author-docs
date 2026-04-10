# SPEC-RAD-005: author docs content information architecture

## Summary
公開サイトと任意の書籍派生物について、誰に何をどう見せるかを固定する information architecture spec を定義する。対象 reader の導線、top navigation、page family、landing structure、サイト版から書籍版への mapping に加えて、著者リポ実例と公式 Re:VIEW 文書を根拠にした章 -> 中見出し -> 小見出しの叩き台を明文化する。

## User Story
- サポート担当として、問い合わせ内容から目的のページへ最短で案内したい。そうすれば、説明の属人化を減らせる。
- 著者として、タグ辞典、禁止タグ、設定、トラブルシュートを迷わず辿りたい。そうすれば、執筆や修正の往復を減らせる。
- 保守者として、サイト版と書籍版の責務の違いを先に決めたい。そうすれば、生成パイプライン実装時に構造がぶれない。

## Acceptance Criteria
- [ ] primary audience を少なくとも 3 種類に分け、それぞれの primary journey を定義している。
- [ ] top navigation と landing structure が定義されている。
- [ ] page family ごとに目的、主 authority class、必須 metadata を定義している。
- [ ] サイト版と書籍派生版の対応方針が定義されている。
- [ ] `Home / Start Here`, `Tag Atlas`, `Nextpublishing Policy`, `Config Reference`, `Workflows`, `Troubleshooting`, `Source Map / Provenance` の最低限の entry policy が定義されている。
- [ ] 公式 Re:VIEW 文書、author repo corpus、Nextpublishing diagnostics corpus のどれを根拠にしたかを design に残している。
- [ ] 共通コンテンツ spine が章 -> 中見出し -> 小見出しの順に叩き台化されている。

## Pattern References
- `specs/author-docs-hub-foundation/design.md`
- `docs/adr/ADR-0001-derived-author-docs-hub.md`
- `docs/adr/ADR-0003-github-pages-publication-target.md`

## Success Validation Command
```powershell
python scripts/validate_current_state_docs.py --repo-root . --mode all
```

## Demo Script
1. `specs/author-docs-content-information-architecture/requirements.md` を開く。
2. `specs/author-docs-content-information-architecture/design.md` で evidence base, audience, navigation, page families, book mapping, draft content outline を確認する。
3. `specs/author-docs-content-information-architecture/tasks.yaml` で叩き台作成済み領域と未確定領域を確認する。

## Logical Commits
1. `docs(spec): define content information architecture [RAD-005]`
2. `docs(spec): define site navigation and page families [RAD-005]`
3. `docs(spec): define site-to-book mapping [RAD-005]`
4. `docs(spec): draft chapter-to-subheading outline [RAD-005]`
