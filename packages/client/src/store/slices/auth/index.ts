import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { signin } from '../../../api/userApi'
import { User } from './interfaces'

export type AuthState = {
  user: User | null
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
  reducers: {
    signout(state) {
      state.user = null
      state.isLoading = false
    },
    changeProfile(state, action) {
      state.user = { ...state.user, ...action.payload }
      state.isLoading = false
    },
  },
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
  },
})

export const authReducer = authSlise.reducer
// export const { signin, signout, changeProfile } = authSlise.actions
export const { signout, changeProfile } = authSlise.actions
