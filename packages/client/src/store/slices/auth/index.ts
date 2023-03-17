import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getUser, changeProfile, changeAvatar } from '../../../api/user'
import { signin, signout, signup } from '../../../api/auth'
import { Nullable } from '../../../utils/nullableType'
import { User } from './interfaces'

export type AuthState = {
  user: Nullable<User>
  isLoading: boolean
  error?: string
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
}

export const authSlise = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [signin.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isLoading = false
      state.error = ''
      state.user = action.payload
    },
    [signin.pending.type]: state => {
      state.isLoading = true
    },
    [signin.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    [signup.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isLoading = false
      state.error = ''
      state.user = action.payload
    },
    [signup.pending.type]: state => {
      state.isLoading = true
    },
    [signup.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },

    [signout.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isLoading = false
      state.error = ''
      state.user = action.payload
    },
    [signout.pending.type]: state => {
      state.isLoading = true
    },
    [signout.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    [getUser.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isLoading = false
      state.error = ''
      state.user = action.payload
    },
    [getUser.pending.type]: state => {
      state.isLoading = true
    },
    [getUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    [changeProfile.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isLoading = false
      state.error = ''
      state.user = action.payload
    },
    [changeProfile.pending.type]: state => {
      state.isLoading = true
    },
    [changeProfile.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    [changeAvatar.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isLoading = false
      state.error = ''
      state.user = action.payload
    },
    [changeAvatar.pending.type]: state => {
      state.isLoading = true
    },
    [changeAvatar.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const authReducer = authSlise.reducer
