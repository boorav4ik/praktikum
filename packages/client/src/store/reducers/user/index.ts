import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../../utils/interfaces/User'
import { user } from '../../../mock/user'

const initialUserState: { user: User | null } = { user: null }

export const userSlise = createSlice({
  name: 'User',
  initialState: initialUserState,
  reducers: {
    login(state) {
      state.user = user
    },
    logout(state) {
      state.user = null
    },
  },
})

console.log({ userSlise })

export const userReducer = userSlise.reducer
export const { login, logout } = userSlise.actions
