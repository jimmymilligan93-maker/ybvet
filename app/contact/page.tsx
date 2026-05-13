import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { CLINIC } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import PillBadge from "@/components/ui/PillBadge";
import PawPrint from "@/components/ui/PawPrint";

export const metadata: Metadata = {
  title: "Contact & Hours",
  description:
    `Contact YB Vet in Yangebup — call (08) 9417 2882, book online, or visit us at ${CLINIC.address}. Open Monday–Friday and Saturday mornings.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }])) }}
      />

      {/* Hero */}
      <section className="section-pad relative overflow-hidden" style={{ background: "var(--bg)" }}>
        <PawPrint size={160} style={{ position: "absolute", top: 20, right: 80, transform: "rotate(20deg)" }} />
        <div className="container relative z-10">
          <AnimatedSection>
            <PillBadge>Get in touch</PillBadge>
            <h1 className="mt-4 mb-4">
              Contact <em>YB Vet</em>
            </h1>
            <p className="text-lg max-w-xl" style={{ color: "var(--muted)" }}>
              Call us, book online, or come in. New patients are always welcome — and urgent concerns are always seen.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact grid */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact details */}
            <AnimatedSection direction="left">
              <h2 className="mb-8">How to reach us</h2>

              <StaggerContainer className="space-y-5" stagger={0.1}>
                {/* Phone */}
                <StaggerItem>
                  <div className="card flex gap-5 items-start">
                    <div className="service-icon shrink-0"><Phone size={20} /></div>
                    <div>
                      <div className="font-bold mb-1" style={{ fontFamily: "var(--font-heading)" }}>Phone</div>
                      <a href={CLINIC.phoneHref} className="text-xl font-bold transition-colors hover:opacity-80" style={{ color: "var(--primary)", fontFamily: "var(--font-heading)" }}>
                        {CLINIC.phone}
                      </a>
                      <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
                        Call us Monday–Friday 8:30am–5:30pm or Saturday 8:30am–12pm.
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                {/* Email */}
                <StaggerItem>
                  <div className="card flex gap-5 items-start">
                    <div className="service-icon shrink-0"><Mail size={20} /></div>
                    <div>
                      <div className="font-bold mb-1" style={{ fontFamily: "var(--font-heading)" }}>Email</div>
                      <a href={`mailto:${CLINIC.email}`} className="transition-colors hover:opacity-80" style={{ color: "var(--primary)" }}>
                        {CLINIC.email}
                      </a>
                      <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
                        For non-urgent enquiries. For urgent matters, always call.
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                {/* Address */}
                <StaggerItem>
                  <div className="card flex gap-5 items-start">
                    <div className="service-icon shrink-0"><MapPin size={20} /></div>
                    <div>
                      <div className="font-bold mb-1" style={{ fontFamily: "var(--font-heading)" }}>Location</div>
                      <p className="font-medium" style={{ color: "var(--text)" }}>{CLINIC.address}</p>
                      <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
                        Serving Yangebup, Beeliar, Success, Aubin Grove, Bibra Lake and surrounds.
                      </p>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm mt-3 font-semibold transition-opacity hover:opacity-70"
                        style={{ color: "var(--primary)" }}
                      >
                        Open in Google Maps <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </StaggerItem>

                {/* Online booking */}
                <StaggerItem>
                  <div className="card" style={{ background: "var(--primary)" }}>
                    <div className="font-bold mb-2" style={{ color: "white", fontFamily: "var(--font-heading)" }}>Book Online</div>
                    <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.85)" }}>
                      Book your appointment 24/7 through Vetstoria. New patients welcome.
                    </p>
                    <a
                      href={CLINIC.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full justify-center"
                      style={{ background: "var(--accent)" }}
                    >
                      Book an Appointment
                    </a>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </AnimatedSection>

            {/* Hours */}
            <AnimatedSection direction="right" delay={0.1}>
              <h2 className="mb-8">Opening hours</h2>
              <div className="card mb-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="service-icon"><Clock size={20} /></div>
                  <span className="font-bold" style={{ fontFamily: "var(--font-heading)" }}>Clinic Hours</span>
                </div>
                <div className="space-y-3">
                  {CLINIC.hours.map((h) => (
                    <div key={h.day} className="flex justify-between items-center py-3" style={{ borderBottom: "1px solid var(--border)" }}>
                      <span className="font-medium text-sm" style={{ color: "var(--text)" }}>{h.day}</span>
                      <span className="text-sm font-semibold" style={{ color: h.hours === "Closed" ? "var(--accent)" : "var(--primary)" }}>
                        {h.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-4 p-3 rounded-xl text-sm"
                  style={{ background: "rgba(14,143,224,0.06)", color: "var(--text)" }}
                >
                  <strong>Urgent matters:</strong> Call us as soon as we open. If your pet needs care outside business hours,
                  contact your nearest emergency vet clinic.
                </div>
              </div>

              {/* Clinic exterior photo */}
              <div
                className="rounded-2xl overflow-hidden relative"
                style={{
                  height: 240,
                }}
              >
                <Image
                  src="https://images.pexels.com/photos/6260665/pexels-photo-6260665.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Friendly veterinary consultation room"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
