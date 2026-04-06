/**
 * TeamSection Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
const meta: Meta = {
  title: 'Sections/TeamSection',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Team showcase section. Six variants (grid, cards, horizontal, overlay, minimal, featured). Configurable 2-6 columns, optional SectionHeader, featured slot.' } } },
  argTypes: { variant: { control: 'select', options: ['grid', 'cards', 'horizontal', 'overlay', 'minimal', 'featured'] }, columns: { control: { type: 'range', min: 2, max: 6 } } },
};
export default meta;
type Story = StoryObj;

const team = [
  { name: 'Jane Doe', role: 'CEO & Founder', initials: 'JD' },
  { name: 'John Smith', role: 'CTO', initials: 'JS' },
  { name: 'Maria Garcia', role: 'Head of Design', initials: 'MG' },
  { name: 'Alex Chen', role: 'Lead Engineer', initials: 'AC' },
];

export const Default: Story = {
  render: () => html`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <div style="text-align:center;margin-bottom:3rem;">
        <span style="font-size:0.875rem;font-weight:600;text-transform:uppercase;color:#3b82f6;display:block;margin-bottom:0.5rem;">Our Team</span>
        <h2 style="font-size:2rem;font-weight:700;margin:0 0 0.5rem;">Meet the People Behind Acme</h2>
        <p style="color:#64748b;">A passionate team dedicated to building great products.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;max-width:64rem;margin:0 auto;">
        ${team.map(m => html`
          <div style="text-align:center;">
            <div style="width:8rem;height:8rem;border-radius:50%;background:linear-gradient(135deg,rgba(59,130,246,0.2),rgba(59,130,246,0.4));display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;">
              <span style="font-size:2rem;font-weight:700;color:#3b82f6;">${m.initials}</span>
            </div>
            <h3 style="font-weight:600;margin:0 0 0.25rem;">${m.name}</h3>
            <p style="font-size:0.875rem;color:#3b82f6;font-weight:500;margin:0;">${m.role}</p>
          </div>
        `)}
      </div>
    </section>
  `,
};

export const Cards: Story = {
  render: () => html`
    <section style="padding:4rem 2rem;background:#f8fafc;font-family:system-ui,sans-serif;">
      <h2 style="text-align:center;font-size:2rem;font-weight:700;margin:0 0 3rem;">Leadership</h2>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;max-width:56rem;margin:0 auto;">
        ${team.slice(0, 3).map(m => html`
          <div style="background:white;border:1px solid #e2e8f0;border-radius:1rem;padding:1.5rem;text-align:center;">
            <div style="width:5rem;height:5rem;border-radius:50%;background:linear-gradient(135deg,rgba(59,130,246,0.2),rgba(59,130,246,0.4));display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;">
              <span style="font-size:1.5rem;font-weight:700;color:#3b82f6;">${m.initials}</span>
            </div>
            <h3 style="font-weight:600;margin:0 0 0.25rem;">${m.name}</h3>
            <p style="font-size:0.875rem;color:#3b82f6;margin:0;">${m.role}</p>
          </div>
        `)}
      </div>
    </section>
  `,
};
