import dotenv from 'dotenv'
import cors from 'cors'
import fs from 'fs'
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

  // const template = fs.readFileSync(
  //   require.resolve('client/index.html'),
  //   'utf-8'
  // )

  app.use('*', async () => {
    // const url = req.originalUrl
    // const transformIndexHtml =
    // console.log(template)
  })

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
  })
}

startServer()
