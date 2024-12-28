import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart.slice";
import booksApi from "./apis/books.api";
import ordersApi from "./apis/orders.api";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware),
});
