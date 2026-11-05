import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const root = process.cwd();

const pages = {
  main: resolve(root, 'index.html'),
  legal: resolve(root, 'legal.html'),
};

const only = process.env.PAGE;

export default defineConfig({
  build: {
    outDir: only ? `dist-${only}` : 'dist',
    rollupOptions: { input: only ? { [only]: pages[only] } : pages },
  },
});
