import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ForumComments, ForumTheme, ForumTopic } from './interfaces'
import {
  CreateComment,
  GetAllTopics,
  GetTheme,
  GetTopicByTheme,
  CreateNewTopic,
  GetCommentsForTopic,
  DeleteComment,
  DeleteTopic,
} from 'api/forum'

export type ForumState = {
  themes: ForumTheme[]
  topics: ForumTopic[]
  comments: ForumComments[]
  isLoading: boolean
  error?: string
}

const initialState: ForumState = {
  themes: [],
  topics: [],
  comments: [],
  isLoading: false,
}

export const forumSlise = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    updateComments(state, action) {
      state.comments = action.payload
    },
  },
  extraReducers: {
    [GetTheme.fulfilled.type]: (state, action: PayloadAction<ForumTheme[]>) => {
      state.isLoading = false
      state.error = ''
      state.themes = action.payload
    },
    [GetTheme.pending.type]: state => {
      state.isLoading = true
    },
    [GetTheme.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    [GetAllTopics.fulfilled.type]: (
      state,
      action: PayloadAction<ForumTopic[]>
    ) => {
      state.isLoading = false
      state.error = ''
      state.topics = action.payload
    },
    [GetAllTopics.pending.type]: state => {
      state.isLoading = true
    },
    [GetAllTopics.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    [GetTopicByTheme.fulfilled.type]: (
      state,
      action: PayloadAction<ForumTopic[]>
    ) => {
      state.isLoading = false
      state.error = ''
      state.topics = action.payload
    },
    [GetTopicByTheme.pending.type]: state => {
      state.isLoading = true
    },
    [GetTopicByTheme.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    [CreateComment.fulfilled.type]: (
      state,
      action: PayloadAction<ForumComments>
    ) => {
      state.isLoading = false
      state.error = ''
      state.comments.push(action.payload)
    },
    [CreateComment.pending.type]: state => {
      state.isLoading = true
    },
    [CreateComment.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    [CreateNewTopic.fulfilled.type]: (
      state,
      action: PayloadAction<ForumTopic>
    ) => {
      state.isLoading = false
      state.error = ''
      state.topics.push(action.payload)
    },
    [CreateNewTopic.pending.type]: state => {
      state.isLoading = true
    },
    [CreateNewTopic.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    [GetCommentsForTopic.fulfilled.type]: (
      state,
      action: PayloadAction<ForumComments[]>
    ) => {
      state.isLoading = false
      state.error = ''
      state.comments = action.payload
    },
    [GetCommentsForTopic.pending.type]: state => {
      state.isLoading = true
    },
    [GetCommentsForTopic.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false
      state.error = action.payload
    },
    [DeleteTopic.fulfilled.type]: (
      state,
      action: PayloadAction<ForumTopic[]>
    ) => {
      state.isLoading = false
      state.error = ''
      state.topics = action.payload
    },
    [DeleteTopic.pending.type]: state => {
      state.isLoading = true
    },
    [DeleteTopic.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    [DeleteComment.fulfilled.type]: (
      state,
      action: PayloadAction<ForumComments[]>
    ) => {
      state.isLoading = false
      state.error = ''
      state.comments = action.payload
    },
    [DeleteComment.pending.type]: state => {
      state.isLoading = true
    },
    [DeleteComment.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const forumReducer = forumSlise.reducer
export const { updateComments } = forumSlise.actions
