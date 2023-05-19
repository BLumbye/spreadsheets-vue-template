import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import postcssNesting from 'postcss-nesting';
import path from 'node:path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    vue(),
    Pages(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/stores'],
      vueTemplate: true,
    }),
    Components({
      dts: 'src/components.d.ts',
    }),
  ],

  css: {
    postcss: {
      plugins: [postcssNesting, autoprefixer({})],
    },
  },
});
