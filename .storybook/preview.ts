/**
 * Storybook Preview Configuration - WenderMedia Astro Components
 * Global decorators, parameters, theme switching, and a11y config.
 *
 * @copyright 2007-2026 Wender Media - Arnold Wender. MIT License.
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
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      sort: 'requiredFirst',
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#0f172a' },
        { name: 'neutral', value: '#f1f5f9' },
        { name: 'brand', value: '#eff6ff' },
      ],
    },
    viewport: {
      viewports: {
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
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
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
      defaultValue: 'de-DE',
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
