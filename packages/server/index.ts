import dotenv from 'dotenv'
import cors from 'cors'
import fs from 'fs'
import path from 'path'

dotenv.config()

import express from 'express'
// import { createClientAndConnect } from './db'

function startServer() {
  const app = express()
  app.use(cors())
  const port = Number(process.env.SERVER_PORT) || 3001

  // createClientAndConnect()

  app.get('/api', (_, res) => {
    res.json('👋 Howdy from the server :)')
  })

  const distPath = path.dirname(require.resolve('client/dist/index.html'))
  const ssrClientPath = require.resolve('client/ssr-dist/client.cjs')

  app.use('/assets', express.static(path.resolve(distPath, 'assets')))

  app.use('*', async (_, res, next) => {
    try {
      const template = fs.readFileSync(
        path.resolve(distPath, 'index.html'),
        'utf-8'
      )
      const { render } = await import(ssrClientPath)
      const appHtml = await render({}, 'sss')
      const html = template.replace('<!--ssr-outlet-->', appHtml)
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (error) {
      next(error)
    }
  })

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
  })
}

startServer()
