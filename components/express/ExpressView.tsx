"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, type Variants } from "motion/react";
import {
  Mail,
  Download,
  ArrowUpRight,
  ExternalLink,
  MapPin,
  Briefcase,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/content/site";
import { locales, type Locale } from "@/content/i18n";
import type { Dictionary, Project } from "@/content/types";
import type { ExpressLabels } from "@/content/express";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

/**
 * Compact one-screen recruiter view: a sidebar with who I am (identity,
 * contact, stack) and a main column with the work, ordered by weight —
 * featured project, experience, other projects.
 */
export default function ExpressView({
  locale,
  dict,
  projects,
  labels,
}: {
  locale: Locale;
  dict: Dictionary;
  projects: Project[];
  labels: ExpressLabels;
}) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(next: Locale) {
    if (next === locale) return;
    const segments = pathname.split("/");
    segments[1] = next; // segment[1] is the locale
    router.push(segments.join("/") || `/${next}`);
  }

  const cvHref = `/cv-mariana-vega-${locale}.pdf`;
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const others = projects.filter((p) => p !== featured);
  const hasDemo = !!featured.links.demo && featured.links.demo !== "#";

  const badgeLabel = (badge: Project["badge"]) =>
    badge === "production"
      ? dict.projects.badges.production
      : badge === "in-progress"
      ? dict.projects.badges.inProgress
      : null;

  return (
    <main className="relative flex min-h-svh flex-col">
      {/* Top bar */}
      <header className="mx-auto w-full max-w-7xl px-6 flex items-center justify-between gap-3 py-3">
        <a href={`/${locale}`} className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface font-mono text-sm font-bold text-gradient">
            {site.initials}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan">
            {labels.quickView}
          </span>
        </a>

        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-full border border-border bg-surface p-0.5 text-xs font-medium">
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
                  locale === l
                    ? "bg-foreground text-background"
                    : "text-muted hover:text-foreground"
                }`}
                aria-pressed={locale === l}
              >
                {l}
              </button>
            ))}
          </div>
          <Link
            href={`/${locale}`}
            className="glow-hover hidden items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-2 text-xs font-medium sm:inline-flex"
          >
            {labels.fullPortfolio}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </header>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-7xl px-6 grid flex-1 content-start gap-4 pb-6 lg:grid-cols-12 lg:content-center"
      >
        {/* ── Sidebar: who I am ────────────────────────────────── */}
        <motion.aside
          variants={item}
          className="glass flex flex-col rounded-3xl p-6 sm:p-7 lg:col-span-4"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            {dict.hero.pill}
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight">
            <span className="text-gradient">{site.name}</span>
          </h1>
          <p className="mt-2 font-mono text-sm text-cyan">{dict.hero.role}</p>
          <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-faint">
            <MapPin className="h-3.5 w-3.5 text-violet" />
            {labels.location}
          </p>

          <p className="mt-5 text-pretty text-sm leading-relaxed text-muted">
            {dict.hero.tagline}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-2">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-cyan-deep to-violet-deep px-3 py-2.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_var(--glow-cyan)] transition-transform hover:scale-[1.03]"
            >
              <Mail className="h-4 w-4" />
              {labels.contact}
            </a>
            <a
              href={cvHref}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-hover inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-surface px-3 py-2.5 text-sm font-semibold"
            >
              <Download className="h-4 w-4" />
              {dict.hero.ctaCv}
            </a>
          </div>
          <div className="mt-4 flex items-center gap-2 lg:mb-6">
            <SocialIcon href={site.links.github} label="GitHub">
              <GithubIcon className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={site.links.linkedin} label="LinkedIn">
              <LinkedinIcon className="h-4 w-4" />
            </SocialIcon>
          </div>

          {/* Stack as compact text — the only place tech is listed */}
          <div className="mt-6 border-t border-border pt-5 lg:mt-auto">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan">
              {dict.skills.eyebrow}
            </p>
            <dl className="mt-3 space-y-2.5">
              {dict.skills.groups.map((group) => (
                <div key={group.title}>
                  <dt className="text-xs font-semibold">{group.title}</dt>
                  <dd className="mt-0.5 text-xs leading-relaxed text-muted">
                    {group.items.join(" · ")}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.aside>

        {/* ── Main column: the work ────────────────────────────── */}
        <div className="flex flex-col gap-4 lg:col-span-8">
          {/* Featured project */}
          <motion.section
            variants={item}
            className="glass glow-hover relative overflow-hidden rounded-3xl p-6 sm:p-7"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,var(--glow-cyan),transparent_65%)] opacity-40 blur-2xl"
            />
            <div className="relative">
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan">
                  {labels.featured}
                </p>
                {badgeLabel(featured.badge) && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/40 bg-cyan/15 px-2.5 py-0.5 text-xs font-medium text-cyan">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                    {badgeLabel(featured.badge)}
                  </span>
                )}
              </div>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                <Link
                  href={`/${locale}/projects/${featured.slug}`}
                  className="transition-colors hover:text-cyan"
                >
                  {featured.title}
                </Link>
              </h2>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-faint">
                {featured.category} · {featured.year}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                {featured.summary}
              </p>

              {featured.metrics && (
                <dl className="mt-5 grid grid-cols-3 gap-3">
                  {featured.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex flex-col-reverse rounded-2xl border border-border bg-surface/60 px-3 py-3 sm:px-4"
                    >
                      <dt className="mt-0.5 text-xs leading-snug text-faint">
                        {m.label}
                      </dt>
                      <dd className="text-xl font-bold tracking-tight text-gradient sm:text-3xl">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}

              <p className="mt-4 font-mono text-[11px] leading-relaxed text-faint">
                {featured.stack.join(" · ")}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                {hasDemo && (
                  <a
                    href={featured.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-4 py-2 text-sm font-semibold text-cyan transition-colors hover:bg-cyan/20"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {featured.demoLabel ?? dict.projects.viewDemo}
                  </a>
                )}
                <Link
                  href={`/${locale}/projects/${featured.slug}`}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium"
                >
                  {labels.viewCase}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </motion.section>

          {/* Experience + other projects, one quiet card (side by side on lg) */}
          <motion.section
            variants={item}
            className="glass grid flex-1 gap-5 rounded-3xl p-6 sm:p-7 lg:grid-cols-2 lg:gap-7"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan">
                {dict.experience.eyebrow}
              </p>
              <div className="mt-3 space-y-3">
                {dict.experience.items.map((job) => (
                  <div
                    key={`${job.company}-${job.period}`}
                    className="flex gap-3"
                  >
                    <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                        <h3 className="text-sm font-semibold">
                          {job.role}{" "}
                          <span className="text-muted">— {job.company}</span>
                        </h3>
                        <span className="font-mono text-[11px] text-faint">
                          {job.period}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {job.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan">
                {labels.otherProjects}
              </p>
              <ul className="mt-1 divide-y divide-border">
                {others.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/${locale}/projects/${p.slug}`}
                      className="group flex items-center gap-3 py-2"
                    >
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold transition-colors group-hover:text-cyan">
                          {p.title}
                        </h3>
                        <p className="font-mono text-[11px] uppercase tracking-wider text-faint">
                          {p.category}
                        </p>
                      </div>
                      {badgeLabel(p.badge) && (
                        <span className="shrink-0 rounded-full border border-amber-400/40 bg-amber-400/10 px-2 py-0.5 text-[10px] font-medium text-amber-300">
                          {badgeLabel(p.badge)}
                        </span>
                      )}
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </main>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="glow-hover grid h-9 w-9 place-items-center rounded-full border border-border bg-surface text-muted transition-colors hover:text-foreground"
    >
      {children}
    </a>
  );
}
