import { defineCollection, z } from 'astro:content';

/**
 * Products Collection - Para páginas de producto individual
 */
const productsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      // SEO Critical
      title: z.string().max(60), // Title tag length
      metaDescription: z.string().max(160),
      keywords: z.array(z.string()),

      // Product Info
      name: z.string(),
      brand: z.string(),
      model: z.string().optional(),
      description: z.string(),

      // Pricing & Affiliate
      price: z.number(),
      currency: z.string().default('EUR'),
      affiliateLink: z.string().url(),
      affiliateId: z.string(),
      marketplace: z.enum(['amazon', 'ebay', 'other']).default('amazon'),
      asin: z.string().optional(), // Amazon ASIN

      // Rating
      rating: z.number().min(0).max(5),
      reviewCount: z.number().default(0),
      ourRating: z.number().min(0).max(10), // Tu rating editorial

      // Images
      image: image(),
      imageAlt: z.string(),
      gallery: z.array(image()).optional(),

      // Categorization
      category: z.string(),
      subcategory: z.string().optional(),
      tags: z.array(z.string()).default([]),

      // Content
      pros: z.array(z.string()),
      cons: z.array(z.string()),
      verdict: z.string(),
      specifications: z
        .array(
          z.object({
            name: z.string(),
            value: z.string(),
          })
        )
        .optional(),

      // Publishing
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string(),

      // Display
      featured: z.boolean().default(false),
      bestSeller: z.boolean().default(false),
      editorChoice: z.boolean().default(false),

      // Schema.org type
      schemaType: z
        .enum(['Product', 'SoftwareApplication', 'Book'])
        .default('Product'),
    }),
});

/**
 * Reviews Collection - Para reviews comparativas
 */
const reviewsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      metaDescription: z.string().max(160),
      keywords: z.array(z.string()),

      // Review type
      reviewType: z.enum([
        'single-product',
        'comparison',
        'roundup',
        'best-of',
        'guide',
      ]),

      // Products reviewed
      products: z.array(z.string()), // Slugs de productos

      // Content
      heroImage: image(),
      heroImageAlt: z.string(),
      excerpt: z.string(),
      winner: z.string().optional(), // Slug del ganador

      // Publishing
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string(),

      // SEO
      canonicalUrl: z.string().url().optional(),
    }),
});

/**
 * Categories Collection
 */
const categoriesCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      slug: z.string(),
      description: z.string(),
      metaDescription: z.string().max(160),
      image: image().optional(),
      parentSlug: z.string().optional(),
      order: z.number().default(0),
    }),
});

/**
 * Authors Collection
 */
const authorsCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      slug: z.string(),
      bio: z.string(),
      expertise: z.array(z.string()),
      avatar: image(),
      social: z
        .object({
          twitter: z.string().optional(),
          linkedin: z.string().optional(),
        })
        .optional(),
    }),
});

export const collections = {
  products: productsCollection,
  reviews: reviewsCollection,
  categories: categoriesCollection,
  authors: authorsCollection,
};
