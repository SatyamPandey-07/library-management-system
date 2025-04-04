import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavoriteBook: (state, action) => {
      if (!state.favorites.some((book) => book.id === action.payload.id)) {
        state.favorites.push(action.payload);
      }
    },
    removeFavoriteBook: (state, action) => {
      state.favorites = state.favorites.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addFavoriteBook, removeFavoriteBook } = favoritesSlice.actions;
export default favoritesSlice.reducer;
