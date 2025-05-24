import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures assets use relative paths (important on Vercel)
  build: {
    outDir: 'dist' // Ensures Vercel looks in the right folder
  }
})
