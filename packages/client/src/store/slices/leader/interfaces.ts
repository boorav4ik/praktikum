export interface Record {
  data: {
    name: string
    avatar: string
    score: number
  }
  ratingFieldName: string
  teamName: string
}

export interface dataGetRecord {
  ratingFieldName: string
  cursor: number
  limit: number
}
