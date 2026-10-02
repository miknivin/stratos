import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { serviceCategories, approvedPages } from "@/lib/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/products",
    "/brands",
    "/contact",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const categoryRoutes = serviceCategories.map((category) => ({
    url: `${siteConfig.url}/services/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Only approved service pages are indexed; reference-derived pages
  // awaiting delivery-scope confirmation are excluded until approved.
  const serviceRoutes = serviceCategories.flatMap((category) =>
    approvedPages(category.pages).map((page) => ({
      url: `${siteConfig.url}/services/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  );

  return [...staticRoutes, ...categoryRoutes, ...serviceRoutes];
}
