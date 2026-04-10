# SPEC-RAD-007: author docs site publication

## Summary
RAD-006 の章本文 Markdown を Astro で静的 HTML に変換し、`irdtechbook/review-author-docs` の GitHub Pages project site として公開する。GitHub Pages 上で閲覧しながら本文と構成を後続調整できる状態を作る。

## User Story
- 著者として、公開 URL で章本文を読みながら内容を確認したい。そうすれば、Markdown source ではなく実際の閲覧面で調整できる。
- 保守者として、章 source を push すれば GitHub Pages が自動更新されるようにしたい。そうすれば、公開手順を手作業にしなくて済む。

## Acceptance Criteria
- [ ] Astro project が repository root で build できる。
- [ ] GitHub Pages 向け `site` と `base` が `irdtechbook/review-author-docs` に合っている。
- [ ] index page, chapter page, sources page があり、章間ナビゲーションがある。
- [ ] Mermaid が静的 site 上で描画される。
- [ ] GitHub Actions workflow により GitHub Pages へ deploy される。
- [ ] GitHub Pages で公開された URL を確認できる。

## Pattern References
- `docs/adr/ADR-0002-astro-static-site-generator.md`
- `docs/adr/ADR-0003-github-pages-publication-target.md`

## Success Validation Command
```powershell
npm run build
python scripts/validate_current_state_docs.py --repo-root . --mode all
```

## Demo Script
1. `npm run build` を実行する。
2. ローカル preview または dev server で index page と chapter page を確認する。
3. GitHub Pages URL で公開ページを確認する。

## Logical Commits
1. `feat(site): add Astro docs site shell [RAD-007]`
2. `ci(pages): deploy author docs site to GitHub Pages [RAD-007]`
