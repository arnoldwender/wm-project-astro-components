/**
 * Vercel Deployment Configuration
 *
 * Best for:
 * - SaaS landing pages
 * - E-commerce
 * - Apps requiring Edge functions
 * - Projects needing ISR
 *
 * Features:
 * - Edge & Serverless functions
 * - ISR (Incremental Static Regeneration)
 * - Web Analytics & Speed Insights
 * - Image Optimization
 */

import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'hybrid', // or 'server' for full SSR

  adapter: vercel({
    // ================================
    // FUNCTION CONFIGURATION
    // ================================

    // Use Edge Runtime for faster cold starts
    edgeMiddleware: true,

    // Maximum duration for serverless functions (seconds)
    // Free: 10s, Pro: 60s, Enterprise: 900s
    maxDuration: 10,

    // ================================
    // IMAGE OPTIMIZATION
    // ================================

    // Use Vercel's image optimization service
    imageService: true,

    // Custom image config
    imagesConfig: {
      domains: ['cdn.example.com'],
      sizes: [640, 750, 828, 1080, 1200, 1920, 2048],
      formats: ['image/avif', 'image/webp'],
    },

    // ================================
    // ISR (Incremental Static Regeneration)
    // ================================

    isr: {
      // Revalidate all ISR pages after this time (seconds)
      expiration: 60 * 60, // 1 hour

      // Paths to exclude from ISR (always SSR)
      exclude: ['/api/**', '/admin/**', '/checkout/**'],

      // Paths to include with custom expiration
      bypassToken: process.env.ISR_BYPASS_TOKEN,
    },

    // ================================
    // ANALYTICS
    // ================================

    // Enable Vercel Web Analytics
    webAnalytics: {
      enabled: true,
    },

    // Enable Vercel Speed Insights
    speedInsights: {
      enabled: true,
    },

    // ================================
    // ADVANCED
    // ================================

    // External packages for serverless
    includeFiles: ['./data/**'],

    // Skew protection (preview deployments)
    skewProtection: true,

    // Function regions
    // functionPerRoute: true, // Split functions per route
  }),
});

// -----------------------------
// vercel.json (project root):
// -----------------------------
/*
{
  "framework": "astro",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",

  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ],

  "redirects": [
    { "source": "/old-path", "destination": "/new-path", "permanent": true }
  ],

  "rewrites": [
    { "source": "/api/:path*", "destination": "/api/:path*" }
  ],

  "crons": [
    {
      "path": "/api/cron/daily",
      "schedule": "0 0 * * *"
    }
  ]
}
*/

// -----------------------------
// Environment Variables:
// -----------------------------
/*
# .env.local (development)
PUBLIC_SITE_URL=http://localhost:4321

# Vercel Dashboard (production)
PUBLIC_SITE_URL=https://example.com
DATABASE_URL=postgres://...
ISR_BYPASS_TOKEN=your-secret-token
*/

// -----------------------------
// Edge Middleware (src/middleware.ts):
// -----------------------------
/*
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  // Geolocation (Vercel Edge)
  const country = context.request.headers.get('x-vercel-ip-country');
  const city = context.request.headers.get('x-vercel-ip-city');

  // A/B Testing
  const bucket = context.cookies.get('ab-bucket')?.value
    || (Math.random() > 0.5 ? 'A' : 'B');

  if (!context.cookies.get('ab-bucket')) {
    context.cookies.set('ab-bucket', bucket, { path: '/' });
  }

  // Add to locals
  context.locals.geo = { country, city };
  context.locals.abBucket = bucket;

  return next();
});
*/

// -----------------------------
// ISR Page Example (src/pages/products/[slug].astro):
// -----------------------------
/*
---
// This page will be regenerated every hour
export const prerender = true;

import { getCollection, getEntry } from 'astro:content';

export async function getStaticPaths() {
  const products = await getCollection('products');
  return products.map(product => ({
    params: { slug: product.slug },
  }));
}

const { slug } = Astro.params;
const product = await getEntry('products', slug);
---

<!-- Product page content -->
*/

// -----------------------------
// On-Demand ISR (src/pages/api/revalidate.ts):
// -----------------------------
/*
export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const { path, token } = await request.json();

  // Verify token
  if (token !== import.meta.env.ISR_BYPASS_TOKEN) {
    return new Response('Unauthorized', { status: 401 });
  }

  // Trigger revalidation via Vercel API
  const response = await fetch(
    `https://api.vercel.com/v1/projects/${process.env.VERCEL_PROJECT_ID}/domains/${process.env.VERCEL_URL}/revalidate?path=${path}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
      },
    }
  );

  if (response.ok) {
    return new Response(JSON.stringify({ revalidated: true, path }));
  }

  return new Response('Revalidation failed', { status: 500 });
};
*/
