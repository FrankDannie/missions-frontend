import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missionReducer';
import robotReducer from './robotReducer';

const store = configureStore({
  reducer: {
    missions: missionReducer,
    robots: robotReducer,
  },
});

export default store;
