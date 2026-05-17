import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Image from "next/image";
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
    <section className="home-mobile-tight section-pad relative overflow-hidden" style={{ background: "var(--bg)" }}>
      <PawPrint size={180} style={{ position: "absolute", top: 20, left: -40, transform: "rotate(10deg)" }} />
      <PawPrint size={120} style={{ position: "absolute", bottom: 30, right: 40, transform: "rotate(-25deg)" }} />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[7fr_5fr] lg:gap-16">

          {/* Benefits list */}
          <div>
            <AnimatedSection>
              <PillBadge>Why YB Vet</PillBadge>
              <h2 className="mt-4 mb-6 lg:mb-10">
                The difference <em>genuine care</em> makes
              </h2>
            </AnimatedSection>

            <StaggerContainer className="space-y-4 lg:space-y-6" stagger={0.12}>
              {benefits.map((b) => (
                <StaggerItem key={b.num}>
                  <div className="flex gap-3 lg:gap-5">
                    <div
                      className="w-10 shrink-0 pt-0.5 text-2xl font-bold leading-none lg:w-14 lg:text-3xl"
                      style={{ fontFamily: "var(--font-heading)", color: "var(--border)" }}
                    >
                      {b.num}
                    </div>
                    <div>
                      <h3 className="mb-0.5 text-base lg:mb-1">{b.title}</h3>
                      <p className="text-sm leading-relaxed lg:text-base" style={{ color: "var(--muted)" }}>
                        {b.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Circular photo composition */}
          <AnimatedSection direction="right" className="relative hidden lg:block" style={{ height: 440 }}>
            {/* Back circle — rabbits on grass */}
            <div
              className="pointer-events-none absolute overflow-hidden rounded-full"
              style={{
                width: 380,
                height: 380,
                top: -40,
                right: -60,
                zIndex: 0,
              }}
              aria-hidden="true"
            >
              <Image
                src="https://images.pexels.com/photos/36175999/pexels-photo-36175999.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                fill
                sizes="380px"
                style={{
                  objectFit: "cover",
                  objectPosition: "56% 52%",
                }}
              />
            </div>
            {/* Main circle — parrot, crop on face and upper body */}
            <div
              className="rounded-full overflow-hidden absolute relative"
              style={{
                width: 280,
                height: 280,
                top: 20,
                right: 80,
                boxShadow: "0 16px 48px rgba(14,143,224,0.15)",
                zIndex: 1,
              }}
            >
              <Image
                src="https://images.pexels.com/photos/37438784/pexels-photo-37438784.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Vibrant green parrot on a cage outdoors"
                fill
                sizes="280px"
                style={{
                  objectFit: "cover",
                  objectPosition: "center 42%",
                }}
              />
            </div>
            {/* Secondary circle */}
            <div
              className="rounded-full overflow-hidden absolute relative"
              style={{
                width: 200,
                height: 200,
                bottom: 0,
                right: 0,
                border: "4px solid white",
                boxShadow: "0 8px 32px rgba(14,143,224,0.15)",
                zIndex: 2,
              }}
            >
              <Image
                src="https://images.pexels.com/photos/17510905/pexels-photo-17510905.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Child gently holding a small kitten, face and ears visible"
                fill
                sizes="200px"
                style={{
                  objectFit: "cover",
                  objectPosition: "center 30%",
                }}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
