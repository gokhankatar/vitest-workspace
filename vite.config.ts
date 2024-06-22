import { defineConfig } from 'vite'
import vuetify from 'vite-plugin-vuetify'
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
  ],
  server: {
    open: true,
    hmr: true
  }
})
