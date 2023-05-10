import { createAsyncThunk } from '@reduxjs/toolkit'
import host from './config'
import { ApiEndPoints } from './config'
import { Record, dataGetRecord } from '../store/slices/leader/interfaces'

export const getLeaderBoard = createAsyncThunk(
  'getLeaderBoard',
  async (data: dataGetRecord, thunkAPI) => {
    try {
      const response = await host.post<Record[]>(
        ApiEndPoints.LeaderBoard.GetTeam,
        data
      )
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось получить данные лидерборда')
    }
  }
)

export const updateUserLeader = createAsyncThunk(
  'UpdateUserLeader',
  async (data: Record, thunkAPI) => {
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
