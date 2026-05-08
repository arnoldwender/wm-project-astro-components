/**
 * Storybook Preview Configuration - WenderMedia Astro Components
 * Global decorators, parameters, theme switching, and a11y config.
 *
 * @copyright 2007-2026 Wender Media - Arnold Wender. Wender Media Source License v1.0.
 */

import type { Preview } from '@storybook/web-components';

// Import design system
import '../src/design-system/base/reset.css';
import '../src/design-system/base/typography.css';
import '../src/design-system/tokens/primitives.css';
import '../src/design-system/tokens/semantic.css';
import '../src/design-system/tokens/components.css';
import '../src/design-system/utilities/layout.css';
import '../src/design-system/utilities/spacing.css';

const preview: Preview = {
  parameters: {
    // Note: argTypesRegex was removed. Stories should use `fn()` from
    // `storybook/test` for explicit action mocking when needed.
    controls: {
      expanded: true,
      sort: 'requiredFirst',
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      // Storybook 10: backgrounds use `options` (object) + `initialGlobals`.
      options: {
        light: { name: 'Light', value: '#ffffff' },
        dark: { name: 'Dark', value: '#0f172a' },
        neutral: { name: 'Neutral', value: '#f1f5f9' },
        brand: { name: 'Brand', value: '#eff6ff' },
      },
    },
    viewport: {
      // Storybook 10: viewports use `options` (was `viewports`).
      options: {
        iphone14: {
          name: 'iPhone 14',
          styles: { width: '390px', height: '844px' },
        },
        ipad: {
          name: 'iPad',
          styles: { width: '810px', height: '1080px' },
        },
        laptop: {
          name: 'Laptop',
          styles: { width: '1366px', height: '768px' },
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1920px', height: '1080px' },
        },
      },
    },
    layout: 'padded',
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'valid-lang', enabled: true },
          { id: 'landmark-one-main', enabled: false },
          { id: 'page-has-heading-one', enabled: false },
          { id: 'region', enabled: false },
        ],
      },
      options: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'],
        },
      },
    },
    docs: {
      toc: {
        headingSelector: 'h2, h3',
        title: 'On this page',
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Welcome',
          'Design System',
          'UI',
          'Layout',
          'Layouts',
          'Sections',
          'Navigation',
          'Accessibility',
          'SEO',
          'Forms',
          'E-commerce',
          'Content',
          'Media',
          'Maps',
          'Social',
          'Gallery',
          'Images',
          'Products',
        ],
      },
    },
  },
  // Storybook 10 default-globals replace toolbar.defaultValue.
  initialGlobals: {
    backgrounds: { value: 'light' },
    theme: 'light',
    locale: 'de-DE',
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
          { value: 'system', title: 'System', icon: 'browser' },
        ],
        dynamicTitle: true,
      },
    },
    locale: {
      description: 'Internationalization locale',
      toolbar: {
        title: 'Locale',
        icon: 'globe',
        items: [
          { value: 'de-DE', title: 'Deutsch' },
          { value: 'en-US', title: 'English' },
          { value: 'es-ES', title: 'Espanol' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (story, context) => {
      // Apply theme
      const theme = context.globals.theme || 'light';
      if (theme === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
      } else {
        document.documentElement.setAttribute('data-theme', theme);
      }

      // Apply locale
      const locale = context.globals.locale || 'de-DE';
      document.documentElement.setAttribute('lang', locale.split('-')[0]);

      return story();
    },
  ],
};

export default preview;
