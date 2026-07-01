/**
 * @wendermedia/astro-components
 * @copyright 2007-2026 Arnold Wender · Wender Media. All Rights Reserved. License: LicenseRef-Wender-Media-Source-1.0
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
export { default as TitleTagEditor } from './TitleTagEditor.astro';

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
export type { Props as TitleTagEditorProps } from './TitleTagEditor.astro';

// ---------------------------------------------------------------------------
// Schema Kit — prop-driven JSON-LD emitters (schema.org). Backported 2026-07-01.
// ---------------------------------------------------------------------------
export { default as FAQSchema } from './FAQSchema.astro';
export { default as HowToSchema } from './HowToSchema.astro';
export { default as BreadcrumbSchema } from './BreadcrumbSchema.astro';
export { default as ServiceSchema } from './ServiceSchema.astro';

export type { Props as FAQSchemaProps, FAQItem } from './FAQSchema.astro';
export type { Props as HowToSchemaProps, HowToStep } from './HowToSchema.astro';
export type { Props as BreadcrumbSchemaProps, BreadcrumbItem as BreadcrumbSchemaItem } from './BreadcrumbSchema.astro';
export type { Props as ServiceSchemaProps, ServiceProvider } from './ServiceSchema.astro';
