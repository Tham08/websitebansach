import { configureStore } from '@reduxjs/toolkit';

import cartslice from '../app/slices/cartslice';
export const store = configureStore({
  reducer: {
    cart: cartslice,
  },
})
export default store;
