"use client";

import { motion, type Variants } from "motion/react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/content/site";
import type { Dictionary } from "@/content/types";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero({
  data,
  cvHref,
}: {
  data: Dictionary["hero"];
  cvHref: string;
}) {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center justify-center pt-16"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-x flex flex-col items-center text-center"
      >
        {/* Availability pill */}
        <motion.div variants={item}>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            {data.pill}
          </span>
        </motion.div>

        {/* Name / headline */}
        <motion.h1
          variants={item}
          className="mt-6 text-balance text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
        >
          {data.greeting} <span className="text-gradient">{site.name}</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={item}
          className="mt-4 flex items-center gap-2 font-mono text-lg text-cyan sm:text-xl"
        >
          <Sparkles className="h-5 w-5" />
          {data.role}
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="mt-5 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg"
        >
          {data.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#proyectos"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-deep to-violet-deep px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_var(--glow-cyan)] transition-transform hover:scale-[1.03]"
          >
            {data.ctaProjects}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-hover inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold"
          >
            <Download className="h-4 w-4" />
            {data.ctaCv}
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="mt-8 flex items-center gap-4">
          <SocialIcon href={site.links.github} label="GitHub">
            <GithubIcon className="h-5 w-5" />
          </SocialIcon>
          <SocialIcon href={site.links.linkedin} label="LinkedIn">
            <LinkedinIcon className="h-5 w-5" />
          </SocialIcon>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-cyan"
          />
        </div>
      </motion.div>
    </section>
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
      className="glow-hover grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-muted transition-colors hover:text-foreground"
    >
      {children}
    </a>
  );
}
