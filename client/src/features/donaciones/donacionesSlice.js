import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  donationsList: [],
};

export const donacionesSlice = createSlice({
  name: 'donaciones',
  initialState,
  reducers: {
    addDonation: (state, action) => {
      state.donationsList.push(action.payload);
    },
  },
});

export const { addDonation } = donacionesSlice.actions;
export default donacionesSlice.reducer;