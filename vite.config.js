import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],

  server: {
    host: true, 
    port: 5173,

    // Allow external hosts (required for ngrok)
    allowedHosts: [
      'c45b0c71be95.ngrok-free.app'
    ],

    // Optional but sometimes needed:
    strictPort: true,
    hmr: {
      host: 'c45b0c71be95.ngrok-free.app'
    }
  }
})
