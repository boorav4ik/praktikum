import dotenv from 'dotenv'
import cors from 'cors'
import fs from 'fs'
import { createServer } from 'vite'
dotenv.config()

import express from 'express'
// import { createClientAndConnect } from './db'
// createClientAndConnect()

async function startServer() {
  const app = express()
  app.use(cors())
  const port = Number(process.env.SERVER_PORT) || 3001

  app.get('/api', (_, res) => {
    res.json('👋 Howdy from the server :)')
  })

  const template = fs.readFileSync(
    require.resolve('client/dist/client/index.html'),
    'utf-8'
  )

  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  })

  app.use(vite.middlewares)

  // app.use('/assets', express.static(path.resolve(distPath, 'assets')))

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl
    console.log(url)
    try {
      const { render } = await vite.ssrLoadModule(
        'client/dist/server/entry-server.cjs'
      )
      const appHtml = await render(url)
      const html = (await vite.transformIndexHtml(url, template)).replace(
        `<!--ssr-outlet-->`,
        appHtml
      )

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (error) {
      vite.ssrFixStacktrace(error as Error)
      next(error)
    }
  })

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
  })
}

startServer()
