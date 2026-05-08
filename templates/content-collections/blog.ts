/**
 * Blog Content Collection Schema (Astro 6 — Content Layer API)
 *
 * Usage:
 * 1. Copy this file to your project's src/content.config.ts
 *    (Astro 6 moved the config from src/content/config.ts to src/content.config.ts)
 * 2. Create src/content/blog/, src/content/authors/, src/content/categories/ folders
 * 3. Add .md or .mdx files for blog posts and JSON files for authors/categories
 *
 * Notes (Astro 6):
 * - `type: 'data' | 'content'` is removed; use loaders instead.
 * - `glob()` and `file()` come from `astro/loaders`.
 * - `z` lives at `astro/zod` (still re-exported from `astro:content`, but
 *   importing from `astro/zod` matches the upstream zod 4 surface).
 * - zod 4 collapses `z.string().email()` → `z.email()`, etc.
 */

import { defineCollection, reference } from 'astro:content';
import { z } from 'astro/zod';
import { glob, file } from 'astro/loaders';

// Author collection — referenced by blog posts (one JSON file per author OR one combined file)
const authorCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    email: z.email().optional(),
    avatar: z.string().optional(), // Path or URL
    bio: z.string().optional(),
    social: z
      .object({
        twitter: z.string().optional(),
        github: z.string().optional(),
        linkedin: z.string().optional(),
        website: z.url().optional(),
      })
      .optional(),
  }),
});

// Category collection
const categoryCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/categories' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    color: z.string().optional(), // Hex color for UI
    icon: z.string().optional(), // Icon name
  }),
});

// Main blog collection (Markdown/MDX)
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      // Required fields
      title: z.string().min(1).max(100),
      description: z.string().min(10).max(300),
      pubDate: z.coerce.date(),

      // Optional fields
      updatedDate: z.coerce.date().optional(),
      draft: z.boolean().default(false),

      // Author — reference to authors collection
      author: reference('authors').optional(),

      // Categories — references to categories collection
      categories: z.array(reference('categories')).optional(),

      // Tags — simple strings
      tags: z.array(z.string()).default([]),

      // Cover image with Astro image optimization
      cover: image().optional(),
      coverAlt: z.string().optional(),

      // SEO overrides
      seo: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
          canonical: z.url().optional(),
          noindex: z.boolean().default(false),
        })
        .optional(),

      // Reading time (can be calculated at build time)
      readingTime: z.number().optional(),

      // Featured post
      featured: z.boolean().default(false),

      // Related posts — references to other blog posts
      relatedPosts: z.array(reference('blog')).optional(),

      // External link (for link posts)
      externalUrl: z.url().optional(),

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

// -----------------------------
// Alternative: single JSON file with multiple records
// -----------------------------
// If you prefer one combined file (e.g. src/content/authors/_authors.json containing
// an array or keyed object of authors), swap the `glob()` loader for `file()`:
//
//   loader: file('./src/content/authors/_authors.json'),
//
// The leading underscore prevents the file from being matched by the glob.
