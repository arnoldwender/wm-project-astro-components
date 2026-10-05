/**
 * What astro.wendermedia.com serves besides the Storybook itself: the legal page, robots.txt, the
 * sitemap, the colophon, and what scripts/storybook-static-landing.mjs writes into index.html.
 *
 * Why (2026-10-05): the legal notice only existed as a client-side story (no page, no link in the
 * served HTML — DDG § 5), there was no robots.txt and no sitemap, and a visitor without JavaScript got
 * an empty shell of two words. src/Legal.mdx also claimed attribution was required, which the LICENSE
 * (section 6) denies.
 *
 * @copyright 2007-2026 Wender Media - Arnold Wender. Wender Media Source License v1.0.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  MIN_WORDS,
  ORGANIZATION,
  countComponents,
  h1Count,
  injectLanding,
  visibleWords,
} from '../scripts/storybook-static-landing.mjs';

const ROOT = join(__dirname, '..');
const read = (p: string) => readFileSync(join(ROOT, p), 'utf8');
const SITE = 'https://astro.wendermedia.com';

describe('the legal page', () => {
  const page = read('public/impressum.html');
  const legal = read('src/Legal.mdx');

  it.each([
    'Werbeagentur Wender Media',
    'Inh. Arnold Wender',
    'Franckestraße 3a',
    '06110 Halle (Saale)',
    'Telefon: 0345 6867-6857',
    'info@wendermedia.com',
    'DE253389445',
    '§ 18 Abs. 2 MStV',
    'Landesbeauftragte für den Datenschutz Sachsen-Anhalt',
  ])('impressum.html and src/Legal.mdx both state «%s»', (fact) => {
    expect(page).toContain(fact);
    expect(legal).toContain(fact);
  });

  it('names itself as canonical and has one <h1>', () => {
    expect(page).toContain(`<link rel="canonical" href="${SITE}/impressum.html">`);
    expect(h1Count(page)).toBe(1);
  });

  it('Legal.mdx no longer claims that attribution is required', () => {
    expect(legal).not.toMatch(/Attribution an Wender Media erforderlich/);
    expect(legal).toMatch(/nicht verpflichtend/);
  });
});

describe('robots.txt and the sitemap', () => {
  const robots = read('public/robots.txt');
  const sitemap = read('public/sitemap.xml');
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  it('robots.txt names the sitemap and lets everyone else in', () => {
    expect(robots).toContain(`Sitemap: ${SITE}/sitemap.xml`);
    expect(robots).toMatch(/User-agent: \*\nAllow: \//);
  });

  it('lists only URLs of this site that exist as documents', () => {
    expect(locs.length).toBeGreaterThan(0);
    for (const loc of locs) {
      expect(loc.startsWith(`${SITE}/`)).toBe(true);
      const path = loc.slice(SITE.length);
      if (path === '/') continue; // index.html is written by the Storybook build
      expect(existsSync(join(ROOT, 'public', path)), `${path} is not in public/`).toBe(true);
    }
  });

  it('every listed static page has a canonical to itself and a description', () => {
    for (const loc of locs.filter((l) => l !== `${SITE}/`)) {
      const html = read(join('public', loc.slice(SITE.length)));
      expect(html).toContain(`<link rel="canonical" href="${loc}">`);
      expect(html).toMatch(/<meta name="description" content="[^"]+">/);
    }
  });
});

describe('scripts/storybook-static-landing.mjs', () => {
  const shell = '<!doctype html><html lang="en"><head><title>storybook - Storybook</title></head><body><div id="root"></div><script src="x.js"></script></body></html>';
  const counts = countComponents(join(ROOT, 'src'));
  const page = injectLanding(shell, counts);

  it('counts the same components and categories as tests/llms-txt.test.ts expects of llms.txt', () => {
    const claim = read('public/llms.txt').match(/(\d+) Astro components in (\d+) categories/);
    expect(Number(claim![1])).toBe(counts.components);
    expect(Number(claim![2])).toBe(counts.categories.length);
  });

  it('writes title, description, canonical and the Wender Media entity', () => {
    expect(page).toContain('<title>@wendermedia/astro-components · Storybook</title>');
    expect(page).toMatch(/<meta name="description" content="Storybook of @wendermedia\/astro-components: \d+ Astro components in \d+ categories/);
    expect(page).toContain(`<link rel="canonical" href="${SITE}/">`);
    const json = JSON.parse(page.match(/<script type="application\/ld\+json">(.*?)<\/script>/)![1]);
    const org = json['@graph'].find((n: { '@type': string }) => n['@type'] === 'Organization');
    expect(org['@id']).toBe('https://www.wendermedia.com/#organization');
    expect(org.sameAs).toEqual(ORGANIZATION.sameAs);
  });

  it('links the legal page in the served HTML (inside the <noscript> block)', () => {
    const noscript = page.match(/<noscript>[\s\S]*<\/noscript>/)![0];
    expect(noscript).toContain('<a href="/impressum.html">Impressum &amp; Datenschutz</a>');
  });

  it('gives a visitor without JavaScript one <h1> and enough words', () => {
    expect(h1Count(page)).toBe(1);
    expect(visibleWords(page)).toBeGreaterThanOrEqual(MIN_WORDS);
  });

  it('the Welcome page (what Storybook opens first) states the counts src/ has and links the legal page', () => {
    // Until 2026-10-05 it said 158 components in 17 categories, an older count per category, and v3.0.0.
    const welcome = read('src/Welcome.mdx');
    expect(welcome).toContain(`**${counts.components} production-ready`);
    expect(welcome).toContain(`## ${counts.components} Components across ${counts.categories.length} Categories`);
    const label: Record<string, string> = {
      UI: 'ui', Sections: 'sections', Layouts: 'layouts', Accessibility: 'accessibility', SEO: 'seo',
      'E-commerce': 'ecommerce', Content: 'content', Navigation: 'navigation', Forms: 'forms', Media: 'media',
      Layout: 'layout', Maps: 'maps', Social: 'social', 'Design System': 'design-system', Gallery: 'gallery',
      Images: 'images', Legal: 'legal', Products: 'products',
    };
    const rows = [...welcome.matchAll(/^\| ([A-Za-z -]+) \| (\d+) \|/gm)].map((m) => [label[m[1]], Number(m[2])]);
    expect(Object.fromEntries(rows)).toEqual(Object.fromEntries(counts.categories.map((c) => [c.name, c.count])));
    expect(welcome).not.toMatch(/\bv\d+\.\d+\.\d+\b/);
    expect(welcome).toContain('<a href="/impressum.html" target="_top">Impressum & Datenschutz</a>');
  });

  it('refuses a shell it was not written for, or a second run', () => {
    expect(() => injectLanding(shell.replace('<div id="root"></div>', ''), counts)).toThrow(/root/);
    expect(() => injectLanding(shell.replace('<title>storybook - Storybook</title>', ''), counts)).toThrow(/title/);
    expect(() => injectLanding(page, counts)).toThrow(/already processed/);
  });
});
