import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import ProjectMockup from "@/components/ProjectMockup";
import type { Locale } from "@/content/i18n";
import type { Project } from "@/content/types";

export default function ProjectCard({
  project,
  locale,
  labels,
}: {
  project: Project;
  locale: Locale;
  labels: {
    demonstrates: string;
    viewCase: string;
    badges: { production: string; inProgress: string };
  };
}) {
  const { slug, title, summary, category, skill, accent, stack, links, badge } =
    project;
  const shown = stack.slice(0, 5);
  const extra = stack.length - shown.length;
  const detailHref = `/${locale}/projects/${slug}`;
  const hasDemo = !!links.demo && links.demo !== "#";
  const hasRepo = !!links.repo && links.repo !== "#";

  const badgeLabel =
    badge === "production"
      ? labels.badges.production
      : badge === "in-progress"
      ? labels.badges.inProgress
      : null;

  return (
    <article className="glass glow-hover flex h-full flex-col rounded-2xl p-5">
      <div className="relative">
        <ProjectMockup
          title={title}
          accent={accent}
          icon={project.icon}
          src={project.screenshots?.[1]?.src ?? project.screenshots?.[0]?.src}
        />
        {badgeLabel && (
          <span
            className={`absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium backdrop-blur-md ${
              badge === "production"
                ? "border-cyan/40 bg-cyan/15 text-cyan"
                : "border-amber-400/40 bg-amber-400/10 text-amber-300"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                badge === "production" ? "bg-cyan" : "bg-amber-300"
              }`}
            />
            {badgeLabel}
          </span>
        )}
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <span className="font-mono text-xs uppercase tracking-wider text-cyan">
          {category}
        </span>

        <h3 className="mt-2 text-xl font-semibold">
          <Link href={detailHref} className="transition-colors hover:text-cyan">
            {title}
          </Link>
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-muted">{summary}</p>

        {/* Skill this project demonstrates */}
        <p className="mt-3 text-xs text-faint">
          <span className="text-muted">{labels.demonstrates}</span> {skill}
        </p>

        {/* Tech badges */}
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {shown.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border bg-surface-2 px-2 py-1 text-xs text-muted"
            >
              {t}
            </li>
          ))}
          {extra > 0 && (
            <li className="rounded-md border border-border bg-surface-2 px-2 py-1 text-xs text-faint">
              +{extra}
            </li>
          )}
        </ul>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <Link
            href={detailHref}
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            {labels.viewCase}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <div className="flex items-center gap-1.5">
            {hasRepo && (
              <IconLink href={links.repo!} label={`${title} — GitHub`}>
                <GithubIcon className="h-4 w-4" />
              </IconLink>
            )}
            {hasDemo && (
              <IconLink href={links.demo!} label={`${title} — Demo`}>
                <ExternalLink className="h-4 w-4" />
              </IconLink>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function IconLink({
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
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-cyan/40 hover:text-foreground"
    >
      {children}
    </a>
  );
}
