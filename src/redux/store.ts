import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/reducers/auth";
import navReducer from "../redux/reducers/nav";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    nav: navReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
