import {configureStore} from '@reduxjs/toolkit';
import configurationReducer from './features/configuration/configuration';
import productReducer from './features/product/product';

export const store = configureStore({
  reducer: {
    configuration: configurationReducer,
    product: productReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;  
export type AppDispatch = typeof store.dispatch;