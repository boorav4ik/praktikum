import { Nullable } from 'utils/nullableType'
import { GridProps } from '@mui/material'

type NullableString = Nullable<string>

export interface ForumTheme {
  id?: NullableString
  theme: NullableString
  description: NullableString
  id_author: number | undefined
}

export interface ForumTopic {
  id?: NullableString
  title: NullableString
  description: NullableString
  id_theme: NullableString
  Comments?: ForumComments
}

export interface ForumComments {
  id?: NullableString
  id_topic: NullableString
  text: NullableString
  id_theme: NullableString
  id_author: NullableString | undefined
  author: NullableString | undefined
}

export type ThemeBranch = {
  id: number
  name: string
  branchName: string
}

export type Message = {
  id: number
  id_author: number
  author: string
  text: string
}

export type FullThemeBranch = ThemeBranch & {
  text: string
  messages: Message[]
}

export type ThemeBranchMessageProps = {
  gridProps?: GridProps
  messages: ForumComments
  color?: string
}
