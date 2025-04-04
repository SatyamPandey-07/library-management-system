import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullname: '',
  surname: '',
  feesReceiptNo: '',
  email: '',
  idCardImage: null, // Store preview URL instead of File object
  error: '',
  submit: false,
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    updateFileField: (state, action) => {
      const { field, file } = action.payload;
      state[field] = URL.createObjectURL(file); // Store image preview URL
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSubmit: (state, action) => {
      state.submit = action.payload;
    },
    resetSignupForm: () => initialState, // Reset form after successful signup
  },
});

export const { updateField, updateFileField, setError, setSubmit, resetSignupForm } =
  signupSlice.actions;

export default signupSlice.reducer;
