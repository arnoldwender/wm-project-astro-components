# Getting Started

This guide will help you set up @wendermedia/astro-components in your project.

## Prerequisites

- Node.js 18 or higher
- Astro 4.x or 5.x project
- npm, yarn, or pnpm

## Installation Methods

### Method 1: CLI (Recommended for New Projects)

Create a new project with everything pre-configured:

```bash
npx @wendermedia/astro-components create my-project
```

Follow the prompts to select a template and configure your project.

### Method 2: Add to Existing Project

```bash
# npm
npm install @wendermedia/astro-components

# yarn
yarn add @wendermedia/astro-components

# pnpm
pnpm add @wendermedia/astro-components
```

### Method 3: GitHub Installation (Private)

```bash
npm install git+ssh://git@github.com:arnoldwender/wm-astro-components-2025.git
```

Or add to `package.json`:

```json
{
  "dependencies": {
    "@wendermedia/astro-components": "github:arnoldwender/wm-astro-components-2025"
  }
}
```

## Basic Setup

### 1. Create a Base Layout

Create `src/layouts/BaseLayout.astro`:

```astro
---
import { SEOHead, SchemaOrg } from '@wendermedia/astro-components/seo';
import { Header, Footer } from '@wendermedia/astro-components/layout';
import { CookieConsent, SkipToContent } from '@wendermedia/astro-components/accessibility';

interface Props {
  title: string;
  description?: string;
}

const { title, description = '' } = Astro.props;
---

<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <SEOHead
      title={title}
      description={description}
      siteName="My Site"
    />
    <SchemaOrg type="WebSite" name="My Site" />
  </head>
  <body>
    <SkipToContent targetId="main-content" />

    <Header
      navItems={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ]}
      siteName="My Site"
    />

    <main id="main-content">
      <slot />
    </main>

    <Footer
      siteName="My Site"
      links={[
        { label: 'Privacy', href: '/privacy' },
        { label: 'Imprint', href: '/imprint' },
      ]}
    />

    <CookieConsent privacyUrl="/privacy" />
  </body>
</html>
```

### 2. Use the Layout

Create `src/pages/index.astro`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Home" description="Welcome to my site">
  <section>
    <h1>Welcome</h1>
    <p>This is my Astro site with WenderMedia components.</p>
  </section>
</BaseLayout>
```

### 3. Import Design Tokens (Optional)

Add the design tokens to your global styles:

```css
/* src/styles/global.css */
@import '@wendermedia/astro-components/tokens/dist/tokens.css';

body {
  font-family: var(--font-family-sans);
  color: var(--color-text-primary);
  background: var(--color-background-page);
}
```

## TypeScript Configuration

For full TypeScript support, ensure your `tsconfig.json` includes:

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

## Environment Variables

Create a `.env` file for configuration:

```env
# Site configuration
PUBLIC_SITE_URL=https://example.com
PUBLIC_SITE_NAME=My Site

# WordPress (if using headless integration)
WORDPRESS_URL=https://your-wordpress.com
WORDPRESS_USER=api_user
WORDPRESS_APP_PASSWORD=xxxx xxxx xxxx

# Analytics (optional, disabled by default)
PUBLIC_GA_ID=
PUBLIC_GTAG_ID=
```

## Next Steps

- [Component Reference](./components.md) - Full list of available components
- [Accessibility Guide](./accessibility.md) - WCAG and BFSG compliance
- [E-commerce Setup](./ecommerce.md) - Cart, wishlist, and product components
- [WordPress Integration](../integrations/wordpress/README.md) - Headless CMS setup
- [Testing Guide](./testing.md) - Unit and accessibility testing

## Troubleshooting

### Components not rendering

Ensure you're importing from the correct subpath:

```astro
// Correct
import { Header } from '@wendermedia/astro-components/layout';

// Incorrect
import { Header } from '@wendermedia/astro-components';
```

### TypeScript errors

Run `npm install` to ensure all dependencies are installed, then restart your IDE.

### Styles not applying

Make sure to import the design tokens CSS in your global styles or layout.
