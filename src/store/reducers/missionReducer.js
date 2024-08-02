import { createSlice } from '@reduxjs/toolkit'

const missionSlice = createSlice({
  name: 'missions',
  initialState: [], // Initial state is an empty array of missions
  reducers: {
    // Set the missions state to the payload
    setMissions(state, action) {
      return action.payload
    },
    // Add a new mission to the state
    addMission(state, action) {
      state.push(action.payload)
    },
    // Add other reducers as needed
  },
})

// Export actions to be used in components
export const { setMissions, addMission } = missionSlice.actions

// Export the reducer to be included in the store
export default missionSlice.reducer
