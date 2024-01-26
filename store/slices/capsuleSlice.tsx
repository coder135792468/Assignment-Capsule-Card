import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const capsuleSlice = createSlice({
  name: "capsule",
  initialState: initialState,
  reducers: {
    addCapsule: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addCapsule } = capsuleSlice.actions;
export { capsuleSlice };
