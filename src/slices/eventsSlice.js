import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllEvents = createAsyncThunk('/getAllEvents', async () => {
  const { data } = await axios.get('/api/events');

  return data;
});

export const fetchSingleEvent = createAsyncThunk(
  '/getEvent',
  async (eventId) => {
    const { data } = await axios.get(`/api/events/${eventId}`);

    return data;
  }
);

export const createEventAsync = createAsyncThunk(
  '/addEvent',
  async ({ eventStart, eventEnd, topic, description, zipCode }) => {
    const token = window.localStorage.getItem('token');
    const { data } = await axios.post(
      '/api/events',
      {
        event_start: eventStart,
        event_end: eventEnd,
        zip_code: zipCode,
        topic: topic,
        description: description,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data;
  }
);

export const getMyRsvpsAsync = createAsyncThunk('/getRSVPs', async () => {
  const token = window.localStorage.getItem('token');
  const { data } = await axios.get('/api/events/attending', {
    headers: {
      authorization: token,
    },
  });
  return data;
});

export const addRsvpAsync = createAsyncThunk('/addRSVP', async (eventId) => {
  const token = window.localStorage.getItem('token');
  const { data } = await axios.post(
    '/api/events/attending',
    { eventId: eventId },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return data;
});

export const removeRsvpAsync = createAsyncThunk('/removeRSVP', async (id) => {
  const token = window.localStorage.getItem('token');
  const { data } = await axios.delete(`/api/events/attending/${id}`, {
    headers: {
      authorization: token,
    },
  });
  console.log('inside thunk', data);
  return data;
});

export const fetchEventNames = createAsyncThunk(
  'fetch/searchEvents',
  async (name, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/events/name', {
        params: {
          topic: name,
        },
      });
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
    singleEvent: {},
    myRSVPs: [],
    error: '',
    status: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllEvents.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.events = payload;
      })
      .addCase(fetchAllEvents.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchAllEvents.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(fetchSingleEvent.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.singleEvent = payload;
      })
      .addCase(fetchSingleEvent.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchSingleEvent.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(addRsvpAsync.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        return;
      })
      .addCase(addRsvpAsync.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(addRsvpAsync.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(getMyRsvpsAsync.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.myRSVPs = payload;
      })
      .addCase(getMyRsvpsAsync.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(getMyRsvpsAsync.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(removeRsvpAsync.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        return;
      })
      .addCase(removeRsvpAsync.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(removeRsvpAsync.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
      })
      .addCase(fetchEventNames.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.events = payload;
      })
      .addCase(fetchEventNames.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchEventNames.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload.message;
       })
      .addCase(createEventAsync.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.events = payload;
      })
      .addCase(createEventAsync.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(createEventAsync.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
      });
  },
});

export const selectEvents = (state) => state.events;
export const selectSingleEvent = (state) => state.events.singleEvent;
export const selectMyRsvps = (state) => state.events.myRSVPs;

export default eventsSlice.reducer;
