import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import inject from '@rollup/plugin-inject'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  
  
  return {
    // vite config
    define: {
      "global": {},
      'process.env': {}
    },
    build: {
      rollupOptions: {
          plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],
      },
    },

  }
})





