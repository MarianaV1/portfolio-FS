import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { toLocale } from "@/content/i18n";
import { getProject } from "@/content/projects";
import { site } from "@/content/site";

// Needs the Node runtime to read screenshot files from disk.
export const runtime = "nodejs";
export const alt = "Proyecto — Mariana Vega";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadImage(src: string): Promise<string | null> {
  try {
    const rel = src.replace(/^\//, "");
    const buf = await readFile(join(process.cwd(), "public", rel));
    return `data:image/png;base64,${buf.toString("base64")}`;
  } catch {
    return null;
  }
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const project = getProject(toLocale(lang), slug);

  // Prefer the "day panel" style shot (2nd) as the hero, else the first.
  const shot = project?.screenshots?.[1] ?? project?.screenshots?.[0];
  const shotData = shot ? await loadImage(shot.src) : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "64px",
          backgroundColor: "#08080c",
          backgroundImage:
            "radial-gradient(circle at 12% 0%, rgba(168,85,247,0.32), transparent 42%), radial-gradient(circle at 100% 100%, rgba(34,211,238,0.28), transparent 45%)",
          color: "#eaeaf0",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "52px",
              height: "52px",
              borderRadius: "13px",
              border: "1px solid rgba(255,255,255,0.14)",
              backgroundColor: "#0e0e16",
              color: "#22d3ee",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            {site.initials}
          </div>
          <div style={{ fontSize: "24px", color: "#a1a1b5" }}>{site.name}</div>
        </div>

        {/* Category + title */}
        <div style={{ display: "flex", flexDirection: "column", marginTop: "28px" }}>
          <div
            style={{
              fontSize: "22px",
              fontWeight: 600,
              color: "#22d3ee",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            {project?.category ?? "Proyecto"}
          </div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.08,
              marginTop: "10px",
              maxWidth: shotData ? "560px" : "1000px",
            }}
          >
            {project?.title ?? site.name}
          </div>
        </div>

        {/* Screenshot (if available), framed */}
        {shotData && (
          <div
            style={{
              display: "flex",
              position: "absolute",
              right: "64px",
              top: "150px",
              width: "520px",
              height: "300px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.14)",
              overflow: "hidden",
              boxShadow: "0 30px 80px -20px rgba(34,211,238,0.35)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={shotData}
              width={520}
              height={300}
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
        )}

        {/* Bottom accent bar */}
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            height: "8px",
            width: "240px",
            borderRadius: "999px",
            backgroundImage: "linear-gradient(90deg, #06b6d4, #7c3aed)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
