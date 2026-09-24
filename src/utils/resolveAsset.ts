/**
 * Resolves an asset URL ensuring compatibility with subpath deployments (such as GitHub Pages).
 * Prefixes relative/absolute root asset paths with import.meta.env.BASE_URL.
 */
export function resolveAsset(url?: string): string {
  if (!url) return '';
  if (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('data:') ||
    url.startsWith('blob:')
  ) {
    return url;
  }
  const base = import.meta.env.BASE_URL || '/';

  // If already prefixed with base, return as-is
  if (base !== '/' && url.startsWith(base)) {
    return url;
  }

  const cleanUrl = url.replace(/^\/+/, '');
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanUrl}`;
}
