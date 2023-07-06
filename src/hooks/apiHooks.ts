import {useState, useEffect} from 'react';
import axios from 'axios';

interface Configuration { 
    id: string;
    logo: string;
    mainColor: string;
    hasUserSection: boolean;
}


const URl = 'https://api-test.innoloft.com';

export const useConfiguration = (appId: string) => {
  console.log(appId)
    const [configuration, setConfiguration] = useState<Configuration | null>(null);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchConfiguration = async() => {
            try {
                const response = await axios.get(`${URl}/configuration/${appId}/`);
                setConfiguration(response.data);
            } catch (error) {
                setError(error);
            }
        }
        fetchConfiguration();
    }, [appId]);

  return {configuration, error};
 
}