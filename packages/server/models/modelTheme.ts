import type { ModelAttributes } from 'sequelize'
import { DataType, Model } from 'sequelize-typescript'

export interface ITheme {
  id?: string
  theme: string
}

export const topicTheme: ModelAttributes<Model, ITheme> = {
  id: {
    type: DataType.STRING,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  theme: {
    type: DataType.STRING,
    allowNull: false,
  },
}
