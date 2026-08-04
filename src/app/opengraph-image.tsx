import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lendo com Jesus — Conheça Jesus um capítulo de cada vez.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "#FAF6EF",
          padding: "90px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#8A6A3D",
            fontWeight: 700,
          }}
        >
          Lendo com Jesus
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 64,
            lineHeight: 1.15,
            color: "#2E241C",
            maxWidth: 900,
          }}
        >
          Conheça Jesus um capítulo de cada vez.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 30,
            fontSize: 26,
            color: "#6B5A48",
            maxWidth: 780,
          }}
        >
          Uma comunidade cristã para ler a Bíblia e crescer junto.
        </div>
      </div>
    ),
    { ...size }
  );
}
