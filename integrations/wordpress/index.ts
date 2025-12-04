/**
 * WordPress Headless Integration - WenderMedia Astro Components
 *
 * Complete toolkit for connecting Astro to WordPress as a headless CMS.
 * Supports REST API and WPGraphQL with type-safe queries.
 *
 * @example
 * ```ts
 * import { createWordPressClient, fetchPosts, fetchPages } from '@wendermedia/astro-components/integrations/wordpress';
 *
 * const wp = createWordPressClient({
 *   url: 'https://your-wordpress-site.com',
 * });
 *
 * const posts = await fetchPosts(wp, { perPage: 10 });
 * ```
 */

export { createWordPressClient, type WordPressClientConfig } from './client';
export { fetchPosts, fetchPost, fetchPostBySlug } from './posts';
export { fetchPages, fetchPage, fetchPageBySlug } from './pages';
export { fetchCategories, fetchTags, fetchMedia } from './taxonomies';
export { fetchMenus, fetchMenu } from './menus';
export { fetchSiteInfo, fetchOptions } from './site';
export type {
  WPPost,
  WPPage,
  WPCategory,
  WPTag,
  WPMedia,
  WPMenu,
  WPMenuItem,
  WPSiteInfo,
  WPAuthor,
  WPFeaturedMedia,
  WPQueryParams,
  WPPaginatedResponse,
} from './types';
