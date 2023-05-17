import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import fs from 'fs'
dotenv.config()
// import { createServer as createViteServer } from 'vite'
// import type { ViteDevServer } from 'vite'

import { createProxyMiddleware } from 'http-proxy-middleware'
// TODO: db
// import { createClientAndConnect } from './db'
// createClientAndConnect()

import express from 'express'
import cookieParser from 'cookie-parser'
import { YandexAPIRepository } from './repository/YandexAPIRepository'
const port = Number(process?.env?.CLIENT_PORT) || 3001
// const isDev = () => process.env.NODE_ENV === 'development'
async function startServer() {
  console.log('port', port)
  const app = express()
  app.use(cors())
  // let vite: ViteDevServer | undefined
  const distPath = path.dirname(require.resolve('client/dist/index.html'))
  // const srcPath = path.dirname(require.resolve('client'))
  const ssrDistPath = require.resolve('client/dist-ssr/ssr.cjs')
  // if (isDev()) {
  //   vite = await createViteServer({
  //     server: { middlewareMode: true },
  //     root: srcPath,
  //     appType: 'custom',
  //   })
  //
  //   app.use(vite.middlewares)
  // }
  app.use(
    '/api/v2',
    createProxyMiddleware({
      changeOrigin: true,
      cookieDomainRewrite: {
        '*': '',
      },
      target: 'https://ya-praktikum.tech',
    })
  )

  app.get('/api', (_, res) => {
    res.json('👋 Howdy from the server :)')
  })

  app.use('/assets', express.static(path.resolve(distPath, 'assets')))
  app.use('/sw.js', (_, res) => res.sendFile(require.resolve('client/sw.js')))
  // @ts-ignore
  app.use('*',cookieParser(), async (req, res, next) => {
    const url = req.originalUrl
    try {
      const template = fs.readFileSync(
        path.resolve(distPath, 'index.html'),
        'utf-8'
      )
      const { render } = await import(ssrDistPath)
      const { html, css, state } = await render(url, new YandexAPIRepository(req.headers['cookie']))

      const content = template
        .replace('<!--ssr-outlet-->', html)
        .replace('<!--ssr-css-->', css)
        .replace('<!--ssr-state-->', state)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(content)
    } catch (error) {
      // if (isDev()) {
      //   vite!.ssrFixStacktrace(error as Error)
      // }
      next(error)
      // res.status(500).end((error as Error).stack)
    }
  })

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
  })
}

startServer()
