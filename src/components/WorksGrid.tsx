import React from 'react';
import { Artwork } from '../types/portfolio';
import { ArtworkImageGallery } from './ArtworkImageGallery';

interface WorksGridProps {
  artworks: Artwork[];
  onSelectArtwork: (artwork: Artwork) => void;
  onOpenPortfolioPdf?: () => void;
}

export const WorksGrid: React.FC<WorksGridProps> = ({
  artworks,
  onSelectArtwork,
}) => {
  return (
    <section id="works-section" className="py-14 border-b border-neutral-250 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="border-b border-neutral-250 pb-5">
          <span className="text-xs font-mono-code uppercase tracking-widest text-neutral-600 block mb-1 font-semibold">
            Primary Art Trajectory · Chronological Index
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif-display font-medium text-neutral-950">
            Selected Installations & Computational Works
          </h2>
        </div>

        {/* Works Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {artworks.map((artwork) => (
            <article
              key={artwork.id}
              onClick={() => onSelectArtwork(artwork)}
              className="group bg-white border border-neutral-250 hover:border-neutral-400 hover:shadow-md rounded-lg overflow-hidden transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Visual Documentary Image Plates Preview (Restores structural plate diagrams on grid) */}
                <div className="relative bg-black border-b border-neutral-900">
                  <ArtworkImageGallery artwork={artwork} compact={true} preferPlateGraphic={true} />
                </div>

                {/* Card Content & Metadata (Museum Monograph Plate Format - Less Wordy) */}
                <div className="p-4 space-y-2 bg-white text-neutral-900">
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono-code text-neutral-500">
                    <span className="text-neutral-950 font-bold">{artwork.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{artwork.city}</span>
                    {artwork.year === 2026 && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-blue-700 bg-blue-50 border border-blue-200 px-1.5 py-0.2 rounded font-bold uppercase text-[9px]">
                          Future Work
                        </span>
                      </>
                    )}
                    <span aria-hidden="true">·</span>
                    <span className="text-neutral-500">{artwork.accessionId}</span>
                  </div>

                  <h3 className="text-lg font-serif-display font-medium text-neutral-950 group-hover:text-neutral-700 leading-snug">
                    {artwork.title}
                  </h3>

                  <p className="text-xs text-neutral-600 font-sans line-clamp-2 leading-relaxed">
                    {artwork.subtitle}
                  </p>

                  <div className="pt-1 flex items-center justify-between text-[10px] font-mono-code text-neutral-500">
                    <span className="truncate max-w-[200px]">{artwork.medium}</span>
                    {artwork.studioLineage && (
                      <span className="text-neutral-600 italic">
                        {artwork.studioLineage.split('(')[0].trim()}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer with Hardware/Medium and Dossier affordance */}
              <div className="px-5 py-3.5 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between text-xs font-mono-code text-neutral-600 group-hover:text-neutral-900">
                <span className="truncate max-w-[190px] text-[11px] text-neutral-600">
                  {artwork.venue}
                </span>
                <span className="text-[11px] font-semibold text-neutral-950 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
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
