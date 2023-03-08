import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { User } from '../../../utils/interfaces/User'
import { user } from '../../../mock/user'
import { signIn } from '../../../api/userApi'
// import { login } from '../../../api/userApi'

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
    // login(state) {
    //   state.user.user = user
    // },
    logout(state) {
      state.user.user = null
    },
  },
  extraReducers: {
    // [signIn.pending.type]: (state, action) => {
    //   console.log('login.pending.type = ', state)
    //   console.log('login.pending.type = ', action)
    //   state.user = {
    //     status: 'loading',
    //     data: {},
    //     error: {},
    //   }
    // },
    [signIn.fulfilled.type]: (state, action) => {
      console.log('login.fulfilled.type = ', state.user)
      console.log('login.fulfilled.type = ', action)
      state.user = {
        loading: true,
        user: {},
        error: action.payload,
      }
    },
    [signIn.rejected.type]: (state, action) => {
      console.log('login.rejected.type = ', state.user)
      console.log('login.rejected.type = ', action)
      state.user = {
        status: 'idle',
        data: {},
        error: action.payload,
      }
    },
  },
})

export const authReducer = authSlise.reducer
// export const { login, logout } = authSlise.actions
