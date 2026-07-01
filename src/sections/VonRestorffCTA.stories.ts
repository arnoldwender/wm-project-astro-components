/**
 * VonRestorffCTA Stories — WenderMedia Astro Components
 * @copyright 2007-2026 Arnold Wender · Wender Media. All Rights Reserved.
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/VonRestorffCTA',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**VonRestorffCTA** — Standout call-to-action using the isolation effect.

The Von Restorff effect states that an item standing out from its peers is far
more likely to be remembered and acted upon. This component renders a visually
isolated, animated CTA link designed to break visual monotony and maximise
click-through intent.

**Relationship to sibling components:**
- \`sections/CTA.astro\` — full-section CTA (layout variants, social proof, countdown).
  VonRestorffCTA is a focused *inline primitive* that can be placed inside any section.
- \`sections/CTASection.astro\` — wraps \`CTA.astro\` with section semantics.

**Variants:**
- \`glow\` (default) — pulsing ambient glow shadow
- \`pulse\` — expanding border-ring animation
- \`shake\` — periodic attention-grabbing horizontal shake
- \`gradient\` — animated multi-stop shifting gradient

**Accessibility:** \`:focus-visible\` ring, 56 px min-height (≥ 44 px WCAG touch target),
\`aria-hidden\` on decorative elements, \`prefers-reduced-motion\` guard disables all animations.
        `,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f8fafc' },
        { name: 'dark', value: '#0f172a' },
        { name: 'mid', value: '#1e293b' },
      ],
    },
  },
  argTypes: {
    href: {
      control: 'text',
      description: 'Destination URL',
      table: { defaultValue: { summary: '#' } },
    },
    text: {
      control: 'text',
      description: 'Primary CTA label (≤ 5 words for maximum impact)',
    },
    subtext: {
      control: 'text',
      description: 'Optional secondary line below the main label',
    },
    variant: {
      control: 'select',
      options: ['glow', 'pulse', 'shake', 'gradient'],
      description: 'Animation variant',
      table: { defaultValue: { summary: 'glow' } },
    },
    size: {
      control: 'select',
      options: ['md', 'lg', 'xl'],
      description: 'Button size preset',
      table: { defaultValue: { summary: 'lg' } },
    },
    icon: {
      control: 'text',
      description: 'Leading emoji / text icon (aria-hidden)',
    },
  },
};

export default meta;
type Story = StoryObj;

/* ─────────────────────────────────────────────
   Shared CSS injected inline so Storybook renders
   correctly without the Astro scoped styles.
───────────────────────────────────────────── */
const baseStyles = `
  <style>
    .vr-story-host {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2rem;
      min-height: 160px;
    }
    .vr-wrapper {
      position: relative;
      display: flex;
      justify-content: center;
      padding: 2rem 1rem;
    }
    .vr-cta {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      border-radius: 1.5rem;
      overflow: hidden;
      isolation: isolate;
      min-height: 56px;
      font-family: system-ui, -apple-system, sans-serif;
      font-weight: 700;
      transition: transform 300ms cubic-bezier(0,0,0.2,1), box-shadow 300ms cubic-bezier(0,0,0.2,1);
    }
    .vr-cta--md { padding: 1rem 2rem; font-size: 1rem; }
    .vr-cta--lg { padding: 1.25rem 2.5rem; font-size: 1.125rem; }
    .vr-cta--xl { padding: 1.5rem 3rem; font-size: 1.25rem; }
    .vr-bg {
      position: absolute;
      inset: 0;
      z-index: -1;
      background: linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%);
      transition: transform 300ms ease-out;
    }
    .vr-cta:hover .vr-bg { transform: scale(1.02); }
    .vr-content {
      position: relative;
      display: flex;
      align-items: center;
      gap: 1rem;
      color: #ffffff;
    }
    .vr-icon { font-size: 1.5em; line-height: 1; }
    .vr-text { display: flex; flex-direction: column; gap: 0.25rem; }
    .vr-main { font-weight: 700; line-height: 1.25; }
    .vr-sub { font-size: 0.75rem; opacity: 0.9; font-weight: 400; }
    .vr-arrow { display: flex; align-items: center; transition: transform 300ms ease-out; }
    .vr-cta:hover .vr-arrow { transform: translateX(4px); }
    .vr-cta:focus-visible { outline: 3px solid #7dd3fc; outline-offset: 4px; }
    .vr-cta:hover { transform: translateY(-4px); }
    .vr-cta:active { transform: translateY(-2px); }
    .vr-deco {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      opacity: 0.6;
    }
    .vr-deco--1 {
      width: 100px; height: 100px;
      background: radial-gradient(circle, #7dd3fc 0%, transparent 70%);
      top: -30%; left: -10%;
    }
    .vr-deco--2 {
      width: 80px; height: 80px;
      background: radial-gradient(circle, #86efac 0%, transparent 70%);
      bottom: -20%; right: -5%;
    }
    .vr-deco--3 {
      width: 40px; height: 40px;
      background: #fcd34d;
      top: 20%; right: 15%;
      opacity: 0.4;
    }
    /* Glow variant */
    .vr-cta--glow {
      box-shadow:
        0 0 30px color-mix(in srgb, #0ea5e9 40%, transparent),
        0 0 60px color-mix(in srgb, #0ea5e9 20%, transparent),
        0 0 90px color-mix(in srgb, #0ea5e9 10%, transparent);
      animation: vr-glow-pulse 2s ease-in-out infinite;
    }
    @keyframes vr-glow-pulse {
      0%, 100% {
        box-shadow:
          0 0 30px color-mix(in srgb, #0ea5e9 40%, transparent),
          0 0 60px color-mix(in srgb, #0ea5e9 20%, transparent),
          0 0 90px color-mix(in srgb, #0ea5e9 10%, transparent);
      }
      50% {
        box-shadow:
          0 0 40px color-mix(in srgb, #0ea5e9 55%, transparent),
          0 0 80px color-mix(in srgb, #0ea5e9 30%, transparent),
          0 0 120px color-mix(in srgb, #0ea5e9 15%, transparent);
      }
    }
    /* Pulse variant */
    .vr-cta--pulse::before {
      content: '';
      position: absolute;
      inset: -4px;
      background: linear-gradient(135deg, #38bdf8 0%, #0284c7 100%);
      border-radius: inherit;
      z-index: -2;
      animation: vr-pulse-ring 1.5s ease-out infinite;
      opacity: 0;
    }
    @keyframes vr-pulse-ring {
      0%   { transform: scale(1);    opacity: 0.6; }
      100% { transform: scale(1.15); opacity: 0; }
    }
    /* Shake variant */
    .vr-cta--shake {
      animation: vr-attention-shake 5s ease-in-out infinite;
    }
    @keyframes vr-attention-shake {
      0%, 90%, 100% { transform: translateX(0); }
      92%, 96%      { transform: translateX(-4px); }
      94%, 98%      { transform: translateX(4px); }
    }
    /* Gradient variant */
    .vr-cta--gradient .vr-bg {
      background: linear-gradient(135deg, #0ea5e9 0%, #22c55e 50%, #f59e0b 100%);
      background-size: 200% 200%;
      animation: vr-gradient-shift 3s ease infinite;
    }
    @keyframes vr-gradient-shift {
      0%, 100% { background-position: 0% 50%; }
      50%       { background-position: 100% 50%; }
    }
    @media (prefers-reduced-motion: reduce) {
      .vr-cta, .vr-bg, .vr-arrow,
      .vr-cta--glow, .vr-cta--pulse::before,
      .vr-cta--shake, .vr-cta--gradient .vr-bg {
        animation: none; transition: none;
      }
      .vr-cta:hover, .vr-cta:active { transform: none; }
    }
  </style>
`;

