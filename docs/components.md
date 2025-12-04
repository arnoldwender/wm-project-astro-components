# Component Reference

Complete reference for all @wendermedia/astro-components.

## Layout Components

Import: `@wendermedia/astro-components/layout`

### Header

Sticky navigation header with mobile menu support.

```astro
<Header
  navItems={[
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services', children: [
      { label: 'Web Design', href: '/services/web-design' },
      { label: 'Development', href: '/services/development' },
    ]},
    { label: 'Contact', href: '/contact' },
  ]}
  logo={{ src: '/logo.svg', alt: 'Company Logo' }}
  siteName="My Company"
  contactEmail="hello@example.com"
  contactPhone="+49 123 456789"
  transparent={false}
  sticky={true}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `navItems` | `NavItem[]` | `[]` | Navigation menu items |
| `logo` | `{ src: string; alt: string }` | - | Logo image |
| `siteName` | `string` | - | Site name for mobile menu |
| `contactEmail` | `string` | - | Contact email |
| `contactPhone` | `string` | - | Contact phone |
| `transparent` | `boolean` | `false` | Transparent background on scroll |
| `sticky` | `boolean` | `true` | Stick to top on scroll |

### Footer

Multi-column footer with social links.

```astro
<Footer
  siteName="My Company"
  description="We build amazing websites."
  links={[
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Imprint', href: '/imprint' },
  ]}
  socialLinks={[
    { name: 'Instagram', href: 'https://instagram.com/...', icon: 'instagram' },
    { name: 'LinkedIn', href: 'https://linkedin.com/...', icon: 'linkedin' },
    { name: 'Twitter', href: 'https://twitter.com/...', icon: 'twitter' },
  ]}
  contactEmail="hello@example.com"
  contactPhone="+49 123 456789"
  contactAddress="123 Main St, City"
  showNewsletter={true}
/>
```

### Container

Responsive content container with max-width.

```astro
<Container size="lg" padding={true}>
  <p>Content here</p>
</Container>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'lg'` | Container max-width |
| `padding` | `boolean` | `true` | Include horizontal padding |

### Grid

CSS Grid wrapper with preset configurations.

```astro
<Grid columns={3} gap="md" responsive={true}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

### Section

Semantic section with consistent spacing.

```astro
<Section id="about" padding="lg" background="muted">
  <h2>About Us</h2>
  <p>Content here</p>
</Section>
```

---

## SEO Components

Import: `@wendermedia/astro-components/seo`

### SEOHead

Comprehensive meta tags for SEO.

```astro
<head>
  <SEOHead
    title="Page Title"
    description="Page description for search engines"
    canonical="https://example.com/page"
    image="/og-image.jpg"
    imageAlt="Open Graph image description"
    siteName="My Site"
    type="website"
    locale="de_DE"
    twitterCard="summary_large_image"
    twitterSite="@mysite"
    noindex={false}
    nofollow={false}
  />
</head>
```

### SchemaOrg

JSON-LD structured data.

```astro
<!-- Organization -->
<SchemaOrg
  type="Organization"
  name="My Company"
  url="https://example.com"
  logo="https://example.com/logo.png"
  sameAs={[
    'https://facebook.com/mycompany',
    'https://instagram.com/mycompany',
  ]}
/>

<!-- Local Business -->
<SchemaOrg
  type="LocalBusiness"
  name="My Restaurant"
  address={{
    streetAddress: '123 Main St',
    addressLocality: 'City',
    postalCode: '12345',
    addressCountry: 'DE',
  }}
  telephone="+49 123 456789"
  openingHours={['Mo-Fr 09:00-18:00', 'Sa 10:00-14:00']}
/>

<!-- Article -->
<SchemaOrg
  type="Article"
  headline="Article Title"
  datePublished="2025-01-15"
  dateModified="2025-01-16"
  author={{ name: 'John Doe', url: 'https://example.com/author' }}
  image="https://example.com/article-image.jpg"
/>
```

