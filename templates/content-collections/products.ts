/**
 * E-commerce Products Content Collection Schema
 *
 * Usage:
 * 1. Copy this file to your project's src/content/config.ts
 * 2. Create src/content/products/ folder
 * 3. Add .md, .mdx, or .json files with matching schema
 */

import { defineCollection, z, reference } from 'astro:content';

// Product categories
const productCategoryCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    parentCategory: z.string().optional(), // For nested categories
    image: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    seo: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
      })
      .optional(),
  }),
});

// Product brands
const brandCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    logo: z.string().optional(),
    description: z.string().optional(),
    website: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

// Main products collection
const productCollection = defineCollection({
  type: 'content', // MDX for rich product descriptions
  schema: ({ image }) =>
    z.object({
      // Basic info
      name: z.string().min(1).max(200),
      sku: z.string(),
      slug: z.string().optional(), // Auto-generated from filename if not provided

      // Pricing
      price: z.number().positive(),
      compareAtPrice: z.number().positive().optional(), // Original price for sales
      currency: z.string().default('EUR'),
      taxIncluded: z.boolean().default(true),

      // Inventory
      inStock: z.boolean().default(true),
      quantity: z.number().int().nonnegative().optional(),
      lowStockThreshold: z.number().int().default(5),
      trackInventory: z.boolean().default(true),

      // Product details
      shortDescription: z.string().max(300),
      // Long description comes from the MDX content itself

      // Categorization
      category: reference('product-categories'),
      brand: reference('brands').optional(),
      tags: z.array(z.string()).default([]),

      // Images - using Astro image optimization
      images: z.array(image()).min(1),
      thumbnail: image().optional(), // Falls back to first image

      // Variants (if applicable)
      hasVariants: z.boolean().default(false),
      variants: z
        .array(
          z.object({
            id: z.string(),
            name: z.string(),
            sku: z.string(),
            price: z.number().positive().optional(), // Override base price
            image: z.string().optional(),
            attributes: z.record(z.string()), // e.g., { size: 'L', color: 'Blue' }
            inStock: z.boolean().default(true),
            quantity: z.number().int().nonnegative().optional(),
          })
        )
        .optional(),

      // Product attributes
      attributes: z
        .array(
          z.object({
            name: z.string(),
            value: z.string(),
          })
        )
        .optional(),

      // Shipping
      weight: z.number().positive().optional(), // In kg
      dimensions: z
        .object({
          length: z.number().positive(),
          width: z.number().positive(),
          height: z.number().positive(),
        })
        .optional(),
      shippingClass: z.string().optional(),
      freeShipping: z.boolean().default(false),

      // SEO
      seo: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
          canonical: z.string().url().optional(),
        })
        .optional(),

      // Display options
      featured: z.boolean().default(false),
      new: z.boolean().default(false),
      bestseller: z.boolean().default(false),
      publishedAt: z.coerce.date().optional(),

      // Related products
      relatedProducts: z.array(reference('products')).optional(),
      upsellProducts: z.array(reference('products')).optional(),

      // Reviews summary (calculated or from external source)
      rating: z.number().min(0).max(5).optional(),
      reviewCount: z.number().int().nonnegative().optional(),

      // Schema.org structured data extras
      gtin: z.string().optional(), // EAN/UPC barcode
      mpn: z.string().optional(), // Manufacturer Part Number
      condition: z.enum(['new', 'refurbished', 'used']).default('new'),
    }),
});

// Product reviews collection
const reviewCollection = defineCollection({
  type: 'data',
  schema: z.object({
    product: reference('products'),
    author: z.string(),
    email: z.string().email().optional(),
    rating: z.number().int().min(1).max(5),
    title: z.string().optional(),
    content: z.string(),
    verified: z.boolean().default(false),
    helpful: z.number().int().nonnegative().default(0),
    createdAt: z.coerce.date(),
    approved: z.boolean().default(false),
  }),
});

export const collections = {
  products: productCollection,
  'product-categories': productCategoryCollection,
  brands: brandCollection,
  reviews: reviewCollection,
};

// -----------------------------
// Example product (products/ergonomic-chair.mdx):
// -----------------------------
/*
---
name: "Ergonomic Office Chair Pro"
sku: "CHAIR-ERG-001"
price: 299.99
compareAtPrice: 399.99
shortDescription: "Premium ergonomic chair with lumbar support and adjustable armrests."
category: furniture
brand: ergonomics-plus
tags:
  - office
  - ergonomic
  - chair
images:
  - "./images/chair-front.jpg"
  - "./images/chair-side.jpg"
  - "./images/chair-back.jpg"
featured: true
bestseller: true
weight: 15.5
dimensions:
  length: 70
  width: 65
  height: 120
hasVariants: true
variants:
  - id: "black"
    name: "Black"
    sku: "CHAIR-ERG-001-BLK"
    attributes:
      color: "Black"
  - id: "gray"
    name: "Gray"
    sku: "CHAIR-ERG-001-GRY"
    attributes:
      color: "Gray"
attributes:
  - name: "Material"
    value: "Mesh & High-density foam"
  - name: "Max Weight Capacity"
    value: "150 kg"
  - name: "Warranty"
    value: "5 years"
rating: 4.8
reviewCount: 127
---

## Features

- **Adjustable Lumbar Support** - Customize the support to fit your spine's natural curve
- **4D Armrests** - Move up/down, forward/back, and pivot
- **Breathable Mesh Back** - Stay cool during long work sessions
- **Synchro-Tilt Mechanism** - Recline with perfect balance

## Specifications

The Ergonomic Office Chair Pro is designed for professionals who spend 8+ hours at their desk...
*/

// -----------------------------
// Example category (product-categories/furniture.json):
// -----------------------------
/*
{
  "name": "Furniture",
  "slug": "furniture",
  "description": "Office and home furniture",
  "featured": true,
  "order": 1
}
*/

// -----------------------------
// Example brand (brands/ergonomics-plus.json):
// -----------------------------
/*
{
  "name": "Ergonomics Plus",
  "slug": "ergonomics-plus",
  "logo": "/images/brands/ergonomics-plus.svg",
  "description": "Premium ergonomic solutions",
  "website": "https://ergonomicsplus.example.com",
  "featured": true
}
*/
