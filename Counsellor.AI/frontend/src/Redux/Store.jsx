// store.js

import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './Slice/Userslice';

const Store = configureStore({
  reducer: {
    auth: UserReducer,
    // Add other reducers as needed
  },
});

export default Store;
