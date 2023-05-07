export interface Record {
  data: {
    name: string | null | undefined
    avatar?: string
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
