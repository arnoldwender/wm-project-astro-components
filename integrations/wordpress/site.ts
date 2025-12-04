/**
 * WordPress Site Info API - WenderMedia Astro Components
 */

import type { WordPressClient } from './client';
import type { WPSiteInfo } from './types';

/**
 * Fetch basic site information
 */
export async function fetchSiteInfo(
  client: WordPressClient
): Promise<WPSiteInfo> {
  // The site info is available at the root of the REST API
  const response = await fetch(`${client.config.url}/wp-json`);

  if (!response.ok) {
    throw new Error('Failed to fetch WordPress site info');
  }

  const data = await response.json();

  return {
    name: data.name,
    description: data.description,
    url: data.url,
    home: data.home,
    gmt_offset: data.gmt_offset,
    timezone_string: data.timezone_string,
    site_logo: data.site_logo || 0,
    site_icon: data.site_icon || 0,
  };
}

/**
 * Fetch site logo URL
 */
export async function fetchSiteLogo(
  client: WordPressClient
): Promise<string | null> {
  const siteInfo = await fetchSiteInfo(client);

  if (!siteInfo.site_logo) return null;

  try {
    const media = await client.get<{ source_url: string }>(
      `media/${siteInfo.site_logo}`
    );
    return media.source_url;
  } catch {
    return null;
  }
}

/**
 * Fetch site icon (favicon) URL
 */
export async function fetchSiteIcon(
  client: WordPressClient
): Promise<string | null> {
  const siteInfo = await fetchSiteInfo(client);

  if (!siteInfo.site_icon) return null;

  try {
    const media = await client.get<{ source_url: string }>(
      `media/${siteInfo.site_icon}`
    );
    return media.source_url;
  } catch {
    return null;
  }
}

/**
 * Fetch WordPress options (requires ACF or similar)
 */
export async function fetchOptions(
  client: WordPressClient
): Promise<Record<string, unknown> | null> {
  try {
    // Try ACF options endpoint
    const response = await fetch(
      `${client.config.url}/wp-json/acf/v3/options/options`
    );

    if (response.ok) {
      const data = await response.json();
      return data.acf || data;
    }
  } catch {
    // ACF not available
  }

  try {
    // Try custom options endpoint (if available)
    const options = await client.get<Record<string, unknown>>('options');
    return options;
  } catch {
    // Options endpoint not available
  }

  return null;
}

/**
 * Fetch specific option by key
 */
export async function fetchOption<T = unknown>(
  client: WordPressClient,
  key: string
): Promise<T | null> {
  const options = await fetchOptions(client);

  if (!options || !(key in options)) {
    return null;
  }

  return options[key] as T;
}

/**
 * Generate WordPress REST API authentication URL
 * (For OAuth or Application Passwords setup guidance)
 */
export function getAuthSetupUrl(wordpressUrl: string): string {
  return `${wordpressUrl}/wp-admin/users.php?page=application-passwords`;
}

/**
 * Check if WordPress site is reachable and REST API is enabled
 */
export async function checkWordPressConnection(
  url: string
): Promise<{
  connected: boolean;
  restApiEnabled: boolean;
  error?: string;
}> {
  try {
    const response = await fetch(`${url}/wp-json`, {
      method: 'HEAD',
    });

    if (response.ok) {
      return {
        connected: true,
        restApiEnabled: true,
      };
    }

    // Try without /wp-json to check if site is up
    const siteResponse = await fetch(url, { method: 'HEAD' });

    if (siteResponse.ok) {
      return {
        connected: true,
        restApiEnabled: false,
        error: 'REST API is not enabled or accessible',
      };
    }

    return {
      connected: false,
      restApiEnabled: false,
      error: 'Could not connect to WordPress site',
    };
  } catch (error) {
    return {
      connected: false,
      restApiEnabled: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Get available REST API namespaces
 */
export async function getAvailableNamespaces(
  wordpressUrl: string
): Promise<string[]> {
  try {
    const response = await fetch(`${wordpressUrl}/wp-json`);

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    return data.namespaces || [];
  } catch {
    return [];
  }
}
