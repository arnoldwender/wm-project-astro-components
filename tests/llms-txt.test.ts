/**
 * public/llms.txt — the summary that ChatGPT, Perplexity, Claude and other AI search engines read on
 * astro.wendermedia.com (Storybook copies public/ to the site root via `staticDirs`).
 *
 * Why this test exists (2026-10-03): the previous llms.txt lived in the repo root, was never served, and
 * still claimed 158 components in 17 categories and version 3.0.0 while the library had 183 components in
 * 18 categories at 4.1.2. A figure in this file is read and repeated by AI assistants, so it is measured
 * here against src/ instead of trusted.
 *
 * @copyright 2007-2026 Wender Media - Arnold Wender. Wender Media Source License v1.0.
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const ROOT = join(__dirname, '..');
const LLMS = join(ROOT, 'public', 'llms.txt');
const SRC = join(ROOT, 'src');

/** Every .astro file below a directory, recursively. */
function astroFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...astroFiles(full));
    else if (entry.endsWith('.astro')) out.push(full);
  }
  return out;
}

describe('public/llms.txt', () => {
  it('exists where Storybook publishes it', () => {
    expect(existsSync(LLMS)).toBe(true);
  });

  const text = existsSync(LLMS) ? readFileSync(LLMS, 'utf8') : '';
  const lines = text.split('\n');

  it('follows the llmstxt.org shape: H1 first, then a summary blockquote', () => {
    expect(lines[0]).toMatch(/^# \S/);
    expect(lines.some((l) => l.startsWith('> '))).toBe(true);
  });

  it('links only absolute https URLs', () => {
    const links = [...text.matchAll(/\]\(([^)\s]+)\)/g)].map((m) => m[1]);
    expect(links.length).toBeGreaterThan(0);
    for (const url of links) expect(url).toMatch(/^https:\/\//);
  });

  it('states the component and category counts that src/ actually has', () => {
    const claim = text.match(/(\d+) Astro components in (\d+) categories/);
    expect(claim, 'llms.txt must state "<n> Astro components in <m> categories"').not.toBeNull();
    const components = astroFiles(SRC).length;
    const categories = readdirSync(SRC).filter(
      (d) => statSync(join(SRC, d)).isDirectory() && astroFiles(join(SRC, d)).length > 0,
    ).length;
    expect(Number(claim![1])).toBe(components);
    expect(Number(claim![2])).toBe(categories);
  });

  it('carries no version number that would drift from package.json', () => {
    const { version } = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'));
    const versions = [...text.matchAll(/\b(\d+\.\d+\.\d+)\b/g)].map((m) => m[1]);
    // The only version allowed is the MIT-licensed 2.1.0 pin, which is a fixed historical release.
    for (const v of versions) expect([version, '2.1.0']).toContain(v);
  });
});
