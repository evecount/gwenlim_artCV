import { createFileRoute } from "@tanstack/react-router";
import { DocKicker, DocSheet, DocShell } from "@/components/DocumentSheet";
import { STATEMENT_META as M, STATEMENT_SECTIONS, type StatementBlock } from "@/data/documentsData";

export const Route = createFileRoute("/statement")({
  component: StatementPage,
  head: () => ({
    meta: [
      { title: "Statement of Interest — Gwendalynn Lim 林婉婷" },
      {
        name: "description",
        content:
          "SAM Residencies statement of interest by Gwendalynn Lim: The Riemann Manifold — physical computing, machine symbiosis and the harmonics of prime numbers.",
      },
      { property: "og:title", content: "Statement of Interest — Gwendalynn Lim 林婉婷" },
      {
        property: "og:description",
        content: "The Riemann Manifold: physical computing, machine symbiosis and the harmonics of prime numbers.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const TOTAL = 2;
const LABEL = "Statement of Interest · SAM Residencies";

function Section({ s }: { s: (typeof STATEMENT_SECTIONS)[number] }) {
  return (
    <section className="mb-[4mm]">
      <h2 className="font-serif-display text-[13pt] leading-tight break-after-avoid">
        <span className="text-highlight font-mono-code text-[8pt] mr-[2mm] align-middle">{s.n}</span>
        {s.title}
      </h2>
      {s.blocks.map((b, i) => (
        <Block key={i} b={b} />
      ))}
    </section>
  );
}

function Block({ b }: { b: StatementBlock }) {
  if (b.type === "p") return <p className="text-[8.6pt] leading-[1.5] mt-[1.8mm]">{b.text}</p>;
  const Tag = b.type;
  return (
    <Tag className={`mt-[1.8mm] space-y-[1.4mm] text-[8.6pt] leading-[1.5] pl-[5mm] ${b.type === "ol" ? "list-decimal" : "list-disc"} marker:text-highlight`}>
      {b.items.map((it, i) => (
        <li key={i}>
          {it.lead && <strong className="font-semibold">{it.lead}: </strong>}
          {it.text}
        </li>
      ))}
    </Tag>
  );
}

function StatementPage() {
  const [s1, s2, s3, s4, s5] = STATEMENT_SECTIONS;
  return (
    <DocShell title="Statement of Interest" pages={TOTAL} downloadLabel="Download Statement PDF (2 pages)">
      <DocSheet n={1} total={TOTAL} label={LABEL}>
        <div className="h-full grid grid-cols-[0.8fr_1fr_1fr] gap-[8mm]">
          <div className="flex flex-col min-h-0">
            <DocKicker>Statement of Interest</DocKicker>
            <h1 className="font-serif-display text-[30pt] leading-[0.95] mt-[3mm]">{M.projectTitle}</h1>
            <p className="font-serif-display italic text-[12pt] leading-snug mt-[2mm] text-muted-foreground">
              {M.projectSubtitle}
            </p>
            <dl className="mt-auto font-mono-code text-[7pt] leading-relaxed space-y-[1.6mm] border-t border-border pt-[3mm]">
              {[
                ["Applicant", "Gwendalynn Lim Wan Ting"],
                ["Application ID", M.applicationId],
                ["Programme", M.programme],
                ["Track", M.track],
                ["Primary Strand", M.strand],
                ["Intersections", M.intersections],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="uppercase tracking-[0.15em] text-muted-foreground">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="min-h-0 overflow-hidden">{s1 && <Section s={s1} />}</div>
          <div className="min-h-0 overflow-hidden">{s2 && <Section s={s2} />}</div>
        </div>
      </DocSheet>
      <DocSheet n={2} total={TOTAL} label={LABEL}>
        <div className="h-full grid grid-cols-3 gap-[8mm]">
          <div className="min-h-0 overflow-hidden">{s3 && <Section s={s3} />}</div>
          <div className="min-h-0 overflow-hidden">{s4 && <Section s={s4} />}</div>
          <div className="min-h-0 overflow-hidden flex flex-col">
            {s5 && <Section s={s5} />}
            <p className="mt-auto font-mono-code text-[7pt] uppercase tracking-[0.15em] text-muted-foreground border-t border-border pt-[2mm]">
              Word count · {M.wordCount}
            </p>
          </div>
        </div>
      </DocSheet>
    </DocShell>
  );
}