/** Arrow SVG shared across all stories */
const arrowSvg = html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
`;

/** Core CTA render helper — replicates Astro output in lit-html */
function renderVR(args: Record<string, unknown>) {
  const variant = (args.variant as string) ?? 'glow';
  const size = (args.size as string) ?? 'lg';
  const href = (args.href as string) ?? '#';
  const text = (args.text as string) ?? 'Call to Action';
  const subtext = args.subtext as string | undefined;
  const icon = args.icon as string | undefined;

  return html`
    ${baseStyles}
    <div class="vr-story-host">
      <div class="vr-wrapper">
        <a
          href=${href}
          class=${'vr-cta vr-cta--' + variant + ' vr-cta--' + size}
          data-von-restorff
        >
          <span class="vr-bg" aria-hidden="true"></span>
          <span class="vr-content">
            ${icon ? html`<span class="vr-icon" aria-hidden="true">${icon}</span>` : ''}
            <span class="vr-text">
              <span class="vr-main">${text}</span>
              ${subtext ? html`<span class="vr-sub">${subtext}</span>` : ''}
            </span>
            <span class="vr-arrow" aria-hidden="true">${arrowSvg}</span>
          </span>
          <span class="vr-deco vr-deco--1" aria-hidden="true"></span>
          <span class="vr-deco vr-deco--2" aria-hidden="true"></span>
          <span class="vr-deco vr-deco--3" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  `;
}

/* ─────────────────────────────────────────────
   Stories
───────────────────────────────────────────── */

/** Default glow variant — pulsing ambient shadow. */
export const Glow: StoryObj = {
  args: {
    href: '/kontakt',
    text: 'Jetzt Anfragen',
    variant: 'glow',
    size: 'lg',
  },
  render: (args) => renderVR(args),
};

/** Expanding ring radiates outward from the button border. */
export const Pulse: StoryObj = {
  args: {
    href: '/preise',
    text: 'Angebot sichern',
    subtext: 'Kostenlos & unverbindlich',
    variant: 'pulse',
    size: 'lg',
  },
  render: (args) => renderVR(args),
};

/** Periodic horizontal shake draws attention without constant motion. */
export const Shake: StoryObj = {
  args: {
    href: '/demo',
    text: 'Demo starten',
    subtext: 'Nur noch 3 Plätze frei',
    variant: 'shake',
    size: 'lg',
  },
  render: (args) => renderVR(args),
};

/** Animated multi-stop gradient suits hero sections with dark backgrounds. */
export const Gradient: StoryObj = {
  args: {
    href: '/signup',
    text: 'Kostenlos starten',
    variant: 'gradient',
    size: 'xl',
  },
  render: (args) => renderVR(args),
  parameters: {
    backgrounds: { default: 'mid' },
  },
};

/** XL size with leading emoji icon and secondary subtext line. */
export const WithIconAndSubtext: StoryObj = {
  args: {
    href: '/signup',
    text: 'Jetzt loslegen',
    subtext: '14 Tage gratis testen',
    variant: 'glow',
    size: 'xl',
    icon: '🚀',
  },
  render: (args) => renderVR(args),
};

/** Medium size — suitable for inline placement within text-heavy sections. */
export const SizeMd: StoryObj = {
  args: {
    href: '/mehr-erfahren',
    text: 'Mehr erfahren',
    variant: 'pulse',
    size: 'md',
  },
  render: (args) => renderVR(args),
};

/** All four variants side-by-side for quick comparison. */
export const AllVariants: StoryObj = {
  render: () => html`
    ${baseStyles}
    <div class="vr-story-host" style="flex-direction: column; gap: 0; background: #1e293b;">
      ${(['glow', 'pulse', 'shake', 'gradient'] as const).map((v) =>
        renderVR({ href: `#${v}`, text: v.charAt(0).toUpperCase() + v.slice(1), variant: v, size: 'md' })
      )}
    </div>
  `,
  parameters: {
    backgrounds: { default: 'mid' },
    docs: {
      description: {
        story: 'All four animation variants at `md` size for direct comparison.',
      },
    },
  },
};
