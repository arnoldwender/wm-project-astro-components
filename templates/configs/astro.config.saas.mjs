/**
 * Astro Configuration - SaaS Landing Page
 *
 * Optimized for:
 * - Marketing landing pages
 * - Interactive pricing/forms (React)
 * - Analytics integration
 * - A/B testing ready
 * - Fast iteration
 */

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // Production URL
  site: 'https://www.example.com',

  // Hybrid for API routes (waitlist, contact forms)
  output: 'hybrid',

  // Vercel deployment
  adapter: vercel({
    webAnalytics: { enabled: true },
    speedInsights: { enabled: true },
    imageService: true,
    isr: {
      expiration: 60 * 60 * 24, // Daily revalidation
    },
  }),

  // Integrations
  integrations: [
    react({
      include: ['**/react/**'],
    }),

    tailwind({
      applyBaseStyles: true,
      nesting: true,
      // Custom config path
      configFile: './tailwind.config.mjs',
    }),

    mdx({
      // For changelog/blog
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'github-dark' },
    }),

    sitemap({
      filter: (page) => !page.includes('/api/') && !page.includes('/preview/'),
    }),

    partytown({
      config: {
        forward: [
          'dataLayer.push',
          'gtag',
          'plausible',
          'posthog.capture',
          'analytics.track',
          'Intercom',
          'crisp.push',
        ],
      },
    }),
  ],

  // Image optimization
  image: {
    domains: ['images.unsplash.com', 'avatars.githubusercontent.com'],
  },

  // Prefetch for snappy navigation
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  // Build configuration
  build: {
    inlineStylesheets: 'always', // Inline critical CSS
    assets: '_astro',
  },

  // Vite configuration
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
          },
        },
      },
    },
    // Define environment variables
    define: {
      'import.meta.env.PUBLIC_STRIPE_KEY': JSON.stringify(process.env.PUBLIC_STRIPE_KEY),
      'import.meta.env.PUBLIC_GA_ID': JSON.stringify(process.env.PUBLIC_GA_ID),
    },
  },

  // Redirects for marketing
  redirects: {
    // UTM tracking preserving redirects
    '/go/pricing': '/pricing',
    '/go/demo': 'https://app.example.com/demo',
    '/go/signup': 'https://app.example.com/signup',

    // Old URL redirects
    '/features': '/product',
    '/tour': '/product',

    // App redirects
    '/login': 'https://app.example.com/login',
    '/signup': 'https://app.example.com/signup',
    '/dashboard': 'https://app.example.com/dashboard',
  },
});

// -----------------------------
// Waitlist API (src/pages/api/waitlist.ts):
// -----------------------------
/*
export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const { email, source } = await request.json();

  // Validate
  if (!email || !email.includes('@')) {
    return new Response(JSON.stringify({ error: 'Invalid email' }), {
      status: 400,
    });
  }

  // Add to your waitlist service (Mailchimp, ConvertKit, etc.)
  // await addToWaitlist(email, { source, timestamp: new Date() });

  // Track event (server-side)
  // await trackEvent('waitlist_signup', { email, source });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
*/

// -----------------------------
// Pricing Toggle Component (src/components/react/PricingToggle.tsx):
// -----------------------------
/*
import { useState } from 'react';

interface Plan {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  cta: string;
  popular?: boolean;
}

export default function PricingToggle({ plans }: { plans: Plan[] }) {
  const [isYearly, setIsYearly] = useState(false);
  const savings = 20; // Yearly discount %

  return (
    <div>
      <div className="flex items-center justify-center gap-4 mb-8">
        <span className={!isYearly ? 'font-bold' : 'text-gray-500'}>Monthly</span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className={`w-14 h-7 rounded-full relative ${isYearly ? 'bg-blue-600' : 'bg-gray-300'}`}
        >
          <span className={`absolute w-5 h-5 bg-white rounded-full top-1 transition-all ${isYearly ? 'left-8' : 'left-1'}`} />
        </button>
        <span className={isYearly ? 'font-bold' : 'text-gray-500'}>
          Yearly <span className="text-green-500 text-sm">Save {savings}%</span>
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map(plan => (
          <div key={plan.name} className={`p-6 rounded-lg ${plan.popular ? 'ring-2 ring-blue-500' : 'border'}`}>
            {plan.popular && <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">Popular</span>}
            <h3 className="text-xl font-bold mt-2">{plan.name}</h3>
            <p className="text-4xl font-bold mt-4">
              €{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              <span className="text-base font-normal">/{isYearly ? 'year' : 'month'}</span>
            </p>
            <ul className="mt-6 space-y-2">
              {plan.features.map(f => <li key={f}>✓ {f}</li>)}
            </ul>
            <button className="mt-6 w-full py-2 bg-blue-600 text-white rounded">{plan.cta}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
*/
