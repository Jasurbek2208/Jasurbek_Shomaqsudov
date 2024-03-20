import { defineConfig } from 'vite'
import million from 'million/compiler'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  server: {
    port: 5173,
    host: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser',
    target: 'ESNext',
    commonjsOptions: {
      ignoreDynamicRequires: true,
    },
    manifest: true,
  },
  plugins: [million.vite({ auto: true }), react(), reactRefresh(), tsconfigPaths()],
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  esbuild: {
    jsxInject: `import React from 'react';`,
  },
})