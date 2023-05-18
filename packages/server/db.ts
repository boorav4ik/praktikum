import { topicModel } from './models/modelTopic'
import { ModelCtor, Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { Repository } from './types/Repository'
import { commentModel } from './models/modelComment'
import { topicUser } from './models/userModel'
import { topicTheme } from './models/modelTheme'
import { themeData } from './themeData'

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT } =
  process.env

const sequelizeOptions: SequelizeOptions = {
  host: 'localhost', //2048-postgresql-для докера localhost - для npm run dev:ssr
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  dialect: 'postgres',
}

export const sequelize = new Sequelize(sequelizeOptions)

export const Theme = sequelize.define('Theme', topicTheme, {})
export const Topic = sequelize.define('Topic', topicModel, {})
export const Comment = sequelize.define('Comment', commentModel, {})
export const User = sequelize.define('User', topicUser, {})

Theme.hasMany(Topic, { foreignKey: 'id_theme' })
Topic.belongsTo(Theme, { foreignKey: 'id_theme', targetKey: 'id' })

Topic.hasMany(Comment, { foreignKey: 'id_topic' })
Comment.belongsTo(Topic, { foreignKey: 'id_topic', targetKey: 'id' })

export const themeRepos = new Repository(Theme as ModelCtor)
export const topicRepos = new Repository(Topic as ModelCtor)
export const commentRepos = new Repository(Comment as ModelCtor)
export const userRepos = new Repository(User as ModelCtor)

export async function dbConnect() {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    console.log('Connection has been established successfully!')

    const themes = await themeRepos.getAll()
    themeData.map(async data => {
      const find = themes.findIndex(
        value => value.dataValues.theme === data.theme
      )
      if (find < 0) {
        const resTheme = await themeRepos.create(data)
        const newTopic = { ...data.topic, id_theme: resTheme.id }
        const resTopic = await topicRepos.create(newTopic)
        const newComment = {
          ...data.comment,
          id_topic: resTopic.id,
          id_theme: resTheme.id,
        }
        await commentRepos.create(newComment)
      }
    })
  } catch (error) {
    console.error('Unable to connect to the database: ', error)
  }
}
