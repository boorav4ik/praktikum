import type { ModelAttributes } from 'sequelize'
import { DataType, Model } from 'sequelize-typescript'

export interface ITopic {
  id?: string
  title: string
  description: string
}

export const topicModel: ModelAttributes<Model, ITopic> = {
  id: {
    type: DataType.STRING,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataType.STRING,
    allowNull: false,
  },
  description: {
    type: DataType.STRING,
    allowNull: false,
  },
}
