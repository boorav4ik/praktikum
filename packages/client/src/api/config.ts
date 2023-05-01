import axios from 'axios'

export const baseUrl = import.meta.env.baseUrl

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
  Forum: {
    GetTheme: '/api/forum/theme',
    GetAllTopics: '/api/forum/topic',
    GetTopicByTheme: '/api/forum/topic/?id_theme=',
    CreateComment: '/api/forum/comment',
    CreateNewTopic: '/api/forum/topic',
    GetAllComments: '/api/forum/comment?id_topic=',
    DeleteTopic: '/api/forum/topic',
    DeleteComment: '/api/forum/comment',
  },
}

const host = axios.create({
  baseURL: ApiHost,
  withCredentials: true,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const serverhost = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default host
