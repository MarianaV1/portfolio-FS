/** Shared content types for the i18n dictionaries. */

export type Accent = "cyan" | "violet";

/** Locale-independent structural data for a project. */
export type ProjectStatus = "production" | "in-progress";

export type ProjectMeta = {
  slug: string;
  accent: Accent;
  year: string;
  featured?: boolean;
  /** Card badge: real & live vs. still being built. */
  badge?: ProjectStatus;
  /** Icon key for the placeholder visual when there are no screenshots. */
  icon?: string;
  stack: string[];
  /** `repo` is optional: private/client projects may only expose a demo. */
  links: { demo?: string; repo?: string };
};

/** A case-study screenshot (image lives under /public). */
export type Screenshot = { src: string; caption: string };

/** A named technical decision (title + explanation) for a case study. */
export type TechDecision = { title: string; desc: string };

/**
 * Localized text for a project (case study).
 * Required: title, summary, skill, category, challenge, solution.
 * The rest are optional so each project can have a different shape.
 */
export type ProjectText = {
  title: string;
  summary: string;
  skill: string;
  category: string;
  challenge: string;
  solution: string;
  /** Longer intro on the detail page (falls back to `summary`). */
  subtitle?: string;
  /** Meta shown in the detail header. */
  role?: string;
  status?: string;
  /** Optional short intro block before "El reto". */
  overview?: string;
  /** Bullet points expanding on the solution. */
  solutionPoints?: string[];
  /** Generic feature list (used by the template projects). */
  features?: string[];
  /** Highlighted technical decisions. */
  techDecisions?: TechDecision[];
  /** Outcome / results paragraph. */
  result?: string;
  /** Headline numbers (shown as big stats in the express view). */
  metrics?: { value: string; label: string }[];
  /** Lessons learned (used by the template projects). */
  learnings?: string;
  /** Custom demo button label + note (falls back to generic label). */
  demoLabel?: string;
  demoNote?: string;
  /** Case-study screenshots (replace the placeholder mockup when present). */
  screenshots?: Screenshot[];
};

/** A fully-resolved project for a given locale (meta + text). */
export type Project = ProjectMeta & ProjectText;

export type Dictionary = {
  meta: { title: string; description: string };
  nav: { hash: string; label: string }[];
  hero: {
    pill: string;
    greeting: string;
    role: string;
    tagline: string;
    ctaProjects: string;
    ctaCv: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    highlights: { title: string; desc: string }[];
  };
  experience: {
    eyebrow: string;
    heading: string;
    items: {
      role: string;
      company: string;
      period: string;
      /** Company / team context line. */
      context: string;
      /** One-line summary (used by the compact express view). */
      summary: string;
      bullets: string[];
      stack: string[];
    }[];
  };
  skills: {
    eyebrow: string;
    heading: string;
    groups: { icon: string; title: string; items: string[] }[];
  };
  projects: {
    eyebrow: string;
    heading: string;
    intro: string;
    demonstrates: string;
    viewCase: string;
    back: string;
    viewDemo: string;
    viewCode: string;
    demoSoon: string;
    roleLabel: string;
    statusLabel: string;
    badges: { production: string; inProgress: string };
    gallery: { close: string; prev: string; next: string };
    blocks: {
      overview: string;
      challenge: string;
      solution: string;
      features: string;
      techDecisions: string;
      result: string;
      stack: string;
      learnings: string;
    };
    /** Localized project text keyed by slug. */
    text: Record<string, ProjectText>;
  };
  contact: {
    eyebrow: string;
    heading: string;
    text: string;
    labelName: string;
    labelEmail: string;
    labelMessage: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderMessage: string;
    submit: string;
    note: string;
    mailSubject: string;
  };
  footer: {
    role: string;
    tagline: string;
    navTitle: string;
    followTitle: string;
    madeWith: string;
    backToTop: string;
  };
};
