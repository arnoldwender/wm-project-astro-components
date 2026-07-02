#!/usr/bin/env node
/**
 * README / npm banner generator for @wendermedia/astro-components
 *
 * Renders three cohesive banners with Playwright (headless Chromium) at
 * 2540x1520 (viewport 1270x760 @ deviceScaleFactor 2) — the size the README
 * <img> tags expect. Same idiom as wm-brand-wendermedia-info's OG generator:
 * no design tool, no external assets, everything inline HTML/CSS/SVG so the
 * banners always reflect the CURRENT package state (version + counts read live).
 *
 * Design system: "Developer / real code" — deep-slate developer surface, a raised
 * editor card showing a real .astro import, authentic Wender Media brand blues
 * (navy #002D5B -> #0080C9). The ONLY gradient anywhere is the small navy->blue
 * logo mark. Functional green (#10b981) appears ONLY on WCAG/GDPR checkmarks.
 * Zero purple/violet/magenta/pink — no AI-slop gradients.
 *
 * Run:  npm run banners   (or: node scripts/generate-banners.mjs)
 *
 * Output (overwrites):
 *   docs/images/gallery-01-hero.png        hero — real code + install
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

// --- Brand tokens — REAL Wender Media identity, non-purple only --------------
const CSS = /* css */ `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  :root {
    --bg:        #0d1420;   /* page surface */
    --panel:     #111827;   /* raised card */
    --panel-bar: #0f1826;   /* card title bar */
    --navy:      #002D5B;   /* WM corporate navy */
    --brand:     #0080C9;   /* WM bright brand blue */
    --brand-deep:#004C91;
    --white:  #f8fafc;
    --text:   #e2e8f0;
    --muted:  #94a3b8;
    --dim:    #64748b;
    --line:   #1f2a3d;
    --line-2: #253349;
    --card:   rgba(148, 163, 184, 0.05);
    --ok: #10b981;          /* functional green — checkmarks ONLY */
    /* restrained monochromatic syntax palette (blue / slate / white) */
    --syn-key:  #7ea6cc;
    --syn-tag:  #eaf1fb;
    --syn-attr: #9fb6d2;
    --syn-str:  #5fa8dc;
    --syn-punc: #5c6b82;
    --syn-fence:#59708f;
    --syn-line: #3a4a63;
  }
  html, body {
    width: 1270px; height: 760px;
    font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: var(--text); -webkit-font-smoothing: antialiased; text-rendering: geometricPrecision;
  }
  .mono { font-family: "SF Mono", "JetBrains Mono", "Fira Code", ui-monospace, Menlo, Consolas, monospace; }

  .stage {
    width: 1270px; height: 760px; position: relative; overflow: hidden;
    background: var(--bg); padding: 60px 68px; display: flex; flex-direction: column;
  }
  .stage::before { /* faint blueprint dot grid */
    content: ""; position: absolute; inset: 0; pointer-events: none;
    background-image: radial-gradient(rgba(148,163,184,0.055) 1px, transparent 1.4px);
    background-size: 30px 30px;
  }
  .stage::after { /* one soft brand glow — depth, not a wash */
    content: ""; position: absolute; inset: 0; pointer-events: none;
    background: radial-gradient(760px 460px at 88% -8%, rgba(0,128,201,0.13), transparent 62%);
  }

  /* --- Brand bar --- */
  .brandbar { display: flex; align-items: center; gap: 15px; position: relative; z-index: 2; }
  .logo {
    width: 46px; height: 46px; border-radius: 12px; flex: 0 0 auto;
    background: linear-gradient(135deg, var(--navy), var(--brand)); /* the ONLY gradient */
    display: grid; place-items: center;
    box-shadow: 0 6px 20px rgba(0,45,91,0.55), inset 0 1px 0 rgba(255,255,255,0.12);
  }
  .brandbar .name { font-size: 18px; font-weight: 700; letter-spacing: -0.01em; color: var(--white); }
  .brandbar .sub  { font-size: 13px; color: var(--muted); margin-top: 1px; }
  .ver {
    margin-left: auto; display: inline-flex; align-items: center; gap: 8px;
    font-size: 14px; font-weight: 600; color: var(--text);
    border: 1px solid var(--line-2); border-radius: 999px; padding: 7px 15px; background: var(--card);
  }
  .ver .pulse { width: 7px; height: 7px; border-radius: 50%; background: var(--brand);
                box-shadow: 0 0 0 3px rgba(0,128,201,0.18); }
  .ver .mono { font-size: 13px; color: var(--brand); }

  .eyebrow { font-size: 15px; color: var(--muted); letter-spacing: 0.02em; }
  .eyebrow b { color: var(--brand); font-weight: 600; }
  .lede { font-size: 19.5px; line-height: 1.5; color: var(--muted); font-weight: 450; }
  .lede b { color: var(--text); font-weight: 600; }

  .chips { display: flex; flex-wrap: wrap; gap: 10px; }
  .chip {
    font-size: 14.5px; font-weight: 550; color: var(--text);
    border: 1px solid var(--line-2); border-radius: 9px; padding: 8px 14px;
    background: var(--card); letter-spacing: 0.01em;
  }

  .vitem { display: inline-flex; align-items: center; gap: 9px; font-size: 15px; font-weight: 600; color: var(--text); }

  .foot { margin-top: auto; display: flex; align-items: center; gap: 13px;
          font-size: 14.5px; color: var(--dim); position: relative; z-index: 2; }
  .foot b { color: var(--muted); font-weight: 600; }
  .foot .sep { color: var(--line-2); }

  /* --- Hero split --- */
  .split { position: relative; z-index: 2; margin-top: 46px;
           display: grid; grid-template-columns: 468px 1fr; gap: 42px; align-items: start; }
  h1.hero { font-size: 60px; line-height: 1.05; font-weight: 800; letter-spacing: -0.032em;
            color: var(--white); margin-top: 20px; }
  h1.hero .l2 { color: var(--muted); }
  .split .lede { margin-top: 22px; max-width: 440px; }
  .split .chips { margin-top: 30px; }
  .verified { display: flex; align-items: center; gap: 22px; margin-top: 24px; }

  /* --- Editor card (hero) --- */
  .editor { border: 1px solid var(--line-2); border-radius: 15px; overflow: hidden; background: var(--panel);
            box-shadow: 0 24px 60px rgba(2,6,15,0.55), 0 2px 0 rgba(255,255,255,0.02) inset; }
  .editor .bar { display: flex; align-items: center; gap: 9px; padding: 13px 17px;
                 background: var(--panel-bar); border-bottom: 1px solid var(--line); }
  .editor .dots { display: flex; gap: 7px; }
  .editor .dots i { width: 11px; height: 11px; border-radius: 50%; background: #223047; display: inline-block; }
  .editor .tab { margin-left: 8px; font-size: 13px; color: var(--muted); display: inline-flex; align-items: center; gap: 8px; }
  .editor .tab .fileico { color: var(--brand); }
  .editor .tabpath { margin-left: auto; font-size: 12.5px; color: var(--dim); }
  .code { display: flex; padding: 22px 6px 24px 0; font-size: 17px; line-height: 29px; min-width: 0; }
  .gutter { flex: 0 0 auto; text-align: right; padding: 0 18px 0 20px; white-space: pre; color: var(--syn-line); user-select: none; }
  .lines { flex: 1 1 auto; min-width: 0; white-space: pre; overflow: hidden; }
  .k { color: var(--syn-key); } .tag { color: var(--syn-tag); font-weight: 600; } .at { color: var(--syn-attr); }
  .s { color: var(--syn-str); } .p { color: var(--syn-punc); } .f { color: var(--syn-fence); } .id { color: var(--text); }
  .install { margin-top: 14px; display: flex; align-items: center; gap: 12px; border: 1px solid var(--line);
             border-radius: 12px; padding: 14px 18px; background: rgba(15,24,38,0.7); }
  .install .prompt { color: var(--brand); font-size: 17px; }
  .install .cmd { font-size: 17px; color: var(--text); } .install .cmd .pkg { color: var(--muted); }
  .install .copy { margin-left: auto; color: var(--dim); display: inline-flex; }

  /* --- Big figure headline (catalog) --- */
  .figure { position: relative; z-index: 2; margin-top: 26px; }
  .figure .n { font-size: 82px; font-weight: 800; letter-spacing: -0.035em; line-height: 1; color: var(--white); }
  .figure .n b { color: var(--brand); font-weight: 800; }
  .figure .k { font-size: 20px; color: var(--muted); font-weight: 500; margin-top: 10px; }
  .figure .k .b { color: var(--text); font-weight: 600; }

  /* --- Category grid (catalog) --- */
  .catgrid { position: relative; z-index: 2; margin-top: 26px; flex: 1;
             display: grid; grid-template-columns: repeat(3, 1fr); gap: 13px; align-content: start; }
  .catcard { display: flex; align-items: center; justify-content: space-between;
             border: 1px solid var(--line-2); border-radius: 12px; padding: 13px 18px; background: var(--card); }
  .catname { font-size: 18px; font-weight: 600; color: var(--text); }
  .catcount { font-family: "SF Mono", ui-monospace, Menlo, monospace; font-size: 18px; font-weight: 700;
              color: var(--brand); min-width: 38px; text-align: right; }

  /* --- a11y / gdpr --- */
  .a11ybody { position: relative; z-index: 2; flex: 1;
              display: flex; flex-direction: column; justify-content: center; gap: 40px; }
  .badges { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .badge { border: 1px solid var(--line-2); border-radius: 16px; padding: 24px 26px; background: var(--card); }
  .badge .t { display: flex; align-items: center; gap: 12px; font-size: 25px; font-weight: 800; color: var(--white); }
  .badge .s { font-size: 16px; color: var(--muted); margin-top: 8px; margin-left: 34px; }
  .checklist { display: grid; grid-template-columns: 1fr 1fr; gap: 20px 44px; }
  .cli { display: flex; align-items: center; gap: 15px; font-size: 21px; font-weight: 500; color: var(--text); padding: 6px 0; }
  .cli code { font-family: "SF Mono", ui-monospace, Menlo, monospace; font-size: 18px; color: var(--syn-key); }
`;

