#!/usr/bin/env node
/**
 * README / npm banner generator for @wendermedia/astro-components
 *
 * Renders three HTML templates with Playwright (headless Chromium) and captures
 * them as PNGs at 2540x1520 (the size the README <img> tags expect). Same idiom
 * as wm-brand-wendermedia-info/scripts/generate-og-images.mjs — no design tool,
 * no external assets, everything is inline HTML/CSS/SVG so the banners always
 * reflect the CURRENT package state (version + counts are read live below).
 *
 * Run:  node scripts/generate-banners.mjs
 *
 * Output (overwrites):
 *   docs/images/gallery-01-hero.png        full-width hero
 *   docs/images/gallery-03-components.png  18 categories · 183 components
 *   docs/images/gallery-04-a11y-gdpr.png   accessibility + GDPR
 */

import { chromium } from 'playwright';
import { readFileSync, readdirSync, mkdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');
const outDir = join(repoRoot, 'docs', 'images');

// --- Live package facts (never hardcode — read from the repo itself) ----------
const pkg = JSON.parse(readFileSync(join(repoRoot, 'package.json'), 'utf8'));
const VERSION = pkg.version; // e.g. 4.0.2

// Count real .astro components per category barrel (src/<cat>/*.astro).
const srcDir = join(repoRoot, 'src');
const CATEGORIES = readdirSync(srcDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => {
    let count = 0;
    try {
      count = readdirSync(join(srcDir, d.name)).filter((f) => f.endsWith('.astro')).length;
    } catch {
      /* barrel-only dir */
    }
    return { name: d.name, count };
  })
  .filter((c) => c.count > 0)
  .sort((a, b) => b.count - a.count);

const TOTAL = CATEGORIES.reduce((n, c) => n + c.count, 0);
const CATEGORY_COUNT = CATEGORIES.length;

// --- Shared design tokens (mirror the library's own brand primary #3b82f6) ----
const CSS = /* css */ `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  :root {
    --bg-0: #0b1220;
    --bg-1: #0f172a;
    --bg-2: #1e293b;
    --brand: #3b82f6;      /* WM astro-components brand primary (from tokens) */
    --brand-2: #8b5cf6;    /* violet accent for gradient pop */
    --astro: #bc52ee;
    --ok: #10b981;
    --text: #f8fafc;
    --muted: #94a3b8;
    --line: #334155;
    --card: rgba(148, 163, 184, 0.08);
  }
  html, body {
    width: 1270px; height: 760px;
    font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }
  .stage {
    width: 1270px; height: 760px; position: relative; overflow: hidden;
    background:
      radial-gradient(1100px 620px at 15% -10%, rgba(59,130,246,0.22), transparent 60%),
      radial-gradient(900px 560px at 110% 120%, rgba(139,92,246,0.20), transparent 60%),
      linear-gradient(160deg, var(--bg-0), var(--bg-1) 55%, var(--bg-2));
    padding: 68px 72px;
    display: flex; flex-direction: column;
  }
  .stage::before { /* subtle dot grid */
    content: ""; position: absolute; inset: 0;
    background-image: radial-gradient(rgba(148,163,184,0.10) 1px, transparent 1px);
    background-size: 34px 34px; opacity: 0.5; pointer-events: none;
  }
  .brandbar { display: flex; align-items: center; gap: 16px; position: relative; z-index: 1; }
  .logo {
    width: 60px; height: 60px; border-radius: 15px; flex: 0 0 auto;
    background: linear-gradient(135deg, var(--brand), var(--brand-2));
    display: grid; place-items: center;
    box-shadow: 0 10px 30px rgba(59,130,246,0.45);
  }
  .brandbar .name { font-size: 20px; font-weight: 700; letter-spacing: -0.01em; }
  .brandbar .sub { font-size: 14px; color: var(--muted); margin-top: 2px; }
  .ver {
    margin-left: auto; font-size: 15px; font-weight: 600; color: var(--brand);
    border: 1px solid var(--line); border-radius: 999px; padding: 8px 16px;
    background: var(--card);
  }
  .grad { background: linear-gradient(120deg, #60a5fa, #a78bfa 55%, #f0abfc);
          -webkit-background-clip: text; background-clip: text; color: transparent; }
  .chips { display: flex; flex-wrap: wrap; gap: 12px; position: relative; z-index: 1; }
  .chip {
    display: inline-flex; align-items: center; gap: 9px;
    font-size: 18px; font-weight: 600; color: #e2e8f0;
    border: 1px solid var(--line); border-radius: 12px;
    padding: 11px 18px; background: var(--card);
  }
  .chip .dot { width: 10px; height: 10px; border-radius: 50%; }
  .foot { margin-top: auto; display: flex; align-items: center; gap: 14px;
          font-size: 17px; color: var(--muted); position: relative; z-index: 1; }
  .foot b { color: var(--text); font-weight: 600; }
`;

const LOGO = /* html */ `
  <div class="logo">
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4"
         stroke-linecap="round" stroke-linejoin="round">
      <polyline points="8 7 3 12 8 17"></polyline>
      <polyline points="16 7 21 12 16 17"></polyline>
    </svg>
  </div>`;

const check = (c = '#10b981') => /* html */ `
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.6"
       stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;

const shell = (inner) =>
  `<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body><div class="stage">${inner}</div></body></html>`;

// --- Banner 1: hero ----------------------------------------------------------
const heroChips = [
  { t: 'Astro 6 · 7', c: '#bc52ee' },
  { t: 'Tailwind 4', c: '#06b6d4' },
  { t: 'TypeScript 5', c: '#3178c6' },
  { t: 'Node 22.12+', c: '#22c55e' },
  { t: 'WCAG 2.1 AA', c: '#10b981' },
  { t: 'GDPR', c: '#10b981' },
]
  .map((x) => `<span class="chip"><span class="dot" style="background:${x.c}"></span>${x.t}</span>`)
  .join('');

const heroHTML = shell(/* html */ `
  <div class="brandbar">
    ${LOGO}
    <div><div class="name">Wender Media</div><div class="sub">Web Agency · Halle (Saale), Germany</div></div>
    <div class="ver">v${VERSION}</div>
  </div>
  <div style="position:relative;z-index:1;margin-top:54px">
    <div style="font-size:26px;font-weight:600;color:#cbd5e1;letter-spacing:0.01em">@wendermedia/astro-components</div>
    <h1 style="font-size:104px;line-height:1.02;font-weight:800;letter-spacing:-0.03em;margin-top:14px">
      <span class="grad">${TOTAL} Astro</span><br/>components
    </h1>
    <div style="font-size:27px;color:#cbd5e1;font-weight:500;margin-top:22px;max-width:1000px">
      Production-ready, accessible &amp; GDPR-compliant &mdash;
      <span style="color:#fff;font-weight:600">${CATEGORY_COUNT} categories</span>,
      design-tokened, trilingual-ready.
    </div>
  </div>
  <div class="chips" style="margin-top:38px">${heroChips}</div>
  <div class="foot">
    <b>astro.wendermedia.com</b><span style="color:var(--line)">&bull;</span>
    Live Playbook &mdash; browse every component with props &amp; live previews
  </div>
`);

// --- Banner 2: component catalog --------------------------------------------
const catCards = CATEGORIES.map(
  (c) => /* html */ `
    <div class="cat">
      <span class="cat-name">${c.name}</span>
      <span class="cat-count">${c.count}</span>
    </div>`
).join('');

const componentsHTML = shell(/* html */ `
  <div class="brandbar">
    ${LOGO}
    <div><div class="name">Component catalog</div><div class="sub">One named import per barrel</div></div>
    <div class="ver">v${VERSION}</div>
  </div>
  <div style="position:relative;z-index:1;margin-top:30px">
    <div style="font-size:24px;color:var(--muted);font-weight:600">${CATEGORY_COUNT} categories</div>
    <div style="font-size:76px;font-weight:800;letter-spacing:-0.03em;line-height:1">
      <span class="grad">${TOTAL}</span> components
    </div>
  </div>
  <div style="position:relative;z-index:1;margin-top:34px;display:grid;
              grid-template-columns:repeat(3,1fr);gap:14px;flex:1">
    ${catCards}
  </div>
  <style>
    .cat { display:flex; align-items:center; justify-content:space-between;
           border:1px solid var(--line); border-radius:13px; padding:14px 18px;
           background: var(--card); }
    .cat-name { font-size:19px; font-weight:600; color:#e2e8f0; }
    .cat-count { font-size:19px; font-weight:800; color:var(--brand);
                 min-width:40px; text-align:right; }
  </style>
`);

// --- Banner 3: accessibility + GDPR -----------------------------------------
const a11yItems = [
  'Keyboard navigation &amp; visible focus rings',
  'Semantic HTML with ARIA landmarks',
  '<code>prefers-reduced-motion</code> honored',
  '4.5:1 minimum contrast on text',
  'No third-party trackers by default',
  'Consent-gated embeds (YouTube, Maps)',
]
  .map(
    (t) => /* html */ `<li style="display:flex;align-items:center;gap:15px;font-size:23px;
      font-weight:500;color:#e2e8f0;padding:11px 0">${check()}<span>${t}</span></li>`
  )
  .join('');

const a11yHTML = shell(/* html */ `
  <div class="brandbar">
    ${LOGO}
    <div><div class="name">Accessible &amp; privacy-first</div><div class="sub">by default, in every component</div></div>
    <div class="ver">v${VERSION}</div>
  </div>
  <div style="position:relative;z-index:1;display:flex;gap:16px;margin-top:34px">
    <div style="flex:1;border:1px solid var(--line);border-radius:16px;padding:22px;background:var(--card)">
      <div style="display:flex;align-items:center;gap:12px">${check('#10b981')}
        <span style="font-size:26px;font-weight:800">WCAG 2.1 AA</span></div>
      <div style="font-size:17px;color:var(--muted);margin-top:8px">BFSG 2025 ready</div>
    </div>
    <div style="flex:1;border:1px solid var(--line);border-radius:16px;padding:22px;background:var(--card)">
      <div style="display:flex;align-items:center;gap:12px">${check('#10b981')}
        <span style="font-size:26px;font-weight:800">GDPR compliant</span></div>
      <div style="font-size:17px;color:var(--muted);margin-top:8px">DSGVO Art. 13</div>
    </div>
  </div>
  <ul style="position:relative;z-index:1;margin-top:26px;list-style:none">${a11yItems}</ul>
  <div class="foot"><b>${TOTAL} components</b><span style="color:var(--line)">&bull;</span>
    Tested against WCAG 2.1 AA &mdash; accessibility is not an add-on</div>
`);

// --- Render -----------------------------------------------------------------
const BANNERS = [
  { file: 'gallery-01-hero.png', html: heroHTML },
  { file: 'gallery-03-components.png', html: componentsHTML },
  { file: 'gallery-04-a11y-gdpr.png', html: a11yHTML },
];

mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1270, height: 760 },
  deviceScaleFactor: 2, // → 2540 x 1520 PNG (matches existing README banners)
});

for (const b of BANNERS) {
  const dest = join(outDir, b.file);
  await page.setContent(b.html, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: dest, clip: { x: 0, y: 0, width: 1270, height: 760 } });
  // Quantize in place — flat gradients crush to ~1/5 size with no visible loss.
  // pngquant is optional; skip gracefully if it isn't installed.
  let note = '';
  try {
    const before = statSync(dest).size;
    execFileSync('pngquant', ['--quality=70-92', '--speed', '1', '--strip', '--force', '--output', dest, dest]);
    const after = statSync(dest).size;
    note = ` (${(before / 1e6).toFixed(1)}MB → ${(after / 1e3).toFixed(0)}KB)`;
  } catch {
    /* pngquant not installed — keep the full-size PNG */
  }
  console.info(`  ✓ ${b.file}${note}`);
}

await browser.close();
console.info(`\nDone — 3 banners regenerated for v${VERSION} (${TOTAL} components / ${CATEGORY_COUNT} categories).`);
