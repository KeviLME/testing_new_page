import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Served from kevilme.github.io/testinf_new_page/ on GitHub Pages
  base: '/testinf_new_page/',
  plugins: [react()],
})
