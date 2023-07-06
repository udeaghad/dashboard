import {configureStore} from '@reduxjs/toolkit';
import configurationReducer from './features/configuration/configuration';

export const store = configureStore({
  reducer: {
    configuration: configurationReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;  
export type AppDispatch = typeof store.dispatch;