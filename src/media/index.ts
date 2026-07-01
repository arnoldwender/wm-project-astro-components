/**
 * @wendermedia/astro-components
 * @copyright 2007-2026 Arnold Wender · Wender Media. All Rights Reserved. License: LicenseRef-Wender-Media-Source-1.0
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

// Consent-gated YouTube facade (backported 2026-07-01) — DSGVO, LCP-optimised
export { default as LiteYouTubeEmbed } from './LiteYouTubeEmbed.astro';
export type { Props as LiteYouTubeEmbedProps } from './LiteYouTubeEmbed.astro';
