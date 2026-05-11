"use client";
import { motion, type Transition } from "framer-motion";
import Link from "next/link";
import { Phone, Star } from "lucide-react";
import { CLINIC } from "@/lib/data";
import PawPrint from "@/components/ui/PawPrint";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay } satisfies Transition,
});

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden section-pad"
      style={{ background: "var(--bg)" }}
    >
      {/* Decorative circle arc */}
      <div
        className="absolute top-[-80px] right-[-120px] rounded-full pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: "rgba(14,143,224,0.06)",
        }}
        aria-hidden="true"
      />

      {/* Paw watermarks */}
      <PawPrint size={160} className="hidden lg:block" style={{ position: "absolute", top: 40, right: 280, transform: "rotate(20deg)" }} />
      <PawPrint size={100} style={{ position: "absolute", bottom: 60, left: 20, transform: "rotate(-15deg)" }} />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-12 items-center">

          {/* Text column */}
          <div>
            <motion.span
              {...fade(0.05)}
              className="pill-badge mb-5 inline-block"
            >
              Yangebup · Beeliar · Success · Aubin Grove · Bibra Lake
            </motion.span>

            <motion.h1 {...fade(0.15)} className="mb-5">
              Caring for <em>Yangebup's</em><br />Pets
            </motion.h1>

            <motion.p {...fade(0.25)} className="text-lg mb-8 max-w-lg" style={{ color: "var(--muted)" }}>
              Dr Amelia Barrett and Dr Chloe Hutson bring warmth and genuine care to every
              consultation — your trusted local vet for dogs and cats across Perth's southern suburbs.
            </motion.p>

            <motion.div {...fade(0.35)} className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={CLINIC.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Book an Appointment
              </a>
              <a href={CLINIC.phoneHref} className="btn btn-secondary">
                <Phone size={16} />
                {CLINIC.phone}
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              {...fade(0.45)}
              className="flex flex-wrap gap-5 text-sm"
              style={{ color: "var(--muted)" }}
            >
              <span className="flex items-center gap-2">
                <Star size={15} fill="var(--gold)" stroke="none" />
                <strong style={{ color: "var(--text)" }}>{CLINIC.rating}</strong> Google Reviews
              </span>
              <span className="flex items-center gap-2">
                <span style={{ color: "var(--primary)", fontWeight: 700 }}>✓</span>
                Local & Independent
              </span>
              <span className="flex items-center gap-2">
                <span style={{ color: "var(--primary)", fontWeight: 700 }}>✓</span>
                Open Saturdays
              </span>
              <span className="flex items-center gap-2">
                <span style={{ color: "var(--primary)", fontWeight: 700 }}>✓</span>
                New Patients Welcome
              </span>
            </motion.div>
          </div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main circle */}
            <div
              className="img-placeholder rounded-full overflow-hidden shadow-xl"
              style={{
                width: 340,
                height: 340,
                background: "linear-gradient(135deg, var(--surface) 0%, var(--border) 100%)",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                color: "var(--muted)",
              }}
            >
              Hero photo —<br />vet with dog at floor level<br />(replace with real photo)
            </div>

            {/* Secondary offset circle */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-[-20px] right-[-20px] img-placeholder rounded-full overflow-hidden"
              style={{
                width: 180,
                height: 180,
                border: "4px solid white",
                boxShadow: "0 8px 32px rgba(14,143,224,0.15)",
                background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                color: "rgba(255,255,255,0.8)",
                textAlign: "center",
              }}
            >
              Clinic interior<br />(replace)
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
