/**
 * Netlify Deployment Configuration
 *
 * Best for:
 * - JAMstack sites
 * - Multi-language sites (i18n)
 * - Sites with forms
 * - Projects needing serverless
 *
 * Features:
 * - Edge Functions
 * - Serverless Functions
 * - Netlify Forms
 * - Split testing
 * - Deploy previews
 */

import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'hybrid', // or 'server' for full SSR

  adapter: netlify({
    // ================================
    // FUNCTION CONFIGURATION
    // ================================

    // Use Edge Functions for middleware
    edgeMiddleware: true,

    // Serverless function directory
    // functionsDir: 'netlify/functions',

    // ================================
    // IMAGE OPTIMIZATION
    // ================================

    // Use Netlify Image CDN
    imageCDN: true,

    // ================================
    // CACHING
    // ================================

    // Cache SSR pages on CDN
    cacheOnDemandPages: true,

    // ================================
    // BUILDERS (On-Demand)
    // ================================

    // Use Netlify On-demand Builders for ISR-like behavior
    // builders: true,
  }),
});

// -----------------------------
// netlify.toml (project root):
// -----------------------------
/*
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"

# Headers for all pages
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"

# Cache static assets
[[headers]]
  for = "/_astro/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

# Redirects
[[redirects]]
  from = "/old-path"
  to = "/new-path"
  status = 301

# i18n redirects
[[redirects]]
  from = "/*"
  to = "/de/:splat"
  status = 302
  conditions = {Language = ["de"]}

[[redirects]]
  from = "/*"
  to = "/en/:splat"
  status = 302
  conditions = {Language = ["en"]}

# SPA fallback (if needed)
# [[redirects]]
#   from = "/*"
#   to = "/index.html"
#   status = 200

# Functions configuration
[functions]
  directory = "netlify/functions"
  node_bundler = "esbuild"

# Edge Functions
[[edge_functions]]
  path = "/*"
  function = "middleware"

# Dev settings
[dev]
  command = "npm run dev"
  port = 4321
  targetPort = 4321
  autoLaunch = false

# Context-specific settings
[context.production]
  environment = { NODE_ENV = "production" }

[context.deploy-preview]
  environment = { NODE_ENV = "preview" }

[context.branch-deploy]
  environment = { NODE_ENV = "staging" }
*/

// -----------------------------
// Environment Variables:
// -----------------------------
/*
# .env (local development)
PUBLIC_SITE_URL=http://localhost:4321

# Netlify Dashboard (production)
PUBLIC_SITE_URL=https://example.netlify.app
DATABASE_URL=postgres://...
*/

// -----------------------------
// Netlify Forms (src/components/ContactForm.astro):
// -----------------------------
/*
<form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  action="/success"
>
  <input type="hidden" name="form-name" value="contact" />

  <!-- Honeypot field (spam protection) -->
  <p class="hidden">
    <label>Don't fill this out: <input name="bot-field" /></label>
  </p>

  <label>
    Name:
    <input type="text" name="name" required />
  </label>

  <label>
    Email:
    <input type="email" name="email" required />
  </label>

  <label>
    Message:
    <textarea name="message" required></textarea>
  </label>

  <button type="submit">Send</button>
</form>
*/

// -----------------------------
// Edge Function (netlify/edge-functions/middleware.ts):
// -----------------------------
/*
import type { Context } from '@netlify/edge-functions';

export default async (request: Request, context: Context) => {
  // Get geolocation
  const { country, city } = context.geo;

  // Get response from origin
  const response = await context.next();

  // Clone response to modify
  const newResponse = new Response(response.body, response);

  // Add custom headers
  newResponse.headers.set('x-geo-country', country?.code || 'unknown');
  newResponse.headers.set('x-geo-city', city || 'unknown');

  // A/B Testing
  const bucket = request.headers.get('cookie')?.match(/ab-bucket=([AB])/)?.[1]
    || (Math.random() > 0.5 ? 'A' : 'B');

  if (!request.headers.get('cookie')?.includes('ab-bucket=')) {
    newResponse.headers.append(
      'Set-Cookie',
      `ab-bucket=${bucket}; Path=/; Max-Age=604800`
    );
  }

  return newResponse;
};

export const config = {
  path: '/*',
  excludedPath: ['/_astro/*', '/assets/*'],
};
*/

// -----------------------------
// Serverless Function (netlify/functions/hello.ts):
// -----------------------------
/*
import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const { name = 'World' } = event.queryStringParameters || {};

  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello, ${name}!` }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
*/

// -----------------------------
// Split Testing (A/B) - netlify.toml:
// -----------------------------
/*
# Branch deploys for A/B testing
[[redirects]]
  from = "/*"
  to = "/.netlify/functions/ab-router"
  status = 200
  force = true
  conditions = {Cookie = ["ab-test"]}

# Or use Netlify Split Testing in dashboard
# Site settings > Split testing
*/

// -----------------------------
// Astro Middleware (src/middleware.ts):
// -----------------------------
/*
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  // Access Netlify context
  const country = context.request.headers.get('x-nf-geo')
    || context.request.headers.get('x-country');

  context.locals.country = country;

  return next();
});
*/
