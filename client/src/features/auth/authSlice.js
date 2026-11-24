
import { createSlice } from '@reduxjs/toolkit'

// Load saved authentication when the app starts
const loadAuthState = () => {
  try {
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('token')

    return {
      user,
      token,
      isLoggedIn: Boolean(user && token),
    }
  } catch (error) {
    return {
      user: null,
      token: null,
      isLoggedIn: false,
    }
  }
}

const initialState = loadAuthState()

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    login: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggedIn = true
    },

    logout: (state) => {
      state.user = null
      state.token = null
      state.isLoggedIn = false
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
