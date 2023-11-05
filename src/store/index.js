import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cart-slice';

const store = configureStore({
  reducer: { cart: cartSlice.reducer }
});

export {updateCart, addItemToCart,updateQuanlity } from './cart-slice';
export default store;