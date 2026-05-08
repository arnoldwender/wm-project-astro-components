/**
 * Storybook Main Configuration - WenderMedia Astro Components
 *
 * @copyright 2007-2026 Wender Media - Arnold Wender. Wender Media Source License v1.0.
 */

import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: [
    '../src/Welcome.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  // Storybook 10: addon-essentials, addon-interactions, addon-links, blocks
  // were absorbed into core in v9 and the empty packages will not be published
  // going forward. Only standalone addons are listed here.
  // addon-docs is required for MDX/Meta parsing in *.mdx story files.
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  docs: {
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
        sourcemap: false,
        chunkSizeWarningLimit: 1500,
      },
    };
  },
};

export default config;
