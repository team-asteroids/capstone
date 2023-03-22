// import slices
import groupSliceReducer from '../slices/groupsSlice';
import groupDetailsSliceReducer from '../slices/groupDetailsSlice';
const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    allGroups: groupSliceReducer,
    groupDetails: groupDetailsSliceReducer,
  },
});

export default store;