// --- SVG helpers -------------------------------------------------------------
const LOGO = /* html */ `
  <div class="logo">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4"
         stroke-linecap="round" stroke-linejoin="round">
      <polyline points="8 7 3 12 8 17"></polyline><polyline points="16 7 21 12 16 17"></polyline>
    </svg>
  </div>`;

const check = (size = 20) => /* html */ `
  <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="var(--ok)" stroke-width="2.8"
       stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`;

const fileIcon = /* html */ `
  <svg class="fileico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>`;

const copyIcon = /* html */ `
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
       stroke-linecap="round" stroke-linejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;

const brandbar = (name, sub) => /* html */ `
  <div class="brandbar">
    ${LOGO}
    <div><div class="name">${name}</div><div class="sub">${sub}</div></div>
    <div class="ver"><span class="pulse"></span>@wendermedia/astro-components&nbsp;<span class="mono">v${VERSION}</span></div>
  </div>`;

const shell = (inner) =>
  `<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body><div class="stage">${inner}</div></body></html>`;

// --- Banner 1: hero (real code) ---------------------------------------------
const CODE_LINES = [
  `<span class="f">---</span>`,
  `<span class="k">import</span> <span class="p">{</span>`,
  `  <span class="tag">HeroSection</span><span class="p">,</span>`,
  `  <span class="tag">PricingSection</span><span class="p">,</span>`,
  `<span class="p">}</span> <span class="k">from</span> <span class="s">'@wendermedia/astro-components/sections'</span>`,
  `<span class="f">---</span>`,
  ``,
  `<span class="p">&lt;</span><span class="tag">HeroSection</span>`,
  `  <span class="at">title</span><span class="p">=</span><span class="s">"${TOTAL} Astro components"</span>`,
  `  <span class="at">cta</span><span class="p">=</span><span class="s">"Jetzt anfragen"</span>`,
  `<span class="p">/&gt;</span>`,
  `<span class="p">&lt;</span><span class="tag">PricingSection</span> <span class="at">plans</span><span class="p">={</span><span class="id">plans</span><span class="p">}</span> <span class="at">locale</span><span class="p">=</span><span class="s">"de"</span> <span class="p">/&gt;</span>`,
];
const gutter = CODE_LINES.map((_, i) => i + 1).join('\n');
const codeLines = CODE_LINES.join('\n');
const techChips = ['Astro 6 · 7', 'Tailwind 4', 'TypeScript 5', 'Node 22.12+']
  .map((t) => `<span class="chip">${t}</span>`)
  .join('');

const heroHTML = shell(/* html */ `
  ${brandbar('Wender Media', 'Web Agency · Halle (Saale), Germany')}
  <div class="split">
    <div>
      <div class="eyebrow">The <b>Wender Media</b> Astro building blocks</div>
      <h1 class="hero">${TOTAL} Astro components,<br/><span class="l2">one import away.</span></h1>
      <p class="lede">
        Accessible, GDPR-compliant, fully design-tokened sections and UI primitives
        across <b>${CATEGORY_COUNT} categories</b> — drop them into any Astro&nbsp;6 or&nbsp;7 project.
      </p>
      <div class="chips">${techChips}</div>
      <div class="verified">
        <span class="vitem">${check()} WCAG 2.1 AA</span>
        <span class="vitem">${check()} GDPR / DSGVO</span>
      </div>
    </div>
    <div>
      <div class="editor">
        <div class="bar">
          <span class="dots"><i></i><i></i><i></i></span>
          <span class="tab">${fileIcon} index.astro</span>
          <span class="tabpath mono">src/pages</span>
        </div>
        <div class="code mono"><div class="gutter">${gutter}</div><div class="lines">${codeLines}</div></div>
      </div>
      <div class="install mono">
        <span class="prompt">$</span>
        <span class="cmd">npm i <span class="pkg">@wendermedia/astro-components</span></span>
        <span class="copy">${copyIcon}</span>
      </div>
    </div>
  </div>
  <div class="foot"><b>astro.wendermedia.com</b><span class="sep">•</span>
    Live playbook — browse every component with props &amp; live previews</div>
