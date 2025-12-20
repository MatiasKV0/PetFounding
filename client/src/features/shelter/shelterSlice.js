import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeFilters: {
    ubicacion: '',
    page: 1,
  },
};

export const shelterSlice = createSlice({
  name: 'shelters',
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

export const { setFilter, setPage } = shelterSlice.actions;
export default shelterSlice.reducer;