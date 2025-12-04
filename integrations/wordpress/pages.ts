/**
 * WordPress Pages API - WenderMedia Astro Components
 */

import type { WordPressClient } from './client';
import type { WPPage, WPQueryParams, WPPaginatedResponse } from './types';

/**
 * Fetch pages with pagination
 */
export async function fetchPages(
  client: WordPressClient,
  params: WPQueryParams = {}
): Promise<WPPaginatedResponse<WPPage>> {
  const {
    page = 1,
    perPage = 10,
    embed = true,
    ...rest
  } = params;

  const queryParams = {
    page,
    per_page: perPage,
    _embed: embed,
    ...rest,
  };

  const { data, total, totalPages } = await client.getPaginated<WPPage>(
    'pages',
    queryParams
  );

  return {
    data,
    total,
    totalPages,
    page,
    perPage,
  };
}

/**
 * Fetch a single page by ID
 */
export async function fetchPage(
  client: WordPressClient,
  id: number,
  embed = true
): Promise<WPPage> {
  return client.get<WPPage>(`pages/${id}`, { _embed: embed });
}

/**
 * Fetch a single page by slug
 */
export async function fetchPageBySlug(
  client: WordPressClient,
  slug: string,
  embed = true
): Promise<WPPage | null> {
  const pages = await client.get<WPPage[]>('pages', {
    slug,
    _embed: embed,
  });

  return pages.length > 0 ? pages[0] : null;
}

/**
 * Fetch child pages of a parent
 */
export async function fetchChildPages(
  client: WordPressClient,
  parentId: number,
  params: WPQueryParams = {}
): Promise<WPPaginatedResponse<WPPage>> {
  const queryParams = {
    ...params,
    parent: parentId,
    orderBy: 'menu_order' as const,
    order: 'asc' as const,
  };

  return fetchPages(client, queryParams);
}

/**
 * Fetch top-level pages (no parent)
 */
export async function fetchTopLevelPages(
  client: WordPressClient,
  params: WPQueryParams = {}
): Promise<WPPaginatedResponse<WPPage>> {
  return fetchChildPages(client, 0, params);
}

/**
 * Build page hierarchy (tree structure)
 */
export async function fetchPageHierarchy(
  client: WordPressClient
): Promise<WPPage[]> {
  // Fetch all pages
  const allPages: WPPage[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const { data, totalPages } = await fetchPages(client, {
      page,
      perPage: 100,
    });

    allPages.push(...data);
    hasMore = page < totalPages;
    page++;
  }

  // Build tree structure
  const pageMap = new Map<number, WPPage & { children?: WPPage[] }>();
  const roots: (WPPage & { children?: WPPage[] })[] = [];

  // First pass: create map
  allPages.forEach((p) => {
    pageMap.set(p.id, { ...p, children: [] });
  });

  // Second pass: build hierarchy
  allPages.forEach((p) => {
    const pageWithChildren = pageMap.get(p.id)!;

    if (p.parent === 0) {
      roots.push(pageWithChildren);
    } else {
      const parent = pageMap.get(p.parent);
      if (parent) {
        parent.children = parent.children || [];
        parent.children.push(pageWithChildren);
      } else {
        // Parent not found, treat as root
        roots.push(pageWithChildren);
      }
    }
  });

  // Sort by menu_order
  const sortByMenuOrder = (pages: WPPage[]) => {
    pages.sort((a, b) => a.menu_order - b.menu_order);
    pages.forEach((p) => {
      if ((p as WPPage & { children?: WPPage[] }).children?.length) {
        sortByMenuOrder((p as WPPage & { children: WPPage[] }).children);
      }
    });
  };

  sortByMenuOrder(roots);

  return roots;
}

/**
 * Get page breadcrumbs
 */
export async function getPageBreadcrumbs(
  client: WordPressClient,
  pageId: number
): Promise<Array<{ id: number; title: string; slug: string; link: string }>> {
  const breadcrumbs: Array<{ id: number; title: string; slug: string; link: string }> = [];
  let currentId = pageId;

  while (currentId > 0) {
    const page = await fetchPage(client, currentId);

    breadcrumbs.unshift({
      id: page.id,
      title: page.title.rendered,
      slug: page.slug,
      link: page.link,
    });

    currentId = page.parent;
  }

  return breadcrumbs;
}

/**
 * Get embedded featured image from page
 */
export function getPageFeaturedImage(page: WPPage): {
  url: string;
  alt: string;
  width: number;
  height: number;
} | null {
  const media = page._embedded?.['wp:featuredmedia']?.[0];
  if (!media) return null;

  return {
    url: media.source_url,
    alt: media.alt_text || page.title.rendered,
    width: media.media_details?.width || 0,
    height: media.media_details?.height || 0,
  };
}

/**
 * Get Yoast SEO data from page
 */
export function getPageSEO(page: WPPage) {
  const yoast = page.yoast_head_json;
  if (!yoast) return null;

  return {
    title: yoast.title,
    description: yoast.description,
    canonical: yoast.canonical,
    ogImage: yoast.og_image?.[0]?.url,
    twitterImage: yoast.twitter_image,
    robots: yoast.robots,
    schema: yoast.schema,
  };
}
