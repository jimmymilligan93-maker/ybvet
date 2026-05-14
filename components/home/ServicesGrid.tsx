import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import PillBadge from "@/components/ui/PillBadge";
import PawPrint from "@/components/ui/PawPrint";

export default function ServicesGrid() {
  return (
    <section className="section-pad relative overflow-hidden" style={{ background: "var(--surface)" }}>
      <PawPrint size={200} style={{ position: "absolute", top: -40, right: -60, transform: "rotate(15deg)" }} />

      <div className="container relative z-10">
        <AnimatedSection className="text-center mb-12">
          <PillBadge>Our Services</PillBadge>
          <h2 className="mt-4">Everything your pet needs, <em>under one roof</em></h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            From routine vaccinations to complex surgery — comprehensive veterinary care for dogs and cats in Yangebup.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          stagger={0.08}
        >
          {SERVICES.map((s) => (
            <StaggerItem key={s.name}>
              <div className="card card-surface flex h-full flex-col overflow-hidden p-0">
                <div className="relative h-20 w-full shrink-0 overflow-hidden rounded-t-xl">
                  <Image
                    src={s.imageSrc}
                    alt={s.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-base font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                    {s.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{s.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="text-center mt-10" delay={0.2}>
          <Link href="/services" className="btn btn-secondary inline-flex">
            View all services <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
