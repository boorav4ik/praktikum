import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../../utils/interfaces/User'
import { user } from '../../../mock/user'

export type AuthState = {
  loading: boolean
  user: User | null
  error?: string
}

const initialState: AuthState = { loading: false, user: null }

export const authSlise = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.user = user
    },
    logout(state) {
      state.user = null
    },
  },
})

export const authReducer = authSlise.reducer
export const { login, logout } = authSlise.actions
