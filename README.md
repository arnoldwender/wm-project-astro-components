# @wendermedia/astro-components

Reusable Astro component library for WenderMedia projects. Contains production-ready, accessible components extracted from various 2025 projects.

## Installation

```bash
# From GitHub (private)
npm install git+ssh://git@github.com:arnoldwender/wm-astro-components-2025.git

# Or add to package.json
"@wendermedia/astro-components": "github:arnoldwender/wm-astro-components-2025"
```

## Components

### Layout

#### Header
Sticky navigation with blur backdrop and mobile menu.

```astro
---
import { Header } from '@wendermedia/astro-components/layout';
---

<Header
  navItems={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]}
  logo={{ src: '/logo.png', alt: 'Logo' }}
  siteName="My Site"
  contactEmail="hello@example.com"
  transparent={true}
/>
```

#### Footer
Multi-column footer with social links and contact info.

```astro
---
import { Footer } from '@wendermedia/astro-components/layout';
---

<Footer
  siteName="My Site"
  description="Site description here"
  links={[
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ]}
  socialLinks={[
    { name: 'Instagram', href: 'https://instagram.com/...', icon: 'instagram' },
    { name: 'LinkedIn', href: 'https://linkedin.com/...', icon: 'linkedin' },
  ]}
  contactEmail="hello@example.com"
/>
```

### SEO

#### SEO
Comprehensive meta tags, OpenGraph, Twitter Cards.

```astro
---
import { SEO } from '@wendermedia/astro-components/seo';
---

<head>
  <SEO
    title="Page Title"
    description="Page description"
    canonical="https://example.com/page"
    image="/og-image.jpg"
    siteName="My Site"
  />
</head>
```

#### RichSnippets
Schema.org structured data generator.

```astro
---
import { RichSnippets } from '@wendermedia/astro-components/seo';
---

<RichSnippets
  type="faq"
  data={{
    questions: [
      { question: 'What is this?', answer: 'This is a component library.' },
    ]
  }}
/>
```

#### Breadcrumbs
Semantic navigation with Schema.org.

```astro
---
import { Breadcrumbs } from '@wendermedia/astro-components/seo';
---

<Breadcrumbs
  items={[
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'Current', url: '/products/current' },
  ]}
/>
```

### Accessibility

#### FontResizer
WCAG/BFSG compliant text scaling.

```astro
---
import { FontResizer } from '@wendermedia/astro-components/accessibility';
---

<FontResizer label="Text Size:" minSize={75} maxSize={150} />
```

#### BackToTop
Smooth scroll to top with focus management.

```astro
---
import { BackToTop } from '@wendermedia/astro-components/accessibility';
---

<BackToTop threshold={300} label="Back to top" />
```

#### ThemeToggle
Dark/light mode toggle with localStorage.

```astro
---
import { ThemeToggle } from '@wendermedia/astro-components/accessibility';
---

<ThemeToggle />
```

### Sections

#### Hero
Full-screen hero with optional GSAP animations.

```astro
---
import { Hero } from '@wendermedia/astro-components/sections';
---

<Hero
  title="Welcome"
  subtitle="Subtitle here"
  description="Description text"
  image="/hero.jpg"
  imageAlt="Hero image"
  ctaPrimary={{ label: 'Get Started', href: '/start' }}
  ctaSecondary={{ label: 'Learn More', href: '/about' }}
  parallax={true}
  scrollIndicator={true}
/>
```

### Gallery

#### BeforeAfter
Interactive image comparison slider.

```astro
---
import { BeforeAfter } from '@wendermedia/astro-components/gallery';
---

<BeforeAfter
  beforeUrl="/before.jpg"
  afterUrl="/after.jpg"
  beforeAlt="Before"
  afterAlt="After"
  beforeLabel="Before"
  afterLabel="After"
  aspectRatio="16/9"
/>
```

### Forms

#### ContactForm
GDPR-compliant contact form with validation.

```astro
---
import { ContactForm } from '@wendermedia/astro-components/forms';
---

<ContactForm
  action="/api/contact"
  privacyUrl="/privacy"
  submitLabel="Send Message"
/>
```

### Products

#### ProductCard
Full-featured product/affiliate card.

```astro
---
import { ProductCard } from '@wendermedia/astro-components/products';
---

<ProductCard
  title="Product Name"
  description="Product description"
  originalPrice={99.99}
  salePrice={79.99}
  rating={4.5}
  reviewCount={123}
  image="/product.jpg"
  link="https://affiliate-link.com"
  features={['Feature 1', 'Feature 2', 'Feature 3']}
  featured={true}
/>
```

### Images

#### OptimizedImage
Responsive image with srcset.

```astro
---
import { OptimizedImage } from '@wendermedia/astro-components/images';
---

<OptimizedImage
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority={false}
/>
```

## Dependencies

- **Required**: Astro 4.x or 5.x
- **Optional**: GSAP (for Hero animations)

## License

PROPRIETARY - WenderMedia internal use only.
