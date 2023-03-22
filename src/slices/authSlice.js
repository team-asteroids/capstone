import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const logIn = createAsyncThunk(
  'login',
  async (credentials, { rejectWithValue }) => {
    try {
      let { data } = await axios.post('/api/auth/login', credentials);
      localStorage.setItem('token', data.token);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    userAuth: {},
    error: '',
    status: '', // pending, fulfilled, failed
  },
  reducers: {
    resetAuthStatus: (state) => {
      state.status = '';
      state.error = '';
    },
    logOut: (state) => {
      state.auth = {};
      state.token = '';
      state.status = '';
      localStorage.clear();
    },
    extraReducers: (builder) => {
      builder
        .addCase(logIn.fulfilled, (state, { payload }) => {
          state.token = payload.token;
          state.status = 'success';
          state.error = '';
        })
        .addCase(logIn.pending, (state, { payload }) => {
          state.status = 'loading';
          state.error = '';
        })
        .addCase(logIn.rejected, (state, { payload }) => {
          state.status = 'failed';
          state.error = payload.message;
        });
    },
  },
});

export const { resetAuthStatus, logOut } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
