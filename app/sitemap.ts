import type { MetadataRoute } from "next";

import { articles } from "@/data/articles";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/o-proekte", "/politika-konfidentsialnosti", "/otkaz-otvetstvennosti"];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: siteConfig.updatedAt,
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.7
  }));

  const articleEntries = articles.map((article) => ({
    url: `${siteConfig.siteUrl}/${article.slug}`,
    lastModified: article.updatedAt ?? siteConfig.updatedAt,
    changeFrequency: "weekly" as const,
    priority: article.slug === "debetovye-karty" ? 0.95 : 0.85
  }));

  return [...staticEntries, ...articleEntries];
}
