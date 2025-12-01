# Design System

A complete, tokenized design system for building consistent, accessible, and beautiful user interfaces. Easy to adapt for new projects with comprehensive UI/UX support.

## Quick Start

```astro
---
import { DesignSystemProvider } from '@wendermedia/astro-components/design-system';
---

<html lang="en">
  <head>
    <DesignSystemProvider />
  </head>
  <body>
    <main class="container py-16">
      <h1 class="h1 mb-4">Welcome</h1>
      <p class="text-secondary">Your content here</p>
      <button class="bg-primary text-white px-4 py-2 rounded-md">
        Get Started
      </button>
    </main>
  </body>
</html>
```

## Token Architecture

This design system follows a **three-tier token architecture**:

### 1. Primitive Tokens (Base Values)

Raw values that form the foundation. Never use directly in components.

```css
/* Colors */
--color-blue-500: #3b82f6;
--color-gray-900: #171717;

/* Spacing (8px grid) */
--spacing-4: 1rem;      /* 16px */
--spacing-8: 2rem;      /* 32px */

/* Typography */
--font-size-lg: 1.125rem;
--font-weight-bold: 700;

/* Shadows */
--shadow-md: 0 10px 15px -3px rgb(0 0 0 / 0.1);
```

### 2. Semantic Tokens (Purpose-Driven)

Reference primitives and communicate purpose. Use these in components.

```css
/* Colors */
--color-primary: var(--color-blue-600);
--color-text-primary: var(--color-gray-900);
--color-background: var(--color-white);

/* Spacing */
--spacing-section-lg: var(--spacing-16);
--spacing-stack-md: var(--spacing-4);

/* Typography */
--font-size-h1: var(--font-size-fluid-5xl);
--font-weight-heading: var(--font-weight-bold);
```

### 3. Component Tokens (UI-Specific)

Specific to individual UI components.

```css
/* Button */
--button-primary-bg: var(--color-primary);
--button-padding-md: var(--spacing-2) var(--spacing-4);
--button-border-radius: var(--radius-md);

/* Card */
--card-shadow: var(--shadow-sm);
--card-border-radius: var(--radius-lg);
--card-padding-md: var(--spacing-4);
```

## Dark Mode

Dark mode is automatic and works out of the box:

```astro
<!-- Respects system preference by default -->
<DesignSystemProvider />

<!-- Force a default theme -->
<DesignSystemProvider defaultTheme="dark" />
```

### JavaScript API

```javascript
// Get current theme
window.theme.get(); // 'light' or 'dark'

// Set theme
window.theme.set('dark');

// Toggle theme
window.theme.toggle();

// Use system preference
window.theme.setSystem();
```

## Theme Presets

Choose from built-in presets or create your own:

```astro
<!-- Default -->
<DesignSystemProvider />

<!-- Minimal - Sharp corners, subtle shadows -->
<DesignSystemProvider preset="minimal" />

<!-- Rounded - Soft, friendly appearance -->
<DesignSystemProvider preset="rounded" />

<!-- Corporate - Professional, trustworthy -->
<DesignSystemProvider preset="corporate" />

<!-- Playful - Vibrant, fun -->
<DesignSystemProvider preset="playful" />
```

## Custom Tokens

Override any token with custom values:

```astro
<DesignSystemProvider
  customTokens={{
    '--color-primary': '#8b5cf6',
    '--color-primary-hover': '#7c3aed',
    '--font-family-heading': '"Playfair Display", serif',
    '--radius-lg': '1.5rem',
  }}
/>
```

## CSS Files

Import individual CSS files for more control:

```css
/* All tokens */
@import '@wendermedia/astro-components/design-system/tokens/index.css';

/* Individual token files */
@import '@wendermedia/astro-components/design-system/tokens/primitives.css';
@import '@wendermedia/astro-components/design-system/tokens/semantic.css';
@import '@wendermedia/astro-components/design-system/tokens/components.css';

/* Base styles */
@import '@wendermedia/astro-components/design-system/base/reset.css';
@import '@wendermedia/astro-components/design-system/base/typography.css';

/* Utilities */
@import '@wendermedia/astro-components/design-system/utilities/layout.css';
@import '@wendermedia/astro-components/design-system/utilities/spacing.css';
@import '@wendermedia/astro-components/design-system/utilities/visual.css';
```

