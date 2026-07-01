/**
 * LiteYouTubeEmbed Stories — WenderMedia Astro Components
 *
 * These stories re-implement the component visuals in lit-html
 * (they do NOT import the .astro file).
 *
 * The component itself is DSGVO-strict: no external image requests before
 * consent. Stories therefore use a local inline SVG data-URI as the poster
 * and a representative placeholder when no poster is provided.
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

// ---------------------------------------------------------------------------
// Inline SVG data-URI poster — avoids any external URL in stories
// (satisfies the image policy: no Unsplash/stock URLs).
// ---------------------------------------------------------------------------
const POSTER_DATA_URI =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%230f172a'/%3E%3Crect x='0' y='0' width='800' height='450' fill='url(%23g)'/%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%230369a1' stop-opacity='0.5'/%3E%3Cstop offset='1' stop-color='%230f172a'/%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Ctext x='400' y='240' text-anchor='middle' font-family='system-ui' font-size='18' fill='%2394a3b8'%3EVideo Poster Placeholder%3C%2Ftext%3E%3C%2Fsvg%3E";

const meta: Meta = {
  title: 'Media/LiteYouTubeEmbed',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
DSGVO/GDPR-compliant YouTube embed that makes **zero external requests** until
the user explicitly clicks to play.

**Key features:**
- Static poster placeholder (local image only — never \`i.ytimg.com\`)
- Consent gate via \`localStorage['cookieConsent'].marketing\` before loading YouTube
- Lazy-loads \`@justinribeiro/lite-youtube\` on interaction (no upfront JS)
- No-JS fallback: plain \`<a>\` link to youtube.com (no iframe = no IP leak)
- LCP-ready: \`priority={true}\` sets \`loading="eager" fetchpriority="high"\`
- WCAG 2.2 AA: \`:focus-visible\` ring, 44px play button, \`prefers-reduced-motion\` guard
- Optional transcript disclosure widget
- Distinct from \`VideoPlayer\` (which handles native HTML5 + Vimeo)
        `,
      },
    },
  },
  argTypes: {
    videoId: {
      control: 'text',
      description: 'YouTube video ID (e.g. "rH5TrIX9RQg")',
    },
    title: {
      control: 'text',
      description: 'Accessible video title (aria-label + visible overlay)',
    },
    playLabel: {
      control: 'text',
      description: 'aria-label for the play button. Defaults to "Play: {title}".',
    },
    posterSrc: {
      control: 'text',
      description:
        'Local poster image path starting with "/" — external URLs are rejected (DSGVO).',
    },
    requireConsent: {
      control: 'boolean',
      description:
        'When true (default) the embed opens the cookie-consent modal before loading YouTube.',
    },
    priority: {
      control: 'boolean',
      description:
        'Set true when the poster is the LCP candidate (above-the-fold). Renders eager+fetchpriority=high.',
    },
    transcriptUrl: {
      control: 'text',
      description: 'URL to a transcript page. When set, a disclosure widget appears below.',
    },
    privacyUrl: {
      control: 'text',
      description: 'URL to the privacy/Datenschutz page shown in the consent notice.',
    },
  },
};

export default meta;
type Story = StoryObj;

// ---------------------------------------------------------------------------
// Render helper — re-implements the component's HTML in lit-html.
// Mirrors the structure of LiteYouTubeEmbed.astro without importing it.
// ---------------------------------------------------------------------------
const renderEmbed = (args: Record<string, unknown>) => {
  const videoId = (args.videoId as string) || 'rH5TrIX9RQg';
  const title = (args.title as string) || 'Demo Video';
  const playLabel = (args.playLabel as string) || `Play: ${title}`;
  const rawPoster = args.posterSrc as string | undefined;
  // Only accept local paths — replicate the DSGVO guard from the component
  const safePoster = rawPoster?.startsWith('/') ? rawPoster : POSTER_DATA_URI;
  const hasPoster = Boolean(safePoster);
  const requireConsent = args.requireConsent !== false;
  const transcriptUrl = args.transcriptUrl as string | undefined;
  const privacyUrl = (args.privacyUrl as string) || '/datenschutz/';

  return html`
    <div
      style="
        position: relative;
        width: 100%;
        max-width: 800px;
        margin: 2rem auto;
        font-family: system-ui, sans-serif;
      "
      role="region"
      aria-label=${'Video: ' + title}
    >
      <!-- ---------------------------------------------------------------- -->
      <!-- Poster placeholder                                               -->
      <!-- ---------------------------------------------------------------- -->
      <div
        class="lyte-placeholder${hasPoster ? '' : ' lyte-placeholder--empty'}"
        data-video-id=${videoId}
        data-title=${title}
        data-play-label=${playLabel}
        data-require-consent=${requireConsent ? 'true' : 'false'}
        style="
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 0.75rem;
          overflow: hidden;
          cursor: pointer;
          background-color: #0f172a;
          box-shadow: 0 20px 25px -5px rgba(0,0,0,.1);
        "
      >
        ${hasPoster
          ? html`
              <img
                src=${safePoster}
                alt=${'Thumbnail: ' + title}
                style="
                  position: absolute;
                  inset: 0;
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                "
                loading="lazy"
                width="800"
                height="450"
              />
            `
          : html`
              <div
                style="
                  position: absolute;
                  inset: 0;
                  display: flex;
                  align-items: flex-end;
                  justify-content: center;
                  padding: 1rem;
                "
                aria-hidden="true"
              >
                <span style="font-size: 0.875rem; font-weight: 500; color: #94a3b8;">
                  Video
                </span>
              </div>
            `}

        <!-- Gradient overlay -->
        <div
          aria-hidden="true"
          style="
            position: absolute;
            inset: 0;
            background: linear-gradient(
              to bottom,
              rgba(0,0,0,0.08) 0%,
              rgba(0,0,0,0) 30%,
              rgba(0,0,0,0) 65%,
              rgba(0,0,0,0.45) 100%
            );
            pointer-events: none;
          "
        ></div>

        <!-- Play button — 44px minimum touch target -->
        <button
          type="button"
          aria-label=${playLabel}
          style="
            background: none;
            border: none;
            padding: 0;
            cursor: pointer;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            min-width: 44px;
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10;
          "
        >
          <svg
            viewBox="0 0 68 48"
            width="68"
            height="48"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
              fill="#f00"
            />
            <path d="M 45,24 27,14 27,34" fill="#fff" />
          </svg>
        </button>

        <!-- Title bar -->
        <div
          aria-hidden="true"
          style="
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 0.75rem 1rem;
            background: linear-gradient(to top, rgba(0,0,0,0.82), transparent);
            pointer-events: none;
          "
        >
          <span
            style="
              color: #fff;
              font-size: 1rem;
              font-weight: 600;
              line-height: 1.375;
            "
          >${title}</span>
        </div>

        <!-- Consent notice -->
        ${requireConsent
          ? html`
              <div
                aria-live="polite"
                aria-atomic="true"
                style="
                  position: absolute;
                  top: 0.75rem;
                  left: 0.75rem;
                  right: 0.75rem;
                  background: rgba(0,0,0,0.78);
                  backdrop-filter: blur(4px);
                  padding: 0.5rem 0.75rem;
                  border-radius: 0.375rem;
                  z-index: 10;
                "
              >
                <p style="margin: 0; color: #fff; font-size: 0.75rem; line-height: 1.5;">
                  Clicking loads the video from YouTube (Google). Data is transferred to Google.
                  <a
                    href=${privacyUrl}
                    style="color: #0ea5e9; text-decoration: underline;"
                  >Learn more</a>
                </p>
              </div>
            `
          : ''}
      </div>

      <!-- No-JS fallback link -->
      <noscript>
        <p style="margin-top: 0.75rem; text-align: center; font-size: 0.875rem;">
          <a
            href=${'https://www.youtube.com/watch?v=' + videoId}
            target="_blank"
            rel="noopener noreferrer"
            style="color: #0ea5e9; text-decoration: underline; font-weight: 600;"
          >
            Watch on YouTube: ${title}
          </a>
        </p>
      </noscript>

      <!-- Transcript widget -->
      ${transcriptUrl
        ? html`
            <div style="margin-top: 1rem; text-align: center;">
              <details
                style="
                  background: #f8fafc;
                  border: 1px solid #e2e8f0;
                  border-radius: 0.5rem;
                  padding: 0.75rem 1rem;
                  display: inline-block;
                  text-align: left;
                "
              >
                <summary
                  style="
                    cursor: pointer;
                    list-style: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 600;
                    color: #0ea5e9;
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                  Transcript available
                </summary>
                <div style="padding-top: 0.75rem;">
                  <a
                    href=${transcriptUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style="color: #0ea5e9; text-decoration: none; font-weight: 500;"
                  >
                    Open full transcript →
                  </a>
                </div>
              </details>
            </div>
          `
        : ''}
    </div>
  `;
};

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

/**
 * Default: poster provided as a local path, consent required (default).
 * In a real deployment `posterSrc` is an absolute path like
 * "/images/video/rH5TrIX9RQg.webp" served from the project's public/ dir.
 * The story uses an inline SVG data-URI so Storybook renders without a server.
 */
