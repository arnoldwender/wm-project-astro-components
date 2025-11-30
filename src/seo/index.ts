export { default as SEO } from './SEO.astro';
export { default as RichSnippets } from './RichSnippets.astro';
export { default as Breadcrumbs } from './Breadcrumbs.astro';

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
