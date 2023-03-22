import eventsReducer from '../slices/eventsSlice';
const { configureStore } = require('@reduxjs/toolkit');
// import slices

const store = configureStore({
  reducer: {
    events: eventsReducer,
  },
});

export default store;
