// import { Client } from 'pg'
import * as console from 'console'
import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_PORT,
  POSTGRES_HOST,
} = process.env

const options: SequelizeOptions = {
  username: POSTGRES_USER,
  host: POSTGRES_HOST ?? 'localhost',
  database: POSTGRES_DB,
  password: POSTGRES_PASSWORD,
  port: Number(POSTGRES_PORT),
  dialect: 'postgres'
}

export const sequelize = new Sequelize(options)
export const createClientAndConnect = async (): Promise<Sequelize | null> => {
  try {
    await sequelize.sync()

    // await client.connect()
    // const res = await client.query('SELECT NOW()')
    console.log('  ➜ 🎸 Connected to the database at:')
    // await client.end()
    //
    // return client
  } catch (e) {
    console.error('err createClientAndConnect',e)
  }

  return null
}
