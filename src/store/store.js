import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './reducers/missionReducer';
import robotReducer from './reducers/robotReducer';

const store = configureStore({
  reducer: {
    missions: missionReducer,
    robots: robotReducer,
  },
  // No need to add middleware here; redux-thunk is included by default
});

export default store;
