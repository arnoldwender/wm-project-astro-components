/**
 * @wendermedia/astro-components
 * @copyright 2007-2026 Wender Media - Arnold Wender. MIT License.
 * @see https://github.com/arnoldwender/wm-project-astro-components
 */

/**
 * Navigation Components Index - WenderMedia Astro Components
 *
 * Complete navigation component set for all use cases.
 */

export { default as Sidebar } from './Sidebar.astro';
export { default as MobileNav } from './MobileNav.astro';
export { default as Pagination } from './Pagination.astro';
export { default as Breadcrumbs } from './Breadcrumbs.astro';

// Type exports
export type { Props as SidebarProps, SidebarItem } from './Sidebar.astro';
export type { Props as MobileNavProps, NavItem, SocialLink } from './MobileNav.astro';
export type { Props as PaginationProps } from './Pagination.astro';
export type { Props as BreadcrumbsProps, BreadcrumbItem } from './Breadcrumbs.astro';
