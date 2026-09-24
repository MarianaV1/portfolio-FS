import { Code2, Server, Wrench, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import type { Dictionary } from "@/content/types";

const iconMap: Record<string, LucideIcon> = {
  frontend: Code2,
  backend: Server,
  tools: Wrench,
};

export default function Skills({ data }: { data: Dictionary["skills"] }) {
  return (
    <section id="skills" className="scroll-mt-20 py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading eyebrow={data.eyebrow} title={data.heading} />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.groups.map((group, i) => {
            const Icon = iconMap[group.icon] ?? Code2;
            return (
              <Reveal key={group.title} delay={i * 0.1}>
                <div className="glass glow-hover h-full rounded-2xl p-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface text-cyan">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{group.title}</h3>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-sm text-muted transition-colors hover:border-cyan/40 hover:text-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
