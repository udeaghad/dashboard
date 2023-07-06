import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Configuration {
  id: string;
  logo: string;
  mainColor: string;
  hasUserSection: boolean;
}


interface ConfigurationState {
  configuration: Configuration | null 
}

const initialState: ConfigurationState = {
  configuration: null,
}

const configurationSlice = createSlice({
  name: 'configuration',
  initialState,
  reducers: {
    setConfiguration: (state, action: PayloadAction<any>) => ({...state, configuration: action.payload})
  },  
})

export const configurationActions = configurationSlice.actions;

export default configurationSlice.reducer;
    