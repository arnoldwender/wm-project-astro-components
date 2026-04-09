/**
 * WenderMedia Astro Components CLI - Core Module
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const TEMPLATES = {
  default: {
    name: 'Default',
    description: 'Full-featured Astro project with all WenderMedia components',
    features: ['layout', 'seo', 'navigation', 'content', 'ecommerce', 'media', 'forms'],
  },
  minimal: {
    name: 'Minimal',
    description: 'Lightweight setup with core components only',
    features: ['layout', 'seo'],
  },
  ecommerce: {
    name: 'E-commerce',
    description: 'Optimized for online shops with GDPR compliance',
    features: ['layout', 'seo', 'navigation', 'ecommerce', 'forms'],
  },
  blog: {
    name: 'Blog',
    description: 'Content-focused setup with SEO optimization',
    features: ['layout', 'seo', 'navigation', 'content', 'media'],
  },
  landing: {
    name: 'Landing Page',
    description: 'Single-page marketing sites with animations',
    features: ['layout', 'seo', 'sections', 'forms'],
  },
};

const COLORS = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
};

function log(message, color = '') {
  console.log(`${color}${message}${COLORS.reset}`);
}

function logStep(step, message) {
  console.log(`${COLORS.cyan}[${step}]${COLORS.reset} ${message}`);
}

function logSuccess(message) {
  console.log(`${COLORS.green}✓${COLORS.reset} ${message}`);
}

function logError(message) {
  console.log(`${COLORS.red}✗${COLORS.reset} ${message}`);
}

/**
 * Create a new project with WenderMedia components
 */
export async function createProject(projectName, flags) {
  const template = TEMPLATES[flags.template] || TEMPLATES.default;
  const targetDir = path.resolve(process.cwd(), projectName);

  console.log('');
  log('╔══════════════════════════════════════════════════════════╗', COLORS.cyan);
  log('║     WenderMedia Astro Components - Project Creator       ║', COLORS.cyan);
  log('╚══════════════════════════════════════════════════════════╝', COLORS.cyan);
  console.log('');
  log(`Creating project: ${COLORS.bold}${projectName}${COLORS.reset}`);
  log(`Template: ${COLORS.bold}${template.name}${COLORS.reset}`);
  log(`Features: ${template.features.join(', ')}`, COLORS.dim);
  console.log('');

  // Check if directory exists
  try {
    await fs.access(targetDir);
    if (!flags.force) {
      logError(`Directory "${projectName}" already exists. Use --force to overwrite.`);
      process.exit(1);
    }
    logStep('1/6', 'Removing existing directory...');
    await fs.rm(targetDir, { recursive: true });
  } catch {
    // Directory doesn't exist, continue
  }

  // Create project structure
  logStep('1/6', 'Creating project structure...');
  await createProjectStructure(targetDir, template);
  logSuccess('Project structure created');

  // Generate configuration files
  logStep('2/6', 'Generating configuration files...');
  await generateConfigFiles(targetDir, projectName, template);
  logSuccess('Configuration files generated');

  // Generate component imports
  logStep('3/6', 'Setting up WenderMedia components...');
  await generateComponentSetup(targetDir, template);
  logSuccess('Components configured');

  // Generate example pages
  logStep('4/6', 'Creating example pages...');
  await generateExamplePages(targetDir, template);
  logSuccess('Example pages created');

  // Generate design tokens
  logStep('5/6', 'Setting up design system...');
  await generateDesignSystem(targetDir);
  logSuccess('Design system configured');

  // Install dependencies
  if (!flags.skipInstall) {
    logStep('6/6', `Installing dependencies with ${flags.packageManager}...`);
    try {
      const installCmd = flags.packageManager === 'yarn' ? 'yarn' :
                        flags.packageManager === 'pnpm' ? 'pnpm install' :
                        'npm install';
      await execAsync(installCmd, { cwd: targetDir });
      logSuccess('Dependencies installed');
    } catch (error) {
      logError(`Failed to install dependencies: ${error.message}`);
      log('You can install them manually by running:', COLORS.yellow);
      log(`  cd ${projectName} && ${flags.packageManager} install`, COLORS.dim);
    }
  } else {
    logStep('6/6', 'Skipping dependency installation');
  }

  // Final instructions
  console.log('');
  log('╔══════════════════════════════════════════════════════════╗', COLORS.green);
  log('║                    Setup Complete! 🎉                    ║', COLORS.green);
  log('╚══════════════════════════════════════════════════════════╝', COLORS.green);
  console.log('');
  log('Next steps:', COLORS.bold);
  console.log('');
  log(`  cd ${projectName}`, COLORS.cyan);
  log('  npm run dev', COLORS.cyan);
  console.log('');
  log('Available commands:', COLORS.bold);
  console.log('');
  log('  npm run dev        Start development server', COLORS.dim);
  log('  npm run build      Build for production', COLORS.dim);
  log('  npm run preview    Preview production build', COLORS.dim);
  log('  npm run test       Run tests', COLORS.dim);
  log('  npm run storybook  Open Storybook', COLORS.dim);
  console.log('');
  log('Documentation: https://github.com/arnoldwender/wm-project-astro-components', COLORS.blue);
  console.log('');
}

