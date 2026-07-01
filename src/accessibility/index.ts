/**
 * @wendermedia/astro-components
 * @copyright 2007-2026 Arnold Wender · Wender Media. All Rights Reserved. License: LicenseRef-Wender-Media-Source-1.0
 * @see https://github.com/arnoldwender/wm-project-astro-components
 */

// Core Accessibility Components
export { default as FontResizer } from './FontResizer.astro';
export { default as BackToTop } from './BackToTop.astro';
export { default as ThemeToggle } from './ThemeToggle.astro';

// Premium Accessibility Components
export { default as AccessibilityToolbar } from './AccessibilityToolbar.astro';
export { default as SkipLinks } from './SkipLinks.astro';
export { default as FocusTrap } from './FocusTrap.astro';
export { default as LanguageSwitcher } from './LanguageSwitcher.astro';
export { default as TextToSpeech } from './TextToSpeech.astro';
export { default as ScreenReaderOnly } from './ScreenReaderOnly.astro';
export { default as LiveRegion } from './LiveRegion.astro';
export { default as ReducedMotion } from './ReducedMotion.astro';

// Types - Core
export type { Props as FontResizerProps } from './FontResizer.astro';
export type { Props as BackToTopProps } from './BackToTop.astro';
export type { Props as ThemeToggleProps } from './ThemeToggle.astro';

// Types - Premium
export type { Props as AccessibilityToolbarProps } from './AccessibilityToolbar.astro';
export type { Props as SkipLinksProps, SkipLink } from './SkipLinks.astro';
export type { Props as FocusTrapProps } from './FocusTrap.astro';
export type { Props as LanguageSwitcherProps, Language } from './LanguageSwitcher.astro';
export type { Props as TextToSpeechProps } from './TextToSpeech.astro';
export type { Props as ScreenReaderOnlyProps } from './ScreenReaderOnly.astro';
export type { Props as LiveRegionProps } from './LiveRegion.astro';
export type { Props as ReducedMotionProps } from './ReducedMotion.astro';

// ---------------------------------------------------------------------------
// A11y Toolkit — WAI-ARIA APG widgets + reader-comfort toggles (additive:
// a11y-first alternatives to ui/Accordion|Tabs|Alert). Backported 2026-07-01.
// ---------------------------------------------------------------------------
export { default as AccessibleAccordion } from './AccessibleAccordion.astro';
export { default as AccessibleTabs } from './AccessibleTabs.astro';
export { default as AccessibleAlert } from './AccessibleAlert.astro';
export { default as AriaLiveRegion } from './AriaLiveRegion.astro';
export { default as FontSizeControls } from './FontSizeControls.astro';
export { default as FontFamilyToggle } from './FontFamilyToggle.astro';

export type { Props as AccessibleAccordionProps } from './AccessibleAccordion.astro';
export type { Props as AccessibleTabsProps } from './AccessibleTabs.astro';
export type { Props as AccessibleAlertProps } from './AccessibleAlert.astro';
export type { Props as AriaLiveRegionProps } from './AriaLiveRegion.astro';
export type { Props as FontSizeControlsProps } from './FontSizeControls.astro';
export type { Props as FontFamilyToggleProps } from './FontFamilyToggle.astro';
