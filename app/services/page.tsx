import type { Metadata } from "next";
import Image from "next/image";
import { SERVICES, CLINIC } from "@/lib/data";
import { breadcrumbSchema, faqSchema, mergeJsonLdGraph, webPageSchema } from "@/lib/schema";
import PillBadge from "@/components/ui/PillBadge";
import PawPrint from "@/components/ui/PawPrint";
import CTAStrip from "@/components/home/CTAStrip";

const pageTitle = "Pet Dental Yangebup — Full Dog & Cat Vet Services";
const pageDescription =
  "Pet dental care, scale and polish, and full dog and cat vet services at YB Vet in Yangebup. Serving Beeliar, Success, Aubin Grove & Bibra Lake. Book online or call (08) 9417 2882.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/services" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://ybvet.com.au/services",
    type: "website",
    locale: "en_AU",
    siteName: CLINIC.fullName,
    images: [
      {
        url: "/images/happydog.webp",
        width: 1200,
        height: 800,
        alt: "Happy dog — YB Vet veterinary services in Yangebup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/happydog.webp"],
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: "Do you offer pet dental care and teeth cleaning in Yangebup?",
    answer:
      "Yes. YB Vet provides professional dental assessment and dental procedures for dogs and cats, including scale-and-polish under anaesthetic when indicated, plus home-care advice. Book a consultation to have your pet's mouth examined and discuss timing.",
  },
  {
    question: "My dog has bad breath — does that always mean dental disease?",
    answer:
      "Often, persistent halitosis is linked to plaque, tartar, or gum disease, but other causes exist. A physical exam lets us narrow it down. If your dog is otherwise unwell or the smell came on suddenly, mention that when you book so we can prioritise what matters.",
  },
  {
    question: "Do I need an appointment or can I walk in?",
    answer:
      "We recommend booking online via Vetstoria or calling us on (08) 9417 2882. We'll always try to accommodate urgent concerns on the day.",
  },
  {
    question: "Do you see both dogs and cats?",
    answer:
      "Yes — we provide full GP services for dogs and cats. We keep waiting areas separated where possible to reduce stress for cats.",
  },
  {
    question: "Are you accepting new patients?",
    answer:
      "Absolutely. New patients are always welcome at YB Vet. Book online or give us a call to register your pet.",
  },
  {
    question: "What should I bring to a first appointment?",
    answer:
      "Any existing vaccination records or vet history, your pet's current food or treats, and a list of any questions you have. For cats, bring them in their carrier.",
  },
];

export default function ServicesPage() {
  const serviceJsonLd = mergeJsonLdGraph([
    webPageSchema("/services", pageTitle, pageDescription) as Record<string, unknown>,
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
    ]) as Record<string, unknown>,
    faqSchema(faqs) as Record<string, unknown>,
  ]);

  return (
    <>
      {/* Hero — no client motion: visible on first paint for LCP (text stays LCP on mobile). */}
      <section
        className="services-hero-lcp services-hero-tight section-pad relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, var(--secondary) 0%, #043d5c 100%)",
        }}
      >
        <PawPrint size={140} variant="white" style={{ position: "absolute", top: -24, right: -40, transform: "rotate(15deg)", opacity: 0.06 }} />
        <div className="container relative z-10 services-hero-grid">
          <h1 className="services-hero-title" style={{ color: "#ffffff" }}>
            Complete veterinary care in Yangebup — everything your pet needs, close to home.
          </h1>
          <p className="services-hero-lead max-w-2xl" style={{ color: "#EAF6FD" }}>
            From routine vaccinations to complex surgery — comprehensive veterinary care for dogs, cats and small animals across Yangebup, Beeliar, Success, Aubin Grove, and Bibra Lake.
          </p>
          <div className="services-hero-pill">
            <PillBadge variant="white">Pet dental &amp; full vet care</PillBadge>
          </div>
        </div>
      </section>

      {/* Services grid — static markup so card images decode without whileInView / hydration delay */}
      <section className="section-pad services-route-grid" style={{ background: "var(--bg)" }} aria-labelledby="services-grid-heading">
        <div className="container">
          <h2 id="services-grid-heading" className="mb-8 text-center md:text-left">
            Our veterinary services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((s) => (
              <div key={s.name} className="card flex h-full flex-col overflow-hidden p-0">
                <div className="relative h-[120px] w-full shrink-0 overflow-hidden rounded-t-xl">
                  <Image
                    src={s.imageSrc}
                    alt={s.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover object-center"
                    loading="lazy"
                    decoding="async"
                    quality={72}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg mb-2" style={{ color: "var(--text)" }}>
                    {s.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad services-route-grid" style={{ background: "white" }} aria-labelledby="faq-heading">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <PillBadge>Common questions</PillBadge>
            <h2 id="faq-heading" className="mt-4">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.question} className="card">
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--text)" }}>
                  {f.question}
                </h3>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </>
  );
}
