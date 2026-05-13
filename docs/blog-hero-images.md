# Blog hero images (Pexels) — how to get the right photo every time

There is **no live Pexels search** wired into this site. Each post stores a **full image URL** (usually `https://images.pexels.com/photos/<id>/pexels-photo-<id>.jpeg?...`) in `lib/data.ts` → `BLOG_POSTS[].coverSrc`.

Pexels **photo IDs are arbitrary numbers**. The same URL pattern does **not** imply topic, breed, or setting. Guessing IDs will eventually load an unrelated image.

## Reliable workflow (pick one)

1. **Browser first (recommended)**  
   - Search on [pexels.com](https://www.pexels.com) for e.g. “veterinarian dog”, “dog dental”, “golden retriever vet”.  
   - Open the result you want → **Download** or right‑click **Open image in new tab** and copy the **exact** `images.pexels.com/photos/...` URL.  
   - Paste that URL into `coverSrc` (keep `?auto=compress&cs=tinysrgb&w=1400` or equivalent for size).

2. **Pexels API (if you add it later)**  
   - Your app would call Pexels `/v1/search?query=dog+veterinarian` and store the chosen `src.original` or `src.large` in data or CMS — still **you** (or an editor) pick from results.

3. **Own assets**  
   - Put files under `public/images/blog/...` and set `coverSrc` to `/images/blog/your-file.webp` (then add nothing to `next.config` remotePatterns, or keep Pexels for other posts).

## After you change `coverSrc`

- Run the site and **look at the hero** before publishing.  
- `next/image` only optimises delivery; it does **not** choose subject matter.

## YB Vet in-repo reference

The breath article hero uses **`6235231`** — the same **vet + dog in clinic** scene as the Amelia byline photo, but the hero uses a wide crop (`w=1400`) so it reads as a banner, not a duplicate thumbnail. When you have clinic photography, replace `coverSrc` with `/images/blog/...` under `public/`.
