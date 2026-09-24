import React, { useEffect } from 'react';
import { ArtworkImage } from '../types/portfolio';
import { DocumentaryImagePlate } from './DocumentaryImagePlate';

interface ImageLightboxModalProps {
  images: ArtworkImage[];
  currentIndex: number | null;
  artworkTitle: string;
  artworkId: string;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  images,
  currentIndex,
  artworkTitle,
  artworkId,
  onClose,
  onNavigate
}) => {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) onNavigate(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        if (currentIndex < images.length - 1) onNavigate(currentIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, images.length, onClose, onNavigate]);

  if (currentIndex === null || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6"
      onClick={onClose}
    >
      {/* Lightbox Top Bar */}
      <div
        className="flex items-center justify-between text-xs font-mono-code text-neutral-400 pb-3 border-b border-neutral-800"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-white font-medium">{artworkTitle}</span>
          <span className="text-neutral-600">·</span>
          <span>PLATE 0{currentIndex + 1} OF 0{images.length}</span>
          <span className="text-neutral-600">·</span>
          <span className="text-neutral-300 uppercase">{currentImage.viewType}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[10px] text-neutral-500 hidden sm:inline">
            Use Left / Right arrow keys to navigate · Esc to close
          </span>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Center Image Display Area with Left/Right Buttons */}
      <div
        className="relative flex-1 flex items-center justify-center my-3 max-h-[75vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Previous Button */}
        {currentIndex > 0 && (
          <button
            onClick={() => onNavigate(currentIndex - 1)}
            className="absolute left-2 sm:left-4 z-10 p-3 bg-black/70 hover:bg-neutral-800 border border-neutral-700/80 rounded-full text-white transition-colors cursor-pointer"
            aria-label="Previous plate"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Next Button */}
        {currentIndex < images.length - 1 && (
          <button
            onClick={() => onNavigate(currentIndex + 1)}
            className="absolute right-2 sm:right-4 z-10 p-3 bg-black/70 hover:bg-neutral-800 border border-neutral-700/80 rounded-full text-white transition-colors cursor-pointer"
            aria-label="Next plate"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Plate container */}
        <div className="w-full max-w-4xl max-h-full">
          <DocumentaryImagePlate
            image={currentImage}
            artworkId={artworkId}
            index={currentIndex}
            totalImages={images.length}
            compact={false}
            allowReplace={false}
          />
        </div>
      </div>

      {/* Lightbox Footer Thumbnail Strip */}
      <div
        className="pt-3 border-t border-neutral-800 flex items-center justify-center gap-3 overflow-x-auto"
        onClick={e => e.stopPropagation()}
      >
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => onNavigate(i)}
            className={`w-20 sm:w-28 h-12 rounded border transition-all overflow-hidden relative cursor-pointer ${
              i === currentIndex
                ? 'border-white ring-1 ring-white opacity-100 scale-105'
                : 'border-neutral-800 opacity-50 hover:opacity-80'
            }`}
          >
            {img.url ? (
              <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-[9px] font-mono-code text-neutral-400">
                0{i + 1}
              </div>
            )}
            <div className="absolute bottom-0 inset-x-0 bg-black/80 text-[8px] font-mono-code text-neutral-300 text-center py-0.5 truncate px-1">
              Plate 0{i + 1}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
