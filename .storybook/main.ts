/**
 * Storybook Main Configuration - WenderMedia Astro Components
 */

import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../docs/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    // Add custom Vite configuration
    return {
      ...config,
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@use "../src/design-system/tokens/index" as *;`,
          },
        },
      },
    };
  },
};

export default config;
