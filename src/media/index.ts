/**
 * @wendermedia/astro-components
 * @copyright 2007-2026 Wender Media - Arnold Wender. MIT License.
 * @see https://github.com/arnoldwender/wm-project-astro-components
 */

/**
 * Media Components Index - WenderMedia Astro Components
 *
 * Privacy-first media components for Astro projects.
 * GDPR-compliant video embeds with consent management.
 */

export { default as VideoPlayer } from './VideoPlayer.astro';
export { default as AudioPlayer } from './AudioPlayer.astro';
export { default as ImageGallery } from './ImageGallery.astro';

// Type exports
export type { Props as VideoPlayerProps, Provider as VideoProvider } from './VideoPlayer.astro';
export type { Props as AudioPlayerProps, Track } from './AudioPlayer.astro';
export type { Props as ImageGalleryProps, GalleryImage } from './ImageGallery.astro';
