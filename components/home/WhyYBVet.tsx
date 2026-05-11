import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import PillBadge from "@/components/ui/PillBadge";
import PawPrint from "@/components/ui/PawPrint";

const benefits = [
  {
    num: "01",
    title: "Community Care, Not Chain Care",
    desc: "We know your pet's name, history, and quirks. No clinic number, no revolving door of strangers.",
  },
  {
    num: "02",
    title: "Unhurried Consultations",
    desc: "Every appointment is long enough to actually talk. We'd rather run five minutes over than rush a diagnosis.",
  },
  {
    num: "03",
    title: "Preventive First",
    desc: "We catch problems early — annual check-ups, bloodwork, dental assessments — not just crises.",
  },
  {
    num: "04",
    title: "Transparent, Fair Pricing",
    desc: "We explain costs before we proceed. No surprise bills, no unnecessary add-ons.",
  },
];

export default function WhyYBVet() {
  return (
    <section className="section-pad relative overflow-hidden" style={{ background: "var(--bg)" }}>
      <PawPrint size={180} style={{ position: "absolute", top: 20, left: -40, transform: "rotate(10deg)" }} />
      <PawPrint size={120} style={{ position: "absolute", bottom: 30, right: 40, transform: "rotate(-25deg)" }} />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-16 items-center">

          {/* Benefits list */}
          <div>
            <AnimatedSection>
              <PillBadge>Why YB Vet</PillBadge>
              <h2 className="mt-4 mb-10">
                The difference <em>genuine care</em> makes
              </h2>
            </AnimatedSection>

            <StaggerContainer className="space-y-6" stagger={0.12}>
              {benefits.map((b) => (
                <StaggerItem key={b.num}>
                  <div className="flex gap-5">
                    <div
                      className="text-3xl font-bold shrink-0 w-14 leading-none pt-1"
                      style={{ fontFamily: "var(--font-heading)", color: "var(--border)" }}
                    >
                      {b.num}
                    </div>
                    <div>
                      <h3 className="mb-1">{b.title}</h3>
                      <p className="text-base" style={{ color: "var(--muted)" }}>{b.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Circular photo composition */}
          <AnimatedSection direction="right" className="relative hidden lg:block" style={{ height: 440 }}>
            {/* Decorative arc */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 380,
                height: 380,
                background: "rgba(14,143,224,0.06)",
                top: -40,
                right: -60,
              }}
              aria-hidden="true"
            />
            {/* Main circle */}
            <div
              className="img-placeholder rounded-full overflow-hidden absolute"
              style={{
                width: 280,
                height: 280,
                top: 20,
                right: 80,
                boxShadow: "0 16px 48px rgba(14,143,224,0.15)",
                zIndex: 1,
              }}
            >
              Vet + dog<br />(replace)
            </div>
            {/* Secondary circle */}
            <div
              className="img-placeholder rounded-full overflow-hidden absolute"
              style={{
                width: 200,
                height: 200,
                bottom: 0,
                right: 0,
                border: "4px solid white",
                boxShadow: "0 8px 32px rgba(14,143,224,0.15)",
                zIndex: 2,
                background: "linear-gradient(135deg, var(--surface) 0%, var(--border) 100%)",
              }}
            >
              Vet + cat<br />(replace)
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
