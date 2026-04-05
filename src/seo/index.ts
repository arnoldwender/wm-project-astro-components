/**
 * @wendermedia/astro-components
 * @copyright 2007-2026 Wender Media - Arnold Wender. MIT License.
 * @see https://github.com/arnoldwender/wm-project-astro-components
 */

/**
 * SEO Components Index - WenderMedia Astro Components
 *
 * Complete SEO toolkit for maximum search visibility.
 */

export { default as SEO } from './SEO.astro';
export { default as RichSnippets } from './RichSnippets.astro';
export { default as Breadcrumbs } from './Breadcrumbs.astro';
export { default as JsonLD } from './JsonLD.astro';
export { default as HreflangTags } from './HreflangTags.astro';
export { default as CanonicalURL } from './CanonicalURL.astro';
export { default as OpenGraph } from './OpenGraph.astro';
export { default as TwitterCard } from './TwitterCard.astro';

export type { Props as SEOProps, HreflangLink } from './SEO.astro';
export type {
  Props as RichSnippetsProps,
  ServiceData,
  ProductData,
  ArticleData,
  FAQData,
  ReviewData,
  OrganizationData,
  LocalBusinessData,
} from './RichSnippets.astro';
export type { Props as BreadcrumbsProps, BreadcrumbItem } from './Breadcrumbs.astro';
export type { Props as JsonLDProps, SchemaType } from './JsonLD.astro';
export type { Props as HreflangTagsProps, LocaleLink } from './HreflangTags.astro';
export type { Props as CanonicalURLProps } from './CanonicalURL.astro';
export type { Props as OpenGraphProps, ArticleMeta, ProductMeta, ProfileMeta } from './OpenGraph.astro';
export type { Props as TwitterCardProps } from './TwitterCard.astro';
