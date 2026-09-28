import { createFileRoute } from "@tanstack/react-router";
import { ARTWORKS } from "@/data/artworksData";
import { ARTIST_INFO, CV_DATA } from "@/data/portfolioData";
import { resolveAsset } from "@/utils/resolveAsset";
import { DocShell, DocSheet } from "@/components/DocumentSheet";
import { RiemannManifoldFigure } from "@/components/RiemannManifoldFigure";
import type { Artwork } from "@/types/portfolio";
import gladstoneSpiralStaircase from "@/assets/studios/gladstone-spiral-staircase-sharp.jpg.asset.json";
import plantParadiseLiving from "@/assets/studios/plant-paradise-living.png.asset.json";
import midcenturyLoftStudio from "@/assets/studios/midcentury-loft.jpg.asset.json";
import skylightLoftFlorence from "@/assets/studios/skylight-loft-77-florence.jpg.asset.json";
import greenAndGoldStudio from "@/assets/studios/green-and-gold-studio.jpg.asset.json";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "10-Page Portfolio (PDF) — Gwendalynn Lim 林婉婷" },
      {
        name: "description",
        content:
          "Ten-page landscape portfolio of Gwendalynn Lim Wan Ting, ready to save as PDF for residency submission.",
      },
      { property: "og:title", content: "10-Page Portfolio — Gwendalynn Lim 林婉婷" },
      {
        property: "og:description",
        content: "Cover, six selected works, two applied-practice contexts and CV in a ten-page landscape portfolio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const TOTAL = 10;
const MOTION_AND_STILL_LOGO = "/assets/ART_Images/motion-and-still_2021_logo.webp";

const STUDIO_PRACTICE = [
  {
    url: "/assets/ART_Images/toronto-raptors_2022_studio.webp",
    title: "Toronto Raptors production",
    note: "Motion and Still commercial shoot, 2022",
  },
  {
    url: "/assets/ART_Images/studio_20160510_194231.webp",
    title: "Startup Grind video production",
    note: "Toronto startup-incubator scene, 2016",
  },
  {
    url: "/assets/ART_Images/studio_20180821_150700.webp",
    title: "Kerry’s Place Autism Services",
    note: "Gwendalynn Lim on set, 2018",
  },
  {
    url: "/assets/ART_Images/studio_20190527_201216.webp",
    title: "Music-video production",
    note: "Midcentury Loft, 2019",
  },
];

const STUDIO_STEWARDSHIP = [
  {
    url: "/assets/ART_Images/bellwoods-studio_2018.webp",
    title: "Bellwoods Studio",
    note: "Tecumseth Street shooting space, 2018",
  },
  {
    url: plantParadiseLiving.url,
    title: "Plant Paradise Studio",
    note: "Wade Avenue brick-and-beam studio, 2018",
  },
  {
    url: midcenturyLoftStudio.url,
    title: "Midcentury Loft",
    note: "Plant-filled live/work studio and Sofar Sounds venue, 2019",
  },
  {
    url: skylightLoftFlorence.url,
    title: "Skylight Loft",
    note: "Unit 301, 77 Florence Street, 2020–2021",
  },
  {
    url: greenAndGoldStudio.url,
    title: "Green & Gold Studio",
    note: "52 St Lawrence St live/work studio, 2020–2024",
  },
  {
    url: gladstoneSpiralStaircase.url,
    title: "Gladstone Loft",
    note: "53 Gladstone Ave live/work studio, 2022–2023",
  },
];

function Sheet({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <DocSheet n={n} total={TOTAL} label="Portfolio · Selected Works">
      {children}
    </DocSheet>
  );
}

const EVENT_SECTIONS: Record<string, { heading: string; body: string }[]> = {
  "the-ultimate-selfie": [
    {
      heading: "Toronto Design Offsite (TO DO) · 2013",
      body: "The Ultimate Selfie debuted as a featured installation of the Toronto Design Offsite festival; the afterparty poster marks its closing night.",
    },
    {
      heading: "IIDEX · 2014",
      body: "The interactive pavilion architecture was exhibited separately at IIDEX, Metro Toronto Convention Centre.",
    },
  ],
  "riemann-manifold": [
    {
      heading: "SAM Residencies · Cycle 4 (2027/2028) — Proposal",
      body: "Submitted to the Singapore Art Museum under the Beyond Human / Interdependence strand: a six-month residency to build, calibrate, and test the installation at full scale — spectral eigenvalues rastered by 4K laser onto a matte obsidian plinth and translated into 20–120 Hz acoustic pressure fields.",
    },
    {
      heading: "Open Verification Suite",
      body: "The underlying mathematics is published with a reproducible verification notebook and the Conformal Inward Sighting Method (CISM) engine, so every claimed zero and resonance can be re-run independently.",
    },
  ],
};

function PlatePage({ art, plate, n }: { art: Artwork; plate: number; n: number }) {
  const imgs = art.images.filter((i) => i.url && !/banner/i.test(i.url)).slice(0, 3);
  const [main, ...rest] = imgs;
  const text = (
    <>
      <p className="font-mono-code text-[8pt] tracking-widest uppercase text-muted-foreground">
        Plate {String(plate).padStart(2, "0")} · {art.year}
      </p>
      <h2 className="font-serif-display text-[22pt] leading-tight mt-[2mm]">{art.title}</h2>
      <p className="font-serif-display italic text-[11pt] text-muted-foreground mt-[1mm] leading-snug">
        {art.subtitle}
      </p>
      <dl className="mt-[4mm] font-mono-code text-[7.5pt] leading-relaxed space-y-[1mm]">
        <div><dt className="inline text-muted-foreground">Medium — </dt><dd className="inline">{art.medium}</dd></div>
        <div><dt className="inline text-muted-foreground">Dimensions — </dt><dd className="inline">{art.dimensions}</dd></div>
        {art.id !== "white-geisha-silver-aurelia" && (
          <div><dt className="inline text-muted-foreground">Venue — </dt><dd className="inline">{art.venue}, {art.city}</dd></div>
        )}
      </dl>
      <p className="mt-[4mm] text-[9pt] leading-relaxed">{art.summary}</p>
      {EVENT_SECTIONS[art.id]?.map((s) => (
        <div key={s.heading} className="mt-[4mm]">
          <p className="font-mono-code text-[7.5pt] tracking-widest uppercase text-muted-foreground">{s.heading}</p>
          <p className="mt-[1mm] text-[9pt] leading-relaxed">{s.body}</p>
        </div>
      ))}
    </>
  );
  const uncropped = art.id === "white-geisha-silver-aurelia" || art.id === "a-perfect-world";
  const imgFit = uncropped ? "object-contain" : "object-cover";
  const diptychCaptions = [
    {
      name: "White Geisha",
      line: "Noise Singapore Festival Exhibition, National Arts Council (Singapore) · ION Orchard, Basement 4 · 16 February – 4 March 2012",
    },
    {
      name: "Silver Aurelia",
      line: "Noise Singapore Festival Exhibition, National Arts Council (Singapore) · ION Orchard, Basement 4 · 16 February – 4 March 2012",
    },
  ];
  return (
    <Sheet n={n}>
      {art.id === "riemann-manifold" ? (
        /* Riemann Manifold — the original plate drawing, recreated as a live graphical representation */
        <div className="h-full grid grid-cols-[1.55fr_1fr] gap-[8mm]">
          <figure className="min-h-0 flex flex-col">
            <div className="relative min-h-0 flex-1 border border-border bg-background overflow-hidden">
              <RiemannManifoldFigure className="absolute inset-0 h-full w-full" />
              <div className="absolute top-[3mm] left-[3mm] font-mono-code text-[6.5pt] uppercase tracking-[0.12em] text-foreground/80">
                <span className="mr-[1.5mm] inline-block size-[1.5mm] rounded-full bg-highlight align-middle" />
                Riemann Spectral Topology · Critical Strip Re(s) = 1/2 · GUE Quantum Chaos
              </div>
              <div className="absolute bottom-[3mm] right-[3mm] font-mono-code text-[6.5pt] text-muted-foreground">
                Eigenvalue spectral resonance: valid — evecount/riemann_hypothesis
              </div>
            </div>
            <figcaption className="mt-[2.5mm] font-mono-code text-[6.5pt] leading-snug text-muted-foreground">
              Graphical representation — live Riemannian vector projection: manifold surface lines, eigenvalue node cluster, and the obsidian projection plinth.
            </figcaption>
          </figure>
          <div className="min-h-0 flex flex-col overflow-hidden">
            {text}
            <div className="mt-[4mm]">
              <p className="font-mono-code text-[7.5pt] tracking-widest uppercase text-muted-foreground">
                Documentation & Open Verification
              </p>
              <ul className="mt-[1.5mm] space-y-[1mm] font-mono-code text-[7pt] leading-relaxed">
                <li>
                  <a
                    href="https://github.com/evecount/riemann_hypothesis/blob/main/SAM_RESIDENCY_STATEMENT.md"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2"
                  >
                    SAM Residency Statement — Cycle 4 (2027/2028)
                  </a>
                </li>
                <li>
                  <a
                    href="https://evecount.github.io/riemann_hypothesis/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2"
                  >
                    Live scientific portal — evecount.github.io/riemann_hypothesis
                  </a>
                </li>
                <li className="text-muted-foreground">
                  Verification suite: RIEMANN_PROOF_VALIDATION_FINAL.ipynb · CISM Engine (SUBMISSION_PACKAGE)
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : imgs.length === 0 ? (
        <div className="h-full flex flex-col justify-center overflow-hidden">{text}</div>
      ) : art.id === "white-geisha-silver-aurelia" ? (
        /* Diptych plate — both works side by side, full height, never cropped */
        <div className="h-full grid grid-cols-[1.7fr_1fr] gap-[8mm] min-h-0">
          <div className="min-h-0 grid grid-cols-2 gap-[4mm]">
            {imgs.map((im, i) =>
              im.url ? (
                <figure key={im.id} className="min-h-0 flex flex-col">
                  <div className="min-h-0 flex-1 relative">
                    <img
                      src={resolveAsset(im.url)}
                      alt={im.title}
                      className="absolute inset-0 w-full h-full object-contain object-bottom"
                    />
                  </div>
                  <figcaption className="mt-[2.5mm]">
                    <p className="font-serif-display text-[10.5pt] leading-tight">
                      {diptychCaptions[i]?.name ?? im.title}
                    </p>
                    <p className="font-mono-code text-[6.5pt] text-muted-foreground mt-[1mm] leading-snug">
                      {diptychCaptions[i]?.line}
                    </p>
                  </figcaption>
                </figure>
              ) : null,
            )}
          </div>
          <div className="min-h-0 flex flex-col overflow-hidden">{text}</div>
        </div>
      ) : (
        <div className="h-full grid grid-cols-[1.55fr_1fr] gap-[8mm]">
          <div className={`min-h-0 grid gap-[3mm] ${rest.length === 0 ? "grid-rows-1" : "grid-rows-[2fr_1fr]"}`}>
            {main?.url && (
              <img src={resolveAsset(main.url)} alt={main.title} className={`w-full h-full ${imgFit} min-h-0`} />
            )}
            <div className={rest.length === 1 ? 'grid grid-cols-1 gap-[3mm] min-h-0' : 'grid grid-cols-2 gap-[3mm] min-h-0'}>
              {rest.map((im) =>
                im.url ? (
                  <img key={im.id} src={resolveAsset(im.url)} alt={im.title} className="w-full h-full object-cover min-h-0" />
                ) : null,
              )}
            </div>
          </div>
          <div className="min-h-0 flex flex-col overflow-hidden">{text}</div>
        </div>
      )}
    </Sheet>
  );
}

function ContextPage({
  n,
  kicker,
  title,
  description,
  images,
}: {
  n: number;
  kicker: string;
  title: string;
  description: string;
  images: typeof STUDIO_PRACTICE;
}) {
  return (
    <Sheet n={n}>
      <div className="h-full grid grid-cols-[0.72fr_1.28fr] gap-[8mm]">
        <div className="flex flex-col justify-center">
          {n === 8 && (
            <img
              src={resolveAsset(MOTION_AND_STILL_LOGO)}
              alt="Motion and Still studio logo"
              className="size-[19mm] object-contain mb-[6mm]"
            />
          )}
          <p className="font-mono-code text-[8pt] uppercase tracking-widest text-highlight">{kicker}</p>
          <h2 className="font-serif-display text-[25pt] leading-tight mt-[3mm]">{title}</h2>
          <p className="font-serif-display italic text-[11pt] leading-relaxed mt-[5mm]">{description}</p>
        </div>
        <div
          className={`grid grid-cols-2 gap-[3mm] min-h-0 ${
            images.length >= 7 ? "grid-rows-[1.15fr_1fr_1fr_1fr]" : images.length > 4 ? "grid-rows-3" : "grid-rows-2"
          }`}
        >
          {images.map((image, i) => (
            <figure
              key={image.url}
              className={`relative min-h-0 overflow-hidden bg-muted ${images.length >= 7 && i === 0 ? "col-span-2" : ""}`}
            >
              <img src={resolveAsset(image.url)} alt={image.title} className="h-full w-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-background/90 px-[3mm] py-[2mm]">
                <p className="font-serif-display text-[10pt] leading-tight">{image.title}</p>
                <p className="font-mono-code text-[6.5pt] text-muted-foreground mt-[0.5mm]">{image.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Sheet>
  );
}

function PortfolioPage() {
  const works = [...ARTWORKS.slice(0, 5), ARTWORKS.find((art) => art.id === "riemann-manifold")].filter(
    (art): art is Artwork => Boolean(art),
  );
  const cover = "/assets/ART_Images/fat-2012_gwen-portrait-at-booth.webp";
  const exhibitions = CV_DATA.filter((c) => c.category === "exhibitions").slice(0, 8);
  const education = CV_DATA.filter((c) => c.category === "education").slice(0, 3);
  const talks = CV_DATA.filter((c) => c.category === "talks").slice(0, 3);

  return (
    <DocShell title="Portfolio" pages={10} downloadLabel="Download Portfolio PDF (10 pages)">
        {/* 1 — Cover & statement */}
        <Sheet n={1}>
          <div className="h-full grid grid-cols-[1fr_1.2fr] gap-[10mm]">
            {cover && <img src={resolveAsset(cover)} alt="" className="w-full h-full object-cover min-h-0" />}
            <div className="flex flex-col justify-center min-h-0 overflow-hidden">
              <p className="font-mono-code text-[8pt] tracking-widest uppercase text-muted-foreground">
                Portfolio · Selected Works {ARTIST_INFO.timeline}
              </p>
              <h1 className="font-serif-display text-[34pt] leading-none mt-[4mm]">{ARTIST_INFO.name}</h1>
              <p className="font-serif-display text-[20pt] mt-[1mm]">{ARTIST_INFO.chineseName}</p>
              <p className="font-mono-code text-[8pt] mt-[3mm] text-muted-foreground">
                {ARTIST_INFO.role} · {ARTIST_INFO.location}
              </p>
              <h2 className="font-serif-display text-[13pt] mt-[8mm]">Artist Statement</h2>
              {ARTIST_INFO.statement.split("\n\n").map((p, i) => (
                <p key={i} className="text-[9pt] leading-relaxed mt-[2mm]">{p}</p>
              ))}
            </div>
          </div>
        </Sheet>

        {/* 2–7 — Selected artwork plates */}
        {works.map((art, i) => (
          <PlatePage key={art.id} art={art} plate={i + 1} n={i + 2} />
        ))}

        <ContextPage
          n={8}
          kicker="Applied Practice · 2011–2024"
          title="Motion and Still: Commercial Production"
          description="A production practice built for direct collaboration: from Toronto’s startup-incubator scene to national organizations, cultural clients, and major commercial campaigns. These photographs document the working environments, crews, lighting systems, and adaptable sets behind that practice."
          images={STUDIO_PRACTICE}
        />

        <ContextPage
          n={9}
          kicker="Studio Lineage · Toronto"
          title="Spaces as Creative Infrastructure"
          description="Across overlapping studios, Lim treated space as both production infrastructure and a shared cultural resource. The studios supported commissioned work alongside artist critiques, performances, fundraisers, pro bono shoots, equipment sharing, and community access."
          images={STUDIO_STEWARDSHIP}
        />

        {/* 10 — CV highlights */}
        <Sheet n={10}>
          <div className="h-full grid grid-cols-2 gap-[10mm] overflow-hidden">
            <div>
              <h2 className="font-serif-display text-[20pt]">Curriculum Vitae — Highlights</h2>
              <h3 className="font-mono-code text-[8pt] uppercase tracking-widest text-muted-foreground mt-[5mm]">Selected Exhibitions & Works</h3>
              <ul className="mt-[2mm] space-y-[1.5mm] text-[8.5pt]">
                {exhibitions.map((e) => (
                  <li key={e.id}>
                    <span className="font-mono-code text-muted-foreground mr-2">{e.year}</span>
                    <span className="font-semibold">{e.title}</span> — {e.venueOrPublisher}, {e.location}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono-code text-[8pt] uppercase tracking-widest text-muted-foreground mt-[12mm]">Education</h3>
              <ul className="mt-[2mm] space-y-[1.5mm] text-[8.5pt]">
                {education.map((e) => (
                  <li key={e.id}>
                    <span className="font-mono-code text-muted-foreground mr-2">{e.year}</span>
                    <span className="font-semibold">{e.title}</span> — {e.venueOrPublisher}
                  </li>
                ))}
              </ul>
              <h3 className="font-mono-code text-[8pt] uppercase tracking-widest text-muted-foreground mt-[5mm]">Talks & Teaching</h3>
              <ul className="mt-[2mm] space-y-[1.5mm] text-[8.5pt]">
                {talks.map((e) => (
                  <li key={e.id}>
                    <span className="font-mono-code text-muted-foreground mr-2">{e.year}</span>
                    <span className="font-semibold">{e.title}</span> — {e.venueOrPublisher}
                  </li>
                ))}
              </ul>
              <h3 className="font-mono-code text-[8pt] uppercase tracking-widest text-muted-foreground mt-[5mm]">Research Focus</h3>
              <p className="text-[8.5pt] mt-[2mm] leading-relaxed">{ARTIST_INFO.focus}</p>
            </div>
          </div>
        </Sheet>
    </DocShell>
  );
}
