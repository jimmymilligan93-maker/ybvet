import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { VETS } from "@/lib/data";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import PillBadge from "@/components/ui/PillBadge";
import PawPrint from "@/components/ui/PawPrint";

export default function Team() {
  return (
    <section className="section-pad relative overflow-hidden" style={{ background: "var(--bg)" }}>
      <PawPrint size={140} style={{ position: "absolute", bottom: 20, left: -30, transform: "rotate(-20deg)" }} />

      <div className="container relative z-10">
        <AnimatedSection className="text-center mb-12">
          <PillBadge>The Team</PillBadge>
          <h2 className="mt-4">Meet <em>your vets</em></h2>
          <p className="mt-4 max-w-lg mx-auto" style={{ color: "var(--muted)" }}>
            Two vets who chose this work because they love animals — and whose care is visible in every appointment.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" stagger={0.15}>
          {VETS.map((vet) => (
            <StaggerItem key={vet.name}>
              <div className="card flex flex-col sm:flex-row gap-6">
                {/* Portrait */}
                <div
                  className="rounded-xl overflow-hidden shrink-0 relative"
                  style={{
                    width: 120,
                    height: 140,
                  }}
                >
                  <Image
                    src={
                      vet.name.includes("Amelia")
                        ? "https://images.pexels.com/photos/19963166/pexels-photo-19963166.jpeg?auto=compress&cs=tinysrgb&w=700"
                        : "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=700"
                    }
                    alt={`${vet.name} with a patient`}
                    fill
                    sizes="120px"
                    style={{ objectFit: "cover", objectPosition: "center 32%" }}
                  />
                </div>

                {/* Bio */}
                <div>
                  <div className="text-xs font-semibold mb-1" style={{ color: "var(--primary)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {vet.credential} · {vet.title}
                  </div>
                  <h3 className="mb-3 text-lg">{vet.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{vet.bio}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="text-center mt-10" delay={0.2}>
          <Link href="/team" className="btn btn-secondary inline-flex">
            About the full team <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
