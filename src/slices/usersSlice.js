import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    allUsers: [],
    singleUser: {},
    status: '',
    error: '',
  },
  reducers: {
    resetUserStatus: (state) => {
      state.status = '';
      state.error = '';
    },
  },
  extraReducers: (builder) => {},
});

export const { resetUserStatus } = userSlice.actions;

export const selectUser = (state) => state.users;

export default userSlice.reducer;
