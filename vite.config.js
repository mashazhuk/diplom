import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path, { resolve } from "path";
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'


export default defineConfig({
    server: {
        hmr: {
            host: 'localhost'
        }
    },
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        VueI18nPlugin({
            path: resolve(__dirname, "src/locales"),
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js/src')
        }
    }
});
