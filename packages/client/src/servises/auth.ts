import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type * as Auth from 'storeAuth/interfaces'

const baseUrl = 'https://ya-praktikum.tech/api/v2/auth/'

type OrReason<T> = T | { reason: string }

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    signUp: builder.query<OrReason<Auth.User>, Auth.SignUp>({
      query: body => ({ url: 'signup', method: 'POST', body }),
    }),
    signIn: builder.mutation<OrReason<Auth.User>, Auth.Login>({
      query: body => ({ url: 'signin', method: 'POST', body }),
    }),
    user: builder.query<OrReason<Auth.User>, void>({
      query: () => 'user',
    }),
    logout: builder.query<OrReason<string>, void>({
      query: () => ({ url: 'logout', method: 'POST' }),
    }),
  }),
})

export const { useSignUpQuery, useSignInMutation, useUserQuery, useLogoutQuery } =
  authApi
