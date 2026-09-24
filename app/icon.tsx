import { ImageResponse } from "next/og";

// Generated browser-tab icon: "MV" monogram on the brand gradient.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "7px",
          backgroundImage: "linear-gradient(135deg, #06b6d4, #7c3aed)",
          color: "#ffffff",
          fontSize: "17px",
          fontWeight: 800,
          letterSpacing: "-1px",
          fontFamily: "sans-serif",
        }}
      >
        MV
      </div>
    ),
    { ...size }
  );
}
