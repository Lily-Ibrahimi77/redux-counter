import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    reset(state) {
      state.counter = 0;
    },
    toggleShowCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const { increment, decrement, increase, reset, toggleShowCounter } =
  counterSlice.actions;
export default counterSlice.reducer;
