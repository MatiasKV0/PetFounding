import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeFilters: {
    especie: 'todos',
    edad: 'cualquiera',
    ubicacion: '',
    page: 1,
  },
};

export const mascotasSlice = createSlice({
  name: 'mascotas',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      // { payload: { key: 'especie', value: 'perro' } }
      state.activeFilters[action.payload.key] = action.payload.value;
      state.activeFilters.page = 1;
    },
    setPage: (state, action) => {
      state.activeFilters.page = action.payload;
    },
  },
});

export const { setFilter, setPage } = mascotasSlice.actions;
export default mascotasSlice.reducer;