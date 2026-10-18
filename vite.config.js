import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const pages = {
  main: resolve(import.meta.dirname, 'index.html'),
  legal: resolve(import.meta.dirname, 'legal.html'),
};

// PAGE solo se usa para generar vistas previas de una sola página
const only = process.env.PAGE;

export default defineConfig({
  build: {
    outDir: only ? `dist-${only}` : 'dist',
    rollupOptions: { input: only ? { [only]: pages[only] } : pages },
  },
});
