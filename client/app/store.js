import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import ProductsReducer from '../features/ProductsSlice/ProductsSlice';
import SingleProductReducer from '../features/ProductsSlice/SingleProductsSlice';
import allUsersSlice from '../features/UserSlice/allUsersSlice';


const store = configureStore({
  reducer: {
    allUsers: allUsersSlice,
    auth: authReducer,
    products: ProductsReducer,
    singleProduct: SingleProductReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice'; 
