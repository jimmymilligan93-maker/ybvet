import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLandingPage from "@/components/services/ServiceLandingPage";
import { getServiceCardForPage, getServicePage, ogImageFromCardSrc } from "@/lib/service-pages";

export function createServicePage(slug: string) {
  const page = getServicePage(slug);

  async function generateMetadata(): Promise<Metadata> {
    if (!page) return {};
    const card = getServiceCardForPage(page);
    const ogImage = ogImageFromCardSrc(page.heroLcpSrc ?? card?.imageSrc ?? "/images/happydog.webp");
    const canonical = `/services/${slug}`;

    return {
      title: page.metadataTitle,
      description: page.metaDescription,
      alternates: { canonical },
      openGraph: {
        title: page.metadataTitle,
        description: page.metaDescription,
        url: `https://ybvet.com.au${canonical}`,
        type: "website",
        locale: "en_AU",
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 800,
            alt: card?.imageAlt ?? `${page.serviceName} at YB Vet`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: page.metadataTitle,
        description: page.metaDescription,
        images: [ogImage],
      },
      robots: { index: true, follow: true },
    };
  }

  function ServicePage() {
    if (!page) notFound();
    return <ServiceLandingPage page={page} />;
  }

  return { generateMetadata, default: ServicePage };
}
