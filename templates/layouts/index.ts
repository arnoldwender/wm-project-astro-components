/**
 * Layout Templates Index - WenderMedia Astro Components
 *
 * Production-ready layout templates for different use cases.
 * Copy to your project's src/layouts/ directory.
 */

// Base Layouts
export { default as BaseLayout } from './BaseLayout.astro';
export { default as MinimalLayout } from './MinimalLayout.astro';
export { default as FullWidthLayout } from './FullWidthLayout.astro';

// Content Layouts
export { default as BlogLayout } from './BlogLayout.astro';
export { default as DocsLayout } from './DocsLayout.astro';
export { default as EcommerceLayout } from './EcommerceLayout.astro';

// Type exports
export type { Props as BaseLayoutProps } from './BaseLayout.astro';
export type { Props as MinimalLayoutProps } from './MinimalLayout.astro';
export type { Props as FullWidthLayoutProps } from './FullWidthLayout.astro';
export type { Props as BlogLayoutProps, Author } from './BlogLayout.astro';
export type { Props as DocsLayoutProps, SidebarItem, TocItem } from './DocsLayout.astro';
export type { Props as EcommerceLayoutProps, Product, BreadcrumbItem } from './EcommerceLayout.astro';
