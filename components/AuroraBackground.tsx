/**
 * Fixed, full-viewport ambient background:
 * animated cyan/violet aurora blobs + a fading grid.
 * Purely decorative, sits behind everything.
 */
export default function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Grid, fading toward the top */}
      <div className="absolute inset-0 bg-grid mask-radial opacity-70" />

      {/* Aurora blobs */}
      <div className="absolute left-1/2 top-[-10%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--glow-violet),transparent_60%)] blur-3xl aurora-1" />
      <div className="absolute right-[-10%] top-[10%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,var(--glow-cyan),transparent_60%)] blur-3xl aurora-2" />
      <div className="absolute left-[-5%] top-[40%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,var(--glow-violet),transparent_65%)] blur-3xl aurora-1" />

      {/* Vignette so content stays readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,var(--background)_100%)]" />
    </div>
  );
}
