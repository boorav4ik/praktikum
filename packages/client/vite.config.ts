import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
dotenv.config()

// https://vitejs.dev/config/
export default defineConfig(({ ssrBuild }) => {
  // { mode: 'production', command: 'build' }
  const plugins = [react()]

  return ssrBuild
    ? {
        plugins,
        build: {
          lib: {
            entry: 'src/entry-server.tsx',
            name: 'Client',
            formats: ['cjs'],
          },
          outDir: 'dist/ssr',
          minify: false,
        },
      }
    : {
        server: { port: Number(process.env.CLIENT_PORT) || 3000 },
        define: { __SERVER_PORT__: process.env.SERVER_PORT || 3001 },
        plugins,
        minify: false,
      }
})
