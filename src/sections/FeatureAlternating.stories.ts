/**
 * FeatureAlternating Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Sections/FeatureAlternating',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Zigzag feature row with image and content side by side.
- Reversible order for alternating patterns
- Optional eyebrow label and bullet-point feature list
- Responsive stacking on smaller screens
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Feature title' },
    description: { control: 'text', description: 'Feature description' },
    reverse: { control: 'boolean', description: 'Reverse image/text order' },
  },
};

export default meta;
type Story = StoryObj;

const renderFeatureAlt = (args: Record<string, unknown>) => html`
  <div style="padding: 4rem 2rem;">
    <div style="max-width: 72rem; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
      ${args.reverse ? html`
        <div>
          <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase; display: block; margin-bottom: 0.75rem;">${args.eyebrow || ''}</span>
          <h3 style="font-size: 1.5rem; font-weight: 700; color: #1e293b; margin: 0 0 1rem;">${args.title}</h3>
          <p style="color: #64748b; line-height: 1.6; margin: 0 0 1.5rem;">${args.description}</p>
          <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem;">
            <li style="display: flex; align-items: center; gap: 0.75rem; color: #475569;"><svg width="20" height="20" fill="#3b82f6" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Real-time data updates</li>
            <li style="display: flex; align-items: center; gap: 0.75rem; color: #475569;"><svg width="20" height="20" fill="#3b82f6" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Export reports as PDF</li>
            <li style="display: flex; align-items: center; gap: 0.75rem; color: #475569;"><svg width="20" height="20" fill="#3b82f6" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Custom date range filters</li>
          </ul>
        </div>
        <div style="aspect-ratio: 4/3; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 1rem;"></div>
      ` : html`
        <div style="aspect-ratio: 4/3; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 1rem;"></div>
        <div>
          <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase; display: block; margin-bottom: 0.75rem;">${args.eyebrow || ''}</span>
          <h3 style="font-size: 1.5rem; font-weight: 700; color: #1e293b; margin: 0 0 1rem;">${args.title}</h3>
          <p style="color: #64748b; line-height: 1.6; margin: 0 0 1.5rem;">${args.description}</p>
          <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem;">
            <li style="display: flex; align-items: center; gap: 0.75rem; color: #475569;"><svg width="20" height="20" fill="#3b82f6" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Real-time data updates</li>
            <li style="display: flex; align-items: center; gap: 0.75rem; color: #475569;"><svg width="20" height="20" fill="#3b82f6" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Export reports as PDF</li>
          </ul>
        </div>
      `}
    </div>
  </div>
`;

export const Default: Story = {
  args: { title: 'Powerful Analytics Dashboard', description: 'Get real-time insights into your team performance with customizable reports.', reverse: false, eyebrow: 'Analytics' },
  render: (args) => renderFeatureAlt(args),
};

export const Reversed: Story = {
  args: { title: 'Seamless Team Collaboration', description: 'Work together in real time with built-in chat and shared workspaces.', reverse: true, eyebrow: 'Collaboration' },
  render: (args) => renderFeatureAlt(args),
};
