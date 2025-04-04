import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ Async Thunk: User Login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:4300/api/v1/auth/login", userData);
      localStorage.setItem("token", response.data.token); // Store token
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.msg || "Login failed");
    }
  }
);

// ✅ Async Thunk: User Signup
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:4300/api/v1/auth/signup", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.msg || "Signup failed");
    }
  }
);

// ✅ Initial State
const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
};

// ✅ Create Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token"); // Remove token
    },
  },
  extraReducers: (builder) => {
    builder
      // ✅ Login Cases
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // ✅ Signup Cases
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// ✅ Export Actions & Reducer
export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
