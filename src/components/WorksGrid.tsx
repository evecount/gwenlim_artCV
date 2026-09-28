import React, { useState, useMemo } from 'react';
import { Artwork } from '../types/portfolio';
import { ArtworkImageGallery } from './ArtworkImageGallery';
import { FileText, Sparkles, ArrowRight, Eye, Layers } from 'lucide-react';

interface WorksGridProps {
  artworks: Artwork[];
  onSelectArtwork: (artwork: Artwork) => void;
  onOpenPortfolioPdf?: () => void;
  onNavigateToCv?: () => void;
}

type FilterCategory = 'all' | 'participatory-optics' | 'closed-circuit' | 'community' | 'computational';

export const WorksGrid: React.FC<WorksGridProps> = ({
  artworks,
  onSelectArtwork,
  onOpenPortfolioPdf,
  onNavigateToCv,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('all');

  // Featured artwork for the top visual showcase (Plate 01: White Geisha & Silver Aurelia)
  const featuredArtwork = artworks[0];

  // Category counts and filtering
  const filteredArtworks = useMemo(() => {
    if (selectedFilter === 'all') return artworks;
    if (selectedFilter === 'participatory-optics') {
      return artworks.filter(a => a.id === 'white-geisha-silver-aurelia' || a.id === 'a-perfect-world' || a.id === 'two-man-rule' || a.id === 'the-ultimate-selfie');
    }
    if (selectedFilter === 'closed-circuit') {
      return artworks.filter(a => a.id === 'broadcast-people' || a.id === 'deconstructing-capital');
    }
    if (selectedFilter === 'community') {
      return artworks.filter(a => a.id === 'collective-infrastructure');
    }
    if (selectedFilter === 'computational') {
      return artworks.filter(a => a.id === 'riemann-manifold');
    }
    return artworks;
  }, [artworks, selectedFilter]);

  return (
    <section id="works-section" className="py-8 sm:py-12 border-b border-[#E2D7C3] bg-[#F3EDE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Curatorial Introduction & Maker Overview (Museum-Grade Split Editorial Hero) */}
        <div className="bg-[#FDFAF5] border border-[#E2D7C3] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_4px_24px_rgba(40,30,20,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left 7 Columns: Artist Curatorial Thesis & Actions */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#736A5E]">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>Selected Works & Computational Practice · 2010 — 2026</span>
              </div>

              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1C1917] leading-tight">
                  Gwendalynn Lim Wan Ting <span className="text-[#8C8274] font-normal text-2xl sm:text-3xl block sm:inline">林婉婷</span>
                </h1>
                <p className="text-sm font-mono-code text-[#736A5E] mt-1">
                  Installation Artist · Systems Architect · Grassroots Cultural Steward
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#443E37] leading-relaxed font-sans">
                For over 16 years across Toronto and Singapore, my practice has investigated how cameras and automated systems observe people, how we interact with technology when it is tactile and tangible, and how independent artist communities build physical, shared creative infrastructure.
              </p>

              {/* Quick Actions (Direct CV & Monograph Access) */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {onOpenPortfolioPdf && (
                  <button
                    onClick={onOpenPortfolioPdf}
                    className="px-4 py-2.5 bg-[#1C1917] hover:bg-[#2F2B26] text-[#FDFAF5] rounded-lg text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all hover:shadow cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                    <span>10-Page Monograph (PDF)</span>
                  </button>
                )}
                {onNavigateToCv && (
                  <button
                    onClick={onNavigateToCv}
                    className="px-4 py-2.5 bg-[#FDFAF5] hover:bg-[#EFE8DC] text-[#1C1917] border border-[#DDD2BF] rounded-lg text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#5C5448]" />
                    <span>Black & White CV</span>
                  </button>
                )}
                <a
                  href="mailto:gwenlynn.lim@gmail.com"
                  className="px-4 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300/70 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <span>✉️ gwenlynn.lim@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Right 5 Columns: Marquee Featured Artwork Visual Spotlight */}
            {featuredArtwork && (
              <div className="lg:col-span-5">
                <div
                  onClick={() => onSelectArtwork(featuredArtwork)}
                  className="group relative bg-[#1E1B17] rounded-xl overflow-hidden border border-[#D5C7B0] shadow-[0_8px_30px_rgba(40,30,20,0.12)] cursor-pointer hover:border-[#1C1917] transition-all duration-300"
                >
                  {/* Visual Artwork Photography */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#141210] flex items-center justify-center">
                    {featuredArtwork.images[0]?.url && (
                      <>
                        <img
                          src={featuredArtwork.images[0].url}
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-125 pointer-events-none"
                        />
                        <img
                          src={featuredArtwork.images[0].url}
                          alt={featuredArtwork.title}
                          className="relative max-h-full max-w-full object-contain z-10 rounded shadow-md group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-20 pointer-events-none" />
                      </>
                    )}

                    {/* Top Plate Badge */}
                    <div className="absolute top-3 left-3 z-30 flex items-center gap-1.5 bg-[#1C1917]/85 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono-code text-[#E8DFD1] border border-[#3E3830]">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>FEATURED MONOGRAPH PLATE 01</span>
                    </div>

                    {/* Direct Expand Affordance */}
                    <div className="absolute top-3 right-3 z-30 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-[10px] font-mono-code px-2 py-1 rounded backdrop-blur-sm flex items-center gap-1">
                      <Eye className="w-3 h-3 text-blue-300" />
                      <span>View Dossier ↗</span>
                    </div>

                    {/* Artwork Headline Inset */}
                    <div className="absolute bottom-3 left-3 right-3 z-30 text-white space-y-1">
                      <div className="flex items-center gap-2 text-[10px] font-mono-code text-[#D5C7B0]">
                        <span>{featuredArtwork.year}</span>
                        <span>·</span>
                        <span>{featuredArtwork.city}</span>
                        <span>·</span>
                        <span className="truncate">{featuredArtwork.venue}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-200 transition-colors leading-snug">
                        {featuredArtwork.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Bottom Strip */}
                  <div className="p-3 bg-[#26211C] border-t border-[#3D352D] flex items-center justify-between text-xs font-mono-code text-[#B8AA96]">
                    <span className="truncate max-w-[240px] text-[11px] text-[#A89C8A]">
                      {featuredArtwork.medium}
                    </span>
                    <span className="text-[11px] font-semibold text-[#FDFAF5] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Open Dossier <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Four Grounded Focus Pillars (Linen-tone Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 mt-8 border-t border-[#E2D7C3]">
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

        {/* Section Header & Curatorial Category Filter Pills */}
        <div className="space-y-4">
          <div className="border-b border-[#E2D7C3] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#736A5E] block mb-1 font-bold">
                Primary Art Trajectory · Chronological Index
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1C1917]">
                Selected Installations & Computational Works
              </h2>
            </div>
            <span className="text-xs font-mono-code text-[#736A5E]">
              {filteredArtworks.length} of 8 Works · 2010 — 2026
            </span>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-[#1C1917] text-[#FDFAF5] font-semibold shadow-xs'
                  : 'bg-[#FDFAF5] text-[#5C5448] hover:bg-[#EAE1D2] border border-[#DDD2BF]'
              }`}
            >
              All Works (8)
            </button>
            <button
              onClick={() => setSelectedFilter('participatory-optics')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedFilter === 'participatory-optics'
                  ? 'bg-[#1C1917] text-[#FDFAF5] font-semibold shadow-xs'
                  : 'bg-[#FDFAF5] text-[#5C5448] hover:bg-[#EAE1D2] border border-[#DDD2BF]'
              }`}
            >
              Participatory Optics (4)
            </button>
            <button
              onClick={() => setSelectedFilter('closed-circuit')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedFilter === 'closed-circuit'
                  ? 'bg-[#1C1917] text-[#FDFAF5] font-semibold shadow-xs'
                  : 'bg-[#FDFAF5] text-[#5C5448] hover:bg-[#EAE1D2] border border-[#DDD2BF]'
              }`}
            >
              Closed-Circuit & Counter-Optics (2)
            </button>
            <button
              onClick={() => setSelectedFilter('community')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedFilter === 'community'
                  ? 'bg-[#1C1917] text-[#FDFAF5] font-semibold shadow-xs'
                  : 'bg-[#FDFAF5] text-[#5C5448] hover:bg-[#EAE1D2] border border-[#DDD2BF]'
              }`}
            >
              Grassroots Infrastructure (1)
            </button>
            <button
              onClick={() => setSelectedFilter('computational')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedFilter === 'computational'
                  ? 'bg-[#1C1917] text-[#FDFAF5] font-semibold shadow-xs'
                  : 'bg-[#FDFAF5] text-[#5C5448] hover:bg-[#EAE1D2] border border-[#DDD2BF]'
              }`}
            >
              Quantum & Computational (1)
            </button>
          </div>
        </div>

        {/* Works Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArtworks.map((artwork) => (
            <article
              key={artwork.id}
              onClick={() => onSelectArtwork(artwork)}
              className="group bg-[#FDFAF5] border border-[#E2D7C3] hover:border-[#B5A893] hover:shadow-[0_16px_36px_rgba(40,30,20,0.10)] rounded-xl overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-[0_2px_12px_rgba(40,30,20,0.03)] hover:-translate-y-1"
            >
              <div>
                {/* Visual Photographic Plate Preview (Shows real high-res photographs for completed works, blueprints for Riemann Manifold) */}
                <div className="relative bg-[#1F1B17] border-b border-[#E2D7C3]">
                  <ArtworkImageGallery artwork={artwork} compact={true} preferPlateGraphic={artwork.id === 'riemann-manifold'} />
                </div>

                {/* Card Content & Metadata (Museum Monograph Plate Format) */}
                <div className="p-5 space-y-2.5 bg-[#FDFAF5] text-[#1C1917]">
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
                    <span className="text-[#736A5E] font-mono-code">{artwork.accessionId}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1C1917] group-hover:text-[#4A433A] leading-snug">
                    {artwork.title}
                  </h3>

                  <p className="text-xs text-[#5C5448] font-sans line-clamp-2 leading-relaxed">
                    {artwork.subtitle}
                  </p>

                  <div className="pt-1.5 flex items-center justify-between text-[10px] font-mono-code text-[#736A5E]">
                    <span className="truncate max-w-[200px]">{artwork.medium}</span>
                    {artwork.studioLineage && (
                      <span className="text-[#5C5448] italic">
                        {artwork.studioLineage.split('(')[0].trim()}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer with Venue and Dossier affordance */}
              <div className="px-5 py-3.5 bg-[#EAE1D2] border-t border-[#E2D7C3] flex items-center justify-between text-xs font-mono-code text-[#5C5448] group-hover:text-[#1C1917]">
                <span className="truncate max-w-[190px] text-[11px] text-[#5C5448]">
                  {artwork.venue}
                </span>
                <span className="text-[11px] font-semibold text-[#1C1917] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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
