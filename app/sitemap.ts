import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { locales } from "@/content/i18n";
import { projectsMeta } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const langs = (path: string) => ({
    es: `${base}/es${path}`,
    en: `${base}/en${path}`,
  });

  const entries: MetadataRoute.Sitemap = [];

  // Home, per locale
  for (const locale of locales) {
    entries.push({
      url: `${base}/${locale}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: langs("") },
    });
  }

  // Project detail pages, per locale
  for (const project of projectsMeta) {
    const path = `/projects/${project.slug}`;
    for (const locale of locales) {
      entries.push({
        url: `${base}/${locale}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: { languages: langs(path) },
      });
    }
  }

  return entries;
}
