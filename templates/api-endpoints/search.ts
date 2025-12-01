/**
 * Search API Endpoint
 *
 * Server-side search for content collections.
 * Alternative to client-side search (Pagefind, Lunr, etc.)
 *
 * Usage:
 * 1. Copy to src/pages/api/search.ts
 * 2. Import and index your content collections
 * 3. Query: GET /api/search?q=keyword&type=blog&limit=10
 */

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

interface SearchResult {
  id: string;
  slug: string;
  type: string;
  title: string;
  description?: string;
  url: string;
  score: number;
  highlights?: {
    title?: string;
    description?: string;
    content?: string;
  };
}

// Simple text search scoring
function calculateScore(text: string, query: string): number {
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const words = lowerQuery.split(/\s+/);

  let score = 0;

  // Exact match bonus
  if (lowerText.includes(lowerQuery)) {
    score += 10;
  }

  // Word matches
  for (const word of words) {
    if (word.length < 2) continue;

    // Title match (higher weight)
    const titleMatches = (lowerText.match(new RegExp(word, 'gi')) || []).length;
    score += titleMatches * 2;
  }

  return score;
}

// Highlight matching text
function highlightText(text: string, query: string, maxLength = 200): string {
  const words = query.toLowerCase().split(/\s+/).filter((w) => w.length >= 2);
  if (words.length === 0) return text.slice(0, maxLength);

  // Find best matching section
  const lowerText = text.toLowerCase();
  let bestStart = 0;
  let bestScore = 0;

  for (let i = 0; i < text.length - maxLength; i += 20) {
    const section = lowerText.slice(i, i + maxLength);
    let score = 0;
    for (const word of words) {
      if (section.includes(word)) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      bestStart = i;
    }
  }

  let result = text.slice(bestStart, bestStart + maxLength);

  // Add ellipsis if needed
  if (bestStart > 0) result = '...' + result;
  if (bestStart + maxLength < text.length) result = result + '...';

  // Highlight words
  for (const word of words) {
    const regex = new RegExp(`(${word})`, 'gi');
    result = result.replace(regex, '<mark>$1</mark>');
  }

  return result;
}

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': 'public, max-age=60', // Cache for 1 minute
  };

  try {
    // Parse query parameters
    const query = url.searchParams.get('q')?.trim() || '';
    const type = url.searchParams.get('type'); // 'blog', 'products', 'docs', or null for all
    const limit = Math.min(parseInt(url.searchParams.get('limit') || '20'), 100);
    const offset = parseInt(url.searchParams.get('offset') || '0');

    // Validate query
    if (query.length < 2) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Search query must be at least 2 characters.',
        }),
        { status: 400, headers }
      );
    }

    const results: SearchResult[] = [];

    // Search blog posts
    if (!type || type === 'blog') {
      try {
        const posts = await getCollection('blog', ({ data }) => !data.draft);

        for (const post of posts) {
          const titleScore = calculateScore(post.data.title, query);
          const descScore = calculateScore(post.data.description || '', query) * 0.5;
          const tagScore = post.data.tags?.some((t: string) =>
            t.toLowerCase().includes(query.toLowerCase())
          )
            ? 5
            : 0;

          const totalScore = titleScore + descScore + tagScore;

          if (totalScore > 0) {
            results.push({
              id: post.id,
              slug: post.slug,
              type: 'blog',
              title: post.data.title,
              description: post.data.description,
              url: `/blog/${post.slug}`,
              score: totalScore,
              highlights: {
                title: highlightText(post.data.title, query, 100),
                description: post.data.description
                  ? highlightText(post.data.description, query, 150)
                  : undefined,
              },
            });
          }
        }
      } catch {
        // Blog collection might not exist
      }
    }

    // Search products
    if (!type || type === 'products') {
      try {
        const products = await getCollection('products', ({ data }) =>
          data.inStock !== false
        );

        for (const product of products) {
          const nameScore = calculateScore(product.data.name, query);
          const descScore = calculateScore(product.data.shortDescription || '', query) * 0.5;
          const tagScore = product.data.tags?.some((t: string) =>
            t.toLowerCase().includes(query.toLowerCase())
          )
            ? 5
            : 0;

          const totalScore = nameScore + descScore + tagScore;

          if (totalScore > 0) {
            results.push({
              id: product.id,
              slug: product.slug,
              type: 'products',
              title: product.data.name,
              description: product.data.shortDescription,
              url: `/products/${product.slug}`,
              score: totalScore,
              highlights: {
                title: highlightText(product.data.name, query, 100),
                description: product.data.shortDescription
                  ? highlightText(product.data.shortDescription, query, 150)
                  : undefined,
              },
            });
          }
        }
      } catch {
        // Products collection might not exist
      }
    }

    // Search docs
    if (!type || type === 'docs') {
      try {
        const docs = await getCollection('docs', ({ data }) => !data.draft);

        for (const doc of docs) {
          const titleScore = calculateScore(doc.data.title, query);
          const descScore = calculateScore(doc.data.description || '', query) * 0.5;
          const tagScore = doc.data.tags?.some((t: string) =>
            t.toLowerCase().includes(query.toLowerCase())
          )
            ? 5
            : 0;

          const totalScore = titleScore + descScore + tagScore;

          if (totalScore > 0) {
            results.push({
              id: doc.id,
              slug: doc.slug,
              type: 'docs',
              title: doc.data.title,
              description: doc.data.description,
              url: `/docs/${doc.slug}`,
              score: totalScore,
              highlights: {
                title: highlightText(doc.data.title, query, 100),
                description: doc.data.description
                  ? highlightText(doc.data.description, query, 150)
                  : undefined,
              },
            });
          }
        }
      } catch {
        // Docs collection might not exist
      }
    }

    // Sort by score (descending)
    results.sort((a, b) => b.score - a.score);

    // Paginate
    const paginatedResults = results.slice(offset, offset + limit);

    return new Response(
      JSON.stringify({
        success: true,
        query,
        total: results.length,
        limit,
        offset,
        hasMore: offset + limit < results.length,
        results: paginatedResults,
      }),
      { status: 200, headers }
    );
  } catch (error) {
    console.error('Search error:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: 'Search failed. Please try again.',
      }),
      { status: 500, headers }
    );
  }
};
