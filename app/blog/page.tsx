import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/schema";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import PillBadge from "@/components/ui/PillBadge";
import PawPrint from "@/components/ui/PawPrint";

export const metadata: Metadata = {
  title: "Pet Care Resources",
  description:
    "Practical pet care advice from the vets at YB Vet in Yangebup — covering preventive health, first vet visits, dental care, and more for dog and cat owners.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Resources", url: "/blog" }])) }}
      />

      {/* Hero */}
      <section className="section-pad relative overflow-hidden" style={{ background: "var(--bg)" }}>
        <PawPrint size={160} style={{ position: "absolute", top: 20, right: 60, transform: "rotate(20deg)" }} />
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

      {/* Articles */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" stagger={0.12}>
            {BLOG_POSTS.map((post) => (
              <StaggerItem key={post.slug}>
                <article className="card h-full flex flex-col">
                  {/* Image placeholder */}
                  <div
                    className="img-placeholder rounded-xl mb-5 overflow-hidden"
                    style={{ height: 200, background: "linear-gradient(135deg, var(--surface) 0%, var(--border) 100%)", fontSize: 12 }}
                  >
                    Article image — {post.title.split(" ").slice(0, 4).join(" ")}…
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs mb-3" style={{ color: "var(--muted)" }}>
                    <span
                      className="px-2 py-1 rounded-full text-xs font-semibold"
                      style={{ background: "rgba(14,143,224,0.09)", color: "var(--primary)" }}
                    >
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

                  <h2 className="text-xl mb-3 font-bold leading-snug" style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}>
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--muted)" }}>{post.excerpt}</p>

                  <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: "1px solid var(--border)" }}>
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
