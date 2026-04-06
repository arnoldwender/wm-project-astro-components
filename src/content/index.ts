/**
 * @wendermedia/astro-components
 * @copyright 2007-2026 Wender Media - Arnold Wender. MIT License.
 * @see https://github.com/arnoldwender/wm-project-astro-components
 */

/**
 * Content Components Index - WenderMedia Astro Components
 *
 * Components for blog posts, articles, and long-form content.
 */

export { default as TableOfContents } from './TableOfContents.astro';
export { default as ReadingProgress } from './ReadingProgress.astro';
export { default as ShareBar } from './ShareBar.astro';

// Related Content
export { default as RelatedContent } from './RelatedContent.astro';

// Reading Time
export { default as ReadingTime } from './ReadingTime.astro';

// Type exports
export type { Props as TableOfContentsProps, Heading } from './TableOfContents.astro';
export type { Props as ReadingProgressProps } from './ReadingProgress.astro';
export type { Props as ShareBarProps, Platform } from './ShareBar.astro';
export type { Props as RelatedContentProps, RelatedItem } from './RelatedContent.astro';
export type { Props as ReadingTimeProps } from './ReadingTime.astro';
