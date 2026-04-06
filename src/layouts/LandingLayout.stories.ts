/**
 * LandingLayout Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Layouts/LandingLayout',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Full landing page structure with named slots for nav, main content, and footer.

**Features:**
- Pre-built section patterns via LandingSection
- Scroll-triggered animations
- Sticky navigation support
- Full-height flex layout
- A/B testing friendly modular sections
        `,
      },
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj;

const renderLandingLayout = () => html`
  <div style="min-height: 100vh; display: flex; flex-direction: column; font-family: system-ui, sans-serif;">
    <!-- Nav -->
    <header style="position: sticky; top: 0; z-index: 50; background: rgba(255,255,255,0.9); backdrop-filter: blur(12px); border-bottom: 1px solid #e2e8f0; padding: 1rem 2rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; max-width: 1200px; margin: 0 auto;">
        <span style="font-weight: 700; font-size: 1.25rem;">SaaS Product</span>
        <nav style="display: flex; gap: 2rem; font-size: 0.875rem;">
          <a href="#" style="text-decoration: none; color: #64748b;">Features</a>
          <a href="#" style="text-decoration: none; color: #64748b;">Pricing</a>
          <a href="#" style="text-decoration: none; color: #64748b;">Contact</a>
        </nav>
      </div>
    </header>

    <!-- Main -->
    <main style="flex: 1;">
      <!-- Hero Section -->
      <section style="padding: 5rem 2rem; text-align: center; background: linear-gradient(to bottom, #f8fafc, white);">
        <h1 style="font-size: 3rem; font-weight: 700; margin: 0 0 1rem;">Build faster, ship smarter</h1>
        <p style="font-size: 1.25rem; color: #64748b; max-width: 40rem; margin: 0 auto 2rem;">The all-in-one platform for modern development teams.</p>
        <button style="padding: 0.875rem 2rem; background: #3b82f6; color: white; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer;">Get Started Free</button>
      </section>

      <!-- Features Section -->
      <section style="padding: 4rem 2rem; max-width: 1200px; margin: 0 auto;">
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
          ${['Fast', 'Secure', 'Scalable'].map((f) => html`
            <div style="padding: 2rem; background: #f8fafc; border-radius: 0.75rem; text-align: center;">
              <h3 style="font-weight: 600; margin: 0 0 0.5rem;">${f}</h3>
              <p style="color: #64748b; font-size: 0.875rem; margin: 0;">Built for performance from the ground up.</p>
            </div>
          `)}
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer style="padding: 2rem; text-align: center; border-top: 1px solid #e2e8f0; font-size: 0.75rem; color: #9ca3af;">
      &copy; 2026 SaaS Product. All rights reserved.
    </footer>
  </div>
`;

export const Default: Story = {
  render: () => renderLandingLayout(),
};

export const DarkVariant: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column; font-family: system-ui, sans-serif; background: #0f172a; color: white;">
      <header style="padding: 1rem 2rem; border-bottom: 1px solid #1e293b;">
        <span style="font-weight: 700;">Dark Landing</span>
      </header>
      <main style="flex: 1; display: flex; align-items: center; justify-content: center; text-align: center; padding: 4rem 2rem;">
        <div>
          <h1 style="font-size: 3rem; font-weight: 700; margin: 0 0 1rem;">Ship with confidence</h1>
          <p style="font-size: 1.25rem; opacity: 0.7; max-width: 40rem; margin: 0 auto 2rem;">End-to-end developer experience.</p>
          <button style="padding: 0.875rem 2rem; background: #3b82f6; color: white; border: none; border-radius: 0.5rem; font-weight: 600;">Start Building</button>
        </div>
      </main>
      <footer style="padding: 2rem; text-align: center; border-top: 1px solid #1e293b; font-size: 0.75rem; opacity: 0.5;">
        &copy; 2026 Dark Landing. All rights reserved.
      </footer>
    </div>
  `,
};
