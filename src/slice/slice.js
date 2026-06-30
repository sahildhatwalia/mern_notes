import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to cart
    addtocart: (state, action) => {
      state.items.push(action.payload);
    },

    // Remove item from cart by id
    removetocart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },
    

    // Clear entire cart
    clearcart: (state) => {
      state.items = [];
    },
  },
});

export const { addtocart, removetocart, clearcart } = cartSlice.actions;

export default cartSlice.reducer;