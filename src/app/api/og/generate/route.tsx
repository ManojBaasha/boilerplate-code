import { ImageResponse } from "next/og";
import { baseURL, product } from "@/resources";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || product.name;

  async function loadGoogleFont(font: string) {
    const fontUrl = `https://fonts.googleapis.com/css2?family=${font}`;
    const css = await (await fetch(fontUrl)).text();
    const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);

    if (resource) {
      const response = await fetch(resource[1]);
      if (response.status === 200) {
        return await response.arrayBuffer();
      }
    }

    throw new Error("failed to load font data");
  }

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "6rem",
        background: "#0f0a1e",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "3rem",
          fontStyle: "normal",
          color: "white",
        }}
      >
        <span
          style={{
            fontSize: "5rem",
            lineHeight: "6rem",
            letterSpacing: "-0.03em",
            whiteSpace: "pre-wrap",
            overflow: "hidden",
          }}
        >
          {title}
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <span
            style={{
              fontSize: "3rem",
              lineHeight: "3.5rem",
              opacity: "0.9",
            }}
          >
            {product.name}
          </span>
          <span
            style={{
              fontSize: "1.5rem",
              lineHeight: "2rem",
              opacity: "0.6",
            }}
          >
            {product.tagline}
          </span>
        </div>
      </div>
    </div>,
    {
      width: 1280,
      height: 720,
      fonts: [
        {
          name: "Geist",
          data: await loadGoogleFont("Geist:wght@400"),
          style: "normal",
        },
      ],
    },
  );
}
