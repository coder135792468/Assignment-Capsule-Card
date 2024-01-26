import { configureStore } from "@reduxjs/toolkit";
import { capsuleSlice } from "./slices/capsuleSlice";
import { capsuleApi } from "./slices/capsuleApiSlice";

export const store = configureStore({
  reducer: {
    capsule: capsuleSlice.reducer,
    [capsuleApi.reducerPath]: capsuleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([capsuleApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
