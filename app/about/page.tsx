import type { Metadata } from "next";
import Image from "next/image";
import { CLINIC } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import PillBadge from "@/components/ui/PillBadge";
import PawPrint from "@/components/ui/PawPrint";
import CTAStrip from "@/components/home/CTAStrip";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "YB Vet is Yangebup's trusted local veterinary clinic — owned by Sam Jameson, with Dr Amelia Barrett and Dr Chloe Hutson caring for the pets of Yangebup, Beeliar, Success and beyond.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Community before commerce", desc: "We are a local, independent practice. Every decision we make is about the animals in this community — not a corporate target or a franchise quota." },
  { title: "Transparency in everything", desc: "We explain what we're doing, why, and what it costs before we do it. No surprises, no pressure." },
  { title: "Unhurried care", desc: "We'd rather run five minutes over than rush a diagnosis. Your pet gets our full attention, every time." },
  { title: "Continuity matters", desc: "We aim to be the clinic that knows your pet across its whole life — from puppy vaccinations to senior health monitoring." },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "About", url: "/about" }])) }}
      />

      {/* Hero */}
      <section className="section-pad relative overflow-hidden" style={{ background: "var(--bg)" }}>
        <PawPrint size={180} style={{ position: "absolute", top: 0, right: 40, transform: "rotate(18deg)" }} />
        <div className="container relative z-10">
          <AnimatedSection>
            <PillBadge>About YB Vet</PillBadge>
            <h1 className="mt-4 mb-4">
              Still here. <em>Still home.</em>
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: "var(--muted)" }}>
              Yangebup-Beeliar Vet Clinic has been part of this community for years.
              Under new ownership, one thing hasn't changed: the commitment to the animals
              — and the people — who belong to these streets.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-center">
            <AnimatedSection direction="left">
              <div
                className="rounded-2xl overflow-hidden relative"
                style={{ height: 440, boxShadow: "0 16px 48px rgba(14,143,224,0.10)" }}
              >
                <Image
                  src="https://images.pexels.com/photos/27177012/pexels-photo-27177012.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Bright veterinary clinic interior with consultation space"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <h2 className="mb-6">The same clinic. <em>Renewed dedication.</em></h2>
              <p className="mb-4" style={{ color: "var(--muted)" }}>
                When Sam Jameson took over Yangebup-Beeliar Vet Clinic, the priority was simple: make
                sure the community felt nothing important had changed. The name stayed. The team stayed.
                The approach stayed. What Sam brought was renewed energy and a long-term commitment to
                building on the trust this clinic had already earned.
              </p>
              <p className="mb-4" style={{ color: "var(--muted)" }}>
                The clinic serves the suburbs of Yangebup, Beeliar, Success, Aubin Grove, Bibra Lake,
                and the broader southern corridor of Perth. We see dogs and cats for everything from
                annual check-ups to complex surgery. We've been the clinic people call when something
                goes wrong at 8:30am — and we take that responsibility seriously.
              </p>
              <p style={{ color: "var(--muted)" }}>
                We are not a chain, not a franchise, not a corporate group. We are an independent
                practice in a specific suburb, run by people who chose this work because they genuinely
                love animals and genuinely believe in the value of community healthcare.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad relative overflow-hidden" style={{ background: "var(--surface)" }}>
        <PawPrint size={150} style={{ position: "absolute", bottom: 20, left: -30, transform: "rotate(-20deg)" }} />
        <div className="container relative z-10">
          <AnimatedSection className="text-center mb-12">
            <PillBadge>What we stand for</PillBadge>
            <h2 className="mt-4">Our values</h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.1}>
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="card">
                  <h3 className="mb-2" style={{ color: "var(--primary)" }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2>Find us in <em>Yangebup</em></h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="card text-center mb-6">
              <p className="text-lg font-bold mb-1" style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}>
                {CLINIC.address}
              </p>
              <a href={CLINIC.phoneHref} className="text-lg font-bold" style={{ color: "var(--primary)" }}>
                {CLINIC.phone}
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {CLINIC.hours.map((h) => (
                <div key={h.day} className="card text-center card-surface">
                  <div className="font-bold text-sm mb-1" style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}>{h.day}</div>
                  <div className="text-sm" style={{ color: "var(--muted)" }}>{h.hours}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
