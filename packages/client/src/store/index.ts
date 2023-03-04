import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers'

export const store = configureStore({
  reducer: rootReducer,
})

// export type TState = ReturnType<typeof store.getState>
// export type TDispatch = typeof store.dispatch
