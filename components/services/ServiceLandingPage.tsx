import Link from "next/link";
import { BLOG_POSTS } from "@/lib/data";
import type { ServicePageDefinition } from "@/lib/service-pages";
import { getServiceCardForPage, heroLcpImageSrc, heroLcpRemoteSrc } from "@/lib/service-pages";
import {
  breadcrumbSchema,
  faqSchema,
  medicalProcedureSchema,
  mergeJsonLdGraph,
  webPageSchema,
} from "@/lib/schema";
import CTAStrip from "@/components/home/CTAStrip";
import PillBadge from "@/components/ui/PillBadge";
import SiteBreadcrumbs from "@/components/seo/SiteBreadcrumbs";

type Props = {
  page: ServicePageDefinition;
};

export default function ServiceLandingPage({ page }: Props) {
  const card = getServiceCardForPage(page);
  const path = `/services/${page.slug}`;
  const heroSrc = heroLcpImageSrc(page, card);
  const heroAlt = card?.imageAlt ?? `${page.serviceName} at YB Vet`;
  const heroDisplaySrc = heroLcpRemoteSrc(heroSrc);
  const relatedPosts = page.relatedBlogSlugs
    .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const jsonLd = mergeJsonLdGraph([
    webPageSchema(path, page.metadataTitle, page.metaDescription) as Record<string, unknown>,
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: page.serviceName, url: path },
    ]) as Record<string, unknown>,
    medicalProcedureSchema({
      name: page.procedureSchemaName,
      description: page.procedureSchemaDescription,
      path,
    }) as Record<string, unknown>,
    faqSchema(page.faqs) as Record<string, unknown>,
  ]);

  return (
    <>
      <section className="service-split-hero" aria-labelledby="service-hero-title">
        <div className="service-split-hero__layout">
          <div className="service-split-hero__copy">
            <div className="service-split-hero__copy-inner">
              <SiteBreadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services" },
                  { label: page.serviceName },
                ]}
              />
              <div className="services-hero-grid">
                <h1 id="service-hero-title" className="services-hero-title" style={{ color: "#ffffff" }}>
                  {page.h1}
                </h1>
                <p className="services-hero-lead" style={{ color: "#EAF6FD" }}>
                  {page.heroLead}
                </p>
                <div className="services-hero-pill">
                  <PillBadge variant="white">{page.heroPill}</PillBadge>
                </div>
              </div>
            </div>
          </div>
          <div className="service-split-hero__fade" aria-hidden />
          <div className="service-split-hero__media">
            <img
              src={heroDisplaySrc}
              alt={heroAlt}
              width={960}
              height={1440}
              decoding="async"
              loading="eager"
              fetchPriority="high"
              className="service-split-hero__photo"
              style={{ transform: "scaleX(-1)", objectPosition: "78% center" }}
            />
          </div>
        </div>
      </section>

      <section className="blog-article-shell section-pad" style={{ background: "white" }}>
        <div className="blog-article-main">
          <div className="blog-article-prose-wrap">
            <div className="prose-article service-landing-body w-full max-w-none">
              {page.sections.map((section) => (
                <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
                  <h2 id={`${section.id}-heading`}>{section.heading}</h2>
                  <div dangerouslySetInnerHTML={{ __html: section.html.trim() }} />
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 ? (
        <section className="section-pad" style={{ background: "var(--bg)" }} aria-labelledby="related-reading-heading">
          <div className="container max-w-3xl mx-auto">
            <PillBadge>Further reading</PillBadge>
            <h2 id="related-reading-heading" className="mt-4 mb-6">
              Related articles
            </h2>
            <ul className="space-y-4 list-none p-0 m-0">
              {relatedPosts.map((post) => (
                <li key={post.slug} className="card">
                  <h3 className="text-base font-bold mb-2" style={{ color: "var(--text)" }}>
                    <Link href={`/blog/${post.slug}`} className="underline-offset-2 hover:underline">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>
                    {post.excerpt}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="section-pad" style={{ background: "white" }} aria-labelledby="service-faq-heading">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <PillBadge>Common questions</PillBadge>
            <h2 id="service-faq-heading" className="mt-4">
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-4">
            {page.faqs.map((f) => (
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
