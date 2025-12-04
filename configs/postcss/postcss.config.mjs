/**
 * PostCSS Configuration - WenderMedia
 *
 * Production-ready PostCSS config.
 * Copy to your project root as postcss.config.mjs
 */

export default {
  plugins: {
    // Tailwind CSS
    tailwindcss: {},

    // Autoprefixer for browser compatibility
    autoprefixer: {},

    // CSS Nano for production minification
    ...(process.env.NODE_ENV === 'production'
      ? {
          cssnano: {
            preset: [
              'default',
              {
                discardComments: {
                  removeAll: true,
                },
                normalizeWhitespace: true,
                colormin: true,
                reduceTransforms: true,
              },
            ],
          },
        }
      : {}),
  },
};
