import { CLINIC } from "@/lib/data";
import { Phone } from "lucide-react";
import PawPrint from "@/components/ui/PawPrint";

/** Static CTA — avoids framer-motion on the critical path (Lighthouse LCP / TBT). */
export default function CTAStrip() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--primary)", paddingBlock: "5rem" }}
    >
      <PawPrint size={200} variant="white" style={{ position: "absolute", top: -40, right: -40, transform: "rotate(20deg)", opacity: 0.1 }} />
      <PawPrint size={130} variant="white" style={{ position: "absolute", bottom: -20, left: 40, transform: "rotate(-15deg)", opacity: 0.1 }} />

      <div className="container relative z-10 text-center">
        <h2 className="mb-3" style={{ color: "white" }}>
          Ready to book?
        </h2>
        <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.92)", maxWidth: 520, margin: "0 auto 2rem" }}>
          Open Monday–Friday 8:30am–5:30pm and Saturday 8:30am–12:00pm. New patients always welcome.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={CLINIC.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary cta-book-pulse"
            style={{ background: "var(--accent)", fontSize: "1rem", padding: "0.875rem 2rem" }}
          >
            Book an Appointment Online
          </a>
          <a href={CLINIC.phoneHref} className="btn btn-outline-white flex items-center gap-2">
            <Phone size={16} aria-hidden />
            {CLINIC.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
