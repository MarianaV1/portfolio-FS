import Reveal from "@/components/Reveal";

/**
 * Consistent section header: small mono eyebrow + large title.
 */
export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <Reveal>
      <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan">
        <span className="h-px w-6 bg-cyan/60" />
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}
