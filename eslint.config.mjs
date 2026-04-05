/**
 * ESLint Configuration - @wendermedia/astro-components
 *
 * Flat config for ESLint 9+ with Astro and TypeScript support.
 *
 * @copyright 2007-2026 Wender Media - Arnold Wender. MIT License.
 */

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,

  // Global ignores
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.storybook/**',
      'tokens/dist/**',
      'public/**',
      'configs/**',
      'templates/**',
      'bundles/**',
      'utilities/**',
      'integrations/**',
      'docs/**',
      'testing/astro-stub.ts',
    ],
  },

  // Node.js CLI files
  {
    files: ['cli/**/*.js'],
    languageOptions: {
      globals: {
        process: 'readonly',
        console: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        Buffer: 'readonly',
        URL: 'readonly',
      },
    },
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },

  // TypeScript
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },

  // Astro — frontmatter vars are used in template, ESLint can't see across boundary
  {
    files: ['**/*.astro'],
    rules: {
      'astro/no-set-html-directive': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-useless-assignment': 'off',
    },
  },

  // Global rules
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      'no-debugger': 'warn',
      'prefer-const': 'warn',
      'no-var': 'error',
      'no-empty': 'warn',
      'no-case-declarations': 'warn',
    },
  }
);