### RichSnippets

Pre-built schema for common types.

```astro
<!-- FAQ -->
<RichSnippets
  type="faq"
  data={{
    questions: [
      { question: 'What is this?', answer: 'This is a component library.' },
      { question: 'How do I use it?', answer: 'Install and import components.' },
    ],
  }}
/>

<!-- Product -->
<RichSnippets
  type="product"
  data={{
    name: 'Product Name',
    description: 'Product description',
    image: '/product.jpg',
    price: 99.99,
    currency: 'EUR',
    availability: 'InStock',
    brand: 'Brand Name',
    rating: { value: 4.5, count: 123 },
  }}
/>

<!-- HowTo -->
<RichSnippets
  type="howto"
  data={{
    name: 'How to Do Something',
    description: 'Step by step guide',
    steps: [
      { name: 'Step 1', text: 'Do this first' },
      { name: 'Step 2', text: 'Then do this' },
    ],
  }}
/>
```

---

## Navigation Components

Import: `@wendermedia/astro-components/navigation`

### Breadcrumbs

Semantic breadcrumb navigation with Schema.org.

```astro
<Breadcrumbs
  items={[
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'Category', url: '/products/category' },
    { name: 'Current Page' },
  ]}
  showSchema={true}
  separator="/"
  homeIcon={true}
/>
```

### Pagination

SEO-friendly pagination.

```astro
<Pagination
  currentPage={3}
  totalPages={10}
  baseUrl="/blog"
  showFirstLast={true}
  showPrevNext={true}
  maxVisible={5}
/>
```

### TableOfContents

Auto-generated table of contents.

```astro
<TableOfContents
  headings={[
    { depth: 2, slug: 'intro', text: 'Introduction' },
    { depth: 2, slug: 'setup', text: 'Setup' },
    { depth: 3, slug: 'install', text: 'Installation' },
  ]}
  maxDepth={3}
  title="Contents"
/>
```

### ScrollToTop

Animated scroll-to-top button.

```astro
<ScrollToTop
  threshold={300}
  smooth={true}
  position="right"
  label="Back to top"
/>
```

---

## Accessibility Components

Import: `@wendermedia/astro-components/accessibility`

### CookieConsent

GDPR-compliant cookie consent banner.

```astro
<CookieConsent
  privacyUrl="/datenschutz"
  position="bottom"
  showSettings={true}
  analyticsEnabled={false}
  marketingEnabled={false}
  text={{
    title: 'Cookie-Einstellungen',
    description: 'Wir verwenden Cookies...',
    acceptAll: 'Alle akzeptieren',
    acceptNecessary: 'Nur notwendige',
    settings: 'Einstellungen',
  }}
/>
```

### SkipToContent

Skip navigation link for keyboard users.

```astro
<SkipToContent
  targetId="main-content"
  label="Zum Hauptinhalt springen"
/>
```

### FontResizer

BFSG-compliant text scaling.

```astro
<FontResizer
  label="Textgröße:"
  minSize={75}
  maxSize={150}
  step={25}
  showPercentage={true}
/>
```

### ThemeToggle

Dark/light mode toggle.

```astro
<ThemeToggle
  defaultTheme="system"
  storageKey="theme"
  labels={{
    light: 'Hell',
    dark: 'Dunkel',
    system: 'System',
  }}
/>
```

### BackToTop

Focus-managed scroll to top.

```astro
<BackToTop
  threshold={300}
  label="Nach oben"
  smooth={true}
/>
```

---

## Content Components

Import: `@wendermedia/astro-components/content`

### Accordion

WCAG-compliant accordion.

```astro
<Accordion
  items={[
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: 'Content for section 2' },
  ]}
  allowMultiple={false}
  defaultOpen={0}
/>
```

### Tabs

Accessible tab interface.

