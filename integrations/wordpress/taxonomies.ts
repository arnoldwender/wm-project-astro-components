/**
 * WordPress Taxonomies & Media API - WenderMedia Astro Components
 */

import type { WordPressClient } from './client';
import type { WPCategory, WPTag, WPMedia, WPPaginatedResponse } from './types';

/**
 * Fetch categories
 */
export async function fetchCategories(
  client: WordPressClient,
  params: {
    page?: number;
    perPage?: number;
    hideEmpty?: boolean;
    parent?: number;
    orderBy?: 'id' | 'name' | 'slug' | 'count';
    order?: 'asc' | 'desc';
  } = {}
): Promise<WPPaginatedResponse<WPCategory>> {
  const {
    page = 1,
    perPage = 100,
    hideEmpty = true,
    parent,
    orderBy = 'name',
    order = 'asc',
  } = params;

  const queryParams: Record<string, unknown> = {
    page,
    per_page: perPage,
    hide_empty: hideEmpty,
    orderby: orderBy,
    order,
  };

  if (parent !== undefined) {
    queryParams.parent = parent;
  }

  const { data, total, totalPages } = await client.getPaginated<WPCategory>(
    'categories',
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
 * Fetch a single category by ID
 */
export async function fetchCategory(
  client: WordPressClient,
  id: number
): Promise<WPCategory> {
  return client.get<WPCategory>(`categories/${id}`);
}

/**
 * Fetch a single category by slug
 */
export async function fetchCategoryBySlug(
  client: WordPressClient,
  slug: string
): Promise<WPCategory | null> {
  const categories = await client.get<WPCategory[]>('categories', { slug });
  return categories.length > 0 ? categories[0] : null;
}

/**
 * Build category hierarchy
 */
export async function fetchCategoryHierarchy(
  client: WordPressClient
): Promise<(WPCategory & { children?: WPCategory[] })[]> {
  const { data: allCategories } = await fetchCategories(client, {
    perPage: 100,
    hideEmpty: false,
  });

  const categoryMap = new Map<number, WPCategory & { children?: WPCategory[] }>();
  const roots: (WPCategory & { children?: WPCategory[] })[] = [];

  // First pass: create map
  allCategories.forEach((cat) => {
    categoryMap.set(cat.id, { ...cat, children: [] });
  });

  // Second pass: build hierarchy
  allCategories.forEach((cat) => {
    const categoryWithChildren = categoryMap.get(cat.id)!;

    if (cat.parent === 0) {
      roots.push(categoryWithChildren);
    } else {
      const parent = categoryMap.get(cat.parent);
      if (parent) {
        parent.children = parent.children || [];
        parent.children.push(categoryWithChildren);
      } else {
        roots.push(categoryWithChildren);
      }
    }
  });

  return roots;
}

/**
 * Fetch tags
 */
export async function fetchTags(
  client: WordPressClient,
  params: {
    page?: number;
    perPage?: number;
    hideEmpty?: boolean;
    orderBy?: 'id' | 'name' | 'slug' | 'count';
    order?: 'asc' | 'desc';
    search?: string;
  } = {}
): Promise<WPPaginatedResponse<WPTag>> {
  const {
    page = 1,
    perPage = 100,
    hideEmpty = true,
    orderBy = 'count',
    order = 'desc',
    search,
  } = params;

  const queryParams: Record<string, unknown> = {
    page,
    per_page: perPage,
    hide_empty: hideEmpty,
    orderby: orderBy,
    order,
  };

  if (search) {
    queryParams.search = search;
  }

  const { data, total, totalPages } = await client.getPaginated<WPTag>(
    'tags',
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
 * Fetch a single tag by ID
 */
export async function fetchTag(
  client: WordPressClient,
  id: number
): Promise<WPTag> {
  return client.get<WPTag>(`tags/${id}`);
}

/**
 * Fetch a single tag by slug
 */
export async function fetchTagBySlug(
  client: WordPressClient,
  slug: string
): Promise<WPTag | null> {
  const tags = await client.get<WPTag[]>('tags', { slug });
  return tags.length > 0 ? tags[0] : null;
}

/**
 * Fetch popular tags (by post count)
 */
export async function fetchPopularTags(
  client: WordPressClient,
  count = 20
): Promise<WPTag[]> {
  const { data } = await fetchTags(client, {
    perPage: count,
    orderBy: 'count',
    order: 'desc',
  });

  return data;
}

/**
 * Fetch media items
 */
export async function fetchMedia(
  client: WordPressClient,
  params: {
    page?: number;
    perPage?: number;
    mediaType?: 'image' | 'video' | 'audio' | 'application';
    mimeType?: string;
    orderBy?: 'date' | 'id' | 'title' | 'slug';
    order?: 'asc' | 'desc';
  } = {}
): Promise<WPPaginatedResponse<WPMedia>> {
  const {
    page = 1,
    perPage = 10,
    mediaType,
    mimeType,
    orderBy = 'date',
    order = 'desc',
  } = params;

  const queryParams: Record<string, unknown> = {
    page,
    per_page: perPage,
    orderby: orderBy,
    order,
  };

  if (mediaType) {
    queryParams.media_type = mediaType;
  }

  if (mimeType) {
    queryParams.mime_type = mimeType;
  }

  const { data, total, totalPages } = await client.getPaginated<WPMedia>(
    'media',
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
 * Fetch a single media item by ID
 */
export async function fetchMediaItem(
  client: WordPressClient,
  id: number
): Promise<WPMedia> {
  return client.get<WPMedia>(`media/${id}`);
}

/**
 * Get responsive image srcset from media item
 */
export function getMediaSrcset(media: WPMedia): string {
  if (!media.media_details?.sizes) return '';

  const srcset = Object.values(media.media_details.sizes)
    .filter((size) => size.source_url && size.width)
    .map((size) => `${size.source_url} ${size.width}w`)
    .join(', ');

  return srcset;
}

/**
 * Get specific size URL from media item
 */
export function getMediaSize(
  media: WPMedia,
  size: string
): { url: string; width: number; height: number } | null {
  const sizeData = media.media_details?.sizes?.[size];

  if (!sizeData) return null;

  return {
    url: sizeData.source_url,
    width: sizeData.width,
    height: sizeData.height,
  };
}
