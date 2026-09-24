import React, { useState, useEffect } from 'react';
import { Artwork, ArtworkImage } from '../types/portfolio';
import { DocumentaryImagePlate } from './DocumentaryImagePlate';
import { ImageLightboxModal } from './ImageLightboxModal';
import { getArtworkImages, subscribeToImageUpdates, resetArtworkImages } from '../utils/imageStore';
import { Maximize2, RotateCcw, Camera, Layers } from 'lucide-react';

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

  // Sync with imageStore updates
  useEffect(() => {
    const update = () => {
      setImages(getArtworkImages(artwork.id, artwork.images));
    };
    update();
    return subscribeToImageUpdates(update);
  }, [artwork.id, artwork.images]);

  const activeImage = images[activeImageIndex] || images[0];

  const handleResetAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Revert all replaced images for this artwork back to default archival placeholders?')) {
      resetArtworkImages(artwork.id);
    }
  };

  const hasCustomImages = images.some(img => img.isCustom);

  return (
    <div className="space-y-4">
      {/* Primary Active Plate Viewport */}
      <div className="relative group bg-neutral-950 rounded-lg overflow-hidden border border-neutral-800 shadow-xl">
        <DocumentaryImagePlate
          image={activeImage}
          artworkId={artwork.id}
          index={activeImageIndex}
          totalImages={images.length}
          compact={false}
          allowReplace={true}
          onOpenLightbox={(idx) => {
            if (onOpenLightboxExternal) onOpenLightboxExternal(idx);
            else setLightboxIndex(idx);
          }}
        />

        {/* Floating Quick Lightbox Trigger */}
        <button
          onClick={() => setLightboxIndex(activeImageIndex)}
          className="absolute top-3 right-3 px-2.5 py-1.5 bg-black/80 hover:bg-black text-white text-[11px] font-mono-code rounded border border-neutral-700/80 backdrop-blur-md flex items-center gap-1.5 transition-all opacity-90 hover:opacity-100 cursor-pointer shadow-lg z-10"
          title="Open high-resolution fullscreen lightbox"
        >
          <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>Fullscreen Lightbox</span>
        </button>
      </div>

      {/* Classical Thumbnail Mosaic Grid */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono-code text-neutral-500 pb-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-700">
              Archival Plate Mosaic ({images.length} Views):
            </span>
            {hasCustomImages && (
              <button
                onClick={handleResetAll}
                className="text-[10px] text-amber-600 hover:text-amber-800 underline flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-2.5 h-2.5" />
                <span>Reset to Default Plates</span>
              </button>
            )}
          </div>
          <span className="text-[11px] text-neutral-600">
            Click thumbnail to inspect plate
          </span>
        </div>

        {/* 3-Column Thumbnail Mosaic */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {images.map((img, idx) => {
            const isSelected = idx === activeImageIndex;
            return (
              <button
                key={img.id}
                onClick={() => setActiveImageIndex(idx)}
                className={`text-left rounded-lg border p-2.5 transition-all cursor-pointer flex flex-col justify-between group/mosaic ${
                  isSelected
                    ? 'border-neutral-900 bg-neutral-900 text-white shadow-md ring-1 ring-neutral-900'
                    : 'border-neutral-250 bg-neutral-50 hover:bg-white hover:border-neutral-400 text-neutral-800'
                }`}
              >
                <div className="space-y-1.5 w-full">
                  <div className="flex items-center justify-between text-[10px] font-mono-code">
                    <span className={isSelected ? 'text-cyan-300 font-bold' : 'text-neutral-500 font-semibold'}>
                      PLATE 0{idx + 1}
                    </span>
                    <span className={`uppercase tracking-wider text-[9px] px-1.5 py-0.5 rounded ${
                      isSelected
                        ? 'bg-neutral-800 text-neutral-300 border border-neutral-700'
                        : 'bg-neutral-200 text-neutral-700'
                    }`}>
                      {img.viewType}
                    </span>
                  </div>

                  <p className={`text-xs font-serif-display font-medium line-clamp-1 ${
                    isSelected ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {img.title}
                  </p>
                </div>

                <div className="mt-2.5 pt-2 border-t border-neutral-200/50 flex items-center justify-between text-[10px] font-mono-code">
                  <span className={`truncate max-w-[150px] ${isSelected ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {img.isCustom ? 'Custom Image' : img.captureMetadata?.camera || 'Archival Lens'}
                  </span>
                  <span className={`text-[9px] uppercase font-semibold ${
                    isSelected ? 'text-cyan-300' : 'text-neutral-400 group-hover/mosaic:text-neutral-700'
                  }`}>
                    {isSelected ? '● Active' : 'Select →'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
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