/**
 * Add a component to existing project
 */
export async function addComponent(componentName, flags) {
  log(`Adding component: ${componentName}`, COLORS.cyan);

  const componentsMap = {
    'video-player': '@wendermedia/astro-components/media',
    'product-card': '@wendermedia/astro-components/ecommerce',
    'cart': '@wendermedia/astro-components/ecommerce',
    'wishlist': '@wendermedia/astro-components/ecommerce',
    'breadcrumbs': '@wendermedia/astro-components/navigation',
    'cookie-consent': '@wendermedia/astro-components/accessibility',
    'seo-head': '@wendermedia/astro-components/seo',
    'schema-org': '@wendermedia/astro-components/seo',
    'contact-form': '@wendermedia/astro-components/forms',
  };

  const importPath = componentsMap[componentName.toLowerCase()];

  if (!importPath) {
    logError(`Unknown component: ${componentName}`);
    log('Available components:', COLORS.yellow);
    Object.keys(componentsMap).forEach(name => {
      log(`  - ${name}`, COLORS.dim);
    });
    process.exit(1);
  }

  log(`Import from: ${importPath}`, COLORS.dim);
  log('', COLORS.reset);
  log('Add this to your Astro component:', COLORS.bold);
  console.log('');
  log(`---`, COLORS.yellow);
  log(`import { ${toPascalCase(componentName)} } from '${importPath}';`, COLORS.yellow);
  log(`---`, COLORS.yellow);
  console.log('');
  log(`<${toPascalCase(componentName)} />`, COLORS.yellow);
  console.log('');
}

/**
 * List available templates
 */
export function listTemplates() {
  console.log('');
  log('Available Templates:', COLORS.bold);
  console.log('');

  Object.entries(TEMPLATES).forEach(([key, template]) => {
    log(`  ${COLORS.cyan}${key}${COLORS.reset} - ${template.name}`);
    log(`    ${template.description}`, COLORS.dim);
    log(`    Features: ${template.features.join(', ')}`, COLORS.dim);
    console.log('');
  });

  log('Usage:', COLORS.bold);
  log('  npx @wendermedia/astro-components create my-project --template=ecommerce', COLORS.dim);
  console.log('');
}

/**
 * Show help
 */
export function showHelp() {
  console.log('');
  log('WenderMedia Astro Components CLI', COLORS.bold);
  console.log('');
  log('Usage:', COLORS.cyan);
  log('  npx @wendermedia/astro-components <command> [options]', COLORS.dim);
  console.log('');
  log('Commands:', COLORS.cyan);
  log('  create <name>    Create a new Astro project', COLORS.dim);
  log('  add <component>  Add a component to existing project', COLORS.dim);
  log('  list             List available templates', COLORS.dim);
  console.log('');
  log('Options:', COLORS.cyan);
  log('  --template=<name>  Use a specific template (default, minimal, ecommerce, blog, landing)', COLORS.dim);
  log('  --force, -f        Overwrite existing directory', COLORS.dim);
  log('  --skip-install     Skip dependency installation', COLORS.dim);
  log('  --pm=<manager>     Package manager (npm, yarn, pnpm)', COLORS.dim);
  log('  --help, -h         Show this help message', COLORS.dim);
  console.log('');
  log('Examples:', COLORS.cyan);
  log('  npx @wendermedia/astro-components create my-shop --template=ecommerce', COLORS.dim);
  log('  npx @wendermedia/astro-components add video-player', COLORS.dim);
  console.log('');
}

