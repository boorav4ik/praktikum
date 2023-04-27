import { createAsyncThunk } from '@reduxjs/toolkit'
import { Login, SignUp, SignUpOAuth, User } from 'storeAuth/interfaces'
import host, { ApiEndPoints } from './config'

export const signin = createAsyncThunk(
  'user/signin',
  async (loginData: Login, thunkAPI) => {
    try {
      await host.post(ApiEndPoints.Auth.SignIn, loginData)
      const response = await host.get<User[]>(ApiEndPoints.Auth.UserInfo)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось авторизоваться')
    }
  }
)

export const signup = createAsyncThunk(
  'user/signup',
  async (signUpData: SignUp, thunkAPI) => {
    try {
      await host.post(ApiEndPoints.Auth.SignUp, signUpData)
      const response = await host.get<User[]>(ApiEndPoints.Auth.UserInfo)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось зарегистрироваться!')
    }
  }
)

export const signout = createAsyncThunk('user/signout', async (_, thunkAPI) => {
  try {
    await host.post(ApiEndPoints.Auth.SignOut)
    return null
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось выйти')
  }
})

export const getServiceId = async (redirectUri: string) => {
  try {
    const res = await host.get<{ service_id: string }>(`${ApiEndPoints.OAuth.getId}?redirect_uri=${encodeURI(redirectUri)}`)
    const { service_id } = res.data
    return service_id
  } catch (e) {
    throw new Error('Не удалось получить id service')
  }
}

export const signinOauth = createAsyncThunk('oauth/yandex', async (redirectUri:string, thunkAPI) => {
  try {
    if (!redirectUri)
      redirectUri = 'http://localhost:3000'
    const service_id = await getServiceId(redirectUri)
    console.log('service_id ', service_id)
    await host.post<string>(`${ApiEndPoints.OAuth.SignUp}`, {
      "code": service_id,
      "redirect_uri": redirectUri
    },{
      withCredentials: true,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const response = await host.get<User[]>(ApiEndPoints.Auth.UserInfo)
    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось авторизоваться')
  }
})