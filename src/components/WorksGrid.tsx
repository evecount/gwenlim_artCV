import React, { useState, useMemo } from 'react';
import { Search, X, SlidersHorizontal, RotateCcw, Printer, Sparkles } from 'lucide-react';
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
  onOpenPortfolioPdf
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filters = [
    { id: 'all', label: 'All Works (2010 — 2026)' },
    { id: 'computational-topology', label: 'Computational Topology' },
    { id: 'observer-bias', label: 'Observer Bias' },
    { id: 'participatory-optics', label: 'Participatory Optics' },
    { id: 'closed-circuit-systems', label: 'Closed-Circuit Systems' },
  ];

  // Quick Curatorial Search Tags / Rig Keywords
  const curatorialKeywords = [
    'Riemannian Manifold',
    'Observer Bias',
    'CCTV / CRT Feedback',
    '3-Phase 32A',
    'Stomp Switches',
    'Noise Singapore (NAC)',
    'Zero-Knowledge AI',
    'Two-Operator Relay',
    'Singlish Vernacular'
  ];

  const filteredArtworks = useMemo(() => {
    return artworks.filter(artwork => {
      // 1. Category filter
      if (selectedFilter !== 'all' && artwork.category !== selectedFilter) {
        return false;
      }

      // 2. Text / material search query
      if (!searchQuery.trim()) {
        return true;
      }

      const q = searchQuery.toLowerCase().trim();
      const searchableFields = [
        artwork.title,
        artwork.subtitle,
        artwork.medium,
        artwork.summary,
        artwork.venue,
        artwork.city,
        artwork.year.toString(),
        artwork.accessionId,
        artwork.curatorialStatement,
        artwork.technicalDossier,
        artwork.installationFootprint,
        ...(artwork.hardwareStack || []),
        ...(artwork.softwareStack || []),
        ...(artwork.collaborators || [])
      ].map(f => (f || '').toLowerCase());

      return searchableFields.some(field => field.includes(q));
    });
  }, [artworks, selectedFilter, searchQuery]);

  const handleResetFilters = () => {
    setSelectedFilter('all');
    setSearchQuery('');
  };

  const isFiltered = selectedFilter !== 'all' || searchQuery.trim().length > 0;

  return (
    <section id="works-section" className="py-14 border-b border-neutral-250 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-250 pb-5">
          <div>
            <span className="text-xs font-mono-code uppercase tracking-widest text-neutral-600 block mb-1 font-semibold">
              Primary Art Trajectory · Chronological Index
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-display font-medium text-neutral-950">
              Selected Installations & Computational Works
            </h2>
          </div>

          {/* Action & Interactive Filter Controls */}
          <div className="flex flex-wrap items-center gap-2">
            {onOpenPortfolioPdf && (
              <button
                onClick={onOpenPortfolioPdf}
                className="px-3 py-1.5 bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-white rounded text-xs font-mono-code font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
                title="Print or export complete visual portfolio monograph with photographic plates"
              >
                <Printer className="w-3.5 h-3.5 text-blue-200" />
                <span>Print Portfolio Extraction (PDF)</span>
              </button>
            )}

            <div className="flex flex-wrap gap-1 p-1 bg-white border border-neutral-250 rounded-lg shadow-xs">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-3 py-1.5 text-xs font-mono-code rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                    selectedFilter === filter.id
                      ? 'bg-neutral-950 text-white font-medium shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Material & Hardware Rig Search Filter Bar */}
        <div className="bg-white border border-neutral-250 rounded-lg p-4 space-y-3 shadow-xs">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input Box */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search by material, hardware rig, venue, or concept (e.g. 'Riemannian', 'CCTV', '3-phase', 'stomp')..."
                className="w-full pl-9 pr-8 py-2 text-xs font-mono-code bg-neutral-50 border border-neutral-250 rounded-md text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 p-0.5 cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Status & Reset Button */}
            <div className="flex items-center justify-between sm:justify-end gap-3 text-xs font-mono-code shrink-0">
              <span className="text-neutral-600">
                Showing <strong className="text-neutral-950">{filteredArtworks.length}</strong> of {artworks.length} works
              </span>

              {isFiltered && (
                <button
                  onClick={handleResetFilters}
                  className="px-2.5 py-1 text-[11px] font-mono-code text-neutral-700 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200 rounded border border-neutral-250 flex items-center gap-1 transition-colors cursor-pointer"
                  title="Reset all filters and search query"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Curatorial Keyword Suggestions */}
          <div className="flex items-center gap-1.5 flex-wrap pt-1 text-[11px] font-mono-code text-neutral-500">
            <span className="text-[10px] uppercase font-semibold text-neutral-600 mr-1 flex items-center gap-1">
              <SlidersHorizontal className="w-3 h-3" />
              <span>Rig & Medium Tags:</span>
            </span>
            {curatorialKeywords.map(keyword => {
              const isActive = searchQuery.toLowerCase() === keyword.toLowerCase();
              return (
                <button
                  key={keyword}
                  onClick={() => setSearchQuery(isActive ? '' : keyword)}
                  className={`px-2 py-0.5 rounded border transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-neutral-950 text-white border-neutral-950 font-bold'
                      : 'bg-neutral-100 hover:bg-neutral-200 border-neutral-250 text-neutral-700'
                  }`}
                >
                  {keyword}
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty State when no works match filter */}
        {filteredArtworks.length === 0 && (
          <div className="p-12 text-center bg-white border border-neutral-250 rounded-lg space-y-3 shadow-xs">
            <p className="text-base font-serif-display font-medium text-neutral-900">
              No artworks match the current material or rig search filter: <span className="font-mono-code text-xs bg-neutral-100 px-1.5 py-0.5 rounded">"{searchQuery}"</span>
            </p>
            <p className="text-xs font-mono-code text-neutral-500 max-w-md mx-auto">
              Try broader keywords like "optics", "CCTV", "manifold", "installation", or reset filters to view all catalog entries.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-2 px-4 py-2 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-mono-code rounded font-semibold transition-colors cursor-pointer shadow-xs inline-flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Show All 6 Works (2010 — 2026)</span>
            </button>
          </div>
        )}

        {/* Works Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArtworks.map((artwork, idx) => (
            <article
              key={artwork.id}
              onClick={() => onSelectArtwork(artwork)}
              className="group bg-white border border-neutral-250 hover:border-neutral-400 hover:shadow-md rounded-lg overflow-hidden transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Visual Documentary Image Plates Preview (Remains Deep Black Plate) */}
                <div className="relative bg-black border-b border-neutral-900">
                  <ArtworkImageGallery artwork={artwork} compact={true} />
                </div>

                {/* Card Content & Metadata */}
                <div className="p-5 space-y-3 bg-white text-neutral-900">
                  {/* Clean unboxed metadata with typographic separators (Zero-Pill discipline) */}
                  <div className="flex items-center gap-2 text-xs font-mono-code text-neutral-500">
                    <span className="text-neutral-900 font-semibold">{artwork.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{artwork.city}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-neutral-500">{artwork.accessionId}</span>
                  </div>

                  <h3 className="text-xl font-serif-display font-medium text-neutral-950 group-hover:text-neutral-700 leading-snug">
                    {artwork.title}
                  </h3>

                  <p className="text-xs font-serif-display italic text-neutral-600 line-clamp-2">
                    {artwork.subtitle}
                  </p>

                  <p className="text-xs text-neutral-700 font-sans line-clamp-3 leading-relaxed pt-1">
                    {artwork.summary}
                  </p>

                  {artwork.studioLineage && (
                    <div className="pt-1">
                      <span className="text-[10px] font-mono-code text-neutral-700 bg-neutral-100 border border-neutral-250 px-2 py-0.5 rounded inline-block">
                        Studio: {artwork.studioLineage}
                      </span>
                    </div>
                  )}
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
