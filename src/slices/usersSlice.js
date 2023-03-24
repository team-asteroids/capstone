import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllUsers = createAsyncThunk(
  'allUsers',
  async (x, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/users');
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchSingleUser = createAsyncThunk(
  'singleUser',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/users/${id}`);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const editSingleUser = createAsyncThunk(
  'editSingleUser',
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const token = window.localStorage.getItem('token');
      if (!token) return {};
      const { data } = await axios.put(`/api/users/${id}`, formData, {
        headers: {
          authorization: token,
        },
      });
      // console.log('data--> ', data);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.fulfilled, (state, { payload }) => {
        state.allUsers = payload || [];
        state.status = 'success';
        state.error = '';
      })
      .addCase(fetchAllUsers.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchAllUsers.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(fetchSingleUser.fulfilled, (state, { payload }) => {
        state.singleUser = payload || {};
        state.status = 'success';
        state.error = '';
      })
      .addCase(fetchSingleUser.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSingleUser.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(editSingleUser.fulfilled, (state, { payload }) => {
        state.singleUser = payload || {};
        state.status = 'success';
        state.error = '';
      })
      .addCase(editSingleUser.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(editSingleUser.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      });
  },
});

export const { resetUserStatus } = userSlice.actions;

export const selectUser = (state) => state.users;

export default userSlice.reducer;
