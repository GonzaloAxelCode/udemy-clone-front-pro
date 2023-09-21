import { configureStore } from "@reduxjs/toolkit";
import { customMiddlewares } from "./middlewares";
import { appReducers, customReducers } from "./reducers";

export const store = configureStore({
  reducer: {
    ...customReducers,
    ...appReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customMiddlewares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
