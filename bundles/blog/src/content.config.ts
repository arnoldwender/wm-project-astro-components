import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Blog Post Collection Schema
 * Tipado completo para posts de blog
 */
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      // Required
      title: z.string().max(100),
      description: z.string().max(160), // SEO optimal
      pubDate: z.coerce.date(),

      // Optional
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('Arnold Wender'),
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),

      // Categorization
      category: z.enum([
        'tutorial',
        'opinion',
        'news',
        'review',
        'guide',
      ]),
      tags: z.array(z.string()).default([]),

      // SEO
      canonicalUrl: z.url().optional(),
      noindex: z.boolean().default(false),

      // Publishing
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),

      // Reading
      readingTime: z.number().optional(), // Calculado automáticamente
    }),
});

/**
 * Author Collection Schema (data files)
 */
const authorCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/authors' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      bio: z.string(),
      avatar: image().optional(),
      social: z.object({
        twitter: z.string().optional(),
        linkedin: z.string().optional(),
        github: z.string().optional(),
      }).optional(),
    }),
});

/**
 * Category Collection Schema (data files)
 */
const categoryCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/categories' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    slug: z.string(),
    color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
  }),
});

export const collections = {
  blog: blogCollection,
  authors: authorCollection,
  categories: categoryCollection,
};
