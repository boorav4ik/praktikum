import { createAsyncThunk } from '@reduxjs/toolkit'
import $host from '.'
import { User } from '../utils/interfaces/User'
import { API_ENDPOINTS } from './config'

interface Login {
  login: string
  password: string
}

interface SignUp {
  first_name: string
  second_name: string
  display_name: string
  login: string
  email: string
  password: string
  phone: string
}

export const signin = createAsyncThunk(
  'user/signin',
  async ({ login, password }: Login, thunkAPI) => {
    try {
      await $host.post(API_ENDPOINTS.AUTH.SIGNIN, {
        login,
        password,
      })
      const response = await $host.get<User[]>(API_ENDPOINTS.AUTH.USER_INFO)
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
      await $host.post(API_ENDPOINTS.AUTH.SIGNUP, {
        first_name,
        second_name,
        display_name,
        login,
        email,
        password,
        phone,
      })
      const response = await $host.get<User[]>(API_ENDPOINTS.AUTH.USER_INFO)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось зарегистрироваться!')
    }
  }
)

export const signout = createAsyncThunk('user/signout', async (_, thunkAPI) => {
  try {
    await $host.post(API_ENDPOINTS.AUTH.SIGNOUT)
    return null
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось выйти')
  }
})

export const getUser = createAsyncThunk('user/getuser', async (_, thunkAPI) => {
  try {
    const response = await $host.get<User[]>(API_ENDPOINTS.AUTH.USER_INFO)
    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось получить данные пользователя')
  }
})
