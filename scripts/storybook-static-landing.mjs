#!/usr/bin/env node
/**
 * Post-build step for the Storybook published at astro.wendermedia.com.
 *
 * Storybook's index.html is an empty application shell. A visitor or crawler without JavaScript
 * (the AI search engines among them) got two words, no <h1>, no description, no canonical, no
 * entity and no link to the legal notice, which inside Storybook only exists as a client-side
 * story. This script writes into storybook-static/index.html:
 *  - a real <title>, a meta description and the canonical URL;
 *  - the Wender Media Organization entity as JSON-LD (the network's canonical @id and profiles);
 *  - a <noscript> block with an <h1>, what the library contains (counted from src/ the same way
 *    tests/llms-txt.test.ts holds public/llms.txt to the code) and a link to /impressum.html, so the
 *    legal notice is linked in the served HTML (DDG § 5). With JavaScript, the Welcome page that
 *    Storybook opens first links it (src/Welcome.mdx).
 *
 * Gate: exit 1 unless the shell has exactly one empty #root, one <title> and one </head>, has not been
 * processed before, and the result carries exactly one <h1> and at least MIN_WORDS visible words.
 *
 * Usage:  node scripts/storybook-static-landing.mjs [storybook-static]   (after `npm run build-storybook`)
 * Exit:   0 written · 1 a check failed
 *
 * @copyright 2007-2026 Wender Media - Arnold Wender. Wender Media Source License v1.0.
 */

import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

export const SITE = 'https://astro.wendermedia.com';
export const MARKER = '<!-- wm-landing: written by scripts/storybook-static-landing.mjs -->';
export const MIN_WORDS = 80;
const ROOT_DIV = '<div id="root"></div>';

/** The Wender Media entity: the network's canonical @id and the profiles it declares (sameAs). */
export const ORGANIZATION = {
  '@type': 'Organization',
  '@id': 'https://www.wendermedia.com/#organization',
  name: 'Wender Media',
  legalName: 'Wender Media - Arnold Wender',
  url: 'https://www.wendermedia.com',
  foundingDate: '2007',
  founder: { '@id': 'https://arnoldwender.com/#person' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Franckestraße 3a',
    postalCode: '06110',
    addressLocality: 'Halle (Saale)',
    addressCountry: 'DE',
  },
  sameAs: [
    'https://www.youtube.com/@wendermedia',
    'https://www.linkedin.com/company/wender-media',
    'https://www.xing.com/pages/wendermedia',
    'https://www.facebook.com/wendermedia',
    'https://www.instagram.com/wendermedia/',
    'https://github.com/arnoldwender',
    'https://wendermedia.com',
    'https://wendermedia.net',
    'https://wendermedia.biz',
    'https://wendermedia.info',
    'https://wendermedia.org',
    'https://wender.media',
  ],
};

/** Every .astro file below a directory, recursively (same rule as tests/llms-txt.test.ts). */
function astroFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...astroFiles(full));
    else if (entry.endsWith('.astro')) out.push(full);
  }
  return out;
}

/** Components and categories (top-level folders of src/ that hold at least one component). */
export function countComponents(srcDir) {
  const categories = readdirSync(srcDir)
    .filter((d) => statSync(join(srcDir, d)).isDirectory())
    .map((name) => ({ name, count: astroFiles(join(srcDir, name)).length }))
    .filter((c) => c.count > 0)
    .sort((a, b) => a.name.localeCompare(b.name));
  return { components: astroFiles(srcDir).length, categories };
}

const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const STRIP_RX = /<!--[\s\S]*?-->|<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>|<template\b[\s\S]*?<\/template>/gi;

