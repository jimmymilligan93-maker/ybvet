import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/data";
import { SERVICE_PAGES } from "@/lib/service-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries = BLOG_POSTS.map((post) => ({
    url: `https://ybvet.com.au/blog/${post.slug}`,
    lastModified: new Date(post.dateModified ?? post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: "https://ybvet.com.au/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://ybvet.com.au/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...SERVICE_PAGES.map((page) => ({
      url: `https://ybvet.com.au/services/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    {
      url: "https://ybvet.com.au/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://ybvet.com.au/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://ybvet.com.au/team",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://ybvet.com.au/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogEntries,
  ];
}
