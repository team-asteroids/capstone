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

export const createNewBooking = createAsyncThunk(
  'newBooking',
  async ({ id, bookingDetails, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `/api/users/${id}/bookings`,
        bookingDetails,
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log(data);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const updateBooking = createAsyncThunk(
  'updateBooking',
  async ({ id, status, token, bookingId }, { rejectWithValue }) => {
    try {
      console.log(token, status, id, bookingId);
      const { data } = await axios.put(
        `/api/users/${id}/bookings/${bookingId}`,
        { status: status },
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log(data);
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
    newBooking: {},
    // allSitters: [],
    // singleSitter: {},
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
      })
      .addCase(createNewBooking.fulfilled, (state, { payload }) => {
        state.newBooking = payload || {};
        state.status = 'success';
        state.error = '';
      })
      .addCase(createNewBooking.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(createNewBooking.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(updateBooking.fulfilled, (state, { payload }) => {
        state.newBooking = payload || {};
        state.status = 'success';
        state.error = '';
      })
      .addCase(updateBooking.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(updateBooking.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      });
  },
});

export const { resetBookingStatus } = bookingsSlice.actions;

export const selectBookings = (state) => state.bookings;

export default bookingsSlice.reducer;