// Helper functions
async function createProjectStructure(targetDir, template) {
  const dirs = [
    'src/pages',
    'src/layouts',
    'src/components',
    'src/styles',
    'src/content',
    'src/assets/images',
    'src/assets/fonts',
    'public',
  ];

  for (const dir of dirs) {
    await fs.mkdir(path.join(targetDir, dir), { recursive: true });
  }
}

async function generateConfigFiles(targetDir, projectName, template) {
  // package.json
  const packageJson = {
    name: projectName,
    type: 'module',
    version: '0.0.1',
    scripts: {
      dev: 'astro dev',
      start: 'astro dev',
      build: 'astro check && astro build',
      preview: 'astro preview',
      astro: 'astro',
      test: 'vitest',
      'test:coverage': 'vitest --coverage',
      storybook: 'storybook dev -p 6006',
      'build-storybook': 'storybook build',
    },
    dependencies: {
      astro: '^5.0.0',
      '@wendermedia/astro-components': '^2.0.0',
    },
    devDependencies: {
      '@astrojs/check': '^0.9.0',
      typescript: '^5.0.0',
      vitest: '^2.0.0',
    },
  };

  await fs.writeFile(
    path.join(targetDir, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );

  // astro.config.mjs
  const astroConfig = `import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com',
  integrations: [],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: \`@use "src/styles/tokens" as *;\`,
        },
      },
    },
  },
});
`;
  await fs.writeFile(path.join(targetDir, 'astro.config.mjs'), astroConfig);

  // tsconfig.json
  const tsConfig = {
    extends: 'astro/tsconfigs/strict',
    compilerOptions: {
      baseUrl: '.',
      paths: {
        '@/*': ['src/*'],
        '@components/*': ['src/components/*'],
        '@layouts/*': ['src/layouts/*'],
        '@styles/*': ['src/styles/*'],
      },
    },
  };
  await fs.writeFile(
    path.join(targetDir, 'tsconfig.json'),
    JSON.stringify(tsConfig, null, 2)
  );

  // .gitignore
  const gitignore = `# build output
dist/

# dependencies
node_modules/

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# environment variables
.env
.env.production

# macOS
.DS_Store

# IDE
.vscode/
.idea/
*.swp
*.swo

# Storybook
storybook-static/
`;
  await fs.writeFile(path.join(targetDir, '.gitignore'), gitignore);
}

async function generateComponentSetup(targetDir, template) {
  const imports = template.features.map(f => `// import { ... } from '@wendermedia/astro-components/${f}';`).join('\n');

  const setupFile = `/**
 * WenderMedia Components Setup
 *
 * Import components from @wendermedia/astro-components as needed.
 * See: https://github.com/arnoldwender/wm-project-astro-components
 */

${imports}

// Example imports:
// import { VideoPlayer, AudioPlayer } from '@wendermedia/astro-components/media';
// import { Cart, ProductCard, Wishlist } from '@wendermedia/astro-components/ecommerce';
// import { SEOHead, SchemaOrg } from '@wendermedia/astro-components/seo';
// import { CookieConsent, SkipToContent } from '@wendermedia/astro-components/accessibility';

export {};
`;
  await fs.writeFile(path.join(targetDir, 'src/components/setup.ts'), setupFile);
}

async function generateExamplePages(targetDir, template) {
  // Base layout
  const baseLayout = `---
/**
 * Base Layout - WenderMedia Astro Project
 */
import { SEOHead, SchemaOrg } from '@wendermedia/astro-components/seo';
import { CookieConsent, SkipToContent } from '@wendermedia/astro-components/accessibility';
import '../styles/global.css';

interface Props {
  title: string;
  description?: string;
}

const { title, description = '' } = Astro.props;
---

<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <SEOHead
      title={title}
      description={description}
      siteName="WenderMedia Project"
    />
    <SchemaOrg
      type="WebSite"
      name="WenderMedia Project"
      url={Astro.site?.toString() || ''}
    />
  </head>
  <body>
    <SkipToContent targetId="main-content" />
    <slot name="header" />
    <main id="main-content">
      <slot />
    </main>
    <slot name="footer" />
    <CookieConsent
      showSettings={true}
      analyticsEnabled={false}
      marketingEnabled={false}
    />
  </body>
</html>
`;
  await fs.writeFile(path.join(targetDir, 'src/layouts/BaseLayout.astro'), baseLayout);

  // Index page
  const indexPage = `---
/**
 * Homepage - WenderMedia Astro Project
 */
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Willkommen" description="WenderMedia Astro Components Demo">
  <section class="hero">
    <h1>WenderMedia Astro Components</h1>
    <p>GDPR-compliant, accessible components for modern web development.</p>
    <div class="hero__actions">
      <a href="/docs" class="btn btn--primary">Documentation</a>
      <a href="/examples" class="btn btn--secondary">Examples</a>
    </div>
  </section>

  <section class="features">
    <h2>Features</h2>
    <div class="features__grid">
      <div class="feature-card">
        <h3>GDPR Compliant</h3>
        <p>Built-in cookie consent and privacy-first design.</p>
      </div>
      <div class="feature-card">
        <h3>WCAG 2.1 AA</h3>
        <p>Full accessibility support with BFSG compliance.</p>
      </div>
      <div class="feature-card">
        <h3>TypeScript</h3>
        <p>Complete type safety and IntelliSense support.</p>
      </div>
      <div class="feature-card">
        <h3>Performance</h3>
        <p>Optimized for Core Web Vitals and fast loading.</p>
      </div>
    </div>
  </section>
</BaseLayout>

<style>
  .hero {
    text-align: center;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  }

  .hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #1e293b;
  }

  .hero p {
    font-size: 1.25rem;
    color: #64748b;
    margin-bottom: 2rem;
  }

  .hero__actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .btn {
    padding: 0.875rem 2rem;
    border-radius: 0.5rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s;
  }

  .btn--primary {
    background: #0ea5e9;
    color: white;
  }

  .btn--primary:hover {
    background: #0284c7;
  }

  .btn--secondary {
    background: white;
    color: #1e293b;
    border: 2px solid #e2e8f0;
  }

  .btn--secondary:hover {
    border-color: #0ea5e9;
    color: #0ea5e9;
  }

  .features {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .features h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #1e293b;
  }

  .features__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .feature-card {
    padding: 1.5rem;
    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .feature-card h3 {
    margin-bottom: 0.5rem;
    color: #1e293b;
  }

  .feature-card p {
    color: #64748b;
    line-height: 1.6;
  }
</style>
`;
  await fs.writeFile(path.join(targetDir, 'src/pages/index.astro'), indexPage);
}

async function generateDesignSystem(targetDir) {
  const tokens = `/**
 * Design Tokens - WenderMedia Astro Project
 */

:root {
  /* Colors */
  --color-primary: #0ea5e9;
  --color-primary-dark: #0284c7;
  --color-secondary: #ef4444;
  --color-secondary-dark: #dc2626;

  --color-text: #1e293b;
  --color-text-muted: #64748b;
  --color-text-inverse: #ffffff;

  --color-bg: #ffffff;
  --color-bg-muted: #f8fafc;
  --color-bg-subtle: #f1f5f9;

  --color-border: #e2e8f0;
  --color-border-strong: #cbd5e1;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;

  /* Typography */
  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: ui-monospace, 'SF Mono', Menlo, Monaco, monospace;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;

  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;
}

/* Dark mode */
[data-theme="dark"] {
  --color-text: #f1f5f9;
  --color-text-muted: #94a3b8;
  --color-text-inverse: #1e293b;

  --color-bg: #0f172a;
  --color-bg-muted: #1e293b;
  --color-bg-subtle: #334155;

  --color-border: #334155;
  --color-border-strong: #475569;
}
`;
  await fs.writeFile(path.join(targetDir, 'src/styles/tokens.css'), tokens);

  // Global styles
  const globalStyles = `/**
 * Global Styles - WenderMedia Astro Project
 */

@import './tokens.css';

/* Reset */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-text);
  background: var(--color-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  min-height: 100vh;
}

img,
video {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: var(--color-primary);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Focus styles for accessibility */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Skip to content link */
.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  padding: var(--space-2) var(--space-4);
  background: var(--color-primary);
  color: var(--color-text-inverse);
  z-index: 9999;
}

.skip-link:focus {
  top: 0;
}
`;
  await fs.writeFile(path.join(targetDir, 'src/styles/global.css'), globalStyles);
}

function toPascalCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}
