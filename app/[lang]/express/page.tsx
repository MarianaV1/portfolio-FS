import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AuroraBackground from "@/components/AuroraBackground";
import ExpressView from "@/components/express/ExpressView";
import { isLocale, toLocale } from "@/content/i18n";
import { getDictionary } from "@/content/dictionary";
import { getProjects } from "@/content/projects";
import { getExpressLabels } from "@/content/express";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = toLocale(lang);
  const dict = getDictionary(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: { canonical: `/${locale}/express` },
    // Alternate presentation of the same content — keep it out of the index so
    // it doesn't compete with the main portfolio for SEO.
    robots: { index: false, follow: true },
  };
}

export default async function ExpressPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang;
  const dict = getDictionary(locale);
  const projects = getProjects(locale);
  const labels = getExpressLabels(locale);

  return (
    <>
      <AuroraBackground />
      <ExpressView
        locale={locale}
        dict={dict}
        projects={projects}
        labels={labels}
      />
    </>
  );
}
