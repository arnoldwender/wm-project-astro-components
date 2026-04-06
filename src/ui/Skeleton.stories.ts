/**
 * Skeleton Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'UI/Skeleton',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Premium loading placeholder with smooth animations.

Features:
- Seven variants (text, circle, rect, avatar, card, image, button)
- Four compound layouts (profile, post, comment, product)
- Four sizes (sm, md, lg, xl)
- Shimmer and pulse animation options
- Multi-line text skeleton
- Card skeleton with image, title, text, and buttons
- Custom width and height support
- Configurable border-radius
- Reduced motion support
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'circle', 'rect', 'avatar', 'card', 'image', 'button'],
      description: 'Shape/pattern variant',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size preset',
    },
    animation: {
      control: { type: 'select' },
      options: ['shimmer', 'pulse', 'none'],
      description: 'Loading animation type',
    },
    compound: {
      control: { type: 'select' },
      options: [false, 'profile', 'post', 'comment', 'product'],
      description: 'Compound layout combining multiple skeleton types',
    },
    lines: { control: { type: 'range', min: 1, max: 6 }, description: 'Number of text lines (text variant)' },
  },
};

export default meta;
type Story = StoryObj;

const skeletonStyles = html`
  <style>
    .skeleton-demo {
      background: #e2e8f0; position: relative; overflow: hidden; font-family: system-ui, sans-serif;
    }
    .skeleton-demo.shimmer::after {
      content: ''; position: absolute; inset: 0; transform: translateX(-100%);
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
      animation: shimmer-demo 1.5s infinite;
    }
    .skeleton-demo.pulse { animation: pulse-demo 1.5s ease-in-out infinite; }
    @keyframes shimmer-demo { 100% { transform: translateX(100%); } }
    @keyframes pulse-demo { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
  </style>
`;

const renderSkeleton = (args: Record<string, unknown>) => {
  const variant = (args.variant as string) || 'rect';
  const size = (args.size as string) || 'md';
  const animation = (args.animation as string) || 'shimmer';
  const lines = (args.lines as number) || 1;

  const textHeight: Record<string, string> = { sm: '0.75rem', md: '1rem', lg: '1.25rem', xl: '1.5rem' };
  const rectHeight: Record<string, string> = { sm: '4rem', md: '6rem', lg: '8rem', xl: '12rem' };
  const circleDim: Record<string, string> = { sm: '2rem', md: '3rem', lg: '4rem', xl: '6rem' };
  const avatarDim: Record<string, string> = { sm: '2rem', md: '2.5rem', lg: '3rem', xl: '4rem' };
  const buttonSize: Record<string, { h: string; w: string }> = {
    sm: { h: '2rem', w: '5rem' }, md: { h: '2.5rem', w: '6rem' },
    lg: { h: '3rem', w: '8rem' }, xl: { h: '3.5rem', w: '10rem' },
  };

  if (variant === 'text' && lines > 1) {
    return html`
      ${skeletonStyles}
      <div style="display:flex; flex-direction:column; gap:0.5rem; max-width:400px;">
        ${Array.from({ length: lines }).map((_, i) => html`
          <div class="skeleton-demo ${animation}"
            style="height:${textHeight[size]}; border-radius:0.25rem; ${i === lines - 1 ? 'width:80%;' : 'width:100%;'}"
          ></div>
        `)}
      </div>
    `;
  }

  if (variant === 'card') {
    return html`
      ${skeletonStyles}
      <div style="max-width:320px; border:1px solid #e2e8f0; border-radius:0.5rem; overflow:hidden;">
        <div class="skeleton-demo ${animation}" style="height:10rem; width:100%;"></div>
        <div style="padding:1rem; display:flex; flex-direction:column; gap:0.75rem;">
          <div class="skeleton-demo ${animation}" style="height:1.25rem; width:75%; border-radius:0.25rem;"></div>
          <div style="display:flex; flex-direction:column; gap:0.5rem;">
            <div class="skeleton-demo ${animation}" style="height:0.75rem; width:100%; border-radius:0.25rem;"></div>
            <div class="skeleton-demo ${animation}" style="height:0.75rem; width:85%; border-radius:0.25rem;"></div>
          </div>
          <div style="display:flex; gap:0.5rem; padding-top:0.5rem;">
            <div class="skeleton-demo ${animation}" style="height:2rem; width:5rem; border-radius:0.375rem;"></div>
            <div class="skeleton-demo ${animation}" style="height:2rem; width:5rem; border-radius:0.375rem;"></div>
          </div>
        </div>
      </div>
    `;
  }

  let styles = '';
  let radius = '0.25rem';

  switch (variant) {
    case 'text': styles = `height:${textHeight[size]}; width:100%; max-width:400px;`; break;
    case 'circle': styles = `width:${circleDim[size]}; height:${circleDim[size]};`; radius = '50%'; break;
    case 'avatar': styles = `width:${avatarDim[size]}; height:${avatarDim[size]};`; radius = '50%'; break;
    case 'image': styles = `height:${rectHeight[size]}; width:100%; max-width:400px; aspect-ratio:16/9;`; radius = '0.5rem'; break;
    case 'button': styles = `height:${buttonSize[size].h}; width:${buttonSize[size].w};`; radius = '0.375rem'; break;
    case 'rect': default: styles = `height:${rectHeight[size]}; width:100%; max-width:400px;`; break;
  }

  return html`
    ${skeletonStyles}
    <div class="skeleton-demo ${animation}" style="${styles} border-radius:${radius};" aria-hidden="true"></div>
  `;
};

export const TextLines: Story = {
  args: { variant: 'text', size: 'md', animation: 'shimmer', lines: 3 },
  render: (args) => renderSkeleton(args),
};

export const Card: Story = {
  args: { variant: 'card', size: 'md', animation: 'shimmer', lines: 1 },
  render: (args) => renderSkeleton(args),
};

export const Avatar: Story = {
  args: { variant: 'avatar', size: 'lg', animation: 'shimmer', lines: 1 },
  render: (args) => renderSkeleton(args),
};

export const Pulse: Story = {
  args: { variant: 'rect', size: 'md', animation: 'pulse', lines: 1 },
  render: (args) => renderSkeleton(args),
};

/* ---- Compound layout stories ---- */

