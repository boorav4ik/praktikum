import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './slices'
import type { AuthState } from 'storeAuth/index'

export function createStore(preloadedState?: RootState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

export type RootState = {
  auth: AuthState
}

export type AppDispatch = ReturnType<typeof createStore>['dispatch']
