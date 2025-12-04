/**
 * Config Presets Index - WenderMedia Astro Components
 *
 * Ready-to-use configuration files for common tools.
 *
 * Usage:
 * Copy the needed config files to your project root.
 *
 * Available configs:
 * - tailwind/tailwind.config.mjs - Tailwind CSS with custom design tokens
 * - prettier/.prettierrc.mjs - Prettier code formatting
 * - eslint/eslint.config.mjs - ESLint 9+ flat config
 * - postcss/postcss.config.mjs - PostCSS with Tailwind and optimization
 */

export const availableConfigs = [
  {
    name: 'Tailwind CSS',
    source: 'tailwind/tailwind.config.mjs',
    destination: 'tailwind.config.mjs',
    dependencies: ['tailwindcss', 'autoprefixer'],
    optionalDependencies: [
      '@tailwindcss/typography',
      '@tailwindcss/forms',
      '@tailwindcss/aspect-ratio',
    ],
  },
  {
    name: 'Prettier',
    source: 'prettier/.prettierrc.mjs',
    destination: '.prettierrc.mjs',
    dependencies: ['prettier'],
    optionalDependencies: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  },
  {
    name: 'ESLint',
    source: 'eslint/eslint.config.mjs',
    destination: 'eslint.config.mjs',
    dependencies: [
      'eslint',
      '@eslint/js',
      'typescript-eslint',
      'eslint-plugin-astro',
    ],
  },
  {
    name: 'PostCSS',
    source: 'postcss/postcss.config.mjs',
    destination: 'postcss.config.mjs',
    dependencies: ['postcss', 'autoprefixer'],
    optionalDependencies: ['cssnano'],
  },
];