export const WithPosterConsentRequired: Story = {
  name: 'With Poster — Consent Required (default)',
  args: {
    videoId: 'rH5TrIX9RQg',
    title: 'Wender Media Introduction',
    posterSrc: POSTER_DATA_URI,
    requireConsent: true,
    privacyUrl: '/datenschutz/',
  },
  render: (args) => renderEmbed(args),
};

/**
 * No consent gate — embed loads on first click.
 * Suitable when the user already accepted cookies in a prior step
 * (e.g. a dedicated video watch page the user navigated to intentionally).
 */
export const WithPosterNoConsent: Story = {
  name: 'With Poster — No Consent Gate',
  args: {
    videoId: 'rH5TrIX9RQg',
    title: 'Wender Media Introduction',
    posterSrc: POSTER_DATA_URI,
    requireConsent: false,
  },
  render: (args) => renderEmbed(args),
};

/**
 * Empty poster — no local image available.
 * The component renders a tokenised dark slate placeholder.
 * DSGVO: still zero external requests (no i.ytimg.com fallback).
 */
export const NoPoster: Story = {
  name: 'No Poster (dark placeholder)',
  args: {
    videoId: 'abc123xyz',
    title: 'Video Without Poster',
    requireConsent: true,
  },
  render: (args) => renderEmbed(args),
};

