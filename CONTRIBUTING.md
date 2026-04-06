# Contributing to @wendermedia/astro-components

Thank you for your interest in contributing! This guide will help you get started.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Creating Components](#creating-components)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Design Tokens](#design-tokens)

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/wm-project-astro-components.git
   cd wm-project-astro-components
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a feature branch:
   ```bash
   git checkout -b feat/your-feature-name
   ```

## Development Setup

```bash
# Run tests in watch mode
npm run test

# Run Storybook for component development
npm run storybook

# Build design tokens
npm run tokens:build

# Lint code
npm run lint

# Format code
npm run format
```

## Project Structure

```
src/
  accessibility/   # A11y components (SkipLinks, FocusTrap, ThemeToggle, etc.)
  content/         # Content components (ReadingProgress, ShareBar, TOC)
  design-system/   # Base styles, tokens, providers
  ecommerce/       # E-commerce (Cart, ProductCard, Wishlist, etc.)
  forms/           # Form components (ContactForm, Newsletter)
  gallery/         # Gallery components (BeforeAfter)
  images/          # Image components (OptimizedImage)
  layout/          # Layout components (Header, Footer)
  layouts/         # Page layouts (Bento, Magazine, Dashboard, etc.)
  maps/            # Map components (GoogleMap, OpenStreetMap)
  media/           # Media components (VideoPlayer, AudioPlayer, ImageGallery)
  navigation/      # Navigation (Breadcrumbs, Pagination, Sidebar)
  products/        # Product display components
  sections/        # Section templates (Hero, CTA, Pricing, Team, etc.)
  seo/             # SEO components (SEOHead, JsonLD, OpenGraph, etc.)
  social/          # Social components (SocialShare, SocialFollow)
  ui/              # UI primitives (Badge, Modal, Tabs, Toast, etc.)
```

## Creating Components

Use the CLI to scaffold new components:

```bash
npx wm-components create ComponentName --category=ui
```

### Component Requirements

Every component MUST:

1. **Have TypeScript Props interface** at the top of the frontmatter
2. **Include a JSDoc header** with description, features, and `@example`
3. **Include copyright notice**: `@copyright 2007-2026 Wender Media - Arnold Wender. MIT License.`
4. **Be WCAG 2.1 AA compliant** (keyboard navigation, ARIA labels, focus management)
5. **Use design tokens** - never hardcode colors, spacing, or typography values
6. **Support dark mode** via CSS custom properties
7. **Be exported** from the category's `index.ts`

### Component Header Template

```astro
---
/**
 * ComponentName - WenderMedia Astro Components
 *
 * Brief description of the component.
 *
 * Features:
 * - Feature 1
 * - Feature 2
 *
 * @example
 * <ComponentName prop="value" />
 * @copyright 2007-2026 Wender Media - Arnold Wender. MIT License.
 * @see https://github.com/arnoldwender/wm-project-astro-components
 */

export interface Props {
  // ...
}
---
```

### Atomic Design Hierarchy

- **Atoms** (ui/): Import NOTHING from other component categories
- **Molecules** (content/, forms/): Import ONLY atoms
- **Organisms** (sections/, layouts/): Import molecules and atoms
- **Never import upward** in the hierarchy

## Coding Standards

### CSS / Styling

- **ALWAYS use design tokens** via CSS custom properties:
  ```css
  /* Correct */
  color: var(--color-primary-500);
  padding: var(--space-4);

  /* Wrong - never hardcode values */
  color: #3b82f6;
  padding: 16px;
  ```
- Use semantic HTML elements (`<section>`, `<nav>`, `<article>`, etc.)
- Give meaningful IDs to sections: `id="features"`, `id="pricing"`

### Accessibility

- Color contrast minimum 4.5:1 (text), 3:1 (large text)
- Touch targets minimum 44x44px
- Keyboard navigation on all interactive elements
- Visible focus states
- `alt` text on every `<img>`
- ARIA labels on interactive elements without visible text

### GDPR / Privacy

- No third-party tracking by default
- Consent-based loading for external embeds (YouTube, Google Maps, etc.)
- Privacy-first design patterns

## Testing

```bash
# Unit tests
npm run test

# With coverage report
npm run test:coverage

# Accessibility tests
npm run test:a11y
```

### Writing Tests

- Place test files next to the component: `ComponentName.test.ts`
- Test accessibility with `axe-core`
- Test keyboard navigation
- Test all component states and variants

## Submitting Changes

1. Ensure all tests pass: `npm run test`
2. Ensure linting passes: `npm run lint`
3. Add a changeset describing your changes:
   ```bash
   npm run changeset
   ```
4. Commit with a descriptive message:
   ```bash
   git commit -m "[feat] Add new ComponentName with a11y support"
   ```
5. Push and create a Pull Request

### Commit Message Format

```
[action] Brief description

Actions: feat, fix, refactor, docs, style, test, chore
```

### Pull Request Guidelines

- Keep PRs focused on a single feature or fix
- Include screenshots for visual changes
- Update documentation if adding new components
- Ensure all CI checks pass

## Design Tokens

Tokens are managed with [Style Dictionary](https://amzn.github.io/style-dictionary/).

Source files: `tokens/src/*.json`

```bash
# Build tokens to CSS, SCSS, JS, and JSON
npm run tokens:build
```

Output formats:
- `tokens/dist/tokens.css` - CSS custom properties
- `tokens/dist/_tokens.scss` - SCSS variables
- `tokens/dist/tokens.js` - JavaScript module
- `tokens/dist/tokens.json` - Raw JSON

## Questions?

- Open an [issue](https://github.com/arnoldwender/wm-project-astro-components/issues)
- Email: info@wendermedia.com
- Website: [wendermedia.com](https://www.wendermedia.com)

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](./LICENSE).
