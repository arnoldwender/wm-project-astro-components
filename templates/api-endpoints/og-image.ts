/**
 * Dynamic OG Image Generation API
 *
 * Generates Open Graph images on-the-fly using @vercel/og or satori.
 * Perfect for blog posts, products, and dynamic content.
 *
 * Usage:
 * 1. Copy to src/pages/api/og/[...slug].ts
 * 2. Install: npm install @vercel/og
 * 3. Use in meta tags: <meta property="og:image" content="/api/og/blog/my-post" />
 *
 * Note: Works best on Vercel/Edge. For Node.js, use satori + resvg.
 */

import type { APIRoute } from 'astro';
// import { ImageResponse } from '@vercel/og'; // Uncomment when using

export const prerender = false;

// Font loading (optional - for custom fonts)
// const fontData = await fetch('https://example.com/fonts/Inter-Bold.woff').then(r => r.arrayBuffer());

// Template configurations
const templates = {
  blog: {
    width: 1200,
    height: 630,
    style: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      textColor: '#ffffff',
    },
  },
  product: {
    width: 1200,
    height: 630,
    style: {
      background: '#ffffff',
      textColor: '#1a1a1a',
    },
  },
  docs: {
    width: 1200,
    height: 630,
    style: {
      background: '#0f172a',
      textColor: '#f8fafc',
    },
  },
};

export const GET: APIRoute = async ({ params, url }) => {
  try {
    const slug = params.slug || '';
    const parts = slug.split('/');
    const type = parts[0] as keyof typeof templates;
    const title = url.searchParams.get('title') || 'Untitled';
    const description = url.searchParams.get('description') || '';
    const author = url.searchParams.get('author') || '';
    const date = url.searchParams.get('date') || '';
    const siteName = url.searchParams.get('site') || 'My Site';

    const template = templates[type] || templates.blog;

    // Using @vercel/og (Edge Runtime)
    /*
    return new ImageResponse(
      {
        type: 'div',
        props: {
          style: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '60px',
            background: template.style.background,
          },
          children: [
            // Site name
            {
              type: 'div',
              props: {
                style: {
                  fontSize: '24px',
                  color: template.style.textColor,
                  opacity: 0.8,
                },
                children: siteName,
              },
            },
            // Title
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                },
                children: [
                  {
                    type: 'h1',
                    props: {
                      style: {
                        fontSize: title.length > 50 ? '48px' : '64px',
                        fontWeight: 'bold',
                        color: template.style.textColor,
                        lineHeight: 1.2,
                        margin: 0,
                      },
                      children: title,
                    },
                  },
                  description && {
                    type: 'p',
                    props: {
                      style: {
                        fontSize: '28px',
                        color: template.style.textColor,
                        opacity: 0.8,
                        margin: 0,
                      },
                      children: description.slice(0, 100) + (description.length > 100 ? '...' : ''),
                    },
                  },
                ].filter(Boolean),
              },
            },
            // Footer
            {
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
                children: [
                  author && {
                    type: 'div',
                    props: {
                      style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                      },
                      children: [
                        {
                          type: 'span',
                          props: {
                            style: {
                              fontSize: '24px',
                              color: template.style.textColor,
                            },
                            children: `By ${author}`,
                          },
                        },
                      ],
                    },
                  },
                  date && {
                    type: 'span',
                    props: {
                      style: {
                        fontSize: '24px',
                        color: template.style.textColor,
                        opacity: 0.8,
                      },
                      children: date,
                    },
                  },
                ].filter(Boolean),
              },
            },
          ],
        },
      },
      {
        width: template.width,
        height: template.height,
      }
    );
    */

    // Placeholder response for development
    // In production, use @vercel/og or satori
    return new Response(
      JSON.stringify({
        message: 'OG Image endpoint',
        params: { type, title, description, author, date, siteName },
        template,
        note: 'Uncomment @vercel/og code for actual image generation',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('OG Image generation error:', error);

    return new Response('Failed to generate image', { status: 500 });
  }
};

// -----------------------------
// Usage in Astro pages:
// -----------------------------
/*
---
// [slug].astro
import { getEntry } from 'astro:content';
const post = await getEntry('blog', Astro.params.slug);

const ogImageUrl = new URL('/api/og/blog', Astro.site);
ogImageUrl.searchParams.set('title', post.data.title);
ogImageUrl.searchParams.set('description', post.data.description);
ogImageUrl.searchParams.set('author', post.data.author);
ogImageUrl.searchParams.set('date', post.data.pubDate.toLocaleDateString());
ogImageUrl.searchParams.set('site', 'My Blog');
---

<meta property="og:image" content={ogImageUrl.toString()} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:type" content="image/png" />
*/
