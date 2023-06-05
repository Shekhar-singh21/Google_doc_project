import { configureStore } from '@reduxjs/toolkit';
import toolkitListReducer from './slices/textAreaslice'


const store = configureStore({
  reducer: {
    toolkitList: toolkitListReducer,
  },
});

export default store;
