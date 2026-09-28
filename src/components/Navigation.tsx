import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Link } from '@tanstack/react-router';

interface NavigationProps {
  onOpenAppliedPractice: () => void;
  onOpenContact: () => void;
  onTriggerPrint: () => void;
}

const NAV_LINKS = [
  { to: '/cv', label: 'CV' },
  { to: '/timeline', label: 'Timeline' },
  { to: '/statement', label: 'Statement' },
  { to: '/residency', label: 'Residency' },
] as const;

export const Navigation: React.FC<NavigationProps> = () => {
  const [open, setOpen] = useState(false);
  const linkCls = 'font-mono-code text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors';
  const active = { className: 'text-foreground' };

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-baseline gap-2">
          <span className="font-serif-display text-xl text-foreground">Gwendalynn Lim</span>
          <span className="text-xs text-muted-foreground">林婉婷</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <Link key={l.to} to={l.to} className={linkCls} activeProps={active}>
              {l.label}
            </Link>
          ))}
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-mono-code text-[11px] uppercase tracking-[0.18em] hover:bg-highlight transition-colors"
          >
            <Download className="w-3.5 h-3.5" /> Portfolio PDF
          </Link>
        </nav>

        <button className="md:hidden p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border px-5 py-4 flex flex-col gap-4 bg-background">
          {NAV_LINKS.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className={linkCls} activeProps={active}>
              {l.label}
            </Link>
          ))}
          <Link
            to="/portfolio"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-mono-code text-[11px] uppercase tracking-[0.18em]"
          >
            <Download className="w-3.5 h-3.5" /> Portfolio PDF
          </Link>
        </div>
      )}
    </header>
  );
};
