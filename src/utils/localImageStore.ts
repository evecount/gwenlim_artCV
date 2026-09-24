// Local image storage utility for archival photographs and custom uploads
// Uses IndexedDB for full-resolution persistence across browser reloads

const DB_NAME = 'GwenLimPortfolioAssets';
const DB_VERSION = 1;
const STORE_NAME = 'archival_photos';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported in this environment'));
      return;
    }
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'key' });
      }
    };
  });
}

export async function saveLocalImage(key: string, dataUrl: string): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put({ key, dataUrl, updatedAt: Date.now() });
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch (err) {
    console.warn('Could not save to IndexedDB, falling back to memory/session', err);
    try {
      sessionStorage.setItem(`img_${key}`, dataUrl);
    } catch (e) {
      // Ignore quota errors
    }
  }
}

export async function getLocalImage(key: string): Promise<string | null> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(key);
      request.onsuccess = () => {
        if (request.result && request.result.dataUrl) {
          resolve(request.result.dataUrl);
        } else {
          // Check sessionStorage
          const fallback = sessionStorage.getItem(`img_${key}`);
          resolve(fallback);
        }
      };
      request.onerror = () => {
        resolve(sessionStorage.getItem(`img_${key}`));
      };
    });
  } catch (err) {
    return sessionStorage.getItem(`img_${key}`);
  }
}

export async function getAllLocalImages(): Promise<Record<string, string>> {
  try {
    const db = await openDB();
    return new Promise((resolve) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();
      request.onsuccess = () => {
        const results = request.result || [];
        const map: Record<string, string> = {};
        for (const item of results) {
          if (item.key && item.dataUrl) {
            map[item.key] = item.dataUrl;
          }
        }
        resolve(map);
      };
      request.onerror = () => resolve({});
    });
  } catch {
    return {};
  }
}
