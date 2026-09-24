import { Radio, Smartphone, Hammer, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  realtime: Radio,
  mobile: Smartphone,
};

/**
 * "Browser window" visual for a project card.
 * If `src` is given, shows a real screenshot inside the frame;
 * otherwise shows a clean icon placeholder (icon by `icon` key) on the
 * accent gradient — used for projects still in progress.
 */
export default function ProjectMockup({
  title,
  accent,
  src,
  icon,
  className = "",
}: {
  title: string;
  accent: "cyan" | "violet";
  src?: string;
  icon?: string;
  className?: string;
}) {
  const glow =
    accent === "cyan"
      ? "from-cyan/25 via-cyan/5"
      : "from-violet/25 via-violet/5";
  const Icon = (icon && iconMap[icon]) || Hammer;

  return (
    <div
      className={`overflow-hidden rounded-xl border border-border bg-surface-2 ${className}`}
    >
      {/* Window bar */}
      <div className="flex items-center gap-1.5 border-b border-border bg-surface px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
      </div>

      {/* "Screen" */}
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={title}
          loading="lazy"
          className="aspect-[2/1] w-full object-cover object-top"
        />
      ) : (
        <div
          className={`relative grid aspect-[2/1] place-items-center overflow-hidden bg-gradient-to-br ${glow} to-transparent`}
        >
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="relative grid h-16 w-16 place-items-center rounded-2xl border border-border bg-surface/70 text-cyan shadow-[0_8px_40px_-12px_var(--glow-cyan)] backdrop-blur">
            <Icon className="h-7 w-7" strokeWidth={1.5} />
          </div>
        </div>
      )}
    </div>
  );
}
