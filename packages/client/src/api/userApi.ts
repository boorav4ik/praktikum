import { createAsyncThunk } from '@reduxjs/toolkit'
import $host from '.'
import { User } from '../utils/interfaces/User'
import { API_ENDPOINTS } from './config'

interface Login {
  login: string
  password: string
}

export const signin = createAsyncThunk(
  'user/signin',
  async ({ login, password }: Login, thunkAPI) => {
    try {
      const responseStatus = await $host.post(API_ENDPOINTS.AUTH.SIGNIN, {
        login,
        password,
      })
      console.log('responseStatus = ', responseStatus)
      const response = await $host.get<User[]>(API_ENDPOINTS.AUTH.USER_INFO)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось авторизоваться')
    }
  }
)
