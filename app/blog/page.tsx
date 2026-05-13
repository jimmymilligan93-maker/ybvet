import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import PillBadge from "@/components/ui/PillBadge";
import PawPrint from "@/components/ui/PawPrint";
import SiteBreadcrumbs from "@/components/seo/SiteBreadcrumbs";

const BLOG_INDEX_DESCRIPTION =
  "Practical pet care from YB Vet in Yangebup — dental health, bad breath, first visits, and wellness for dogs and cats in Beeliar, Success, Aubin Grove & Bibra Lake.";

const blogOgImage = BLOG_POSTS[0]!.coverSrc.replace(/w=\d+/, "w=1200");

export const metadata: Metadata = {
  title: "Pet Care Blog — Dental, Wellness & Vet Tips in Yangebup",
  description: BLOG_INDEX_DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Pet Care Blog — YB Vet Yangebup",
    description:
      "Honest vet-written articles on dental care, preventive health, and life with dogs and cats in Perth's southern suburbs.",
    url: "https://ybvet.com.au/blog",
    type: "website",
    images: [{ url: blogOgImage, width: 1200, height: 630, alt: "Pet care articles from YB Vet" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Care Blog — YB Vet Yangebup",
    description:
      "Dental care, wellness, and first-visit tips from your local vet clinic.",
    images: [blogOgImage],
  },
  robots: { index: true, follow: true },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Resources", url: "/blog" }])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema("/blog", "Pet Care Blog — YB Vet Yangebup", BLOG_INDEX_DESCRIPTION)),
        }}
      />

      {/* Hero — paw marks match article pages */}
      <section className="section-pad relative overflow-hidden" style={{ background: "var(--bg)" }}>
        <PawPrint size={168} style={{ position: "absolute", top: 24, right: 56, transform: "rotate(20deg)" }} />
        <PawPrint size={120} variant="gold" style={{ position: "absolute", bottom: 32, left: 20, transform: "rotate(-18deg)" }} />
        <div className="container relative z-10">
          <AnimatedSection>
            <PillBadge>Pet Care Resources</PillBadge>
            <h1 className="mt-4 mb-4">
              Advice from <em>your local vets</em>
            </h1>
            <p className="text-lg max-w-xl" style={{ color: "var(--muted)" }}>
              Practical, honest pet care information from the team at YB Vet — written for
              dog and cat owners in Yangebup and the surrounding suburbs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Article cards */}
      <section className="section-pad relative overflow-hidden" style={{ background: "white" }}>
        <PawPrint size={130} style={{ position: "absolute", top: "8%", left: "-2.5rem", transform: "rotate(-14deg)" }} />
        <div className="container relative z-10 max-w-6xl mx-auto">
          <SiteBreadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pet Care Resources" }]} />
          <p className="text-[15px] md:text-base leading-relaxed max-w-3xl mb-10 blog-excerpt" style={{ color: "var(--muted)" }}>
            Browse articles from our{" "}
            <Link href="/team" className="underline-offset-2 hover:underline font-medium" style={{ color: "var(--primary)" }}>
              veterinarians in Yangebup
            </Link>
            . For appointments and services, see{" "}
            <Link href="/services" className="underline-offset-2 hover:underline font-medium" style={{ color: "var(--primary)" }}>
              what we offer
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="underline-offset-2 hover:underline font-medium" style={{ color: "var(--primary)" }}>
              contact the clinic
            </Link>
            .
          </p>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12" stagger={0.12}>
            {BLOG_POSTS.map((post, index) => (
              <StaggerItem key={post.slug}>
                <article className="card h-full flex flex-col">
                  <div className="rounded-xl mb-6 overflow-hidden relative aspect-[16/10] max-h-[220px] ring-1 ring-[rgba(14,143,224,0.12)]">
                    <Image
                      src={post.coverSrc.replace("w=1400", "w=900")}
                      alt={`Article cover: ${post.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover"
                      priority={index === 0}
                      fetchPriority={index === 0 ? "high" : "low"}
                    />
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 text-xs mb-4 blog-meta-text">
                    <span className="blog-category-pill px-2.5 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.dateFormatted}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl mb-4 font-bold leading-snug tracking-tight" style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}>
                    {post.title}
                  </h2>
                  <p className="text-[15px] leading-relaxed mb-6 flex-1 blog-excerpt">{post.excerpt}</p>

                  <div className="flex items-center justify-between mt-auto pt-5" style={{ borderTop: "1px solid var(--border)" }}>
                    <span className="text-xs font-semibold" style={{ color: "var(--primary)" }}>{post.author}</span>
                    <Link href={`/blog/${post.slug}`} className="btn btn-secondary text-sm" style={{ padding: "0.4rem 1rem" }}>
                      Read more <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
