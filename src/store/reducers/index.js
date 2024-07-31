import { configureStore } from '@reduxjs/toolkit';
import robotReducer from './robotReducer';

const store = configureStore({
  reducer: {
    robots: robotReducer,
  },
});

export default store;
