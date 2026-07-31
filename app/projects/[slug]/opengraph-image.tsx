import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const title = project?.title ?? "Project";
  const tags = project?.tags.slice(0, 3).join(" · ") ?? "Case study";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #14532d 0%, #0969DA 100%)",
          padding: 64,
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, fontWeight: 600, opacity: 0.85, textTransform: "uppercase" }}>
          Project · {tags}
        </div>
        <div style={{ display: "flex", fontSize: 52, fontWeight: 700, lineHeight: 1.15, maxWidth: 1000 }}>
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 24, opacity: 0.8 }}>{siteConfig.author}</div>
      </div>
    ),
    { ...size },
  );
}
