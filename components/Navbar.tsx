"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { locales, type Locale } from "@/content/i18n";
import type { Dictionary } from "@/content/types";

export default function Navbar({
  locale,
  nav,
  quickView,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
  /** Optional discreet link to the compact "express" view. */
  quickView?: { href: string; label: string };
}) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function switchLocale(next: Locale) {
    if (next === locale) return;
    const segments = pathname.split("/");
    // segments[1] is the current locale segment
    segments[1] = next;
    router.push(segments.join("/") || `/${next}`);
  }

  const contactHref = `/${locale}#contacto`;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        {/* Logo */}
        <a href={`/${locale}#top`} className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface font-mono text-sm font-bold text-gradient">
            {site.initials}
          </span>
          <span className="hidden text-sm font-medium text-muted transition-colors group-hover:text-foreground sm:block">
            {site.name}
          </span>
        </a>

        {/* Links */}
        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.hash}>
              <a
                href={`/${locale}#${item.hash}`}
                className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: language toggle + CTA */}
        <div className="flex items-center gap-3">
          {quickView && (
            <a
              href={quickView.href}
              className="group hidden items-center gap-1 text-xs text-faint transition-colors hover:text-foreground md:inline-flex"
              title={quickView.label}
            >
              {quickView.label}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
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

          <a
            href={contactHref}
            className="glow-hover hidden rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium sm:inline-block"
          >
            {nav.find((n) => n.hash === "contacto")?.label}
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
