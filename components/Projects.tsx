import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import type { Locale } from "@/content/i18n";
import type { Dictionary, Project } from "@/content/types";

export default function Projects({
  locale,
  data,
  projects,
}: {
  locale: Locale;
  data: Dictionary["projects"];
  projects: Project[];
}) {
  return (
    <section id="proyectos" className="scroll-mt-20 py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading eyebrow={data.eyebrow} title={data.heading} />
        <Reveal className="mt-4 max-w-2xl">
          <p className="text-base leading-relaxed text-muted">{data.intro}</p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1} className="h-full">
              <ProjectCard
                project={project}
                locale={locale}
                labels={{
                  demonstrates: data.demonstrates,
                  viewCase: data.viewCase,
                  badges: data.badges,
                }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
