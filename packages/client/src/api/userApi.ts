import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { User } from '../utils/interfaces/User'
import { API_HOST, API_ENDPOINTS } from './config'

const $host = axios.create({
  baseURL: API_HOST,
})

axios.defaults.headers.common['Content-Type'] = 'application/json'

interface Login {
  login: string
  password: string
}

export const signIn = createAsyncThunk(
  API_ENDPOINTS.AUTH.SIGNIN,
  (login, password) => {
    console.log('login = ', login)
    console.log('password = ', password)
    password = 'qwe123QWE!'
    $host
      .post<User>(API_ENDPOINTS.AUTH.SIGNIN, {
        login,
        password,
      })
      .then(response => {
        console.log('res = ', response)
        return response.data
      })
      .catch(error => error)
  }
)

// export const signIn = createAsyncThunk(
//   API_ENDPOINTS.AUTH.SIGNIN,
//   async (login, password) => {
//     return await $host.post<User>(API_ENDPOINTS.AUTH.SIGNIN, {
//       login,
//       password,
//     })
//     // .then(response => response)
//     // .catch(error => error)
//   }
