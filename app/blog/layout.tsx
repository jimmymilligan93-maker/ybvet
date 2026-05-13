/**
 * Shared wrapper for /blog and /blog/[slug] — consistent background band for paw aesthetic.
 */
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <div className="blog-routes">{children}</div>;
}
