import { apiSlice } from './apiSlice';

export const adopcionesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getAdopciones: builder.query({
      query: (filters) => `/adopciones?${new URLSearchParams(filters).toString()}`,
      providesTags: ['Adopciones'],
    }),

    getAdopcionById: builder.query({
      query: (id) => `/adopciones/${id}`,
    }),

    getAdopcionesPendientes: builder.query({
      query: () => '/adopciones/pendientes',
      providesTags: ['Adopciones'],
    }),

    createAdopcion: builder.mutation({
      query: (newAdopcion) => ({
        url: '/adopciones',
        method: 'POST',
        body: newAdopcion,
      }),
      invalidatesTags: ['Adopciones'],
    }),

    updateAdocionStatus: builder.mutation({
        query: ({ id, status }) => ({
            url: `/adopciones/${id}/estado`,
            method: 'PUT',
            body: { status },
        }),
        invalidatesTags: ['Adopciones'],
    }),
    
  }),
});

export const { 
    useGetAdopcionesQuery, 
    useGetAdopcionByIdQuery, 
    useCreateAdopcionMutation, 
    useUpdateAdopcionStatusMutation,
} = adopcionesApi;