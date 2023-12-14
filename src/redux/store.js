import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./filterSlicer";
import { productsApi } from "./productsSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
    // filter,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    productsApi.middleware,
  ],
});
