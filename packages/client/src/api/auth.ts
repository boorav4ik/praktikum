import { createAsyncThunk } from '@reduxjs/toolkit'
import $host from '.'
import { Login, User } from '../store/slices/auth/interfaces'
import { ApiEndPoints } from './config'

export const signin = createAsyncThunk(
  'user/signin',
  async (loginData: Login, thunkAPI) => {
    try {
      await $host.post(ApiEndPoints.Auth.SignIn, loginData)
      const response = await $host.get<User[]>(ApiEndPoints.Auth.UserInfo)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось авторизоваться')
    }
  }
)

export const signup = createAsyncThunk(
  'user/signup',
  async (signUpData: User, thunkAPI) => {
    try {
      await $host.post(ApiEndPoints.Auth.SignUp, signUpData)
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