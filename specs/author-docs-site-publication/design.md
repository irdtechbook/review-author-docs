# Design: author docs site publication

## Decision
Astro を repository root で実行し、Markdown chapter source を content collection として読む。公開先は `https://irdtechbook.github.io/review-author-docs/` で、GitHub Actions により GitHub Pages へ deploy する。

## Site Surface
- index page
  - site purpose
  - beginner routes
  - chapter list
  - source classes
- chapter detail pages
  - rendered markdown
  - chapter summary
  - prev / next links
  - source trail
- sources page
  - normative / descriptive / policy evidence list

## Implementation Notes
- `astro.config.mjs`
  - `site: https://irdtechbook.github.io`
  - `base: /review-author-docs`
  - `output: static`
- content collection
  - build-time Markdown under `src/content/chapters`
- layout
  - fixed header + chapter navigation
  - responsive content width
  - Mermaid init script
- workflow
  - `.github/workflows/deploy.yml`
  - official `withastro/action`
  - `actions/deploy-pages`

## Guardrails
- build output is fully static
- links must honor `base`
- source trail must preserve authority class separation
- content remains human-authored Markdown, not generated HTML source
