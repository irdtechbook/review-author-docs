# Design: author docs content information architecture

## Scope
- audience segmentation
- site navigation
- landing structure
- page family inventory
- site-to-book mapping
- evidence-based content outline draft

## Non-goals
- actual content writing
- visual theme implementation
- search engine implementation
- full page-by-page prose completion

## Evidence Base
- Official Re:VIEW format guide (`format.ja.md`)
  - heading level syntax, paragraph rules, inline/block command boundaries, list indentation, table tab separation, image/table/footnote references
- Official Re:VIEW quickstart (`quickstart.ja.md`)
  - `config.yml`, `catalog.yml`, `PREDEF` / `CHAPS` / `APPENDIX` / `POSTDEF`, build command flow, project file layout
- Official `config.yml.sample`
  - config keys relevant to Nextpublishing parity such as `chapterlink`, `secnolevel`, `highlight`, image and table related keys
- Author repo corpus snapshot
  - sample tutorial-style author repo with long `CHAPS` progression and `PREDEF` / `POSTDEF`
  - sample Nextpublishing viewer repo with preface, chapter, appendix, afterword split
  - preserved production-like author repo snapshot with overview, architecture mapping, deploy variants, appendices, contributors
- TECHZIP / Nextpublishing diagnostics corpus
  - banned or deprecated syntax, list and heading constraints, image and table restrictions, config requirements, Mermaid and environment-dependent warnings

## Drafting Order
1. Chapter layer
   - まず reader journey に対して「何をどの順に読むか」を章単位で固定する。
2. Middle-heading layer
   - 次に各章を「何を判断・理解・修正できるようにするか」で中見出しへ分解する。
3. Small-heading layer
   - 最後に各中見出しを「どのタグ、どの設定、どの diagnostics、どの author repo evidence に触れるか」で小見出しへ分解する。

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

## Draft Content Outline
### 第0章 はじめにと読み方
#### 0-1 この docs hub の責務
- 0-1-1 公式 Re:VIEW と派生 docs hub の境界
- 0-1-2 TECHZIP author repo と Nextpublishing diagnostics を併記する理由
- 0-1-3 このサイトと書籍派生物の使い分け
#### 0-2 読者別の入口
- 0-2-1 著者が最短で修正したいときの読み方
- 0-2-2 ReVIEW を体系的に学びたいときの読み方
- 0-2-3 サポート担当が根拠を逆引きしたいときの読み方
#### 0-3 先に知っておく前提
- 0-3-1 ReVIEW author repo の基本構成を前提にすること
- 0-3-2 サイトの説明は authority class を明示すること
- 0-3-3 組版差し戻しは diagnostics-first で扱うこと

### 第1章 著者リポの全体像
#### 1-1 ReVIEW author repo の基本構成
- 1-1-1 `config.yml`
- 1-1-2 `catalog.yml`
- 1-1-3 章ファイル `.re`
- 1-1-4 `images/` と補助ファイル
#### 1-2 `catalog.yml` で見る本の骨格
- 1-2-1 `PREDEF` の役割
- 1-2-2 `CHAPS` の役割
- 1-2-3 `APPENDIX` の役割
- 1-2-4 `POSTDEF` の役割
#### 1-3 実在 author repo に見られる章構成パターン
- 1-3-1 前書きから本編へ入る tutorial 型
- 1-3-2 overview から deploy variant へ展開する実務型
- 1-3-3 appendix と contributors を分離する終端型

### 第2章 Re:VIEW 原稿の基本記法
#### 2-1 段落と見出しの基本
- 2-1-1 空行で段落を分ける
- 2-1-2 `=` から `======` までの見出しレベル
- 2-1-3 見出し行に不要な inline tag を入れない
#### 2-2 inline 記法の基本
- 2-2-1 `@<code>` と文字装飾の使い分け
- 2-2-2 参照系 inline tag の扱い
- 2-2-3 禁止または非推奨 inline tag の見分け方
#### 2-3 block 記法の基本
- 2-3-1 `//listnum` と番号付きコードブロック
- 2-3-2 `//emlist` と `//cmd` の使い分け
- 2-3-3 `//quote`, `//column`, `//note` 系ブロックの位置づけ
#### 2-4 箇条書きとネストの注意点
- 2-4-1 行頭の空白が必要な箇条書き
- 2-4-2 ネスト深度の制約
- 2-4-3 箇条書き前の空行ルール

### 第3章 図表・脚注・コード・数式
#### 3-1 画像の扱い
- 3-1-1 `//image` と `//indepimage`
- 3-1-2 `@<img>` 参照の基本
- 3-1-3 Nextpublishing で問題になりやすい画像拡張子
#### 3-2 表の扱い
- 3-2-1 `//table` の基本形
- 3-2-2 セル区切りにタブを使う理由
- 3-2-3 ID と caption の順序制約
#### 3-3 脚注・注記・補足
- 3-3-1 `//footnote` と `@<fn>`
- 3-3-2 caption や脚注で避ける文字
- 3-3-3 column や note 系 block との使い分け
#### 3-4 コード・数式・図式
- 3-4-1 `//listnum`, `//emlist`, `//cmd`
- 3-4-2 `//texequation`
- 3-4-3 `//graph` と Mermaid 関連警告

