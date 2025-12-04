/**
 * Storybook Manager Configuration - WenderMedia Astro Components
 *
 * UI customization and branding.
 */

import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const wmTheme = create({
  base: 'light',

  // Brand
  brandTitle: 'WenderMedia Astro Components',
  brandUrl: 'https://github.com/arnoldwender/wm-astro-components-2025',
  brandTarget: '_blank',

  // Colors
  colorPrimary: '#ef4444',
  colorSecondary: '#0ea5e9',

  // UI
  appBg: '#f8fafc',
  appContentBg: '#ffffff',
  appBorderColor: '#e2e8f0',
  appBorderRadius: 8,

  // Text colors
  textColor: '#1e293b',
  textInverseColor: '#ffffff',
  textMutedColor: '#64748b',

  // Toolbar
  barTextColor: '#64748b',
  barSelectedColor: '#0ea5e9',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#e2e8f0',
  inputTextColor: '#1e293b',
  inputBorderRadius: 6,
});

addons.setConfig({
  theme: wmTheme,
  sidebar: {
    showRoots: true,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
