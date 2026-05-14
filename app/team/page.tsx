import type { Metadata } from "next";
import Image from "next/image";
import { VETS, CLINIC } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import PillBadge from "@/components/ui/PillBadge";
import PawPrint from "@/components/ui/PawPrint";
import CTAStrip from "@/components/home/CTAStrip";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet Dr Amelia Barrett and Dr Chloe Hutson — the veterinary team at YB Vet in Yangebup, caring for your pets with genuine warmth and clinical expertise.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Meet the Team", url: "/team" }])) }}
      />

      {/* Hero */}
      <section className="section-pad relative overflow-hidden" style={{ background: "var(--primary)" }}>
        <PawPrint size={180} variant="white" style={{ position: "absolute", top: -20, right: 60, transform: "rotate(20deg)", opacity: 0.08 }} />
        <div className="container relative z-10">
          <AnimatedSection>
            <PillBadge variant="white">Meet the Team</PillBadge>
            <h1 className="mt-4 mb-4" style={{ color: "white" }}>
              Vets who <em style={{ color: "var(--gold)" }}>love animals</em>
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.85)" }}>
              Both Dr Amelia Barrett and Dr Chloe Hutson chose veterinary medicine because they genuinely love animals.
              Their care for patients is visible in every appointment — and in the loyalty of the families who keep coming back.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Vet profiles */}
      <section className="section-pad" style={{ background: "var(--bg)" }}>
        <div className="container">
          <StaggerContainer className="space-y-10" stagger={0.2}>
            {VETS.map((vet, i) => (
              <StaggerItem key={vet.name}>
                <div className={`card flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}>
                  {/* Portrait */}
                  <div
                    className="rounded-2xl overflow-hidden shrink-0 relative"
                    style={{
                      width: 240,
                      height: 300,
                      boxShadow: "0 8px 32px rgba(14,143,224,0.12)",
                    }}
                  >
                    <Image
                      src={
                        i === 0
                          ? "https://images.pexels.com/photos/19963166/pexels-photo-19963166.jpeg?auto=compress&cs=tinysrgb&w=1000"
                          : "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1000"
                      }
                      alt={`${vet.name} consulting with a pet owner and patient`}
                      fill
                      sizes="240px"
                      style={{ objectFit: "cover", objectPosition: "center 32%" }}
                    />
                  </div>

                  {/* Bio */}
                  <div className="flex-1">
                    <div
                      className="pill-badge mb-4"
                      style={{ display: "inline-flex" }}
                    >
                      {vet.credential} · {vet.title}
                    </div>
                    <h2 className="mb-4">{vet.name}</h2>
                    <p className="text-lg mb-6" style={{ color: "var(--muted)" }}>{vet.bio}</p>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>
                      {i === 0
                        ? "Dr Barrett completed her Bachelor of Veterinary Science and has been practising in Perth's southern suburbs since graduating. Her approach is characterised by careful listening — to the owner as much as the animal — and a preference for conservative, evidence-based treatment."
                        : "Dr Hutson's calm, methodical approach comes from a deep respect for how differently each animal experiences a vet visit. She's developed a particular interest in feline medicine and works to ensure every cat that comes through the door leaves with minimal stress."}
                    </p>
                    <div className="mt-6 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                      <a
                        href={CLINIC.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary inline-flex"
                      >
                        Book with {vet.name.split(" ")[1]}
                      </a>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Sam Jameson — ownership */}
      <section className="section-pad relative overflow-hidden" style={{ background: "var(--surface)" }}>
        <PawPrint size={140} style={{ position: "absolute", bottom: 20, right: 40, transform: "rotate(-15deg)" }} />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 items-center max-w-5xl mx-auto">
            <AnimatedSection direction="left">
              <div
                className="rounded-2xl overflow-hidden relative"
                style={{ height: 320 }}
              >
                <Image
                  src="https://images.pexels.com/photos/6235231/pexels-photo-6235231.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Veterinarian with a dog in clinic, representing the hands-on care the YB Vet team delivers"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.1}>
              <PillBadge>Clinic Owner</PillBadge>
              <h2 className="mt-4 mb-4">Sam Jameson</h2>
              <p className="mb-4" style={{ color: "var(--muted)" }}>
                Sam took ownership of Yangebup-Beeliar Vet Clinic with a clear intention: to preserve everything the
                community had already built here, and to strengthen it. That meant keeping the team, maintaining the
                relationships with long-standing clients, and investing in the clinic's future without disrupting its present.
              </p>
              <p style={{ color: "var(--muted)" }}>
                "The thing people don't expect when they walk in is how much the team actually knows their pet.
                That's not something you manufacture — it's built over years. My job is to make sure it keeps being built."
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
