export const siteTitle = "はじめてのRe:VIEW";
export const siteDescription =
  "最初の原稿作成から設定、修正、公開確認までを、迷いやすい順で整理した Re:VIEW 入門サイト。";

export const featuredRoutes = [
  {
    title: "まず全体をつかむ",
    description:
      "原稿リポジトリの構造、catalog.yml の役割、章ファイルの見かたを先に押さえる読み順です。",
    chapterSlug: "01-author-repo-overview"
  },
  {
    title: "記法を最短で覚える",
    description:
      "見出し、箇条書き、図表、脚注の基本をまとめて確認する読み順です。",
    chapterSlug: "02-review-basics"
  },
  {
    title: "修正のしかたを知る",
    description:
      "Nextpublishing の診断とトラブルシューティングから修正の流れを掴む読み順です。",
    chapterSlug: "05-nextpublishing-policy"
  }
];

export const authorityGroups = [
  {
    id: "normative",
    title: "公式仕様",
    description:
      "Re:VIEW の書き方そのものを確認するときの根拠です。見出し、段落、文中記法、設定ファイルの基本は、まずここに戻ります。",
    details: [
      "この書き方が Re:VIEW として正しいかを見る",
      "`config.yml` と `catalog.yml` の基本を確かめる",
      "構文の意味を確認したいときに使う"
    ]
  },
  {
    id: "descriptive",
    title: "実例観測",
    description:
      "著者リポジトリの実例から、ファイル構成、章分割、前書きや付録の置き方を読むための根拠です。",
    details: [
      "著者リポジトリの全体像をつかむ",
      "章の分け方やファイル配置の実例を見る",
      "よくある進め方を具体的にイメージする"
    ]
  },
  {
    id: "policy",
    title: "運用ルール",
    description:
      "Nextpublishing で修正になりやすい書き方を確認するときの根拠です。禁止タグ、Mermaid の注意、見出しや表の制約はここを見ます。",
    details: [
      "なぜ警告や要修正が出たかを調べる",
      "何に置き換えればよいかを確認する",
      "公開前に直しておく点を洗い出す"
    ]
  }
];

export const heroImages = {
  home: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80",
  sources:
    "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=1600&q=80"
};

export const versionHighlights = [
  {
    version: "Re:VIEW 5.8",
    title: "Mermaid 記法の `//graph` が公式に追加",
    summary:
      "フローチャートや関係図を Re:VIEW 原稿から直接書けるようになりました。図を使いたい著者には影響が大きい版です。",
    href: "https://review-knowledge-ja.readthedocs.io/ja/latest/releases/review580.html"
  },
  {
    version: "Re:VIEW 5.7",
    title: "`//blankline` まわりなどの挙動が調整",
    summary:
      "細かな組版や運用コマンドの修正が入っています。古いリポジトリで blankline や初期化手順を引きずっている場合は確認対象です。",
    href: "https://review-knowledge-ja.readthedocs.io/ja/latest/releases/review570.html"
  },
  {
    version: "Re:VIEW 4.2",
    title: "`caption_position` が追加",
    summary:
      "図・表・リスト・式のキャプション位置を設定で切り替えられるようになりました。古い資料を読むときの差分として重要です。",
    href: "https://review-knowledge-ja.readthedocs.io/ja/latest/releases/review420.html"
  }
];

