# SEO skill kit (YB Vet copy)

This folder documents the **SEO + content skill pack** that lives in this repository for **Yangebup-Beeliar Vet Clinic** (trading as **YB Vet**).

The **gold master** template remains on your Mac at **`Documents/SEO-Skill-Template`**. This implementation **does not modify** that folder — it only adds a **filled, vet-specific copy** inside this repo for YB Vet automation and Cursor agents.

## What was copied and customised

| Path | Purpose |
|------|---------|
| `.cursor/skills/blog/` | Long-form blog workflow (targets future full template at `app/blog/[FIRST_BLOG_POST_SLUG]/page.tsx`). |
| `.cursor/skills/service/` | Service / location landing workflow (targets future `app/[FIRST_SERVICE_PAGE_SLUG]/page.tsx` or agreed route pattern). |
| `references/` | Voice, stats, stories, opinions, humour + **Firecrawl research workflow**. |
| `keywords/` | Seed CSVs for topics and service+suburb phrases. |
| `on-page-seo.md` | On-page checklist (vet + local business wording). |
| `website-builder-setup/` | Bundled **website-builder-setup** skill (UI stack installer docs). |
| Root `CLAUDE.md` | Merged: Next.js agent rules + YB Vet content/SEO rules. |

## Canonical site facts (filled)

| Field | Value |
|--------|--------|
| Trading name | YB Vet |
| Legal / full name | Yangebup-Beeliar Vet Clinic |
| Website | `https://ybvet.com.au` |
| Address | Shop 4/31-35 Moorhen Drive, Yangebup WA 6164 |
| Phone | (08) 9417 2882 |
| Email | info@ybvet.com.au |
| Booking | Vetstoria (see `lib/data.ts` → `CLINIC.bookingUrl`) |
| Primary suburb | Yangebup |
| Service area | Beeliar, Success, Aubin Grove, Bibra Lake (and surrounds) |

## Secrets (never commit real values)

Set locally (e.g. `.env.local`):

- `PEXELS_API_KEY` — for future build-time Pexels image fetch when `lib/pexels.ts` (or equivalent) is added.
- `FIRECRAWL_API_KEY` — for Firecrawl CLI/API when researching competitor or reference sites (see `references/research-workflow.md`).

See repository root `.env.example` for variable names only.
