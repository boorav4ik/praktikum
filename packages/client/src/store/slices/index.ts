import { authReducer } from './auth'
import { leaderReducer } from './leader'
import { forumReducer } from './forum'

export const rootReducer = {
  auth: authReducer,
  leader: leaderReducer,
  forum: forumReducer,
}
