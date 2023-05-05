import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: 'build',
  },
  esbuild: {
    jsxInject: `import React from 'react';`,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
});
