import React from 'react';
import { Artwork } from '../types/portfolio';
import { ArtworkImageGallery } from './ArtworkImageGallery';
import { FileText, Sparkles } from 'lucide-react';

interface WorksGridProps {
  artworks: Artwork[];
  onSelectArtwork: (artwork: Artwork) => void;
  onOpenPortfolioPdf?: () => void;
  onNavigateToCv?: () => void;
}

export const WorksGrid: React.FC<WorksGridProps> = ({
  artworks,
  onSelectArtwork,
  onOpenPortfolioPdf,
  onNavigateToCv,
}) => {
  return (
    <section id="works-section" className="py-10 sm:py-12 border-b border-[#E2D7C3] bg-[#F3EDE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Curatorial Introduction & Maker Overview (Warm Plainspeak Hero) */}
        <div className="bg-[#FDFAF5] border border-[#E2D7C3] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_4px_24px_rgba(40,30,20,0.04)] space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E2D7C3]">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#736A5E]">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>Selected Works & Computational Practice · 2010 — 2026</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1C1917]">
                Gwendalynn Lim Wan Ting <span className="text-[#8C8274] font-normal text-xl sm:text-2xl">林婉婷</span>
              </h1>
              <p className="text-sm sm:text-base text-[#443E37] leading-relaxed font-sans pt-1">
                Artist, systems architect, and maker based in Singapore. For over 16 years across Toronto and Singapore, my practice has investigated how cameras and automated systems observe people, how we interact with technology when it is tactile and tangible, and how independent artist communities build physical, shared creative infrastructure.
              </p>
            </div>

            {/* Quick Actions (Direct CV & Monograph Access) */}
            <div className="flex flex-wrap lg:flex-col gap-2.5 shrink-0">
              {onNavigateToCv && (
                <button
                  onClick={onNavigateToCv}
                  className="px-4 py-2 bg-[#1C1917] hover:bg-[#2F2B26] text-[#FDFAF5] rounded-lg text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-neutral-300" />
                  <span>Black & White CV</span>
                </button>
              )}
              {onOpenPortfolioPdf && (
                <button
                  onClick={onOpenPortfolioPdf}
                  className="px-4 py-2 bg-[#FDFAF5] hover:bg-[#EFE8DC] text-[#1C1917] border border-[#DDD2BF] rounded-lg text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>10-Page Monograph (PDF)</span>
                </button>
              )}
              <a
                href="mailto:gwenlynn.lim@gmail.com"
                className="px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300/60 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span>✉️ gwenlynn.lim@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Four Grounded Focus Pillars (Linen-tone Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
            <div className="bg-[#EBE2D3] border border-[#DDD2BF] rounded-xl p-4 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#736A5E] block">Trajectory</span>
              <div className="text-sm font-bold text-[#1C1917]">16-Year Practice</div>
              <p className="text-xs text-[#5C5448] leading-normal">Longitudinal studio and collective work in Singapore & Toronto (2010–2026).</p>
            </div>

            <div className="bg-[#EBE2D3] border border-[#DDD2BF] rounded-xl p-4 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#736A5E] block">Primary Works</span>
              <div className="text-sm font-bold text-[#1C1917]">8 Curatorial Plates</div>
              <p className="text-xs text-[#5C5448] leading-normal">Installation views, high-key optics, tape monocoques, CCTV matrices, and bronze casting.</p>
            </div>

            <div className="bg-[#EBE2D3] border border-[#DDD2BF] rounded-xl p-4 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#736A5E] block">Community</span>
              <div className="text-sm font-bold text-[#1C1917]">Grassroots Stewardship</div>
              <p className="text-xs text-[#5C5448] leading-normal">Akin Collective, Motion and Still (3,200 sq.ft daylight studio), Flick the Switch.</p>
            </div>

            <div className="bg-[#EBE2D3] border border-[#DDD2BF] rounded-xl p-4 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#736A5E] block">Open Systems</span>
              <div className="text-sm font-bold text-[#1C1917]">Collaborative Research</div>
              <p className="text-xs text-[#5C5448] leading-normal">Trapped-ion quantum circuits (Quantinuum) & Riemann spectral operator manifolds.</p>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="border-b border-[#E2D7C3] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#736A5E] block mb-1 font-bold">
              Primary Art Trajectory · Chronological Index
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1C1917]">
              Selected Installations & Computational Works
            </h2>
          </div>
          <span className="text-xs font-mono-code text-[#736A5E]">
            8 Works · 2010 — 2026
          </span>
        </div>

        {/* Works Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {artworks.map((artwork) => (
            <article
              key={artwork.id}
              onClick={() => onSelectArtwork(artwork)}
              className="group bg-[#FDFAF5] border border-[#E2D7C3] hover:border-[#B5A893] hover:shadow-[0_8px_30px_rgba(40,30,20,0.08)] rounded-xl overflow-hidden transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-[0_2px_12px_rgba(40,30,20,0.03)]"
            >
              <div>
                {/* Visual Documentary Image Plates Preview (Restores structural plate diagrams on grid) */}
                <div className="relative bg-[#1A1816] border-b border-[#332E28]">
                  <ArtworkImageGallery artwork={artwork} compact={true} preferPlateGraphic={true} />
                </div>

                {/* Card Content & Metadata (Museum Monograph Plate Format - Less Wordy) */}
                <div className="p-4 space-y-2 bg-[#FDFAF5] text-[#1C1917]">
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-[#736A5E] font-medium">
                    <span className="text-[#1C1917] font-bold">{artwork.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{artwork.city}</span>
                    {artwork.year === 2026 && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#1C1917] bg-[#EBE2D3] border border-[#DDD2BF] px-1.5 py-0.2 rounded-xs font-bold uppercase text-[9px]">
                          Future Work
                        </span>
                      </>
                    )}
                    <span aria-hidden="true">·</span>
                    <span className="text-[#736A5E]">{artwork.accessionId}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1C1917] group-hover:text-[#4A433A] leading-snug">
                    {artwork.title}
                  </h3>

                  <p className="text-xs text-[#5C5448] font-sans line-clamp-2 leading-relaxed">
                    {artwork.subtitle}
                  </p>

                  <div className="pt-1 flex items-center justify-between text-[10px] font-mono-code text-[#736A5E]">
                    <span className="truncate max-w-[200px]">{artwork.medium}</span>
                    {artwork.studioLineage && (
                      <span className="text-[#5C5448] italic">
                        {artwork.studioLineage.split('(')[0].trim()}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer with Hardware/Medium and Dossier affordance */}
              <div className="px-5 py-3.5 bg-[#EAE1D2] border-t border-[#E2D7C3] flex items-center justify-between text-xs font-mono-code text-[#5C5448] group-hover:text-[#1C1917]">
                <span className="truncate max-w-[190px] text-[11px] text-[#5C5448]">
                  {artwork.venue}
                </span>
                <span className="text-[11px] font-semibold text-[#1C1917] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  View Dossier →
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
