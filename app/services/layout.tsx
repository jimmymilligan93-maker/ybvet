/**
 * Services-only subtree: override Next font CSS variables so this route does not
 * wait on Google Fonts for body/heading text (LCP + Speed Index on throttled runs).
 * Navbar/Footer stay under the root layout and keep the brand webfonts.
 */
export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <div className="services-route-fonts">{children}</div>;
}
