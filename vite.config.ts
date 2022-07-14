import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve as pathResolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    base: process.env.ELECTRON == 'true' ? './' : '',
    server: {
        port: 3000,
    },
    plugins: [vue()],
    resolve: {
        alias: {
            '@': pathResolve(__dirname, './src'),
            vue: 'vue/dist/vue.esm-bundler.js',
            '~bootstrap': 'bootstrap',
        },
    },
})
