import type { Locale } from "@/content/i18n";

/**
 * Extra labels used ONLY by the compact "express" recruiter view
 * (app/[lang]/express). Everything else (bio, skills, projects, contact)
 * is reused from the main dictionaries so both versions stay in sync.
 */
export type ExpressLabels = {
  quickView: string;
  fullPortfolio: string;
  contact: string;
  featured: string;
  otherProjects: string;
  viewCase: string;
  location: string;
};

const express: Record<Locale, ExpressLabels> = {
  es: {
    quickView: "Vista rápida",
    fullPortfolio: "Ver portafolio completo",
    contact: "Contáctame",
    featured: "Proyecto destacado",
    otherProjects: "Otros proyectos",
    viewCase: "Ver caso",
    location: "Remoto · Híbrido · Presencial",
  },
  en: {
    quickView: "Quick view",
    fullPortfolio: "View full portfolio",
    contact: "Contact me",
    featured: "Featured project",
    otherProjects: "Other projects",
    viewCase: "View case",
    location: "Remote · Hybrid · On-site",
  },
};

export function getExpressLabels(locale: Locale): ExpressLabels {
  return express[locale];
}
