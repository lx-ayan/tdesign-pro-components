import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueJSX from '@vitejs/plugin-vue-jsx';
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), VueJSX()],
  base: '//localhost:20000',
  server: {
    port: 20000,
    host: true,
    headers: {
      'access-control-allow-origin': '*'
    }
  }
})
