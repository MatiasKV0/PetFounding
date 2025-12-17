import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

import mascotasReducer from '../features/mascotas/mascotasSlice';
import authReducer from '../features/auth/authSlice';
import donacionesReducer from '../features/donaciones/donacionesSlice';
import adopcionesReducer from '../features/adopciones/adopcionesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    donaciones: donacionesReducer,
    mascotas: mascotasReducer,
    adopciones: adopcionesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});