import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

import authReducer from '../features/auth/authSlice';
import adoptionReducer from '../features/adoption/adoptionSlice';
import donationReducer from '../features/donation/donationSlice';
import petsReducer from '../features/pets/petsSlice';
import shelterReducer from '../features/shelter/shelterSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    adoption: adoptionReducer,
    donation: donationReducer,
    pets: petsReducer,
    shelter: shelterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});