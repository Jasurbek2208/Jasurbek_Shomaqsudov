import { defineConfig } from 'vite'
import million from 'million/compiler'
import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import viteImagemin from 'vite-plugin-imagemin'
import viteCompression from 'vite-plugin-compression'

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
    target: 'esnext',
    commonjsOptions: {
      ignoreDynamicRequires: true,
    },
    chunkSizeWarningLimit: 1024,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
  },
  plugins: [
    million?.vite({ auto: true }),
    react(),
    tsconfigPaths(),
    viteCompression(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.65, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
    legacy({ targets: ['defaults', 'not IE 11'] }),
  ],
  optimizeDeps: {
    include: ['react', 'react-dom'],
    esbuildOptions: {
      target: 'esnext',
      supported: { 'top-level-await': true },
    },
  },
  esbuild: {
    jsxInject: `import React from 'react';`,
  },
  json: {
    stringify: true,
  },
  css: {
    preprocessorOptions: {
      css: {
        charset: false,
      },
    },
  },
})