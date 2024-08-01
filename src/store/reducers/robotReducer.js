import { createSlice } from '@reduxjs/toolkit';

const robotSlice = createSlice({
  name: 'robots',
  initialState: [],
  reducers: {
    setRobots(state, action) {
      return action.payload;
    },
    addRobot(state, action) {
      state.push(action.payload);
    },
    // Add other reducers as needed
  },
});

export const { setRobots, addRobot } = robotSlice.actions;
export default robotSlice.reducer;