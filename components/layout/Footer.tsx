import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CLINIC, SERVICES } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--dark)", color: "rgba(255,255,255,0.7)" }}>
      <div className="container section-pad">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Clinic intro */}
          <div>
            <span
              className="block text-2xl font-bold mb-2"
              style={{ fontFamily: "var(--font-heading)", color: "white", letterSpacing: "-0.03em" }}
            >
              YB Vet
            </span>
            <span className="block text-sm mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
              Yangebup-Beeliar Vet Clinic
            </span>
            <p className="text-sm leading-relaxed mb-4">
              Your trusted local vet for dogs and cats across Yangebup, Beeliar, Success, Aubin Grove, and Bibra Lake.
            </p>
            <p className="text-sm font-semibold" style={{ color: "var(--gold)" }}>
              ★ {CLINIC.rating} / 5 &nbsp;·&nbsp; {CLINIC.reviewCount} Google Reviews
            </p>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "white", letterSpacing: "0.1em" }}>
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.name}>
                  <Link
                    href="/services"
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact & Hours */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "white", letterSpacing: "0.1em" }}>
              Contact & Hours
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin size={15} className="mt-1 shrink-0" style={{ color: "var(--primary)" }} />
                <span>{CLINIC.address}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={15} className="shrink-0" style={{ color: "var(--primary)" }} />
                <a href={CLINIC.phoneHref} className="hover:text-white transition-colors">{CLINIC.phone}</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={15} className="shrink-0" style={{ color: "var(--primary)" }} />
                <a href={`mailto:${CLINIC.email}`} className="hover:text-white transition-colors">{CLINIC.email}</a>
              </li>
              <li className="flex gap-3 pt-2">
                <Clock size={15} className="mt-1 shrink-0" style={{ color: "var(--primary)" }} />
                <div className="space-y-1">
                  {CLINIC.hours.map((h) => (
                    <div key={h.day}>
                      <span className="font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>{h.day}</span>
                      <br />
                      <span>{h.hours}</span>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4 — Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "white", letterSpacing: "0.1em" }}>
              Clinic
            </h3>
            <ul className="space-y-2 text-sm mb-6">
              {[
                { href: "/about",   label: "About Us" },
                { href: "/team",    label: "Meet the Team" },
                { href: "/blog",    label: "Pet Care Resources" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="transition-colors duration-200 hover:text-white"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={CLINIC.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-sm w-full justify-center"
            >
              Book Online
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-12 pt-6 text-xs text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.35)" }}
        >
          © {year} {CLINIC.fullName} · ABN [XX XXX XXX XXX] · Veterinary practice licence [XXXXXXXXX]
        </div>
      </div>
    </footer>
  );
}
