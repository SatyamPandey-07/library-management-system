import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullname: '',
  surname: '',
  feesReceiptNo: '',
  email: '',
  idCardImage: null,
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
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSubmit: (state, action) => {
      state.submit = action.payload;
    },
  },
});

export const { updateField, setError, setSubmit } = signupSlice.actions;
export default signupSlice.reducer;
