import React, {useEffect, useState} from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

import { useProduct } from '../../hooks/apiHooks'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import EditButton from '../../components/EditButton/EditButton';
import { productActions } from '../../features/product/product';
import ProductCard from '../../components/ProductCard/ProductCard';
import CompanyCard from '../../components/CompanyCard/CompanyCard';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import OfferDetails from '../../components/OfferDetails/OfferDetails';
import DesktopMenu from '../../components/DesktopMenu/DesktopMenu';

const Product = () => {
  const dispatch = useAppDispatch()
  const {product: {product}, configuration: {configuration}}  = useAppSelector(state => state)

  const { getProduct } = useProduct()


  useEffect(() => {
    if(!product){
      dispatch(productActions.setProduct(getProduct))
    }
  }, [getProduct, dispatch, product])

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

  return (
    <div className="bg-gray-200">

      <div className="lg:flex lg:gap-2">

        <div className="hidden lg:block lg:w-[20%]">
          {product &&
            <DesktopMenu {...product}/>        
          }
        </div>

        <div>

          <div className="mx-2 py-5">
            <EditButton />
          </div>

          <div className="md:flex md:justify-end">
            <div className="md:max-w-[60%]">
              {product &&
                <ProductCard {...product}/>         
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
                  showMap={true}
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
            <VideoPlayer {...product}/>
          }
        </div>
      </div>

      <div>
        {product &&
          <OfferDetails {...product}/>
        }
      </div>
    </div>
  )
}

export default Product;