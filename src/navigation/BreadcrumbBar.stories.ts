/**
 * BreadcrumbBar Stories - WenderMedia Astro Components
 * @copyright 2007-2026 Wender Media
 */

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Navigation/BreadcrumbBar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Styled horizontal bar wrapping breadcrumb navigation, placed below a fixed
site header and above the page hero.

**Distinct from \`Breadcrumbs\`:** \`Breadcrumbs\` is the raw \`<nav>\` primitive
with Schema.org JSON-LD. \`BreadcrumbBar\` is the layout molecule: it provides
the muted surface, bottom border, container max-width, vertical offset for
fixed headers, dark-mode adaptation, and an optional right-side slot.

**Features:**
- Muted background bar with bottom border (matches Breadcrumbs.astro palette)
- Configurable nav-offset via \`--breadcrumb-bar-nav-height\` / \`--breadcrumb-bar-top-bar-height\` CSS custom properties
- \`right\` named slot for secondary content (CTA links, page badge, etc.)
- Default slot for custom breadcrumb content when \`showBuiltinBreadcrumbs={false}\`
- 44 px minimum inner height (WCAG 2.2 AA touch-target)
- Dark-mode support via \`prefers-color-scheme: dark\`
- \`prefers-reduced-motion\` guard on child transitions
        `,
      },
    },
  },
  argTypes: {
    separator: {
      control: 'select',
      options: ['chevron', 'slash', 'arrow'],
      description: 'Separator style between breadcrumb items',
    },
    showHome: {
      control: 'boolean',
      description: 'Auto-prepend a Home link as the first item',
    },
    homeLabel: {
      control: 'text',
      description: 'Label for the auto-prepended Home link',
    },
    showBuiltinBreadcrumbs: {
      control: 'boolean',
      description: 'Render built-in Breadcrumbs component (false = use default slot)',
    },
  },
};

export default meta;
type Story = StoryObj;

/* ─────────────────────────────────────────────────────────────────────────────
 * Shared render helper — re-implements BreadcrumbBar visuals in lit-html.
 * Does NOT import the .astro file.
 * ───────────────────────────────────────────────────────────────────────────── */
interface BreadcrumbItem {
  label: string;
  href?: string;
}

const sepChar: Record<string, string> = {
  chevron: '›',
  slash: '/',
  arrow: '→',
};

