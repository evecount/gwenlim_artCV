import React, { useState, useEffect } from 'react';
import { Artwork, ArtworkImage } from '../types/portfolio';
import { ImageLightboxModal } from './ImageLightboxModal';
import { PlaceholderGraphic } from './DocumentaryImagePlate';
import { getArtworkImages, subscribeToImageUpdates } from '../utils/imageStore';
import { Maximize2, Calendar, MapPin, Layers, Camera, CheckCircle2 } from 'lucide-react';

interface ClassicalArtworkMosaicProps {
  artwork: Artwork;
  onOpenLightboxExternal?: (index: number) => void;
}

export const ClassicalArtworkMosaic: React.FC<ClassicalArtworkMosaicProps> = ({
  artwork,
  onOpenLightboxExternal
}) => {
  const [images, setImages] = useState<ArtworkImage[]>(() =>
    getArtworkImages(artwork.id, artwork.images)
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [imgError, setImgError] = useState(false);
  const [viewMode, setViewMode] = useState<'photo' | 'plate'>('photo');

  // Sync with imageStore updates
  useEffect(() => {
    const update = () => {
      setImages(getArtworkImages(artwork.id, artwork.images));
    };
    update();
    return subscribeToImageUpdates(update);
  }, [artwork.id, artwork.images]);

  // Reset img error on plate change
  useEffect(() => {
    setImgError(false);
  }, [activeImageIndex]);

  const activeImage = images[activeImageIndex] || images[0];

  const handleOpenLightbox = (index: number) => {
    if (onOpenLightboxExternal) {
      onOpenLightboxExternal(index);
    } else {
      setLightboxIndex(index);
    }
  };

  return (
    <div className="space-y-4">
      {/* Top Section Header: Clean Plain English */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-neutral-250 text-xs font-mono-code">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="font-semibold text-neutral-900 uppercase tracking-wide">
            Installation Plates & Visual Context
          </span>
          <span className="text-neutral-400">·</span>
          <span className="text-neutral-600">
            Plate 0{activeImageIndex + 1} of 0{images.length}
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-neutral-600">
          {/* Toggle between Real Photograph and Structural Plate */}
          <div className="flex items-center bg-neutral-100 p-0.5 rounded border border-neutral-250">
            <button
              onClick={() => setViewMode('photo')}
              className={`px-2.5 py-0.5 rounded text-[10px] font-mono-code transition-colors cursor-pointer flex items-center gap-1 ${
                viewMode === 'photo'
                  ? 'bg-neutral-950 text-white font-bold shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <span>📷 Real Photograph</span>
            </button>
            <button
              onClick={() => setViewMode('plate')}
              className={`px-2.5 py-0.5 rounded text-[10px] font-mono-code transition-colors cursor-pointer flex items-center gap-1 ${
                viewMode === 'plate'
                  ? 'bg-cyan-500 text-black font-bold shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <span>📐 Structural Plate</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Side-by-Side Split: Contained Image on Left, Side Description on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left Column: Contained, Non-Stretching Image Frame */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col bg-[#070709] border border-neutral-800 rounded-xl overflow-hidden shadow-md">
          {/* Header bar of plate frame */}
          <div className="px-3.5 py-2 bg-[#09090c] border-b border-neutral-850 flex items-center justify-between text-[10px] font-mono-code text-neutral-400 select-none">
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold">
                PLATE 0{activeImageIndex + 1}
              </span>
              <span className="text-neutral-600">/</span>
              <span className="text-neutral-300 uppercase tracking-wider">
                {activeImage.viewType}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-[9px] uppercase tracking-wider px-1.5 py-0.2 rounded font-medium ${
                viewMode === 'photo' ? 'bg-blue-900/60 text-blue-300' : 'bg-cyan-950 text-cyan-300'
              }`}>
                {viewMode === 'photo' ? 'Authentic Photograph' : 'Structural Plate Blueprint'}
              </span>
              <span className="text-neutral-500">
                {artwork.accessionId}
              </span>
            </div>
          </div>

          {/* Image Display Canvas (Constrained height so lower-res images remain sharp) */}
          <div
            className="relative w-full h-[300px] sm:h-[380px] bg-[#050507] cursor-pointer overflow-hidden flex items-center justify-center p-3 group select-none"
            onClick={() => {
              if (viewMode === 'photo') handleOpenLightbox(activeImageIndex);
            }}
            title={viewMode === 'photo' ? "Click to view high-resolution full photograph" : "Structural Plate Blueprint"}
          >
            {viewMode === 'photo' && activeImage.url && !imgError ? (
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Soft ambient blur backdrop to frame non-16:9 images gracefully */}
                <img
                  src={activeImage.url}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-15 scale-110 pointer-events-none"
                />
                {/* Original crisp photograph with object-contain */}
                <img
                  src={activeImage.url}
                  alt={activeImage.title}
                  onError={() => setImgError(true)}
                  className="relative max-h-full max-w-full object-contain rounded-sm shadow-lg z-10 group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
            ) : (
              <PlaceholderGraphic plateType={activeImage.placeholderType} />
            )}

            {/* Corner registration marks */}
            <div className="absolute inset-0 pointer-events-none p-3 flex flex-col justify-between opacity-40 group-hover:opacity-75 transition-opacity">
              <div className="flex justify-between items-start">
                <div className="w-3 h-3 border-t border-l border-neutral-400" />
                <div className="w-3 h-3 border-t border-r border-neutral-400" />
              </div>
              <div className="flex justify-between items-end">
                <div className="w-3 h-3 border-b border-l border-neutral-400" />
                <div className="w-3 h-3 border-b border-r border-neutral-400" />
              </div>
            </div>

            {/* Hover Fullscreen Lightbox Button (for photo view) */}
            {viewMode === 'photo' && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenLightbox(activeImageIndex);
                }}
                className="absolute bottom-3 right-3 px-3 py-1.5 bg-neutral-900/90 hover:bg-neutral-800 text-white text-[11px] font-mono-code rounded border border-neutral-700 backdrop-blur-md flex items-center gap-1.5 transition-all opacity-90 group-hover:opacity-100 cursor-pointer shadow-lg z-20"
              >
                <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Full Photo</span>
              </button>
            )}
          </div>

          {/* Frame technical footer */}
          <div className="px-3.5 py-2 bg-[#09090c] border-t border-neutral-850 flex items-center justify-between text-[10px] font-mono-code text-neutral-400">
            <span className="truncate max-w-[240px]">
              {activeImage.captureMetadata?.camera || 'Archival Studio Capture'}
            </span>
            <span className="text-neutral-500">
              {activeImage.captureMetadata?.lightingCondition || 'Exhibition Ambient'}
            </span>
          </div>
        </div>

        {/* Right Column: Dedicated Side Description & Context Panel */}
        <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between bg-white border border-neutral-250 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
          <div className="space-y-3">
            {/* Era & Plate Header Badge */}
            <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-neutral-200">
              <span className="px-2.5 py-1 bg-neutral-950 text-white text-[10px] font-mono-code font-bold rounded uppercase tracking-wider">
                Era: {artwork.year}
              </span>
              <span className="px-2 py-0.5 bg-blue-50 text-blue-800 border border-blue-200 text-[10px] font-mono-code font-medium rounded uppercase tracking-wider">
                {activeImage.viewType}
              </span>
            </div>

            {/* Photo Title */}
            <div>
              <span className="text-[10px] font-mono-code uppercase tracking-wider text-neutral-500 block mb-1">
                Plate 0{activeImageIndex + 1} Record:
              </span>
              <h3 className="text-base sm:text-lg font-serif-display font-bold text-neutral-950 leading-snug">
                {activeImage.title}
              </h3>
            </div>

            {/* What You Are Looking At (Plain English Context) */}
            <div className="space-y-1 bg-neutral-50 border border-neutral-200/80 rounded-lg p-3">
              <span className="text-[10px] font-mono-code uppercase tracking-wider text-blue-700 font-bold block">
                What you are looking at:
              </span>
              <p className="text-xs text-neutral-700 font-sans leading-relaxed">
                {activeImage.caption || `Installation view of ${artwork.title} documenting spatial positioning, physical apparatus structure, and materiality.`}
              </p>
            </div>

            {/* Era & Exhibition Context Details */}
            <div className="space-y-2 pt-1 text-xs">
              <div className="flex items-start gap-2 text-neutral-700">
                <Calendar className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-neutral-900">Period / Date:</span>
                  <span className="ml-1 font-mono-code text-neutral-800">{artwork.year}</span>
                  <span className="text-neutral-500 ml-1">({artwork.city})</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-neutral-700">
                <MapPin className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-neutral-900">Venue / Setting:</span>
                  <span className="ml-1 text-neutral-800">{artwork.venue}</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-neutral-700">
                <Layers className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-neutral-900">Medium & Hardware:</span>
                  <span className="ml-1 font-mono-code text-[11px] text-neutral-600 block line-clamp-2">
                    {artwork.medium}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Plate Selector */}
          <div className="pt-3 border-t border-neutral-200 space-y-2">
            <span className="text-[10px] font-mono-code uppercase tracking-wider text-neutral-500 block">
              Browse Artwork Plates:
            </span>
            <div className="grid grid-cols-3 gap-2">
              {images.map((img, idx) => {
                const isSelected = idx === activeImageIndex;
                return (
                  <button
                    key={img.id}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`p-2 rounded-lg border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-neutral-950 bg-neutral-950 text-white shadow-xs'
                        : 'border-neutral-250 bg-white hover:bg-neutral-100 text-neutral-800'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono-code">
                      <span className={isSelected ? 'text-blue-300 font-bold' : 'text-neutral-500'}>
                        0{idx + 1}
                      </span>
                      <span className={`text-[9px] uppercase ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                        {idx === 0 ? 'Main' : idx === 1 ? 'Detail' : 'Action'}
                      </span>
                    </div>
                    <div className={`text-[11px] font-serif-display font-medium truncate mt-0.5 ${
                      isSelected ? 'text-white' : 'text-neutral-900'
                    }`}>
                      {img.viewType}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <ImageLightboxModal
          images={images}
          currentIndex={lightboxIndex}
          artworkTitle={artwork.title}
          artworkId={artwork.id}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(idx) => {
            setLightboxIndex(idx);
            setActiveImageIndex(idx);
          }}
        />
      )}
    </div>
  );
};
