import { configureStore } from '@reduxjs/toolkit'
import missionReducer from './missionReducer'
import robotReducer from './robotReducer'

// Configure the Redux store with reducers for missions and robots
const store = configureStore({
  reducer: {
    missions: missionReducer, // Reducer for managing missions state
    robots: robotReducer, // Reducer for managing robots state
  },
})

export default store
