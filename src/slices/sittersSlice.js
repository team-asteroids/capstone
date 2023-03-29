import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllSitters = createAsyncThunk(
  'allSitters',
  async (x, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/sitters');
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

export const fetchSingleSitterReviews = createAsyncThunk(
  'sitterReviews',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/sitters/${id}/reviews`);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchSingleSitterRatings = createAsyncThunk(
  'sitterRatings',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/sitters/${id}/ratings`);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const fetchSitterNames = createAsyncThunk(
  'fetch/searchSitters',
  async (name, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/sitters/name', {
        params: {
          name: name,
        },
      });
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchSitterBookings = createAsyncThunk(
  'sitterBookings',
  async ({ id, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/sitters/${id}/bookings`, {
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

export const fetchSingleSitterBooking = createAsyncThunk(
  'singleSitterBooking',
  async ({ id, bookingId, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/api/sitters/${id}/bookings/${bookingId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const editSitterBooking = createAsyncThunk(
  'editSitterBooking',
  async ({ id, bookingId, token, bookingForm }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `/api/sitters/${id}/bookings/${bookingId}`,
        bookingForm,
        {
          headers: {
            authorization: token,
          },
        }
      );
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchSitterClients = createAsyncThunk(
  'fetchClients',
  async ({ id, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/sitters/${id}/clients`, {
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

export const fetchSingleClient = createAsyncThunk(
  'fetchClient',
  async ({ id, token, userId }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/sitters/${id}/clients/${userId}`, {
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

export const sittersSlice = createSlice({
  name: 'sitters',
  initialState: {
    sitters: [],
    singleSitter: {},
    // add clients, preferences, etc
    sitterReviews: [],
    sitterRatings: [],
    sitterBookings: [],
    sitterBooking: {},
    clients: [],
    client: {},
    error: '',
    status: '',
  },
  reducers: {
    resetSitterStatus: (state) => {
      state.error = '';
      state.status = '';
      // state.sitterBooking = {};
    },
    resetSingleBooking: (state) => {
      state.sitterBooking = {};
    },
  },
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
        state.singleSitter = payload || {};
        state.status = 'fulfilled';
        state.error = '';
      })
      .addCase(fetchSingleSitter.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSingleSitter.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(fetchSingleSitterReviews.fulfilled, (state, { payload }) => {
        state.sitterReviews = payload || {};
        state.status = 'fulfilled';
        state.error = '';
      })
      .addCase(fetchSingleSitterReviews.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSingleSitterReviews.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(fetchSingleSitterRatings.fulfilled, (state, { payload }) => {
        state.sitterRatings = payload || {};
        state.status = 'fulfilled';
        state.error = '';
      })
      .addCase(fetchSingleSitterRatings.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSingleSitterRatings.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(fetchSitterNames.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.sitters = payload;
      })
      .addCase(fetchSitterNames.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSitterNames.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(fetchSitterBookings.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.sitterBookings = payload;
      })
      .addCase(fetchSitterBookings.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSitterBookings.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(fetchSingleSitterBooking.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.sitterBooking = payload;
      })
      .addCase(fetchSingleSitterBooking.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSingleSitterBooking.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(editSitterBooking.fulfilled, (state, { payload }) => {
        state.sitterBooking = payload;
        state.status = 'fulfilled';
        state.error = '';
      })
      .addCase(editSitterBooking.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(editSitterBooking.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(fetchSitterClients.fulfilled, (state, { payload }) => {
        state.clients = payload.clientsAndStatus;
        state.status = 'fulfilled';
        state.error = '';
      })
      .addCase(fetchSitterClients.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSitterClients.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(fetchSingleClient.fulfilled, (state, { payload }) => {
        state.client = payload;
        state.status = 'fulfilled';
        state.error = '';
      })
      .addCase(fetchSingleClient.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSingleClient.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      });
  },
});

export const { resetSitterStatus, resetSingleBooking } = sittersSlice.actions;

export const selectSitters = (state) => state.sitters;
export const selectSingleSitter = (state) => state.sitters.singleSitter;

export default sittersSlice.reducer;
