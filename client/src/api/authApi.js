import { apiSlice } from './apiSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    createUser: builder.mutation({
      query: (newUser) => ({
        url: '/auth/register ',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['Users'],
    }),

    loginUser: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),

    getUserProfile: builder.query({
      query: () => '/users/profile',
      providesTags: ['Users'],
    }),

  }),
});


export const { 
  useCreateUserMutation, 
  useLoginUserMutation, 
  useGetUserProfileQuery 
} = authApi;