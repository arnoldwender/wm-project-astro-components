/**
 * Newsletter Subscription API Endpoint
 *
 * Usage:
 * 1. Copy to src/pages/api/newsletter.ts
 * 2. Configure your email marketing service
 * 3. Set environment variables
 *
 * Supports:
 * - Mailchimp
 * - ConvertKit
 * - Buttondown
 * - Custom database
 */

import type { APIRoute } from 'astro';

// Rate limiting
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW = 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Provider-specific functions
async function subscribeMailchimp(email: string, tags?: string[]): Promise<void> {
  const MAILCHIMP_API_KEY = import.meta.env.MAILCHIMP_API_KEY;
  const MAILCHIMP_LIST_ID = import.meta.env.MAILCHIMP_LIST_ID;
  const MAILCHIMP_DC = MAILCHIMP_API_KEY?.split('-')[1]; // e.g., 'us21'

  const response = await fetch(
    `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
    {
      method: 'POST',
      headers: {
        Authorization: `apikey ${MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'pending', // Double opt-in
        tags: tags || [],
      }),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    if (error.title === 'Member Exists') {
      throw new Error('already_subscribed');
    }
    throw new Error(error.detail || 'Subscription failed');
  }
}

async function subscribeConvertKit(email: string, formId?: string): Promise<void> {
  const CONVERTKIT_API_KEY = import.meta.env.CONVERTKIT_API_KEY;
  const CONVERTKIT_FORM_ID = formId || import.meta.env.CONVERTKIT_FORM_ID;

  const response = await fetch(
    `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: CONVERTKIT_API_KEY,
        email,
      }),
    }
  );

  if (!response.ok) {
    throw new Error('Subscription failed');
  }
}

async function subscribeButtondown(email: string): Promise<void> {
  const BUTTONDOWN_API_KEY = import.meta.env.BUTTONDOWN_API_KEY;

  const response = await fetch('https://api.buttondown.email/v1/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${BUTTONDOWN_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      type: 'regular',
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    if (response.status === 400 && error.email) {
      throw new Error('already_subscribed');
    }
    throw new Error('Subscription failed');
  }
}

export const prerender = false;

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    // Rate limiting
    const ip = clientAddress || 'unknown';
    if (!checkRateLimit(ip)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Too many requests. Please try again later.',
        }),
        { status: 429, headers }
      );
    }

    // Parse body
    const body = await request.json();
    const { email, provider = 'mailchimp', tags, formId, honeypot } = body;

    // Honeypot check
    if (honeypot) {
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers }
      );
    }

    // Validation
    if (!email || !validateEmail(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Please enter a valid email address.',
        }),
        { status: 400, headers }
      );
    }

    // Subscribe based on provider
    try {
      switch (provider) {
        case 'mailchimp':
          await subscribeMailchimp(email, tags);
          break;
        case 'convertkit':
          await subscribeConvertKit(email, formId);
          break;
        case 'buttondown':
          await subscribeButtondown(email);
          break;
        default:
          // Custom/database subscription
          console.log('Newsletter subscription:', { email, tags });
      }
    } catch (error) {
      if ((error as Error).message === 'already_subscribed') {
        return new Response(
          JSON.stringify({
            success: true,
            message: "You're already subscribed!",
          }),
          { status: 200, headers }
        );
      }
      throw error;
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thanks for subscribing! Check your email to confirm.',
      }),
      { status: 200, headers }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: 'Subscription failed. Please try again later.',
      }),
      { status: 500, headers }
    );
  }
};

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
