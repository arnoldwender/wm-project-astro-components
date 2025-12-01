/**
 * Blog Content Collection Schema
 *
 * Usage:
 * 1. Copy this file to your project's src/content/config.ts
 * 2. Create src/content/blog/ folder
 * 3. Add .md or .mdx files with matching frontmatter
 */

import { defineCollection, z, reference } from 'astro:content';

// Author collection - referenced by blog posts
const authorCollection = defineCollection({
  type: 'data', // JSON/YAML files
  schema: z.object({
    name: z.string(),
    email: z.string().email().optional(),
    avatar: z.string().optional(), // Path or URL
    bio: z.string().optional(),
    social: z
      .object({
        twitter: z.string().optional(),
        github: z.string().optional(),
        linkedin: z.string().optional(),
        website: z.string().url().optional(),
      })
      .optional(),
  }),
});

// Category collection
const categoryCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    color: z.string().optional(), // Hex color for UI
    icon: z.string().optional(), // Icon name
  }),
});

// Main blog collection
const blogCollection = defineCollection({
  type: 'content', // Markdown/MDX files
  schema: ({ image }) =>
    z.object({
      // Required fields
      title: z.string().min(1).max(100),
      description: z.string().min(10).max(300),
      pubDate: z.coerce.date(),

      // Optional fields
      updatedDate: z.coerce.date().optional(),
      draft: z.boolean().default(false),

      // Author - reference to authors collection
      author: reference('authors').optional(),

      // Categories - references to categories collection
      categories: z.array(reference('categories')).optional(),

      // Tags - simple strings
      tags: z.array(z.string()).default([]),

      // Cover image with Astro image optimization
      cover: image().optional(),
      coverAlt: z.string().optional(),

      // SEO overrides
      seo: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
          canonical: z.string().url().optional(),
          noindex: z.boolean().default(false),
        })
        .optional(),

      // Reading time (can be calculated at build time)
      readingTime: z.number().optional(),

      // Featured post
      featured: z.boolean().default(false),

      // Related posts - references to other blog posts
      relatedPosts: z.array(reference('blog')).optional(),

      // External link (for link posts)
      externalUrl: z.string().url().optional(),

      // Series support
      series: z
        .object({
          name: z.string(),
          part: z.number(),
        })
        .optional(),
    }),
});

// Export all collections
export const collections = {
  blog: blogCollection,
  authors: authorCollection,
  categories: categoryCollection,
};

// -----------------------------
// Example frontmatter (blog/my-first-post.mdx):
// -----------------------------
/*
---
title: "Getting Started with Astro"
description: "Learn how to build fast websites with Astro's component islands architecture."
pubDate: 2024-01-15
author: arnold
categories:
  - web-development
  - tutorials
tags:
  - astro
  - javascript
  - performance
cover: "./images/astro-cover.jpg"
coverAlt: "Astro logo on dark background"
featured: true
---

Content here...
*/

// -----------------------------
// Example author (authors/arnold.json):
// -----------------------------
/*
{
  "name": "Arnold Wender",
  "email": "arnold@example.com",
  "avatar": "/images/authors/arnold.jpg",
  "bio": "Full-stack developer passionate about web performance.",
  "social": {
    "twitter": "arnoldwender",
    "github": "arnoldwender"
  }
}
*/

// -----------------------------
// Example category (categories/web-development.json):
// -----------------------------
/*
{
  "name": "Web Development",
  "slug": "web-development",
  "description": "Articles about modern web development",
  "color": "#3b82f6",
  "icon": "code"
}
*/
