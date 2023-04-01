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

export const editEventAsync = createAsyncThunk(
  '/editEvent',
  async ({ id, formData }) => {
    const token = window.localStorage.getItem('token');
    const { data } = await axios.put(
      `/api/events/${id}`,
      {
        event_start: formData.eventStart,
        event_end: formData.eventEnd,
        zip_code: formData.zipCode,
        topic: formData.topic,
        description: formData.description,
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

export const deleteEventAsync = createAsyncThunk('/deleteEvent', async (id) => {
  const token = window.localStorage.getItem('token');
  const { data } = await axios.delete(`/api/events/${id}`, {
    headers: {
      authorization: token,
    },
  });
  return data;
});

export const getMyRsvpsAsync = createAsyncThunk('/getRSVPs', async (id) => {
  const token = window.localStorage.getItem('token');
  const { data } = await axios.get(`/api/events/attending/${id}`, {
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
  async (term, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/events/name', {
        params: {
          search: term,
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
      .addCase(editEventAsync.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        state.singleEvent = payload;
      })
      .addCase(editEventAsync.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(editEventAsync.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
      })
      .addCase(deleteEventAsync.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.error = '';
        // what should we do with payload?
      })
      .addCase(deleteEventAsync.pending, (state, { payload }) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(deleteEventAsync.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload;
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
        state.error = payload;
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
        state.events.push(payload);
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
