import React,{useEffect} from 'react';
import { Routes, Route } from 'react-router-dom'; 

import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import { useConfiguration } from './hooks/apiHooks';
import { configurationActions } from './features/configuration/configuration';
import { useAppDispatch } from './hooks/storeHooks';


const App = () => {
  const dispatch = useAppDispatch();
  const appId = process.env.REACT_APP_APP_ID || '1';

  const { configuration } = useConfiguration(appId);

  useEffect(() => {
    dispatch(configurationActions.setConfiguration(configuration));
  }, [configuration, dispatch]);

  return (
    <div>      <Header />
      
      <Routes>
        <Route path="/" element={<Main />} /> 
      </Routes>    
    </div>
  );
}

export default App;
