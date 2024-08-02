import { configureStore } from '@reduxjs/toolkit'
import missionReducer from './reducers/missionReducer'
import robotReducer from './reducers/robotReducer'

// Configure the Redux store
const store = configureStore({
  reducer: {
    // Reducer for managing missions state
    missions: missionReducer,
    // Reducer for managing robots state
    robots: robotReducer,
  },
  // No need to add middleware here; redux-thunk is included by default
})

export default store
