import {useState, useEffect} from 'react';
import axios from 'axios';

import { Configuration } from '../interfaces/configurationInterface';
import { IProduct } from '../interfaces/productInterface';



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
    const [getProduct, setGetProduct] = useState<IProduct | null>(null);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchProducts = async() => {
            try {
                const response = await axios.get(`${URl}/product/6781/`);                
                setGetProduct(response.data);
            } catch (error) {
                setError(error);
            }
        }
        fetchProducts();
    }, []);

  return {getProduct, error};
 
}

export const useGetTRL = () => {
    const [getTRL, setGetTRL] = useState<any>(null);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchTRL = async() => {
            try {
                const response = await axios.get(`${URl}/trl/`);
                console.log(response.data);
                setGetTRL(response.data);
            } catch (error) {
                setError(error);
            }
        }
        fetchTRL();
    }, []);

  return {getTRL, error};
 
}

export const postProductUpdate = async(description: string) => {
    
    try {
        const response = await axios.post(`${URl}/product/6781/`, {
            description: description
        });
        
    } catch (error) {
        console.log(error);
    }
}