```astro
<Tabs
  tabs={[
    { id: 'tab1', label: 'Tab 1', content: 'Content 1' },
    { id: 'tab2', label: 'Tab 2', content: 'Content 2' },
  ]}
  defaultTab="tab1"
  orientation="horizontal"
/>
```

### Modal

Focus-trapped modal dialog.

```astro
<Modal
  id="my-modal"
  title="Modal Title"
  closeOnOverlay={true}
  closeOnEscape={true}
>
  <p>Modal content here</p>
</Modal>

<!-- Trigger -->
<button data-modal-open="my-modal">Open Modal</button>
```

---

## E-commerce Components

Import: `@wendermedia/astro-components/ecommerce`

### Cart

Shopping cart with localStorage persistence.

```astro
<Cart
  currency="EUR"
  locale="de-DE"
  checkoutUrl="/checkout"
  emptyMessage="Ihr Warenkorb ist leer"
  showQuantityControls={true}
/>
```

### ProductCard

Product display card.

```astro
<ProductCard
  id="prod-001"
  name="Premium Headphones"
  price={149.99}
  originalPrice={199.99}
  image="/headphones.jpg"
  badge="Sale"
  rating={4.5}
  reviewCount={128}
  showWishlist={true}
  showQuickView={true}
/>
```

### Wishlist

Product wishlist.

```astro
<Wishlist
  currency="EUR"
  locale="de-DE"
  emptyMessage="Keine Produkte auf der Wunschliste"
/>
```

### AddToCartButton

Add to cart with loading states.

```astro
<AddToCartButton
  productId="prod-001"
  productName="Product Name"
  price={99.99}
  image="/product.jpg"
  variant="default"
  quantity={1}
/>
```

---

## Media Components

Import: `@wendermedia/astro-components/media`

### VideoPlayer

Privacy-first video player.

```astro
<!-- YouTube with consent -->
<VideoPlayer
  provider="youtube"
  videoId="dQw4w9WgXcQ"
  title="Video Title"
  requireConsent={true}
  consentMessage="By playing, you agree to data processing."
  consentButtonText="Load Video"
  aspectRatio="16/9"
/>

<!-- Vimeo -->
<VideoPlayer
  provider="vimeo"
  videoId="76979871"
  title="Vimeo Video"
  requireConsent={true}
/>

<!-- Native video -->
<VideoPlayer
  src="/videos/intro.mp4"
  poster="/images/poster.jpg"
  controls={true}
  autoplay={false}
  muted={false}
  loop={false}
/>
```

### AudioPlayer

Custom HTML5 audio player.

```astro
<AudioPlayer
  src="/audio/podcast.mp3"
  title="Episode 1"
  artist="Podcast Name"
  cover="/audio/cover.jpg"
  showWaveform={true}
/>
```

### ImageGallery

Lightbox image gallery.

```astro
<ImageGallery
  images={[
    { src: '/img1.jpg', alt: 'Image 1', caption: 'Caption 1' },
    { src: '/img2.jpg', alt: 'Image 2', caption: 'Caption 2' },
  ]}
  columns={3}
  gap="md"
  lightbox={true}
/>
```

---

## Helper Functions

### E-commerce Helpers

```ts
import {
  addToCart,
  getCart,
  getWishlist,
  isInWishlist,
  toggleWishlistItem,
  formatPrice,
} from '@wendermedia/astro-components/ecommerce';

// Add item to cart
addToCart({
  id: 'prod-001',
  name: 'Product',
  price: 99.99,
  image: '/product.jpg',
});

// Get cart contents
const cart = getCart();

// Format price
const formatted = formatPrice(99.99, 'EUR', 'de-DE'); // "99,99 €"
```

### Design Token Helpers

```ts
import { getCSSVar, getTokenValue, tokens } from '@wendermedia/astro-components/tokens';

// Get CSS variable reference
const cssVar = getCSSVar('color.brand.primary'); // "var(--color-brand-primary)"

// Get token value
const value = getTokenValue('color.brand.primary', tokens); // "#0ea5e9"
```
