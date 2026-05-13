import type { Metadata } from "next";
import { Heart, Shield, Sparkles, Stethoscope, Scissors, Activity, Droplets, Tag } from "lucide-react";
import { SERVICES, CLINIC } from "@/lib/data";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
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
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
  robots: { index: true, follow: true },
};

const iconMap: Record<string, React.ElementType> = {
  shield: Shield, sparkles: Sparkles, stethoscope: Stethoscope, heart: Heart,
  scissors: Scissors, activity: Activity, droplets: Droplets, tag: Tag,
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
  const webPageLd = webPageSchema("/services", pageTitle, pageDescription);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      {/* Hero — primary cluster: pet dental Yangebup + full clinic */}
      <section className="section-pad relative overflow-hidden" style={{ background: "var(--primary)" }}>
        <PawPrint size={200} variant="white" style={{ position: "absolute", top: -30, right: -50, transform: "rotate(15deg)", opacity: 0.08 }} />
        <div className="container relative z-10">
          <AnimatedSection>
            <PillBadge variant="white">Pet dental &amp; full vet care</PillBadge>
            <h1 className="mt-4 mb-4" style={{ color: "white" }}>
              Pet dental in <em style={{ color: "var(--gold)" }}>Yangebup</em> — full services for dogs and cats
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.85)" }}>
              From dental scale-and-polish and extractions when needed to vaccinations, desexing, surgery, and senior care — one local team at Moorhen Drive for families in Yangebup, Beeliar, Success, Aubin Grove, and Bibra Lake.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-pad" style={{ background: "var(--bg)" }}>
        <div className="container">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.08}>
            {SERVICES.map((s) => {
              const Icon = iconMap[s.icon] ?? Heart;
              return (
                <StaggerItem key={s.name}>
                  <div className="card flex gap-5">
                    <div className="service-icon shrink-0">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg mb-2" style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}>{s.name}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{s.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <PillBadge>Common questions</PillBadge>
            <h2 className="mt-4">Frequently asked questions</h2>
          </AnimatedSection>

          <StaggerContainer className="space-y-4" stagger={0.1}>
            {faqs.map((f) => (
              <StaggerItem key={f.question}>
                <div className="card">
                  <h3 className="text-base font-bold mb-2" style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}>{f.question}</h3>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>{f.answer}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
