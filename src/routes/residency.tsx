import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SamResidencyPanel } from "@/components/SamResidencyPanel";
import { useSiteChrome } from "@/components/SiteChrome";

export const Route = createFileRoute("/residency")({
  component: ResidencyPage,
  head: () => ({
    meta: [
      { title: "Future Work & Residency Proposal 2026 — Gwendalynn Lim 林婉婷" },
      {
        name: "description",
        content:
          "The SAM residency proposal and forthcoming research directions of Gwendalynn Lim: frontier vector topologies and next-generation installation work.",
      },
      {
        property: "og:title",
        content: "Future Work & Residency Proposal 2026 — Gwendalynn Lim 林婉婷",
      },
      {
        property: "og:description",
        content:
          "The SAM residency proposal and forthcoming research directions: frontier vector topologies and next-generation installation work.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/residency" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/residency" }],
  }),
});

const TAB_ROUTES: Record<string, string> = {
  works: "/portfolio",
  statement: "/statement",
  timeline: "/timeline",
  cv: "/cv",
  "sam-residency": "/residency",
};

function ResidencyPage() {
  const navigate = useNavigate();
  const chrome = useSiteChrome();

  return (
    <SamResidencyPanel
      onSelectArtworkById={(id) =>
        { void id; navigate({ to: "/portfolio" }); }
      }
      onOpenContact={chrome.openContact}
      onNavigateToTab={(tab) => navigate({ to: TAB_ROUTES[tab] ?? "/" })}
    />
  );
}
