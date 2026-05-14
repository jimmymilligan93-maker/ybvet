import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PillBadge from "@/components/ui/PillBadge";

export default function About() {
  return (
    <section className="section-pad" style={{ background: "white" }}>
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:items-stretch">

          {/* Image — fills column; crop centred on woman + dog (Pexels 7752806) */}
          <AnimatedSection direction="left" className="min-w-0 lg:h-full">
            <div
              className="about-home-photo relative w-full overflow-hidden rounded-2xl
                min-h-[min(85vw,20rem)] h-[clamp(18rem,58vw,26rem)]
                max-h-[min(78vh,32rem)] sm:max-h-[28rem]
                lg:h-full lg:min-h-[26rem] lg:max-h-none"
              style={{
                boxShadow: "0 16px 48px rgba(14,143,224,0.10)",
              }}
            >
              <Image
                src="https://images.pexels.com/photos/7752806/pexels-photo-7752806.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Smiling woman with her dog sitting together at a table — a warm, friendly moment"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
                style={{ objectPosition: "center center" }}
              />
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection direction="right" delay={0.1} className="flex flex-col justify-center min-w-0 lg:min-h-0">
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
