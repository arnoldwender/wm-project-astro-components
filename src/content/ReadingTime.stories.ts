/**
 * ReadingTime Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Content/ReadingTime',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Estimated reading time display calculated from word count.

Features:
- Automatic reading time calculation from text content
- Configurable words-per-minute rate (default: 200)
- Three display variants (inline, badge, detailed)
- Optional clock icon
- Locale-aware word count formatting via Intl.NumberFormat
- Semantic time element for machine readability
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['inline', 'badge', 'detailed'],
      description: 'Display variant',
    },
    icon: {
      control: 'boolean',
      description: 'Show clock icon',
    },
    wordsPerMinute: {
      control: { type: 'number', min: 100, max: 400, step: 25 },
      description: 'Reading speed (wpm)',
    },
    locale: {
      control: 'text',
      description: 'BCP 47 locale for number formatting',
    },
  },
};

export default meta;
type Story = StoryObj;

/* Generate sample text with a given word count */
const generateText = (words: number): string => {
  const sample = 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ';
  const sampleWords = sample.split(' ').filter(Boolean);
  let result = '';
  for (let i = 0; i < words; i++) {
    result += sampleWords[i % sampleWords.length] + ' ';
  }
  return result.trim();
};

const clockIcon = html`
  <svg style="flex-shrink:0;opacity:0.7;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
`;

const renderReadingTime = (args: Record<string, unknown>) => {
  const variant = (args.variant as string) || 'inline';
  const showIcon = args.icon as boolean;
  const wpm = (args.wordsPerMinute as number) || 200;
  const locale = (args.locale as string) || 'en-US';
  const wordCount = 1200;
  const minutes = Math.max(1, Math.ceil(wordCount / wpm));
  const formattedCount = new Intl.NumberFormat(locale).format(wordCount);

  if (variant === 'badge') {
    return html`
      <style>
        .rt-badge {
          display: inline-flex; align-items: center; gap: 0.25rem;
          font-size: 0.75rem; font-weight: 500; color: #3b82f6; background: #eff6ff;
          padding: 0.25rem 0.5rem; border-radius: 9999px; font-family: system-ui, sans-serif;
          white-space: nowrap;
        }
      </style>
      <span class="rt-badge">
        ${showIcon ? clockIcon : ''}
        <time datetime="PT${minutes}M">${minutes} min</time>
      </span>
    `;
  }

  if (variant === 'detailed') {
    return html`
      <style>
        .rt-detailed {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.875rem; color: #64748b; font-family: system-ui, sans-serif;
        }
        .rt-sep { color: #e2e8f0; user-select: none; }
      </style>
      <span class="rt-detailed">
        ${showIcon ? clockIcon : ''}
        <time datetime="PT${minutes}M">${minutes} min read</time>
        <span class="rt-sep">&middot;</span>
        <span>${formattedCount} words</span>
      </span>
    `;
  }

  /* Inline (default) */
  return html`
    <style>
      .rt-inline {
        display: inline-flex; align-items: center; gap: 0.25rem;
        font-size: 0.875rem; color: #64748b; font-family: system-ui, sans-serif;
      }
    </style>
    <span class="rt-inline">
      ${showIcon ? clockIcon : ''}
      <time datetime="PT${minutes}M">${minutes} min read</time>
    </span>
  `;
};

export const Default: Story = {
  args: { variant: 'inline', icon: false, wordsPerMinute: 200, locale: 'en-US' },
  render: (args) => renderReadingTime(args),
};

export const WithIcon: Story = {
  args: { variant: 'inline', icon: true, wordsPerMinute: 200, locale: 'en-US' },
  render: (args) => renderReadingTime(args),
};

export const BadgeVariant: Story = {
  args: { variant: 'badge', icon: true, wordsPerMinute: 200, locale: 'en-US' },
  render: (args) => renderReadingTime(args),
};

export const DetailedVariant: Story = {
  args: { variant: 'detailed', icon: true, wordsPerMinute: 200, locale: 'en-US' },
  render: (args) => renderReadingTime(args),
};

export const GermanLocale: Story = {
  args: { variant: 'detailed', icon: true, wordsPerMinute: 200, locale: 'de-DE' },
  render: (args) => renderReadingTime(args),
};

export const AllVariants: Story = {
  render: () => html`
    <style>
      .rt-all { display: flex; flex-direction: column; gap: 1rem; font-family: system-ui, sans-serif; }
      .rt-row { display: flex; align-items: center; gap: 1rem; }
      .rt-label { font-size: 0.75rem; color: #94a3b8; min-width: 80px; }
      .rt-inline { display: inline-flex; align-items: center; gap: 0.25rem; font-size: 0.875rem; color: #64748b; }
      .rt-badge { display: inline-flex; align-items: center; gap: 0.25rem; font-size: 0.75rem; font-weight: 500; color: #3b82f6; background: #eff6ff; padding: 0.25rem 0.5rem; border-radius: 9999px; }
      .rt-detailed { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: #64748b; }
      .rt-sep { color: #e2e8f0; }
    </style>
    <div class="rt-all">
      <div class="rt-row">
        <span class="rt-label">Inline:</span>
        <span class="rt-inline">
          ${clockIcon}
          <time datetime="PT6M">6 min read</time>
        </span>
      </div>
      <div class="rt-row">
        <span class="rt-label">Badge:</span>
        <span class="rt-badge">
          ${clockIcon}
          <time datetime="PT6M">6 min</time>
        </span>
      </div>
      <div class="rt-row">
        <span class="rt-label">Detailed:</span>
        <span class="rt-detailed">
          ${clockIcon}
          <time datetime="PT6M">6 min read</time>
          <span class="rt-sep">&middot;</span>
          <span>1,200 words</span>
        </span>
      </div>
    </div>
  `,
};
