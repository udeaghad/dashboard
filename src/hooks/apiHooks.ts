import {useState, useEffect} from 'react';
import axios from 'axios';

import { Configuration } from '../interfaces/configurationInterface';



const URl = 'https://api-test.innoloft.com';

export const useConfiguration = (appId: string) => {  
    const [configuration, setConfiguration] = useState<Configuration>({
      id: '1',
      logo: 'https://img.innoloft.com/logo.svg',
      mainColor: '#272e71',
      hasUserSection: true
  });
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

export const useProduct = () => {
    const [product, setProduct] = useState<any>(null);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchProducts = async() => {
            try {
                const response = await axios.get(`${URl}/product/6781/`);
                
                setProduct(response.data);
            } catch (error) {
                setError(error);
            }
        }
        fetchProducts();
    }, []);

  return {product, error};
 
}