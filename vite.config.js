import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative paths, so the app works from any URL with no hardcoded subpath
  base: './',
  plugins: [react()],
})
