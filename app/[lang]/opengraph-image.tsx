import { ImageResponse } from "next/og";
import { toLocale } from "@/content/i18n";
import { getDictionary } from "@/content/dictionary";
import { site } from "@/content/site";

export const alt = "Mariana Vega — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(toLocale(lang));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#08080c",
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(168,85,247,0.35), transparent 45%), radial-gradient(circle at 100% 100%, rgba(34,211,238,0.30), transparent 45%)",
          color: "#eaeaf0",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: brand badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.14)",
              backgroundColor: "#0e0e16",
              color: "#22d3ee",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            {site.initials}
          </div>
          <div style={{ fontSize: "26px", color: "#a1a1b5" }}>{site.name}</div>
        </div>

        {/* Middle: name + role */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              fontSize: "40px",
              fontWeight: 600,
              color: "#22d3ee",
              marginTop: "12px",
            }}
          >
            {dict.hero.role}
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#a1a1b5",
              marginTop: "20px",
              maxWidth: "900px",
              lineHeight: 1.35,
            }}
          >
            {dict.meta.description}
          </div>
        </div>

        {/* Bottom: accent bar */}
        <div
          style={{
            display: "flex",
            height: "8px",
            width: "260px",
            borderRadius: "999px",
            backgroundImage: "linear-gradient(90deg, #06b6d4, #7c3aed)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
