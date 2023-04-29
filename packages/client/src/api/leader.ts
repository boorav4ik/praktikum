import { createAsyncThunk } from '@reduxjs/toolkit'
import host from './config'
import { ApiEndPoints } from './config'

export const GetLeaderBoard = createAsyncThunk(
  'getLeaderBoard',
  async (data: any, thunkAPI) => {
    try {
      const response = await host.post<any>(
        ApiEndPoints.LeaderBoard.GetTeam,
        data
      )
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось получить данные лидерборда')
    }
  }
)

export const UpdateUserLeader = createAsyncThunk(
  'UpdateUserLeader',
  async (data: any, thunkAPI) => {
    try {
      const response = await host.post<any[]>(
        ApiEndPoints.LeaderBoard.UpdateUserInfo,
        data
      )
      console.log(response.data)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось обновить данные пользователя')
    }
  }
)