export const sourceGroups = [
  {
    title: "Re:VIEW 公式文書",
    summary:
      "書き方そのものを確かめるときに戻る一次資料です。タグの意味、設定ファイル、章の並べ方はここを基準にしています。",
    items: [
      {
        label: "公式フォーマットガイド",
        href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89",
        note:
          "見出し、段落、文中命令、まとまり命令、図表、脚注、参照タグの土台になる資料です。",
        use: "タグの意味と正式な書き方を確認するとき",
        coverage: "頻出タグから低頻度タグまで最も広く載っています。",
        availability: "公開リンクあり"
      },
      {
        label: "quickstart.ja.md",
        href: "https://github.com/kmuto/review/blob/master/doc/quickstart.ja.md",
        note:
          "プロジェクトの作り方、`review-init`、`review-update`、最小構成の作業手順を確認できます。",
        use: "最初の原稿作成とフォルダ構成を確認するとき",
        coverage: "章構成、`catalog.yml`、ビルドコマンドの入口がまとまっています。",
        availability: "公開リンクあり"
      },
      {
        label: "config.yml.sample",
        href: "https://github.com/kmuto/review/blob/master/doc/config.yml.sample",
        note:
          "`booktitle`、`aut`、`language`、`toclevel`、`secnolevel` など、主要設定の実例を確認できます。",
        use: "`config.yml` を最小限から広げるとき",
        coverage: "設定名と初期値の目安を確認できます。",
        availability: "公開リンクあり"
      },
      {
        label: "catalog.ja.md",
        href: "https://github.com/kmuto/review/blob/master/doc/catalog.ja.md",
        note:
          "`PREDEF`、`CHAPS`、`APPENDIX`、`POSTDEF` の意味と並べ方を確認できます。",
        use: "`catalog.yml` の章順と前付・後付を整理するとき",
        coverage: "章ファイルの分割ルールを確認できます。",
        availability: "公開リンクあり"
      }
    ]
  },
  {
    title: "リリース差分と補助資料",
    summary:
      "同じタグでも版によって使える機能や挙動が違います。新機能や差分は Re:VIEW knowledge を起点に追います。",
    items: [
      {
        label: "Re:VIEW knowledge",
        href: "https://review-knowledge-ja.readthedocs.io/ja/latest/index.html",
        note:
          "版ごとの変更点、FAQ、実運用の補足がまとまった解説です。公式フォーマットガイドだけで不足するときに使います。",
        use: "版差分や FAQ を調べるとき",
        coverage: "5.9 から 4.x までの変更点ページへの入口があります。",
        availability: "公開リンクあり"
      },
      {
        label: "Re:VIEW 5.8 での変更点",
        href: "https://review-knowledge-ja.readthedocs.io/ja/latest/releases/review580.html",
        note:
          "`//graph` と Mermaid 対応を確認するときの基準です。",
        use: "Mermaid の導入可否や前提を確認するとき",
        coverage: "Mermaid 対応と関連する前提環境がまとまっています。",
        availability: "公開リンクあり"
      },
      {
        label: "Re:VIEW 5.7 での変更点",
        href: "https://review-knowledge-ja.readthedocs.io/ja/latest/releases/review570.html",
        note:
          "`//blankline` など細かな挙動差分を確認するときの入口です。",
        use: "古い原稿での版差分確認",
        coverage: "5.8 直前までの変更点を確認できます。",
        availability: "公開リンクあり"
      },
      {
        label: "Re:VIEW 4.2 での変更点",
        href: "https://review-knowledge-ja.readthedocs.io/ja/latest/releases/review420.html",
        note:
          "`caption_position` 追加など、古めの著者リポで影響が出る差分を確認できます。",
        use: "古いテンプレートや設定を読むとき",
        coverage: "図・表・リスト・式のキャプション位置まわりの差分を追えます。",
        availability: "公開リンクあり"
      }
    ]
  },
  {
    title: "著者リポジトリの実例",
    summary:
      "ここにある項目は公開リンクを持たない観測資料です。章の切り方や前付・後付の置き方を実例として読み、説明ページに反映しています。",
    items: [
      {
        label: "review-sample",
        href: null,
        note:
          "段階学習型の章進行と、前書き、著者情報、付録の並べ方を観測した資料です。",
        use: "初心者向けの章順を決めるとき",
        coverage: "章の粒度と読み順の作り方を確認できます。",
        availability: "公開リンクなし。手元の観測資料です。"
      },
      {
        label: "review-np-viewer-sample",
        href: null,
        note:
          "前書き、本編、付録、あとがきの切り分け方を確認した資料です。",
        use: "商業化向けのファイル分割を考えるとき",
        coverage: "前付・後付と本編の分け方を比較できます。",
        availability: "公開リンクなし。手元の観測資料です。"
      },
      {
        label: "preserved production-like snapshot",
        href: null,
        note:
          "概要から章別説明へ広げる構成を観測した保存資料です。",
        use: "解説サイトの見出し構成を調整するとき",
        coverage: "公開向けの並べ方と導線を確認できます。",
        availability: "公開リンクなし。手元の観測資料です。"
      }
    ]
  },
  {
    title: "Nextpublishing の運用根拠",
    summary:
      "ここにある項目も公開リンクはありません。編集部が提供している VSCode 拡張機能と、その診断辞書から、著者が先に避けたい記法を拾っています。",
    items: [
      {
        label: "Nextpublishing向け拡張機能",
        href: null,
        note:
          "WebView での見え方、Mermaid、数式 preview、診断メッセージの出し方を確認する根拠です。",
        use: "著者の手元で HTML 相当の見え方を確認するとき",
        coverage: "組版前に気付きたい修正ポイントを洗い出せます。",
        availability: "公開リンクなし。編集部側の配布物です。"
      },
      {
        label: "diagnostics-dict-latest.json",
        href: null,
        note:
          "禁止タグ、警告文、Mermaid の注意、表セル区切り、ID 重複などの診断条件を確認する資料です。",
        use: "どの書き方で修正が出るかを確認するとき",
        coverage: "著者原稿で頻出するミスを広く拾えます。",
        availability: "公開リンクなし。手元の診断辞書です。"
      },
      {
        label: "review-syntax-highlighting.md",
        href: null,
        note:
          "インライン命令とブロック命令の一覧を横断確認できる資料です。",
        use: "タグ一覧を作るときの補助資料",
        coverage: "頻出タグに加えて低頻度タグも拾えます。",
        availability: "公開リンクなし。手元の補助資料です。"
      }
    ]
  }
];

