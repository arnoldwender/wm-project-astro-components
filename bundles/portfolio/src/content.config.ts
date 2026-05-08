import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Projects Collection
 */
const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
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
      liveUrl: z.url().optional(),
      githubUrl: z.url().optional(),
      caseStudyUrl: z.string().optional(),

      // Display
      featured: z.boolean().default(false),
      order: z.number().default(0),
      color: z.string().optional(), // Hex color for accents
    }),
});

/**
 * Services Collection (data files)
 */
const servicesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/services' }),
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
 * Testimonials Collection (data files)
 */
const testimonialsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/testimonials' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      company: z.string().optional(),
      avatar: image().optional(),
      quote: z.string(),
      rating: z.number().min(1).max(5).optional(),
      projectSlug: z.string().optional(), // Link to project entry by ID
      featured: z.boolean().default(false),
    }),
});

export const collections = {
  projects: projectsCollection,
  services: servicesCollection,
  testimonials: testimonialsCollection,
};
