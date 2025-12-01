/**
 * Cloudflare Pages/Workers Deployment Configuration
 *
 * Best for:
 * - Global edge deployment
 * - Maximum performance
 * - D1/KV/R2 integration
 * - Workers AI
 *
 * Features:
 * - 300+ edge locations
 * - Cloudflare Workers runtime
 * - D1 (SQLite), KV, R2 storage
 * - Workers AI integration
 * - Unlimited bandwidth (Pages)
 */

import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server', // Cloudflare works best with full SSR

  adapter: cloudflare({
    // ================================
    // RUNTIME MODE
    // ================================

    // 'advanced' for full Workers features
    // 'directory' for Pages functions
    mode: 'advanced',

    // ================================
    // IMAGE OPTIMIZATION
    // ================================

    // Use Cloudflare Images
    imageService: 'cloudflare',

    // ================================
    // PLATFORM PROXY (Dev)
    // ================================

    // Enable platform bindings in dev
    platformProxy: {
      enabled: true,
      configPath: 'wrangler.toml',
      persist: {
        path: '.wrangler/state/v3',
      },
    },

    // ================================
    // ROUTES
    // ================================

    // Custom route configuration
    routes: {
      // Extend auto-generated routes
      extend: {
        include: [{ pattern: '/api/*' }],
        exclude: [{ pattern: '/static/*' }],
      },
    },

    // ================================
    // SESSION STORAGE
    // ================================

    // KV namespace for sessions
    // wasmModuleImports: true,

    // ================================
    // EXPERIMENTAL
    // ================================

    // functionPerRoute: true, // Split into multiple Workers
  }),

  // Vite configuration for Cloudflare
  vite: {
    define: {
      // Polyfills for Node.js APIs
      'process.env': {},
    },
    ssr: {
      // External packages not compatible with Workers
      external: ['node:buffer', 'node:path', 'node:fs'],
    },
  },
});

// -----------------------------
// wrangler.toml (project root):
// -----------------------------
/*
name = "my-astro-site"
main = "dist/_worker.js"
compatibility_date = "2024-01-01"
compatibility_flags = ["nodejs_compat"]

# Production environment
[env.production]
  name = "my-astro-site-prod"

# Staging environment
[env.staging]
  name = "my-astro-site-staging"

# Assets
[site]
  bucket = "./dist"

# D1 Database binding
[[d1_databases]]
  binding = "DB"
  database_name = "my-database"
  database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

# KV Namespace binding
[[kv_namespaces]]
  binding = "KV"
  id = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

# R2 Bucket binding
[[r2_buckets]]
  binding = "BUCKET"
  bucket_name = "my-bucket"

# Environment variables
[vars]
  PUBLIC_SITE_URL = "https://example.com"

# Secrets (set via CLI: wrangler secret put SECRET_KEY)
# SECRET_KEY = "..."

# Cron triggers
[triggers]
  crons = ["0 0 * * *"]  # Daily at midnight

# Custom routes
[[routes]]
  pattern = "example.com/*"
  zone_name = "example.com"

# Dev settings
[dev]
  port = 4321
  local_protocol = "http"

# Build settings
[build]
  command = "npm run build"

# Durable Objects (optional)
# [[durable_objects.bindings]]
#   name = "COUNTER"
#   class_name = "Counter"
*/

// -----------------------------
// _routes.json (customize routing):
// -----------------------------
/*
{
  "version": 1,
  "include": ["/*"],
  "exclude": [
    "/_astro/*",
    "/assets/*",
    "/favicon.ico",
    "/robots.txt",
    "/sitemap.xml"
  ]
}
*/

// -----------------------------
// Environment Variables:
// -----------------------------
/*
# .dev.vars (local development)
PUBLIC_SITE_URL=http://localhost:4321
DATABASE_URL=local

# Cloudflare Dashboard or wrangler.toml
# Environment variables are set in wrangler.toml [vars]
# Secrets via: wrangler secret put SECRET_NAME
*/

// -----------------------------
// D1 Database Usage (src/pages/api/users.ts):
// -----------------------------
/*
export const prerender = false;

import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ locals }) => {
  // Access D1 database from runtime bindings
  const { DB } = locals.runtime.env;

  const { results } = await DB.prepare(
    'SELECT * FROM users LIMIT 10'
  ).all();

  return new Response(JSON.stringify(results), {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const POST: APIRoute = async ({ request, locals }) => {
  const { DB } = locals.runtime.env;
  const { name, email } = await request.json();

  const result = await DB.prepare(
    'INSERT INTO users (name, email) VALUES (?, ?)'
  ).bind(name, email).run();

  return new Response(JSON.stringify({ id: result.lastRowId }), {
    status: 201,
  });
};
*/

// -----------------------------
// KV Storage Usage:
// -----------------------------
/*
export const GET: APIRoute = async ({ locals, params }) => {
  const { KV } = locals.runtime.env;

  // Get value
  const value = await KV.get(`cache:${params.key}`);

  if (!value) {
    return new Response('Not found', { status: 404 });
  }

  return new Response(value);
};

export const PUT: APIRoute = async ({ request, locals, params }) => {
  const { KV } = locals.runtime.env;
  const value = await request.text();

  // Set with TTL (1 hour)
  await KV.put(`cache:${params.key}`, value, {
    expirationTtl: 3600,
  });

  return new Response('OK');
};
*/

// -----------------------------
// R2 Storage Usage:
// -----------------------------
/*
export const GET: APIRoute = async ({ locals, params }) => {
  const { BUCKET } = locals.runtime.env;

  const object = await BUCKET.get(params.key);

  if (!object) {
    return new Response('Not found', { status: 404 });
  }

  return new Response(object.body, {
    headers: {
      'Content-Type': object.httpMetadata?.contentType || 'application/octet-stream',
    },
  });
};

export const PUT: APIRoute = async ({ request, locals, params }) => {
  const { BUCKET } = locals.runtime.env;

  await BUCKET.put(params.key, request.body, {
    httpMetadata: {
      contentType: request.headers.get('Content-Type') || 'application/octet-stream',
    },
  });

  return new Response('Uploaded', { status: 201 });
};
*/

// -----------------------------
// Type Definitions (src/env.d.ts):
// -----------------------------
/*
/// <reference types="astro/client" />

type D1Database = import('@cloudflare/workers-types').D1Database;
type KVNamespace = import('@cloudflare/workers-types').KVNamespace;
type R2Bucket = import('@cloudflare/workers-types').R2Bucket;

type Runtime = import('@astrojs/cloudflare').Runtime<{
  DB: D1Database;
  KV: KVNamespace;
  BUCKET: R2Bucket;
}>;

declare namespace App {
  interface Locals extends Runtime {}
}
*/

// -----------------------------
// Middleware (src/middleware.ts):
// -----------------------------
/*
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async ({ locals, request }, next) => {
  // Access CF properties
  const cf = request.cf;

  locals.geo = {
    country: cf?.country,
    city: cf?.city,
    timezone: cf?.timezone,
  };

  return next();
});
*/
