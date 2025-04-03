import { configureStore } from '@reduxjs/toolkit';
import signupReducer from '../slices/signUpSlice.js';

const store = configureStore({
  reducer: {
    signup: signupReducer,
  },
});

export default store;
