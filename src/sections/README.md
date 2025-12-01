# Premium Section Components

High-converting, SEO-ready section components built with 2025 best practices.

## Components

### Hero
Full-screen hero with GSAP animations, parallax effects, and dual CTAs.

```astro
---
import { Hero } from '@wendermedia/astro-components/sections';
---

<Hero
  title="Build faster with premium components"
  subtitle="ASTRO COMPONENTS"
  description="Production-ready UI components for modern web development"
  image="/hero-bg.jpg"
  imageAlt="Hero background"
  ctaPrimary={{ label: 'Get Started', href: '/start' }}
  ctaSecondary={{ label: 'Learn More', href: '/docs' }}
  parallax={true}
  scrollIndicator={true}
/>
```

### PricingTable
High-converting pricing table with billing toggle, tooltips, and Schema.org markup.

```astro
---
import { PricingTable } from '@wendermedia/astro-components/sections';

const tiers = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small projects',
    priceMonthly: 29,
    priceYearly: 290,
    features: [
      { name: '5 Projects', included: true },
      { name: '10GB Storage', included: true },
      { name: 'Priority Support', included: false, tooltip: '24/7 support via chat and email' },
    ],
    ctaText: 'Start Free Trial',
    ctaHref: '/signup?plan=starter',
  },
  {
    id: 'pro',
    name: 'Professional',
    description: 'For growing businesses',
    priceMonthly: 79,
    priceYearly: 790,
    popular: true,
    badge: 'Most Popular',
    features: [
      { name: 'Unlimited Projects', included: true },
      { name: '100GB Storage', included: true },
      { name: 'Priority Support', included: true },
    ],
    ctaText: 'Get Started',
    ctaHref: '/signup?plan=pro',
  },
];
---

<PricingTable
  title="Simple, transparent pricing"
  subtitle="Choose the plan that fits your needs"
  tiers={tiers}
  defaultBilling="yearly"
  showSchema={true}
/>
```

**Conversion Features:**
- Billing toggle with savings highlight (47% higher conversion)
- Feature tooltips for clarity
- Popular plan visual emphasis
- Schema.org Product markup for SEO

### Testimonials
Social proof section with carousel, ratings, and review schema.

```astro
---
import { Testimonials } from '@wendermedia/astro-components/sections';

const testimonials = [
  {
    id: '1',
    quote: 'This product transformed our workflow completely.',
    author: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechCorp',
    avatar: '/avatars/sarah.jpg',
    rating: 5,
  },
];
---

<Testimonials
  title="What our customers say"
  testimonials={testimonials}
  layout="carousel"
  autoplay={true}
  showRating={true}
  trustBadge={{
    platform: 'G2',
    rating: 4.8,
    reviews: 1250,
    logo: '/g2-badge.svg',
  }}
/>
```

**Layout Options:**
- `carousel` - Slider with navigation
- `grid` - Responsive card grid
- `masonry` - Pinterest-style layout

### FAQ
SEO-optimized FAQ accordion with Schema.org FAQPage markup.

```astro
---
import { FAQ } from '@wendermedia/astro-components/sections';

const faqs = [
  {
    id: '1',
    question: 'How does the free trial work?',
    answer: 'Start your 14-day free trial with full access to all features. No credit card required.',
    category: 'Billing',
  },
];
---

<FAQ
  title="Frequently Asked Questions"
  faqs={faqs}
  showSearch={true}
  showCategories={true}
  showSchema={true}
  allowMultiple={true}
/>
```

**SEO Benefits:**
- FAQPage schema for rich snippets
- "People Also Ask" eligibility
- Voice search optimization

### CTA
Psychology-based call-to-action with urgency and social proof.

```astro
---
import { CTA } from '@wendermedia/astro-components/sections';
---

<CTA
  title="Ready to get started?"
  description="Join thousands of satisfied customers today."
  ctaText="Start Free Trial"
  ctaHref="/signup"
  variant="centered"
  usersCount={50000}
  rating={4.9}
  reviewsCount={2500}
  urgencyText="Limited time: 50% off"
  countdown={{ endDate: '2025-12-31', label: 'Offer ends in' }}
/>
```

**Variants:**
- `centered` - Classic centered layout
- `split` - Two-column with image
- `banner` - Compact sticky banner
- `floating` - Scroll-triggered floating CTA
- `gradient` - Card with pattern overlay

**Conversion Stats:**
- Personalized CTAs: 202% better conversion
- Urgency elements: up to 332% lift
- Button-based CTAs: 30% higher CTR

### Features
Feature showcase with multiple layout options and scroll animations.

```astro
---
import { Features } from '@wendermedia/astro-components/sections';

const features = [
  {
    id: '1',
    title: 'Lightning Fast',
    description: 'Built for speed with zero runtime JavaScript by default.',
    icon: '<svg>...</svg>',
    link: { text: 'Learn more', href: '/features/speed' },
  },
];
---

<Features
  title="Why choose us"
  subtitle="FEATURES"
  features={features}
  layout="grid"
  columns={3}
  animate={true}
/>
```

**Layout Options:**
- `grid` - Responsive icon cards
- `alternating` - Left/right alternating sections
- `bento` - Modern bento grid
- `cards` - Image-first cards
- `list` - Compact horizontal list

### Stats
Animated statistics with count-up on scroll.

```astro
---
import { Stats } from '@wendermedia/astro-components/sections';

const stats = [
  { id: '1', value: 50000, label: 'Active Users', suffix: '+' },
  { id: '2', value: 99.9, label: 'Uptime', suffix: '%' },
  { id: '3', value: 4.9, label: 'Rating', prefix: '★' },
  { id: '4', value: 24, label: 'Support', suffix: '/7' },
];
---

<Stats
  title="Trusted by thousands"
  stats={stats}
  layout="cards"
  animate={true}
/>
```

**Layout Options:**
- `inline` - Horizontal inline display
- `cards` - Elevated card grid
- `banner` - Divided sections
- `minimal` - Large typography focus

## Accessibility

All components include:
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- `prefers-reduced-motion` respect
- Focus management
- ARIA attributes

## View Transitions

All components support Astro View Transitions via `astro:page-load` event.

## Schema.org Markup

Components automatically generate:
- `FAQPage` for FAQ sections
- `Product/Offer` for pricing tables
- `Review/Rating` for testimonials

Validate at: https://validator.schema.org/

## Resources

Based on 2025 conversion research:
- [High-Converting Web Design Guide](https://www.identitidesign.com/blog/high-converting-web-design-2025/)
- [SaaS Pricing Page Best Practices](https://www.webstacks.com/blog/saas-pricing-page-design)
- [Social Proof Examples](https://socialproofexamples.com/)
- [CTA Psychology](https://inkbotdesign.com/call-to-action-design/)
