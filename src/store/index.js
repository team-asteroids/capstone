import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from '../slices/eventsSlice';
import groupSliceReducer from '../slices/groupsSlice';
import authSlice from '../slices/authSlice';
import bookingsSlice from '../slices/bookingsSlice';
import sittersSlice from '../slices/sittersSlice';
import usersSlice from '../slices/usersSlice';
import petsSlice from '../slices/petsSlice';
import postsSlice from '../slices/postsSlice';

const store = configureStore({
  reducer: {
    events: eventsReducer,
    groups: groupSliceReducer,
    auth: authSlice,
    bookings: bookingsSlice,
    sitters: sittersSlice,
    users: usersSlice,
    pets: petsSlice,
    posts: postsSlice,
  },
});

export default store;
