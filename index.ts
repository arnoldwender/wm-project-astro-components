// WenderMedia Astro Components
// Reusable component library for Astro projects

// Layout Components
export { Header, Footer } from './src/layout';
export type { HeaderProps, NavItem, FooterProps, FooterLink, SocialLink } from './src/layout';

// SEO Components
export { SEO, RichSnippets, Breadcrumbs } from './src/seo';
export type {
  SEOProps,
  HreflangLink,
  RichSnippetsProps,
  ServiceData,
  ProductData,
  ArticleData,
  FAQData,
  ReviewData,
  OrganizationData,
  LocalBusinessData,
  BreadcrumbsProps,
  BreadcrumbItem,
} from './src/seo';

// Accessibility Components
export { FontResizer, BackToTop, ThemeToggle } from './src/accessibility';
export {
  AccessibilityToolbar,
  SkipLinks,
  FocusTrap,
  LanguageSwitcher,
  TextToSpeech,
  ScreenReaderOnly,
  LiveRegion,
  ReducedMotion,
} from './src/accessibility';
export type {
  FontResizerProps,
  BackToTopProps,
  ThemeToggleProps,
  AccessibilityToolbarProps,
  SkipLinksProps,
  SkipLink,
  FocusTrapProps,
  LanguageSwitcherProps,
  Language,
  TextToSpeechProps,
  ScreenReaderOnlyProps,
  LiveRegionProps,
  ReducedMotionProps,
} from './src/accessibility';

// Design System
export { DesignSystemProvider } from './src/design-system';
export {
  createTheme,
  generateCSSVariables,
  defaultTheme,
  themePresets,
} from './src/design-system';
export type {
  DesignSystemProviderProps,
  ThemeConfig,
  ThemeColors,
  ThemeTypography,
  ThemeSpacing,
  ThemeBorderRadius,
  ThemeShadow,
  ThemeAnimation,
  ThemeBreakpoints,
  ThemeContainer,
  ColorScale,
  ThemePreset,
} from './src/design-system';

// Section Components
export { Hero } from './src/sections';
export type { HeroProps, CTA } from './src/sections';

// Gallery Components
export { BeforeAfter } from './src/gallery';
export type { BeforeAfterProps } from './src/gallery';

// Form Components
export { ContactForm } from './src/forms';
export type { ContactFormProps } from './src/forms';

// Product Components
export { ProductCard } from './src/products';
export type { ProductCardProps } from './src/products';

// Image Components
export { OptimizedImage } from './src/images';
export type { OptimizedImageProps } from './src/images';
