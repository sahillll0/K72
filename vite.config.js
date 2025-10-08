import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  
  plugins: [
    react(),
    tailwindcss(),
    compression({
      algorithm: 'gzip',
      ext: '.gz'
    })
  ],
  base: './',
  build: {
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          gsap: ['gsap'],
          outDir: 'dist',
          assetsDir: 'assets',
          rollupOptions: {
            input: {
              main: './src/main.jsx'
            }
          }
        }
      }
    },
    sourcemap: false
  }
})