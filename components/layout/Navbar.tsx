import Link from "next/link";
import { CLINIC, NAV_LINKS } from "@/components/layout/nav-links";

export default function Navbar() {
  return (
    <header className="site-header sticky top-0 z-40">
      <div className="container flex items-center justify-between" style={{ height: 70 }}>
        <Link href="/" className="flex flex-col leading-tight" aria-label="YB Vet homepage">
          <span
            className="font-bold text-xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--primary)", letterSpacing: "-0.03em" }}
          >
            YB Vet
          </span>
          <span
            className="text-xs hidden sm:block"
            style={{ color: "var(--muted)", fontFamily: "var(--font-body)", letterSpacing: "0.01em" }}
          >
            Yangebup-Beeliar Vet Clinic
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium transition-colors duration-200 group"
              style={{ fontFamily: "var(--font-body)", letterSpacing: "0.02em", color: "var(--text)" }}
            >
              {l.label}
              <span
                className="absolute bottom-[-3px] left-0 h-[2px] w-0 transition-all duration-200 rounded-full group-hover:w-full"
                style={{ background: "var(--primary)" }}
              />
            </Link>
          ))}
        </nav>

        <a
          href={CLINIC.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary hidden md:inline-flex text-sm"
          style={{ padding: "0.5rem 1.25rem" }}
        >
          Book an Appointment
        </a>

        <details className="site-mobile-nav md:hidden relative">
          <summary
            className="site-mobile-nav__trigger list-none p-2 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            style={{ color: "var(--text)" }}
          >
            <span className="sr-only">Open menu</span>
            <span className="site-mobile-nav__icon" aria-hidden />
          </summary>
          <div
            className="site-mobile-nav__panel fixed inset-0 flex flex-col"
            style={{ background: "white", top: 70, zIndex: 30 }}
          >
            <nav className="flex flex-col p-6 gap-2 overflow-y-auto" aria-label="Mobile navigation">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block py-4 px-2 text-lg font-semibold border-b transition-colors"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="px-6 pb-6 mt-auto shrink-0">
              <a
                href={CLINIC.phoneHref}
                className="flex items-center justify-center py-4 px-4 rounded-xl text-xl font-bold min-h-[60px]"
                style={{ background: "var(--surface)", color: "var(--primary)" }}
              >
                {CLINIC.phone}
              </a>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
