/**
 * Locale-independent site data (name, contact, links).
 * Localized text lives in the i18n dictionaries (content/dictionaries/*).
 */
export const site = {
  name: "Mariana Vega",
  initials: "MV",
  // Update after deploy (or set NEXT_PUBLIC_SITE_URL). Used for SEO/OG/sitemap.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mariana-vega.vercel.app",
  email: "marianamvh2002@gmail.com",
  links: {
    github: "https://github.com/MarianaV1",
    linkedin: "https://www.linkedin.com/in/mariana-vega-hdz/",
  },
} as const;
