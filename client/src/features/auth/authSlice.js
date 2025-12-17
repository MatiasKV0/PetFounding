import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    role: 'guest', // roles: 'guest', 'user', 'admin'
    user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      console.log(action);
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.role = 'guest';
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;