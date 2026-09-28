import { createFileRoute } from "@tanstack/react-router";
import { DocKicker, DocSection, DocSheet, DocShell } from "@/components/DocumentSheet";
import {
  CV_CAPABILITIES,
  CV_AI_COMMUNITY_2026,
  CV_COMMUNITY,
  CV_EDUCATION,
  CV_LEADERSHIP,
  CV_LINKS,
  MOTION_AND_STILL_CLIENTS,
  CV_PRESS,
  CV_ROLE,
  CV_STATEMENT,
  CV_STUDIOS,
  CV_TALKS,
  CV_WEBSITE,
  CV_WORKS,
  type CVItem,
} from "@/data/documentsData";

export const Route = createFileRoute("/cv")({
  component: CVPage,
  head: () => ({
    meta: [
      { title: "Curriculum Vitae — Gwendalynn Lim 林婉婷" },
      {
        name: "description",
        content:
          "Artist CV of Gwendalynn Lim Wan Ting — studio lineage, selected works, education, research leadership, talks and community stewardship, 2006–2026.",
      },
      { property: "og:title", content: "Curriculum Vitae — Gwendalynn Lim 林婉婷" },
      {
        property: "og:description",
        content: "Selected works, education, research leadership, talks and community stewardship, 2006–2026.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const TOTAL = 4;
const LABEL = "Curriculum Vitae";

function Entry({ e, size = "sm" }: { e: CVItem; size?: "xs" | "sm" | "md" }) {
  return (
    <div className={`break-inside-avoid-column grid grid-cols-[17mm_1fr] gap-[3mm] ${size === "md" ? "mb-[3mm]" : size === "xs" ? "mb-[1mm]" : "mb-[1.5mm]"}`}>
      <span className="font-mono-code text-[7.5pt] text-highlight pt-[0.6mm]">{e.year}</span>
      <div>
        <p className={`font-serif-display leading-tight ${size === "md" ? "text-[12pt]" : size === "xs" ? "text-[9.5pt]" : "text-[10.5pt]"}`}>{e.title}</p>
        {e.org && <p className={`font-mono-code text-muted-foreground mt-[0.4mm] ${size === "xs" ? "text-[6.5pt]" : "text-[7pt]"}`}>{e.org}</p>}
        {e.detail && <p className={`${size === "md" ? "text-[7.8pt]" : size === "xs" ? "text-[6.1pt]" : "text-[6.9pt]"} ${size === "xs" ? "leading-[1.22] mt-[0.3mm]" : "leading-[1.35] mt-[0.6mm]"}`}>{e.detail}</p>}
      </div>
    </div>
  );
}

function CVPage() {
  return (
    <DocShell title="Curriculum Vitae" pages={TOTAL} downloadLabel="Download CV PDF (4 pages)">
      <DocSheet n={1} total={TOTAL} label={LABEL}>
        <div className="h-full grid grid-cols-[0.85fr_1fr_1fr] gap-[8mm]">
          <div className="flex flex-col min-h-0">
            <DocKicker>Curriculum Vitae</DocKicker>
            <h1 className="font-serif-display text-[30pt] leading-[0.95] mt-[3mm]">Gwendalynn Lim Wan Ting</h1>
            <p className="font-serif-display text-[16pt] mt-[1mm]">林婉婷</p>
            <p className="font-mono-code text-[7pt] uppercase tracking-[0.15em] text-muted-foreground mt-[3mm] leading-relaxed">
              {CV_ROLE}
            </p>
            <p className="font-mono-code text-[7pt] mt-[1mm]">{CV_WEBSITE}</p>
            <div className="mt-[1.5mm] font-mono-code text-[6.5pt] leading-[1.7] text-muted-foreground">
              {CV_LINKS.map((l) => (
                <p key={l.handle}>
                  <span className="text-foreground">{l.handle}</span>
                  {l.note ? ` — ${l.note}` : ""}
                </p>
              ))}
            </div>
            <h3 className="font-mono-code text-[7.5pt] uppercase tracking-[0.2em] text-muted-foreground border-b border-border pb-[1mm] mt-[4mm] mb-[2mm]">
              Artist & Research Statement
            </h3>
            <p className="font-serif-display italic text-[9.4pt] leading-[1.32]">{CV_STATEMENT}</p>
            <DocSection title="Current AI Architecture & Community Systems (2026)">
              {CV_AI_COMMUNITY_2026.map((e) => (
                <div key={e.title} className="mb-[2.5mm]">
                  <p className="font-mono-code text-[7pt] uppercase tracking-[0.12em]">{e.title} · {e.year}</p>
                  <p className="text-[7.8pt] leading-[1.45] mt-[0.8mm]">{e.detail}</p>
                </div>
              ))}
            </DocSection>
          </div>
          <div className="min-h-0 overflow-hidden">
            <DocSection title="Education">
              {CV_EDUCATION.map((e) => <Entry key={e.title} e={e} />)}
            </DocSection>
            <DocSection title="Technical Capabilities & Mediums">
              {CV_CAPABILITIES.map((c) => (
                <div key={c.title} className="mb-[2.5mm]">
                  <p className="font-mono-code text-[7pt] uppercase tracking-[0.12em]">{c.title}</p>
                  <p className="text-[7.8pt] leading-[1.45] mt-[0.8mm]">{c.text}</p>
                </div>
              ))}
            </DocSection>
          </div>
          <div className="min-h-0 overflow-hidden">
            <DocSection title="Research Leadership & Applied Practice">
              {CV_LEADERSHIP.map((e) => <Entry key={e.title} e={e} />)}
            </DocSection>
            <DocSection title="Press & Photojournalism">
              {CV_PRESS.map((e) => <Entry key={e.title} e={e} />)}
            </DocSection>
          </div>
        </div>
      </DocSheet>

      <DocSheet n={2} total={TOTAL} label={LABEL}>
        <DocSection title="Selected Artworks, Installations & Computational Systems">
          <div className="columns-2 gap-[10mm]">
            {CV_WORKS.map((e) => <Entry key={e.title} e={e} size="md" />)}
          </div>
        </DocSection>
      </DocSheet>

      <DocSheet n={3} total={TOTAL} label={LABEL}>
        <div className="h-full grid grid-cols-2 gap-[10mm]">
          <div className="min-h-0 overflow-hidden">
            <DocSection title="Toronto Studio Lineage">
              <p className="text-[7.8pt] leading-[1.45] mb-[3mm]">
                Formative work at The Lens Factory and Westside Studio preceded a network of overlapping live/work spaces for photography, content creation, art, yoga classes, pop-ups, performances, and community activity.
              </p>
              {CV_STUDIOS.map((e) => <Entry key={e.title} e={e} size="xs" />)}
            </DocSection>
          </div>
          <div className="min-h-0 overflow-hidden">
            <DocSection title="Collective Infrastructure, Stewardship & Mutual Aid">
              {CV_COMMUNITY.map((e) => <Entry key={e.title} e={e} size="xs" />)}
            </DocSection>
            <DocSection title="Lectures & Talks">
              {CV_TALKS.map((e) => <Entry key={e.title} e={e} size="xs" />)}
            </DocSection>
          </div>
        </div>
      </DocSheet>

      <DocSheet n={4} total={TOTAL} label={LABEL}>
        <DocKicker>Selected Operational Record · 2011–2024</DocKicker>
        <div className="mt-[3mm] grid grid-cols-[0.72fr_1.28fr] gap-[12mm]">
          <div>
            <h2 className="font-serif-display text-[28pt] leading-[0.98]">Motion and Still</h2>
            <p className="font-mono-code text-[8pt] uppercase tracking-[0.16em] text-highlight mt-[2mm]">Client roster</p>
            <p className="font-serif-display italic text-[10.5pt] leading-[1.4] mt-[6mm]">
              Motion and Still’s early architecture was shaped by direct, agile production for emerging technology ventures and boutique agencies. That capacity to scale and pivot became the operational bridge to major platforms and enterprise clients.
            </p>
            <p className="text-[7.5pt] leading-[1.5] text-muted-foreground mt-[5mm]">
              Foundational 2014-era campaigns included SkedX, Klothed, and MyCityMuse, alongside agency partnerships with The Siren Group, 2Social, and 88Creative. The wider roster reflects clients serviced across the studio’s working era; individual contract years are not assigned where the surviving archive does not itemize them.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-[9mm] gap-y-[3.5mm] content-start">
            {MOTION_AND_STILL_CLIENTS.map((sector) => (
              <section key={sector.title} className="break-inside-avoid">
                <h3 className="font-mono-code text-[7pt] uppercase tracking-[0.14em] text-muted-foreground border-b border-border pb-[1mm] mb-[1.5mm]">
                  {sector.title}
                </h3>
                <ul className="space-y-[0.7mm]">
                  {sector.clients.map((client) => (
                    <li key={client} className="font-serif-display text-[10pt] leading-[1.15]">{client}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </DocSheet>
    </DocShell>
  );
}