/**
 * Priority / LCP candidate — poster rendered eager + fetchpriority=high.
 * Use this for above-the-fold hero sections where the poster is the LCP element.
 */
export const PriorityLCP: Story = {
  name: 'Priority (LCP candidate)',
  args: {
    videoId: 'rH5TrIX9RQg',
    title: 'Hero Video (LCP)',
    posterSrc: POSTER_DATA_URI,
    priority: true,
    requireConsent: true,
  },
  render: (args) => renderEmbed(args),
};

/**
 * With transcript link — shows the disclosure widget below the embed.
 */
export const WithTranscript: Story = {
  name: 'With Transcript Link',
  args: {
    videoId: 'rH5TrIX9RQg',
    title: 'Wender Media Introduction',
    posterSrc: POSTER_DATA_URI,
    requireConsent: true,
    transcriptUrl: '/transcripts/wender-media-introduction/',
  },
  render: (args) => renderEmbed(args),
};

/**
 * Custom play label and privacy URL — demonstrating localisation.
 */
export const CustomLabels: Story = {
  name: 'Custom Play Label + Privacy URL',
  args: {
    videoId: 'rH5TrIX9RQg',
    title: 'Produktvorstellung',
    playLabel: 'Video abspielen: Produktvorstellung',
    posterSrc: POSTER_DATA_URI,
    requireConsent: true,
    privacyUrl: '/datenschutzerklaerung/',
  },
  render: (args) => renderEmbed(args),
};
