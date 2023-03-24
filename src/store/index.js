import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from '../slices/eventsSlice';
import groupSliceReducer from '../slices/groupsSlice';
import groupDetailsSliceReducer from '../slices/groupDetailsSlice';
import authSlice from '../slices/authSlice';
import bookingsSlice from '../slices/bookingsSlice';

const store = configureStore({
  reducer: {
    events: eventsReducer,
    groups: groupSliceReducer,
    groupDetails: groupDetailsSliceReducer,
    auth: authSlice,
    bookings: bookingsSlice,
  },
});

export default store;
