import { authReducer } from './auth'
import { forumReducer } from './forum'

export const rootReducer = {
  auth: authReducer,
  forum: forumReducer,
}
