import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy';
// https://vitejs.dev/config/
/** @type {import('vite').userConfig} */
export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
})
