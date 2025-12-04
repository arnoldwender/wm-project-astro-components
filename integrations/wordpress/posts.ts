/**
 * WordPress Posts API - WenderMedia Astro Components
 */

import type { WordPressClient } from './client';
import type { WPPost, WPQueryParams, WPPaginatedResponse } from './types';

/**
 * Fetch posts with pagination
 */
export async function fetchPosts(
  client: WordPressClient,
  params: WPQueryParams = {}
): Promise<WPPaginatedResponse<WPPost>> {
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

  const { data, total, totalPages } = await client.getPaginated<WPPost>(
    'posts',
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
 * Fetch a single post by ID
 */
export async function fetchPost(
  client: WordPressClient,
  id: number,
  embed = true
): Promise<WPPost> {
  return client.get<WPPost>(`posts/${id}`, { _embed: embed });
}

/**
 * Fetch a single post by slug
 */
export async function fetchPostBySlug(
  client: WordPressClient,
  slug: string,
  embed = true
): Promise<WPPost | null> {
  const posts = await client.get<WPPost[]>('posts', {
    slug,
    _embed: embed,
  });

  return posts.length > 0 ? posts[0] : null;
}

/**
 * Fetch recent posts
 */
export async function fetchRecentPosts(
  client: WordPressClient,
  count = 5
): Promise<WPPost[]> {
  const { data } = await fetchPosts(client, {
    perPage: count,
    orderBy: 'date',
    order: 'desc',
  });

  return data;
}

/**
 * Fetch posts by category
 */
export async function fetchPostsByCategory(
  client: WordPressClient,
  categoryId: number,
  params: WPQueryParams = {}
): Promise<WPPaginatedResponse<WPPost>> {
  return fetchPosts(client, {
    ...params,
    categories: categoryId,
  });
}

/**
 * Fetch posts by tag
 */
export async function fetchPostsByTag(
  client: WordPressClient,
  tagId: number,
  params: WPQueryParams = {}
): Promise<WPPaginatedResponse<WPPost>> {
  return fetchPosts(client, {
    ...params,
    tags: tagId,
  });
}

/**
 * Fetch posts by author
 */
export async function fetchPostsByAuthor(
  client: WordPressClient,
  authorId: number,
  params: WPQueryParams = {}
): Promise<WPPaginatedResponse<WPPost>> {
  return fetchPosts(client, {
    ...params,
    author: authorId,
  });
}

/**
 * Search posts
 */
export async function searchPosts(
  client: WordPressClient,
  query: string,
  params: WPQueryParams = {}
): Promise<WPPaginatedResponse<WPPost>> {
  return fetchPosts(client, {
    ...params,
    search: query,
    orderBy: 'relevance',
  });
}

/**
 * Fetch sticky posts
 */
export async function fetchStickyPosts(
  client: WordPressClient
): Promise<WPPost[]> {
  const { data } = await fetchPosts(client, {
    sticky: true,
    perPage: 100,
  });

  return data;
}

/**
 * Get embedded author from post
 */
export function getPostAuthor(post: WPPost): {
  name: string;
  slug: string;
  avatar?: string;
} | null {
  const author = post._embedded?.author?.[0];
  if (!author) return null;

  return {
    name: author.name,
    slug: author.slug,
    avatar: author.avatar_urls?.['96'],
  };
}

/**
 * Get embedded featured image from post
 */
export function getPostFeaturedImage(post: WPPost): {
  url: string;
  alt: string;
  width: number;
  height: number;
  sizes?: Record<string, { url: string; width: number; height: number }>;
} | null {
  const media = post._embedded?.['wp:featuredmedia']?.[0];
  if (!media) return null;

  const sizes: Record<string, { url: string; width: number; height: number }> = {};
  if (media.media_details?.sizes) {
    for (const [key, size] of Object.entries(media.media_details.sizes)) {
      sizes[key] = {
        url: size.source_url,
        width: size.width,
        height: size.height,
      };
    }
  }

  return {
    url: media.source_url,
    alt: media.alt_text || post.title.rendered,
    width: media.media_details?.width || 0,
    height: media.media_details?.height || 0,
    sizes,
  };
}

/**
 * Get embedded categories from post
 */
export function getPostCategories(post: WPPost): Array<{ id: number; name: string; slug: string }> {
  const terms = post._embedded?.['wp:term'];
  if (!terms) return [];

  const categories = terms.find((t) => t[0]?.taxonomy === 'category');
  if (!categories) return [];

  return categories.map((cat) => ({
    id: cat.id,
    name: cat.name,
    slug: cat.slug,
  }));
}

/**
 * Get embedded tags from post
 */
export function getPostTags(post: WPPost): Array<{ id: number; name: string; slug: string }> {
  const terms = post._embedded?.['wp:term'];
  if (!terms) return [];

  const tags = terms.find((t) => t[0]?.taxonomy === 'post_tag');
  if (!tags) return [];

  return tags.map((tag) => ({
    id: tag.id,
    name: tag.name,
    slug: tag.slug,
  }));
}

/**
 * Get Yoast SEO data from post
 */
export function getPostSEO(post: WPPost) {
  const yoast = post.yoast_head_json;
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
