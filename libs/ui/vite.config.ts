import react from '@vitejs/plugin-react'

import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'path'

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/ui',

  plugins: [react(), tsconfigPaths()],

  build: {
    outDir: '../../dist/libs/ui',
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui',
      fileName: 'index',
      formats: ['es'],
    },
    rolldownOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
})
