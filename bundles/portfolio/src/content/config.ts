import { defineCollection, z } from 'astro:content';

/**
 * Projects Collection
 */
const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      client: z.string().optional(),
      date: z.coerce.date(),

      // Images
      thumbnail: image(),
      thumbnailAlt: z.string(),
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string().optional(),
          })
        )
        .optional(),

      // Categorization
      category: z.enum([
        'web-design',
        'branding',
        'photography',
        'video',
        'development',
        'ui-ux',
      ]),
      tags: z.array(z.string()).default([]),
      tools: z.array(z.string()).default([]),

      // Links
      liveUrl: z.string().url().optional(),
      githubUrl: z.string().url().optional(),
      caseStudyUrl: z.string().optional(),

      // Display
      featured: z.boolean().default(false),
      order: z.number().default(0),
      color: z.string().optional(), // Hex color for accents
    }),
});

/**
 * Services Collection
 */
const servicesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    longDescription: z.string(),
    icon: z.string(), // Icon name or SVG path
    features: z.array(z.string()),
    price: z
      .object({
        from: z.number(),
        currency: z.string().default('EUR'),
        unit: z.enum(['project', 'hour', 'month']).default('project'),
      })
      .optional(),
    order: z.number().default(0),
  }),
});

/**
 * Testimonials Collection
 */
const testimonialsCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      company: z.string().optional(),
      avatar: image().optional(),
      quote: z.string(),
      rating: z.number().min(1).max(5).optional(),
      projectSlug: z.string().optional(), // Link to project
      featured: z.boolean().default(false),
    }),
});

export const collections = {
  projects: projectsCollection,
  services: servicesCollection,
  testimonials: testimonialsCollection,
};
