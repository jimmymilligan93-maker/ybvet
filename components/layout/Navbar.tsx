"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { CLINIC } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/services", label: "Services" },
  { href: "/team",     label: "Our Team" },
  { href: "/about",    label: "About" },
  { href: "/blog",     label: "Resources" },
  { href: "/contact",  label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <header
        className="sticky top-0 z-40 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
          boxShadow: scrolled ? "0 2px 20px rgba(14,143,224,0.10)" : "0 1px 0 rgba(14,143,224,0.12)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="container flex items-center justify-between" style={{ height: 70 }}>
          {/* Logo */}
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

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative text-sm font-medium transition-colors duration-200 group"
                style={{
                  color: pathname === l.href ? "var(--primary)" : "var(--text)",
                  fontFamily: "var(--font-body)",
                  letterSpacing: "0.02em",
                }}
              >
                {l.label}
                <span
                  className="absolute bottom-[-3px] left-0 h-[2px] transition-all duration-200 rounded-full"
                  style={{
                    background: "var(--primary)",
                    width: pathname === l.href ? "100%" : "0%",
                  }}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={CLINIC.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hidden md:inline-flex text-sm"
            style={{ padding: "0.5rem 1.25rem" }}
          >
            Book an Appointment
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            style={{ color: "var(--text)" }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-30 flex flex-col"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{ background: "white", top: 70 }}
          >
            <nav className="flex flex-col p-6 gap-2" aria-label="Mobile navigation">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                >
                  <Link
                    href={l.href}
                    className="block py-4 px-2 text-lg font-semibold border-b transition-colors"
                    style={{
                      borderColor: "var(--border)",
                      color: pathname === l.href ? "var(--primary)" : "var(--text)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Phone number — large, tappable, at bottom of mobile menu */}
            <div className="px-6 pb-6 mt-auto">
              <a
                href={CLINIC.phoneHref}
                className="flex items-center gap-3 py-4 px-4 rounded-xl text-xl font-bold min-h-[60px] justify-center"
                style={{ background: "var(--surface)", color: "var(--primary)" }}
              >
                <Phone size={22} />
                {CLINIC.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
