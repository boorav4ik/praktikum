import axios from 'axios'

export const ApiHost = 'https://ya-praktikum.tech/api/v2/'
export const AvatarHost = 'https://ya-praktikum.tech/api/v2/resources/'
export const ApiEndPoints = {
  Auth: {
    SignIn: 'auth/signin',
    SignUp: 'auth/signup',
    SignOut: 'auth/logout',
    UserInfo: 'auth/user',
  },
  User: {
    UpdatePassword: 'user/password',
    UpdateProfile: 'user/profile',
    UpdateProfileAvatar: 'user/profile/avatar',
    Search: 'user/search',
  },
  OAuth: {
    getId: 'oauth/yandex/service-id',
    SignUp: 'oauth/yandex',
  }
} as const

const host = axios.create({
  baseURL: ApiHost,
  withCredentials: true,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default host
