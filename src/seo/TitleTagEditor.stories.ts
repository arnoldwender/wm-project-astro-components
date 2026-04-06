/**
 * TitleTagEditor Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'SEO/TitleTagEditor',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Interactive SERP preview tool for SEO title tag optimization.

Features:
- Editable title input with live Google SERP preview
- Character counter (max 60) with color-coded warnings (green/yellow/red)
- Pixel width approximation (max 580px)
- Quality score (0-100) based on length, keyword presence, and power words
- Locale support (de/en/es)
- Dark mode support
        `,
      },
    },
  },
  argTypes: {
    initialTitle: { control: 'text', description: 'Pre-filled title text' },
    targetKeyword: { control: 'text', description: 'Target SEO keyword' },
    maxChars: { control: { type: 'number', min: 30, max: 100 }, description: 'Maximum characters' },
    locale: {
      control: { type: 'select' },
      options: ['de', 'en', 'es'],
      description: 'Locale for labels and power words',
    },
  },
};

export default meta;
type Story = StoryObj;

const renderEditor = (args: Record<string, unknown>) => {
  const title = (args.initialTitle as string) || '';
  const keyword = (args.targetKeyword as string) || '';
  const maxChars = (args.maxChars as number) || 60;
  const locale = (args.locale as string) || 'de';
  const charLen = title.length;
  const isGood = charLen > 0 && charLen <= maxChars;

  return html`
    <style>
      .tte-demo {
        font-family: system-ui, -apple-system, sans-serif;
        background: #fff; border: 1px solid #e2e8f0; border-radius: 1rem;
        padding: 2rem; max-width: 40rem;
      }
      .tte-demo__label { display: block; font-size: 0.875rem; font-weight: 700; margin-bottom: 0.5rem; color: #1a202c; }
      .tte-demo__input {
        width: 100%; padding: 0.5rem 1rem; font-size: 1rem; border: 2px solid #e2e8f0;
        border-radius: 0.5rem; background: #f7fafc; outline: none; box-sizing: border-box;
      }
      .tte-demo__input:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.25); }
      .tte-demo__indicators { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1rem; font-size: 0.875rem; color: #718096; }
      .tte-demo__badge {
        display: inline-block; padding: 0.0625rem 0.25rem; font-size: 0.75rem; font-weight: 700;
        border-radius: 0.25rem; text-transform: uppercase;
      }
      .tte-demo__badge--green { background: rgba(34,197,94,0.15); color: #22c55e; }
      .tte-demo__badge--red { background: rgba(239,68,68,0.15); color: #ef4444; }
      .tte-demo__score-bar { flex: 1; height: 0.5rem; background: #edf2f7; border-radius: 9999px; overflow: hidden; min-width: 6rem; }
      .tte-demo__score-fill { height: 100%; border-radius: 9999px; background: #22c55e; width: 0%; }
      .tte-demo__serp { margin-top: 1.5rem; padding: 1rem 1.5rem; background: #fff; border: 1px solid #e2e8f0; border-radius: 0.5rem; font-family: Arial, sans-serif; }
      .tte-demo__serp-title { font-size: 1.25rem; color: #1a0dab; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 36.25rem; }
      .tte-demo__serp-url { font-size: 0.875rem; color: #006621; margin-top: 0.25rem; }
      .tte-demo__serp-desc { font-size: 0.875rem; color: #545454; margin-top: 0.25rem; }
      .tte-demo__score-row { display: flex; align-items: center; gap: 0.25rem; flex-basis: 100%; }
    </style>
    <div class="tte-demo">
      <label class="tte-demo__label">${locale === 'en' ? 'Google SERP Preview' : locale === 'es' ? 'Vista previa SERP' : 'Google SERP Vorschau'}</label>
      <input class="tte-demo__input" type="text" value="${title}" placeholder="${locale === 'en' ? 'Enter page title...' : 'Seitentitel eingeben...'}" />
      <div class="tte-demo__indicators">
        <div>
          <strong>${locale === 'en' ? 'Characters' : 'Zeichen'}:</strong>
          <span style="font-weight:700">${charLen}</span> / ${maxChars}
          <span class="tte-demo__badge ${isGood ? 'tte-demo__badge--green' : 'tte-demo__badge--red'}">
            ${isGood ? (locale === 'en' ? 'Good' : 'Gut') : charLen === 0 ? (locale === 'en' ? 'Too short' : 'Zu kurz') : (locale === 'en' ? 'Too long' : 'Zu lang')}
          </span>
        </div>
        ${keyword ? html`
          <div>
            <strong>Keyword:</strong>
            <span class="tte-demo__badge ${title.toLowerCase().includes(keyword.toLowerCase()) ? 'tte-demo__badge--green' : 'tte-demo__badge--red'}">
              ${title.toLowerCase().includes(keyword.toLowerCase()) ? (locale === 'en' ? 'found' : 'gefunden') : (locale === 'en' ? 'missing' : 'fehlt')}
            </span>
          </div>
        ` : ''}
        <div class="tte-demo__score-row">
          <strong>${locale === 'en' ? 'Quality' : 'Qualitaet'}:</strong>
          <div class="tte-demo__score-bar"><div class="tte-demo__score-fill" style="width:${isGood ? '75' : '20'}%"></div></div>
          <span style="font-weight:700">${isGood ? 75 : 20}</span> / 100
        </div>
      </div>
      <div class="tte-demo__serp">
        <div class="tte-demo__serp-title">${title || 'Seitentitel eingeben...'}</div>
        <div class="tte-demo__serp-url">${locale === 'en' ? 'www.example.com › page' : 'www.beispiel.de › seite'}</div>
        <div class="tte-demo__serp-desc">${locale === 'en' ? 'This is an example meta description for the SERP preview.' : 'Dies ist eine beispielhafte Meta-Beschreibung fuer die SERP-Vorschau.'}</div>
      </div>
    </div>
  `;
};

export const Default: Story = {
  args: {
    initialTitle: 'SEO Agentur Halle | Webdesign & Online Marketing',
    targetKeyword: 'SEO Agentur Halle',
    maxChars: 60,
    locale: 'de',
  },
  render: (args) => renderEditor(args),
};

export const EnglishLocale: Story = {
  args: {
    initialTitle: 'Best Coffee Shops in Berlin - Your Ultimate Guide',
    targetKeyword: 'coffee shops berlin',
    maxChars: 60,
    locale: 'en',
  },
  render: (args) => renderEditor(args),
};

export const TooLong: Story = {
  args: {
    initialTitle: 'This Is An Extremely Long SEO Title That Will Definitely Get Truncated In Google Search Results Pages',
    targetKeyword: 'seo title',
    maxChars: 60,
    locale: 'en',
  },
  render: (args) => renderEditor(args),
};

export const Empty: Story = {
  args: {
    initialTitle: '',
    targetKeyword: '',
    maxChars: 60,
    locale: 'de',
  },
  render: (args) => renderEditor(args),
};
