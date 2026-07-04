import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { heroData, siteConfig } from "@/data/portfolio";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#000000",
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
              fontSize: 18,
              color: "#a3a3a3",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
            }}
          >
            {heroData.greeting}
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 26, color: "#d4d4d4", lineHeight: 1.35 }}>
            {heroData.tagline}
          </div>
          <div
            style={{
              marginTop: 12,
              display: "flex",
              alignItems: "center",
              background: "#34d399",
              color: "#000000",
              padding: "14px 28px",
              borderRadius: 6,
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            View Portfolio →
          </div>
        </div>
        <img
          src={profileSrc}
          width={240}
          height={240}
          style={{
            borderRadius: 12,
            objectFit: "cover",
            border: "3px solid #404040",
            marginLeft: 48,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
