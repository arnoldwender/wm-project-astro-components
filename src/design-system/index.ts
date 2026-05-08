/**
 * @wendermedia/astro-components
 * @copyright 2007-2026 Arnold Wender · Wender Media. All Rights Reserved. License: LicenseRef-Wender-Media-Source-1.0
 * @see https://github.com/arnoldwender/wm-project-astro-components
 */

/**
 * Design System Exports
 *
 * Complete tokenized design system for building consistent UIs
 *
 * @package @wendermedia/astro-components
 */

// Main Provider Component
export { default as DesignSystemProvider } from './DesignSystemProvider.astro';

// Theme Configuration
export {
  type ThemeConfig,
  type ThemeColors,
  type ThemeTypography,
  type ThemeSpacing,
  type ThemeBorderRadius,
  type ThemeShadow,
  type ThemeAnimation,
  type ThemeBreakpoints,
  type ThemeContainer,
  type ColorScale,
  type ThemePreset,
  defaultTheme,
  createTheme,
  generateCSSVariables,
  themePresets,
} from './theme/theme-config';

// Type exports for component props
export type { Props as DesignSystemProviderProps } from './DesignSystemProvider.astro';
