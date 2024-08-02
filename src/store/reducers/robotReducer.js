import { createSlice } from '@reduxjs/toolkit'

const robotSlice = createSlice({
  name: 'robots',
  initialState: [], // Initial state is an empty array of robots
  reducers: {
    // Set the robots state to the payload
    setRobots(state, action) {
      return action.payload
    },
    // Add a new robot to the state
    addRobot(state, action) {
      state.push(action.payload)
    },
    // Add other reducers as needed
  },
})

// Export actions to be used in components
export const { setRobots, addRobot } = robotSlice.actions

// Export the reducer to be included in the store
export default robotSlice.reducer
