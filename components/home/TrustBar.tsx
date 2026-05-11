import { Star, MapPin, Clock, Heart } from "lucide-react";
import { CLINIC } from "@/lib/data";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const stats = [
  { icon: Star,    label: `${CLINIC.rating} / ${CLINIC.reviewCount} Reviews`, sub: "Google Reviews" },
  { icon: Heart,   label: "Local & Independent", sub: "Community-owned practice" },
  { icon: Clock,   label: "Mon–Sat", sub: "Open 6 days" },
  { icon: MapPin,  label: "Full GP Services", sub: "Dogs & cats" },
];

export default function TrustBar() {
  return (
    <section className="py-10" style={{ background: "white", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="flex items-center gap-3 py-2">
                <div className="service-icon" style={{ width: 44, height: 44, flexShrink: 0 }}>
                  <s.icon size={20} />
                </div>
                <div>
                  <div className="font-bold text-sm leading-tight" style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}>
                    {s.label}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{s.sub}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
