/**
 * Sections Index
 *
 * Export all section components for easy importing.
 *
 * @example
 * import { HeroSection, FeaturesSection, CTASection } from '@/sections';
 */

// Base Components
export { default as SectionWrapper } from './SectionWrapper.astro';
export { default as SectionHeader } from './SectionHeader.astro';

// Hero Sections
export { default as HeroSection } from './HeroSection.astro';
export { default as Hero } from './Hero.astro';

// Features Sections
export { default as FeaturesSection } from './FeaturesSection.astro';
export { default as FeatureCard } from './FeatureCard.astro';
export { default as FeatureAlternating } from './FeatureAlternating.astro';
export { default as Features } from './Features.astro';

// Testimonials Sections
export { default as TestimonialsSection } from './TestimonialsSection.astro';
export { default as TestimonialCard } from './TestimonialCard.astro';
export { default as Testimonials } from './Testimonials.astro';

// Pricing Sections
export { default as PricingSection } from './PricingSection.astro';
export { default as PricingCard } from './PricingCard.astro';
export { default as PricingTable } from './PricingTable.astro';

// CTA Sections
export { default as CTASection } from './CTASection.astro';
export { default as CTA } from './CTA.astro';

// Stats Sections
export { default as StatsSection } from './StatsSection.astro';
export { default as StatItem } from './StatItem.astro';
export { default as Stats } from './Stats.astro';

// Team Sections
export { default as TeamSection } from './TeamSection.astro';
export { default as TeamMember } from './TeamMember.astro';

// FAQ Sections
export { default as FAQSection } from './FAQSection.astro';
export { default as FAQItem } from './FAQItem.astro';
export { default as FAQ } from './FAQ.astro';

// Logo Cloud Section
export { default as LogoCloudSection } from './LogoCloudSection.astro';

// Content Sections
export { default as ContentSection } from './ContentSection.astro';

// Contact Sections
export { default as ContactSection } from './ContactSection.astro';

// Newsletter Sections
export { default as NewsletterSection } from './NewsletterSection.astro';

// Timeline Sections
export { default as TimelineSection } from './TimelineSection.astro';
export { default as TimelineItem } from './TimelineItem.astro';

// Comparison Sections
export { default as ComparisonSection } from './ComparisonSection.astro';

// Gallery/Portfolio Sections
export { default as GallerySection } from './GallerySection.astro';
export { default as GalleryItem } from './GalleryItem.astro';

// Process/Steps Sections
export { default as ProcessSection } from './ProcessSection.astro';
export { default as ProcessStep } from './ProcessStep.astro';

// Careers/Jobs Sections
export { default as CareersSection } from './CareersSection.astro';
export { default as JobCard } from './JobCard.astro';

// Awards Sections
export { default as AwardsSection } from './AwardsSection.astro';
export { default as AwardItem } from './AwardItem.astro';

// Blog/News Sections
export { default as BlogSection } from './BlogSection.astro';
export { default as BlogCard } from './BlogCard.astro';

// Integrations/Partners Sections
export { default as IntegrationsSection } from './IntegrationsSection.astro';
export { default as IntegrationCard } from './IntegrationCard.astro';

// Video Sections
export { default as VideoSection } from './VideoSection.astro';

// Resources/Downloads Sections
export { default as ResourcesSection } from './ResourcesSection.astro';
export { default as ResourceCard } from './ResourceCard.astro';

// Locations Sections
export { default as LocationsSection } from './LocationsSection.astro';
export { default as LocationCard } from './LocationCard.astro';

// Banner Sections
export { default as BannerSection } from './BannerSection.astro';

// Social Proof Sections
export { default as SocialProofSection } from './SocialProofSection.astro';

// Tabs Sections
export { default as TabsSection } from './TabsSection.astro';
export { default as TabPanel } from './TabPanel.astro';

// Types - Base
export type { Props as SectionWrapperProps } from './SectionWrapper.astro';
export type { Props as SectionHeaderProps } from './SectionHeader.astro';

// Types - Hero
export type { Props as HeroSectionProps } from './HeroSection.astro';
export type { Props as HeroProps, CTA as HeroCTA } from './Hero.astro';

// Types - Features
export type { Props as FeaturesSectionProps } from './FeaturesSection.astro';
export type { Props as FeatureCardProps } from './FeatureCard.astro';
export type { Props as FeatureAlternatingProps } from './FeatureAlternating.astro';
export type { Props as FeaturesProps, Feature } from './Features.astro';

// Types - Testimonials
export type { Props as TestimonialsSectionProps } from './TestimonialsSection.astro';
export type { Props as TestimonialCardProps } from './TestimonialCard.astro';
export type { Props as TestimonialsProps, Testimonial } from './Testimonials.astro';

// Types - Pricing
export type { Props as PricingSectionProps } from './PricingSection.astro';
export type { Props as PricingCardProps } from './PricingCard.astro';
export type { Props as PricingTableProps, PricingTier, PricingFeature } from './PricingTable.astro';

// Types - CTA
export type { Props as CTASectionProps } from './CTASection.astro';
export type { Props as CTAProps } from './CTA.astro';

// Types - Stats
export type { Props as StatsSectionProps } from './StatsSection.astro';
export type { Props as StatItemProps } from './StatItem.astro';
export type { Props as StatsProps, Stat } from './Stats.astro';

// Types - Team
export type { Props as TeamSectionProps } from './TeamSection.astro';
export type { Props as TeamMemberProps, Social as TeamMemberSocial } from './TeamMember.astro';

