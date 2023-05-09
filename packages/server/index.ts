import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import fs from 'fs'
dotenv.config()

// import { createClientAndConnect } from './db'
// createClientAndConnect()

import express from 'express'

const port = Number(process.env.SERVER_PORT) || 3001

async function startServer() {
  const app = express()

  const distPath = path.dirname(require.resolve('client/dist/index.html'))
  const ssrDistPath = require.resolve('client/dist-ssr/ssr.cjs')

  app.use(cors())

  app.get('/api', (_, res) => {
    res.json('👋 Howdy from the server :)')
  })

  app.use('/assets', express.static(path.resolve(distPath, 'assets')))
  app.use('/sw.js', (_, res) => res.sendFile(require.resolve('client/sw.js')))
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    const template = fs.readFileSync(
      path.resolve(distPath, 'index.html'),
      'utf-8'
    )
    try {
      const { render } = await import(ssrDistPath)
      const { html, css } = await render(url)

      const content = template
        .replace('<!--ssr-outlet-->', html)
        .replace('<!--ssr-css-->', css)

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
