import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import fs from 'fs'

dotenv.config()

// import { createClientAndConnect } from './db'
// createClientAndConnect()

import express from 'express'
async function startServer() {
  const app = express()
  const distPath = path.dirname(require.resolve('client/dist/index.html'))
  const ssrDistPath = require.resolve('client/dist/ssr/entry-server.cjs')
  const { render } = await import(ssrDistPath)

  app.use(cors())
  const port = Number(process.env.SERVER_PORT) || 3001

  app.get('/api', (_, res) => {
    res.json('👋 Howdy from the server :)')
  })

  app.use('/assets', express.static(path.resolve(distPath, 'assets')))

  app.use('*', async (req, res) => {
    const url = req.originalUrl
    console.log(url)

    const template = fs.readFileSync(
      path.resolve(distPath, 'index.html'),
      'utf-8'
    )

    const appHtml = await render(url)

    const content = template.replace(`<!--ssr-outlet-->`, appHtml)

    res.status(200).set({ 'Content-Type': 'text/html' }).end(content)
  })

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
  })
}

startServer()
