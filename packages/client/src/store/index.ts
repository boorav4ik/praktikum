import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './slices'
import type { AuthState } from 'storeAuth/index'
import { IUserService } from 'storeAuth/interfaces'

export function createStore(service: IUserService,preloadedState?: RootState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware({
        thunk: {
          extraArgument: service,
        },
      })
    }
  })
}

export type RootState = {
  auth: AuthState
}

export type AppDispatch = ReturnType<typeof createStore>['dispatch']
