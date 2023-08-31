import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {gamesApi} from '../services/games'
import filterReducer from './reducers/filterReducer'
export const store = configureStore({
  reducer: {
    [gamesApi.reducerPath]: gamesApi.reducer,
    filters: filterReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(gamesApi.middleware)
})
