import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    bookings: {},
    status: '',
    error: '',
  },
  reducers: {
    resetBookingStatus: (state) => {
      state.status = '';
      state.error = '';
    },
  },
  extraReducers: (builder) => {},
});

export const { resetBookingStatus } = bookingSlice.actions;

export const selectBooking = (state) => state.booking;

export default bookingSlice.reducer;
