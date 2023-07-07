import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../interfaces/productInterface'



const initialState = {
  product: null as IProduct | null,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<any>) => ({...state, product: action.payload})
  },
})

export const productActions = productSlice.actions

export default productSlice.reducer