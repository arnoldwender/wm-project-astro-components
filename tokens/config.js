/**
 * Style Dictionary Configuration - WenderMedia Astro Components
 *
 * Builds design tokens from JSON source files to multiple output formats.
 *
 * Run: npm run tokens:build
 */

export default {
  source: ['tokens/src/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'tokens/dist/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/css'],
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'tokens/dist/',
      files: [
        {
          destination: '_tokens.scss',
          format: 'scss/variables',
          options: {
            outputReferences: true,
          },
        },
        {
          destination: '_tokens-map.scss',
          format: 'scss/map-deep',
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'tokens/dist/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
        },
        {
          destination: 'tokens.d.ts',
          format: 'typescript/es6-declarations',
        },
      ],
    },
    json: {
      transformGroup: 'js',
      buildPath: 'tokens/dist/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/nested',
        },
      ],
    },
  },
};
