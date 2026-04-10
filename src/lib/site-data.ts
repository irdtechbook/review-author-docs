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

export const sourceGroups = [
  {
    title: "Re:VIEW 公式文書",
    items: [
      {
        label: "format.ja.md",
        href: "https://raw.githubusercontent.com/kmuto/review/master/doc/format.ja.md",
        note: "見出し、段落、文中記法、まとまり記法、表、図表参照の根拠。"
      },
      {
        label: "quickstart.ja.md",
        href: "https://raw.githubusercontent.com/kmuto/review/master/doc/quickstart.ja.md",
        note: "プロジェクト構成、catalog.yml、ビルドコマンドの根拠。"
      },
      {
        label: "config.yml.sample",
        href: "https://raw.githubusercontent.com/kmuto/review/master/doc/config.yml.sample",
        note: "設定項目の初期値と主要設定の根拠。"
      }
    ]
  },
  {
    title: "著者リポジトリの実例",
    items: [
      {
        label: "review-sample",
        href: null,
        note: "段階学習型の章進行と前書き、貢献者一覧の置き方を観測。"
      },
      {
        label: "review-np-viewer-sample",
        href: null,
        note: "前書き、本編、付録、あとがきの切り分けを観測。"
      },
      {
        label: "preserved production-like snapshot",
        href: null,
        note: "概要から配置先ごとの説明へ広がる実務向け構成を観測。"
      }
    ]
  },
  {
    title: "Nextpublishing の運用根拠",
    items: [
      {
        label: "Nextpublishing向け拡張機能",
        href: null,
        note: "WebView プレビュー、Mermaid、数式 preview、診断分類の挙動を確認。"
      },
      {
        label: "review-nextpreview-diagnostics-dictionary.json",
        href: null,
        note: "禁止タグ、Mermaid の警告、見出しや表の制約を確認。"
      },
      {
        label: "d013_banned_tag.ts",
        href: null,
        note: "見出し中の禁止タグなど、ルール実装側の根拠を確認。"
      }
    ]
  }
];
