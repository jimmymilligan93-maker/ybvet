#!/usr/bin/env node
/**
 * Search Pexels and print image URLs for a blog post.
 * Usage: PEXELS_API_KEY=... node scripts/pexels-blog-image.mjs "puppy training dog"
 */
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const envPath = resolve(root, ".env.local");
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^([A-Z_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

const query = process.argv.slice(2).join(" ") || "puppy training dog";
const key = process.env.PEXELS_API_KEY?.trim();
if (!key) {
  console.error("PEXELS_API_KEY is not set. Add it to .env.local (see .env.example).");
  process.exit(1);
}

const params = new URLSearchParams({ query, per_page: "5", orientation: "landscape" });
const res = await fetch(`https://api.pexels.com/v1/search?${params}`, {
  headers: { Authorization: key },
});
if (!res.ok) {
  console.error(`Pexels API error: ${res.status}`);
  process.exit(1);
}
const { photos } = await res.json();
for (const p of photos) {
  const url = `https://images.pexels.com/photos/${p.id}/pexels-photo-${p.id}.jpeg?auto=compress&cs=tinysrgb&w=1400`;
  console.log(`${p.id}\t${p.alt || query}\t${url}`);
}
