# Changelog

All notable changes to @wendermedia/astro-components will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-04-06

### Added

#### Core Components
- **Layout Components**: BaseLayout, Header, Footer, Container, Grid, Section
- **SEO Components**: SEOHead, SchemaOrg, OpenGraph, TwitterCard, Canonical
- **Accessibility Components**: CookieConsent, SkipToContent, FocusTrap, A11yAnnouncer

#### Navigation Components
- **Breadcrumbs**: Accessible breadcrumb navigation with Schema.org support
- **Pagination**: Server-side pagination with SEO-friendly links
- **TableOfContents**: Auto-generated table of contents for long content
- **ScrollToTop**: Animated scroll-to-top button

#### Content Components
- **Accordion**: WCAG-compliant accordion with keyboard navigation
- **Tabs**: Accessible tab interface with ARIA support
- **Modal**: Focus-trapped modal dialogs with backdrop

#### E-commerce Components
- **Cart**: Shopping cart with localStorage persistence
- **Wishlist**: Product wishlist with toggle functionality
- **ProductCard**: Product display with hover effects and badges
- **ProductQuickView**: Modal-based product quick view
- **AddToCartButton**: Add to cart with loading states

#### Media Components
- **VideoPlayer**: Privacy-first video player (YouTube, Vimeo, native)
- **AudioPlayer**: HTML5 audio player with custom controls
- **ImageGallery**: Lightbox gallery with keyboard navigation

### Developer Experience
- **CLI Tool**: `npx @wendermedia/astro-components create my-project`
- **Design Tokens**: Style Dictionary integration for colors, spacing, typography
- **Testing Utilities**: Vitest setup with axe-core for accessibility testing
- **Storybook**: Component documentation and visual testing

### Changed
- Upgraded to Astro 5.x compatibility
- All components now use CSS custom properties for theming
- Improved TypeScript definitions

### Security
- GDPR-compliant video embeds with consent management
- No third-party tracking by default
- BFSG accessibility compliance

## [1.0.0] - 2024-XX-XX

Initial release with core components.
