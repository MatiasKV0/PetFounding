import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  donationsList: [],
};

export const donationSlice = createSlice({
  name: 'donations',
  initialState,
  reducers: {
    addDonation: (state, action) => {
      state.donationsList.push(action.payload);
    },
  },
});

export const { addDonation } = donationSlice.actions;
export default donationSlice.reducer;