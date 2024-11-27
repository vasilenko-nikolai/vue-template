/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import 'jsdom';
import {visualizer} from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), visualizer({
    emitFile: true,
    filename: "stats.html",
  })],
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
