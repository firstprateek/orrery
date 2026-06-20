import { defineConfig } from 'vitest/config'

// `base` is '/orrery/' for production builds (GitHub Pages project site) but '/'
// in dev so the local server works at the root.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/orrery/' : '/',
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
}))
