import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import ProductsReducer from "../features/productsSlice/productsSlice";
import cartReducer from "../features/cartSlice/cartSlice";

const store = configureStore({
  reducer: { auth: authReducer, products: ProductsReducer, cart: cartReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