const renderCompound = (args: Record<string, unknown>) => {
  const animation = (args.animation as string) || 'shimmer';
  const compound = args.compound as string;

  if (compound === 'profile') {
    return html`
      ${skeletonStyles}
      <div style="display:flex; align-items:center; gap:1rem; max-width:400px;">
        <div class="skeleton-demo ${animation}" style="width:3rem; height:3rem; border-radius:50%; flex-shrink:0;"></div>
        <div style="flex:1; display:flex; flex-direction:column; gap:0.5rem;">
          <div class="skeleton-demo ${animation}" style="height:1rem; width:33%; border-radius:0.25rem;"></div>
          <div class="skeleton-demo ${animation}" style="height:0.75rem; width:50%; border-radius:0.25rem;"></div>
        </div>
      </div>
    `;
  }

  if (compound === 'post') {
    return html`
      ${skeletonStyles}
      <div style="max-width:400px; display:flex; flex-direction:column; gap:1rem;">
        <div style="display:flex; align-items:center; gap:0.75rem;">
          <div class="skeleton-demo ${animation}" style="width:2.5rem; height:2.5rem; border-radius:50%;"></div>
          <div style="flex:1; display:flex; flex-direction:column; gap:0.375rem;">
            <div class="skeleton-demo ${animation}" style="height:0.75rem; width:6rem; border-radius:0.25rem;"></div>
            <div class="skeleton-demo ${animation}" style="height:0.625rem; width:4rem; border-radius:0.25rem;"></div>
          </div>
        </div>
        <div class="skeleton-demo ${animation}" style="aspect-ratio:16/9; width:100%; border-radius:0.5rem;"></div>
        <div style="display:flex; flex-direction:column; gap:0.5rem;">
          <div class="skeleton-demo ${animation}" style="height:1rem; width:75%; border-radius:0.25rem;"></div>
          <div class="skeleton-demo ${animation}" style="height:0.75rem; width:100%; border-radius:0.25rem;"></div>
          <div class="skeleton-demo ${animation}" style="height:0.75rem; width:85%; border-radius:0.25rem;"></div>
        </div>
        <div style="display:flex; gap:0.75rem;">
          <div class="skeleton-demo ${animation}" style="height:2rem; width:4rem; border-radius:0.375rem;"></div>
          <div class="skeleton-demo ${animation}" style="height:2rem; width:4rem; border-radius:0.375rem;"></div>
          <div class="skeleton-demo ${animation}" style="height:2rem; width:4rem; border-radius:0.375rem;"></div>
        </div>
      </div>
    `;
  }

  if (compound === 'comment') {
    return html`
      ${skeletonStyles}
      <div style="max-width:400px; display:flex; gap:0.75rem;">
        <div class="skeleton-demo ${animation}" style="width:2rem; height:2rem; border-radius:50%; flex-shrink:0;"></div>
        <div style="flex:1; display:flex; flex-direction:column; gap:0.5rem;">
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <div class="skeleton-demo ${animation}" style="height:0.75rem; width:5rem; border-radius:0.25rem;"></div>
            <div class="skeleton-demo ${animation}" style="height:0.625rem; width:3rem; border-radius:0.25rem;"></div>
          </div>
          <div class="skeleton-demo ${animation}" style="height:0.75rem; width:100%; border-radius:0.25rem;"></div>
          <div class="skeleton-demo ${animation}" style="height:0.75rem; width:80%; border-radius:0.25rem;"></div>
        </div>
      </div>
    `;
  }

  if (compound === 'product') {
    return html`
      ${skeletonStyles}
      <div style="max-width:280px; border:1px solid #e2e8f0; border-radius:0.5rem; overflow:hidden;">
        <div class="skeleton-demo ${animation}" style="aspect-ratio:1/1; width:100%;"></div>
        <div style="padding:1rem; display:flex; flex-direction:column; gap:0.75rem;">
          <div class="skeleton-demo ${animation}" style="height:1rem; width:75%; border-radius:0.25rem;"></div>
          <div style="display:flex; gap:0.25rem;">
            ${Array.from({ length: 5 }).map(() => html`
              <div class="skeleton-demo ${animation}" style="width:1rem; height:1rem; border-radius:0.25rem;"></div>
            `)}
          </div>
          <div class="skeleton-demo ${animation}" style="height:1.25rem; width:25%; border-radius:0.25rem;"></div>
          <div class="skeleton-demo ${animation}" style="height:2.5rem; width:100%; border-radius:0.375rem;"></div>
        </div>
      </div>
    `;
  }

  return html`<p>Select a compound layout.</p>`;
};

export const CompoundProfile: Story = {
  args: { compound: 'profile', animation: 'shimmer' },
  render: (args) => renderCompound(args),
  name: 'Compound — Profile',
};

export const CompoundPost: Story = {
  args: { compound: 'post', animation: 'shimmer' },
  render: (args) => renderCompound(args),
  name: 'Compound — Post',
};

export const CompoundComment: Story = {
  args: { compound: 'comment', animation: 'shimmer' },
  render: (args) => renderCompound(args),
  name: 'Compound — Comment',
};

export const CompoundProduct: Story = {
  args: { compound: 'product', animation: 'shimmer' },
  render: (args) => renderCompound(args),
  name: 'Compound — Product',
};
