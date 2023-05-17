import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import fs from 'fs'
dotenv.config()
import { createProxyMiddleware } from 'http-proxy-middleware'
// TODO: db
// import { createClientAndConnect } from './db'
// createClientAndConnect()

import express from 'express'
import cookieParser from 'cookie-parser'
import { YandexAPIRepository } from './repository/YandexAPIRepository'

const port = Number(process?.env?.CLIENT_PORT) || 3000

async function startServer() {
  const app = express()
  app.use(cors())

  const distPath = path.dirname(require.resolve('client/dist/index.html'))
  const ssrDistPath = require.resolve('client/dist-ssr/ssr.cjs')

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
      next(error)
    }
  })

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
  })
}

startServer()
