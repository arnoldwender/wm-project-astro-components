![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)
![Vue](https://img.shields.io/badge/Vue-3.x-4FC08D?logo=vuedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=nodedotjs&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-4.x-6E9F18?logo=vitest&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-1.x-2EAD33?logo=playwright&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9.x-4B32C3?logo=eslint&logoColor=white)
![License](https://img.shields.io/badge/License-Proprietary-red)

# @wendermedia/astro-components

<p align="center">
  <strong>Complete Astro Development Resource</strong><br>
  Production-ready, accessible, GDPR-compliant components for modern web development
</p>

<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#components">Components</a> •
  <a href="#features">Features</a> •
  <a href="#documentation">Docs</a>
</p>

---

## Features

- **WCAG 2.1 AA Compliant** - Full accessibility support with BFSG compliance
- **GDPR/DSGVO Ready** - Privacy-first design with consent management
- **TypeScript First** - Complete type definitions for all components
- **Zero Third-Party Tracking** - No external analytics by default
- **Dark Mode Support** - CSS custom properties for theming
- **Astro 5.x Compatible** - View transitions and content collections ready

## Installation

```bash
# Create a new project with CLI
npx @wendermedia/astro-components create my-project

# Or add to existing project
npm install @wendermedia/astro-components
```

### From GitHub (private)

```bash
npm install git+ssh://git@github.com:arnoldwender/wm-project-astro-components.git
```

## Quick Start

```astro
---
// src/pages/index.astro
import { SEOHead, SchemaOrg } from '@wendermedia/astro-components/seo';
import { Header, Footer } from '@wendermedia/astro-components/layout';
import { CookieConsent } from '@wendermedia/astro-components/accessibility';
---

<!DOCTYPE html>
<html lang="de">
  <head>
    <SEOHead
      title="My Site"
      description="Site description"
      siteName="My Site"
    />
    <SchemaOrg type="WebSite" name="My Site" />
  </head>
  <body>
    <Header
      navItems={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
      ]}
      siteName="My Site"
    />

    <main>
      <slot />
    </main>

    <Footer siteName="My Site" />
    <CookieConsent />
  </body>
</html>
```

## Components

### Layout Components

| Component | Description | Import |
|-----------|-------------|--------|
| `Header` | Sticky navigation with mobile menu | `@wendermedia/astro-components/layout` |
| `Footer` | Multi-column footer with social links | `@wendermedia/astro-components/layout` |
| `Container` | Responsive content container | `@wendermedia/astro-components/layout` |
| `Grid` | CSS Grid wrapper with variants | `@wendermedia/astro-components/layout` |
| `Section` | Semantic section with spacing | `@wendermedia/astro-components/layout` |

### SEO Components

| Component | Description | Import |
|-----------|-------------|--------|
| `SEOHead` | Meta tags, OpenGraph, Twitter Cards | `@wendermedia/astro-components/seo` |
| `SchemaOrg` | JSON-LD structured data | `@wendermedia/astro-components/seo` |
| `Canonical` | Canonical URL management | `@wendermedia/astro-components/seo` |
| `RichSnippets` | FAQ, HowTo, Product schema | `@wendermedia/astro-components/seo` |
| `Sitemap` | XML sitemap generation | `@wendermedia/astro-components/seo` |

### Navigation Components

| Component | Description | Import |
|-----------|-------------|--------|
| `Breadcrumbs` | Schema.org breadcrumb navigation | `@wendermedia/astro-components/navigation` |
| `Pagination` | SEO-friendly pagination | `@wendermedia/astro-components/navigation` |
| `TableOfContents` | Auto-generated TOC | `@wendermedia/astro-components/navigation` |
| `ScrollToTop` | Animated scroll button | `@wendermedia/astro-components/navigation` |

### Accessibility Components

| Component | Description | Import |
|-----------|-------------|--------|
| `CookieConsent` | GDPR cookie banner | `@wendermedia/astro-components/accessibility` |
| `SkipToContent` | Skip navigation link | `@wendermedia/astro-components/accessibility` |
| `FontResizer` | BFSG text scaling | `@wendermedia/astro-components/accessibility` |
| `ThemeToggle` | Dark/light mode switch | `@wendermedia/astro-components/accessibility` |
| `BackToTop` | Focus-managed scroll | `@wendermedia/astro-components/accessibility` |

### Content Components

| Component | Description | Import |
|-----------|-------------|--------|
| `Accordion` | WCAG-compliant accordion | `@wendermedia/astro-components/content` |
| `Tabs` | Accessible tab interface | `@wendermedia/astro-components/content` |
| `Modal` | Focus-trapped dialog | `@wendermedia/astro-components/content` |

### E-commerce Components

| Component | Description | Import |
|-----------|-------------|--------|
| `Cart` | Shopping cart with localStorage | `@wendermedia/astro-components/ecommerce` |
| `Wishlist` | Product wishlist | `@wendermedia/astro-components/ecommerce` |
| `ProductCard` | Product display card | `@wendermedia/astro-components/ecommerce` |
| `ProductQuickView` | Modal product preview | `@wendermedia/astro-components/ecommerce` |
| `AddToCartButton` | Add to cart with states | `@wendermedia/astro-components/ecommerce` |

### Media Components

| Component | Description | Import |
|-----------|-------------|--------|
| `VideoPlayer` | Privacy-first video (YouTube, Vimeo, native) | `@wendermedia/astro-components/media` |
| `AudioPlayer` | Custom HTML5 audio player | `@wendermedia/astro-components/media` |
| `ImageGallery` | Lightbox gallery | `@wendermedia/astro-components/media` |

### Other Components

| Component | Description | Import |
|-----------|-------------|--------|
| `Hero` | Full-screen hero section | `@wendermedia/astro-components/sections` |
| `BeforeAfter` | Image comparison slider | `@wendermedia/astro-components/gallery` |
| `ContactForm` | GDPR-compliant form | `@wendermedia/astro-components/forms` |
| `ProductCard` | Affiliate product card | `@wendermedia/astro-components/products` |
| `OptimizedImage` | Responsive images | `@wendermedia/astro-components/images` |

## Component Examples

### VideoPlayer (GDPR-Compliant)

```astro
---
import { VideoPlayer } from '@wendermedia/astro-components/media';
---

<!-- YouTube with consent -->
<VideoPlayer
  provider="youtube"
  videoId="dQw4w9WgXcQ"
  title="Video Title"
  requireConsent={true}
  consentMessage="By playing, you agree to data processing."
/>

<!-- Native video -->
<VideoPlayer
  src="/videos/intro.mp4"
  poster="/images/poster.jpg"
  controls={true}
/>
```

### E-commerce Cart

```astro
---
import { Cart, ProductCard, addToCart } from '@wendermedia/astro-components/ecommerce';
---

<ProductCard
  id="prod-001"
  name="Premium Headphones"
  price={149.99}
  image="/headphones.jpg"
  showWishlist={true}
  showQuickView={true}
/>

<Cart
  currency="EUR"
  locale="de-DE"
  checkoutUrl="/checkout"
/>
```

### Cookie Consent

```astro
---
import { CookieConsent } from '@wendermedia/astro-components/accessibility';
---

<CookieConsent
  showSettings={true}
  analyticsEnabled={false}
  marketingEnabled={false}
  privacyUrl="/datenschutz"
  position="bottom"
/>
```

### Breadcrumbs with Schema.org

```astro
---
import { Breadcrumbs } from '@wendermedia/astro-components/navigation';
---

<Breadcrumbs
  items={[
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'Headphones', url: '/products/headphones' },
  ]}
  showSchema={true}
/>
```

## CLI Tool

Create new projects with pre-configured templates:

```bash
# Interactive project creation
npx @wendermedia/astro-components create my-project

# With specific template
npx @wendermedia/astro-components create my-shop --template=ecommerce

# List available templates
npx @wendermedia/astro-components list
```

### Available Templates

| Template | Description |
|----------|-------------|
| `default` | Full-featured with all components |
| `minimal` | Lightweight with core components |
| `ecommerce` | Optimized for online shops |
| `blog` | Content-focused with SEO |
| `landing` | Single-page marketing sites |

## Design Tokens

Centralized design system with Style Dictionary:

```bash
# Build tokens
npm run tokens:build
```

### Using Tokens

```css
/* CSS Custom Properties */
@import '@wendermedia/astro-components/tokens/dist/tokens.css';

.button {
  background: var(--color-brand-primary);
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--border-radius-lg);
}
```

```ts
// JavaScript
import { tokens } from '@wendermedia/astro-components/tokens';

const primaryColor = tokens.color.brand.primary.value;
```

## Testing

```bash
# Run unit tests
npm run test

# Run with coverage
npm run test:coverage

# Run accessibility tests
npm run test:a11y
```

### Testing Utilities

```ts
import {
  runA11yAudit,
  expectNoA11yViolations,
  mockFetch,
  userEvent,
} from '@wendermedia/astro-components/testing';

describe('MyComponent', () => {
  it('should have no accessibility violations', async () => {
    const element = document.querySelector('.my-component');
    await expectNoA11yViolations(element);
  });
});
```

## Storybook

Interactive component documentation:

```bash
# Start Storybook
npm run storybook

# Build static Storybook
npm run build-storybook
```

## WordPress Integration

Connect to WordPress as a headless CMS:

```ts
import {
  createWordPressClient,
  fetchPosts,
  fetchMenus,
} from '@wendermedia/astro-components/integrations/wordpress';

const wp = createWordPressClient({
  url: 'https://your-wordpress-site.com',
});

const posts = await fetchPosts(wp, { perPage: 10 });
const menu = await fetchMenus(wp);
```

See [WordPress Integration Guide](./integrations/wordpress/README.md) for full documentation.

## Versioning & Changelog

We use [Changesets](https://github.com/changesets/changesets) for version management:

```bash
# Add a changeset
npm run changeset

# Update versions
npm run version

# Publish release
npm run release
```

See [CHANGELOG.md](./CHANGELOG.md) for release history.

## Project Structure

```
@wendermedia/astro-components/
├── src/
│   ├── layout/          # Layout components
│   ├── seo/             # SEO components
│   ├── navigation/      # Navigation components
│   ├── accessibility/   # A11y components
│   ├── content/         # Content components
│   ├── ecommerce/       # E-commerce components
│   ├── media/           # Media components
│   ├── sections/        # Section components
│   ├── gallery/         # Gallery components
│   ├── forms/           # Form components
│   └── design-system/   # Base styles
├── integrations/
│   └── wordpress/       # WordPress headless CMS
├── tokens/              # Design tokens (Style Dictionary)
├── testing/             # Test utilities
├── cli/                 # CLI scaffolding tool
├── templates/           # Project templates
└── docs/                # Documentation
```

## Requirements

- **Astro**: 4.x or 5.x
- **Node.js**: 18+
- **TypeScript**: 5.x (recommended)

### Optional Dependencies

- **GSAP**: For Hero animations
- **@astrojs/react**: React component support
- **@astrojs/vue**: Vue component support

## Browser Support

- Chrome/Edge 90+
- Firefox 90+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## Contributing

1. Create a feature branch
2. Make changes
3. Add a changeset (`npm run changeset`)
4. Submit a pull request

## License

PROPRIETARY - WenderMedia internal use only.

---

<p align="center">
  Made with ❤️ by <a href="mailto:arnold.wender@gmail.com">Arnold Wender</a>
</p>


---

## Webentwicklung und Online-Marketing

Entwickelt von **Werbeagentur Wender Media**

| Attribut | Details |
|----------|---------|
| Agentur | Wender Media |
| Adresse | Franckestraße 3a, 06110 Halle (Saale) |
| Telefon | 0345 / 68676857 |
| Website | [www.wendermedia.com](https://www.wendermedia.com) |

## License

Proprietary - © Wender Media. All rights reserved.
