import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { BLOG_POSTS, CLINIC, VETS } from "@/lib/data";
import { articleSchema, breadcrumbSchema, faqSchema, truncateForMetaDescription } from "@/lib/schema";
import CTAStrip from "@/components/home/CTAStrip";
import PawPrint from "@/components/ui/PawPrint";
import SiteBreadcrumbs from "@/components/seo/SiteBreadcrumbs";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  const title = post.seoTitle ?? post.title;
  const description = truncateForMetaDescription(post.metaDescription ?? post.excerpt);
  const ogImage = post.coverSrc.includes("w=")
    ? post.coverSrc.replace(/w=\d+/, "w=1200")
    : `${post.coverSrc}${post.coverSrc.includes("?") ? "&" : "?"}w=1200`;
  const modified = post.dateModified ?? post.date;
  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      publishedTime: post.date,
      modifiedTime: modified,
      title,
      description,
      url: `https://ybvet.com.au/blog/${slug}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `Cover image for article: ${post.title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const heroSrc =
    post.coverSrc.includes("w=") ? post.coverSrc.replace(/w=\d+/, "w=960") : `${post.coverSrc}&w=960`;

  const authorVet = VETS.find((v) => post.author.includes(v.name.replace(/^Dr\s+/, "")));
  const authorPhoto = authorVet?.image ?? "/images/vet-amelia.jpg";
  const authorPhotoAlt = authorVet?.alt ?? `${post.author}, veterinarian`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Resources", url: "/blog" },
              { name: post.title, url: `/blog/${slug}` },
            ])
          ),
        }}
      />
      {post.faqs && post.faqs.length > 0 ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(post.faqs)) }}
        />
      ) : null}

      <section className="blog-article-shell section-pad relative overflow-hidden">
        {/* Decorative only — never override .paw-watermark opacity inline or text becomes unreadable */}
        <div className="blog-article-paw-layer" aria-hidden>
          <PawPrint
            size={176}
            className="blog-paw-svg"
            style={{ position: "absolute", top: "1%", right: "max(0px, 2vw)", transform: "rotate(14deg)" }}
          />
          <PawPrint
            size={148}
            variant="gold"
            className="blog-paw-svg hidden sm:block"
            style={{ position: "absolute", bottom: "8%", left: "max(-0.5rem, -1vw)", transform: "rotate(-20deg)" }}
          />
          <PawPrint
            size={108}
            className="blog-paw-svg hidden md:block"
            style={{
              position: "absolute",
              top: "26%",
              left: "max(0px, calc(50% - 28rem))",
              transform: "translateX(-55%) rotate(-10deg)",
            }}
          />
          <PawPrint
            size={124}
            variant="gold"
            className="blog-paw-svg hidden md:block"
            style={{
              position: "absolute",
              bottom: "32%",
              right: "max(0px, calc(50% - 28rem))",
              transform: "translateX(55%) rotate(16deg)",
            }}
          />
          <PawPrint
            size={92}
            className="blog-paw-svg hidden lg:block"
            style={{ position: "absolute", top: "52%", right: "max(12px, 2vw)", transform: "rotate(-18deg)" }}
          />
        </div>

        <div className="blog-article-main">
          <article>
            <SiteBreadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Pet Care Resources", href: "/blog" },
                { label: post.title },
              ]}
            />

            <header className="blog-article-header">
            <Link href="/blog" className="blog-back-link inline-flex items-center gap-2 text-sm mb-8">
              <ArrowLeft size={15} aria-hidden />
              Back to Pet Care Resources
            </Link>

            <div className="flex flex-wrap items-center gap-3 text-sm mb-6">
              <span className="blog-category-pill px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 blog-meta-text">
                <Calendar size={14} aria-hidden />
                <time dateTime={post.date}>{post.dateFormatted}</time>
              </span>
              <span className="flex items-center gap-1.5 blog-meta-text">
                <Clock size={14} aria-hidden />
                {post.readTime}
              </span>
            </div>

            <h1 className="blog-article-title mb-6">{post.title}</h1>
            <p className="text-lg md:text-xl leading-relaxed mb-10 blog-excerpt">{post.excerpt}</p>

            <div className="flex items-center gap-4 pb-8 mb-2" style={{ borderBottom: "1px solid var(--border)" }}>
              <div className="rounded-full overflow-hidden relative w-12 h-12 shrink-0 ring-2 ring-white shadow-md">
                <Image
                  src={authorPhoto}
                  alt={authorPhotoAlt}
                  width={48}
                  height={48}
                  className="object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <Link
                  href="/team"
                  className="text-base font-semibold underline-offset-2 hover:underline block"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}
                >
                  {post.author}
                </Link>
                <div className="text-sm blog-meta-text">{CLINIC.fullName}</div>
              </div>
            </div>
          </header>

          <div className="blog-article-hero relative w-full mb-12 md:mb-16">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(14,143,224,0.25)] ring-1 ring-[rgba(14,143,224,0.18)]">
              <Image
                src={heroSrc}
                alt={`Cover image for article: ${post.title}`}
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
                className="object-cover"
                quality={78}
              />
            </div>
          </div>

          <div className="blog-article-prose-wrap">
            <div className="prose-article w-full max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <nav aria-labelledby="on-site-heading" className="mt-14 pt-10" style={{ borderTop: "1px solid var(--border)" }}>
            <h2 id="on-site-heading" className="text-lg font-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}>
              On this site
            </h2>
            <ul className="space-y-2 text-[15px] blog-excerpt list-disc pl-5">
              <li>
                <Link href="/services" className="underline-offset-2 hover:underline font-medium" style={{ color: "var(--primary)" }}>
                  Veterinary services
                </Link>{" "}
                — including dental care and consultations.
              </li>
              <li>
                <Link href="/team" className="underline-offset-2 hover:underline font-medium" style={{ color: "var(--primary)" }}>
                  Meet our vets
                </Link>{" "}
                — who writes these articles.
              </li>
              <li>
                <Link href="/contact" className="underline-offset-2 hover:underline font-medium" style={{ color: "var(--primary)" }}>
                  Book or contact YB Vet
                </Link>{" "}
                — online or by phone.
              </li>
              <li>
                <Link href="/blog" className="underline-offset-2 hover:underline font-medium" style={{ color: "var(--primary)" }}>
                  More pet care articles
                </Link>
                .
              </li>
            </ul>
          </nav>

          <section aria-labelledby="further-reading-heading" className="mt-12">
            <h2 id="further-reading-heading" className="text-lg font-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}>
              Trusted resources (Australia)
            </h2>
            <ul className="space-y-3 text-[15px] blog-excerpt list-disc pl-5">
              <li>
                <a
                  href="https://www.rspca.org.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-2 hover:underline font-medium"
                  style={{ color: "var(--primary)" }}
                >
                  RSPCA Australia
                </a>{" "}
                — national welfare guidance for pet owners.
              </li>
              <li>
                <a
                  href="https://www.ava.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-2 hover:underline font-medium"
                  style={{ color: "var(--primary)" }}
                >
                  Australian Veterinary Association
                </a>{" "}
                — the professional body for veterinarians in Australia.
              </li>
            </ul>
          </section>

          {post.faqs && post.faqs.length > 0 ? (
            <section aria-labelledby="faq-heading" className="mt-14 pt-10" style={{ borderTop: "1px solid var(--border)" }}>
              <h2 id="faq-heading" className="text-xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}>
                Common questions
              </h2>
              <dl className="space-y-8">
                {post.faqs.map((f) => (
                  <div key={f.question}>
                    <dt className="font-bold text-base mb-2" style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}>
                      {f.question}
                    </dt>
                    <dd className="text-[15px] leading-relaxed m-0 blog-excerpt">{f.answer}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          <footer className="blog-article-footer mt-16 md:mt-20 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6" style={{ borderTop: "1px solid var(--border)" }}>
            <div>
              <div className="text-sm font-semibold mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                Written by{" "}
                <Link href="/team" className="underline-offset-2 hover:underline" style={{ color: "var(--primary)" }}>
                  {post.author}
                </Link>
              </div>
              <div className="text-sm blog-meta-text">Veterinarian at {CLINIC.fullName}</div>
            </div>
            <Link href="/blog" className="btn btn-secondary text-sm shrink-0">
              <ArrowLeft size={14} aria-hidden />
              All Resources
            </Link>
          </footer>
          </article>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
