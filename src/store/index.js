import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from '../slices/eventsSlice';
import groupSliceReducer from '../slices/groupsSlice';
import groupDetailsSliceReducer from '../slices/groupDetailsSlice';

const store = configureStore({
  reducer: {
    events: eventsReducer,
    groups: groupSliceReducer,
    groupDetails: groupDetailsSliceReducer,
  },
});

export default store;
