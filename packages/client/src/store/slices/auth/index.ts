import { createSlice } from '@reduxjs/toolkit'
import { User } from './interfaces'
import { user } from './mockUser'

type authState = {
  user: User | null
  isLoading: boolean
  error?: string
}

const initialState: authState = {
  user: null,
  isLoading: false,
}

export const authSlise = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signin(state, action) {
      console.log(action.payload)
      state.user = user
      state.isLoading = false
    },
    signout(state) {
      state.user = null
      state.isLoading = false
    },
    change(state, action) {
      state.user = { ...state.user, ...action.payload }
      state.isLoading = false
    },
  },
})

export const authReducer = authSlise.reducer
export const { signin, signout, change } = authSlise.actions
