import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

// https://vitejs.dev/config/
export default defineConfig(({ ssrBuild }) => {
  const plugins = [react()]
  const resolve = {
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      api: path.resolve(__dirname, './src/api'),
      pages: path.resolve(__dirname, './src/pages'),
      layouts: path.resolve(__dirname, './src/layouts'),
      components: path.resolve(__dirname, './src/components'),
      utils: path.resolve(__dirname, './src/utils'),
      static: path.resolve(__dirname, './src/static'),
      hoks: path.resolve(__dirname, './src/hoks'),
      hooks: path.resolve(__dirname, './src/hooks'),
      store: path.resolve(__dirname, './src/store'),
    },
  }

  return ssrBuild
    ? {
        plugins,
        resolve,
        build: {
          lib: { entry: './src/ssr.tsx', name: 'Client', formats: ['cjs'] },
          outDir: 'dist-ssr',
        },
      }
    : {
        plugins,
        resolve,
        server: { port: Number(process.env.CLIENT_PORT) || 3000 },
        define: { __SERVER_PORT__: process.env.SERVER_PORT },
      }
})
