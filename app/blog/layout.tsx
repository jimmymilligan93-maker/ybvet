/**
 * Shared wrapper for /blog and /blog/[slug] — consistent background band for paw aesthetic.
 * Preconnect lives here (not root) so /services does not pay an unused preconnect to Pexels.
 */
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://images.pexels.com" crossOrigin="anonymous" />
      <div className="blog-routes">{children}</div>
    </>
  );
}
