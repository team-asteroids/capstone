import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllBookings = createAsyncThunk(
  'allBookings',
  async ({ id, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/users/${id}/bookings`, {
        headers: {
          authorization: token,
        },
      });
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState: {
    allBookings: [],
    singleBooking: {},
    allSitters: [],
    singleSitter: {},
    status: '',
    error: '',
  },
  reducers: {
    resetBookingStatus: (state) => {
      state.status = '';
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBookings.fulfilled, (state, { payload }) => {
        state.allBookings = payload || [];
        state.status = 'success';
        state.error = '';
      })
      .addCase(fetchAllBookings.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchAllBookings.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      });
  },
});

export const { resetBookingStatus } = bookingsSlice.actions;

export const selectBookings = (state) => state.bookings;

export default bookingsSlice.reducer;
