import React from 'react';
import { Link } from '@tanstack/react-router';
import { ARTIST_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenAppliedPractice: () => void;
  onOpenContact: () => void;
  onTriggerPrint: (preset?: 'portfolio' | 'standard') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => (
  <footer className="border-t border-border bg-background">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
      <div>
        <p className="font-serif-display text-lg text-foreground">
          {ARTIST_INFO.name} {ARTIST_INFO.chineseName}
        </p>
        <p className="font-mono-code text-[11px] text-muted-foreground mt-1">
          {ARTIST_INFO.location} · {ARTIST_INFO.timeline}
        </p>
      </div>
      <div className="flex flex-wrap gap-6 font-mono-code text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        <Link to="/portfolio" className="hover:text-foreground">Portfolio PDF</Link>
        <Link to="/cv" className="hover:text-foreground">CV</Link>
        <Link to="/timeline" className="hover:text-foreground">Timeline</Link>
        <Link to="/statement" className="hover:text-foreground">Statement</Link>
        <Link to="/residency" className="hover:text-foreground">Residency</Link>
        <button onClick={onOpenContact} className="uppercase hover:text-highlight">Contact</button>
      </div>
    </div>
  </footer>
);
