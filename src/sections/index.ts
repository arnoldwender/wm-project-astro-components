// Section Components
export { default as Hero } from './Hero.astro';
export { default as PricingTable } from './PricingTable.astro';
export { default as Testimonials } from './Testimonials.astro';
export { default as FAQ } from './FAQ.astro';
export { default as CTA } from './CTA.astro';
export { default as Features } from './Features.astro';
export { default as Stats } from './Stats.astro';

// Types - Hero
export type { Props as HeroProps, CTA as HeroCTA } from './Hero.astro';

// Types - Pricing
export type {
  Props as PricingTableProps,
  PricingTier,
  PricingFeature
} from './PricingTable.astro';

// Types - Testimonials
export type {
  Props as TestimonialsProps,
  Testimonial
} from './Testimonials.astro';

// Types - FAQ
export type {
  Props as FAQProps,
  FAQItem
} from './FAQ.astro';

// Types - CTA
export type { Props as CTAProps } from './CTA.astro';

// Types - Features
export type {
  Props as FeaturesProps,
  Feature
} from './Features.astro';

// Types - Stats
export type {
  Props as StatsProps,
  Stat
} from './Stats.astro';
