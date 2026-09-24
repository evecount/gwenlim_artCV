import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Camera, Download, HardDrive } from 'lucide-react';
import { ArchivalStudioPhoto } from '../types/portfolio';
import { resolveAsset } from '../utils/resolveAsset';

interface ArchivalPhotoLightboxModalProps {
  photo: ArchivalStudioPhoto | null;
  displayUrl: string;
  allPhotos: ArchivalStudioPhoto[];
  artworkTitle: string;
  onClose: () => void;
  onNavigate: (photo: ArchivalStudioPhoto) => void;
}

export const ArchivalPhotoLightboxModal: React.FC<ArchivalPhotoLightboxModalProps> = ({
  photo,
  displayUrl,
  allPhotos,
  artworkTitle,
  onClose,
  onNavigate
}) => {
  useEffect(() => {
    if (!photo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        const idx = allPhotos.findIndex(p => p.id === photo.id);
        if (idx > 0) onNavigate(allPhotos[idx - 1]);
      } else if (e.key === 'ArrowRight') {
        const idx = allPhotos.findIndex(p => p.id === photo.id);
        if (idx < allPhotos.length - 1) onNavigate(allPhotos[idx + 1]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, allPhotos, onClose, onNavigate]);

  if (!photo) return null;

  const currentIndex = allPhotos.findIndex(p => p.id === photo.id);

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
          <span className="text-blue-400 font-semibold">{photo.filename}</span>
          <span className="text-neutral-600">·</span>
          <span>IMAGE 0{currentIndex + 1} OF 0{allPhotos.length}</span>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 hover:bg-neutral-800 text-neutral-400 hover:text-white rounded transition-colors cursor-pointer"
          title="Close (Esc)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Viewport with Previous/Next Controls */}
      <div
        className="flex-1 relative flex items-center justify-center p-2 sm:p-6 min-h-0"
        onClick={e => e.stopPropagation()}
      >
        {/* Previous Button */}
        {currentIndex > 0 && (
          <button
            onClick={() => onNavigate(allPhotos[currentIndex - 1])}
            className="absolute left-2 sm:left-4 z-10 w-10 h-10 rounded-full bg-neutral-900/80 hover:bg-blue-600 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
            title="Previous photograph (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {currentIndex < allPhotos.length - 1 && (
          <button
            onClick={() => onNavigate(allPhotos[currentIndex + 1])}
            className="absolute right-2 sm:right-4 z-10 w-10 h-10 rounded-full bg-neutral-900/80 hover:bg-blue-600 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
            title="Next photograph (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Display Image */}
        <div className="max-w-5xl max-h-full flex items-center justify-center rounded-lg overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl">
          <LightboxImage photo={photo} displayUrl={displayUrl} />
        </div>
      </div>

      {/* Lightbox Bottom Metadata Bar */}
      <div
        className="pt-3 border-t border-neutral-800 text-xs font-mono-code text-neutral-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
        onClick={e => e.stopPropagation()}
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-white font-serif-display text-sm font-semibold">
              {photo.title}
            </span>
            <span className="px-2 py-0.5 bg-neutral-800 text-neutral-300 rounded text-[10px]">
              {photo.category}
            </span>
          </div>
          <p className="text-neutral-400 font-sans text-xs max-w-2xl">
            {photo.context}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-neutral-400 text-[11px]">
          <div className="flex items-center gap-1.5 text-blue-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>{photo.dateStr}</span>
          </div>
          {photo.location && (
            <div className="flex items-center gap-1.5 text-neutral-300">
              <MapPin className="w-3.5 h-3.5" />
              <span>{photo.location}</span>
            </div>
          )}
          {photo.metadataNote && (
            <div className="hidden lg:flex items-center gap-1.5 text-neutral-500 italic max-w-xs truncate">
              <Camera className="w-3.5 h-3.5" />
              <span title={photo.metadataNote}>{photo.metadataNote}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const LightboxImage: React.FC<{ photo: ArchivalStudioPhoto; displayUrl: string }> = ({
  photo,
  displayUrl
}) => {
  const [candidateIndex, setCandidateIndex] = React.useState(0);
  const [hasError, setHasError] = React.useState(false);

  const candidates = React.useMemo(() => {
    const cleanName = photo.filename.trim();
    return [
      resolveAsset(displayUrl),
      resolveAsset(`/assets/ART_Images/${cleanName}.jpg`),
      resolveAsset(`/assets/ART_Images/${cleanName}.JPG`),
      resolveAsset(`/assets/ART_Images/${cleanName}.png`),
      resolveAsset(`/assets/ART_Images/${cleanName}.PNG`),
      resolveAsset(`/assets/ART_Images/${cleanName}.jpeg`),
      resolveAsset(`/assets/ART_Images/${cleanName}`),
      resolveAsset(photo.url)
    ].filter((v, i, a) => Boolean(v) && a.indexOf(v) === i);
  }, [displayUrl, photo.filename, photo.url]);

  const currentSrc = candidates[candidateIndex] || displayUrl;

  React.useEffect(() => {
    setCandidateIndex(0);
    setHasError(false);
  }, [displayUrl, candidates]);

  const handleError = () => {
    if (candidateIndex < candidates.length - 1) {
      setCandidateIndex(prev => prev + 1);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className="w-96 h-64 flex flex-col items-center justify-center p-6 text-neutral-400 font-mono-code text-xs text-center space-y-2">
        <Camera className="w-10 h-10 text-neutral-600 mb-2" />
        <span className="text-white font-medium">{photo.filename}</span>
        <span className="text-neutral-500 text-[11px]">{photo.title}</span>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={photo.title}
      onError={handleError}
      className="max-h-[75vh] max-w-full object-contain"
    />
  );
};
