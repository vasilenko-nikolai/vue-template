/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import 'jsdom';
import {visualizer} from "rollup-plugin-visualizer";
import viteCompression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      visualizer({
        emitFile: true,
        filename: "stats.html",
      }),
      viteCompression(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  test: {
    environment: 'jsdom',
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      }
    }
  },
  define: {
    'import.meta.vitest': 'undefined'
  }
})