## Color System

### Semantic Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--color-background` | White | Gray 950 | Page background |
| `--color-surface` | White | Gray 900 | Cards, panels |
| `--color-text-primary` | Gray 900 | Gray 50 | Main text |
| `--color-text-secondary` | Gray 600 | Gray 300 | Supporting text |
| `--color-primary` | Blue 600 | Blue 500 | Primary actions |
| `--color-success` | Green 600 | Green 500 | Success states |
| `--color-warning` | Amber 500 | Amber 400 | Warning states |
| `--color-error` | Red 600 | Red 500 | Error states |

### Color Scales

Each color has 11 shades (50-950):

```css
--color-blue-50   /* Lightest - backgrounds */
--color-blue-100
--color-blue-200
--color-blue-300
--color-blue-400
--color-blue-500  /* Base */
--color-blue-600  /* Primary actions */
--color-blue-700
--color-blue-800
--color-blue-900
--color-blue-950  /* Darkest */
```

Available colors: `gray`, `blue`, `green`, `amber`, `red`, `purple`, `teal`, `orange`, `pink`

## Spacing System

Based on an 8px grid with rem units:

| Token | Value | Pixels |
|-------|-------|--------|
| `--spacing-1` | 0.25rem | 4px |
| `--spacing-2` | 0.5rem | 8px |
| `--spacing-3` | 0.75rem | 12px |
| `--spacing-4` | 1rem | 16px |
| `--spacing-6` | 1.5rem | 24px |
| `--spacing-8` | 2rem | 32px |
| `--spacing-12` | 3rem | 48px |
| `--spacing-16` | 4rem | 64px |
| `--spacing-24` | 6rem | 96px |

### Semantic Spacing

```css
/* Inline (horizontal) */
--spacing-inline-sm: var(--spacing-2);   /* 8px */
--spacing-inline-md: var(--spacing-3);   /* 12px */
--spacing-inline-lg: var(--spacing-4);   /* 16px */

/* Stack (vertical) */
--spacing-stack-sm: var(--spacing-2);    /* 8px */
--spacing-stack-md: var(--spacing-4);    /* 16px */
--spacing-stack-lg: var(--spacing-6);    /* 24px */

/* Section */
--spacing-section-sm: var(--spacing-8);  /* 32px */
--spacing-section-md: var(--spacing-12); /* 48px */
--spacing-section-lg: var(--spacing-16); /* 64px */
```

## Typography

### Fluid Typography

Scales smoothly across viewport sizes:

```css
--font-size-fluid-base  /* clamp(0.9rem, ..., 1rem) */
--font-size-fluid-lg    /* clamp(1rem, ..., 1.125rem) */
--font-size-fluid-xl    /* clamp(1.125rem, ..., 1.25rem) */
--font-size-fluid-2xl   /* clamp(1.25rem, ..., 1.5rem) */
--font-size-fluid-3xl   /* clamp(1.5rem, ..., 1.875rem) */
--font-size-fluid-4xl   /* clamp(1.875rem, ..., 2.25rem) */
--font-size-fluid-5xl   /* clamp(2.25rem, ..., 3rem) */
```

### Heading Classes

```html
<h1 class="display">Display Title</h1>
<h1 class="h1">Heading 1</h1>
<h2 class="h2">Heading 2</h2>
<h3 class="h3">Heading 3</h3>
<p class="lead">Lead paragraph</p>
<p>Body text</p>
<p class="text-sm">Small text</p>
```

### Prose Container

For long-form content with proper typography:

```html
<article class="prose">
  <h1>Article Title</h1>
  <p>Content with proper spacing...</p>
  <ul>
    <li>Styled list items</li>
  </ul>
</article>
```

## Utility Classes

### Layout

```html
<!-- Display -->
<div class="flex">...</div>
<div class="grid grid-cols-3 gap-4">...</div>

<!-- Container -->
<div class="container mx-auto">...</div>

<!-- Flexbox -->
<div class="flex items-center justify-between gap-4">...</div>

<!-- Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">...</div>
```

### Spacing

```html
<!-- Margin -->
<div class="m-4">...</div>
<div class="mt-8 mb-4">...</div>
<div class="mx-auto">...</div>

<!-- Padding -->
<div class="p-4">...</div>
<div class="px-6 py-4">...</div>
```

