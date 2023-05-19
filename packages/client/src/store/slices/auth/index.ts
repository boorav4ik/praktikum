import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GetUser, ChangeProfile, ChangeAvatar } from 'api/user'
import { signin, signout, signup } from 'api/auth'
import { Nullable } from 'utils/nullableType'
import { ChangeTheme, User } from './interfaces'

export type AuthState = {
  user: Nullable<User>
  userData: Nullable<User>
  editStatus: string
  isLoading: boolean
  error?: string
}

const initialState: AuthState = {
  user: null,
  userData: null,
  editStatus: 'info',
  isLoading: false,
}

export const authSlise = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUserData(state, action) {
      state.userData = action.payload
    },
    updateEditStatus(state, action) {
      state.editStatus = action.payload
    },
  },
  extraReducers: {
    [signin.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isLoading = false
      state.error = ''
      state.user = action.payload
      state.userData = action.payload
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
      state.userData = action.payload
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
      state.userData = action.payload
    },
    [signout.pending.type]: state => {
      state.isLoading = true
    },
    [signout.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    [GetUser.fulfilled.type]: (state, action: PayloadAction<ChangeTheme>) => {
      state.isLoading = false
      state.error = ''
      const { user, theme } = action.payload
      state.user = user
      state.userData = user
      localStorage.setItem('theme', theme.theme ?? 'light')
    },
    [GetUser.pending.type]: state => {
      state.isLoading = true
    },
    [GetUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    [ChangeProfile.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isLoading = false
      state.error = ''
      state.user = action.payload
    },
    [ChangeProfile.pending.type]: state => {
      state.isLoading = true
    },
    [ChangeProfile.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    [ChangeAvatar.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isLoading = false
      state.error = ''
      state.user = action.payload
    },
    [ChangeAvatar.pending.type]: state => {
      state.isLoading = true
    },
    [ChangeAvatar.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const authReducer = authSlise.reducer
export const { updateUserData, updateEditStatus } = authSlise.actions
