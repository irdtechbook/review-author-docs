---
title: "根拠逆引きと付録"
order: 8
summary: "この docs hub がどの根拠に立っているかを逆引きし、tag index、diagnostics index、config quick reference へつなげます。"
audience:
  - "根拠つきで説明したいサポート担当"
  - "章の背景 source を確認したい読者"
  - "今後の更新差分を管理したい保守者"
---

このサイトの価値は、単に解説文があることではありません。**説明がどの根拠に立っているかを辿れること** が重要です。最後の章では、その見かたをまとめます。

## Source Map / Provenance

### authority class を見る

各章の末尾には、Normative / Descriptive / Policy のどれを主に使ったかを示しています。これを見ると、「ここは公式仕様の説明なのか」「運用上の注意なのか」が分かります。

### 公式 docs と author repo evidence の結び方

この docs hub では、公式 docs に書かれていることをそのまま繰り返すのではなく、author repo 実例と結びつけて説明しています。たとえば `catalog.yml` の役割は quickstart に根拠がありますが、どんな章構成で現れるかは実例から補っています。

### freshness と lock の考え方

将来 source が更新されたときは、この docs hub も見直しが必要です。そのため、source trail は単なる参考リンクではなく、**後から更新差分を追うための足場** として扱います。

## 付録として持つべき索引

### tag atlas quick index

初心者は tag の正式名を知らないまま検索したいことがあります。だから、付録では厳密な分類だけでなく、**目的語から引ける簡易索引** が役立ちます。

例:

- コードを見せたい
- 画像を入れたい
- 脚注を付けたい
- 表を入れたい

### diagnostics code index

warning や error を見たときに、章を飛び越えて該当 rule へ行ける索引が必要です。これはサポート担当にも効きます。

### config key quick reference

`config.yml` の全 key を説明し尽くすより、初心者が最初に触る key だけを短く引ける表があるほうが実用的です。

| key | まず見る理由 | 詳細章 |
| --- | --- | --- |
| `booktitle` | 本の題名を確認する | 第5章 |
| `catalogfile` | どの目次を使うか確認する | 第5章 |
| `chapterlink` | 運用差分を確認する | 第5章・第6章 |
| `secnolevel` | 見出し番号と接続する | 第5章・第6章 |

## 書籍派生物への落とし込み

### サイトをそのまま本にしない

サイトは「必要な章へ飛ぶ」読み方に向いています。書籍派生物は「前から順に読む」読み方に向いています。だから章の元は同じでも、並びや削り方は変わります。

### 書籍で削る detail

site では有用でも、書籍では重いものがあります。

- source trail の細かい説明
- 参照先 URL の一覧
- route 別の導線説明

これらは site 側に残し、書籍では要約だけにするのが読みやすいです。

### appendix に逃がす一覧物

一覧表は便利ですが、本編に置きすぎると流れを止めます。tag index、diagnostics index、config quick reference のようなものは appendix に置くと扱いやすくなります。

## この docs hub をどう育てるか

今後の更新で大事なのは、説明を増やすことだけではありません。次の 3 つを保つことが大切です。

1. 根拠の種類を混ぜない
2. beginner-first の読み順を崩さない
3. 章 source を分割したまま更新できる状態を保つ

この 3 点が守られれば、公開サイトでも書籍派生物でも、あとから手を入れやすい構造を維持できます。

## この章の根拠

- Normative: 公式 Re:VIEW docs の参照先
- Descriptive: author repo 実例の観測結果
- Policy: diagnostics corpus を逆引き対象として扱う運用方針

