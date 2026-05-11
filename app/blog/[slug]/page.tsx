import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { BLOG_POSTS, CLINIC } from "@/lib/data";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTAStrip from "@/components/home/CTAStrip";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { type: "article", publishedTime: post.date },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

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

      {/* Article hero */}
      <section className="section-pad" style={{ background: "var(--bg)" }}>
        <div className="container max-w-3xl mx-auto">
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:opacity-80"
              style={{ color: "var(--primary)" }}
            >
              <ArrowLeft size={15} />
              Back to Pet Care Resources
            </Link>

            <div className="flex items-center gap-4 text-sm mb-4" style={{ color: "var(--muted)" }}>
              <span
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "rgba(14,143,224,0.09)", color: "var(--primary)" }}
              >
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={13} />
                {post.dateFormatted}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={13} />
                {post.readTime}
              </span>
            </div>

            <h1 className="mb-4">{post.title}</h1>
            <p className="text-lg mb-6" style={{ color: "var(--muted)" }}>{post.excerpt}</p>

            <div className="flex items-center gap-3 pb-6" style={{ borderBottom: "1px solid var(--border)" }}>
              <div
                className="img-placeholder rounded-full"
                style={{ width: 40, height: 40, flexShrink: 0, fontSize: 10 }}
              >
                {post.author.split(" ")[1][0]}
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: "var(--text)", fontFamily: "var(--font-heading)" }}>{post.author}</div>
                <div className="text-xs" style={{ color: "var(--muted)" }}>{CLINIC.fullName}</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Article image */}
          <AnimatedSection delay={0.1}>
            <div
              className="img-placeholder rounded-2xl my-8"
              style={{ height: 320, background: "linear-gradient(135deg, var(--surface) 0%, var(--border) 100%)", fontSize: 13 }}
            >
              Article hero image (replace with real photo)
            </div>
          </AnimatedSection>

          {/* Article body */}
          <AnimatedSection delay={0.15}>
            <div
              className="prose-article"
              style={{
                color: "var(--text)",
                lineHeight: 1.8,
                fontSize: "17px",
              }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </AnimatedSection>

          {/* Article footer */}
          <AnimatedSection delay={0.2} className="mt-12 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold mb-1" style={{ fontFamily: "var(--font-heading)" }}>Written by {post.author}</div>
                <div className="text-sm" style={{ color: "var(--muted)" }}>Veterinarian at {CLINIC.fullName}</div>
              </div>
              <Link href="/blog" className="btn btn-secondary text-sm">
                <ArrowLeft size={14} />
                All Resources
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
