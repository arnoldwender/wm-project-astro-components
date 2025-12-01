import { defineCollection, z } from 'astro:content';

/**
 * Products Collection
 */
const productsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      // Basic info
      name: z.string(),
      description: z.string(),
      shortDescription: z.string().max(160),

      // Pricing
      price: z.number(),
      compareAtPrice: z.number().optional(), // Original price for sale
      currency: z.string().default('EUR'),

      // Images
      images: z.array(
        z.object({
          src: image(),
          alt: z.string(),
        })
      ),

      // Inventory
      inStock: z.boolean().default(true),
      stockQuantity: z.number().optional(),
      sku: z.string().optional(),

      // Variants
      variants: z
        .array(
          z.object({
            name: z.string(),
            options: z.array(z.string()),
            priceModifier: z.number().default(0),
          })
        )
        .optional(),

      // Categorization
      category: z.string(),
      subcategory: z.string().optional(),
      tags: z.array(z.string()).default([]),
      brand: z.string().optional(),

      // SEO
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),

      // Features
      features: z.array(z.string()).default([]),
      specifications: z
        .array(
          z.object({
            name: z.string(),
            value: z.string(),
          })
        )
        .optional(),

      // Display
      featured: z.boolean().default(false),
      new: z.boolean().default(false),
      order: z.number().default(0),

      // Affiliate (if applicable)
      affiliateLink: z.string().url().optional(),
      affiliateId: z.string().optional(),
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
      image: image().optional(),
      parentSlug: z.string().optional(),
      order: z.number().default(0),
      featured: z.boolean().default(false),
    }),
});

/**
 * Reviews Collection
 */
const reviewsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    productSlug: z.string(),
    author: z.string(),
    rating: z.number().min(1).max(5),
    title: z.string(),
    content: z.string(),
    date: z.coerce.date(),
    verified: z.boolean().default(false),
    helpful: z.number().default(0),
  }),
});

export const collections = {
  products: productsCollection,
  categories: categoriesCollection,
  reviews: reviewsCollection,
};
