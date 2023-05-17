import type { ModelAttributes } from 'sequelize'
import { DataType, Model } from 'sequelize-typescript'

export interface Comment {
  id?: string
  id_topic: string
  id_theme: string
  text: string
  id_author: string
  author: string
}

export const commentModel: ModelAttributes<Model, Comment> = {
  id: {
    type: DataType.STRING,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  id_topic: {
    type: DataType.STRING,
    allowNull: false,
  },
  text: {
    type: DataType.STRING,
    allowNull: false,
  },
  id_theme: {
    type: DataType.STRING,
    allowNull: false,
  },
  id_author: {
    type: DataType.STRING,
    allowNull: false,
  },
  author: {
    type: DataType.STRING,
    allowNull: false,
  },
}
