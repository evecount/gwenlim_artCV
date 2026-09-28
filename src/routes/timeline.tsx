import { createFileRoute } from "@tanstack/react-router";
import { YearStripTimeline } from "@/components/YearStripTimeline";

export const Route = createFileRoute("/timeline")({
  component: TimelinePage,
  head: () => ({
    meta: [
      { title: "Trajectory Timeline 2008–2026 — Gwendalynn Lim 林婉婷" },
      {
        name: "description",
        content:
          "A chronological trajectory of studio practice, installations, community infrastructure and computational research by Gwendalynn Lim, 2008–2026.",
      },
      { property: "og:title", content: "Trajectory Timeline 2008–2026 — Gwendalynn Lim 林婉婷" },
      {
        property: "og:description",
        content:
          "A chronological trajectory of studio practice, installations, community infrastructure and computational research, 2008–2026.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/timeline" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/timeline" }],
  }),
});

function TimelinePage() {
  return <YearStripTimeline />;
}
