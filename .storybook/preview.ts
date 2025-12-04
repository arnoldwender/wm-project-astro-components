/**
 * Storybook Preview Configuration - WenderMedia Astro Components
 *
 * Global decorators, parameters, and theme configuration.
 */

import type { Preview } from '@storybook/web-components';
import { setCustomElementsManifest } from '@storybook/web-components';

// Import global styles
import '../src/design-system/base/reset.css';
import '../src/design-system/base/typography.css';
import '../src/design-system/tokens/colors.css';
import '../src/design-system/tokens/spacing.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
        { name: 'neutral', value: '#f5f5f5' },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: '375px', height: '667px' },
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1440px', height: '900px' },
        },
      },
    },
    a11y: {
      // axe-core configuration for WCAG 2.1 AA + BFSG
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'valid-lang', enabled: true },
          { id: 'landmark-one-main', enabled: true },
          { id: 'page-has-heading-one', enabled: true },
          { id: 'region', enabled: true },
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
      toc: true,
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark', 'system'],
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
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme || 'light';
      document.documentElement.setAttribute('data-theme', theme);
      return story();
    },
  ],
};

export default preview;
