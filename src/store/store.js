import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import clientReducer from './slices/clientSlice';
import serviceReducer from './slices/serviceSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    clients: clientReducer,
    services: serviceReducer,
  },
});