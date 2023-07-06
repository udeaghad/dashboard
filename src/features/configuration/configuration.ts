import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Configuration } from "../../interfaces/configurationInterface";

interface ConfigurationState {
  configuration: Configuration 
}

const initialState: ConfigurationState = {
  configuration: {
    id: '1',
    logo: 'https://img.innoloft.com/logo.svg',
    mainColor: '#272e71',
    hasUserSection: true
}
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
    