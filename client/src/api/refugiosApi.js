import { apiSlice } from './apiSlice';

export const refugiosApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getRefugios: builder.query({
      query: (filters) => `/refugios?${new URLSearchParams(filters).toString()}`,
      providesTags: ['Refugios'],
    }),

    getRefugioById: builder.query({
      query: (id) => `/refugios/${id}`,
    }),

    createRefugio: builder.mutation({
      query: (newRefugio) => ({
        url: '/refugios',
        method: 'POST',
        body: newRefugio,
      }),
      invalidatesTags: ['Refugios'],
    }),

    updateRefugio: builder.mutation({
      query: ({ id, ...updatedFields }) => ({
        url: `/refugios/${id}`,
        method: 'PUT',
        body: updatedFields,
      }),
      invalidatesTags: ['Refugios'],
  }),

  }),
});


export const { 
  useGetRefugiosQuery, 
  useGetRefugioByIdQuery, 
  useCreateRefugioMutation, 
  useUpdateRefugioMutation
} = refugiosApi;