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
      className="relative bg-neutral-950 text-white border-b border-neutral-800 overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Top indicator bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-850">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[10px] font-mono-code uppercase tracking-widest text-blue-400 font-bold">
            Exhibition Monograph · Selected Spatial & Computational Works
          </span>
          <span className="text-neutral-600 hidden md:inline">/</span>
          <span className="text-[10px] font-mono-code text-neutral-400 hidden md:inline">
            2010 — 2026 Archive
          </span>
        </div>

        {/* Carousel controls & Play/Pause */}
        <div className="flex items-center gap-3">
          {/* Slide indicator (01/09 to 09/09) */}
          <div className="flex items-center gap-1.5 text-xs font-mono-code text-neutral-400">
            <span className="text-white font-bold text-sm tabular-nums">
              0{currentIndex + 1}
            </span>
            <span className="text-neutral-600">/</span>
            <span className="tabular-nums">0{totalSlides}</span>
          </div>

          <div className="h-4 w-px bg-neutral-800" />

          {/* Speed Toggle (3s / 5s) */}
          <div className="hidden md:flex items-center gap-1 bg-neutral-900 border border-neutral-800 rounded px-1.5 py-1 text-[10px] font-mono-code text-neutral-400">
            <span className="text-neutral-500">Auto:</span>
            <button
              onClick={() => setSlideDuration(3000)}
              className={`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                slideDuration === 3000 ? 'bg-blue-700/30 text-blue-400 font-bold' : 'hover:text-white'
              }`}
              title="3-second brisk autoplay"
            >
              3s
            </button>
            <button
              onClick={() => setSlideDuration(5000)}
              className={`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                slideDuration === 5000 ? 'bg-blue-700/30 text-blue-400 font-bold' : 'hover:text-white'
              }`}
              title="5-second deliberate autoplay"
            >
              5s
            </button>
          </div>

          <div className="h-4 w-px bg-neutral-800" />

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded text-neutral-400 hover:text-white hover:bg-neutral-850 transition-colors cursor-pointer"
            title={isPlaying ? 'Pause slideshow' : 'Resume auto-play'}
            aria-label={isPlaying ? 'Pause slideshow' : 'Resume auto-play'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          {/* Top Nav Carousel Chevrons: Bright Solid NAV Blue-700 Squares with Bold Black Chevrons & Animation */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono-code text-blue-400 font-semibold uppercase tracking-wider hidden sm:inline-block animate-pulse">
              Browse Works:
            </span>
            <button
              onClick={handlePrev}
              className="w-8 h-8 sm:w-9 sm:h-9 bg-blue-700 hover:bg-blue-600 active:bg-blue-800 active:scale-95 text-black rounded-xs sm:rounded flex items-center justify-center transition-all cursor-pointer shadow-lg shadow-blue-700/40 animate-beacon-blue group"
              title="Previous slide (Press to browse)"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-black stroke-[3.5] animate-nudge-left transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 sm:w-9 sm:h-9 bg-blue-700 hover:bg-blue-600 active:bg-blue-800 active:scale-95 text-black rounded-xs sm:rounded flex items-center justify-center transition-all cursor-pointer shadow-lg shadow-blue-700/40 animate-beacon-blue group"
              title="Next slide (Press to browse)"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-black stroke-[3.5] animate-nudge-right transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Slide Progress Bar (countdown indicator) */}
      <div className="w-full h-0.5 bg-neutral-900/80 overflow-hidden relative">
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
              <div className="relative rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900/90 shadow-2xl p-4 sm:p-5 space-y-3">
                {/* 8-Grid Header */}
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Grid className="w-4 h-4 text-blue-400" />
                    <span className="text-[11px] font-mono-code uppercase tracking-wider text-neutral-200 font-bold">
                      Slide 01/09: Archival Matrix · 8 Major Installations (2010 — 2026)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono-code text-blue-400 hidden sm:inline">
                    Click any tile to inspect
                  </span>
                </div>

                {/* 8-Tile Mosaic Grid */}
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
                        <div className="absolute inset-0 opacity-40 group-hover/tile:opacity-65 transition-opacity">
                          <DocumentaryImagePlate
                            image={thumb}
                            artworkId={art.id}
                            index={0}
                            totalImages={1}
                            compact={true}
                            allowReplace={false}
                          />
                        </div>

                        {/* Top tag */}
                        <div className="relative z-10 flex items-center justify-between text-[9px] font-mono-code">
                          <span className="px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-sm text-blue-300 font-bold border border-neutral-800">
                            0{idx + 2}/09
                          </span>
                          <span className="px-1 py-0.5 rounded bg-black/70 text-neutral-300">
                            {art.year}
                          </span>
                        </div>

                        {/* Bottom label */}
                        <div className="relative z-10 bg-black/85 backdrop-blur-sm p-1.5 rounded border border-neutral-800/80">
                          <p className="text-[11px] font-serif-display font-bold text-white line-clamp-1 group-hover/tile:text-blue-300 transition-colors">
                            {art.title.split('(')[0].trim()}
                          </p>
                          <p className="text-[8px] font-mono-code text-neutral-400 truncate mt-0.5">
                            {art.city} · {art.studioLineage?.split('(')[0].trim() || art.venue}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Grid Footer Bar */}
                <div className="flex items-center justify-between text-[11px] font-mono-code text-neutral-400 pt-1 border-t border-neutral-800/80">
                  <span className="italic">
                    Comprehensive 16-Year Trajectory across Canada & Singapore
                  </span>
                  <button
                    onClick={() => setCurrentIndex(1)}
                    className="text-blue-400 hover:text-blue-300 font-semibold cursor-pointer underline flex items-center gap-1"
                  >
                    <span>Tour Work-by-Work</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* Side Floating Nav Chevrons (Nav Blue-700 Squares with Black Chevrons & Animation) */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-blue-700 hover:bg-blue-600 active:bg-blue-800 active:scale-95 text-black rounded-xs sm:rounded flex items-center justify-center transition-all cursor-pointer shadow-xl shadow-blue-700/50 animate-beacon-blue z-20 group/side-prev"
                  title="Previous slide (Press to browse)"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-black stroke-[3.5] animate-nudge-left" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-blue-700 hover:bg-blue-600 active:bg-blue-800 active:scale-95 text-black rounded-xs sm:rounded flex items-center justify-center transition-all cursor-pointer shadow-xl shadow-blue-700/50 animate-beacon-blue z-20 group/side-next"
                  title="Next slide (Press to browse)"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-black stroke-[3.5] animate-nudge-right" />
                </button>
              </div>
            ) : (
              /* SLIDES 02/09 to 09/09: Individual Artwork Plate */
              <div
                className="relative group cursor-pointer rounded-lg overflow-hidden border border-neutral-800 hover:border-neutral-700 shadow-2xl transition-all"
                onClick={() => onSelectArtwork(activeArtwork)}
                title="Click to view classical gallery mosaic and curatorial thesis"
              >
                {/* Image Plate */}
                <DocumentaryImagePlate
                  image={currentImage}
                  artworkId={activeArtwork.id}
                  index={activePlateIndex}
                  totalImages={activeImages.length}
                  compact={false}
                  allowReplace={false}
                />

                {/* Side Floating Nav Chevrons: Bright Solid NAV Blue-700 Squares with Black Chevrons & Pulse/Nudge */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-blue-700 hover:bg-blue-600 active:bg-blue-800 active:scale-95 text-black rounded-xs sm:rounded flex items-center justify-center transition-all cursor-pointer shadow-xl shadow-blue-700/50 animate-beacon-blue z-20 group/side-prev"
                  title="Previous artwork (Press to browse)"
                  aria-label="Previous artwork"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-black stroke-[3.5] animate-nudge-left" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-blue-700 hover:bg-blue-600 active:bg-blue-800 active:scale-95 text-black rounded-xs sm:rounded flex items-center justify-center transition-all cursor-pointer shadow-xl shadow-blue-700/50 animate-beacon-blue z-20 group/side-next"
                  title="Next artwork (Press to browse)"
                  aria-label="Next artwork"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-black stroke-[3.5] animate-nudge-right" />
                </button>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg border border-neutral-700 text-xs font-mono-code text-white flex items-center gap-2 shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Open Classical Monograph & Plate Mosaic</span>
                  </div>
                </div>

                {/* Plate View Switcher (Bottom Left) */}
                <div
                  className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2.5 py-1.5 rounded border border-neutral-800 text-[11px] font-mono-code z-10"
                  onClick={e => e.stopPropagation()}
                >
                  <span className="text-neutral-400 text-[10px] uppercase font-semibold">Plates:</span>
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
                  <span className="text-neutral-500 mx-1">|</span>
                  <span className="text-blue-300 text-[10px] uppercase font-medium">
                    {currentImage.viewType}
                  </span>
                </div>

                {/* Accession ID tag (Top Right) */}
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-neutral-800 text-[10px] font-mono-code text-neutral-400">
                  {activeArtwork.accessionId}
                </div>
              </div>
            )}

            {/* Caption bar */}
            {!isOverviewSlide && (
              <div className="flex items-center justify-between text-xs text-neutral-400 font-mono-code px-1">
                <span className="italic truncate max-w-md">
                  {currentImage.caption || currentImage.title}
                </span>
                <span className="text-[10px] text-neutral-500">
                  {currentImage.captureMetadata?.camera || 'Archival Photographic Rig'}
                </span>
              </div>
            )}
          </div>

          {/* Right Column: Monographic Information Lockup */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-5">
            {isOverviewSlide ? (
              /* SLIDE 01/09: Curatorial Overview Information */
              <>
                <div className="flex items-center gap-2 text-xs font-mono-code text-neutral-400">
                  <span className="text-blue-400 font-bold">2010 — 2026</span>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <span>Toronto & Singapore</span>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <span className="text-neutral-300">8 Institutional Works</span>
                </div>

                <div className="space-y-2">
                  <h2
                    onClick={() => setCurrentIndex(1)}
                    className="text-2xl sm:text-3xl lg:text-3xl font-serif-display font-medium text-white hover:text-blue-300 transition-colors cursor-pointer leading-tight tracking-tight"
                  >
                    Curatorial Catalog & Trajectory Index
                  </h2>
                  <p className="text-xs sm:text-sm font-serif-display italic text-neutral-400 leading-relaxed">
                    Sixteen-year trajectory across participatory lens mechanics, critique of observer bias, physical computing, and machine interiority.
                  </p>
                </div>

                {/* Studio Lineage Breakdown Card */}
                <div className="p-3 bg-neutral-900/90 border border-neutral-800 rounded-lg space-y-2 text-xs">
                  <div className="text-[10px] font-mono-code uppercase tracking-wider text-blue-400 font-semibold">
                    Studio Lineage & Production Chronology:
                  </div>
                  <div className="space-y-1.5 font-mono-code text-[11px] text-neutral-300">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-400">Akin Collective (2011–15):</span>
                      <span className="text-white font-medium">TEDx, Kensington, Pavilions</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-400">Motion & Still (2014–23):</span>
                      <span className="text-white font-medium">Ultimate Selfie (MTCC)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-400">Flick the Switch (2019–24):</span>
                      <span className="text-white font-medium">Deconstructing Capital</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-400">Research Systems (2023–26):</span>
                      <span className="text-blue-300 font-medium">The Klingon Topology</span>
                    </div>
                  </div>
                </div>

                {/* Conceptual Summary */}
                <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                  Lim’s practice deconstructs institutional observer bias—the unexamined assumption that because imaging and surveillance technologies exist, systems possess an inherent entitlement to record and extract human subjects.
                </p>

                {/* Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  <button
                    onClick={() => setCurrentIndex(1)}
                    className="flex-1 px-4 py-2.5 bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-white font-semibold text-xs font-mono-code rounded transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Tour Work 01 (Klingon Topology)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {onExploreCV && (
                    <button
                      onClick={onExploreCV}
                      className="px-3.5 py-2.5 bg-neutral-900 hover:bg-neutral-850 text-neutral-300 hover:text-white border border-neutral-800 rounded text-xs font-mono-code transition-colors cursor-pointer text-center"
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
                <div className="flex items-center gap-2 text-xs font-mono-code text-neutral-400">
                  <span className="text-white font-bold">{activeArtwork.year}</span>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <span>{activeArtwork.city}</span>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <span className="text-neutral-400 truncate">{activeArtwork.venue}</span>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-2">
                  <h2
                    onClick={() => onSelectArtwork(activeArtwork)}
                    className="text-2xl sm:text-3xl lg:text-3xl font-serif-display font-medium text-white hover:text-blue-300 transition-colors cursor-pointer leading-tight tracking-tight"
                  >
                    {activeArtwork.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-serif-display italic text-neutral-400 leading-relaxed">
                    {activeArtwork.subtitle}
                  </p>
                </div>

                {/* Studio Lineage & Provenance Callout */}
                {activeArtwork.studioLineage && (
                  <div className="p-3 bg-neutral-900/90 border border-neutral-800 rounded-lg space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-[10px] font-mono-code uppercase tracking-wider text-neutral-400 font-semibold">
                        Studio Provenance:
                      </span>
                      <span className="font-mono-code text-[11px] font-semibold text-blue-300">
                        {activeArtwork.studioLineage}
                      </span>
                    </div>
                    {activeArtwork.productionContext && (
                      <p className="text-neutral-400 font-sans text-xs italic line-clamp-2">
                        {activeArtwork.productionContext}
                      </p>
                    )}
                  </div>
                )}

                {/* Artwork Summary & Concept */}
                <p className="text-xs text-neutral-300 leading-relaxed font-sans line-clamp-3">
                  {activeArtwork.summary}
                </p>

                {/* Medium Specs */}
                <div className="text-[11px] font-mono-code text-neutral-400 border-t border-neutral-850 pt-3">
                  <span className="text-neutral-500 uppercase block mb-0.5 text-[10px]">Physical Medium:</span>
                  <span className="text-neutral-200 line-clamp-2 font-sans">{activeArtwork.medium}</span>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  <button
                    onClick={() => onSelectArtwork(activeArtwork)}
                    className="flex-1 px-4 py-2.5 bg-white hover:bg-neutral-200 text-neutral-950 font-semibold text-xs font-mono-code rounded transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Inspect Work & Plate Mosaic</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {onExploreCV && (
                    <button
                      onClick={onExploreCV}
                      className="px-3.5 py-2.5 bg-neutral-900 hover:bg-neutral-850 text-neutral-300 hover:text-white border border-neutral-800 rounded text-xs font-mono-code transition-colors cursor-pointer text-center"
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
        <div className="mt-8 pt-6 border-t border-neutral-850 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono-code text-neutral-400">
            <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">
              Exhibition Catalog Filmstrip (01 = Full 8-Grid, 02–09 = Works):
            </span>
            <span className="text-[10px] text-blue-400 font-semibold">
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
                  ? 'bg-neutral-900 border-2 border-blue-500 text-white shadow-md'
                  : 'bg-neutral-900/60 border border-neutral-800 text-neutral-400 hover:bg-neutral-850 hover:text-neutral-200'
              }`}
            >
              <div className="flex items-center justify-between w-full text-[10px] font-mono-code mb-1">
                <span className={currentIndex === 0 ? 'text-blue-400 font-bold' : 'text-neutral-400'}>
                  01/09
                </span>
                <Grid className="w-3 h-3 text-blue-400" />
              </div>
              <p className="text-xs font-serif-display font-medium line-clamp-1 leading-snug">
                8-Work Grid
              </p>
              <div className="mt-1 text-[9px] font-mono-code text-neutral-500 truncate">
                All Works
              </div>
              {currentIndex === 0 && (
                <div className="absolute -bottom-1 left-2 right-2 h-0.5 bg-blue-500 rounded-full" />
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
                      ? 'bg-neutral-900 border-2 border-blue-500 text-white shadow-md'
                      : 'bg-neutral-900/60 border border-neutral-800 text-neutral-400 hover:bg-neutral-850 hover:text-neutral-200'
                  }`}
                >
                  <div className="flex items-center justify-between w-full text-[10px] font-mono-code mb-1">
                    <span className={isSelected ? 'text-blue-400 font-bold' : 'text-neutral-500'}>
                      0{slideNum + 1}/09
                    </span>
                    <span className="text-[9px] text-neutral-500">
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
                    <div className="absolute -bottom-1 left-2 right-2 h-0.5 bg-blue-500 rounded-full" />
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
