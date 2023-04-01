import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const sitterAuthSlice = createSlice({
  name: 'sitterAuth',
  initialSate: {
    sitterAuth: {},
  },
  reducers: {
    resetSitterAuth: (state) => {
      state.sitterAuth = {};
    },
  },
  // extraReducers: (builder) => {},
});

export const selectSitterAuth = (state) => state.sitterAuth;

export default sitterAuthSlice.reducer;
