/**
 * Prettier Configuration - WenderMedia
 *
 * Consistent code formatting for all projects.
 * Copy to your project root as .prettierrc.mjs
 */

/** @type {import('prettier').Config} */
export default {
  // General
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'lf',

  // HTML/Astro
  htmlWhitespaceSensitivity: 'css',
  singleAttributePerLine: false,

  // Plugins (install separately)
  plugins: [
    // 'prettier-plugin-astro',
    // 'prettier-plugin-tailwindcss',
  ],

  // File-specific overrides
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: ['*.json', '*.jsonc'],
      options: {
        tabWidth: 2,
        trailingComma: 'none',
      },
    },
    {
      files: '*.md',
      options: {
        proseWrap: 'preserve',
      },
    },
    {
      files: '*.yaml',
      options: {
        tabWidth: 2,
        singleQuote: false,
      },
    },
  ],
};
