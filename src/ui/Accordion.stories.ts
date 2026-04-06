/**
 * Accordion Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'UI/Accordion',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Collapsible content sections following WAI-ARIA Accordion pattern.

Features:
- Single or multiple open items
- Keyboard navigation (Arrow keys, Home, End)
- Smooth height animations
- Icon position customization (left/right)
- Four visual variants (default, bordered, separated, ghost)
- Three sizes (sm, md, lg)
- Reduced motion support
- Nested accordions support
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
      description: 'Single or multiple items open at once',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'separated', 'ghost'],
      description: 'Visual style variant',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of accordion text and padding',
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Position of the expand/collapse chevron icon',
    },
    collapsible: {
      control: 'boolean',
      description: 'Whether the active item can be collapsed',
    },
  },
};

export default meta;
type Story = StoryObj;

const accordionStyles = html`
  <style>
    .accordion-root { font-family: system-ui, -apple-system, sans-serif; max-width: 600px; }
    .accordion-item { background-color: #fff; }
    .accordion-root.bordered { border: 1px solid #e2e8f0; border-radius: 0.5rem; overflow: hidden; }
    .accordion-root.bordered .accordion-item + .accordion-item { border-top: 1px solid #e2e8f0; }
    .accordion-root.separated .accordion-item { border: 1px solid #e2e8f0; border-radius: 0.5rem; overflow: hidden; margin-bottom: 0.5rem; }
    .accordion-root.default .accordion-item + .accordion-item { border-top: 1px solid #e2e8f0; }
    .accordion-trigger {
      display: flex; align-items: center; width: 100%; padding: 1rem;
      font-weight: 500; color: #1e293b; background: transparent; border: none;
      cursor: pointer; text-align: left; transition: background-color 0.15s ease-out;
    }
    .accordion-trigger:hover { background-color: #f8fafc; }
    .accordion-trigger.icon-right { justify-content: space-between; }
    .accordion-trigger.icon-left .accordion-icon { margin-right: 0.75rem; order: -1; }
    .accordion-icon {
      flex-shrink: 0; width: 1.25rem; height: 1.25rem; color: #94a3b8;
      transition: transform 0.2s ease-out;
    }
    .accordion-trigger[aria-expanded="true"] .accordion-icon { transform: rotate(180deg); }
    .accordion-content-inner { padding: 0 1rem 1rem; color: #64748b; line-height: 1.6; }
    .accordion-trigger.sm { padding: 0.75rem; font-size: 0.875rem; }
    .accordion-trigger.lg { padding: 1.25rem; font-size: 1.125rem; }
  </style>
`;

const renderAccordion = (args: Record<string, unknown>) => {
  const variantClass = (args.variant as string) || 'default';
  const iconPos = (args.iconPosition as string) || 'right';
  const sizeClass = (args.size as string) || 'md';

  return html`
    ${accordionStyles}
    <div class="accordion-root ${variantClass}">
      <div class="accordion-item">
        <h3>
          <button type="button" class="accordion-trigger icon-${iconPos} ${sizeClass}" aria-expanded="true">
            ${iconPos === 'left' ? html`
              <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>` : ''}
            <span style="flex:1; text-align:left;">What services do you offer?</span>
            ${iconPos === 'right' ? html`
              <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>` : ''}
          </button>
        </h3>
        <div class="accordion-content">
          <div class="accordion-content-inner">
            We provide web design, SEO optimization, and digital marketing services
            tailored to small and medium businesses.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h3>
          <button type="button" class="accordion-trigger icon-${iconPos} ${sizeClass}" aria-expanded="false">
            ${iconPos === 'left' ? html`
              <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>` : ''}
            <span style="flex:1; text-align:left;">How long does a project take?</span>
            ${iconPos === 'right' ? html`
              <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>` : ''}
          </button>
        </h3>
      </div>
      <div class="accordion-item">
        <h3>
          <button type="button" class="accordion-trigger icon-${iconPos} ${sizeClass}" aria-expanded="false">
            ${iconPos === 'left' ? html`
              <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>` : ''}
            <span style="flex:1; text-align:left;">Do you offer ongoing support?</span>
            ${iconPos === 'right' ? html`
              <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>` : ''}
          </button>
        </h3>
      </div>
    </div>
  `;
};

export const Default: Story = {
  args: { type: 'single', variant: 'default', size: 'md', iconPosition: 'right', collapsible: true },
  render: (args) => renderAccordion(args),
};

export const Bordered: Story = {
  args: { type: 'single', variant: 'bordered', size: 'md', iconPosition: 'right', collapsible: true },
  render: (args) => renderAccordion(args),
};

export const Separated: Story = {
  args: { type: 'multiple', variant: 'separated', size: 'md', iconPosition: 'right', collapsible: true },
  render: (args) => renderAccordion(args),
};

export const IconLeft: Story = {
  args: { type: 'single', variant: 'bordered', size: 'md', iconPosition: 'left', collapsible: true },
  render: (args) => renderAccordion(args),
};
