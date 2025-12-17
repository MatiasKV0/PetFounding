import { apiSlice } from './apiSlice';

export const donacionesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getDonaciones: builder.query({
      query: (filters) => `/donaciones?${new URLSearchParams(filters).toString()}`,
      providesTags: ['Donaciones'],
    }),

    getDonacionById: builder.query({
      query: (id) => `/donaciones/${id}`,
    }),

    createDonacion: builder.mutation({
      query: (newDonacion) => ({
        url: '/donaciones',
        method: 'POST',
        body: newDonacion,
      }),
      invalidatesTags: ['Donaciones'],
    }),

  }),
});

export const { 
    useGetDonacionesQuery, 
    useGetDonacionByIdQuery, 
    useCreateDonacionMutation 
} = donacionesApi;