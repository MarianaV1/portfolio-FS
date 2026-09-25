import AuroraBackground from "@/components/AuroraBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { notFound } from "next/navigation";
import { isLocale } from "@/content/i18n";
import { getDictionary } from "@/content/dictionary";
import { getProjects } from "@/content/projects";
import { getExpressLabels } from "@/content/express";
import { Analytics } from "@vercel/analytics/next";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang;
  const dict = getDictionary(locale);
  const projects = getProjects(locale);
  const express = getExpressLabels(locale);

  return (
    <>
      <AuroraBackground />
      <Navbar
        locale={locale}
        nav={dict.nav}
        quickView={{ href: `/${locale}/express`, label: express.quickView }}
      />
      <main className="flex flex-1 flex-col">
        <Hero data={dict.hero} cvHref={`/cv-mariana-vega-${locale}.pdf`} />
        <About data={dict.about} />
        <div className="container-x">
          <div className="divider-glow" />
        </div>
        <Experience data={dict.experience} />
        <div className="container-x">
          <div className="divider-glow" />
        </div>
        <Skills data={dict.skills} />
        <div className="container-x">
          <div className="divider-glow" />
        </div>
        <Projects locale={locale} data={dict.projects} projects={projects} />
        <div className="container-x">
          <div className="divider-glow" />
        </div>
        <Contact data={dict.contact} />
        <Analytics />
      </main>
    </>
  );
}
