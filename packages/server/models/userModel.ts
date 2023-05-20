import type { ModelAttributes } from 'sequelize'
import { DataType, Model } from 'sequelize-typescript'

export interface User {
  theme: string
  id: number
}

export const topicUser: ModelAttributes<Model, User> = {
  id: {
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  theme: {
    type: DataType.STRING,
    allowNull: false,
  },
}