// Types - FAQ
export type { Props as FAQSectionProps, Category as FAQCategory } from './FAQSection.astro';
export type { Props as FAQItemProps } from './FAQItem.astro';
export type { Props as FAQProps, FAQItem as FAQItemType } from './FAQ.astro';

// Types - Logo Cloud
export type { Props as LogoCloudSectionProps } from './LogoCloudSection.astro';

// Types - Content
export type { Props as ContentSectionProps } from './ContentSection.astro';

// Types - Contact
export type { Props as ContactSectionProps, ContactInfo, SocialLink } from './ContactSection.astro';

// Types - Newsletter
export type { Props as NewsletterSectionProps } from './NewsletterSection.astro';

// Types - Timeline
export type { Props as TimelineSectionProps } from './TimelineSection.astro';
export type { Props as TimelineItemProps } from './TimelineItem.astro';

// Types - Comparison
export type { Props as ComparisonSectionProps, ComparisonItem, ComparisonColumn } from './ComparisonSection.astro';

// Types - Gallery
export type { Props as GallerySectionProps, FilterCategory as GalleryFilterCategory } from './GallerySection.astro';
export type { Props as GalleryItemProps } from './GalleryItem.astro';

// Types - Process
export type { Props as ProcessSectionProps } from './ProcessSection.astro';
export type { Props as ProcessStepProps } from './ProcessStep.astro';

// Types - Careers
export type { Props as CareersSectionProps, Department } from './CareersSection.astro';
export type { Props as JobCardProps } from './JobCard.astro';

// Types - Awards
export type { Props as AwardsSectionProps } from './AwardsSection.astro';
export type { Props as AwardItemProps } from './AwardItem.astro';

// Types - Blog
export type { Props as BlogSectionProps } from './BlogSection.astro';
export type { Props as BlogCardProps, Author as BlogAuthor } from './BlogCard.astro';

// Types - Integrations
export type { Props as IntegrationsSectionProps, Category as IntegrationCategory } from './IntegrationsSection.astro';
export type { Props as IntegrationCardProps } from './IntegrationCard.astro';

// Types - Video
export type { Props as VideoSectionProps } from './VideoSection.astro';

// Types - Resources
export type { Props as ResourcesSectionProps, Category as ResourceCategory } from './ResourcesSection.astro';
export type { Props as ResourceCardProps } from './ResourceCard.astro';

// Types - Locations
export type { Props as LocationsSectionProps, Region } from './LocationsSection.astro';
export type { Props as LocationCardProps, OpeningHours } from './LocationCard.astro';

// Types - Banner
export type { Props as BannerSectionProps } from './BannerSection.astro';

// Types - Social Proof
export type { Props as SocialProofSectionProps, RatingItem, StatItem as SocialProofStatItem, BadgeItem } from './SocialProofSection.astro';

// Types - Tabs
export type { Props as TabsSectionProps, Tab } from './TabsSection.astro';
export type { Props as TabPanelProps } from './TabPanel.astro';

// Layout Sections
export { default as MasonryGrid } from './MasonryGrid.astro';
export { default as SidebarLayout } from './SidebarLayout.astro';
export { default as NavbarSection } from './NavbarSection.astro';
export { default as MegaMenuSection } from './MegaMenuSection.astro';
export { default as FooterSection } from './FooterSection.astro';
export { default as BreadcrumbSection } from './BreadcrumbSection.astro';
export { default as PaginationSection } from './PaginationSection.astro';

// Search & Results
export { default as SearchResultsSection } from './SearchResultsSection.astro';

// Status Pages
export { default as ErrorSection } from './ErrorSection.astro';
export { default as ComingSoonSection } from './ComingSoonSection.astro';
export { default as MaintenanceSection } from './MaintenanceSection.astro';

// Auth Sections
export { default as AuthSection } from './AuthSection.astro';

// E-commerce Sections
export { default as ProductSection } from './ProductSection.astro';

// Service Sections
export { default as ServiceSection } from './ServiceSection.astro';

// Case Study Sections
export { default as CaseStudySection } from './CaseStudySection.astro';

// News Ticker Sections
export { default as NewsTickerSection } from './NewsTickerSection.astro';

// Types - Layout
export type { Props as MasonryGridProps } from './MasonryGrid.astro';
export type { Props as SidebarLayoutProps } from './SidebarLayout.astro';
export type { Props as NavbarSectionProps, NavItem, NavAction } from './NavbarSection.astro';
export type { Props as MegaMenuSectionProps, MenuColumn } from './MegaMenuSection.astro';
export type { Props as FooterSectionProps, SocialLink as FooterSocialLink, FooterLink } from './FooterSection.astro';
export type { Props as BreadcrumbSectionProps, BreadcrumbItem } from './BreadcrumbSection.astro';
export type { Props as PaginationSectionProps } from './PaginationSection.astro';

// Types - Search
export type { Props as SearchResultsSectionProps, SearchResult } from './SearchResultsSection.astro';

// Types - Status Pages
export type { Props as ErrorSectionProps } from './ErrorSection.astro';
export type { Props as ComingSoonSectionProps } from './ComingSoonSection.astro';
export type { Props as MaintenanceSectionProps } from './MaintenanceSection.astro';

// Types - Auth
export type { Props as AuthSectionProps, SocialProvider } from './AuthSection.astro';

// Types - E-commerce
export type { Props as ProductSectionProps, Product } from './ProductSection.astro';

// Types - Services
export type { Props as ServiceSectionProps, Service } from './ServiceSection.astro';

// Types - Case Study
export type { Props as CaseStudySectionProps, CaseStudy } from './CaseStudySection.astro';

// Types - News Ticker
export type { Props as NewsTickerSectionProps, TickerItem } from './NewsTickerSection.astro';
