import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import { resolve } from 'path'

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/ui',

  plugins: [react(), nxViteTsPaths()],

  build: {
    outDir: '../../dist/libs/ui',
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
  // Vitest configuration moved to vite.config for compatibility
  // See: https://vitest.dev/guide/#configuration
  // @ts-expect-error: Vitest config requires 'test' at the top level, which is not part of the Vite UserConfig type.
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/libs/ui',
      provider: 'v8',
    },
  },
})
