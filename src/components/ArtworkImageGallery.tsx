import React, { useState, useEffect } from 'react';
import { Artwork, ArtworkImage } from '../types/portfolio';
import { DocumentaryImagePlate } from './DocumentaryImagePlate';
import { ImageLightboxModal } from './ImageLightboxModal';
import { getArtworkImages, subscribeToImageUpdates } from '../utils/imageStore';

interface ArtworkImageGalleryProps {
  artwork: Artwork;
  compact?: boolean;
  preferPlateGraphic?: boolean;
}

export const ArtworkImageGallery: React.FC<ArtworkImageGalleryProps> = ({
  artwork,
  compact = false,
  preferPlateGraphic
}) => {
  const [images, setImages] = useState<ArtworkImage[]>(() =>
    getArtworkImages(artwork.id, artwork.images)
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Sync with imageStore updates
  useEffect(() => {
    const update = () => {
      setImages(getArtworkImages(artwork.id, artwork.images));
    };
    update();
    return subscribeToImageUpdates(update);
  }, [artwork.id, artwork.images]);

  const activeImage = images[activeImageIndex] || images[0];

  if (compact) {
    // Compact card preview with 1-3 image thumbnail cycle (uses structural plate graphics on grid)
    return (
      <div className="relative group">
        <DocumentaryImagePlate
          image={activeImage}
          artworkId={artwork.id}
          index={activeImageIndex}
          totalImages={images.length}
          compact={true}
          allowReplace={false}
          preferPlateGraphic={preferPlateGraphic !== undefined ? preferPlateGraphic : true}
          onOpenLightbox={(idx) => setLightboxIndex(idx)}
        />

        {/* Thumbnail switcher pills on card */}
        <div
          className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-auto"
          onClick={e => e.stopPropagation()}
        >
          {images.length > 1 ? (
            <div className="flex items-center gap-1.5 bg-black/85 backdrop-blur-sm px-2 py-1 rounded border border-neutral-800 text-[10px] font-mono-code text-neutral-300">
              <span className="text-neutral-400">Plate:</span>
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex(i);
                  }}
                  className={`w-4 h-4 rounded text-[9px] flex items-center justify-center transition-all cursor-pointer ${
                    i === activeImageIndex
                      ? 'bg-cyan-400 text-black font-bold'
                      : 'bg-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                  aria-label={`View plate 0${i + 1}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          ) : (
            <span className="bg-black/85 backdrop-blur-sm px-2 py-0.5 rounded border border-neutral-800 text-[9px] font-mono-code text-cyan-300">
              Structural Plate 01
            </span>
          )}

          <span className="bg-black/85 backdrop-blur-sm px-2 py-1 rounded border border-neutral-800 text-[9px] font-mono-code text-neutral-300 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>Photos Inside →</span>
          </span>
        </div>

        {lightboxIndex !== null && (
          <ImageLightboxModal
            images={images}
            currentIndex={lightboxIndex}
            artworkTitle={artwork.title}
            artworkId={artwork.id}
            onClose={() => setLightboxIndex(null)}
            onNavigate={(idx) => setLightboxIndex(idx)}
          />
        )}
      </div>
    );
  }

  // Full detailed gallery plate for WorkDetailModal
  return (
    <div className="space-y-4">
      {/* Gallery Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-neutral-800 gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono-code uppercase tracking-widest text-neutral-400">
            Documentary Image Archive ({images.length} Plates)
          </span>
        </div>

        <div className="text-xs font-mono-code text-neutral-400">
          Showing Plate 0{activeImageIndex + 1} of 0{images.length} · {activeImage.viewType}
        </div>
      </div>

      {/* Main Selected Image Plate */}
      <DocumentaryImagePlate
        image={activeImage}
        artworkId={artwork.id}
        index={activeImageIndex}
        totalImages={images.length}
        compact={false}
        allowReplace={false}
        onOpenLightbox={(idx) => setLightboxIndex(idx)}
      />

      {/* 1 to 3 Image Selector Strips */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
        {images.map((img, idx) => {
          const isSelected = idx === activeImageIndex;
          return (
            <button
              key={img.id}
              onClick={() => setActiveImageIndex(idx)}
              className={`text-left p-2.5 rounded-lg border transition-all cursor-pointer relative flex flex-col justify-between ${
                isSelected
                  ? 'border-neutral-400 bg-neutral-900 ring-1 ring-neutral-500'
                  : 'border-neutral-850 bg-neutral-950/60 hover:bg-neutral-900/80 hover:border-neutral-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1 text-[10px] font-mono-code">
                <span className={isSelected ? 'text-white font-semibold' : 'text-neutral-400'}>
                  PLATE 0{idx + 1}
                </span>
                <span className="text-neutral-500 uppercase tracking-wider text-[9px]">
                  {img.viewType}
                </span>
              </div>

              <div className="text-xs font-serif-display font-medium text-neutral-200 line-clamp-1">
                {img.title}
              </div>

              <div className="mt-2 text-[10px] font-mono-code text-neutral-500 truncate">
                {img.isCustom ? '✓ Custom uploaded photo' : img.captureMetadata?.camera || 'Archival plate'}
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox Modal */}
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