### 第4章 `config.yml` と `catalog.yml` の基本
#### 4-1 `config.yml` の最重要キー
- 4-1-1 書誌情報と book metadata
- 4-1-2 `language`, `htmlext`, image 設定
- 4-1-3 `catalogfile` と `contentdir`
#### 4-2 Nextpublishing parity に効く設定
- 4-2-1 `chapterlink: null`
- 4-2-2 `secnolevel: 4`
- 4-2-3 `highlight` を無効にする判断
#### 4-3 `catalog.yml` の保守ルール
- 4-3-1 章追加時の更新ポイント
- 4-3-2 appendix と postdef の置き方
- 4-3-3 原稿ファイル命名の一貫性
#### 4-4 build と preview の基本フロー
- 4-4-1 project 初期化と build コマンドの位置づけ
- 4-4-2 preview 前に見るべき diagnostics
- 4-4-3 サイト生成物と書籍派生物の違い

### 第5章 Nextpublishing 固有ルールと diagnostics
#### 5-1 禁止・非推奨タグ
- 5-1-1 `//list` ではなく `//listnum`
- 5-1-2 `//emlist` 非推奨警告の扱い
- 5-1-3 サポート外 block と inline tag の整理
#### 5-2 見出し・参照・ID の制約
- 5-2-1 見出し中の禁止タグ
- 5-2-2 重複 ID と未使用 ID
- 5-2-3 未定義参照と逆引き手順
#### 5-3 箇条書き・表・画像の差し戻しポイント
- 5-3-1 箇条書きの空白と空行
- 5-3-2 表セルのタブ区切り
- 5-3-3 JPG 必須や caption 制約
#### 5-4 環境依存と renderer 依存の警告
- 5-4-1 環境依存文字の扱い
- 5-4-2 Mermaid warning の見方
- 5-4-3 Nextpreview と本番差異の扱い

### 第6章 執筆・検証・修正ワークフロー
#### 6-1 著者ワークフロー
- 6-1-1 章追加前に決めること
- 6-1-2 原稿執筆中に維持する粒度
- 6-1-3 図表と参照を後で壊さない書き方
#### 6-2 diagnostics-first workflow
- 6-2-1 まず diagnostic ID からルールを引く
- 6-2-2 root cause と symptom を分ける
- 6-2-3 修正後に再確認する観点
#### 6-3 support / maintainer workflow
- 6-3-1 問い合わせから該当ページへ誘導する
- 6-3-2 根拠 source を明示して説明する
- 6-3-3 docs hub 側へ知見を反映する条件

### 第7章 トラブルシューティング
#### 7-1 症状から探す
- 7-1-1 build が止まる
- 7-1-2 図表や参照が出ない
- 7-1-3 組版差し戻しになる
#### 7-2 diagnostic から探す
- 7-2-1 list / heading / table 系の代表診断
- 7-2-2 ID / reference 系の代表診断
- 7-2-3 config / environment 系の代表診断
#### 7-3 よくある修正パターン
- 7-3-1 置換で直るもの
- 7-3-2 構造変更が必要なもの
- 7-3-3 source 側で保持すべき制約メモ

### 第8章 根拠逆引きと付録
#### 8-1 Source Map / Provenance
- 8-1-1 各ページで authority class をどう表示するか
- 8-1-2 公式 doc と author repo evidence の結び方
- 8-1-3 lock snapshot と freshness の見方
#### 8-2 付録として持つべき索引
- 8-2-1 tag atlas quick index
- 8-2-2 diagnostics code index
- 8-2-3 config key quick reference
#### 8-3 書籍派生物への落とし込み
- 8-3-1 サイトの page family を章へ束ねる
- 8-3-2 書籍では削る provenance detail
- 8-3-3 appendix に逃がす一覧物

## Coverage Notes
- 第0章から第4章は Re:VIEW 公式 documentation と author repo corpus の共通骨格を優先する。
- 第5章から第7章は Nextpublishing diagnostics corpus を中心に構成する。
- 第8章は docs hub 固有の価値である provenance と逆引きを担う。
- 実装フェーズでは、この章立てを site navigation と page family に分解し、ページ単位の source map を付与する。

## Open Decisions
- 第2章と第3章を「記法基礎」と「素材要素」に分けるか、tag atlas 連動で再編するか
- 第5章の diagnostics を rule-first にするか、diagnostic-code-first にするか
- 第8章の provenance 詳細をサイト専用に寄せるか、書籍版にも簡約掲載するか
