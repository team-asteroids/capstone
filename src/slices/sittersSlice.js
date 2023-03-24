import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllSitters = createAsyncThunk('/getAllSitters', async () => {
  const { data } = await axios.get('/api/sitters');

  return data;
});

export const fetchSingleSitter = createAsyncThunk(
  '/getSitter',
  async (sitterId) => {
    const { data } = await axios.get(`/api/sitters/${sitterId}`);

    return data;
  }
);

export const sittersSlice = createSlice({
  name: 'sitters',
  initialState: {
    sitters: [],
    singleSitter: {},
    // add clients, preferences, etc
    error: '',
    status: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSitters.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.sitters = payload;
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
        state.status = 'fulfilled';
        state.error = '';
        state.singleSitter = payload;
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

export const selectSitters = (state) => state.sitters;
export const selectSingleSitter = (state) => state.sitters.singleSitter;

export default sittersSlice.reducer;
