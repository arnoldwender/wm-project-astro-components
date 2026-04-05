/**
 * WenderMedia Astro Components
 * Complete component library for Astro projects with SEO optimization
 *
 * @package @wendermedia/astro-components
 * @copyright 2007-2026 Wender Media - Arnold Wender. MIT License.
 * @see https://github.com/arnoldwender/wm-project-astro-components
 * @version 2.0.0
 */

// ============================================================================
// Layout Components
// ============================================================================
export { Header, Footer } from './src/layout';
export type { HeaderProps, NavItem, FooterProps, FooterLink, SocialLink } from './src/layout';

// ============================================================================
// SEO Components - Complete SEO toolkit
// ============================================================================
export {
  SEO,
  RichSnippets,
  Breadcrumbs,
  JsonLD,
  HreflangTags,
  CanonicalURL,
  OpenGraph,
  TwitterCard,
} from './src/seo';
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
  JsonLDProps,
  SchemaType,
  HreflangTagsProps,
  LocaleLink,
  CanonicalURLProps,
  OpenGraphProps,
  ArticleMeta,
  ProductMeta,
  ProfileMeta,
  TwitterCardProps,
} from './src/seo';

// ============================================================================
// Navigation Components
// ============================================================================
export { Sidebar, MobileNav, Pagination } from './src/navigation';
export type {
  SidebarProps,
  SidebarItem,
  MobileNavProps,
  MobileNavItem,
  PaginationProps,
} from './src/navigation';

// ============================================================================
// Content Components - Blog & Articles
// ============================================================================
export { TableOfContents, ReadingProgress, ShareBar } from './src/content';
export type {
  TableOfContentsProps,
  Heading,
  ReadingProgressProps,
  ShareBarProps,
  Platform,
} from './src/content';

// ============================================================================
// E-commerce Components
// ============================================================================
export {
  Cart,
  Wishlist,
  ProductQuickView,
  AddToCartButton,
  ProductCard as EcommerceProductCard,
} from './src/ecommerce';
export type {
  CartProps,
  WishlistProps,
  WishlistItem,
  ProductQuickViewProps,
  ProductVariant,
  AddToCartButtonProps,
  ProductCardProps as EcommerceProductCardProps,
  CartItem,
} from './src/ecommerce';
export {
  addToCart,
  getCart,
  getWishlist,
  isInWishlist,
  toggleWishlistItem,
  formatPrice,
} from './src/ecommerce';

// ============================================================================
// Media Components - Privacy-first
// ============================================================================
export { VideoPlayer, AudioPlayer, ImageGallery } from './src/media';
export type {
  VideoPlayerProps,
  VideoProvider,
  AudioPlayerProps,
  Track,
  ImageGalleryProps,
  GalleryImage,
} from './src/media';

// ============================================================================
// Accessibility Components
// ============================================================================
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

// ============================================================================
// Design System
// ============================================================================
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

// ============================================================================
// Section Components
// ============================================================================
export { Hero } from './src/sections';
export type { HeroProps, CTA } from './src/sections';

// ============================================================================
// Gallery Components
// ============================================================================
export { BeforeAfter } from './src/gallery';
export type { BeforeAfterProps } from './src/gallery';

// ============================================================================
// Form Components
// ============================================================================
export { ContactForm } from './src/forms';
export type { ContactFormProps } from './src/forms';

// ============================================================================
// Product Components (Legacy)
// ============================================================================
export { ProductCard } from './src/products';
export type { ProductCardProps } from './src/products';

// ============================================================================
// Image Components
// ============================================================================
export { OptimizedImage } from './src/images';
export type { OptimizedImageProps } from './src/images';

// ============================================================================
// Utilities
// ============================================================================

// i18n Utilities
export {
  t,
  createTranslator,
  addTranslations,
  getTranslation,
  hasTranslation,
  getAllTranslations,
  defaultTranslations,
} from './utilities/i18n/translations';
export {
  detectLocale,
  getPreferredLocale,
  formatDate,
  formatNumber,
  formatCurrency,
  formatRelativeTime,
  getLocalizedUrl,
  generateHreflangLinks,
  isRTL,
  getTextDirection,
} from './utilities/i18n/locale';
export type {
  Translations,
  TranslationKey,
  TranslatorFunction,
} from './utilities/i18n/translations';
export type {
  SupportedLocale,
  HreflangLink as LocaleHreflangLink,
} from './utilities/i18n/locale';

// Analytics Utilities (GDPR-compliant)
export {
  CookieConsent,
  GoogleAnalytics,
  Plausible,
  Matomo,
} from './utilities/analytics';
export type {
  CookieConsentProps,
  ConsentSettings,
  GoogleAnalyticsProps,
  PlausibleProps,
  MatomoProps,
} from './utilities/analytics';
export {
  hasConsent,
  getConsentSettings,
  setConsentSettings,
  onConsentChange,
  trackEvent,
  trackPageView,
} from './utilities/analytics';

// ============================================================================
// Templates
// ============================================================================

// Layout Templates
export {
  BaseLayout,
  MinimalLayout,
  BlogLayout,
  FullWidthLayout,
  DocsLayout,
  EcommerceLayout,
} from './templates/layouts';
export type {
  BaseLayoutProps,
  MinimalLayoutProps,
  BlogLayoutProps,
  FullWidthLayoutProps,
  DocsLayoutProps,
  EcommerceLayoutProps,
} from './templates/layouts';

// Page Templates
export {
  NotFoundPage,
  ErrorPage,
  MaintenancePage,
  ComingSoonPage,
  PrivacyPage,
  ImprintPage,
} from './templates/pages';
export type {
  NotFoundPageProps,
  ErrorPageProps,
  MaintenancePageProps,
  ComingSoonPageProps,
  PrivacyPageProps,
  ImprintPageProps,
} from './templates/pages';