/** Visible words as the AI-readiness check counts them: markup, scripts, styles and comments out. */
export function visibleWords(html) {
  const text = html.replace(STRIP_RX, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;|&#\d+;/gi, ' ');
  return (text.match(/[\p{L}\p{N}_]+/gu) ?? []).length;
}

export const h1Count = (html) => (html.replace(STRIP_RX, ' ').match(/<h1\b/gi) ?? []).length;

/** Returns the processed page; throws when the shell is not the one this script was written for. */
export function injectLanding(html, { components, categories }) {
  const count = (needle) => html.split(needle).length - 1;
  if (html.includes(MARKER)) throw new Error('index.html was already processed');
  if (count(ROOT_DIV) !== 1) throw new Error(`expected one ${ROOT_DIV}, found ${count(ROOT_DIV)}`);
  if (count('</head>') !== 1) throw new Error(`expected one </head>, found ${count('</head>')}`);
  const titles = html.match(/<title>[\s\S]*?<\/title>/g) ?? [];
  if (titles.length !== 1) throw new Error(`expected one <title>, found ${titles.length}`);

  const summary = `${components} Astro components in ${categories.length} categories`;
  const description = `Storybook of @wendermedia/astro-components: ${summary} for Astro 6 and 7, with live previews, props and usage examples.`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      ORGANIZATION,
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: `${SITE}/`,
        name: '@wendermedia/astro-components · Storybook',
        publisher: { '@id': ORGANIZATION['@id'] },
      },
    ],
  };

  const head = [
    MARKER,
    `<meta name="description" content="${escapeHtml(description)}">`,
    `<link rel="canonical" href="${SITE}/">`,
    // The JSON is ours (no user input); escaping "<" keeps "</script>" out of the script body.
    `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`,
  ].join('\n');

  const items = categories
    .map((c) => `<li>${escapeHtml(c.name)}: ${c.count} ${c.count === 1 ? 'component' : 'components'}</li>`)
    .join('');
  const body = [
    '<noscript><main id="playbook">',
    '<h1>@wendermedia/astro-components · Storybook</h1>',
    `<p>This is the Storybook of @wendermedia/astro-components, a component library for Astro 6 and 7 by Wender Media in Halle (Saale), Germany: ${summary}, each with live previews, props and usage examples. The Storybook needs JavaScript; without it, this page lists what the library contains.</p>`,
    '<p>Install it with <code>npm install @wendermedia/astro-components</code>. The code is source-available under the Wender Media Source License v1.0.</p>',
    `<h2>Categories</h2><ul>${items}</ul>`,
    '<h2>More</h2><ul>',
    '<li><a href="/llms.txt">llms.txt</a>: a short summary of the library for AI search engines</li>',
    '<li><a href="https://github.com/arnoldwender/wm-project-astro-components">Source on GitHub</a></li>',
    '<li><a href="https://www.npmjs.com/package/@wendermedia/astro-components">Package on npm</a></li>',
    '<li><a href="/impressum.html">Impressum &amp; Datenschutz</a></li>',
    '<li><a href="https://www.wendermedia.com/">Wender Media</a></li>',
    '</ul></main></noscript>',
  ].join('\n');

  const page = html
    .replace(titles[0], () => '<title>@wendermedia/astro-components · Storybook</title>')
    .replace('</head>', () => `${head}\n</head>`)
    .replace(ROOT_DIV, () => `${ROOT_DIV}\n${body}`);

  if (h1Count(page) !== 1) throw new Error(`the page has ${h1Count(page)} <h1>, expected exactly one`);
  const words = visibleWords(page);
  if (words < MIN_WORDS) throw new Error(`the page has ${words} visible words, fewer than ${MIN_WORDS}`);
  return page;
}

function main() {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
  const outDir = resolve(root, process.argv[2] ?? 'storybook-static');
  const indexPath = join(outDir, 'index.html');
  try {
    const page = injectLanding(readFileSync(indexPath, 'utf8'), countComponents(join(root, 'src')));
    writeFileSync(indexPath, page);
    console.log(`[landing] ${indexPath}: ${visibleWords(page)} visible words, 1 <h1>, entity, link to the legal page`);
  } catch (error) {
    console.error(`[landing] FAIL — ${error.message}`);
    process.exit(1);
  }
}

/* Only when run as a script: tests import the functions without a build */
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
