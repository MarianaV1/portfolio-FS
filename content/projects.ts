import type { Locale } from "@/content/i18n";
import type { Project, ProjectMeta } from "@/content/types";
import { getDictionary } from "@/content/dictionary";

/**
 * Locale-independent project data. Slugs stay the same across languages;
 * the localized text lives in the dictionaries (content/dictionaries/*).
 */
export const projectsMeta: ProjectMeta[] = [
  {
    slug: "crm-podologia",
    accent: "cyan",
    year: "2026",
    featured: true,
    badge: "production",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Tailwind CSS",
      "Google Calendar API",
    ],
    // Real client project: private repo, so only a live demo (no repo link).
    links: { demo: "https://podocrm-sandy.vercel.app/" },
  },
  {
    slug: "app-tiempo-real",
    accent: "violet",
    year: "2025",
    badge: "in-progress",
    icon: "realtime",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Tailwind CSS",
    ],
    links: { demo: "#", repo: "#" },
  },
  {
    slug: "app-movil-integraciones",
    accent: "cyan",
    year: "2024",
    badge: "in-progress",
    icon: "mobile",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "REST / GraphQL",
      "React Query",
      "External API",
    ],
    links: { demo: "#", repo: "#" },
  },
];

/** All projects resolved (meta + text) for a locale. */
export function getProjects(locale: Locale): Project[] {
  const { text } = getDictionary(locale).projects;
  return projectsMeta.map((meta) => ({ ...meta, ...text[meta.slug] }));
}

/** A single project resolved for a locale, or undefined if the slug is unknown. */
export function getProject(locale: Locale, slug: string): Project | undefined {
  const meta = projectsMeta.find((p) => p.slug === slug);
  if (!meta) return undefined;
  const text = getDictionary(locale).projects.text[slug];
  if (!text) return undefined;
  return { ...meta, ...text };
}
