import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { readdirSync } from 'fs';
import ViteDTS from 'vite-plugin-dts';

const getComponentsNames = (baseUrl: string) => {
    const diries = readdirSync(baseUrl, { withFileTypes: true });
    return diries.map(item => item.name);
}

export default defineConfig({
    plugins: [Vue(), ViteDTS(
        {
            tsconfigPath: '../../tsconfig.build.json',
            outDir: 'dist/types'
        }
    )],
    build: {
        outDir: 'dist/es',
        lib: {
            entry: resolve(__dirname, './index.ts'),
            name: 'tdesign-pro-component',
            fileName: 'index',
            formats: ['es']
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                assetFileNames: (assetInfo: any) => {
                    if (assetInfo.name == 'style.css') return 'index.css';
                    return assetInfo.name as string;
                },
                manualChunks: (id) => {
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                    if (id.includes('/packages/hooks')) {
                        return 'hooks';
                    }

                    if (id.includes('/packages/utils')) {
                        return 'utils';
                    }

                    for (const name of getComponentsNames('../components')) {
                        if (id.includes(`/packages/components`)) {
                            const _name = id.split('/components')[1].split('/')[1];
                            if (_name === name) {
                                return name;
                            }
                        }
                    }
                }
            }
        }
    }
});