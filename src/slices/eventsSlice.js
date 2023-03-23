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
  console.log('inside thunk', data);
  return data;
});

export const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
    singleEvent: {},
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
      });
  },
});

export const selectEvents = (state) => state.events;
export const selectSingleEvent = (state) => state.events.singleEvent;

export default eventsSlice.reducer;
