import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

import authReducer from '../features/auth/authSlice';
import adopcionesReducer from '../features/adopciones/adopcionesSlice';
import donacionesReducer from '../features/donaciones/donacionesSlice';
import mascotasReducer from '../features/mascotas/mascotasSlice';
import refugiosReducer from '../features/refugios/refugiosSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    adopciones: adopcionesReducer,
    donaciones: donacionesReducer,
    mascotas: mascotasReducer,
    refugios: refugiosReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});