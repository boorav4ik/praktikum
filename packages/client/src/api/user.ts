import { createAsyncThunk } from '@reduxjs/toolkit'
import host from './config'
import { ChangePasswordProps, FileProps, User } from 'storeAuth/interfaces'
import { ApiEndPoints } from './config'

export const GetUser = createAsyncThunk('user/getuser', async (_, thunkAPI) => {
  try {
    const response = await host.get<User[]>(ApiEndPoints.Auth.UserInfo)
    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось получить данные пользователя')
  }
})

export const ChangeProfile = createAsyncThunk(
  'user/changeProfile',
  async (data: User, thunkAPI) => {
    try {
      const response = await host.put<User[]>(
        ApiEndPoints.User.UpdateProfile,
        data
      )
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось обновить данные пользователя')
    }
  }
)

export const ChangeAvatar = createAsyncThunk(
  'user/changeAvatar',
  async (data: FileProps, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
      const formData = new FormData()
      formData.append('avatar', data.info as Blob)
      const response = await host.put<User[]>(
        ApiEndPoints.User.UpdateProfileAvatar,
        formData,
        config
      )
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось обновить аватар пользователя')
    }
  }
)

export const ChangePassword = createAsyncThunk(
  'user/changePassword',
  async (data: ChangePasswordProps, thunkAPI) => {
    try {
      const response = await host.put<User[]>(
        ApiEndPoints.User.UpdatePassword,
        data
      )
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось обновить пароль')
    }
  }
)
