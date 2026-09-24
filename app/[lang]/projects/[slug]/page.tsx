import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import AuroraBackground from "@/components/AuroraBackground";
import Navbar from "@/components/Navbar";
import ProjectMockup from "@/components/ProjectMockup";
import ProjectGallery from "@/components/ProjectGallery";
import { isLocale, toLocale } from "@/content/i18n";
import { getDictionary } from "@/content/dictionary";
import { getProject, projectsMeta } from "@/content/projects";
import { site } from "@/content/site";

export function generateStaticParams() {
  return projectsMeta.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = toLocale(lang);
  const project = getProject(locale, slug);
  if (!project) return { title: `${site.name}` };
  return {
    title: `${project.title} — ${site.name}`,
    description: project.summary,
    alternates: {
      canonical: `/${locale}/projects/${slug}`,
      languages: {
        es: `/es/projects/${slug}`,
        en: `/en/projects/${slug}`,
      },
    },
    openGraph: {
      title: `${project.title} — ${site.name}`,
      description: project.summary,
      url: `/${locale}/projects/${slug}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang;
  const dict = getDictionary(locale);
  const t = dict.projects;
  const project = getProject(locale, slug);
  if (!project) notFound();

  const hasDemo = !!project.links.demo && project.links.demo !== "#";
  const hasRepo = !!project.links.repo && project.links.repo !== "#";

  return (
    <>
      <AuroraBackground />
      <Navbar locale={locale} nav={dict.nav} />
      <main className="flex flex-1 flex-col pt-24">
        <article className="container-x max-w-3xl pb-24">
          {/* Back */}
          <Link
            href={`/${locale}#proyectos`}
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.back}
          </Link>

          {/* Header */}
          <header className="mt-6">
            <span className="font-mono text-xs uppercase tracking-wider text-cyan">
              {project.category} · {project.year}
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {project.subtitle ?? project.summary}
            </p>

            {/* Meta: role / status */}
            {(project.role || project.status) && (
              <dl className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-10">
                {project.role && (
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-faint">
                      {t.roleLabel}
                    </dt>
                    <dd className="mt-1 text-sm text-muted">{project.role}</dd>
                  </div>
                )}
                {project.status && (
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-faint">
                      {t.statusLabel}
                    </dt>
                    <dd className="mt-1 text-sm text-muted">{project.status}</dd>
                  </div>
                )}
              </dl>
            )}

            {/* Links */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={hasDemo ? project.links.demo : undefined}
                aria-disabled={!hasDemo}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform ${
                  hasDemo
                    ? "bg-gradient-to-r from-cyan-deep to-violet-deep hover:scale-[1.03]"
                    : "cursor-not-allowed bg-surface/50 text-faint"
                }`}
              >
                <ExternalLink className="h-4 w-4" />
                {hasDemo ? project.demoLabel ?? t.viewDemo : t.demoSoon}
              </a>

              {hasRepo && (
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-cyan/40"
                >
                  <GithubIcon className="h-4 w-4" />
                  {t.viewCode}
                </a>
              )}
            </div>

            {project.demoNote && (
              <p className="mt-3 text-xs text-faint">{project.demoNote}</p>
            )}
          </header>

          {/* Screenshots gallery (real captures) or placeholder mockup */}
          {project.screenshots ? (
            <div className="mt-10">
              <ProjectGallery
                screenshots={project.screenshots}
                labels={t.gallery}
              />
            </div>
          ) : (
            <ProjectMockup
              title={project.title}
              accent={project.accent}
              icon={project.icon}
              className="mt-10"
            />
          )}

          {/* Body */}
          <div className="mt-12 space-y-10">
            {project.overview && (
              <Block title={t.blocks.overview}>
                <p>{project.overview}</p>
              </Block>
            )}

            <Block title={t.blocks.challenge}>
              <p>{project.challenge}</p>
            </Block>

            <Block title={t.blocks.solution}>
              <p>{project.solution}</p>
              {project.solutionPoints && (
                <ul className="mt-4 space-y-2">
                  {project.solutionPoints.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Block>

            {project.features && (
              <Block title={t.blocks.features}>
                <ul className="space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </Block>
            )}

            {project.techDecisions && (
              <Block title={t.blocks.techDecisions}>
                <ul className="space-y-4">
                  {project.techDecisions.map((d) => (
                    <li
                      key={d.title}
                      className="rounded-xl border border-border bg-surface/60 p-4"
                    >
                      <p className="font-semibold text-foreground">{d.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {d.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </Block>
            )}

            {project.result && (
              <Block title={t.blocks.result}>
                <p>{project.result}</p>
              </Block>
            )}

            <Block title={t.blocks.stack}>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-sm text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Block>

            {project.learnings && (
              <Block title={t.blocks.learnings}>
                <p>{project.learnings}</p>
              </Block>
            )}
          </div>
        </article>
      </main>
    </>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-cyan">
        {title}
      </h2>
      <div className="mt-3 text-base leading-relaxed text-muted">
        {children}
      </div>
    </section>
  );
}
