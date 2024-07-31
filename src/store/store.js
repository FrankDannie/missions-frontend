import { configureStore } from '@reduxjs/toolkit';
import robotReducer from './reducers/robotReducer';

const store = configureStore({
  reducer: {
    robots: robotReducer,
  },
  // No need to add middleware here; redux-thunk is included by default
});

export default store;
