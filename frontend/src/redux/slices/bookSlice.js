import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/books"; // Updated API URL

// Fetch all books
export const fetchBooks = createAsyncThunk("books/fetchBooks", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Ensure backend sends an array
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Could not fetch books");
  }
});

// Add a new book
export const addBookAsync = createAsyncThunk("books/addBook", async (bookData, { rejectWithValue }) => {
  try {
    const response = await axios.post(API_URL, bookData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Failed to add book");
  }
});

// Update an existing book
export const updateBookAsync = createAsyncThunk("books/updateBook", async ({ id, updatedData }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    return { id, updatedData: response.data };
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Failed to update book");
  }
});

// Delete a book
export const deleteBookAsync = createAsyncThunk("books/deleteBook", async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || "Failed to delete book");
  }
});

const initialState = {
  books: [],
  loading: false,
  error: null,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Books
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add Book
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })

      // Update Book
      .addCase(updateBookAsync.fulfilled, (state, action) => {
        const index = state.books.findIndex((book) => book.id === action.payload.id);
        if (index !== -1) {
          state.books[index] = { ...state.books[index], ...action.payload.updatedData };
        }
      })

      // Delete Book
      .addCase(deleteBookAsync.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.id !== action.payload);
      });
  },
});

export default bookSlice.reducer;
