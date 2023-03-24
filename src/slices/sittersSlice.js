import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllSitters = createAsyncThunk(
  'allSitters',
  async (x, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/users');
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchSingleSitter = createAsyncThunk(
  'singleSitter',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/sitters/${id}`);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const sitterSlice = createSlice({
  name: 'sitter',
  initialState: {
    allSitters: [],
    singleSitter: {},
    // allSitterClients: [],
    // singleSitterClient: {},
    status: '',
    error: '',
  },
  reducers: {
    resetSitterStatus: (state) => {
      state.status = '';
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSitters.fulfilled, (state, { payload }) => {
        state.allSitters = payload || [];
        state.status = 'success';
        state.error = '';
      })
      .addCase(fetchAllSitters.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchAllSitters.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(fetchSingleSitter.fulfilled, (state, { payload }) => {
        state.singleSitter = payload || {};
        state.status = 'success';
        state.error = '';
      })
      .addCase(fetchSingleSitter.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSingleSitter.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      });
  },
});

export const { resetSitterStatus } = sitterSlice.actions;

export const selectSitter = (state) => state.users;

export default sitterSlice.reducer;
