import { createAsyncThunk } from '@reduxjs/toolkit'
import $host from '.'
import { Login, SignUp, User } from '../store/slices/auth/interfaces'
import { ApiEndPoints } from './config'

export const signin = createAsyncThunk(
  'user/signin',
  async ({ login, password }: Login, thunkAPI) => {
    try {
      await $host.post(ApiEndPoints.Auth.SignIn, {
        login,
        password,
      })
      const response = await $host.get<User[]>(ApiEndPoints.Auth.UserInfo)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось авторизоваться')
    }
  }
)

export const signup = createAsyncThunk(
  'user/signup',
  async (
    {
      first_name,
      second_name,
      display_name,
      login,
      email,
      password,
      phone,
    }: SignUp,
    thunkAPI
  ) => {
    try {
      await $host.post(ApiEndPoints.Auth.SignUp, {
        first_name,
        second_name,
        display_name,
        login,
        email,
        password,
        phone,
      })
      const response = await $host.get<User[]>(ApiEndPoints.Auth.UserInfo)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось зарегистрироваться!')
    }
  }
)

export const signout = createAsyncThunk('user/signout', async (_, thunkAPI) => {
  try {
    await $host.post(ApiEndPoints.Auth.SignOut)
    return null
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось выйти')
  }
})

export const getUser = createAsyncThunk('user/getuser', async (_, thunkAPI) => {
  try {
    const response = await $host.get<User[]>(ApiEndPoints.Auth.UserInfo)
    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось получить данные пользователя')
  }
})
