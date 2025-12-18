import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  adopcionList: [],
};

export const adoptionSlice = createSlice({
  name: 'adoption',
  initialState,
  reducers: {
    addAdopcion: (state, action) => {
      state.adopcionList.push(action.payload);
    },
  },
});

export const { addAdopcion } = adoptionSlice.actions;
export default adoptionSlice.reducer;