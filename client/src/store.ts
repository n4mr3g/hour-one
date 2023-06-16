import { configureStore } from '@reduxjs/toolkit'
import { offersReducer, userInfoReducer } from './reducers.tsx'

export const storeApp = configureStore({
  reducer: {
    offers: offersReducer,
    userInfo: userInfoReducer,
  }
})

export type RootState = ReturnType<typeof storeApp.getState>
export type AppDispatch = typeof storeApp.dispatch