import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from '../slices/eventsSlice';
import groupSliceReducer from '../slices/groupsSlice';
import authSlice from '../slices/authSlice';
import bookingsSlice from '../slices/bookingsSlice';
import sittersSlice from '../slices/sittersSlice';
import usersSlice from '../slices/usersSlice';

const store = configureStore({
  reducer: {
    events: eventsReducer,
    groups: groupSliceReducer,
    auth: authSlice,
    bookings: bookingsSlice,
    sitters: sittersSlice,
    users: usersSlice,
  },
});

export default store;
