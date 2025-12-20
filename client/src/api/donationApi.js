import { apiSlice } from './apiSlice';

export const donationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getDonations: builder.query({
      query: (filters) => `/donations?${new URLSearchParams(filters).toString()}`,
      providesTags: ['Donations'],
    }),

    getDonationById: builder.query({
      query: (id) => `/donations/${id}`,
    }),

    createDonation: builder.mutation({
      query: (newDonation) => ({
        url: '/donations',
        method: 'POST',
        body: newDonation,
      }),
      invalidatesTags: ['Donations'],
    }),

  }),
});

export const { 
    useGetDonationsQuery, 
    useGetDonationByIdQuery, 
    useCreateDonationMutation 
} = donationApi;