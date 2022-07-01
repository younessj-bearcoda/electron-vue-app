import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.ELECTRON=="true" ? './' : ".",
  plugins: [vue()],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm-bundler.js',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: [
          '@import "variables.scss";',
          '@import "_helpers.scss";',
        ].join('\n'),
      },
    },
  },
})
