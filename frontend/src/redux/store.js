import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/bookSlice";
import signUpReducer from "./slices/signUpSlice";
import authReducer from "./slices/authSlice";
import favoritesReducer from "./slices/favoritesSlice"; // Import favorites slice

const store = configureStore({
  reducer: {
    books: bookReducer,
    signup: signUpReducer,
    auth: authReducer,
    favorites: favoritesReducer, // Add favorites reducer
  },
});

export default store;
