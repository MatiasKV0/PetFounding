import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  adopcionList: [],
};

export const adopcionesSlice = createSlice({
  name: 'adopciones',
  initialState,
  reducers: {
    addAdopcion: (state, action) => {
      state.adopcionList.push(action.payload);
    },
  },
});

export const { addAdopcion } = adopcionesSlice.actions;
export default adopcionesSlice.reducer;