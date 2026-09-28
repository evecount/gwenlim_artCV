import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

/**
 * Shared A4-landscape "sheet" system used by the Portfolio, Artist Statement and CV
 * so the three downloadable documents (and their live pages) look identical.
 */
export function DocSheet({
  n,
  total,
  label,
  children,
}: {
  n: number;
  total: number;
  label: string;
  children: ReactNode;
}) {
  return (
    <section className="pf-sheet relative mx-auto bg-background text-foreground shadow-lg">
      <div className="h-full flex flex-col px-[14mm] pt-[10mm] pb-[9mm]">
        <header className="flex items-baseline justify-between pb-[2.5mm] mb-[6mm] border-b border-foreground font-mono-code text-[7.5pt] uppercase tracking-[0.18em]">
          <span>
            Gwendalynn Lim <span className="text-highlight">林婉婷</span>
          </span>
          <span className="text-muted-foreground">{label}</span>
        </header>
        <div className="flex-1 min-h-0">{children}</div>
        <footer className="mt-[4mm] pt-[2mm] border-t border-border flex justify-between font-mono-code text-[7pt] uppercase tracking-[0.15em] text-muted-foreground">
          <span>Singapore · gwenlynn.lim@gmail.com · +65 8608 1377</span>
          <span>
            {String(n).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </footer>
      </div>
    </section>
  );
}

/** Heading styles shared across documents. */
export function DocKicker({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono-code text-[7.5pt] tracking-[0.2em] uppercase text-highlight">{children}</p>
  );
}

export function DocSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="break-inside-avoid-column mb-[5mm]">
      <h3 className="font-mono-code text-[7.5pt] uppercase tracking-[0.2em] text-muted-foreground border-b border-border pb-[1mm] mb-[2.5mm]">
        {title}
      </h3>
      {children}
    </section>
  );
}

export function DocShell({
  title,
  pages,
  downloadLabel,
  children,
}: {
  title: string;
  pages: number;
  downloadLabel: string;
  children: ReactNode;
}) {
  return (
    <div className="pf-root bg-muted py-10">
      <style>{"@page { size: A4 landscape; margin: 0; }"}</style>
      <div className="no-print max-w-3xl mx-auto mb-8 px-6 text-center">
        <DocKicker>Submission document · {pages} {pages === 1 ? "page" : "pages"} · A4 landscape</DocKicker>
        <h1 className="font-serif-display text-4xl md:text-5xl mt-3">{title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          What you see below is exactly what downloads. Click the button, choose <strong>"Save as PDF"</strong>,
          and turn <strong>"Background graphics"</strong> on.
        </p>
        <div className="mt-5 flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => window.print()}
            className="px-6 py-3 rounded-sm bg-primary text-primary-foreground font-mono-code text-sm font-semibold"
          >
            {downloadLabel}
          </button>
          <DocNavLink to="/portfolio" label="Portfolio" current={title} />
          <DocNavLink to="/statement" label="Statement" current={title} />
          <DocNavLink to="/cv" label="CV" current={title} />
        </div>
      </div>
      <div className="flex flex-col gap-8 pf-stack">{children}</div>
    </div>
  );
}

function DocNavLink({ to, label, current }: { to: "/portfolio" | "/statement" | "/cv"; label: string; current: string }) {
  if (current.toLowerCase().includes(label.toLowerCase())) return null;
  return (
    <Link to={to} className="px-5 py-3 rounded-sm border border-border font-mono-code text-sm hover:border-foreground">
      {label} →
    </Link>
  );
}
