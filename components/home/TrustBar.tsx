import { Star, MapPin, Clock, Heart } from "lucide-react";
import { CLINIC } from "@/lib/data";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const stats = [
  { icon: Star, label: `${CLINIC.rating} / ${CLINIC.reviewCount} Reviews`, sub: "Google Reviews" },
  { icon: Heart, label: "Local & Independent", sub: "Community-owned practice" },
  { icon: Clock, label: "Mon–Sat", sub: "Open 6 days" },
  { icon: MapPin, label: "Full GP Services", sub: "Dogs & cats" },
];

export default function TrustBar() {
  return (
    <section
      className="py-5 lg:py-10"
      style={{ background: "white", borderBottom: "1px solid var(--border)" }}
    >
      <div className="container">
        <StaggerContainer className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="flex items-center gap-2 py-0.5 lg:gap-3 lg:py-2">
                <div className="service-icon flex h-9 w-9 shrink-0 items-center justify-center lg:h-11 lg:w-11">
                  <s.icon className="h-[18px] w-[18px] lg:h-5 lg:w-5" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <div
                    className="text-xs font-bold leading-tight lg:text-sm"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}
                  >
                    {s.label}
                  </div>
                  <div className="mt-0.5 text-[11px] leading-snug lg:text-xs" style={{ color: "var(--muted)" }}>
                    {s.sub}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
