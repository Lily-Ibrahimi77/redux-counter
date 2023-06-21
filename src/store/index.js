import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Redux/CounterReducer';
import authReducer from '../Redux/AuthReducer';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
