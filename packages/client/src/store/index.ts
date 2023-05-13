import { configureStore } from '@reduxjs/toolkit'
import { authApi } from 'servises/auth'
// import { rootReducer } from './slices'

export const store = configureStore({
  // reducer: rootReducer,
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: gDM => gDM().concat(authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
