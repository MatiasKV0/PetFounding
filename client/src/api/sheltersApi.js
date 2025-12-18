import { apiSlice } from './apiSlice';

export const sheltersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getShelters: builder.query({
      query: (filters) => `/shelters?${new URLSearchParams(filters).toString()}`,
      providesTags: ['Shelters'],
    }),

    getShelterById: builder.query({
      query: (id) => `/shelters/${id}`,
    }),

    createShelter: builder.mutation({
      query: (newShelter) => ({
        url: '/shelters',
        method: 'POST',
        body: newShelter,
      }),
      invalidatesTags: ['Shelters'],
    }),

    updateShelter: builder.mutation({
      query: ({ id, ...updatedFields }) => ({
        url: `/shelters/${id}`,
        method: 'PUT',
        body: updatedFields,
      }),
      invalidatesTags: ['Shelters'],
  }),

  }),
});


export const { 
  useGetSheltersQuery, 
  useGetShelterByIdQuery, 
  useCreateShelterMutation, 
  useUpdateShelterMutation
} = sheltersApi;