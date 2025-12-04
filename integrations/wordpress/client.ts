/**
 * WordPress Client - WenderMedia Astro Components
 *
 * Creates a configured WordPress REST API client.
 */

import type { WPError } from './types';

export interface WordPressClientConfig {
  /** WordPress site URL */
  url: string;
  /** REST API namespace (default: 'wp/v2') */
  namespace?: string;
  /** Authentication username (optional, for private endpoints) */
  username?: string;
  /** Authentication password or application password */
  password?: string;
  /** Custom fetch options */
  fetchOptions?: RequestInit;
  /** Cache duration in seconds (default: 60) */
  cacheDuration?: number;
}

export interface WordPressClient {
  /** Base URL for API requests */
  baseUrl: string;
  /** Configuration options */
  config: WordPressClientConfig;
  /** Make a GET request */
  get: <T>(endpoint: string, params?: Record<string, unknown>) => Promise<T>;
  /** Make a GET request with pagination info */
  getPaginated: <T>(endpoint: string, params?: Record<string, unknown>) => Promise<{
    data: T[];
    total: number;
    totalPages: number;
  }>;
}

// Simple in-memory cache
const cache = new Map<string, { data: unknown; expires: number }>();

/**
 * Create a WordPress REST API client
 */
export function createWordPressClient(config: WordPressClientConfig): WordPressClient {
  const {
    url,
    namespace = 'wp/v2',
    username,
    password,
    fetchOptions = {},
    cacheDuration = 60,
  } = config;

  // Normalize URL
  const normalizedUrl = url.replace(/\/$/, '');
  const baseUrl = `${normalizedUrl}/wp-json/${namespace}`;

  // Build headers
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(fetchOptions.headers as Record<string, string> || {}),
  };

  // Add Basic Auth if credentials provided
  if (username && password) {
    const credentials = Buffer.from(`${username}:${password}`).toString('base64');
    headers['Authorization'] = `Basic ${credentials}`;
  }

  /**
   * Build query string from params
   */
  function buildQueryString(params: Record<string, unknown>): string {
    const searchParams = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
      if (value === undefined || value === null) continue;

      // Convert camelCase to snake_case for WordPress API
      const apiKey = key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

      if (Array.isArray(value)) {
        value.forEach((v) => searchParams.append(apiKey, String(v)));
      } else if (typeof value === 'boolean') {
        searchParams.append(apiKey, value ? '1' : '0');
      } else {
        searchParams.append(apiKey, String(value));
      }
    }

    return searchParams.toString();
  }

  /**
   * Get cached data or fetch new
   */
  async function fetchWithCache<T>(cacheKey: string, fetchFn: () => Promise<T>): Promise<T> {
    const cached = cache.get(cacheKey);
    const now = Date.now();

    if (cached && cached.expires > now) {
      return cached.data as T;
    }

    const data = await fetchFn();
    cache.set(cacheKey, {
      data,
      expires: now + (cacheDuration * 1000),
    });

    return data;
  }

  /**
   * Make a GET request
   */
  async function get<T>(endpoint: string, params: Record<string, unknown> = {}): Promise<T> {
    const queryString = buildQueryString(params);
    const url = `${baseUrl}/${endpoint}${queryString ? `?${queryString}` : ''}`;
    const cacheKey = url;

    return fetchWithCache(cacheKey, async () => {
      const response = await fetch(url, {
        method: 'GET',
        headers,
        ...fetchOptions,
      });

      if (!response.ok) {
        const error = await response.json() as WPError;
        throw new Error(`WordPress API Error: ${error.message} (${error.code})`);
      }

      return response.json() as Promise<T>;
    });
  }

  /**
   * Make a GET request with pagination info
   */
  async function getPaginated<T>(
    endpoint: string,
    params: Record<string, unknown> = {}
  ): Promise<{ data: T[]; total: number; totalPages: number }> {
    const queryString = buildQueryString(params);
    const url = `${baseUrl}/${endpoint}${queryString ? `?${queryString}` : ''}`;

    const response = await fetch(url, {
      method: 'GET',
      headers,
      ...fetchOptions,
    });

    if (!response.ok) {
      const error = await response.json() as WPError;
      throw new Error(`WordPress API Error: ${error.message} (${error.code})`);
    }

    const data = await response.json() as T[];
    const total = parseInt(response.headers.get('X-WP-Total') || '0', 10);
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '0', 10);

    return { data, total, totalPages };
  }

  return {
    baseUrl,
    config,
    get,
    getPaginated,
  };
}

/**
 * Clear the WordPress API cache
 */
export function clearWordPressCache(): void {
  cache.clear();
}

/**
 * Clear specific cache entry
 */
export function clearWordPressCacheEntry(url: string): void {
  cache.delete(url);
}
