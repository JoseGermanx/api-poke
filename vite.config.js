import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 5000,
  },
  build: {
    incremental: true,
    minify: true,
    strictPort: true
  }
})
