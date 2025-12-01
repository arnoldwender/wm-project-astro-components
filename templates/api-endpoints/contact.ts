/**
 * Contact Form API Endpoint
 *
 * Usage:
 * 1. Copy to src/pages/api/contact.ts
 * 2. Configure your email service (Resend, SendGrid, etc.)
 * 3. Set environment variables
 *
 * Required env vars:
 * - RESEND_API_KEY (or your email service key)
 * - CONTACT_EMAIL (recipient email)
 */

import type { APIRoute } from 'astro';

// Rate limiting store (use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // requests per window
const RATE_WINDOW = 60 * 1000; // 1 minute

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

// Simple validation
function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML
    .slice(0, 5000); // Limit length
}

export const prerender = false;

export const POST: APIRoute = async ({ request, clientAddress }) => {
  // CORS headers
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': import.meta.env.SITE || '*',
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
    const { name, email, subject, message, honeypot } = body;

    // Honeypot check (spam protection)
    if (honeypot) {
      // Silently accept but don't process (fool bots)
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers }
      );
    }

    // Validation
    const errors: Record<string, string> = {};

    if (!name || name.trim().length < 2) {
      errors.name = 'Name is required (min 2 characters)';
    }

    if (!email || !validateEmail(email)) {
      errors.email = 'Valid email is required';
    }

    if (!message || message.trim().length < 10) {
      errors.message = 'Message is required (min 10 characters)';
    }

    if (Object.keys(errors).length > 0) {
      return new Response(
        JSON.stringify({ success: false, errors }),
        { status: 400, headers }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      subject: subject ? sanitizeInput(subject) : 'Contact Form Submission',
      message: sanitizeInput(message),
    };

    // Send email (example with Resend)
    // Replace with your preferred email service
    /*
    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Contact Form <noreply@yourdomain.com>',
      to: import.meta.env.CONTACT_EMAIL,
      replyTo: sanitizedData.email,
      subject: `[Contact] ${sanitizedData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedData.name}</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedData.message.replace(/\n/g, '<br>')}</p>
      `,
    });
    */

    // For development, just log
    console.log('Contact form submission:', sanitizedData);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you! Your message has been sent.',
      }),
      { status: 200, headers }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: 'An error occurred. Please try again later.',
      }),
      { status: 500, headers }
    );
  }
};

// Handle OPTIONS for CORS preflight
export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': import.meta.env.SITE || '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
