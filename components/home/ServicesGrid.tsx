import Link from "next/link";
import {
  Shield, Sparkles, Stethoscope, Heart,
  Scissors, Activity, Droplets, Tag, ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/data";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import PillBadge from "@/components/ui/PillBadge";
import PawPrint from "@/components/ui/PawPrint";

const iconMap: Record<string, React.ElementType> = {
  shield:      Shield,
  sparkles:    Sparkles,
  stethoscope: Stethoscope,
  heart:       Heart,
  scissors:    Scissors,
  activity:    Activity,
  droplets:    Droplets,
  tag:         Tag,
};

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
          {SERVICES.map((s) => {
            const Icon = iconMap[s.icon] ?? Heart;
            return (
              <StaggerItem key={s.name}>
                <div className="card card-surface h-full">
                  <div className="service-icon mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-2 text-base font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                    {s.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{s.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
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
