import { createAsyncThunk } from '@reduxjs/toolkit'
import host from './config'
import { ChangePasswordProps, FileProps, IUserService, User } from 'storeAuth/interfaces'
import { ApiEndPoints } from './config'

export const GetUser = createAsyncThunk('user/getuser',
  // try {
  //   const response = await host.get<User[]>(ApiEndPoints.Auth.UserInfo)
  //   return response.data
  // } catch (e) {
  //   return thunkAPI.rejectWithValue('Не удалось получить данные пользователя')
  // }
  async (_, thunkApi) => {
    const service: IUserService = thunkApi.extra as IUserService
    return service.getCurrentUser()
  }
)

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

export interface UserRepository {
  getCurrent(): Promise<User>
}

export class UserService {
  constructor(private _repo: UserRepository) {}
  getCurrentUser() {
    return this._repo.getCurrent()
  }
}
