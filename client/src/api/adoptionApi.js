import { apiSlice } from './apiSlice';

export const adoptionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getAdoptions: builder.query({
      query: (filters) => `/adoptions?${new URLSearchParams(filters).toString()}`,
      providesTags: ['Adoption'],
    }),

    getAdoptionById: builder.query({
      query: (id) => `/adoptions/${id}`,
    }),

    getPendingAdoptions: builder.query({
      query: () => '/adoptions/pendientes',
      providesTags: ['Adoption'],
    }),

    createAdoption: builder.mutation({
      query: (newAdoption) => ({
        url: '/adoptions',
        method: 'POST',
        body: newAdoption,
      }),
      invalidatesTags: ['Adoption'],
    }),

    updateAdoptionStatus: builder.mutation({
        query: ({ id, status }) => ({
            url: `/adoptions/${id}/estado`,
            method: 'PUT',
            body: { status },
        }),
        invalidatesTags: ['Adoption'],
    }),
    
  }),
});

export const { 
    useGetAdoptionsQuery, 
    useGetAdoptionByIdQuery, 
    useCreateAdoptionMutation, 
    useUpdateAdoptionStatusMutation,
} = adoptionApi;