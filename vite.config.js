import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

const pages = {
  main: resolve(__dirname, 'index.html'),
  legal: resolve(__dirname, 'legal.html'),
};

// PAGE solo se usa para generar vistas previas de una sola pagina
const only = process.env.PAGE;

export default defineConfig({
  build: {
    outDir: only ? `dist-${only}` : 'dist',
    rollupOptions: { input: only ? { [only]: pages[only] } : pages },
  },
});
