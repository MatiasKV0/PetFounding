import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeFilters: {
    especie: 'todos',
    edad: 'cualquiera',
    ubicacion: '',
    page: 1,
  },
};

export const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.activeFilters[action.payload.key] = action.payload.value;
      state.activeFilters.page = 1;
    },
    setPage: (state, action) => {
      state.activeFilters.page = action.payload;
    },
  },
});

export const { setFilter, setPage } = petsSlice.actions;
export default petsSlice.reducer;