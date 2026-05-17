"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Transition } from "framer-motion";
import Image from "next/image";
import { Phone, Star } from "lucide-react";
import { CLINIC } from "@/lib/data";
import PawPrint from "@/components/ui/PawPrint";

const HERO_SUBURBS = ["Yangebup", "Beeliar", "Success", "Aubin Grove", "Bibra Lake"] as const;

const HERO_IMAGE_SRC =
  "https://images.pexels.com/photos/7210695/pexels-photo-7210695.jpeg?auto=compress&cs=tinysrgb&w=1920";
const HERO_IMAGE_ALT =
  "Gentle smiling woman embracing two dogs while sitting on the ground — warm, friendly moment";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay } satisfies Transition,
});

function HeroSuburbCarousel({ reduceMotion }: { reduceMotion: boolean | null }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SUBURBS.length);
    }, 2500);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const name = HERO_SUBURBS[index];

  if (reduceMotion) {
    return <em>{HERO_SUBURBS[0]}&apos;s</em>;
  }

  return (
    <span
      className="hero-suburb-carousel relative inline-block align-baseline text-left max-lg:min-w-0 lg:min-w-[17ch]"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait">
        <motion.em
          key={name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          {name}&apos;s
        </motion.em>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="hero-mobile-compact relative flex min-h-0 flex-col overflow-hidden section-pad lg:min-h-[85vh]"
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
      <PawPrint
        size={160}
        className="hidden lg:block"
        style={{ position: "absolute", top: 40, right: "8%", transform: "rotate(20deg)" }}
      />
      <PawPrint
        size={100}
        className="max-lg:hidden"
        style={{ position: "absolute", bottom: 60, left: 20, transform: "rotate(-15deg)" }}
      />

      <div className="container relative z-10 flex min-h-0 max-lg:flex-none flex-col lg:flex-1">
        <div
          className="flex min-h-0 max-lg:flex-none flex-col justify-start max-lg:gap-0 lg:gap-4
            lg:flex-1 lg:grid lg:h-full lg:min-h-0 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-stretch lg:justify-center lg:gap-12 xl:gap-16"
        >
          {/* Copy + actions — vertically centred in hero height (lg+) */}
          <div className="order-1 flex h-full min-h-0 max-w-xl flex-col justify-center lg:max-w-none">
            <motion.div
              className="hero-mobile-head max-lg:min-h-[min(44vw,11.5rem)] lg:contents"
              initial={{ opacity: reduceMotion ? 1 : 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            >
              <div className="hero-mobile-bg lg:hidden" aria-hidden>
                <Image
                  src={HERO_IMAGE_SRC}
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  className="hero-mobile-bg__photo"
                />
              </div>
              <div className="hero-mobile-head__copy relative z-10 max-lg:px-3 max-lg:pt-4 max-lg:pb-0 sm:max-lg:px-4 lg:contents">
                <motion.h1
                  {...fade(0.08)}
                  className="mb-0 text-balance text-4xl font-bold leading-[1.08] tracking-[-0.035em] max-lg:text-[clamp(1.35rem,5vw,1.85rem)] lg:mb-5 lg:text-5xl lg:text-[var(--text)]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Caring for <HeroSuburbCarousel reduceMotion={reduceMotion} />
                  <br />
                  Pets
                </motion.h1>

                <motion.p
                  {...fade(0.18)}
                  className="mb-0 mt-0 hidden max-w-lg text-base lg:mb-8 lg:block lg:text-lg lg:text-[var(--muted)]"
                >
                  Yangebup-Beeliar Vet Clinic brings warmth and genuine care to every consultation — your trusted local
                  vet for small animals across Perth&apos;s southern suburbs.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              {...fade(0.22)}
              className="hero-mobile-actions flex w-full min-w-0 flex-row flex-nowrap items-stretch gap-2 max-lg:mt-3 lg:hidden"
            >
              <a
                href={CLINIC.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary min-h-[38px] min-w-0 flex-1 justify-center px-2.5 py-2 text-xs leading-tight whitespace-nowrap"
              >
                Book an Appointment
              </a>
              <a
                href={CLINIC.phoneHref}
                className="btn btn-secondary min-h-[38px] min-w-0 flex-1 justify-center gap-1.5 px-2.5 py-2 text-xs leading-tight tabular-nums"
              >
                <Phone size={13} className="shrink-0" aria-hidden />
                <span className="truncate">{CLINIC.phone}</span>
              </a>
            </motion.div>

            <motion.p
              {...fade(0.18)}
              className="hero-mobile-lead mb-0 mt-4 max-w-lg text-base max-lg:mb-5 lg:hidden"
            >
              Yangebup-Beeliar Vet Clinic brings warmth and genuine care to every consultation — your trusted local vet
              for small animals across Perth&apos;s southern suburbs.
            </motion.p>

            <motion.div
              {...fade(0.28)}
              className="mb-0 mt-0 hidden w-full min-w-0 max-w-full flex-row flex-nowrap items-center gap-3 lg:mb-5 lg:flex lg:max-w-none"
            >
              <a
                href={CLINIC.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary shrink-0 whitespace-nowrap px-4 py-2 text-sm min-h-[42px]"
              >
                Book an Appointment
              </a>
              <a
                href={CLINIC.phoneHref}
                className="btn btn-secondary shrink-0 gap-2 px-4 py-2 text-sm tabular-nums min-h-[42px]"
              >
                <Phone size={16} className="shrink-0" aria-hidden />
                {CLINIC.phone}
              </a>
            </motion.div>

            <motion.a
              href={CLINIC.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.52 }}
              className="mb-0 mt-0 block w-full max-w-full rounded-xl border bg-white p-3 shadow-[0_6px_28px_-8px_rgba(14,143,224,0.12)] transition-shadow hover:shadow-[0_10px_36px_-10px_rgba(14,143,224,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:max-w-[22rem] lg:mb-8 lg:mt-0 lg:p-4"
              style={{ borderColor: "var(--border)" }}
              aria-label="Read Google reviews for YB Vet"
            >
              <motion.div className="mb-2 flex flex-wrap items-center gap-2 lg:mb-3">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[15px] font-bold leading-none text-white"
                  style={{ background: "#4285F4", fontFamily: "var(--font-heading)" }}
                  aria-hidden
                >
                  G
                </div>
                <div className="flex items-center gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="var(--gold)" stroke="none" className="shrink-0" />
                  ))}
                </div>
              </motion.div>
              <p className="mb-2 text-sm font-medium leading-snug lg:mb-3 lg:text-[15px]" style={{ color: "var(--text)" }}>
                &ldquo;The most caring vet clinic we&apos;ve ever visited. They knew our dog by name on the second
                visit.&rdquo;
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                Sarah M. · Google Review
              </p>
            </motion.a>
          </div>

          {/* Hero image — desktop column only */}
          <motion.div
            initial={{ scale: reduceMotion ? 1 : 0.97 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="order-2 relative hidden min-h-0 w-full shrink-0 overflow-hidden rounded-3xl aspect-video
              shadow-[0_28px_60px_-16px_rgba(14,143,224,0.28)] ring-1 ring-[rgba(14,143,224,0.14)]
              lg:block lg:aspect-auto lg:h-full"
          >
            <Image
              src={HERO_IMAGE_SRC}
              alt={HERO_IMAGE_ALT}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-cover"
              style={{ objectPosition: "center center" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
