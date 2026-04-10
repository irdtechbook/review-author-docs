# ADR-0003: GitHub Pages publication target

- Status: Accepted
- Date: 2026-04-10

## Context
`review-author-docs` は Astro を使った static HTML publication を前提にしている。公開先は、運用コストが低く、repo 単位で責務分離でき、将来 custom domain を追加しても破綻しにくいことが必要だった。

また、ユーザー指定として `irdtechbook` アカウント配下で公開する要件がある。

## Decision
公開先は GitHub Pages とし、`irdtechbook` アカウント配下の project site とする。現在の repo 名を前提に、既定 publish URL は `https://irdtechbook.github.io/review-author-docs/` とする。

採用方針:
- Astro の static build を GitHub Actions から Pages artifact として公開する
- base path は `/review-author-docs/` とする
- custom domain は将来拡張扱いとし、foundation では `github.io` URL を canonical target にする

## Consequences
### Positive
- repo 単位で docs を分離して公開できる
- static artifact の publish 先として最小構成にできる
- irdtechbook アカウント配下で運用主体が明確になる

### Negative
- asset path と internal links は project site の base path を前提にする必要がある
- custom domain 導入までは `github.io` URL が外部公開 URL になる

### Guardrails
- Pages 公開物は `dist/html` 相当の validated artifact からのみ生成する
- preview と release の区別を保ち、未検証 output を Pages に直接出さない
- canonical publication target を変更する場合は ADR を更新する
