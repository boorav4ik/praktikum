export interface Record {
  data: {
    name: string
    avatar: string
    score: string
  }
}

export interface dataGetRecord {
  ratingFieldName: string
  cursor: number
  limit: number
}
