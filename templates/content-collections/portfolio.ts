/**
 * Portfolio/Projects Content Collection Schema
 *
 * For agencies, freelancers, and creative professionals.
 *
 * Usage:
 * 1. Copy this file to your project's src/content/config.ts
 * 2. Create src/content/projects/ folder
 * 3. Add .mdx files with case studies
 */

import { defineCollection, z, reference } from 'astro:content';

// Client/Company collection
const clientCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    logo: z.string().optional(),
    logoLight: z.string().optional(), // For dark backgrounds
    logoDark: z.string().optional(), // For light backgrounds
    website: z.string().url().optional(),
    industry: z.string().optional(),
    size: z.enum(['startup', 'small', 'medium', 'enterprise']).optional(),
    testimonial: z
      .object({
        quote: z.string(),
        author: z.string(),
        role: z.string(),
        avatar: z.string().optional(),
      })
      .optional(),
  }),
});

// Service categories
const serviceCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number().default(0),
  }),
});

// Team members (for project attribution)
const teamCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    role: z.string(),
    avatar: z.string().optional(),
    bio: z.string().optional(),
    social: z
      .object({
        twitter: z.string().optional(),
        linkedin: z.string().optional(),
        dribbble: z.string().optional(),
        behance: z.string().optional(),
        github: z.string().optional(),
      })
      .optional(),
  }),
});

// Main projects collection
const projectCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      // Basic info
      title: z.string().min(1).max(100),
      subtitle: z.string().optional(),
      description: z.string().min(10).max(500), // Short description for cards

      // Client info
      client: reference('clients').optional(),
      clientName: z.string().optional(), // Alternative if no client entry

      // Project categorization
      services: z.array(reference('services')).min(1),
      industry: z.string().optional(),
      tags: z.array(z.string()).default([]),

      // Project timeline
      startDate: z.coerce.date().optional(),
      endDate: z.coerce.date().optional(),
      duration: z.string().optional(), // e.g., "3 months"
      year: z.number().optional(), // For simple year display

      // Team
      team: z.array(reference('team')).optional(),
      role: z.string().optional(), // Your specific role

      // Media
      thumbnail: image(),
      thumbnailAlt: z.string(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      images: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string().optional(),
          })
        )
        .optional(),
      video: z.string().url().optional(), // YouTube/Vimeo embed

      // Results/Impact
      results: z
        .array(
          z.object({
            metric: z.string(), // e.g., "Conversion Rate"
            before: z.string().optional(),
            after: z.string(),
            improvement: z.string().optional(), // e.g., "+150%"
          })
        )
        .optional(),

      // Testimonial (project-specific)
      testimonial: z
        .object({
          quote: z.string(),
          author: z.string(),
          role: z.string(),
          avatar: z.string().optional(),
        })
        .optional(),

      // Tech stack
      technologies: z.array(z.string()).optional(),

      // Links
      liveUrl: z.string().url().optional(),
      caseStudyUrl: z.string().url().optional(),
      githubUrl: z.string().url().optional(),

      // Display options
      featured: z.boolean().default(false),
      order: z.number().default(0), // For manual ordering
      draft: z.boolean().default(false),

      // SEO
      seo: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
        })
        .optional(),

      // Awards
      awards: z
        .array(
          z.object({
            name: z.string(),
            organization: z.string(),
            year: z.number(),
            url: z.string().url().optional(),
          })
        )
        .optional(),

      // Related projects
      relatedProjects: z.array(reference('projects')).optional(),
    }),
});

export const collections = {
  projects: projectCollection,
  clients: clientCollection,
  services: serviceCollection,
  team: teamCollection,
};

// -----------------------------
// Example project (projects/brand-redesign-techcorp.mdx):
// -----------------------------
/*
---
title: "TechCorp Brand Redesign"
subtitle: "A complete visual identity transformation"
description: "Redesigned TechCorp's brand identity to reflect their evolution from startup to industry leader."
client: techcorp
services:
  - branding
  - web-design
industry: "Technology"
tags:
  - brand identity
  - logo design
  - web design
year: 2024
duration: "4 months"
team:
  - arnold
  - maria
role: "Lead Designer"
thumbnail: "./images/techcorp-thumb.jpg"
thumbnailAlt: "TechCorp new brand identity"
cover: "./images/techcorp-cover.jpg"
coverAlt: "TechCorp brand guidelines"
images:
  - src: "./images/techcorp-logo.jpg"
    alt: "New TechCorp logo"
    caption: "The new logomark represents growth and innovation"
  - src: "./images/techcorp-colors.jpg"
    alt: "Brand color palette"
results:
  - metric: "Brand Recognition"
    before: "23%"
    after: "67%"
    improvement: "+191%"
  - metric: "Website Conversions"
    after: "3.2%"
    improvement: "+85%"
testimonial:
  quote: "The new brand perfectly captures who we are as a company. Our team is proud to represent it."
  author: "Sarah Chen"
  role: "CEO, TechCorp"
technologies:
  - Figma
  - Illustrator
  - Framer
liveUrl: "https://techcorp.example.com"
featured: true
---

## The Challenge

TechCorp had grown from a 10-person startup to a 500+ employee enterprise, but their brand still looked like it belonged to a startup...

## Our Approach

We conducted extensive stakeholder interviews and competitive analysis to understand...

## The Solution

### Logo Evolution

The new logo maintains the essence of the original while...

### Color System

We developed a comprehensive color system that works across...

## Results

The rebrand launched in Q1 2024 to overwhelmingly positive reception...
*/

// -----------------------------
// Example client (clients/techcorp.json):
// -----------------------------
/*
{
  "name": "TechCorp",
  "slug": "techcorp",
  "logo": "/images/clients/techcorp-logo.svg",
  "website": "https://techcorp.example.com",
  "industry": "Technology",
  "size": "enterprise",
  "testimonial": {
    "quote": "Working with this team transformed our digital presence.",
    "author": "Sarah Chen",
    "role": "CEO"
  }
}
*/

// -----------------------------
// Example service (services/branding.json):
// -----------------------------
/*
{
  "name": "Branding",
  "slug": "branding",
  "description": "Complete brand identity design including logo, colors, typography, and guidelines.",
  "icon": "palette",
  "order": 1
}
*/
