import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import mascotasReducer from '../features/mascotas/mascotasSlice';

export const store = configureStore({
  reducer: {
    mascotas: mascotasReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});