import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
   base: "/Skillify_Zone/04_netflix_clone/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
