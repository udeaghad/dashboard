import React, { useState, useEffect,useRef } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

import { IProduct} from '../../interfaces/productInterface';
import {useAppSelector, useAppDispatch} from '../../hooks/storeHooks';
import EditProductCard from '../../components/ProductCard/EditProductCard';
import { postProductUpdate } from '../../hooks/apiHooks';
import { productActions } from '../../features/product/product';
import CompanyCard from '../../components/CompanyCard/CompanyCard';
import EditVideoPlayer from '../../components/VideoPlayer/EditVideoPlayer';
import EditOfferDetails from '../../components/OfferDetails/EditOfferDetails';
import { useGetTRL } from '../../hooks/apiHooks';
import DesktopMenu from '../../components/DesktopMenu/DesktopMenu';


const EditProduct = () => {

  const dispatch = useAppDispatch(); 

  const { getTRL} = useGetTRL();

  const { product: {product}, configuration: {configuration} } = useAppSelector((state) => state);
  const [changed, setChanged ] = useState<boolean>(false)
  const [editDescription, setEditDescription] = useState('')
  const [tempProduct, setTempProduct] = useState<IProduct | null>(null);
  
  const [ selectedTRL, setSelectedTRL ] = useState<{id: string; name: string} | null>(null)




  useEffect(() => {
    if (getTRL && product) {
      setSelectedTRL(getTRL[product.trl.id-1])                          
    } 
  }, [getTRL, product])
    
  
  useEffect(() => {
    if (product) {
      setTempProduct(product);
    }
  }, [product]);

  
  useEffect(() => {
    setChanged(true)
  }, [editDescription])

  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '', 
  })

  const containerStyle = {
    width: '95%',
    height: '50vh'
  };

  const [map, setMap] = useState<any>(null)

  const [center, setCenter] = useState({
    lat: 0,
    lng: 0,
  })

  useEffect(() => {
    if (product) {
      setCenter({
        lat: Number(product.company.address.latitude),
        lng: Number(product.company.address.longitude),
      })
    }
  }, [product])

   const handleUpdateDescription = () => {
    if (!tempProduct) return;
    postProductUpdate({description: editDescription})   
    dispatch(productActions.updateProduct({...tempProduct, description: editDescription}))
    setChanged(false);
  };


  const videoRef = useRef<HTMLInputElement>(null);

  const handleVideoLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!tempProduct) return;
    if (videoRef.current) { 
      const videoLink = videoRef.current.value;
      if (videoLink === tempProduct.video) return;
      if (videoLink === '') return;
      dispatch(productActions.updateProduct({...tempProduct, video: videoLink}));
      postProductUpdate({video: videoLink})
    }
    
  };

  const categoriesRef = useRef<HTMLInputElement>(null);

  const handleAddCategory = (e: React.KeyboardEvent<HTMLElement>) => {
    
    if (!tempProduct) return; 
    if (categoriesRef.current && e.key === 'Enter'){      
      if (categoriesRef.current.value === '') return;
      const category = {id: Date.now(), name: categoriesRef.current.value};
      dispatch(productActions.updateProduct({...tempProduct, categories: [...tempProduct.categories, category]}));
      postProductUpdate({categories: [...tempProduct.categories, category]})
    }
  };
  const businessModelRef = useRef<HTMLInputElement>(null);

  const handleAddBusinessModel = (e: React.KeyboardEvent<HTMLElement>) => {
    
    if (!tempProduct) return; 
    if (businessModelRef.current && e.key === 'Enter'){      
      if (businessModelRef.current.value === '') return;
      const businessModel = {id: Date.now(), name: businessModelRef.current.value};
      dispatch(productActions.updateProduct({...tempProduct, businessModels: [...tempProduct.businessModels, businessModel]}));
      postProductUpdate({businessModels: [...tempProduct.businessModels, businessModel]})
    }
  };

  useEffect(() => {
    if (!tempProduct) return; 
    if (!selectedTRL) return;
    if (selectedTRL.name === tempProduct.trl.name) return;
    dispatch(productActions.updateProduct({...tempProduct, trl: selectedTRL}));
    postProductUpdate({trl: selectedTRL})
  }, [selectedTRL, tempProduct, dispatch])

  const handeDeleteCategory = (id: number) => {                                   
    if (!tempProduct) return; 
    const newCategories = tempProduct.categories.filter((category) => category.id !== id);
    dispatch(productActions.updateProduct({...tempProduct, categories: newCategories}));
  };

  const handleDeleteBusinessModel = (id: number) => {
    if (!tempProduct) return;
    const newBusinessModels = tempProduct.businessModels.filter((businessModel) => businessModel.id !== id);  
    dispatch(productActions.updateProduct({...tempProduct, businessModels: newBusinessModels}));              
  };
  

  
  return (
    <div className="bg-gray-200">
      <div className="lg:flex lg:gap-2">
        <div className="hidden lg:block lg:w-[20%]">
          {product &&
            <DesktopMenu {...product}/>        
          }
        </div>

        <div>

          <div className="md:flex md:justify-end">
            <div className="md:max-w-[60%]">
              {product &&
                <EditProductCard 
                {...product}
                setEditDescription={setEditDescription}
                handleUpdateDescription={handleUpdateDescription}
                changed={changed}
                />         
              }  
            </div>

            <div className="md:max-w-[40%] md:mr-5">
              {product &&
                <CompanyCard 
                  {...product}
                  isLoaded={isLoaded}
                  map={map}
                  setMap={setMap}
                  center={center}
                  containerStyle={containerStyle}
                  GoogleMap={GoogleMap}
                  Marker={Marker}
                  showMap={false}
                  configuration={configuration}
                />          
              }

            </div>
          </div>
        </div>
      </div>


      <div className='md:flex md:justify-end'>
        <div className='md:max-w-5xl md:w-full md:mr-20'>
          {product &&
            <EditVideoPlayer 
              {...product}
              handleVideoLinkChange={handleVideoLinkChange}
              videoRef={videoRef}
            />
          }
        </div>
      </div>

      <div>
        {product &&
          <EditOfferDetails 
            {...product}
            handleAddCategory={handleAddCategory}
            categoriesRef={categoriesRef}
            businessModelRef={businessModelRef}
            handleAddBusinessModel={handleAddBusinessModel}
            getTRL={getTRL}
            selectedTRL={selectedTRL} 
            setSelectedTRL={setSelectedTRL} 
            handeDeleteCategory={handeDeleteCategory}
            handleDeleteBusinessModel={handleDeleteBusinessModel}
          />
        }
      </div>
    </div>
  )
}

export default EditProduct;