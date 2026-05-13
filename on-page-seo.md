# On-Page SEO Checklist — YB Vet

Apply every item that fits the **page type** (blog vs service vs static).

## 1. Head & Metadata

- Title tag — 50–60 chars, primary keyword near the start  
- Meta description — 150–160 chars, keyword + benefit + soft CTA  
- Canonical URL set to prevent duplicates  
- Open Graph — og:title, og:description, og:image (1200×630), og:url, og:type  
- Twitter Card — summary_large_image, title, description, image  
- `lang` on `<html>` (e.g. `en-AU` when you localise)  
- Viewport for responsive rendering  
- Favicon + apple-touch-icon (when present in project)  
- Charset utf-8  

## 2. URL Structure

- Short slug — under 60 chars  
- Primary keyword in the slug where natural  
- Hyphens only — no underscores  
- Lowercase  
- Logical hierarchy — e.g. `/blog/[slug]`, `/services`  

## 3. Headings

- Exactly **one H1** per page; primary topic clear  
- Logical H2 → H3; do not skip levels  
- H2s reflect supporting questions / subtopics from the keyword cluster  
- No keyword stuffing  

## 4. Copy & Body

- Primary topic in the first ~100 words  
- Direct answer early; context after  
- Length broadly aligned with top results for the target query (see SERP when available)  
- Short paragraphs (1–4 sentences)  
- Readable, plain Australian English  
- Active voice preferred  
- Bold key phrases sparingly  
- Lists where they help scanning  

## 5. FAQ Section (long-form / commercial)

- 4–8 questions drawn from owner “People also ask” style queries where possible  
- 2–4 sentence answers each  
- FAQPage JSON-LD matching visible copy  

## 6. Images

- Alt text describes the image; keyword only if natural  
- Descriptive filenames, hyphens  
- Compressed, reasonable dimensions; width/height or `next/image` to limit CLS  
- Lazy load below the fold  
- Hero suitable for social sharing when the template supports it  

## 7. Internal Links

- 3–5 internal links per long-form post where applicable  
- **Prefer contextual links inside the body** — place them in the paragraph or list item where the topic is discussed (e.g. “our [dental care](/services)”, “[book online](/contact)”, “[another article on first visits](/blog/…)” when it genuinely helps the reader). Search engines and readers both treat **in-flow** links as stronger signals than the same URLs isolated in a footer block.  
- A short **“On this site”** or related-links section at the end is fine as a **supplement** — it must not be the *only* place internal links appear if the post could naturally mention those pages earlier.  
- Descriptive anchors — not “click here”  
- Breadcrumbs where the layout supports them  

## 8. External Links

- 2–3 links to **authoritative** sources relevant to the clinical topic (e.g. government animal health pages, universities, national bodies)  
- **Same rule as internal:** weave **1–2** of these into the **main body** where they support a claim or offer further reading; keep any end-of-article “Further reading” list as extra, not the sole outbound links.  
- `rel="noopener noreferrer"` when opening in a new tab  
- `rel="nofollow"` for sponsored or untrusted links  

## 9. Schema Markup (JSON-LD)

- **Blog:** Article or `BlogPosting` where applicable; align with `lib/schema.ts` patterns in this repo  
- **Local entity:** `VeterinaryCare` / local business schema consistent with `lib/schema.ts` and real NAP  
- **Service** pages (when added): service-related schema appropriate to the procedure topic  
- FAQPage where FAQ exists  
- BreadcrumbList where breadcrumbs exist  
- Organization / publisher consistent with **Yangebup-Beeliar Vet Clinic**  
- Author / Person for vet bylines when used  

## 10. E-E-A-T Signals

- Named author (vet) on blog content where possible  
- Link to `/team` or equivalent  
- Published (and updated) dates when the template supports them  
- Real address, phone, hours on contact and footer  
- Honest limits (“when to go to emergency”) where clinical  

## 11. Accessibility

- Semantic regions (`header`, `nav`, `main`, `article`, `footer`)  
- Visible focus; sufficient contrast  
- Meaningful link text  
- Alt text on informative images  

## 12. Mobile & Responsive

- Usable on small viewports; touch targets adequate  
- No horizontal scroll at common breakpoints  

## 13. Social Preview

- OG image ~1200×630 where available  
- Compelling descriptions; title not identical to H1 if a variant helps CTR  

## 14. Conversion (service-style pages)

- Phone + booking above the fold  
- Trust signals (reviews, years in community) where truthful  
- Hours and service area clear  

## 15. Long-Form Blog (when full template exists)

- Table of contents + in-page anchors for major H2s  
- Back-to-top control if the layout includes it  
- Image rules per root `CLAUDE.md` (Pexels limits)  
- **Linking:** satisfy §7–§8 with **in-body** internal and external links first; template blocks at the bottom (e.g. “On this site”, “Trusted resources”) duplicate coverage for UX, not as a substitute for contextual links in the HTML content.  
