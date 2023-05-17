import { createAsyncThunk } from '@reduxjs/toolkit'
import { ApiEndPoints, serverhost } from './config'
import {
  ForumComments,
  ForumTheme,
  ForumTopic,
} from 'store/slices/forum/interfaces'

export const GetTheme = createAsyncThunk(
  'forum/gettheme',
  async (_, thunkAPI) => {
    try {
      const response = await serverhost.get<ForumTheme[]>(
        ApiEndPoints.Forum.GetTheme
      )
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось получить темы форума')
    }
  }
)

export const GetAllTopics = createAsyncThunk(
  'forum/gettopic',
  async (_, thunkAPI) => {
    try {
      const response = await serverhost.get<ForumTopic[]>(
        ApiEndPoints.Forum.GetAllTopics
      )
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось получить все ветки форума')
    }
  }
)

export const GetTopicByTheme = createAsyncThunk(
  'forum/gettopicbyid',
  async (id: string, thunkAPI) => {
    try {
      const response = await serverhost.get<ForumTopic[]>(
        `${ApiEndPoints.Forum.GetTopicByTheme}${id}`
      )
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(
        'Не удалось получить ветку форума по теме'
      )
    }
  }
)

export const CreateComment = createAsyncThunk(
  'forum/createnewtheme',
  async (comment: ForumComments, thunkAPI) => {
    try {
      const response = await serverhost.post(
        ApiEndPoints.Forum.CreateComment,
        JSON.stringify(comment)
      )
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось создать комментарий')
    }
  }
)

export const CreateNewTopic = createAsyncThunk(
  'forum/createnewtopic',
  async (topic: ForumTopic, thunkAPI) => {
    try {
      const response = await serverhost.post(
        ApiEndPoints.Forum.CreateNewTopic,
        JSON.stringify(topic)
      )
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось создать новую ветку')
    }
  }
)

export const GetCommentsForTopic = createAsyncThunk(
  'forum/getcommentsfortopic',
  async (id: string, thunkAPI) => {
    try {
      const response = await serverhost.get<ForumTopic[]>(
        `${ApiEndPoints.Forum.GetAllComments}${id}`
      )
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(
        'Не удалось получить все комментарии по ветке'
      )
    }
  }
)

export const DeleteTopic = createAsyncThunk(
  'forum/deletetopic',
  async (data: ForumTopic, thunkAPI) => {
    try {
      const { id, id_theme } = data
      const response = await serverhost.delete<ForumTopic[]>(
        ApiEndPoints.Forum.DeleteTopic,
        { data: { id, id_theme } }
      )
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось удалить ветку форума')
    }
  }
)

export const DeleteComment = createAsyncThunk(
  'forum/deletecomment',
  async (data: ForumComments, thunkAPI) => {
    try {
      const { id, id_topic } = data
      const response = await serverhost.delete<ForumTopic[]>(
        ApiEndPoints.Forum.DeleteComment,
        { data: { id, id_topic } }
      )
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось удалить комментарий')
    }
  }
)
