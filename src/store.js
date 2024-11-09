import { configureStore } from '@reduxjs/toolkit';
import flavorReducer from './reducers/flavorSlice';

export const store = configureStore({
  reducer: {
    flavor: flavorReducer,
  },
});
