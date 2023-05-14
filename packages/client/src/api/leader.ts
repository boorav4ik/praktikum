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
  async (
    data: { name: string | null | undefined; avatar: string; score: number },
    thunkAPI
  ) => {
    try {
      const response = await host.post<any[]>(
        ApiEndPoints.LeaderBoard.UpdateUserInfo,
        { data, ratingFieldName: 'score', teamName: 'saturn' }
      )
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось обновить данные пользователя')
    }
  }
)
