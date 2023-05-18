import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import { dbConnect } from './db'
import { apiRouter } from './routing/index.router'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
const port = Number(process.env.SERVER_PORT) || 3001

async function init() {
  await dbConnect()
  app.use('/api', apiRouter)
  app.get('/', (_, res) => {
    res.json('👋 Howdy from the server :)')
  })

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
  })
}

init()
