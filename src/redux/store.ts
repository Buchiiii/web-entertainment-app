import { combineReducers, configureStore } from "@reduxjs/toolkit";
import inputReducer from "./slices/input";
import authReducer from "./slices/auth-slice";
import { apiSlice } from "./api/api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: combineReducers({
    auth: authReducer,
    input: inputReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch);
