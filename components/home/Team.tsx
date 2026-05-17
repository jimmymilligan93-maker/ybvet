import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { VETS } from "@/lib/data";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import PillBadge from "@/components/ui/PillBadge";
import PawPrint from "@/components/ui/PawPrint";

export default function Team() {
  return (
    <section className="home-mobile-tight section-pad relative overflow-hidden" style={{ background: "var(--bg)" }}>
      <PawPrint size={140} style={{ position: "absolute", bottom: 20, left: -30, transform: "rotate(-20deg)" }} />

      <div className="container relative z-10">
        <AnimatedSection className="mb-8 text-center lg:mb-12">
          <PillBadge>The Team</PillBadge>
          <h2 className="mt-3 lg:mt-4">
            Meet <em>your vets</em>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm lg:mt-4 lg:text-base" style={{ color: "var(--muted)" }}>
            Two vets who chose this work because they love animals — and whose care is visible in every appointment.
          </p>
        </AnimatedSection>

        <StaggerContainer className="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-8" stagger={0.15}>
          {VETS.map((vet) => (
            <StaggerItem key={vet.name}>
              <article className="card flex flex-row items-start gap-4 p-4 md:gap-6 md:p-6">
                <div className="relative h-[7.25rem] w-[5.75rem] shrink-0 overflow-hidden rounded-xl sm:h-[8.5rem] sm:w-[6.75rem]">
                  <Image
                    src={vet.image}
                    alt={vet.alt}
                    fill
                    sizes="(max-width: 768px) 28vw, 120px"
                    className="object-cover object-[center_32%]"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p
                    className="mb-1 text-[11px] font-semibold uppercase tracking-wide lg:text-xs"
                    style={{ color: "var(--primary)", letterSpacing: "0.06em" }}
                  >
                    {vet.credential} · {vet.title}
                  </p>
                  <h3 className="mb-2 text-base leading-tight md:mb-3 md:text-lg">{vet.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {vet.bio}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="mt-6 text-center lg:mt-10" delay={0.2}>
          <Link href="/team" className="btn btn-secondary inline-flex">
            About the full team <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
