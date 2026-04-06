/**
 * ProgressTracker Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'UI/ProgressTracker',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Multi-step progress indicator for checkout flows, wizards, and onboarding.

Features:
- Horizontal and vertical orientation
- Three variants (dots, numbers, icons)
- Three sizes (sm, md, lg)
- Step status tracking (completed, current, upcoming)
- Animated connecting lines with progress fill
- aria-current="step" on active step
- Dark mode support
        `,
      },
    },
  },
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation',
    },
    variant: {
      control: { type: 'select' },
      options: ['dots', 'numbers', 'icons'],
      description: 'Step indicator style',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Component size',
    },
  },
};

export default meta;
type Story = StoryObj;

interface StepData {
  label: string;
  description?: string;
  status: 'completed' | 'current' | 'upcoming';
}

const checkoutSteps: StepData[] = [
  { label: 'Cart', description: 'Review items', status: 'completed' },
  { label: 'Shipping', description: 'Delivery address', status: 'completed' },
  { label: 'Payment', description: 'Payment method', status: 'current' },
  { label: 'Confirm', description: 'Place order', status: 'upcoming' },
];

/* Shared size map for indicators */
const sizeMap: Record<string, { indicator: string; font: string; descFont: string; checkSize: string }> = {
  sm: { indicator: '1.5rem', font: '0.75rem', descFont: '0.75rem', checkSize: '0.75rem' },
  md: { indicator: '2rem', font: '0.875rem', descFont: '0.75rem', checkSize: '1rem' },
  lg: { indicator: '2.75rem', font: '1rem', descFont: '0.875rem', checkSize: '1.25rem' },
};

const checkSvg = (size: string) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`;

const renderTracker = (steps: StepData[], orientation: string, variant: string, size: string) => {
  const s = sizeMap[size] || sizeMap.md;
  const isVertical = orientation === 'vertical';

  return html`
    <style>
      .pt-demo { font-family: system-ui, -apple-system, sans-serif; max-width: ${isVertical ? '400px' : '700px'}; }
      .pt-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: ${isVertical ? 'column' : 'row'}; }
      .pt-step { flex: ${isVertical ? 'none' : '1'}; display: flex; flex-direction: ${isVertical ? 'row' : 'column'}; align-items: ${isVertical ? 'flex-start' : 'center'}; position: relative; ${isVertical ? 'padding-bottom: 1.5rem;' : 'text-align: center;'} }
      .pt-step:last-child { ${isVertical ? 'padding-bottom: 0;' : ''} }

      /* Connector lines */
      .pt-connector {
        position: absolute;
        ${isVertical
          ? `left: calc(${s.indicator} / 2); top: 0; bottom: 0; width: 2px; transform: translateX(-50%);`
          : `top: calc(${s.indicator} / 2); left: calc(-50% + calc(${s.indicator} / 2)); right: calc(50% + calc(${s.indicator} / 2)); height: 2px;`
        }
        background: #e2e8f0; z-index: 0;
      }
      .pt-connector--filled { background: #3b82f6; }

      /* Indicator base */
      .pt-indicator {
        position: relative; z-index: 1; flex-shrink: 0;
        display: flex; align-items: center; justify-content: center;
        width: ${s.indicator}; height: ${s.indicator}; border-radius: 9999px;
        border: 2px solid #e2e8f0; background: #fff;
        font-size: ${variant === 'numbers' ? s.font : 'inherit'}; font-weight: 700; color: #64748b;
        transition: all 0.3s ease;
      }
      .pt-step--completed .pt-indicator { background: #3b82f6; border-color: #3b82f6; color: #fff; }
      .pt-step--current .pt-indicator { border-color: #3b82f6; color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.2); }

      /* Text */
      .pt-content { display: flex; flex-direction: column; gap: 0.25rem; ${isVertical ? 'margin-left: 1rem; padding-top: 0.25rem;' : 'margin-top: 0.5rem;'} }
      .pt-label { font-size: ${s.font}; font-weight: 500; color: #64748b; line-height: 1.2; }
      .pt-step--completed .pt-label, .pt-step--current .pt-label { color: #1a1a2e; font-weight: 700; }
      .pt-desc { font-size: ${s.descFont}; color: #94a3b8; line-height: 1.4; }

      /* Pulse for icons variant current step */
      .pt-pulse { width: 8px; height: 8px; border-radius: 9999px; background: #3b82f6; animation: pt-pulse 2s ease-in-out infinite; }
      .pt-empty { width: 8px; height: 8px; border-radius: 9999px; background: #e2e8f0; }
      @keyframes pt-pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.4); } }
    </style>
    <div class="pt-demo">
      <nav aria-label="Progress">
        <ol class="pt-list" role="list">
          ${steps.map((step, i) => html`
            <li class="pt-step pt-step--${step.status}" .ariaCurrent=${step.status === 'current' ? 'step' : null}>
              ${i > 0 ? html`<span class="pt-connector ${step.status === 'completed' || step.status === 'current' ? 'pt-connector--filled' : ''}"></span>` : ''}
              <span class="pt-indicator">
                ${step.status === 'completed'
                  ? html`<span .innerHTML=${checkSvg(s.checkSize)}></span>`
                  : variant === 'numbers'
                    ? html`${i + 1}`
                    : variant === 'icons'
                      ? (step.status === 'current' ? html`<span class="pt-pulse"></span>` : html`<span class="pt-empty"></span>`)
                      : ''
                }
              </span>
              <span class="pt-content">
                <span class="pt-label">${step.label}</span>
                ${step.description ? html`<span class="pt-desc">${step.description}</span>` : ''}
              </span>
            </li>
          `)}
        </ol>
      </nav>
    </div>
  `;
};

export const Default: Story = {
  args: { orientation: 'horizontal', variant: 'dots', size: 'md' },
  render: (args) => renderTracker(checkoutSteps, args.orientation as string, args.variant as string, args.size as string),
};

export const NumbersVariant: Story = {
  render: () => renderTracker(checkoutSteps, 'horizontal', 'numbers', 'md'),
};

export const IconsVariant: Story = {
  render: () => renderTracker(checkoutSteps, 'horizontal', 'icons', 'md'),
};

export const Vertical: Story = {
  render: () => renderTracker(checkoutSteps, 'vertical', 'numbers', 'md'),
};

export const LargeSize: Story = {
  render: () => renderTracker(checkoutSteps, 'horizontal', 'numbers', 'lg'),
};

export const SmallSize: Story = {
  render: () => renderTracker(checkoutSteps, 'horizontal', 'dots', 'sm'),
};

export const AllCompleted: Story = {
  render: () => renderTracker(
    checkoutSteps.map(s => ({ ...s, status: 'completed' as const })),
    'horizontal', 'numbers', 'md'
  ),
};
