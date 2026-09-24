import { Rocket, Server, Palette } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import type { Dictionary } from "@/content/types";

const icons = [Rocket, Server, Palette];

export default function About({ data }: { data: Dictionary["about"] }) {
  return (
    <section id="sobre-mi" className="scroll-mt-20 py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading eyebrow={data.eyebrow} title={data.heading} />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          {/* Bio */}
          <Reveal className="space-y-5">
            {data.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-pretty text-base leading-relaxed text-muted sm:text-lg"
              >
                {p}
              </p>
            ))}
          </Reveal>

          {/* Highlight cards */}
          <div className="grid gap-4">
            {data.highlights.map((h, i) => {
              const Icon = icons[i] ?? Rocket;
              return (
                <Reveal key={h.title} delay={i * 0.1}>
                  <div className="glass glow-hover flex gap-4 rounded-2xl p-5">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-surface text-cyan">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{h.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {h.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
