/**
 * Storybook Manager Configuration - WenderMedia Astro Components
 * Custom branding, theme, and sidebar configuration.
 *
 * @copyright 2007-2026 Wender Media - Arnold Wender. Wender Media Source License v1.0.
 */

// Storybook 10: manager-api and theming were unified into the `storybook`
// package with subpath exports. The legacy @storybook/manager-api and
// @storybook/theming/create entry points are no longer published.
import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

const wmTheme = create({
  base: 'light',

  // Brand
  brandTitle: '@wendermedia/astro-components',
  brandUrl: 'https://www.wendermedia.com',
  brandTarget: '_blank',

  // Colors — WenderMedia brand
  colorPrimary: '#2563eb',
  colorSecondary: '#2563eb',

  // UI
  appBg: '#f8fafc',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#e2e8f0',
  appBorderRadius: 8,

  // Text
  textColor: '#0f172a',
  textInverseColor: '#ffffff',
  textMutedColor: '#64748b',

  // Toolbar
  barTextColor: '#475569',
  barSelectedColor: '#2563eb',
  barHoverColor: '#1d4ed8',
  barBg: '#ffffff',

  // Forms
  inputBg: '#ffffff',
  inputBorder: '#cbd5e1',
  inputTextColor: '#0f172a',
  inputBorderRadius: 6,

  // Typography
  fontBase: '"Inter", "Segoe UI", system-ui, -apple-system, sans-serif',
  fontCode: '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace',
});

addons.setConfig({
  theme: wmTheme,
  sidebar: {
    showRoots: true,
    collapsedRoots: [],
    renderLabel: ({ name, type }) => {
      if (type === 'root') return name;
      return name;
    },
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
  panelPosition: 'bottom',
  enableShortcuts: true,
});
