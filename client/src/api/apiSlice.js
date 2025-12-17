import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/api/v1` }), 
  tagTypes: ['Mascotas', 'Adopciones', 'Donaciones', 'Users'],
  endpoints: (builder) => ({
    // Endpoints serán inyectados en otros archivos
  }),
});