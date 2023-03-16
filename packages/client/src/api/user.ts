import { createAsyncThunk } from '@reduxjs/toolkit'
import $host from '.'
import { User } from '../store/slices/auth/interfaces'
import { ApiEndPoints } from './config'

export const getUser = createAsyncThunk('user/getuser', async (_, thunkAPI) => {
  try {
    const response = await $host.get<User[]>(ApiEndPoints.Auth.UserInfo)
    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось получить данные пользователя')
  }
})
