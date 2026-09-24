import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/content/site";
import type { Locale } from "@/content/i18n";
import type { Dictionary } from "@/content/types";

export default function Footer({
  locale,
  nav,
  data,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
  data: Dictionary["footer"];
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border">
      <div className="container-x py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface font-mono text-sm font-bold text-gradient">
                {site.initials}
              </span>
              <span className="font-medium">{site.name}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {data.role} · {data.tagline}
            </p>
          </div>

          {/* Nav + socials */}
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <nav className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-faint">
                {data.navTitle}
              </span>
              {nav.map((item) => (
                <a
                  key={item.hash}
                  href={`/${locale}#${item.hash}`}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-faint">
                {data.followTitle}
              </span>
              <div className="mt-1 flex items-center gap-3">
                <a
                  href={site.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-muted transition-colors hover:text-foreground"
                >
                  <GithubIcon className="h-4.5 w-4.5" />
                </a>
                <a
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-muted transition-colors hover:text-foreground"
                >
                  <LinkedinIcon className="h-4.5 w-4.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-faint">
            © {year} {site.name}. {data.madeWith}
          </p>
          <a
            href={`/${locale}#top`}
            className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-foreground"
          >
            {data.backToTop}
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
