/**
 * ESLint Configuration - WenderMedia
 *
 * Modern flat config for ESLint 9+.
 * Copy to your project root as eslint.config.mjs
 */

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default tseslint.config(
  // Base configs
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,

  // Global ignores
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.astro/**',
      '.vercel/**',
      '.netlify/**',
      'public/**',
      '*.min.js',
    ],
  },

  // TypeScript files
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
    },
  },

  // Astro files
  {
    files: ['**/*.astro'],
    rules: {
      'astro/no-set-html-directive': 'off',
      'astro/no-unused-css-selector': 'warn',
    },
  },

  // JavaScript files
  {
    files: ['**/*.js', '**/*.mjs'],
    rules: {
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },

  // Config files
  {
    files: ['*.config.{js,ts,mjs}', '.*.{js,mjs}'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },

  // Global rules
  {
    rules: {
      // Best Practices
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
      'no-duplicate-imports': 'error',
      'no-template-curly-in-string': 'error',
      'prefer-const': 'error',
      'prefer-template': 'warn',
      'no-var': 'error',

      // Style (covered by Prettier)
      'indent': 'off',
      'quotes': 'off',
      'semi': 'off',
      'comma-dangle': 'off',

      // Possible Errors
      'no-undef': 'error',
      'no-unreachable': 'error',
    },
  }
);
