import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//api interface

export interface ProductState {
  [key: string]: any
}

const initialState: ProductState = {
  product: null,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<any>) => ({...state, product: action.payload}),
  },
})

export const productActions = productSlice.actions

export default productSlice.reducer