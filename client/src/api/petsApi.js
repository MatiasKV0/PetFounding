import { apiSlice } from './apiSlice';

export const mascotasApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getPets: builder.query({
      query: (filters) => `/pets?${new URLSearchParams(filters).toString()}`,
      providesTags: ['Pets'],
    }),

    getPetById: builder.query({
      query: (id) => `/pets/${id}`,
    }),

    createPet: builder.mutation({
      query: (newPet) => ({
        url: '/pets',
        method: 'POST',
        body: newPet,
      }),
      invalidatesTags: ['Pets'],
    }),

    updatePet: builder.mutation({
      query: ({ id, ...updatedFields }) => ({
        url: `/pets/${id}`,
        method: 'PUT',
        body: updatedFields,
      }),
      invalidatesTags: ['Pets'],
  }),

  }),
});


export const { 
  useGetPetsQuery, 
  useGetPetByIdQuery, 
  useCreatePetMutation, 
  useUpdatePetMutation
} = mascotasApi;