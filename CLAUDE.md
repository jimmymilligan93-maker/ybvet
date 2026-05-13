@AGENTS.md

---

# YB Vet — content, SEO, research (project-specific)

**Practice:** Yangebup-Beeliar Vet Clinic (trading **YB Vet**). **Site data:** `lib/data.ts` (`CLINIC`, `VETS`, `SERVICES`, `BLOG_POSTS`, `TESTIMONIALS`). **Canonical URL base:** `https://ybvet.com.au` (see `app/layout.tsx` `metadataBase`).

**Style vs facts:** YB Vet is a **stand-alone business** under the **same parent** as another veterinary operation whose blogs were used as a **private style benchmark**. Published `ybvet.com.au` copy should **feel** like the same human could have written both (tone, pacing, humour discipline) but must **not** name, link, or attribute the sister business unless leadership explicitly approves — see `references/voice.md` and `references/stats.md`.

Before writing **any customer-facing copy** (blog, service blurbs, meta), read:

| File | Purpose |
|------|---------|
| `references/voice.md` | Style, rhythm, banned phrases, local positioning |
| `references/humour.md` | When (if) to use light humour |
| `references/stats.md` | Numbers you may cite; clinic facts vs external stats |
| `references/stories.md` | Composite story rules and themes |
| `references/opinions.md` | Approved opinion angles |
| `references/research-workflow.md` | **Firecrawl** use: research and internal briefs; never paste raw third-party prose as finished copy |

For on-page requirements, read **`on-page-seo.md`** at the repository root.

---

## Voice and content rules

- No AI-tell phrases (*unlock*, *leverage*, *seamless*, *world-class*, *in today's fast-paced world*), no emojis, no exclamation marks in body copy.  
- **Start with the answer** (or a concrete scene); add context after.  
- Use real numbers from `references/stats.md` / `lib/data.ts` where relevant.  
- **At most one** composite story per post (`stories.md`); **at most one** strong opinion (`opinions.md`), tied to experience or a real number.  
- Say when **not** to use the clinic (e.g. **emergency / specialist / after-hours emergency vet**) when clinically relevant.  
- **Australian English** for a **veterinary clinic** addressing **pet owners** — not human-GP / Medicare billing copy unless you are clearly explaining something unrelated to GP (usually avoid).  
- **Blog image limits:** max **2** Pexels-sourced images per post unless the post exceeds **1,500 words** (then a third is allowed). Never repeat the same image URL in one post. Hero near top; one mid-article above an H2 when the layout supports it.  
- **Research transparency:** Never describe your research process, Firecrawl runs, SERP tools, or “SEO methodology” in published copy. Research informs drafts only.

Before shipping writing, re-read `references/voice.md` banned list and strip matches.

---

## Research automation (Firecrawl)

For **mapping or scraping** sites to inform **keywords** or **internal briefs**, follow `references/research-workflow.md`. A **parent-group benchmark** may inform **structure and tone** only; write **original** sentences for `ybvet.com.au` and **do not** link or name the sister property in published copy unless approved. Set `FIRECRAWL_API_KEY` in `.env.local` (see `.env.example`).

---

## Images (Pexels API — future build automation)

When implementing build-time Pexels fetch, use **`PEXELS_API_KEY`** from `.env.local` (never commit secrets). Until `lib/pexels.ts` (or equivalent) exists, the live site may use static or direct image URLs; the **blog/service Cursor skills** still describe the target pattern for when that module exists.

---

## Technical SEO (site-wide goals)

- Canonical URLs via `metadata.alternates.canonical` where defined  
- Open Graph / Twitter metadata on routes that export them  
- Semantic HTML; sensible heading order  
- Run **`npm run build`** before declaring work complete  

This project uses **Next.js 16** (App Router). Follow **`AGENTS.md`**: read `node_modules/next/dist/docs/` when unsure of APIs.

---

## Cursor skills in this repo

- **`.cursor/skills/blog/`** — long-form SEO blog workflow (canonical code path uses placeholder **`[FIRST_BLOG_POST_SLUG]`** until you add a full template page).  
- **`.cursor/skills/service/`** — service / location workflow (placeholder **`[FIRST_SERVICE_PAGE_SLUG]`**). Today, services are listed on **`app/services/page.tsx`**; dedicated landing routes may be added later.  
- **`website-builder-setup/`** — optional UI stack installer skill (see folder README).

---

## Scope

Do exactly what is asked. If requirements conflict with `lib/data.ts` or clinical safety, ask before inventing facts.