function renderBar(opts: {
  items?: BreadcrumbItem[];
  separator?: string;
  showHome?: boolean;
  homeLabel?: string;
  homeHref?: string;
  rightSlot?: string;
  navOffset?: string;
  dark?: boolean;
}) {
  const {
    items = [],
    separator = 'chevron',
    showHome = true,
    homeLabel = 'Home',
    homeHref = '/',
    rightSlot = '',
    navOffset = '0px',
    dark = false,
  } = opts;

  /* Build displayed items list */
  let displayItems: BreadcrumbItem[] = [...items];
  if (showHome && displayItems[0]?.href !== homeHref) {
    displayItems = [{ label: homeLabel, href: homeHref }, ...displayItems];
  }
  const sep = sepChar[separator] ?? '›';

  const barBg = dark ? '#0f172a' : '#f8fafc';
  const barBorder = dark ? '#334155' : '#e2e8f0';
  const linkColor = dark ? '#94a3b8' : '#64748b';
  const currentColor = dark ? '#f8fafc' : '#1e293b';
  const sepColor = dark ? '#475569' : '#cbd5e1';
  const containerText = dark ? '#f8fafc' : 'inherit';

  return html`
    <div style=${`
      background-color: ${barBg};
      border-bottom: 1px solid ${barBorder};
      padding-top: calc(${navOffset} + 1rem);
      padding-bottom: 1rem;
      font-family: system-ui, -apple-system, sans-serif;
      color: ${containerText};
    `}>
      <div style="max-width: 80rem; margin-inline: auto; padding-inline: 1.5rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; min-height: 44px;">

          <!-- Breadcrumbs -->
          <nav aria-label="Breadcrumb">
            <ol style="
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              gap: 0.5rem;
              list-style: none;
              padding: 0;
              margin: 0;
              font-size: 0.875rem;
            ">
              ${displayItems.map((item, i) => html`
                <li style="display: flex; align-items: center; gap: 0.5rem;">
                  ${i > 0 ? html`<span style=${`color: ${sepColor}; user-select: none;`} aria-hidden="true">${sep}</span>` : ''}
                  ${item.href && i < displayItems.length - 1
                    ? html`<a href=${item.href} style=${`color: ${linkColor}; text-decoration: none;`}>${item.label}</a>`
                    : html`<span style=${`color: ${currentColor}; font-weight: 500;`} aria-current="page">${item.label}</span>`
                  }
                </li>
              `)}
            </ol>
          </nav>

          <!-- Right slot -->
          ${rightSlot
            ? html`<div style=${`font-size: 0.875rem; color: ${linkColor};`}>${rightSlot}</div>`
            : ''
          }

        </div>
      </div>
    </div>
  `;
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Stories
 * ───────────────────────────────────────────────────────────────────────────── */

/** Default: three-level path, chevron separator, auto Home prepended. */
export const Default: Story = {
  args: {
    separator: 'chevron',
    showHome: true,
    homeLabel: 'Home',
  },
  render: (args) =>
    renderBar({
      items: [
        { label: 'Services', href: '/services' },
        { label: 'Web Design' },
      ],
      separator: args['separator'] as string,
      showHome: args['showHome'] as boolean,
      homeLabel: args['homeLabel'] as string,
    }),
};

/** Slash separator — common convention on e-commerce and documentation sites. */
export const SlashSeparator: Story = {
  args: { separator: 'slash', showHome: false },
  render: (args) =>
    renderBar({
      items: [
        { label: 'Acme Corp', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Laptops', href: '/products/laptops' },
        { label: 'MacBook Pro 16"' },
      ],
      separator: args['separator'] as string,
      showHome: false,
    }),
};

/** Arrow separator with a deep path — shows how intermediate items render. */
export const DeepPathArrow: Story = {
  args: { separator: 'arrow', showHome: true },
  render: (args) =>
    renderBar({
      items: [
        { label: 'Shop', href: '/shop' },
        { label: 'Elektronik', href: '/shop/elektronik' },
        { label: 'Computer', href: '/shop/elektronik/computer' },
        { label: 'Laptops' },
      ],
      separator: args['separator'] as string,
      showHome: true,
    }),
};

/**
 * With right slot — demonstrates the named `right` slot being used for a
 * secondary CTA link alongside the breadcrumb trail.
 */
export const WithRightSlot: Story = {
  args: { separator: 'chevron', showHome: true },
  render: (args) =>
    renderBar({
      items: [
        { label: 'SEO', href: '/seo' },
        { label: 'Local SEO' },
      ],
      separator: args['separator'] as string,
      showHome: true,
      rightSlot: '← Back to all services',
    }),
};

/**
 * With nav offset — simulates a page with a fixed 80px navigation bar + 48px
 * top utility bar. Set via CSS custom property on the host element.
 */
export const WithNavOffset: Story = {
  args: {},
  render: () =>
    renderBar({
      items: [
        { label: 'Blog', href: '/blog' },
        { label: 'SEO Tips' },
      ],
      separator: 'chevron',
      showHome: true,
      navOffset: '128px', /* simulates --breadcrumb-bar-nav-height + top-bar */
    }),
};

/** Dark mode variant — rendered against a dark background. */
export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: { story: 'Rendered against a dark background to preview `prefers-color-scheme: dark` behavior.' },
    },
  },
  args: { separator: 'chevron', showHome: true },
  render: (args) =>
    renderBar({
      items: [
        { label: 'Services', href: '/services' },
        { label: 'Webdesign' },
      ],
      separator: args['separator'] as string,
      showHome: true,
      dark: true,
    }),
};

/** Single item — only the current page, no ancestor links. */
export const SingleItem: Story = {
  args: {},
  render: () =>
    renderBar({
      items: [{ label: 'Contact' }],
      showHome: true,
    }),
};
