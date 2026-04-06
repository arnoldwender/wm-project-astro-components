/**
 * Storybook Main Configuration - WenderMedia Astro Components
 *
 * @copyright 2007-2026 Wender Media - Arnold Wender. MIT License.
 */

import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: [
    '../src/Welcome.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
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
    defaultName: 'Documentation',
  },
  staticDirs: ['../public'],
  core: {
    disableTelemetry: true,
  },
  viteFinal: async (config) => {
    return {
      ...config,
      build: {
        ...config.build,
        // Improve build performance
        sourcemap: false,
        chunkSizeWarningLimit: 1500,
      },
    };
  },
};

export default config;
