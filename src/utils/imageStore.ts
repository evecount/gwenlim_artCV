import { ArtworkImage } from '../types/portfolio';

const STORAGE_KEY = 'gwenlynn_custom_artwork_images_v1';

// In-memory cache + localStorage persistence
let customImagesMap: Record<string, Record<string, Partial<ArtworkImage>>> = {};

try {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    customImagesMap = JSON.parse(saved);
    // Clear any stale local override for two-man-rule main image so akin4.jpg takes effect immediately
    if (customImagesMap['two-man-rule']?.['two-man-rule-img-1']) {
      delete customImagesMap['two-man-rule']['two-man-rule-img-1'];
    }
  }
} catch (e) {
  console.warn('Could not read image overrides from localStorage:', e);
}

const listeners: Set<() => void> = new Set();

export const subscribeToImageUpdates = (callback: () => void) => {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
};

const notifyListeners = () => {
  listeners.forEach(cb => {
    try {
      cb();
    } catch (e) {
      console.error(e);
    }
  });
};

export const getArtworkImages = (artworkId: string, defaultImages: ArtworkImage[]): ArtworkImage[] => {
  const overrides = customImagesMap[artworkId];
  if (!overrides) return defaultImages;

  return defaultImages.map(img => {
    if (overrides[img.id]) {
      return {
        ...img,
        ...overrides[img.id],
        isCustom: true
      };
    }
    return img;
  });
};

export const updateArtworkImage = (
  artworkId: string,
  imageId: string,
  updates: Partial<ArtworkImage>
) => {
  if (!customImagesMap[artworkId]) {
    customImagesMap[artworkId] = {};
  }
  customImagesMap[artworkId][imageId] = {
    ...customImagesMap[artworkId][imageId],
    ...updates,
    isCustom: true
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customImagesMap));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }

  notifyListeners();
};

export const resetArtworkImages = (artworkId: string) => {
  if (customImagesMap[artworkId]) {
    delete customImagesMap[artworkId];
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customImagesMap));
    } catch (e) {
      console.error(e);
    }
    notifyListeners();
  }
};
