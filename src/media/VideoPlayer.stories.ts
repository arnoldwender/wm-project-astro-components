/**
 * VideoPlayer Stories - WenderMedia Astro Components
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Media/VideoPlayer',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Privacy-first video player supporting YouTube, Vimeo, and self-hosted videos.
GDPR-compliant with consent-based loading for third-party embeds.

**Features:**
- Native HTML5 video support
- YouTube integration via youtube-nocookie.com
- Vimeo integration with DNT (Do Not Track) enabled
- GDPR consent screen before loading third-party content
- Customizable consent messages
- Aspect ratio control
- Fully accessible (WCAG 2.1 AA, BFSG compliant)
        `,
      },
    },
  },
  argTypes: {
    provider: {
      control: 'select',
      options: ['native', 'youtube', 'vimeo'],
      description: 'Video provider',
    },
    videoId: { control: 'text', description: 'Video ID for YouTube/Vimeo' },
    src: { control: 'text', description: 'Video source URL for native videos' },
    title: { control: 'text', description: 'Video title for accessibility' },
    poster: { control: 'text', description: 'Poster image URL' },
    autoplay: { control: 'boolean', description: 'Autoplay video' },
    muted: { control: 'boolean', description: 'Mute video' },
    loop: { control: 'boolean', description: 'Loop video' },
    controls: { control: 'boolean', description: 'Show controls' },
    aspectRatio: { control: 'text', description: 'Aspect ratio (e.g., 16/9)' },
    requireConsent: { control: 'boolean', description: 'Require GDPR consent' },
    consentMessage: { control: 'text', description: 'Custom consent message' },
    consentButtonText: { control: 'text', description: 'Consent button text' },
  },
};

export default meta;
type Story = StoryObj;

// Mock VideoPlayer component HTML
const renderVideoPlayer = (args: Record<string, unknown>) => {
  const isNative = args.provider === 'native' || args.src;
  const isYouTube = args.provider === 'youtube' && args.videoId;
  const isVimeo = args.provider === 'vimeo' && args.videoId;
  const needsConsent = args.requireConsent && !isNative;

  const posterUrl = args.poster ||
    (isYouTube ? `https://img.youtube.com/vi/${args.videoId}/maxresdefault.jpg` : undefined);

  return html`
    <div
      class="video-player"
      data-provider="${args.provider}"
      style="aspect-ratio: ${args.aspectRatio}; max-width: 800px;"
    >
      ${isNative && args.src ? html`
        <video
          class="video-player__native"
          src="${args.src}"
          poster="${posterUrl}"
          ?autoplay="${args.autoplay}"
          ?muted="${args.muted}"
          ?loop="${args.loop}"
          ?controls="${args.controls}"
          playsinline
        >
          <track kind="captions" />
          Ihr Browser unterstützt keine Videos.
        </video>
      ` : ''}

      ${!isNative && needsConsent ? html`
        <div class="video-player__consent">
          ${posterUrl ? html`
            <img
              class="video-player__poster"
              src="${posterUrl}"
              alt="Vorschaubild: ${args.title}"
              loading="lazy"
            />
          ` : ''}
          <div class="video-player__consent-overlay">
            <div class="video-player__consent-content">
              <svg class="video-player__consent-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <p class="video-player__consent-message">${args.consentMessage}</p>
              <button type="button" class="video-player__consent-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                ${args.consentButtonText}
              </button>
              <p class="video-player__consent-provider">
                ${isYouTube ? 'Powered by YouTube' : ''}
                ${isVimeo ? 'Powered by Vimeo' : ''}
              </p>
            </div>
          </div>
        </div>
      ` : ''}

      ${!isNative && !needsConsent ? html`
        <div class="video-player__embed">
          ${isYouTube ? html`
            <iframe
              src="https://www.youtube-nocookie.com/embed/${args.videoId}?rel=0&modestbranding=1"
              title="${args.title}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          ` : ''}
          ${isVimeo ? html`
            <iframe
              src="https://player.vimeo.com/video/${args.videoId}?dnt=1"
              title="${args.title}"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          ` : ''}
        </div>
      ` : ''}
    </div>
    <style>
      .video-player {
        position: relative;
        width: 100%;
        background: #000;
        border-radius: 0.75rem;
        overflow: hidden;
      }
      .video-player__native {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .video-player__consent {
        position: relative;
        width: 100%;
        height: 100%;
      }
      .video-player__poster {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(0.5);
      }
      .video-player__consent-overlay {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
      }
      .video-player__consent-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        color: #fff;
        max-width: 24rem;
      }
      .video-player__consent-icon {
        width: 3rem;
        height: 3rem;
        margin-bottom: 1rem;
        opacity: 0.8;
      }
      .video-player__consent-message {
        font-size: 0.9375rem;
        line-height: 1.5;
        margin-bottom: 1.5rem;
        opacity: 0.9;
      }
      .video-player__consent-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.875rem 1.5rem;
        font-size: 1rem;
        font-weight: 600;
        color: #fff;
        background: #ef4444;
        border: none;
        border-radius: 9999px;
        cursor: pointer;
        transition: all 0.2s;
      }
      .video-player__consent-btn:hover {
        background: #dc2626;
        transform: scale(1.05);
      }
      .video-player__consent-btn svg {
        width: 1.25rem;
        height: 1.25rem;
      }
      .video-player__consent-provider {
        margin-top: 1rem;
        font-size: 0.75rem;
        opacity: 0.6;
      }
      .video-player__embed {
        position: absolute;
        inset: 0;
      }
      .video-player__embed iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
    </style>
  `;
};

export const YouTubeWithConsent: Story = {
  args: {
    provider: 'youtube',
    videoId: 'dQw4w9WgXcQ',
    title: 'Rick Astley - Never Gonna Give You Up',
    aspectRatio: '16/9',
    requireConsent: true,
    consentMessage: 'Dieses Video wird von einem Drittanbieter bereitgestellt. Durch Abspielen stimmen Sie der Datenverarbeitung zu.',
    consentButtonText: 'Video laden',
    controls: true,
    autoplay: false,
    muted: false,
    loop: false,
  },
  render: (args) => renderVideoPlayer(args),
};

export const YouTubeNoConsent: Story = {
  args: {
    provider: 'youtube',
    videoId: 'dQw4w9WgXcQ',
    title: 'Rick Astley - Never Gonna Give You Up',
    aspectRatio: '16/9',
    requireConsent: false,
    controls: true,
  },
  render: (args) => renderVideoPlayer(args),
};

export const VimeoWithConsent: Story = {
  args: {
    provider: 'vimeo',
    videoId: '76979871',
    title: 'Vimeo Sample Video',
    poster: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=450&fit=crop',
    aspectRatio: '16/9',
    requireConsent: true,
    consentMessage: 'Dieses Video wird von Vimeo bereitgestellt. Durch Abspielen stimmen Sie der Datenverarbeitung zu.',
    consentButtonText: 'Video laden',
    controls: true,
  },
  render: (args) => renderVideoPlayer(args),
};

export const NativeVideo: Story = {
  args: {
    provider: 'native',
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
    poster: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=450&fit=crop',
    title: 'Blumen Video',
    aspectRatio: '16/9',
    controls: true,
    autoplay: false,
    muted: false,
    loop: false,
  },
  render: (args) => renderVideoPlayer(args),
};

export const AutoplayMuted: Story = {
  args: {
    provider: 'native',
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
    title: 'Autoplay Video',
    aspectRatio: '16/9',
    controls: true,
    autoplay: true,
    muted: true,
    loop: true,
  },
  render: (args) => renderVideoPlayer(args),
};
