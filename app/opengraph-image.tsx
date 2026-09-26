import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { heroData, siteConfig } from "@/data/portfolio";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#14171c";
const SURFACE = "#1c2026";
const INK = "#f2f3ef";
const MUTED = "#a3abb6";
const ACCENT = "#3dcdb8";
const BORDER = "#31363f";

export default async function Image() {
  const profilePath = join(
    process.cwd(),
    "public",
    siteConfig.profileImage.replace(/^\//, ""),
  );
  const profileImage = await readFile(profilePath);
  const profileSrc = `data:image/jpeg;base64,${profileImage.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: BG,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "monospace",
        }}
      >
        {/* Left: text block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            flex: 1,
            maxWidth: 720,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 18,
              color: ACCENT,
              fontWeight: 700,
            }}
          >
            <span>commit {heroData.hash}</span>
            <span style={{ color: MUTED, fontWeight: 400 }}>
              HEAD -&gt; main
            </span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 58,
              fontWeight: 700,
              color: INK,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            {siteConfig.name}
          </div>

          {/* Tagline */}
          <div style={{ fontSize: 26, color: MUTED, lineHeight: 1.35 }}>
            {heroData.tagline.replace("\n", " ")}
          </div>

          {/* URL pill */}
          <div
            style={{
              marginTop: 8,
              display: "flex",
              alignItems: "center",
              border: `1px solid ${BORDER}`,
              background: SURFACE,
            color: ACCENT,
            padding: "10px 20px",
            borderRadius: 6,
            fontSize: 18,
            fontWeight: 500,
            }}
          >
            {siteConfig.url}
          </div>
        </div>

        {/* Right: avatar */}
        <img
          src={profileSrc}
          alt={siteConfig.name}
          width={220}
          height={220}
          style={{
            borderRadius: 8,
            objectFit: "cover",
            border: `2px solid ${BORDER}`,
            marginLeft: 56,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
