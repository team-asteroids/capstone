import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from '../slices/eventsSlice';
import groupSliceReducer from '../slices/groupsSlice';
import groupDetailsSliceReducer from '../slices/groupDetailsSlice';
import authSlice from '../slices/authSlice';
import bookingsSlice from '../slices/bookingsSlice';
import sittersSlice from '../slices/sittersSlice';
import usersSlice from '../slices/usersSlice';
import sitterSlice from '../slices/sittersSlice';

const store = configureStore({
  reducer: {
    events: eventsReducer,
    groups: groupSliceReducer,
    groupDetails: groupDetailsSliceReducer,
    auth: authSlice,
    bookings: bookingsSlice,
    sitters: sittersSlice,
    users: usersSlice,
    sitters: sitterSlice,
  },
});

export default store;
