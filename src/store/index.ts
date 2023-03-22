import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducer";

const isDev = process.env.NODE_ENV === "development";

const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware(),
    devTools: isDev,
  });
};

const store = makeStore();

const wrapper = createWrapper(makeStore);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default wrapper;
