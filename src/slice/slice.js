import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtocart:{

    },
    removetocart:{

    },
    clearcart:{

    }
   
  
  },
})


export const { addtocart, removetocart, clearcart } = cartSlice.actions

export default cartSlice.reducer