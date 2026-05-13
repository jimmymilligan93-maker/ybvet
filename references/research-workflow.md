# Research workflow — Firecrawl + this repo

Use **Firecrawl** (CLI or API) when you need **accurate text from live websites** — for example mapping a competitor blog index, scraping article outlines, or pulling FAQ wording for **internal notes only**.

## Rules

1. **Research informs drafts.** Summaries, topic gaps, and tone notes may inform `keywords/*` or drafts. A **sister property under the same parent** may inform **voice and structure** internally — still **do not** paste long passages wholesale; rewrite for YB Vet; verify facts against `lib/data.ts`. **Published YB Vet pages:** no names or links to that property unless leadership approves.
2. **Never** describe Firecrawl, “SERP analysis,” or SEO methodology in customer-facing copy (see root `CLAUDE.md`).
3. Prefer **official** sources for medical/veterinary claims in published copy (e.g. state agriculture departments, university vet schools, RSPCA, AVA, product label directions). Firecrawl can help **find** those URLs; the published article still needs human vetting.

## Suggested flow

1. **Map** the target site’s blog section (`firecrawl map` or API map) → list URLs.
2. **Scrape** selected URLs → clean markdown for offline review.
3. **Distil** into a short internal brief: recurring topics, average depth, tone adjectives, gaps YB Vet could own.
4. **Update** `keywords/*.csv` or voice notes if the strategy changes.
5. **Draft** new posts using `references/voice.md` and `on-page-seo.md` only — original wording for YB Vet.

## Credentials

- Store **`FIRECRAWL_API_KEY`** in `.env.local` (see root `.env.example`).
- Install and auth: follow Firecrawl docs or your global `firecrawl` CLI setup; keys are **not** stored in this repository.

## After a crawl

- Summarise into **`references/industry-blog-patterns-analysed.md`** (or a new dated note) using **your own words** — patterns, topics, structure — not competitor prose.  
- Raw Firecrawl JSON/markdown dumps should stay under **`references/third-party-scrapes/`** (gitignored) or outside the repo.
