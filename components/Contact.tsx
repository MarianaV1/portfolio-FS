"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { site } from "@/content/site";
import type { Dictionary } from "@/content/types";

export default function Contact({ data }: { data: Dictionary["contact"] }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // No backend yet: compose a mailto so the form works out of the box.
  // Later this can POST to a Route Handler / Resend / Formspree instead.
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`${data.mailSubject} — ${name}`);
    const body = encodeURIComponent(
      `${data.labelName}: ${name}\n${data.labelEmail}: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contacto" className="scroll-mt-20 py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading eyebrow={data.eyebrow} title={data.heading} />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* Intro + direct links */}
          <Reveal className="space-y-6">
            <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
              {data.text}
            </p>

            <a
              href={`mailto:${site.email}`}
              className="glow-hover inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium"
            >
              <Mail className="h-5 w-5 text-cyan" />
              {site.email}
            </a>

            <div className="flex items-center gap-3 pt-2">
              <SocialIcon href={site.links.github} label="GitHub">
                <GithubIcon className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href={site.links.linkedin} label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </SocialIcon>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="glass space-y-4 rounded-2xl p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label={data.labelName}>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={data.placeholderName}
                    className={inputClass}
                  />
                </Field>
                <Field label={data.labelEmail}>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={data.placeholderEmail}
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field label={data.labelMessage}>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={data.placeholderMessage}
                  className={`${inputClass} resize-y`}
                />
              </Field>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-deep to-violet-deep px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_var(--glow-cyan)] transition-transform hover:scale-[1.02]"
              >
                {data.submit}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <p className="text-center text-xs text-faint">{data.note}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-faint outline-none transition-colors focus:border-cyan/50 focus:ring-2 focus:ring-cyan/20";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted">
        {label}
      </span>
      {children}
    </label>
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
