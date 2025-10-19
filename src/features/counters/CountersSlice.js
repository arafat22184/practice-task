import { createSlice } from "@reduxjs/toolkit";

const countersSlice = createSlice({
  name: "Counters",
  initialState: [
    {
      id: 1,
      value: 0,
    },
  ],
  reducers: {
    increment: (state, action) => {
      const counterIndex = state.findIndex((c) => c.id === action.payload);

      state[counterIndex].value++;
    },
    decrement: (state, action) => {
      const counterIndex = state.findIndex((c) => c.id === action.payload);

      state[counterIndex].value--;
    },
  },
});

export default countersSlice.reducer;
export const { increment, decrement } = countersSlice.actions;
