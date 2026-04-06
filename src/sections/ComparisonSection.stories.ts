/**
 * ComparisonSection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/ComparisonSection',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Compare features, plans, or products side by side.
- Five variants: table, cards, toggle, slider, checklist
- Highlighted column with badge label
- Boolean values as check/cross icons
- Draggable image slider for before/after
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['table', 'cards', 'toggle', 'slider', 'checklist'], description: 'Comparison style' },
    title: { control: 'text', description: 'Section title' },
  },
};

export default meta;
type Story = StoryObj;

const check = html`<svg width="20" height="20" fill="#16a34a" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>`;
const cross = html`<svg width="20" height="20" fill="#dc2626" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>`;

const renderComparison = (args: Record<string, unknown>) => html`
  <section style="padding: 4rem 2rem;">
    <div style="max-width: 56rem; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase;">Plans</span>
        <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0.5rem 0;">${args.title}</h2>
      </div>
      <table style="width: 100%; border-collapse: collapse; font-size: 0.875rem;">
        <thead>
          <tr style="border-bottom: 2px solid #e2e8f0;">
            <th style="text-align: left; padding: 1rem; color: #64748b; font-weight: 500;">Feature</th>
            <th style="text-align: center; padding: 1rem; color: #1e293b; font-weight: 600;">Starter</th>
            <th style="text-align: center; padding: 1rem; color: #1e293b; font-weight: 600; background: rgba(59,130,246,0.05); border-radius: 0.5rem 0.5rem 0 0; position: relative;">
              Pro
              <span style="position: absolute; top: -0.75rem; left: 50%; transform: translateX(-50%); padding: 0.125rem 0.5rem; background: #3b82f6; color: #fff; font-size: 0.625rem; border-radius: 9999px;">Popular</span>
            </th>
            <th style="text-align: center; padding: 1rem; color: #1e293b; font-weight: 600;">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          ${[
            ['Users', 'Up to 5', 'Unlimited', 'Unlimited'],
            ['Storage', '10 GB', '100 GB', '1 TB'],
            ['API Access', false, true, true],
            ['Priority Support', false, true, true],
            ['Custom Domain', false, false, true],
          ].map(([label, ...vals]) => html`
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 0.875rem 1rem; color: #475569;">${label}</td>
              ${(vals as (string | boolean)[]).map((v, i) => html`
                <td style="text-align: center; padding: 0.875rem 1rem; ${i === 1 ? 'background: rgba(59,130,246,0.05);' : ''}">
                  ${typeof v === 'boolean' ? (v ? check : cross) : v}
                </td>
              `)}
            </tr>
          `)}
        </tbody>
      </table>
    </div>
  </section>
`;

export const Table: Story = {
  args: { variant: 'table', title: 'Choose the right plan' },
  render: (args) => renderComparison(args),
};

export const Checklist: Story = {
  args: { variant: 'checklist', title: 'Feature Comparison' },
  render: (args) => renderComparison(args),
};
