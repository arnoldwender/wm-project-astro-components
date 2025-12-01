/**
 * Documentation Content Collection Schema
 *
 * For product documentation, API docs, guides, etc.
 * Note: For full docs sites, consider using Starlight instead.
 *
 * Usage:
 * 1. Copy this file to your project's src/content/config.ts
 * 2. Create src/content/docs/ folder with subfolders for sections
 * 3. Add .mdx files with documentation content
 */

import { defineCollection, z, reference } from 'astro:content';

// Documentation sections (sidebar groups)
const docSectionCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    icon: z.string().optional(),
    order: z.number().default(0),
    collapsed: z.boolean().default(false),
    badge: z
      .object({
        text: z.string(),
        variant: z.enum(['default', 'success', 'warning', 'danger', 'note']).default('default'),
      })
      .optional(),
  }),
});

// Main documentation collection
const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Title and description
    title: z.string(),
    description: z.string().optional(),

    // Navigation
    section: reference('doc-sections').optional(),
    order: z.number().default(999), // Order within section
    sidebar: z
      .object({
        label: z.string().optional(), // Override title in sidebar
        hidden: z.boolean().default(false),
        badge: z
          .object({
            text: z.string(),
            variant: z.enum(['default', 'success', 'warning', 'danger', 'note']).default('default'),
          })
          .optional(),
      })
      .optional(),

    // Page status
    draft: z.boolean().default(false),
    deprecated: z.boolean().default(false),
    deprecatedMessage: z.string().optional(),

    // Versioning
    version: z.string().optional(),
    sinceVersion: z.string().optional(),
    untilVersion: z.string().optional(),

    // Page features
    tableOfContents: z
      .union([
        z.boolean(),
        z.object({
          minHeadingLevel: z.number().min(1).max(6).default(2),
          maxHeadingLevel: z.number().min(1).max(6).default(3),
        }),
      ])
      .default(true),

    // Edit page
    editUrl: z.string().url().optional(),
    lastUpdated: z.coerce.date().optional(),

    // Page navigation
    prev: z
      .union([
        z.boolean(),
        z.object({
          link: z.string(),
          label: z.string().optional(),
        }),
      ])
      .optional(),
    next: z
      .union([
        z.boolean(),
        z.object({
          link: z.string(),
          label: z.string().optional(),
        }),
      ])
      .optional(),

    // SEO
    seo: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
        canonical: z.string().url().optional(),
        noindex: z.boolean().default(false),
      })
      .optional(),

    // Related pages
    relatedDocs: z.array(reference('docs')).optional(),

    // Tags for search/filtering
    tags: z.array(z.string()).default([]),

    // API reference specific
    api: z
      .object({
        package: z.string().optional(),
        module: z.string().optional(),
        type: z.enum(['function', 'class', 'interface', 'type', 'constant', 'component']).optional(),
        signature: z.string().optional(),
      })
      .optional(),

    // Tutorial specific
    tutorial: z
      .object({
        difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
        duration: z.string().optional(), // e.g., "15 min"
        prerequisites: z.array(reference('docs')).optional(),
      })
      .optional(),
  }),
});

// Changelog collection
const changelogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    version: z.string(),
    date: z.coerce.date(),
    title: z.string().optional(),
    description: z.string().optional(),
    breaking: z.boolean().default(false),
    highlights: z.array(z.string()).optional(),
    categories: z
      .object({
        added: z.array(z.string()).optional(),
        changed: z.array(z.string()).optional(),
        deprecated: z.array(z.string()).optional(),
        removed: z.array(z.string()).optional(),
        fixed: z.array(z.string()).optional(),
        security: z.array(z.string()).optional(),
      })
      .optional(),
  }),
});

export const collections = {
  docs: docsCollection,
  'doc-sections': docSectionCollection,
  changelog: changelogCollection,
};

// -----------------------------
// Example doc section (doc-sections/getting-started.json):
// -----------------------------
/*
{
  "title": "Getting Started",
  "slug": "getting-started",
  "description": "Learn the basics",
  "icon": "rocket",
  "order": 1,
  "collapsed": false
}
*/

// -----------------------------
// Example doc page (docs/getting-started/installation.mdx):
// -----------------------------
/*
---
title: "Installation"
description: "Learn how to install and set up the project"
section: getting-started
order: 1
sidebar:
  badge:
    text: "Updated"
    variant: "success"
tutorial:
  difficulty: "beginner"
  duration: "5 min"
---

## Prerequisites

Before you begin, make sure you have...

## Installation

```bash
npm install my-package
```

## Next Steps

Now that you've installed the package, learn how to...
*/

// -----------------------------
// Example API doc (docs/api/use-query.mdx):
// -----------------------------
/*
---
title: "useQuery"
description: "Hook for fetching and caching data"
section: api-reference
order: 1
api:
  package: "@mylib/core"
  module: "hooks"
  type: "function"
  signature: "useQuery<T>(key: string, fetcher: () => Promise<T>, options?: QueryOptions): QueryResult<T>"
tags:
  - hooks
  - data-fetching
---

## Usage

```tsx
import { useQuery } from '@mylib/core';

function UserProfile({ userId }) {
  const { data, isLoading, error } = useQuery(
    `user-${userId}`,
    () => fetchUser(userId)
  );

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error.message} />;
  return <Profile user={data} />;
}
```

## Parameters

| Name | Type | Description |
|------|------|-------------|
| `key` | `string` | Unique key for caching |
| `fetcher` | `() => Promise<T>` | Async function that fetches data |
| `options` | `QueryOptions` | Optional configuration |

## Returns

...
*/

// -----------------------------
// Example changelog (changelog/v2.0.0.mdx):
// -----------------------------
/*
---
version: "2.0.0"
date: 2024-06-01
title: "Version 2.0 - Major Release"
description: "Complete rewrite with new architecture"
breaking: true
highlights:
  - "New component architecture"
  - "50% smaller bundle size"
  - "TypeScript support"
categories:
  added:
    - "New `useQuery` hook for data fetching"
    - "Built-in TypeScript definitions"
  changed:
    - "Renamed `getData` to `fetchData`"
  removed:
    - "Dropped support for Node 14"
  fixed:
    - "Memory leak in subscription handler"
---

## Migration Guide

### Breaking Changes

1. **Component API Changes**

   Before:
   ```jsx
   <Button type="primary">Click</Button>
   ```

   After:
   ```jsx
   <Button variant="primary">Click</Button>
   ```

...
*/