`);

// --- Banner 2: component catalog --------------------------------------------
const catCards = CATEGORIES.map(
  (c) => `<div class="catcard"><span class="catname">${c.name}</span><span class="catcount">${c.count}</span></div>`
).join('');

const componentsHTML = shell(/* html */ `
  ${brandbar('Component catalog', 'One named import per barrel')}
  <div class="figure">
    <div class="n"><b>${TOTAL}</b> components</div>
    <div class="k">across <span class="b">${CATEGORY_COUNT} categories</span> — tree-shakeable, one import per barrel</div>
  </div>
  <div class="catgrid">${catCards}</div>
  <div class="foot mono" style="font-size:13.5px">
    <span style="color:var(--syn-key)">import</span>&nbsp;<span style="color:var(--syn-punc)">{</span>&nbsp;<span style="color:var(--syn-tag)">PricingSection</span>&nbsp;<span style="color:var(--syn-punc)">}</span>&nbsp;<span style="color:var(--syn-key)">from</span>&nbsp;<span style="color:var(--syn-str)">'@wendermedia/astro-components/sections'</span>
  </div>
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
  .map((t) => `<div class="cli">${check(22)}<span>${t}</span></div>`)
  .join('');

const a11yHTML = shell(/* html */ `
  ${brandbar('Accessible & privacy-first', 'by default, in every component')}
  <div class="a11ybody">
    <div class="badges">
      <div class="badge">
        <div class="t">${check(26)} WCAG 2.1 AA</div>
        <div class="s">BFSG 2025 ready — tested, not claimed</div>
      </div>
      <div class="badge">
        <div class="t">${check(26)} GDPR / DSGVO</div>
        <div class="s">DSGVO Art. 13 — no trackers by default</div>
      </div>
    </div>
    <div class="checklist">${a11yItems}</div>
  </div>
  <div class="foot"><b>${TOTAL} components</b><span class="sep">•</span>
    Accessibility is not an add-on — it ships in every component</div>
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
  // Quantize in place — flat surfaces crush to ~1/5 size with no visible loss.
  let note = '';
  try {
    const before = statSync(dest).size;
    execFileSync('pngquant', ['--quality=72-94', '--speed', '1', '--strip', '--force', '--output', dest, dest]);
    const after = statSync(dest).size;
    note = ` (${(before / 1e6).toFixed(1)}MB → ${(after / 1e3).toFixed(0)}KB)`;
  } catch {
    /* pngquant not installed — keep the full-size PNG */
  }
  console.info(`  ✓ ${b.file}${note}`);
}

await browser.close();
console.info(`\nDone — 3 banners regenerated for v${VERSION} (${TOTAL} components / ${CATEGORY_COUNT} categories).`);
