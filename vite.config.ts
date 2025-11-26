import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { compression } from 'vite-plugin-compression2'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),

    // Gzip compression
    compression({
      include: [/\.(js|mjs|json|css|html)$/],
      threshold: 1024,
    }),

    // Bundle analysis (only in build mode with analyze flag)
    mode === 'production' && process.env.ANALYZE === 'true' && visualizer({
      filename: './dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),

  build: {
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion', 'gsap', '@studio-freight/lenis'],
          'ui-vendor': ['zustand', 'lucide-react', 'react-icons'],
        },
      },
    },

    // Target modern browsers for smaller bundles
    target: 'esnext',

    // Minification (Vite handles terser options internally)
    minify: 'terser',

    // Source maps for debugging
    sourcemap: mode === 'production' ? 'hidden' : true,

    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },

  // Esbuild options (used during dev and for minification)
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },

  // Path aliases for cleaner imports
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@types': path.resolve(__dirname, './src/types'),
      '@store': path.resolve(__dirname, './src/store'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@config': path.resolve(__dirname, './src/config'),
    },
  },

  // Development server configuration
  server: {
    port: 3000,
    open: true,
    cors: true,
  },

  // Preview server configuration
  preview: {
    port: 4173,
    open: true,
  },
}))
