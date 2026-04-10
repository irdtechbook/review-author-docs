# SPEC-RAD-001: review-author-docs foundation

## Summary
`review-author-docs` を、ReVIEW 著者向けの派生ドキュメント基盤として定義する。公式 ReVIEW 情報、TECHZIP が保有する著者リポ証跡、VS Code 拡張の Nextpublishing 禁止タグ辞書を責務分離したまま統合し、検索しやすい HTML ドキュメントを主配布面として生成する。公開先は `irdtechbook` アカウント配下の GitHub Pages project site を前提とする。

## User Story
- サポート担当として、公式仕様と実際の著者利用傾向、Nextpublishing 固有制約を一つの導線で説明したい。そうすれば、著者からの問い合わせに毎回個別説明せずに済む。
- 著者として、タグの意味、使ってよい場面、禁止される場面、代替手段を追跡可能な根拠つきで知りたい。そうすれば、執筆時の試行錯誤と組版差し戻しを減らせる。
- 保守者として、上流リポの更新を追従できる生成パイプラインを持ちたい。そうすれば、説明書が独自仕様化せず、更新コストも抑えられる。

## Acceptance Criteria
1. リポジトリ責務として、次の 3 系統を明示的に分離して扱うことが定義されている。
   - 公式 ReVIEW ソース由来の normative な説明
   - TECHZIP 証跡由来の descriptive な利用傾向
   - VS Code diagnostics 由来の Nextpublishing 固有ポリシー
2. ディレクトリ設計として、手書き Markdown、上流ロック情報、生成中間物、公開用成果物、スクリプト責務が分離されている。
3. 生成パイプライン仕様として、`ingest -> normalize -> generate -> validate -> publish` の段階と、各段階の入力/出力/検証責務が定義されている。
4. HTML サイトを一次配布面とし、Markdown を canonical source、PDF/offline bundle を派生成果物、ReVIEW 書籍化を任意派生物とする方針が明記されている。
5. 生成ページごとに、どの upstream とどの生成処理から来たかを追跡できる source map / provenance 情報を保持することが定義されている。
6. VS Code diagnostics 辞書と実装ルールの整合検証、TECHZIP 証跡の固定スナップショット参照、generated 直編集禁止の検証が仕様に含まれている。
7. この仕様を起点に次回セッションが再開できるよう、ADR・current-state・session handoff が相互参照されている。
8. 静的 HTML の公開先として GitHub Pages を用い、`irdtechbook` アカウント配下の project site URL を既定 publish target とする方針が定義されている。
9. `content-information-architecture` phase が存在し、サイト導線、コンテンツ群、ナビゲーション、書籍派生との対応方針を決める責務が定義されている。

## Scope
- 対象:
  - ReVIEW 公式ソースに基づくタグ・構文・設定の解説再編成
  - TECHZIP 証跡からの頻出タグ・誤用・利用文脈の整理
  - Nextpublishing 禁止タグ/警告の説明と代替案の提示
  - HTML 主体の公開導線、PDF/offline 生成、ReVIEW 派生物の仕様化
- 非対象:
  - この時点での本格的な generator 実装
  - TECHZIP 側の証跡収集器そのものの改修
  - VS Code 拡張側ルールエンジンの改修

## Pattern References
- 公式 ReVIEW:
  - `https://github.com/kmuto/review/blob/master/doc/format.ja.md`
  - `https://github.com/kmuto/review/blob/master/doc/quickstart.ja.md`
  - `https://github.com/kmuto/review/blob/master/doc/config.yml.sample`
- TECHZIP 証跡入力候補:
  - `C:/Users/tky99/dev/technical-fountain-series-support-tool/future/bibliographic-data/scripts/phase0_build_collection_manifest.py`
  - `C:/Users/tky99/dev/technical-fountain-series-support-tool/future/bibliographic-data/scripts/phase0_slack_history_repo_evidence_lib.py`
  - `C:/Users/tky99/dev/technical-fountain-series-support-tool/future/bibliographic-data/scripts/phase1_authoritative_inventory_ledger_lib.py`
- Nextpublishing ポリシー入力候補:
  - `C:/Users/tky99/dev/vscode/src/diagnostics/rules/d013_banned_tag.ts`
  - `C:/Users/tky99/dev/vscode/techzip/review-nextpreview-diagnostics-dictionary.json`

## Success Validation Command
```powershell
python C:/Users/tky99/.codex/skills/03-session-switch-handoff/scripts/validate_current_state_docs.py --repo-root . --mode baseline
```

## Demo Script
1. `specs/author-docs-hub-foundation/requirements.md` と `design.md` を読む。
2. `docs/adr/ADR-0001-derived-author-docs-hub.md` で、なぜ HTML 主体・派生物生成方針なのか確認する。
3. `docs/current-state/features/author-docs-hub-foundation/feature-detail.v1.yaml` で、仕様から current-state へ責務が反映されていることを確認する。
4. `docs/session_handoffs/session_handoff_latest.md` で、次回開始ポインタが spec と current-state に接続されていることを確認する。

## Logical Commits
- `docs(spec): define author docs hub foundation [RAD-001]`
- `docs(state): register author docs hub current-state [RAD-001]`
- `docs(handoff): record resume packet for author docs hub [RAD-001]`
