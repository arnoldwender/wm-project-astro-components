/**
 * WordPress Menus API - WenderMedia Astro Components
 *
 * Note: Requires the WP REST API Menus plugin or similar to expose menus.
 * https://wordpress.org/plugins/wp-rest-api-v2-menus/
 */

import type { WordPressClient } from './client';
import type { WPMenu, WPMenuItem } from './types';

/**
 * Fetch all menus
 */
export async function fetchMenus(
  client: WordPressClient
): Promise<WPMenu[]> {
  try {
    // Try the common menu endpoints
    const menus = await client.get<WPMenu[]>('menus');
    return menus;
  } catch {
    // Fallback: try wp-api-menus/v2 namespace
    try {
      const response = await fetch(
        `${client.config.url}/wp-json/wp-api-menus/v2/menus`
      );
      if (response.ok) {
        return response.json();
      }
    } catch {
      // Ignore fallback errors
    }

    console.warn(
      'WordPress menus endpoint not available. Install WP REST API Menus plugin.'
    );
    return [];
  }
}

/**
 * Fetch a single menu by ID or slug
 */
export async function fetchMenu(
  client: WordPressClient,
  idOrSlug: number | string
): Promise<WPMenu | null> {
  try {
    const endpoint = typeof idOrSlug === 'number'
      ? `menus/${idOrSlug}`
      : `menus?slug=${idOrSlug}`;

    const result = await client.get<WPMenu | WPMenu[]>(endpoint);

    if (Array.isArray(result)) {
      return result.length > 0 ? result[0] : null;
    }

    return result;
  } catch {
    console.warn(`Menu "${idOrSlug}" not found or menus endpoint not available.`);
    return null;
  }
}

/**
 * Fetch menu items by menu ID
 */
export async function fetchMenuItems(
  client: WordPressClient,
  menuId: number
): Promise<WPMenuItem[]> {
  try {
    const items = await client.get<WPMenuItem[]>(`menus/${menuId}/items`);
    return buildMenuHierarchy(items);
  } catch {
    console.warn(
      `Menu items for menu ${menuId} not available. Install WP REST API Menus plugin.`
    );
    return [];
  }
}

/**
 * Build menu item hierarchy (flat to nested)
 */
function buildMenuHierarchy(items: WPMenuItem[]): WPMenuItem[] {
  const itemMap = new Map<string, WPMenuItem & { children: WPMenuItem[] }>();
  const roots: (WPMenuItem & { children: WPMenuItem[] })[] = [];

  // First pass: create map with children array
  items.forEach((item) => {
    itemMap.set(String(item.id), { ...item, children: [] });
  });

  // Second pass: build hierarchy
  items.forEach((item) => {
    const itemWithChildren = itemMap.get(String(item.id))!;

    if (!item.menu_item_parent || item.menu_item_parent === '0') {
      roots.push(itemWithChildren);
    } else {
      const parent = itemMap.get(item.menu_item_parent);
      if (parent) {
        parent.children.push(itemWithChildren);
      } else {
        roots.push(itemWithChildren);
      }
    }
  });

  return roots;
}

/**
 * Transform WordPress menu to navigation structure
 */
export function transformMenuToNav(
  items: WPMenuItem[],
  options: {
    activeUrl?: string;
    baseUrl?: string;
  } = {}
): Array<{
  label: string;
  href: string;
  isActive: boolean;
  isExternal: boolean;
  children?: Array<{
    label: string;
    href: string;
    isActive: boolean;
    isExternal: boolean;
  }>;
}> {
  const { activeUrl = '', baseUrl = '' } = options;

  function isExternal(url: string): boolean {
    if (!url || url.startsWith('#') || url.startsWith('/')) return false;
    try {
      const urlObj = new URL(url);
      const baseObj = baseUrl ? new URL(baseUrl) : { hostname: '' };
      return urlObj.hostname !== baseObj.hostname;
    } catch {
      return false;
    }
  }

  function isActive(url: string): boolean {
    if (!activeUrl || !url) return false;
    // Exact match or starts with (for parent pages)
    return activeUrl === url || activeUrl.startsWith(url + '/');
  }

  function transformItem(item: WPMenuItem & { children?: WPMenuItem[] }) {
    const href = item.url.replace(baseUrl, '') || '/';

    return {
      label: item.title,
      href,
      isActive: isActive(href),
      isExternal: isExternal(item.url),
      target: item.target || undefined,
      description: item.description || undefined,
      ...(item.children?.length && {
        children: item.children.map(transformItem),
      }),
    };
  }

  return items.map(transformItem);
}

/**
 * Get menu by location (requires additional plugin support)
 * Common locations: 'primary', 'footer', 'mobile'
 */
export async function fetchMenuByLocation(
  client: WordPressClient,
  location: string
): Promise<WPMenu | null> {
  try {
    // Try locations endpoint (requires theme support)
    const response = await fetch(
      `${client.config.url}/wp-json/menus/v1/locations/${location}`
    );

    if (response.ok) {
      return response.json();
    }
  } catch {
    // Ignore
  }

  // Fallback: try to find by slug matching location name
  return fetchMenu(client, location);
}
