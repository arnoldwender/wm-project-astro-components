import { defineConfig } from 'vitest/config';

/**
 * Vite plugin to stub .astro component imports during testing.
 * Astro components contain mixed HTML/JS that Vite's parser can't handle.
 */
function astroStubPlugin() {
  return {
    name: 'astro-stub',
    enforce: 'pre' as const,
    resolveId(source: string) {
      if (source.endsWith('.astro')) {
        return '\0astro-stub';
      }
    },
    load(id: string) {
      if (id === '\0astro-stub') {
        return 'export default {}; export const Props = {};';
      }
    },
  };
}

export default defineConfig({
  plugins: [astroStubPlugin()],
  test: {
    globals: true,
    environment: 'happy-dom',
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}'],
    exclude: ['node_modules', 'dist', '.storybook'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.ts', 'utilities/**/*.ts'],
      exclude: ['**/*.d.ts', '**/*.test.ts', '**/*.spec.ts'],
    },
    setupFiles: ['./testing/setup.ts'],
  },
});
