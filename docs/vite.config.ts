import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueJSX from '@vitejs/plugin-vue-jsx';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), VueJSX()],
  base: '/tdesign-pro-component'
})
