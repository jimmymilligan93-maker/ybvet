import { CLINIC, TESTIMONIALS } from "@/lib/data";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import PillBadge from "@/components/ui/PillBadge";
import PawPrint from "@/components/ui/PawPrint";

export default function Testimonials() {
  return (
    <section className="section-pad relative overflow-hidden dark-section">
      <PawPrint size={180} variant="white" style={{ position: "absolute", top: -20, right: 80, transform: "rotate(25deg)" }} />
      <PawPrint size={120} variant="white" style={{ position: "absolute", bottom: 30, left: 60, transform: "rotate(-10deg)" }} />
      <PawPrint size={90}  variant="gold"  style={{ position: "absolute", top: "50%", right: 20, transform: "rotate(15deg)" }} />

      <div className="container relative z-10">
        <AnimatedSection className="text-center mb-12">
          <PillBadge variant="dark">Reviews</PillBadge>
          <h2 className="mt-4">
            What Yangebup pet owners <em>say</em>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.12}>
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name}>
              <div
                className="rounded-2xl p-6 h-full flex flex-col"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <div className="stars text-lg mb-4">★★★★★</div>
                <p
                  className="flex-1 text-sm leading-relaxed mb-6 italic"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                >
                  "{t.text}"
                </p>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "white", fontFamily: "var(--font-heading)" }}>
                    {t.name}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {t.suburb} · {t.pet}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="text-center mt-10" delay={0.3}>
          <div
            className="inline-flex items-center gap-3 rounded-full px-6 py-3"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            <span className="stars text-base">★★★★★</span>
            <span className="text-sm font-semibold" style={{ color: "white" }}>
              {CLINIC.rating} / 5
            </span>
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              Based on {CLINIC.reviewCount} Google Reviews
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
