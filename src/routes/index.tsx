import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";
import { ARTWORKS } from "@/data/artworksData";
import { ARTIST_INFO } from "@/data/portfolioData";
import { resolveAsset } from "@/utils/resolveAsset";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Gwendalynn Lim 林婉婷 — Installation & Media Art, 2010–2026" },
      {
        name: "description",
        content:
          "Gwendalynn Lim Wan Ting — installation, physical computing and media art. Download the 10-page portfolio, read the CV and explore the timeline.",
      },
      { property: "og:title", content: "Gwendalynn Lim 林婉婷 — Installation & Media Art" },
      {
        property: "og:description",
        content: "Download the 10-page portfolio, read the art CV and explore sixteen years of work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const ACTIONS = [
  { to: "/cv", label: "Art CV", note: "Exhibitions, education, talks" },
  { to: "/timeline", label: "Timeline", note: "Sixteen years, year by year" },
] as const;

function Index() {
  const hero = ARTWORKS[0]?.images.find((i) => i.url);
  const strip = ARTWORKS.slice(1, 8)
    .map((a) => ({ a, url: a.images.find((i) => i.url && !/banner/i.test(i.url))?.url }))
    .filter((x) => x.url);

  return (
    <div className="bg-background">
      <section className="grid lg:grid-cols-2 min-h-[calc(100vh-4rem)]">
        <div className="relative bg-muted min-h-[50vh] lg:min-h-0">
          {hero?.url && (
            <img src={resolveAsset(hero.url)} alt={hero.title} className="absolute inset-0 w-full h-full object-cover" />
          )}
          <p className="absolute bottom-4 left-5 font-mono-code text-[10px] uppercase tracking-[0.18em] bg-background/90 px-2 py-1 text-foreground">
            {ARTWORKS[0]?.title}, {ARTWORKS[0]?.year}
          </p>
        </div>

        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-14">
          <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Portfolio · {ARTIST_INFO.timeline}
          </p>
          <h1 className="font-serif-display text-5xl sm:text-6xl leading-[0.95] mt-5 text-foreground">
            Gwendalynn Lim
            <span className="block text-3xl sm:text-4xl mt-2 text-muted-foreground">林婉婷</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/80">{ARTIST_INFO.role}. {ARTIST_INFO.focus}.</p>

          <Link
            to="/portfolio"
            className="group mt-10 flex items-center justify-between gap-4 bg-primary text-primary-foreground px-6 py-5 hover:bg-highlight transition-colors max-w-md"
          >
            <span>
              <span className="block font-serif-display text-2xl">Download Portfolio</span>
              <span className="block font-mono-code text-[11px] uppercase tracking-[0.18em] opacity-70 mt-1">10 pages · PDF · A4 landscape</span>
            </span>
            <Download className="w-6 h-6" />
          </Link>

          <div className="mt-3 grid grid-cols-2 gap-3 max-w-md">
            {ACTIONS.map((a) => (
              <Link key={a.to} to={a.to} className="group border border-border px-5 py-4 hover:border-foreground transition-colors">
                <span className="flex items-center justify-between font-serif-display text-xl text-foreground">
                  {a.label}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="block text-xs text-muted-foreground mt-1">{a.note}</span>
              </Link>
            ))}
          </div>

          <Link to="/statement" className="mt-8 font-mono-code text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-highlight">
            Read the artist statement →
          </Link>
        </div>
      </section>

      <section className="border-t border-border px-5 sm:px-8 py-14 max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-serif-display text-3xl text-foreground">Selected works</h2>
          <Link to="/portfolio" className="font-mono-code text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground">
            View all in portfolio →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {strip.map(({ a, url }) => (
            <Link key={a.id} to="/portfolio" className="group">
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img src={resolveAsset(url!)} alt={a.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <p className="mt-2 text-xs text-foreground leading-snug line-clamp-2">{a.title}</p>
              <p className="font-mono-code text-[10px] text-muted-foreground">{a.year}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
