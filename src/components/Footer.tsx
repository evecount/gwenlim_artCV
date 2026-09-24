import React from 'react';
import { ARTIST_INFO } from '../data/portfolioData';

interface FooterProps {
  onSelectTab: (tab: 'works' | 'statement' | 'timeline' | 'cv' | 'sam-residency') => void;
  onOpenAppliedPractice: () => void;
  onOpenContact: () => void;
  onTriggerPrint: (preset?: 'portfolio' | 'standard') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenAppliedPractice,
  onOpenContact,
  onTriggerPrint
}) => {
  return (
    <footer className="border-t border-neutral-250 bg-[#fafaf9] py-12 text-xs font-mono-code text-neutral-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Identity & Institutional Info */}
          <div className="md:col-span-6 space-y-2">
            <div className="text-sm font-serif-display font-bold text-neutral-950">
              {ARTIST_INFO.name} ({ARTIST_INFO.chineseName})
            </div>
            <p className="text-neutral-700 font-serif-display text-xs max-w-md leading-relaxed">
              Computational & interactive installation practice (2010 — 2026). Participatory optics, critique of observer bias, and frontier vector topologies.
            </p>
            <div className="text-neutral-500 pt-1 text-[11px]">
              Affiliated with Singapore Institute of Technology (SIT), NTU PACE, Eve Count Quantum Systems & Cybrdeck.
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold block">
              Dossier Navigation
            </span>
            <ul className="space-y-1.5 text-neutral-700">
              <li>
                <button
                  onClick={() => onSelectTab('statement')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer"
                >
                  Artist Statement & Inquiry
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('works')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer"
                >
                  Selected Works (2010 — 2026)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('timeline')}
                  className="hover:text-cyan-800 text-cyan-700 font-medium transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>16-Year Trajectory Scrubber</span>
                  <span className="text-[9px] px-1 bg-cyan-50 border border-cyan-300 rounded font-mono-code">Interactive</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('cv')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer"
                >
                  Curriculum Vitae (Art-Only)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('sam-residency')}
                  className="text-blue-700 hover:text-blue-900 font-medium transition-colors cursor-pointer"
                >
                  Future Work Proposal (2026)
                </button>
              </li>
            </ul>
          </div>

          {/* Institutional Utilities */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold block">
              Curatorial Tools
            </span>
            <ul className="space-y-1.5 text-neutral-700">
              <li>
                <button
                  onClick={() => onTriggerPrint('portfolio')}
                  className="hover:text-blue-700 text-blue-800 font-semibold transition-colors cursor-pointer"
                >
                  10-Page Landscape Portfolio (PDF)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onTriggerPrint('standard')}
                  className="hover:text-neutral-950 transition-colors cursor-pointer"
                >
                  Institutional CV & Full Dossier
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAppliedPractice}
                  className="hover:text-neutral-950 transition-colors cursor-pointer"
                >
                  Archive: Applied Practice (2014–2020)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-neutral-950 transition-colors cursor-pointer"
                >
                  Direct Studio Inquiry
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet Copyright Row */}
        <div className="pt-6 border-t border-neutral-250 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-neutral-500 text-[11px]">
          <div>
            © 2010 — 2026 Gwendalynn Lim. All artistic and computational rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Singapore / Toronto</span>
            <span>·</span>
            <span>gwenlynn.lim@gmail.com</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
