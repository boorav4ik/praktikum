import { ForumComments, ForumTopic } from 'store/slices/forum/interfaces'
import { Nullable } from 'utils/nullableType'
type NullableString = Nullable<string>

export interface ForumActions {
  getTheme: () => void
  getAllTopics: () => void
  getTopicByTheme: (id: string) => void
  createComment: (data: ForumComments) => void
  createNewTopic: (data: ForumTopic) => void
  updateComments: (comments: ForumComments) => void
  getCommentsForTopic: (id: string) => void
  deleteTopic: (data: ForumTopic) => void
  deleteComment: (data: ForumComments) => void
}