export const tagReferenceGroups = [
  {
    title: "最初に覚える基本",
    description:
      "まずはここだけで書き始められます。初稿で毎回出るものを先にまとめています。",
    items: [
      {
        tag: "`=` / `==` / `===`",
        purpose: "章・節・項の見出しを付ける",
        example: "章タイトル、節、小見出し",
        note:
          "`===` は項までにとどめます。第四レベル以降は使わない前提で組み立てたほうが安全です。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          }
        ]
      },
      {
        tag: "`*` 箇条書き",
        purpose: "手順や注意点を短く並べる",
        example: "箇条書きの前は 1 行空ける",
        note:
          "本文直後に続けて始めず、空行を 1 行入れると崩れにくくなります。ネストは浅く保ちます。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          },
          { label: "Nextpublishing向け拡張機能", href: null }
        ]
      },
      {
        tag: "`1.` 番号付き箇条書き",
        purpose: "順番がある手順を書く",
        example: "1. 保存する / 2. preview する",
        note:
          "番号の意味があるときだけ使います。箇条書きとの混在や深い入れ子は避けます。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          },
          { label: "Nextpublishing向け拡張機能", href: null }
        ]
      },
      {
        tag: "`@<code>{...}`",
        purpose: "文中のコマンド名やファイル名を示す",
        example: "`@<code>{config.yml}`",
        note:
          "見出しの中に多用しません。本文で短く示す用途に向いています。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          }
        ]
      },
      {
        tag: "`@<href>{...}`",
        purpose: "文中で URL を示す",
        example: "外部ドキュメントへの案内",
        note:
          "根拠ページや公式資料への導線としてよく使います。脚注や本文でのリンクに向いています。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          }
        ]
      }
    ]
  },
  {
    title: "コードと操作手順",
    description:
      "技術書の本文で頻出するまとまり命令です。最初の原稿でも早い段階で使います。",
    items: [
      {
        tag: "`//listnum[id][キャプション]{ ... //}`",
        purpose: "行番号付きのコードや手順を書く",
        example: "設定ファイル例、シェル手順",
        note:
          "著者原稿では最も使いやすい形です。ID とキャプションを空にしないで始めると管理しやすくなります。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          },
          { label: "Nextpublishing向け拡張機能", href: null }
        ]
      },
      {
        tag: "`@<list>{id}`",
        purpose: "リストを本文から参照する",
        example: "「リスト 2.1 を見てください」",
        note:
          "先に `//listnum` で ID を決めておくと参照が安定します。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          }
        ]
      },
      {
        tag: "`//cmd{ ... //}`",
        purpose: "コマンド操作だけを短く見せる",
        example: "ターミナルの 1 行コマンド",
        note:
          "本文中で長く説明せず、コマンド自体を目立たせたいときに向いています。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          }
        ]
      },
      {
        tag: "`//source[id][キャプション]{ ... //}`",
        purpose: "ソースコード例を示す",
        example: "Ruby や YAML の例",
        note:
          "本文の途中でまとまったコードを出すときに使います。言語名よりも何の例かが分かるキャプションを付けると読みやすくなります。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          }
        ]
      },
      {
        tag: "`//emlist{ ... //}`",
        purpose: "番号なしでコード断片を見せる",
        example: "短い設定例、差分の一部",
        note:
          "公式にはありますが、著者原稿では `//listnum` に寄せたほうが参照や診断がそろいやすいです。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          },
          { label: "Nextpublishing向け拡張機能", href: null }
        ]
      }
    ]
  },
  {
    title: "図・表・数式",
    description:
      "初学者でも使う場面が多い一方で、ID やキャプションの付け方で崩れやすい領域です。",
    items: [
      {
        tag: "`//image[id][キャプション]{ ... //}`",
        purpose: "図版や画面キャプチャを載せる",
        example: "画面図、構成図、スクリーンショット",
        note:
          "ID とキャプションを先に決めておくと、あとから本文で参照しやすくなります。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          },
          { label: "Nextpublishing向け拡張機能", href: null }
        ]
      },
      {
        tag: "`@<img>{id}`",
        purpose: "図を本文から参照する",
        example: "「図 3.1」への参照",
        note:
          "図の説明は本文に書き、キャプション側には図の名前を置くと整理しやすくなります。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          }
        ]
      },
      {
        tag: "`//table[id][キャプション]{ ... //}`",
        purpose: "比較表や一覧表を載せる",
        example: "設定値一覧、対応表",
        note:
          "セル区切りはタブ前提です。見た目をスペースでそろえないようにします。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          },
          { label: "Nextpublishing向け拡張機能", href: null }
        ]
      },
      {
        tag: "`@<table>{id}` / `//tsize[...]`",
        purpose: "表参照と表幅の調整",
        example: "「表 4.2」を参照する",
        note:
          "表幅調整は最後の微調整です。まずは素直な表を通してから必要なものだけ狭めます。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          }
        ]
      },
      {
        tag: "`//texequation[id][キャプション]{ ... //}`",
        purpose: "独立した数式を載せる",
        example: "式番号付きの数式",
        note:
          "HTML 側では TeX 記法のまま案内し、必要な式だけ使う形が初学者向きです。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          },
          { label: "Nextpublishing向け拡張機能", href: null }
        ]
      },
      {
        tag: "`@<m>{...}` / `@<eq>{id}`",
        purpose: "文中数式と式参照",
        example: "短い数式は `@<m>{a+b}`",
        note:
          "文中で長い数式を詰め込まず、長いものは `//texequation` に分けます。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          }
        ]
      },
      {
        tag: "`//graph[id][mermaid][キャプション]{ ... //}`",
        purpose: "Mermaid で関係図やフローを描く",
        example: "フロー図、状態遷移図",
        note:
          "Re:VIEW 5.8 以降の話です。縦長や過密な図は preview でも PDF でも読みにくくなるので、横に分けられるなら分けます。",
        sources: [
          {
            label: "Re:VIEW 5.8 での変更点",
            href: "https://review-knowledge-ja.readthedocs.io/ja/latest/releases/review580.html"
          },
          { label: "Nextpublishing向け拡張機能", href: null }
        ]
      }
    ]
  },
  {
    title: "参照・脚注・相互リンク",
    description:
      "章が増えるほど、本文から別の場所を指すタグが重要になります。ID を先に決めると崩れにくくなります。",
    items: [
      {
        tag: "`//footnote[id][本文]` / `@<fn>{id}`",
        purpose: "脚注を付けて本文から参照する",
        example: "補足や注記を脚注に逃がす",
        note:
          "本文を軽くしたいときに便利です。脚注の中に複雑なタグを詰め込みすぎないようにします。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          },
          { label: "Nextpublishing向け拡張機能", href: null }
        ]
      },
      {
        tag: "`//label[id]`",
        purpose: "本文中に参照用の目印を置く",
        example: "節見出し直前にラベルを置く",
        note:
          "図表以外の参照先を固定したいときに使います。あとから見出し文言を変えても参照が崩れにくくなります。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          }
        ]
      },
      {
        tag: "章・節参照タグ",
        purpose: "`@<chap>`、`@<chapref>`、`@<title>`、`@<hd>`、`@<sec>`、`@<secref>`、`@<sectitle>` を使い分ける",
        example: "章番号だけ、章題だけ、節題だけを取り出す",
        note:
          "何を見せたいかでタグを選びます。本文で一番多いのは `@<hd>` と `@<chapref>` です。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          },
          { label: "review-syntax-highlighting.md", href: null }
        ]
      },
      {
        tag: "図表・リスト参照タグ",
        purpose: "`@<img>`、`@<table>`、`@<list>` で図表やコードを参照する",
        example: "本文で参照先を一貫させる",
        note:
          "参照タグを使う前提で、ID を章ごとに重複させないように管理します。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          },
          { label: "Nextpublishing向け拡張機能", href: null }
        ]
      }
    ]
  },
  {
    title: "囲み・補足",
    description:
      "本文とは少し違う見せ方をしたいときの命令です。タイトルや書き始め方で崩れやすいので、型を決めて使います。",
    items: [
      {
        tag: "`//note[]{ ... //}`",
        purpose: "本文の補足を短くまとめる",
        example: "注意書きではない補足",
        note:
          "本文より少し引いた扱いにしたいときに使います。開き行に本文を続けて書かないようにします。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          },
          { label: "Nextpublishing向け拡張機能", href: null }
        ]
      },
      {
        tag: "`//memo[]{ ... //}` / `//tip[]{ ... //}` / `//info[]{ ... //}`",
        purpose: "覚えておくと便利な補足を分ける",
        example: "ちょっとしたコツ、補助知識",
        note:
          "見た目を変えたいからと種類を増やしすぎず、役割の違いが出るものだけ使います。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          },
          { label: "Nextpublishing向け拡張機能", href: null }
        ]
      },
      {
        tag: "`//warning[]{ ... //}` / `//important[]{ ... //}` / `//caution[]{ ... //}`",
        purpose: "先に避けたいミスや危険を示す",
        example: "組版で崩れやすい記法の注意",
        note:
          "警告系囲みはタイトル付きで使わず、本文だけを入れる形にそろえると安全です。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          },
          { label: "Nextpublishing向け拡張機能", href: null }
        ]
      },
      {
        tag: "`//lead[]{ ... //}` / `//quote[]{ ... //}`",
        purpose: "導入文や引用を本文と分ける",
        example: "章頭の短い導入、引用文",
        note:
          "説明が長いなら普通の本文に戻します。見た目を変えるためだけに多用しません。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          }
        ]
      }
    ]
  },
  {
    title: "低頻度だが知っておくと便利",
    description:
      "毎章は使わなくても、困ったときの逃げ道や、版差分を読むときに出てくる命令です。",
    items: [
      {
        tag: "`//beginchild` / `//endchild`",
        purpose: "番号付き箇条書きの入れ子を細かく制御する",
        example: "複雑な入れ子の箇条書き",
        note:
          "公式にはありますが、Nextpublishing向け拡張機能では非対応です。初学者向け原稿では避けます。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          },
          { label: "Nextpublishing向け拡張機能", href: null }
        ]
      },
      {
        tag: "`//blankline` / `//noindent`",
        purpose: "段落間や字下げを微調整する",
        example: "どうしても空きや字下げを変えたいとき",
        note:
          "版差分の影響を受けやすいので、最初から頼らず最後の微調整で使います。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          },
          {
            label: "Re:VIEW 5.7 での変更点",
            href: "https://review-knowledge-ja.readthedocs.io/ja/latest/releases/review570.html"
          }
        ]
      },
      {
        tag: "`//comment` / `#@#`",
        purpose: "出力に出さない作業メモを残す",
        example: "執筆中の TODO や編集メモ",
        note:
          "公開前に残っていても本文には出ませんが、作業メモは散らばりやすいので長く残しすぎないほうが管理しやすいです。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          }
        ]
      },
      {
        tag: "`//raw` / `@<raw>{...}` / `//embed` / `@<embed>{...}`",
        purpose: "出力形式ごとに生の記述を差し込む",
        example: "どうしても通常記法で表せないとき",
        note:
          "初心者向け原稿では最後の手段です。普通の Re:VIEW 記法で書けるならそちらを優先します。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          }
        ]
      },
      {
        tag: "`@<idx>{...}` / `@<hidx>{...}` / `@<ruby>{...}` / `@<uchar>{...}`",
        purpose: "索引、ルビ、特殊文字の調整に使う",
        example: "用語索引や読み仮名が必要なとき",
        note:
          "本文の主役ではありません。必要になった箇所だけ足していく使い方が向いています。",
        sources: [
          {
            label: "公式フォーマットガイド",
            href: "https://github.com/kmuto/review/blob/master/doc/format.ja.md#review-%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88%E3%82%AC%E3%82%A4%E3%83%89"
          },
          { label: "review-syntax-highlighting.md", href: null }
        ]
      }
    ]
  }
];
