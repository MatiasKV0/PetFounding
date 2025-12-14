import { apiSlice } from './apiSlice';

export const mascotasApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMascotas: builder.query({
      query: (filters) => `/mascotas?${new URLSearchParams(filters).toString()}`,
      providesTags: ['Mascotas'],
    }),
    getMascotaById: builder.query({
      query: (id) => `/mascotas/${id}`,
    }),
    createMascota: builder.mutation({
      query: (newMascota) => ({
        url: '/mascotas',
        method: 'POST',
        body: newMascota,
      }),
      invalidatesTags: ['Mascotas'],
    }),
  }),
});


export const { useGetMascotasQuery, useGetMascotaByIdQuery, useCreateMascotaMutation } = mascotasApi;