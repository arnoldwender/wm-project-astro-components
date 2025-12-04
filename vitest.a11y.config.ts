import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['**/*.a11y.{test,spec}.{js,mjs,cjs,ts,mts,cts}'],
    exclude: ['node_modules', 'dist'],
    setupFiles: ['./testing/setup.ts', './testing/a11y-setup.ts'],
    testTimeout: 10000,
  },
});
