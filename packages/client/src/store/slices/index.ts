import { authReducer } from './auth'
import { leaderReducer } from './leader'

export const rootReducer = {
  auth: authReducer,
  leader: leaderReducer,
}
