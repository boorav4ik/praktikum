import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getLeaderBoard } from 'api/leader'
import { Record } from './interfaces'

export type AuthState = {
  leaderData: Record[]
  isLoading: boolean
  error?: string
}

const initialState: AuthState = {
  leaderData: [],
  isLoading: false,
}

export const leaderSlise = createSlice({
  name: 'leader',
  initialState,
  reducers: {
    updateLeaders(state, action) {
      state.leaderData = action.payload
    },
  },
  extraReducers: {
    [getLeaderBoard.fulfilled.type]: (
      state,
      action: PayloadAction<[Record] | []>
    ) => {
      state.isLoading = false
      state.error = ''
      state.leaderData = action.payload
    },
    [getLeaderBoard.pending.type]: state => {
      state.isLoading = true
    },
    [getLeaderBoard.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const leaderReducer = leaderSlise.reducer
export const { updateLeaders } = leaderSlise.actions
