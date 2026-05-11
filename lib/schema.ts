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

export function articleSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: CLINIC.fullName,
      logo: { "@type": "ImageObject", url: "https://ybvet.com.au/images/logo.png" },
    },
    image: `https://ybvet.com.au${post.image}`,
    mainEntityOfPage: `https://ybvet.com.au/blog/${post.slug}`,
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
