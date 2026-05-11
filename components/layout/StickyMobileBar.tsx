import { CLINIC } from "@/lib/data";
import { Phone } from "lucide-react";

export default function StickyMobileBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex"
      style={{ background: "var(--primary)" }}
    >
      <a
        href={CLINIC.phoneHref}
        className="flex-1 flex items-center justify-center gap-2 text-white font-semibold text-sm py-3 min-h-[52px] transition-colors"
        style={{ borderRight: "1px solid rgba(255,255,255,0.2)" }}
      >
        <Phone size={16} />
        Call Now
      </a>
      <a
        href={CLINIC.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 font-semibold text-sm py-3 min-h-[52px] transition-colors"
        style={{ background: "var(--accent)", color: "white" }}
      >
        Book Online
      </a>
    </div>
  );
}
