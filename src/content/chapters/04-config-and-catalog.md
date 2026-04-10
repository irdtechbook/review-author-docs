---
title: "config.yml と catalog.yml の基本"
order: 4
summary: "本文の外側で build を支える 2 つの設定ファイルを整理し、初心者が先に押さえるべき key を絞り込みます。"
audience:
  - "build の前提を理解したい著者"
  - "chapterlink や secnolevel が気になる人"
  - "章追加のたびに設定で迷う人"
---

本文が書けても、`config.yml` と `catalog.yml` を触れないと本全体は動きません。この章では、初心者が最初に見るべき key と、Nextpublishing 運用で気を付けたい点を分けて整理します。

## `config.yml` の最重要キー

### まずは「本の情報」と「build の挙動」を分ける

`config.yml` には多くの key がありますが、初学者は次の 2 つに分けて読むと理解しやすくなります。

- 書誌情報: 本のタイトル、著者、言語など
- build 挙動: 見出しやリンク、画像やハイライトに関する設定

### 先に見るべき key

| key | まず何を見るか | 初心者への意味 |
| --- | --- | --- |
| `booktitle` | 本の題名 | 出力面の名前が分かる |
| `language` | 言語 | 日本語前提かを確認できる |
| `catalogfile` | 目次ファイルの場所 | どの `catalog.yml` を使うか分かる |
| `contentdir` | 本文の置き場 | `.re` の基準ディレクトリが分かる |

### 「分からない key は放置」でよい

`config.yml` は深く掘ると広いですが、最初から全部理解する必要はありません。触る予定がない key に時間を使うより、いま build に関係する key だけ押さえたほうが前に進めます。

## Nextpublishing parity に効く設定

### `chapterlink: null`

運用差分としてよく話題になる設定です。初心者は「リンク関係で不具合が出るなら、まずこの key を確認する」と覚えておくと十分です。

### `secnolevel: 4`

見出し番号の扱いとつながる設定です。本文側で見出しレベルを深くしすぎると、設定との差が出やすくなります。

### `highlight` を無効にする判断

syntax highlight は便利ですが、運用との相性で問題が出ることがあります。初心者向けには、**きれいに見えるかどうかより、安定して通るか** を優先してください。

## `catalog.yml` の保守ルール

### 章追加時の更新ポイント

章追加時は、本文だけでなく `catalog.yml` にも反映が必要です。ここを忘れると「ファイルはあるのに build に出ない」という典型的な混乱が起きます。

### appendix と postdef の置き方

初心者は補足を本編の後ろへ足しがちですが、付録とあとがきを分けると構造が安定します。

- 補足資料や索引: `APPENDIX`
- あとがき、著者紹介、contributors: `POSTDEF`

### 命名は見つけやすさ重視

ファイル名は、後で見返したときに役割が分かることが大切です。番号付きかどうかより、**何の章かが分かること** を優先してください。

## build と preview の基本フロー

### 原稿の変更から確認まで

<div class="mermaid">
flowchart TD
  A[章ファイルを更新] --> B[catalog.yml / config.yml を確認]
  B --> C[build or preview]
  C --> D[diagnostics を確認]
  D --> E[本文 or 設定を修正]
</div>

### preview 前に見るべきこと

build 前に次を確認しておくと、原因切り分けが速くなります。

1. 追加した章が `catalog.yml` に入っているか
2. 参照する画像や脚注の ID が存在するか
3. 変更した設定が本当に必要か

### サイト生成物と書籍派生物の違い

この repo では、公開サイトが主配布面です。つまり `config.yml` や `catalog.yml` の説明も、**書籍を作るためだけではなく、構造を理解して修正を速くするため** に置かれています。

## この章の終わりに

次章では、初心者が最も気になる「なぜこれが差し戻しになるのか」を、Nextpublishing diagnostics の観点から整理します。

## この章の根拠

- Normative: Re:VIEW quickstart, `config.yml.sample`
- Descriptive: sample author repo の chapter split と config placement
- Policy: `chapterlink`, `secnolevel`, `highlight` に関する diagnostics corpus 接続

