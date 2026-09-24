import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";
import AuroraBackground from "@/components/AuroraBackground";

export const metadata: Metadata = {
  title: "404 — Mariana Vega",
};

/**
 * Global not-found. There is no root app/layout.tsx, so Next provides the
 * <html>/<body> shell itself — this file must NOT render its own, or the page
 * ends up with two <html> tags (hydration error). globals.css styles that
 * body with the dark theme.
 */
export default function NotFound() {
  return (
    <>
      <AuroraBackground />
      <main className="flex min-h-svh flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-8xl font-bold tracking-tight text-gradient sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-semibold sm:text-3xl">
          Página no encontrada · Page not found
        </h1>
        <p className="mt-3 max-w-md text-balance text-muted">
          El enlace no existe o se movió.
          <br />
          This link doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="glow-hover mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-deep to-violet-deep px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_var(--glow-cyan)] transition-transform hover:scale-[1.03]"
        >
          ← Volver al inicio · Back home
        </Link>
      </main>
    </>
  );
}
