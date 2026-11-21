
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})

// Save cart changes to localStorage
store.subscribe(() => {
  const cartItems = store.getState().cart.items

  localStorage.setItem('cartItems', JSON.stringify(cartItems))
})
