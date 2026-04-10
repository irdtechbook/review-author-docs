---
title: "著者リポの全体像"
order: 1
summary: "config.yml、catalog.yml、章ファイル、images の関係をつかみ、author repo を構造として読めるようにします。"
audience:
  - "著者 repo を初めて開く人"
  - "既存本の改訂を引き継ぐ人"
  - "構成を説明したいサポート担当"
---

author repo を初めて開いたとき、多くの人は「どのファイルを触ればよいのか」が分からず止まります。ここでは、**repo を 1 冊の本として読む視点** を先に持ちます。

## Re:VIEW author repo の基本構成

### まず見るべき 4 つの要素

初心者が最初に覚えるべきなのは、次の 4 つです。

1. `config.yml`: 本全体の設定
2. `catalog.yml`: 章の並び順
3. `*.re`: 実際の本文
4. `images/`: 画像ファイル

この 4 つだけで、たいていの author repo の骨格は読めます。

### 役割のイメージ

<div class="mermaid">
flowchart LR
  A[config.yml] --> B[本全体の設定]
  C[catalog.yml] --> D[章の並び順]
  E[chapter .re files] --> F[本文]
  G[images/] --> H[図版]
  B --> I[build output]
  D --> I
  F --> I
  H --> I
</div>

この図の要点は、**本文だけでは本にならない** ということです。並び順と設定があってはじめて build が成立します。

### `images/` を後回しにしない

画像は本文と別ディレクトリに置かれることが多いため、初心者は存在を忘れがちです。しかし図表系の不具合は、本文だけを見ても解決しないことがあります。

## `catalog.yml` で見る本の骨格

### `PREDEF`, `CHAPS`, `APPENDIX`, `POSTDEF`

Re:VIEW の `catalog.yml` では、本の部品を役割ごとに分けて並べます。

| 区分 | 何を置くか | 初心者向けの理解 |
| --- | --- | --- |
| `PREDEF` | 前書きやはじめに | 本編の前に読む部分 |
| `CHAPS` | 本編の章 | いちばん長く読む本文 |
| `APPENDIX` | 付録 | 補足や参照資料 |
| `POSTDEF` | あとがき、著者紹介など | 本の最後に置く部分 |

### `catalog.yml` は目次の元データ

章ファイルがどれだけ増えても、**表示順を決めるのは `catalog.yml`** です。ファイル名に番号が付いていても、それだけで build 順が決まるとは限りません。

次のように考えると分かりやすいです。

- `.re` ファイル: 材料
- `catalog.yml`: 材料を並べる設計図

### 章追加時にやること

章を 1 つ追加するときは、単に `.re` を作るだけでは足りません。

1. ファイルを作る
2. `catalog.yml` に足す
3. 必要なら画像を追加する
4. 参照や ID の重複がないか確認する

## 実在 author repo に見られる章構成パターン

### tutorial 型

sample repo では、前書きのあとに「準備」「最初の機能」「次の機能」と順番に進む tutorial 型がよく見られます。読者に一歩ずつ学ばせたい本で使いやすい形です。

### 実務型

production-like snapshot では、overview のあとに「構成パターン別の deploy」「appendix の補足」という並びが見られます。最初に全体設計を見せ、そのあと選択肢ごとに分ける構造です。

### 終端型

contributors や afterword を `POSTDEF` に分ける形は、終端部を本文から切り離すために有効です。本編と混ざらないので、改訂時の差分管理もしやすくなります。

## 初学者が最初に確認するチェックリスト

- `config.yml` はあるか
- `catalog.yml` はあるか
- `CHAPS` に本編が並んでいるか
- 画像ディレクトリの置き場は決まっているか
- 前書きやあとがきが本文と混ざっていないか

この 5 点が見えれば、repo 全体をかなり安全に読めます。

## この章の終わりに

repo の骨格が見えたら、次は 1 つ 1 つの `.re` の書き方です。次章では、段落、見出し、inline、block、箇条書きの基本を初心者目線で整理します。

## この章の根拠

- Normative: Re:VIEW quickstart の project layout と `catalog.yml`
- Descriptive: `review-sample`, `review-np-viewer-sample`, production-like snapshot の章構成
- Policy: 本章では policy を主根拠にしない

