# Design Tokens Guide

Centralized design system using Style Dictionary for consistent styling across all components.

## Overview

Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values to ensure consistency and maintainability.

## Token Categories

### Colors

```json
{
  "color": {
    "brand": {
      "primary": "#0ea5e9",
      "secondary": "#ef4444"
    },
    "text": {
      "primary": "#1e293b",
      "secondary": "#475569",
      "muted": "#64748b"
    },
    "background": {
      "page": "#ffffff",
      "surface": "#ffffff",
      "muted": "#f8fafc"
    },
    "border": {
      "default": "#e2e8f0",
      "strong": "#cbd5e1"
    },
    "semantic": {
      "success": "#22c55e",
      "warning": "#f59e0b",
      "error": "#ef4444",
      "info": "#0ea5e9"
    }
  }
}
```

### Spacing

```json
{
  "spacing": {
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "6": "1.5rem",
    "8": "2rem",
    "12": "3rem",
    "16": "4rem"
  }
}
```

### Typography

```json
{
  "font": {
    "family": {
      "sans": "system-ui, -apple-system, sans-serif",
      "mono": "ui-monospace, monospace"
    },
    "size": {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem"
    },
    "weight": {
      "normal": "400",
      "medium": "500",
      "semibold": "600",
      "bold": "700"
    }
  }
}
```

### Effects

```json
{
  "borderRadius": {
    "sm": "0.25rem",
    "md": "0.5rem",
    "lg": "0.75rem",
    "full": "9999px"
  },
  "shadow": {
    "sm": "0 1px 2px rgba(0,0,0,0.05)",
    "md": "0 4px 6px rgba(0,0,0,0.1)",
    "lg": "0 10px 15px rgba(0,0,0,0.1)"
  },
  "transition": {
    "fast": "150ms",
    "base": "200ms",
    "slow": "300ms"
  }
}
```

## Building Tokens

```bash
npm run tokens:build
```

This generates output in multiple formats:

```
tokens/dist/
├── tokens.css        # CSS custom properties
├── _tokens.scss      # SCSS variables
├── _tokens-map.scss  # SCSS maps
├── tokens.js         # JavaScript ES6
├── tokens.d.ts       # TypeScript declarations
└── tokens.json       # JSON (nested)
```

## Usage

### CSS Custom Properties

```css
/* Import tokens */
@import '@wendermedia/astro-components/tokens/dist/tokens.css';

/* Use in your styles */
.button {
  background-color: var(--color-brand-primary);
  color: var(--color-text-inverse);
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--border-radius-md);
  font-weight: var(--font-weight-semibold);
  transition: background-color var(--transition-duration-base);
}

.button:hover {
  background-color: var(--color-brand-primary-hover);
}
```

### SCSS Variables

```scss
// Import tokens
@use '@wendermedia/astro-components/tokens/dist/tokens' as *;

// Use variables
.card {
  background: $color-background-surface;
  border: 1px solid $color-border-default;
  border-radius: $border-radius-lg;
  box-shadow: $shadow-md;
}
```

### SCSS Maps

```scss
@use '@wendermedia/astro-components/tokens/dist/tokens-map' as tokens;

// Access nested values
.element {
  color: map-get(tokens.$color, 'text', 'primary');
}

// Generate utilities
@each $size, $value in tokens.$spacing {
  .p-#{$size} {
    padding: $value;
  }
}
```

### JavaScript/TypeScript

```ts
import { tokens } from '@wendermedia/astro-components/tokens';

// Access token values
const primaryColor = tokens.color.brand.primary.value; // "#0ea5e9"
const spacing4 = tokens.spacing['4'].value; // "1rem"

// Helper functions
import { getCSSVar, getTokenValue } from '@wendermedia/astro-components/tokens';

// Get CSS variable reference
const cssVar = getCSSVar('color.brand.primary');
// "var(--color-brand-primary)"

// Get actual value
const value = getTokenValue('color.brand.primary', tokens);
// "#0ea5e9"
```

### In Astro Components

```astro
---
import { tokens } from '@wendermedia/astro-components/tokens';

const styles = {
  '--card-bg': tokens.color.background.surface.value,
  '--card-border': tokens.color.border.default.value,
};
---

<div class="card" style={styles}>
  <slot />
</div>

<style>
  .card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
  }
</style>
```

## Dark Mode

Tokens include dark mode variants:

```css
/* Light mode (default) */
:root {
  --color-text-primary: #1e293b;
  --color-background-page: #ffffff;
}

/* Dark mode */
[data-theme="dark"] {
  --color-text-primary: #f1f5f9;
  --color-background-page: #0f172a;
}
```

### Implementing Theme Toggle

