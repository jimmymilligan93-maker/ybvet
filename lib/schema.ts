import { CLINIC, VETS, SERVICES } from "./data";

export function clinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: CLINIC.fullName,
    alternateName: CLINIC.name,
    url: "https://ybvet.com.au",
    telephone: CLINIC.phone,
    email: CLINIC.email,
    isAcceptingNewPatients: true,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop 4/31-35 Moorhen Drive",
      addressLocality: CLINIC.suburb,
      addressRegion: CLINIC.state,
      postalCode: CLINIC.postcode,
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CLINIC.lat,
      longitude: CLINIC.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:30",
        closes: "12:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: CLINIC.rating,
      reviewCount: CLINIC.reviewCount,
      bestRating: 5,
    },
    makesOffer: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "MedicalProcedure",
        name: s.name,
      },
    })),
    employee: VETS.map((v) => ({
      "@type": "Person",
      name: v.name,
      jobTitle: v.title,
      hasCredential: v.credential,
    })),
    sameAs: [CLINIC.googleReviewUrl],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://ybvet.com.au${item.url}`,
    })),
  };
}

function absoluteImageUrl(src: string) {
  if (src.startsWith("https://") || src.startsWith("http://")) return src;
  return `https://ybvet.com.au${src.startsWith("/") ? src : `/${src}`}`;
}

export function truncateForMetaDescription(text: string, max = 155): string {
  const t = text.trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  const base = (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trimEnd();
  return `${base}…`;
}

export function articleSchema(post: {
  title: string;
  excerpt: string;
  /** Shorter summary for JSON-LD; falls back to excerpt. */
  metaDescription?: string;
  date: string;
  dateModified?: string;
  author: string;
  slug: string;
  coverSrc: string;
}) {
  const description = post.metaDescription ?? post.excerpt;
  const modified = post.dateModified ?? post.date;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description,
    datePublished: post.date,
    dateModified: modified,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://ybvet.com.au/team",
    },
    publisher: {
      "@type": "Organization",
      name: CLINIC.fullName,
      logo: { "@type": "ImageObject", url: "https://ybvet.com.au/images/logo.png" },
    },
    image: absoluteImageUrl(post.coverSrc),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ybvet.com.au/blog/${post.slug}`,
    },
  };
}

export function webPageSchema(path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `https://ybvet.com.au${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: CLINIC.fullName,
      url: "https://ybvet.com.au",
    },
  };
}

export function medicalProcedureSchema(procedure: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: procedure.name,
    description: procedure.description,
    url: `https://ybvet.com.au${procedure.path}`,
    provider: {
      "@type": "VeterinaryCare",
      name: CLINIC.fullName,
      url: "https://ybvet.com.au",
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Merge multiple schema.org nodes (each may include @context) into one @graph for a single script tag. */
export function mergeJsonLdGraph(nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.map((node) => {
      const { ["@context"]: _, ...rest } = node;
      return rest;
    }),
  };
}
