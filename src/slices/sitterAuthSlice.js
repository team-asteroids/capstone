import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export const fetchSitterAuth = createAsyncThunk(
  'fetchSitterAuth',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(API + `/api/sitters/${id}`);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const updateSitterAuth = createAsyncThunk(
  'updateSitter',
  async ({ id, token, formData }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(API + `/api/sitters/${id}`, formData, {
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

export const updateSitterAuthPrefs = createAsyncThunk(
  'updateSitterPrefs',
  async ({ id, token, prefsData }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        API + `/api/sitters/${id}/prefs`,
        prefsData,
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

// get all logged in user sitter's clients
export const fetchSitterAuthClients = createAsyncThunk(
  'fetchUserClients',
  async ({ id, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(API + `/api/sitters/${id}/clients`, {
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

// get single logged in user sitter's clients
export const fetchSitterAuthClient = createAsyncThunk(
  'fetchClient',
  async ({ id, token, userId }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        API + `/api/sitters/${id}/clients/${userId}`,
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

// get all bookings of logged in user sitter
// export const fetchSitterAuthBookings = createAsyncThunk();

export const fetchSitterAuthBookings = createAsyncThunk(
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

// get single booking of logged in user sitter

export const fetchSitterAuthBooking = createAsyncThunk(
  'singleSitterBooking',
  async ({ id, bookingId, token }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        API + `/api/sitters/${id}/bookings/${bookingId}`,
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

const sitterAuthSlice = createSlice({
  name: 'sitterAuth',
  initialState: {
    sitterAuth: {},
    sitterAuthClients: [],
    sitterAuthClient: {},
    sitterAuthBookings: [],
    sitterAuthBooking: {},
    error: '',
    status: '',
  },
  reducers: {
    sitterLogOut: (state) => {
      state.sitterAuth = {};
      state.sitterAuthClients = [];
      state.sitterAuthClient = {};
      state.sitterAuthBookings = [];
      state.sitterAuthBooking = {};
    },
    resetSitterAuth: (state) => {
      state.status = '';
      state.error = '';
    },
    resetSitterAuthClients: (state) => {
      state.sitterAuthClients = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSitterAuth.fulfilled, (state, { payload }) => {
        state.sitterAuth = payload || {};
        state.status = 'fulfilled';
        state.error = '';
      })
      .addCase(fetchSitterAuth.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSitterAuth.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(fetchSitterAuthClients.fulfilled, (state, { payload }) => {
        state.sitterAuthClients = payload.clientsAndStatus;
        state.status = 'fulfilled';
        state.error = '';
      })
      .addCase(fetchSitterAuthClients.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSitterAuthClients.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(fetchSitterAuthClient.fulfilled, (state, { payload }) => {
        state.sitterAuthClient = payload;
        state.status = 'fulfilled';
        state.error = '';
      })
      .addCase(fetchSitterAuthClient.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSitterAuthClient.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(updateSitterAuth.fulfilled, (state, { payload }) => {
        state.sitterAuth = payload;
        state.status = 'fulfilled';
        state.error = '';
      })
      .addCase(updateSitterAuth.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(updateSitterAuth.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(updateSitterAuthPrefs.fulfilled, (state, { payload }) => {
        state.sitterAuth = payload;
        state.status = 'fulfilled';
        state.error = '';
      })
      .addCase(updateSitterAuthPrefs.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(updateSitterAuthPrefs.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      });
  },
});

export const { resetSitterAuth, resetSitterAuthClients, sitterLogOut } =
  sitterAuthSlice.actions;

export const selectSitterAuth = (state) => state.sitterAuth;

export default sitterAuthSlice.reducer;
