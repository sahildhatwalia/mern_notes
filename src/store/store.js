import { configureStore } from '@reduxjs/toolkit'
import Cartitem from "../slice/slice"
export const store = configureStore({
  reducer: {
 cart:Cartitem
  },
})