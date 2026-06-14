/**
 * Client-safe environment configuration.
 * Only VITE_* variables are exposed to the browser bundle.
 */

const configuredApiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim();

/**
 * Backend API origin. Empty string uses same-origin `/api` paths (Vite dev proxy).
 */
export function getApiBaseUrl(): string {
  if (!configuredApiBaseUrl) {
    return "";
  }

  return configuredApiBaseUrl.replace(/\/$/, "");
}

/**
 * Build a full API URL from a path such as `/api/contact`.
 */
export function buildApiUrl(path: string): string {
  const base = getApiBaseUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return base ? `${base}${normalizedPath}` : normalizedPath;
}
