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

const Product = () => {
  const dispatch = useAppDispatch()
  const {product}  = useAppSelector(state => state.product)

  const { getProduct } = useProduct()

  useEffect(() => {
    console.log(getProduct)
    dispatch(productActions.setProduct(getProduct))
  }, [getProduct, dispatch])

  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '', 
    libraries: ['places']   
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
      <div className="mx-2 py-5">
        <EditButton />
      </div>

      <div className="md:flex md:justify-end md:mr-20">
        <div className="md:max-w-xl">
          {product &&
            <ProductCard {...product}/>         
          }          
        </div>

        <div className="md:max-w-md">
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
            />          
          }

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