### Visual

```html
<!-- Colors -->
<div class="bg-primary text-white">...</div>
<div class="bg-surface border border-default">...</div>

<!-- Borders -->
<div class="rounded-lg border-2 border-primary">...</div>

<!-- Shadows -->
<div class="shadow-md hover:shadow-lg transition-shadow">...</div>

<!-- Opacity -->
<div class="opacity-50 hover:opacity-100">...</div>
```

## Component Tokens Reference

### Button

```css
--button-primary-bg
--button-primary-bg-hover
--button-primary-text
--button-padding-md
--button-border-radius
--button-min-height-md  /* 40px - touch friendly */
```

### Input/Form

```css
--input-bg
--input-border
--input-border-focus
--input-padding-md
--input-border-radius
--input-min-height-md
--label-font-size
--helper-color-error
```

### Card

```css
--card-bg
--card-shadow
--card-shadow-hover
--card-border-radius
--card-padding-md
```

### Modal

```css
--modal-bg
--modal-shadow
--modal-border-radius
--modal-backdrop-bg
--modal-backdrop-blur
```

### And many more...

Badge, Alert, Avatar, Table, Tabs, Toast, Progress, Switch, Checkbox, Radio, Breadcrumb, Pagination, Slider, Accordion, Navigation, Sidebar

## Responsive Design

### Breakpoints

```css
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large screens */
```

### Container Max Widths

```css
--container-sm: 24rem;   /* 384px */
--container-md: 28rem;   /* 448px */
--container-lg: 32rem;   /* 512px */
--container-xl: 36rem;   /* 576px */
--container-7xl: 80rem;  /* 1280px */
--container-prose: 65ch; /* Optimal reading */
```

## Accessibility

Built with WCAG 2.2 compliance in mind:

- **Color Contrast**: All semantic color pairs meet AA standards
- **Focus Indicators**: Visible focus rings on interactive elements
- **Reduced Motion**: Respects `prefers-reduced-motion`
- **Touch Targets**: Minimum 44px on interactive elements

```css
/* Touch target minimum */
--touch-target-min: 44px;

/* Focus ring */
--focus-ring-width: 2px;
--focus-ring-offset: 2px;
--focus-ring-color: var(--color-focus-ring);
```

## Creating Custom Themes

### Using TypeScript

```typescript
import { createTheme, generateCSSVariables } from '@wendermedia/astro-components/design-system';

const myTheme = createTheme({
  name: 'my-brand',
  colors: {
    blue: {
      500: '#0066cc',
      600: '#0052a3',
    },
    primary: {
      DEFAULT: '#0066cc',
      hover: '#0052a3',
    },
  },
  typography: {
    fontFamily: {
      heading: '"Montserrat", sans-serif',
      body: '"Open Sans", sans-serif',
    },
  },
  borderRadius: {
    lg: '1rem',
    xl: '1.5rem',
  },
});

// Generate CSS
const css = generateCSSVariables(myTheme);
```

### Using CSS Variables

```css
:root {
  /* Override any token */
  --color-primary: #your-brand-color;
  --font-family-heading: 'Your Font', sans-serif;
  --radius-lg: 1rem;
}
```

## Best Practices

1. **Use semantic tokens** - Never use primitives directly
2. **Follow the spacing scale** - Use 8px increments
3. **Fluid typography** - Use `--font-size-fluid-*` for responsive text
4. **Dark mode support** - Test both themes
5. **Touch targets** - Minimum 44px for interactive elements
6. **Color contrast** - Test with WCAG contrast checkers
7. **Reduced motion** - Test with `prefers-reduced-motion`

## Browser Support

- Chrome 88+
- Firefox 78+
- Safari 14+
- Edge 88+

Uses modern CSS features:
- CSS Custom Properties
- `clamp()` for fluid sizing
- `dvh` units with fallback
- Logical properties
- Container queries (where used)

## Resources

- [WCAG 2.2 Guidelines](https://www.w3.org/TR/WCAG22/)
- [Design Tokens W3C Community](https://www.w3.org/community/design-tokens/)
- [Inclusive Design Principles](https://inclusivedesignprinciples.org/)
