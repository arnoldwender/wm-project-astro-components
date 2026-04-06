/**
 * SectionWrapper Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = {
  title: 'Sections/SectionWrapper',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Base wrapper for all sections. Eight background themes, six padding presets, six container widths, optional section ID for anchor linking.' } } },
  argTypes: { background: { control: 'select', options: ['transparent', 'subtle', 'muted', 'dark', 'primary', 'pattern'] }, padding: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] } },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <section style="padding:4rem 0;font-family:system-ui,sans-serif;">
      <div style="max-width:72rem;margin:0 auto;padding:0 2rem;">
        <h2 style="font-size:2rem;font-weight:700;margin:0 0 1rem;">Section Content</h2>
        <p style="color:#64748b;">This is a basic section wrapper with default transparent background and large padding.</p>
      </div>
    </section>
  `,
};

export const SubtleBackground: Story = {
  render: () => html`
    <section style="padding:4rem 0;background:#f8fafc;font-family:system-ui,sans-serif;">
      <div style="max-width:72rem;margin:0 auto;padding:0 2rem;">
        <h2 style="font-size:2rem;font-weight:700;margin:0 0 1rem;">Subtle Background</h2>
        <p style="color:#64748b;">A section with a subtle gray background for visual separation.</p>
      </div>
    </section>
  `,
};

export const DarkBackground: Story = {
  render: () => html`
    <section style="padding:4rem 0;background:#1e293b;color:white;font-family:system-ui,sans-serif;">
      <div style="max-width:72rem;margin:0 auto;padding:0 2rem;">
        <h2 style="font-size:2rem;font-weight:700;margin:0 0 1rem;">Dark Background</h2>
        <p style="color:rgba(255,255,255,0.7);">A dark section for contrast and emphasis.</p>
      </div>
    </section>
  `,
};
