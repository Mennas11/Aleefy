
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
})

// Save cart and authentication changes to localStorage
store.subscribe(() => {
  const state = store.getState()

  // Save cart
  localStorage.setItem(
    'cartItems',
    JSON.stringify(state.cart.items)
  )

  // Save authentication
  if (state.auth.isLoggedIn) {
    localStorage.setItem('user', JSON.stringify(state.auth.user))
    localStorage.setItem('token', state.auth.token)
  } else {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }
})
