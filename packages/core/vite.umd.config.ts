import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import VueJSX from '@vitejs/plugin-vue-jsx';

import { resolve } from 'path';
export default defineConfig({
    plugins: [Vue(), VueJSX()],
    build: {
        outDir: 'dist/umd',
        lib: {
            entry: resolve(__dirname, './index.ts'),
            name: 'tdesign-pro-component',
            fileName: 'index',
            formats: ['umd']
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue'
                },
                assetFileNames: (assetInfo: any) => {
                    if (assetInfo.name == 'style.css') return 'index.css';
                    return assetInfo.name as string;
                }
            }
        }
    }
})