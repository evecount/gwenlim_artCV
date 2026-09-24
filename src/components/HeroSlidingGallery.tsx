import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Maximize2,
  ArrowRight,
  Grid,
  Layers,
  Sparkles
} from 'lucide-react';
import { ARTWORKS } from '../data/portfolioData';
import { Artwork } from '../types/portfolio';
import { DocumentaryImagePlate } from './DocumentaryImagePlate';
import { getArtworkImages } from '../utils/imageStore';

interface HeroSlidingGalleryProps {
  artworks?: Artwork[];
  onSelectArtwork: (artwork: Artwork) => void;
  onExploreCV?: () => void;
}

export const HeroSlidingGallery: React.FC<HeroSlidingGalleryProps> = ({
  artworks = ARTWORKS,
  onSelectArtwork,
  onExploreCV
}) => {
  // Total slides = 9 (Slide 01 is the full 8-grid of work, Slides 02-09 are individual artworks)
  const totalSlides = artworks.length + 1; // 9 slides (01/09 to 09/09)
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [slideDuration, setSlideDuration] = useState<number>(3500); // 3.5s brisk autoplay
  const [activePlateIndex, setActivePlateIndex] = useState<number>(0);
  const [slideViewMode, setSlideViewMode] = useState<'plate' | 'photo'>('plate');
  const timerRef = useRef<number | null>(null);

  // If currentIndex === 0, it is the Overview Grid (01/09).
  // If currentIndex >= 1, it is artwork at index (currentIndex - 1).
  const isOverviewSlide = currentIndex === 0;
  const activeArtwork = isOverviewSlide ? artworks[0] : (artworks[currentIndex - 1] || artworks[0]);
  const activeImages = getArtworkImages(activeArtwork.id, activeArtwork.images);
  const currentImage = activeImages[activePlateIndex] || activeImages[0];

  // Reset active plate sub-index when slide advances
  useEffect(() => {
    setActivePlateIndex(0);
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Autoplay progression (every 3.5 seconds, with pause-on-hover)
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = window.setInterval(() => {
        handleNext();
      }, slideDuration);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, handleNext, slideDuration]);

  // Keyboard navigation (Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <section
      className="relative bg-white text-neutral-900 border-b border-neutral-200 overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Top indicator bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[10px] font-mono-code uppercase tracking-widest text-blue-700 font-bold">
            Selected Spatial & Computational Works
          </span>
          <span className="text-neutral-300 hidden md:inline">/</span>
          <span className="text-[10px] font-mono-code text-neutral-600 hidden md:inline">
            2010 — 2026 Archive
          </span>
        </div>

        {/* Carousel controls & Play/Pause */}
        <div className="flex items-center gap-3">
          {/* Slide indicator (01/09 to 09/09) */}
          <div className="flex items-center gap-1.5 text-xs font-mono-code text-neutral-600">
            <span className="text-neutral-950 font-bold text-sm tabular-nums">
              0{currentIndex + 1}
            </span>
            <span className="text-neutral-400">/</span>
            <span className="tabular-nums text-neutral-600">0{totalSlides}</span>
          </div>

          <div className="h-4 w-px bg-neutral-200" />

          {/* Speed Toggle (3s / 5s) */}
          <div className="hidden md:flex items-center gap-1 bg-neutral-100 border border-neutral-200 rounded px-1.5 py-1 text-[10px] font-mono-code text-neutral-600">
            <span className="text-neutral-500">Auto:</span>
            <button
              onClick={() => setSlideDuration(3000)}
              className={`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                slideDuration === 3000 ? 'bg-blue-100 text-blue-800 font-bold' : 'hover:text-neutral-950'
              }`}
              title="3-second brisk autoplay"
            >
              3s
            </button>
            <button
              onClick={() => setSlideDuration(5000)}
              className={`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                slideDuration === 5000 ? 'bg-blue-100 text-blue-800 font-bold' : 'hover:text-neutral-950'
              }`}
              title="5-second deliberate autoplay"
            >
              5s
            </button>
          </div>

          <div className="h-4 w-px bg-neutral-200" />

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 transition-colors cursor-pointer"
            title={isPlaying ? 'Pause slideshow' : 'Resume auto-play'}
            aria-label={isPlaying ? 'Pause slideshow' : 'Resume auto-play'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          {/* Top Nav Carousel Chevrons: Bright Solid NAV Blue-700 Squares with Bold White Chevrons */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono-code text-blue-700 font-semibold uppercase tracking-wider hidden sm:inline-block">
              Browse Works:
            </span>
            <button
              onClick={handlePrev}
              className="w-8 h-8 sm:w-9 sm:h-9 bg-blue-700 hover:bg-blue-600 active:bg-blue-800 active:scale-95 text-white rounded-xs sm:rounded flex items-center justify-center transition-all cursor-pointer shadow-md shadow-blue-700/30 group"
              title="Previous slide (Press to browse)"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 stroke-[3] animate-nudge-left transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 sm:w-9 sm:h-9 bg-blue-700 hover:bg-blue-600 active:bg-blue-800 active:scale-95 text-white rounded-xs sm:rounded flex items-center justify-center transition-all cursor-pointer shadow-md shadow-blue-700/30 group"
              title="Next slide (Press to browse)"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 stroke-[3] animate-nudge-right transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Slide Progress Bar (countdown indicator) */}
      <div className="w-full h-0.5 bg-neutral-150 overflow-hidden relative">
        <div
          key={`${currentIndex}-${isPlaying}-${slideDuration}`}
          className={`h-full bg-blue-600 ${
            isPlaying ? 'w-full transition-all ease-linear' : 'w-0 opacity-30'
          }`}
          style={{
            transitionDuration: isPlaying ? `${slideDuration}ms` : '0ms'
          }}
        />
      </div>

      {/* Main Hero Stage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left/Center Stage */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-3">
            {isOverviewSlide ? (
              /* SLIDE 01/09: Complete Full 8-Grid of Work Overview */
              <div className="relative rounded-lg overflow-hidden border border-neutral-250 bg-neutral-50/80 shadow-md p-4 sm:p-5 space-y-3">
                {/* 8-Grid Header */}
                <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                  <div className="flex items-center gap-2">
                    <Grid className="w-4 h-4 text-blue-700" />
                    <span className="text-[11px] font-mono-code uppercase tracking-wider text-neutral-900 font-bold">
                      Slide 01/09: Archival Matrix · 8 Major Installations (2010 — 2026)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono-code text-blue-700 font-semibold hidden sm:inline">
                    Click any tile to inspect
                  </span>
                </div>

                {/* 8-Tile Mosaic Grid (Individual Plate Cards RETAIN Black Background) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {artworks.map((art, idx) => {
                    const artImgs = getArtworkImages(art.id, art.images);
                    const thumb = artImgs[0];
                    return (
                      <div
                        key={art.id}
                        onClick={() => setCurrentIndex(idx + 1)}
                        className="group/tile relative bg-black rounded border border-neutral-800 hover:border-blue-500 transition-all cursor-pointer overflow-hidden p-2 flex flex-col justify-between aspect-4/3 hover:scale-[1.02] shadow-sm hover:shadow-blue-600/20"
                        title={`View ${art.title} (${art.year})`}
                      >
                        {/* Miniature plate background preview */}
                        <div className="absolute inset-0 opacity-85 group-hover/tile:opacity-100 transition-opacity">
                          <DocumentaryImagePlate
                            image={thumb}
                            artworkId={art.id}
                            index={0}
                            totalImages={1}
                            compact={true}
                            allowReplace={false}
                            preferPlateGraphic={true}
                          />
                        </div>

                        {/* Top tag */}
                        <div className="relative z-10 flex items-center justify-between text-[9px] font-mono-code pointer-events-none">
                          <span className="px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-xs text-blue-300 font-bold border border-neutral-800/80">
                            Plate 0{idx + 1}
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-xs text-neutral-300 font-mono-code border border-neutral-800/80">
                            {art.year}
                          </span>
                        </div>

                        {/* Minimalist gallery bottom label */}
                        <div className="relative z-10 bg-gradient-to-t from-black/95 via-black/75 to-transparent p-2 pt-4 -mx-2 -mb-2 pointer-events-none">
                          <p className="text-[11px] font-serif-display font-medium text-white line-clamp-1 group-hover/tile:text-blue-300 transition-colors">
                            {art.title.split('(')[0].trim()}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Grid Footer Bar */}
                <div className="flex items-center justify-between text-[11px] font-mono-code text-neutral-600 pt-1 border-t border-neutral-200">
                  <span className="italic">
                    Comprehensive 16-Year Trajectory across Canada & Singapore
                  </span>
                  <button
                    onClick={() => setCurrentIndex(1)}
                    className="text-blue-700 hover:text-blue-900 font-semibold cursor-pointer underline flex items-center gap-1"
                  >
                    <span>Tour Work-by-Work</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* Side Floating Nav Chevrons (Nav Blue-700 Squares with White Chevrons) */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-blue-700 hover:bg-blue-600 active:bg-blue-800 active:scale-95 text-white rounded-xs sm:rounded flex items-center justify-center transition-all cursor-pointer shadow-lg shadow-blue-700/40 z-20 group/side-prev"
                  title="Previous slide (Press to browse)"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3] animate-nudge-left" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-blue-700 hover:bg-blue-600 active:bg-blue-800 active:scale-95 text-white rounded-xs sm:rounded flex items-center justify-center transition-all cursor-pointer shadow-lg shadow-blue-700/40 z-20 group/side-next"
                  title="Next slide (Press to browse)"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3] animate-nudge-right" />
                </button>
              </div>
            ) : (
              /* SLIDES 02/09 to 09/09: Individual Artwork Plate Card (RETAINS Black Background) */
              <div
                className="relative group cursor-pointer rounded-lg overflow-hidden bg-neutral-950 border border-neutral-900 hover:border-neutral-700 shadow-xl transition-all"
                onClick={() => onSelectArtwork(activeArtwork)}
                title="Click to view artwork details, photography, and notes"
              >
                {/* Image Plate */}
                <DocumentaryImagePlate
                  image={currentImage}
                  artworkId={activeArtwork.id}
                  index={activePlateIndex}
                  totalImages={activeImages.length}
                  compact={false}
                  allowReplace={false}
                  preferPlateGraphic={slideViewMode === 'plate'}
                />

                {/* Side Floating Nav Chevrons: Bright Solid NAV Blue-700 Squares with White Chevrons */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-blue-700 hover:bg-blue-600 active:bg-blue-800 active:scale-95 text-white rounded-xs sm:rounded flex items-center justify-center transition-all cursor-pointer shadow-lg shadow-blue-700/40 z-20 group/side-prev"
                  title="Previous artwork (Press to browse)"
                  aria-label="Previous artwork"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3] animate-nudge-left" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-blue-700 hover:bg-blue-600 active:bg-blue-800 active:scale-95 text-white rounded-xs sm:rounded flex items-center justify-center transition-all cursor-pointer shadow-lg shadow-blue-700/40 z-20 group/side-next"
                  title="Next artwork (Press to browse)"
                  aria-label="Next artwork"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3] animate-nudge-right" />
                </button>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg border border-neutral-700 text-xs font-mono-code text-white flex items-center gap-2 shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>View Artwork & Details</span>
                  </div>
                </div>

                {/* Plate View & Format Switcher (Bottom Left) */}
                <div
                  className="absolute bottom-3 left-3 flex items-center gap-2 bg-black/85 backdrop-blur-md px-2.5 py-1.5 rounded border border-neutral-800 text-[11px] font-mono-code z-10"
                  onClick={e => e.stopPropagation()}
                >
                  <span className="text-neutral-400 text-[10px] uppercase font-semibold">Plates:</span>
                  <div className="flex items-center gap-1">
                    {activeImages.map((img, i) => (
                      <button
                        key={img.id || i}
                        onClick={() => setActivePlateIndex(i)}
                        className={`px-2 py-0.5 rounded text-[10px] transition-colors cursor-pointer ${
                          i === activePlateIndex
                            ? 'bg-white text-black font-bold'
                            : 'bg-neutral-800/80 text-neutral-300 hover:text-white hover:bg-neutral-700'
                        }`}
                      >
                        0{i + 1}
                      </button>
                    ))}
                  </div>

                  {/* Toggle between Structural Plate & Real Photo */}
                  <div className="flex items-center bg-neutral-900 p-0.5 rounded border border-neutral-750 ml-1">
                    <button
                      onClick={() => setSlideViewMode('plate')}
                      className={`px-1.5 py-0.5 rounded text-[9px] transition-colors cursor-pointer ${
                        slideViewMode === 'plate'
                          ? 'bg-cyan-400 text-black font-bold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                      title="Show structural architectural plate drawing"
                    >
                      📐 Plate
                    </button>
                    <button
                      onClick={() => setSlideViewMode('photo')}
                      className={`px-1.5 py-0.5 rounded text-[9px] transition-colors cursor-pointer ${
                        slideViewMode === 'photo'
                          ? 'bg-blue-600 text-white font-bold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                      title="Show real exhibition photograph"
                    >
                      📷 Photo
                    </button>
                  </div>
                </div>

                {/* Accession ID tag (Top Right) */}
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-neutral-800 text-[10px] font-mono-code text-neutral-400">
                  {activeArtwork.accessionId}
                </div>
              </div>
            )}

            {/* Caption bar */}
            {!isOverviewSlide && (
              <div className="flex items-center justify-between text-xs text-neutral-600 font-mono-code px-1">
                <span className="italic truncate max-w-md">
                  {currentImage.caption || currentImage.title}
                </span>
                <span className="text-[10px] text-neutral-500">
                  {currentImage.captureMetadata?.camera || 'Archival Photographic Rig'}
                </span>
              </div>
            )}
          </div>

          {/* Right Column: Monographic Information Lockup in Light Theme */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-5">
            {isOverviewSlide ? (
              /* SLIDE 01/09: Curatorial Overview Information */
              <>
                <div className="flex items-center gap-2 text-xs font-mono-code text-neutral-600">
                  <span className="text-blue-700 font-bold">2010 — 2026</span>
                  <span aria-hidden="true" className="text-neutral-300">·</span>
                  <span>Toronto & Singapore</span>
                  <span aria-hidden="true" className="text-neutral-300">·</span>
                  <span className="text-neutral-900 font-medium">8 Institutional Works</span>
                </div>

                <div className="space-y-2">
                  <h2
                    onClick={() => setCurrentIndex(1)}
                    className="text-2xl sm:text-3xl lg:text-3xl font-serif-display font-medium text-neutral-950 hover:text-blue-700 transition-colors cursor-pointer leading-tight tracking-tight"
                  >
                    Curatorial Catalog & Trajectory Index
                  </h2>
                  <p className="text-xs sm:text-sm font-serif-display italic text-neutral-600 leading-relaxed">
                    Sixteen-year trajectory across participatory lens mechanics, critique of observer bias, physical computing, and machine interiority.
                  </p>
                </div>

                {/* Studio Lineage Breakdown Card */}
                <div className="p-3.5 bg-neutral-50 border border-neutral-250 rounded-lg space-y-2 text-xs">
                  <div className="text-[10px] font-mono-code uppercase tracking-wider text-blue-700 font-bold">
                    Studio Lineage & Production Chronology:
                  </div>
                  <div className="space-y-1.5 font-mono-code text-[11px] text-neutral-700">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-500">Akin Collective (2011–15):</span>
                      <span className="text-neutral-950 font-medium">TEDx, Kensington, Pavilions</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-500">Motion & Still (2014–23):</span>
                      <span className="text-neutral-950 font-medium">Ultimate Selfie (MTCC)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-500">Flick the Switch (2019–24):</span>
                      <span className="text-neutral-950 font-medium">Deconstructing Capital</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-500">Research Systems (2023–26):</span>
                      <span className="text-blue-700 font-bold">The Riemann Manifold</span>
                    </div>
                  </div>
                </div>

                {/* Conceptual Summary */}
                <p className="text-xs text-neutral-700 leading-relaxed font-sans">
                  Lim’s practice deconstructs institutional observer bias—the unexamined assumption that because imaging and surveillance technologies exist, systems possess an inherent entitlement to record and extract human subjects.
                </p>

                {/* Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  <button
                    onClick={() => setCurrentIndex(1)}
                    className="flex-1 px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs font-mono-code rounded transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Tour Work 01 (The Riemann Manifold)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {onExploreCV && (
                    <button
                      onClick={onExploreCV}
                      className="px-3.5 py-2.5 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 rounded text-xs font-mono-code transition-colors cursor-pointer text-center shadow-2xs"
                    >
                      Jump to CV
                    </button>
                  )}
                </div>
              </>
            ) : (
              /* SLIDES 02/09 to 09/09: Individual Artwork Meta Lockup */
              <>
                {/* Meta Kicker */}
                <div className="flex items-center gap-2 text-xs font-mono-code text-neutral-600">
                  <span className="text-neutral-950 font-bold">{activeArtwork.year}</span>
                  <span aria-hidden="true" className="text-neutral-300">·</span>
                  <span>{activeArtwork.city}</span>
                  <span aria-hidden="true" className="text-neutral-300">·</span>
                  <span className="text-neutral-600 truncate">{activeArtwork.venue}</span>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-2">
                  <h2
                    onClick={() => onSelectArtwork(activeArtwork)}
                    className="text-2xl sm:text-3xl lg:text-3xl font-serif-display font-medium text-neutral-950 hover:text-blue-700 transition-colors cursor-pointer leading-tight tracking-tight"
                  >
                    {activeArtwork.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-serif-display italic text-neutral-600 leading-relaxed">
                    {activeArtwork.subtitle}
                  </p>
                </div>

                {/* Studio Lineage & Provenance Callout */}
                {activeArtwork.studioLineage && (
                  <div className="p-3.5 bg-neutral-50 border border-neutral-250 rounded-lg space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-[10px] font-mono-code uppercase tracking-wider text-neutral-500 font-semibold">
                        Studio Provenance:
                      </span>
                      <span className="font-mono-code text-[11px] font-semibold text-blue-800">
                        {activeArtwork.studioLineage}
                      </span>
                    </div>
                    {activeArtwork.productionContext && (
                      <p className="text-neutral-600 font-sans text-xs italic line-clamp-2">
                        {activeArtwork.productionContext}
                      </p>
                    )}
                  </div>
                )}

                {/* Artwork Summary & Concept */}
                <p className="text-xs text-neutral-700 leading-relaxed font-sans line-clamp-3">
                  {activeArtwork.summary}
                </p>

                {/* Medium Specs */}
                <div className="text-[11px] font-mono-code text-neutral-600 border-t border-neutral-200 pt-3">
                  <span className="text-neutral-500 uppercase block mb-0.5 text-[10px]">Physical Medium:</span>
                  <span className="text-neutral-900 line-clamp-2 font-sans">{activeArtwork.medium}</span>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  <button
                    onClick={() => onSelectArtwork(activeArtwork)}
                    className="flex-1 px-4 py-2.5 bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-xs font-mono-code rounded transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>View Artwork & Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {onExploreCV && (
                    <button
                      onClick={onExploreCV}
                      className="px-3.5 py-2.5 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 rounded text-xs font-mono-code transition-colors cursor-pointer text-center shadow-2xs"
                    >
                      Jump to CV
                    </button>
                  )}
                </div>
              </>
            )}

          </div>

        </div>

        {/* Bottom Filmstrip / Mosaic Scrubber (9 items: 01 full grid + 02-09 individual works) */}
        <div className="mt-8 pt-6 border-t border-neutral-200 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono-code text-neutral-600">
            <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
              Exhibition Catalog Filmstrip (01 = Full 8-Grid, 02–09 = Works):
            </span>
            <span className="text-[10px] text-blue-700 font-semibold">
              9 Slides Total · 2010 — 2026 Archive
            </span>
          </div>

          {/* Filmstrip Track with 9 Slots */}
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2">
            {/* Slot 0: Slide 01 Full 8-Work Grid */}
            <button
              onClick={() => setCurrentIndex(0)}
              className={`p-2 rounded text-left transition-all cursor-pointer relative flex flex-col justify-between ${
                currentIndex === 0
                  ? 'bg-white border-2 border-blue-600 text-neutral-950 shadow-sm'
                  : 'bg-neutral-50 border border-neutral-200 text-neutral-600 hover:bg-white hover:text-neutral-950'
              }`}
            >
              <div className="flex items-center justify-between w-full text-[10px] font-mono-code mb-1">
                <span className={currentIndex === 0 ? 'text-blue-700 font-bold' : 'text-neutral-500'}>
                  01/09
                </span>
                <Grid className="w-3 h-3 text-blue-700" />
              </div>
              <p className="text-xs font-serif-display font-medium line-clamp-1 leading-snug">
                8-Work Grid
              </p>
              <div className="mt-1 text-[9px] font-mono-code text-neutral-500 truncate">
                All Works
              </div>
              {currentIndex === 0 && (
                <div className="absolute -bottom-1 left-2 right-2 h-0.5 bg-blue-600 rounded-full" />
              )}
            </button>

            {/* Slots 1 to 8: Slides 02 to 09 */}
            {artworks.map((art, idx) => {
              const slideNum = idx + 1;
              const isSelected = currentIndex === slideNum;
              return (
                <button
                  key={art.id}
                  onClick={() => setCurrentIndex(slideNum)}
                  className={`p-2 rounded text-left transition-all cursor-pointer relative flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-2 border-blue-600 text-neutral-950 shadow-sm'
                      : 'bg-neutral-50 border border-neutral-200 text-neutral-600 hover:bg-white hover:text-neutral-950'
                  }`}
                >
                  <div className="flex items-center justify-between w-full text-[10px] font-mono-code mb-1">
                    <span className={isSelected ? 'text-blue-700 font-bold' : 'text-neutral-500'}>
                      0{slideNum + 1}/09
                    </span>
                    <span className="text-[9px] text-neutral-400">
                      {art.year}
                    </span>
                  </div>

                  <p className="text-xs font-serif-display font-medium line-clamp-1 leading-snug">
                    {art.title.split('(')[0].trim()}
                  </p>

                  <div className="mt-1 text-[9px] font-mono-code text-neutral-500 truncate">
                    {art.studioLineage?.split('(')[0].trim() || art.venue}
                  </div>

                  {isSelected && (
                    <div className="absolute -bottom-1 left-2 right-2 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
