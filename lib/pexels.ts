/**
 * Pexels API helpers for blog/service imagery.
 * Requires PEXELS_API_KEY in `.env.local` (see `.env.example`).
 */

export type PexelsPhoto = {
  id: number;
  url: string;
  photographer: string;
  alt: string;
};

type PexelsSearchResponse = {
  photos: Array<{
    id: number;
    alt: string;
    photographer: string;
    src: { large: string; large2x: string; original: string };
  }>;
};

/** Build a sized Pexels CDN URL (allowed in `next.config.ts` remotePatterns). */
export function pexelsImageUrl(photoId: number, width = 1400): string {
  return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

/** Search Pexels for stock photos; returns empty array when the API key is missing. */
export async function searchPexelsPhotos(
  query: string,
  options?: { perPage?: number; orientation?: "landscape" | "portrait" | "square" }
): Promise<PexelsPhoto[]> {
  const key = process.env.PEXELS_API_KEY?.trim();
  if (!key) return [];

  const params = new URLSearchParams({
    query,
    per_page: String(options?.perPage ?? 8),
  });
  if (options?.orientation) params.set("orientation", options.orientation);

  const res = await fetch(`https://api.pexels.com/v1/search?${params}`, {
    headers: { Authorization: key },
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error(`Pexels search failed (${res.status}): ${query}`);
  }

  const data = (await res.json()) as PexelsSearchResponse;
  return data.photos.map((p) => ({
    id: p.id,
    url: p.src.large,
    photographer: p.photographer,
    alt: p.alt || query,
  }));
}
