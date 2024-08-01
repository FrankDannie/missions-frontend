import { createSlice } from '@reduxjs/toolkit';

const missionSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    setMissions(state, action) {
      return action.payload;
    },
    addMission(state, action) {
      state.push(action.payload);
    },
    // Add other reducers as needed
  },
});

export const { setMissions, addMission } = missionSlice.actions;
export default missionSlice.reducer;