```astro
---
import { ThemeToggle } from '@wendermedia/astro-components/accessibility';
---

<html data-theme="light">
  <head>
    <script is:inline>
      // Check saved preference
      const theme = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
    </script>
  </head>
  <body>
    <ThemeToggle />
  </body>
</html>
```

## Customization

### Overriding Tokens

Create your own token file to override defaults:

```json
// tokens/custom/brand.json
{
  "color": {
    "brand": {
      "primary": { "value": "#8b5cf6" },
      "secondary": { "value": "#ec4899" }
    }
  }
}
```

Update Style Dictionary config:

```js
// tokens/config.js
export default {
  source: [
    'node_modules/@wendermedia/astro-components/tokens/src/**/*.json',
    'tokens/custom/**/*.json', // Your overrides
  ],
  // ...
};
```

### Adding New Tokens

```json
// tokens/custom/components.json
{
  "component": {
    "card": {
      "padding": { "value": "{spacing.6}" },
      "borderRadius": { "value": "{borderRadius.lg}" },
      "shadow": { "value": "{shadow.md}" }
    },
    "button": {
      "height": {
        "sm": { "value": "2rem" },
        "md": { "value": "2.5rem" },
        "lg": { "value": "3rem" }
      }
    }
  }
}
```

### Token References

Use references to maintain relationships:

```json
{
  "color": {
    "button": {
      "primary": {
        "background": { "value": "{color.brand.primary}" },
        "text": { "value": "{color.text.inverse}" },
        "hover": { "value": "{color.brand.primary-hover}" }
      }
    }
  }
}
```

## Best Practices

### 1. Use Semantic Names

```json
// Good: Semantic naming
{
  "color": {
    "text": { "primary": "#1e293b" },
    "background": { "page": "#ffffff" }
  }
}

// Avoid: Literal naming
{
  "color": {
    "gray-800": "#1e293b",
    "white": "#ffffff"
  }
}
```

### 2. Create Component Tokens

```json
{
  "component": {
    "input": {
      "background": { "value": "{color.background.surface}" },
      "border": { "value": "{color.border.default}" },
      "borderFocus": { "value": "{color.brand.primary}" },
      "text": { "value": "{color.text.primary}" },
      "placeholder": { "value": "{color.text.muted}" }
    }
  }
}
```

### 3. Document Token Usage

```json
{
  "color": {
    "brand": {
      "primary": {
        "value": "#0ea5e9",
        "comment": "Main brand color. Use for primary buttons, links, and accents."
      }
    }
  }
}
```

### 4. Maintain Contrast Ratios

Ensure color combinations meet WCAG requirements:

```json
{
  "color": {
    "text": {
      "primary": {
        "value": "#1e293b",
        "comment": "14.7:1 contrast on white - meets AAA"
      },
      "secondary": {
        "value": "#475569",
        "comment": "7.0:1 contrast on white - meets AA"
      }
    }
  }
}
```

## Token Reference

### Complete Color Palette

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `color.brand.primary` | `#0ea5e9` | `#38bdf8` | Primary actions, links |
| `color.brand.secondary` | `#ef4444` | `#f87171` | Secondary actions, alerts |
| `color.text.primary` | `#1e293b` | `#f1f5f9` | Main text |
| `color.text.secondary` | `#475569` | `#94a3b8` | Secondary text |
| `color.text.muted` | `#64748b` | `#64748b` | Muted text, placeholders |
| `color.background.page` | `#ffffff` | `#0f172a` | Page background |
| `color.background.surface` | `#ffffff` | `#1e293b` | Card backgrounds |
| `color.background.muted` | `#f8fafc` | `#334155` | Subtle backgrounds |
| `color.border.default` | `#e2e8f0` | `#334155` | Default borders |
| `color.border.strong` | `#cbd5e1` | `#475569` | Emphasized borders |

### Spacing Scale

| Token | Value | Pixels |
|-------|-------|--------|
| `spacing.1` | `0.25rem` | 4px |
| `spacing.2` | `0.5rem` | 8px |
| `spacing.3` | `0.75rem` | 12px |
| `spacing.4` | `1rem` | 16px |
| `spacing.6` | `1.5rem` | 24px |
| `spacing.8` | `2rem` | 32px |
| `spacing.12` | `3rem` | 48px |
| `spacing.16` | `4rem` | 64px |

### Typography Scale

| Token | Value | Usage |
|-------|-------|-------|
| `font.size.xs` | `0.75rem` | Small labels |
| `font.size.sm` | `0.875rem` | Secondary text |
| `font.size.base` | `1rem` | Body text |
| `font.size.lg` | `1.125rem` | Large body |
| `font.size.xl` | `1.25rem` | H4 headings |
| `font.size.2xl` | `1.5rem` | H3 headings |
| `font.size.3xl` | `1.875rem` | H2 headings |
| `font.size.4xl` | `2.25rem` | H1 headings |
