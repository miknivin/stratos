import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const markBuffer = await readFile(
    join(process.cwd(), "public/brand/logo-mark.png"),
  );
  const markSrc = `data:image/png;base64,${markBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #1f1535 0%, #150e26 60%, #0f0a1c 100%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- satori (ImageResponse) requires plain <img>, next/image is not supported here */}
        <img src={markSrc} width={128} height={125} alt="" />
        <div
          style={{
            marginTop: 40,
            fontSize: 60,
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.02em",
          }}
        >
          Stratos Info Tech
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 30,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 820,
          }}
        >
          Cybersecurity, cloud &amp; IT solutions for modern enterprises
        </div>
      </div>
    ),
    { ...size },
  );
}
