export const siteTitle = "Re:VIEW Author Docs";
export const siteDescription =
  "Re:VIEW と Nextpublishing の著者向けに、原稿 repo の読み方、基本記法、診断対処を初心者向けに整理した docs hub。";

export const featuredRoutes = [
  {
    title: "まず全体をつかむ",
    description:
      "原稿 repo の構造、catalog.yml の役割、章ファイルの見かたを先に押さえる読み順です。",
    chapterSlug: "01-author-repo-overview"
  },
  {
    title: "記法を最短で覚える",
    description:
      "見出し、箇条書き、図表、脚注の基本をまとめて確認する読み順です。",
    chapterSlug: "02-review-basics"
  },
  {
    title: "差し戻しに強くなる",
    description:
      "Nextpublishing diagnostics とトラブルシューティングから修正導線を掴む読み順です。",
    chapterSlug: "05-nextpublishing-policy"
  }
];

export const authorityGroups = [
  {
    id: "normative",
    title: "Normative",
    description: "公式 Re:VIEW 文書。構文、設定、基本動作の一次根拠です。"
  },
  {
    id: "descriptive",
    title: "Descriptive",
    description: "著者 repo 実例。よくある構成や利用パターンを説明するときの観測根拠です。"
  },
  {
    id: "policy",
    title: "Policy",
    description: "Nextpublishing diagnostics。組版差し戻しや禁止ルールの実務根拠です。"
  }
];

export const heroImages = {
  home: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80",
  sources:
    "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=1600&q=80"
};

export const sourceGroups = [
  {
    title: "Official Re:VIEW docs",
    items: [
      {
        label: "format.ja.md",
        href: "https://raw.githubusercontent.com/kmuto/review/master/doc/format.ja.md",
        note: "見出し、段落、inline / block、表、図表参照の根拠。"
      },
      {
        label: "quickstart.ja.md",
        href: "https://raw.githubusercontent.com/kmuto/review/master/doc/quickstart.ja.md",
        note: "project layout、catalog.yml、build コマンドの根拠。"
      },
      {
        label: "config.yml.sample",
        href: "https://raw.githubusercontent.com/kmuto/review/master/doc/config.yml.sample",
        note: "config key の初期値と主要設定の根拠。"
      }
    ]
  },
  {
    title: "Author repo observations",
    items: [
      {
        label: "review-sample",
        href: null,
        note: "tutorial 型の章進行と前書き、contributors の置き方を観測。"
      },
      {
        label: "review-np-viewer-sample",
        href: null,
        note: "preface, chapter, appendix, afterword の切り分けを観測。"
      },
      {
        label: "preserved production-like snapshot",
        href: null,
        note: "overview から deploy variant へ広がる実務型構成を観測。"
      }
    ]
  },
  {
    title: "Nextpublishing policy evidence",
    items: [
      {
        label: "review-nextpreview-diagnostics-dictionary.json",
        href: null,
        note: "禁止タグ、Mermaid warning、見出しや表の制約を確認。"
      },
      {
        label: "d013_banned_tag.ts",
        href: null,
        note: "見出し中の禁止 tag など rule 実装側の根拠を確認。"
      }
    ]
  }
];

