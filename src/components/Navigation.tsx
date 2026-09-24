import React, { useState } from 'react';
import { FileText, Menu, X, Sparkles, Printer } from 'lucide-react';
import { DossierPreset } from './CuratorialDossierPdfModal';

interface NavigationProps {
  activeTab: 'works' | 'statement' | 'timeline' | 'cv' | 'sam-residency';
  onSelectTab: (tab: 'works' | 'statement' | 'timeline' | 'cv' | 'sam-residency') => void;
  onOpenAppliedPractice: () => void;
  onOpenContact: () => void;
  onTriggerPrint: (preset?: DossierPreset) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  onSelectTab,
  onOpenAppliedPractice,
  onOpenContact,
  onTriggerPrint
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleTabClick = (tab: 'works' | 'statement' | 'timeline' | 'cv' | 'sam-residency') => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Zone 1: Wordmark */}
        <button
          onClick={() => handleTabClick('statement')}
          className="text-left group cursor-pointer focus:outline-none shrink-0"
        >
          <div className="flex items-baseline gap-2 whitespace-nowrap">
            <span className="text-base sm:text-lg font-serif-display font-semibold tracking-tight text-neutral-950 group-hover:text-neutral-700 transition-colors">
              Gwendalynn Lim
            </span>
            <span className="text-xs font-serif-display text-neutral-500 hidden sm:inline-block">
              林婉婷
            </span>
            <span className="text-[11px] font-mono-code text-neutral-400 tracking-wider hidden lg:inline-block">
              · 2010—2026
            </span>
          </div>
          <div className="text-[10px] font-mono-code text-neutral-500 tracking-wider uppercase block">
            Installation, Physical Computing, and Media-Arts Practice
          </div>
        </button>

        {/* Zone 2: Three Main Elements Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs tracking-wider uppercase font-mono-code text-neutral-600">
          <button
            onClick={() => handleTabClick('works')}
            className={`transition-colors py-1 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'works' || activeTab === 'statement' ? 'text-neutral-950 font-bold border-b-2 border-neutral-950' : 'hover:text-neutral-950'
            }`}
          >
            <span>Portfolio of Plates</span>
          </button>
          
          <button
            onClick={() => handleTabClick('cv')}
            className={`transition-colors py-1 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'cv' ? 'text-neutral-950 font-bold border-b-2 border-neutral-950' : 'hover:text-neutral-950'
            }`}
          >
            <span>Black & White CV</span>
          </button>

          <button
            onClick={() => handleTabClick('timeline')}
            className={`transition-colors py-1 cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'timeline' ? 'text-neutral-950 font-bold border-b-2 border-neutral-950' : 'hover:text-neutral-950'
            }`}
          >
            <span>Timeline</span>
          </button>
        </nav>

        {/* Zone 3: Direct Export Buttons (Either or Both) */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Export CV */}
          <button
            onClick={() => onTriggerPrint('cv-only')}
            className="px-2.5 py-1.5 text-xs font-mono-code text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5"
            title="Download Black & White CV (PDF)"
          >
            <FileText className="w-3.5 h-3.5 text-neutral-600" />
            <span className="hidden sm:inline">Export CV</span>
            <span className="sm:hidden">CV</span>
          </button>

          {/* Export Portfolio */}
          <button
            onClick={() => onTriggerPrint('portfolio')}
            className="px-2.5 sm:px-3 py-1.5 text-xs font-mono-code text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5"
            title="Download Portfolio Plates (PDF)"
          >
            <Sparkles className="w-3.5 h-3.5 text-neutral-600" />
            <span className="hidden sm:inline">Export Plates</span>
            <span className="sm:hidden">Plates</span>
          </button>

          {/* Export Both */}
          <button
            onClick={() => onTriggerPrint('standard')}
            className="px-2.5 sm:px-3 py-1.5 text-xs font-mono-code text-white bg-neutral-950 hover:bg-neutral-800 active:bg-black rounded transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 font-semibold shadow-xs"
            title="Download Complete Dossier (Both CV + Portfolio)"
          >
            <span>Export Both</span>
          </button>
          {/* Mobile / Compact Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 rounded border border-neutral-250 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile / Compact Dropdown Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white/98 backdrop-blur-md px-4 py-4 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2 text-xs font-mono-code uppercase tracking-wider text-neutral-700">
            <button
              onClick={() => handleTabClick('statement')}
              className={`text-left py-2 px-3 rounded transition-colors ${
                activeTab === 'statement' ? 'bg-neutral-950 text-white font-bold' : 'hover:bg-neutral-100'
              }`}
            >
              Exhibition & Selected Works
            </button>
            <button
              onClick={() => handleTabClick('works')}
              className={`text-left py-2 px-3 rounded transition-colors ${
                activeTab === 'works' ? 'bg-neutral-950 text-white font-bold' : 'hover:bg-neutral-100'
              }`}
            >
              Selected Works (8 Major Works)
            </button>
            <button
              onClick={() => handleTabClick('timeline')}
              className={`text-left py-2 px-3 rounded transition-colors flex items-center justify-between ${
                activeTab === 'timeline' ? 'bg-cyan-800 text-white font-bold' : 'hover:bg-neutral-100'
              }`}
            >
              <span>Trajectory Timeline</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-neutral-200/50 text-neutral-900">16 Yrs</span>
            </button>
            <button
              onClick={() => handleTabClick('cv')}
              className={`text-left py-2 px-3 rounded transition-colors ${
                activeTab === 'cv' ? 'bg-neutral-950 text-white font-bold' : 'hover:bg-neutral-100'
              }`}
            >
              Curriculum Vitae
            </button>
            <button
              onClick={() => handleTabClick('sam-residency')}
              className={`text-left py-2 px-3 rounded transition-colors flex items-center justify-between ${
                activeTab === 'sam-residency' ? 'bg-blue-700 text-white font-bold' : 'hover:bg-neutral-100 text-blue-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse inline-block" />
                <span>Future Work</span>
              </div>
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono-code font-bold ${
                activeTab === 'sam-residency' ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-800'
              }`}>
                2026
              </span>
            </button>
          </div>

          {/* Quick Export Actions in Mobile Menu */}
          <div className="pt-2 border-t border-neutral-200 flex flex-col gap-2">
            <button
              onClick={() => {
                onTriggerPrint('portfolio');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 px-3 bg-blue-700 text-white rounded text-xs font-mono-code font-bold flex items-center justify-center gap-2 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span>Print / Export Portfolio Extraction (PDF)</span>
            </button>

            <button
              onClick={() => {
                onTriggerPrint('standard');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 px-3 bg-neutral-100 border border-neutral-250 text-neutral-800 rounded text-xs font-mono-code font-semibold flex items-center justify-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-neutral-500" />
              <span>Print Curatorial Dossier & CV (PDF)</span>
            </button>

            <button
              onClick={() => {
                onOpenAppliedPractice();
                setMobileMenuOpen(false);
              }}
              className="w-full py-1.5 text-center text-xs font-mono-code text-neutral-500 hover:text-neutral-800"
            >
              Archive: Applied Commercial Practice (2014–2020)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
