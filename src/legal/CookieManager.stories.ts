/**
 * CookieManager Stories — WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Legal/CookieManager',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A DSGVO-compliant cookie consent banner with three opt-in categories (necessary, functional, analytics).

Key behaviours:
- **No flash on load**: banner appears only on first user interaction (mousemove, scroll, touchstart, click) or after a configurable timeout.
- **localStorage persistence**: choices are saved under a configurable key; subsequent visits skip the banner.
- \`cookie-consent-changed\` CustomEvent is dispatched on every save — downstream scripts should listen and activate accordingly.
- **Keyboard accessible**: Escape key triggers "necessary only" dismissal; focus moves into the banner on open.
- **prefers-reduced-motion**: all transitions are disabled when the user prefers reduced motion.
- Floating settings button appears after consent is given, allowing the user to reopen the banner at any time.
        `,
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    title: { control: 'text', description: 'Banner heading' },
    description: { control: 'text', description: 'Banner description paragraph' },
    labelAcceptAll: { control: 'text', description: '"Accept all" button label' },
    labelAcceptSelected: { control: 'text', description: '"Accept selected" button label' },
    labelRejectAll: { control: 'text', description: '"Necessary only" button label' },
    privacyUrl: { control: 'text', description: 'href for the privacy/Datenschutz page' },
    imprintUrl: { control: 'text', description: 'href for the imprint/Impressum page' },
  },
};

export default meta;
type Story = StoryObj;

// ----------------------------------------------------------------
// Shared render helper — re-implements the banner visuals in lit-html.
// The actual .astro component is not importable in Storybook; this
// gives an accurate visual approximation for review.
// ----------------------------------------------------------------

interface CookieManagerArgs {
  title?: string;
  description?: string;
  labelAcceptAll?: string;
  labelAcceptSelected?: string;
  labelRejectAll?: string;
  labelNecessary?: string;
  descNecessary?: string;
  labelFunctional?: string;
  descFunctional?: string;
  labelAnalytics?: string;
  descAnalytics?: string;
  privacyUrl?: string;
  privacyLinkText?: string;
  imprintUrl?: string;
  imprintLinkText?: string;
}

const renderBanner = (args: CookieManagerArgs) => html`
  <style>
    .sb-cm-banner {
      position: relative;
      background: #fff;
      border-top: 3px solid #0ea5e9;
      box-shadow: 0 -10px 25px rgba(0,0,0,.12);
      font-family: system-ui, -apple-system, sans-serif;
    }
    .sb-cm-content {
      max-width: 80rem;
      margin: 0 auto;
      padding: 1.5rem;
    }
    .sb-cm-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #0ea5e9;
      margin: 0 0 .5rem;
    }
    .sb-cm-desc {
      font-size: .875rem;
      color: #475569;
      margin: 0 0 1rem;
      line-height: 1.5;
    }
    .sb-cm-categories {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    .sb-cm-cat {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: .5rem;
      padding: 1rem;
    }
    .sb-cm-cat-hd {
      display: flex;
      align-items: center;
      gap: .5rem;
      margin-bottom: .5rem;
    }
    .sb-cm-cat-hd input[type="checkbox"] {
      width: 18px; height: 18px;
      accent-color: #0ea5e9;
    }
    .sb-cm-cat-lbl { font-size: .875rem; color: #1e293b; }
    .sb-cm-cat-desc { font-size: .75rem; color: #64748b; margin: 0; line-height: 1.4; }
    .sb-cm-btns {
      display: flex;
      flex-wrap: wrap;
      gap: .75rem;
      justify-content: center;
      margin-bottom: 1rem;
    }
    .sb-cm-btn {
      min-height: 44px;
      padding: .75rem 1.5rem;
      border-radius: .375rem;
      font-weight: 600;
      font-size: .875rem;
      cursor: pointer;
      border: none;
    }
    .sb-cm-btn--primary { background: #0ea5e9; color: #fff; }
    .sb-cm-btn--primary:hover { background: #0284c7; }
    .sb-cm-btn--secondary {
      background: #f1f5f9; color: #1e293b;
      border: 1px solid #cbd5e1;
    }
    .sb-cm-btn--secondary:hover { background: #e2e8f0; }
    .sb-cm-btn--ghost {
      background: transparent; color: #64748b;
      border: 1px solid #e2e8f0;
    }
    .sb-cm-btn--ghost:hover { background: #f8fafc; color: #1e293b; }
    .sb-cm-footer {
      text-align: center;
      border-top: 1px solid #e2e8f0;
      padding-top: 1rem;
    }
    .sb-cm-footer p { margin: 0; font-size: .75rem; color: #64748b; }
    .sb-cm-footer a { color: #0ea5e9; text-decoration: none; }
    .sb-cm-footer a:hover { text-decoration: underline; }
    /* Floating settings button */
    .sb-cm-fab {
      position: absolute;
      bottom: 1.5rem;
      left: 1.5rem;
      width: 56px; height: 56px;
      border-radius: 50%;
      background: #0ea5e9;
      color: #fff;
      border: 3px solid #fff;
      box-shadow: 0 10px 15px rgba(0,0,0,.1);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  </style>

  <div class="sb-cm-banner">
    <div class="sb-cm-content">

      <h3 class="sb-cm-title">${args.title}</h3>
      <p class="sb-cm-desc">${args.description}</p>

      <div class="sb-cm-categories">
        <div class="sb-cm-cat">
          <div class="sb-cm-cat-hd">
            <input type="checkbox" checked disabled />
            <label class="sb-cm-cat-lbl"><strong>${args.labelNecessary}</strong></label>
          </div>
          <p class="sb-cm-cat-desc">${args.descNecessary}</p>
        </div>

        <div class="sb-cm-cat">
          <div class="sb-cm-cat-hd">
            <input type="checkbox" />
            <label class="sb-cm-cat-lbl"><strong>${args.labelFunctional}</strong></label>
          </div>
          <p class="sb-cm-cat-desc">${args.descFunctional}</p>
        </div>

        <div class="sb-cm-cat">
          <div class="sb-cm-cat-hd">
            <input type="checkbox" />
            <label class="sb-cm-cat-lbl"><strong>${args.labelAnalytics}</strong></label>
          </div>
          <p class="sb-cm-cat-desc">${args.descAnalytics}</p>
        </div>
      </div>

      <div class="sb-cm-btns">
        <button class="sb-cm-btn sb-cm-btn--primary">${args.labelAcceptAll}</button>
        <button class="sb-cm-btn sb-cm-btn--secondary">${args.labelAcceptSelected}</button>
        <button class="sb-cm-btn sb-cm-btn--ghost">${args.labelRejectAll}</button>
      </div>

      <footer class="sb-cm-footer">
        <p>
          <a href="${args.privacyUrl}">${args.privacyLinkText}</a>
          &nbsp;|&nbsp;
          <a href="${args.imprintUrl}">${args.imprintLinkText}</a>
        </p>
      </footer>
    </div>
  </div>

  <!-- Floating re-open button preview -->
  <div style="position:relative; height:5rem; background:#f1f5f9; display:flex; align-items:center; padding-left:1.5rem;">
    <span style="font-size:.75rem; color:#64748b; margin-left:4.5rem;">
      ← Floating settings button (shown after consent)
    </span>
    <button class="sb-cm-fab" aria-label="Cookie-Einstellungen öffnen">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round"
           aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    </button>
  </div>
`;

// ----------------------------------------------------------------
// Stories
// ----------------------------------------------------------------

/** Default German DSGVO variant */
export const DefaultDe: Story = {
  name: 'Default (DE)',
  args: {
    title: 'Cookie-Einstellungen',
    description:
      'Wir verwenden Cookies zur Verbesserung Ihrer Nutzererfahrung. Sie können Ihre Einwilligung jederzeit widerrufen.',
    labelAcceptAll: 'Alle akzeptieren',
    labelAcceptSelected: 'Auswahl akzeptieren',
    labelRejectAll: 'Nur notwendige',
    labelNecessary: 'Notwendige Cookies',
    descNecessary: 'Für die Grundfunktionen der Website erforderlich.',
    labelFunctional: 'Funktionale Cookies',
    descFunctional: 'Für erweiterte Funktionalität und bessere Performance.',
    labelAnalytics: 'Analyse-Cookies',
    descAnalytics: 'Helfen uns, die Nutzung zu verstehen. Anonymisiert.',
    privacyUrl: '/datenschutz',
    privacyLinkText: 'Datenschutzerklärung',
    imprintUrl: '/impressum',
    imprintLinkText: 'Impressum',
  },
  render: (args) => renderBanner(args as CookieManagerArgs),
};

/** English variant — shows how copy props are replaced for EN sites */
export const EnglishVariant: Story = {
  name: 'English Variant',
  args: {
    title: 'Cookie Settings',
    description:
      'We use cookies to improve your experience. You can withdraw consent at any time.',
    labelAcceptAll: 'Accept all',
    labelAcceptSelected: 'Accept selected',
    labelRejectAll: 'Necessary only',
    labelNecessary: 'Necessary Cookies',
    descNecessary: 'Required for core website functionality.',
    labelFunctional: 'Functional Cookies',
    descFunctional: 'Enable enhanced features and better performance.',
    labelAnalytics: 'Analytics Cookies',
    descAnalytics: 'Help us understand usage patterns. Anonymised.',
    privacyUrl: '/privacy',
    privacyLinkText: 'Privacy Policy',
    imprintUrl: '/imprint',
    imprintLinkText: 'Imprint',
  },
  render: (args) => renderBanner(args as CookieManagerArgs),
};

/** Spanish / MX variant */
export const SpanishVariant: Story = {
  name: 'Spanish Variant (ES/MX)',
  args: {
    title: 'Configuración de Cookies',
    description:
      'Usamos cookies para mejorar tu experiencia. Puedes retirar tu consentimiento en cualquier momento.',
    labelAcceptAll: 'Aceptar todas',
    labelAcceptSelected: 'Aceptar selección',
    labelRejectAll: 'Solo necesarias',
    labelNecessary: 'Cookies necesarias',
    descNecessary: 'Requeridas para el funcionamiento básico del sitio.',
    labelFunctional: 'Cookies funcionales',
    descFunctional: 'Habilitan funciones avanzadas y mejor rendimiento.',
    labelAnalytics: 'Cookies analíticas',
    descAnalytics: 'Nos ayudan a entender el uso del sitio. Anonimizadas.',
    privacyUrl: '/aviso-de-privacidad',
    privacyLinkText: 'Aviso de Privacidad',
    imprintUrl: '/aviso-legal',
    imprintLinkText: 'Aviso Legal',
  },
  render: (args) => renderBanner(args as CookieManagerArgs),
};
