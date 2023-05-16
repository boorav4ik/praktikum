import type { ModelAttributes } from 'sequelize'
import { DataType, Model } from 'sequelize-typescript'

export interface Theme {
  id?: string
  theme: string
}

export const topicTheme: ModelAttributes<Model, Theme> = {
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
