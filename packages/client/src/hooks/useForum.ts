import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { useAppDispatch } from 'store/hooks'
import {
  CreateComment,
  GetAllTopics,
  GetTheme,
  GetTopicByTheme,
  CreateNewTopic,
  GetCommentsForTopic,
  DeleteTopic,
  DeleteComment,
} from 'api/forum'
import { ForumActions } from './forumActions'
import { ForumState, updateComments } from 'store/slices/forum'

export function useForum(): [ForumState, ForumActions] {
  const forum = useSelector((state: RootState) => state.forum)
  const dispatch = useAppDispatch()

  return [
    forum,
    {
      getTheme() {
        dispatch(GetTheme())
      },
      getAllTopics() {
        dispatch(GetAllTopics())
      },
      getTopicByTheme(id) {
        dispatch(GetTopicByTheme(id))
      },
      createComment(data) {
        dispatch(CreateComment(data))
      },
      createNewTopic(themeData) {
        dispatch(CreateNewTopic(themeData))
      },
      updateComments(comments) {
        dispatch(updateComments(comments))
      },
      getCommentsForTopic(id) {
        dispatch(GetCommentsForTopic(id))
      },
      deleteTopic(data) {
        dispatch(DeleteTopic(data))
      },
      deleteComment(data) {
        dispatch(DeleteComment(data))
      },
    },
  ]
}
