import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from '../slices/eventsSlice';
import groupSliceReducer from '../slices/groupsSlice';
import groupDetailsSliceReducer from '../slices/groupDetailsSlice';
import authSlice from '../slices/authSlice';

const store = configureStore({
  reducer: {
    events: eventsReducer,
    allGroups: groupSliceReducer,
    groupDetails: groupDetailsSliceReducer,
    auth: authSlice,
  },
});

export default store;
