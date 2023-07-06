import React,{useEffect} from 'react';
import { useConfiguration } from '../../hooks/apiHooks';
import { configurationActions } from '../../features/configuration/configuration';
import { useAppDispatch } from '../../hooks/storeHooks';

const Main = () => {
  const dispatch = useAppDispatch();
  const appId = process.env.REACT_APP_APP_ID || '1';

  const { configuration } = useConfiguration(appId);

  useEffect(() => {
    console.log(configuration);
    dispatch(configurationActions.setConfiguration(configuration));
  }, [configuration, dispatch]);
  
  return (
    <div>Main</div>
  )
}

export default Main