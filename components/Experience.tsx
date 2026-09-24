import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import type { Dictionary } from "@/content/types";

export default function Experience({
  data,
}: {
  data: Dictionary["experience"];
}) {
  return (
    <section id="experiencia" className="scroll-mt-20 py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading eyebrow={data.eyebrow} title={data.heading} />

        <div className="mt-10 space-y-5">
          {data.items.map((job, i) => (
            <Reveal key={`${job.company}-${job.period}`} delay={i * 0.1}>
              <article className="glass glow-hover rounded-2xl p-6 sm:p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-surface text-cyan">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">
                        {job.role}{" "}
                        <span className="text-muted">— {job.company}</span>
                      </h3>
                      <p className="mt-1 text-sm text-faint">{job.context}</p>
                    </div>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-cyan sm:mt-1.5">
                    {job.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted sm:text-base">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {job.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-border bg-surface-2 px-2 py-1 text-xs text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
