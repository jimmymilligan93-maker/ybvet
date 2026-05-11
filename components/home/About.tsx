import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PillBadge from "@/components/ui/PillBadge";

export default function About() {
  return (
    <section className="section-pad" style={{ background: "white" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 items-center">

          {/* Image */}
          <AnimatedSection direction="left">
            <div
              className="img-placeholder rounded-2xl overflow-hidden"
              style={{
                height: 420,
                background: "linear-gradient(135deg, var(--surface) 0%, var(--border) 100%)",
                boxShadow: "0 16px 48px rgba(14,143,224,0.10)",
              }}
            >
              Clinic interior or about photo<br />(replace with real photo)
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection direction="right" delay={0.1}>
            <PillBadge>About YB Vet</PillBadge>
            <h2 className="mt-4 mb-6">
              The same care. <em>Fresh dedication.</em>
            </h2>
            <p className="mb-4" style={{ color: "var(--muted)" }}>
              Yangebup-Beeliar Vet Clinic has been a part of this community for years — and under Sam Jameson's
              ownership, that hasn't changed. The same familiar faces, the same commitment to knowing every patient
              by name, the same open-door approach to the families of Yangebup, Beeliar, Success, Aubin Grove, and Bibra Lake.
            </p>
            <p className="mb-4" style={{ color: "var(--muted)" }}>
              What Sam has brought is renewed energy and a clear purpose: to build on the trust this clinic has already
              earned, and to keep deepening it. Dr Amelia Barrett and Dr Chloe Hutson lead the clinical team —
              two vets who chose this work because they genuinely love animals, and whose care for their patients
              is visible in every consultation.
            </p>
            <p className="mb-8" style={{ color: "var(--muted)" }}>
              We are not a chain. We are not a franchise. We are a specific practice in a specific suburb, built
              around the animals that belong to this community.
            </p>
            <Link href="/about" className="btn btn-secondary inline-flex">
              Learn about our clinic <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
